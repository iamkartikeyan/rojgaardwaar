const fs = require('fs');
const path = require('path');

if (!global.window || !global.window.ROZGAR_DATA) {
  global.window = global.window || {};
  require('../js/data.js');
}
const data = global.window.ROZGAR_DATA;

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function pick(arr, seed, offset = 0) {
  return arr[(seed + offset) % arr.length];
}

function buildDynamicOverview(job, stateObj, seed) {
  const org = escapeHtml(job.org);
  const shortOrg = escapeHtml(job.shortOrg);
  const posts = escapeHtml(job.posts);
  const qual = escapeHtml(job.qualificationText);
  const vac = job.vacancies.toLocaleString('en-IN');
  const lastDate = job.importantDates.lastDate;
  const startDate = job.importantDates.startDate;
  const state = escapeHtml(stateObj.name);

  const v1 = [
    `The administrative recruitment division of <strong>${org} (${shortOrg})</strong> has published an official employment notification inviting qualified Indian nationals to apply for <strong>${vac} sanctioned vacancies</strong> of <strong>${posts}</strong> for the 2026 recruitment session. This vacancy announcement represents a significant employment opportunity for aspirants possessing <strong>${qual}</strong> seeking career growth in <strong>${state}</strong>. Candidates are required to submit their online registration forms between <strong>${startDate}</strong> and <strong>${lastDate}</strong> via the official departmental recruitment portal. Appointees will be integrated into the permanent public sector workforce with structured service benefits.`,
    `A comprehensive recruitment advertisement has been released by <strong>${org}</strong> for selecting suitable applicants against <strong>${vac} active positions</strong> for <strong>${posts}</strong> across regional divisions. Candidates meeting the minimum benchmark criteria of <strong>${qual}</strong> can apply online through the centralized web gateway starting from <strong>${startDate}</strong> up to the closing deadline on <strong>${lastDate}</strong>. Appointed personnel will be stationed across institutional offices in <strong>${state}</strong> and allied departments nationwide, carrying statutory responsibilities and defined remuneration packages.`,
    `Official notifications have been promulgated by <strong>${org} (${shortOrg})</strong> to fill <strong>${vac} vacancies</strong> for <strong>${posts}</strong> during the current academic and recruitment cycle. Aimed at absorbing capable candidates with <strong>${qual}</strong>, the recruitment drive offers key postings in <strong>${state}</strong>. The online application link is operational from <strong>${startDate}</strong> and will officially terminate on <strong>${lastDate}</strong>. Applicants must ensure they fulfill all eligibility benchmarks prior to submission.`
  ];
  return pick(v1, seed, 1);
}

function buildDynamicOrgProfile(job, seed) {
  const c = job.category;
  const org = escapeHtml(job.org);
  const shortOrg = escapeHtml(job.shortOrg);

  if (c === 'police') {
    const p = [
      `${org} functions as the principal law enforcement and public security authority responsible for preserving civil peace, enforcing constitutional statutes, investigating criminal offenses, and maintaining civic tranquility across its operational jurisdiction. Operating dedicated wings including Special Armed Forces (SAF), Executive Field Units, Detective Intelligence Wings, and Cyber Patrols, ${shortOrg} provides rigorous training facilities, structured career increments, comprehensive police housing, and exceptional public service standing.`,
      `As a statutory state police establishment, ${org} oversees crime prevention, criminal justice enforcement, highway safety, and emergency public assistance. Serving in ${shortOrg} confers high social recognition, government housing benefits, executive medical cover under government health schemes, and structured promotions from executive ranks to supervisory roles.`
    ];
    return pick(p, seed, 2);
  }
  if (c === 'railway') {
    const r = [
      `${org} constitutes an essential operating zone of the Indian Railway network, managing extensive passenger transit corridors, freight operations, signaling automation, and rolling stock maintenance workshops. Personnel appointed to ${shortOrg} benefit from central railway residential townships, free railway travel passes, specialized railway hospital treatment, and stable Central Government pension security.`,
      `Operating under the Ministry of Railways, ${org} manages critical rail routes, locomotive engineering workshops, and divisional administrative networks. Employment in ${shortOrg} offers high job security, Seventh CPC central pay structures, travel concessions, and long-term career growth opportunities across all divisions.`
    ];
    return pick(r, seed, 3);
  }
  if (c === 'banking') {
    const b = [
      `${org} is a leading public sector scheduled commercial bank in India, playing a pivotal role in national credit disbursal, retail asset management, priority sector agricultural lending, and secure digital transaction infrastructure. Appointees in ${shortOrg} receive accelerated scale promotions, annual performance incentives, institutional loan concessions, and comprehensive medical coverage.`,
      `With a nationwide branch network and robust financial operations, ${org} delivers comprehensive banking services, international treasury operations, and digital banking platforms. Working at ${shortOrg} provides attractive bipartite wage settlements, leave fare concessions, and defined retirement gratuity benefits.`
    ];
    return pick(b, seed, 4);
  }
  if (c === 'psu') {
    const psu = [
      `${org} operates as a premier Maharatna / Navratna Central Public Sector Enterprise under the administrative purview of the Government of India, spearheading vital manufacturing, energy extraction, technological innovation, and national infrastructure projects. Employees receive competitive Industrial Dearness Allowance (IDA), Performance Related Pay (PRP), company townships, and comprehensive family medical health care.`,
      `Recognized among India's foremost commercial corporations, ${org} manages high-impact engineering ventures, energy refineries, and industrial production plants. Service in ${shortOrg} delivers prestige, state-of-the-art technological exposure, corporate housing, and fast-track executive promotion pathways.`
    ];
    return pick(psu, seed, 5);
  }
  if (c === 'teaching') {
    const t = [
      `${org} is a premier autonomous institution of national importance dedicated to academic excellence, faculty research, scholarly mentorship, and technological innovation. Faculty and instructional staff enjoy advanced laboratory infrastructure, research publication grants, conference sponsorships, and residential campus accommodations.`,
      `Dedicated to higher education and academic mentorship, ${org} fosters high-level research exploration, student development, and curriculum innovation. Appointees enjoy academic autonomy, institutional research funding, and structured promotion avenues under UGC / AICTE norms.`
    ];
    return pick(t, seed, 6);
  }
  const g = [
    `${org} is a statutory constitutional authority under the Government structure, mandated with executing public welfare initiatives, regulatory governance, citizen service delivery, and administrative infrastructure. The organization provides structured service conditions, regular promotions, and central government social security protections.`,
    `As a recognized public institution, ${org} maintains transparent administrative mechanisms, high public integrity, and reliable public utility management. Selected personnel receive structured pay matrix increments, medical health coverage, and long-term career stability.`
  ];
  return pick(g, seed, 7);
}

function buildDynamicRoleSection(job, seed) {
  const posts = escapeHtml(job.posts);
  const org = escapeHtml(job.org);
  const v = [
    `Candidates selected for the post of <strong>${posts}</strong> will carry out functional duties within ${org}. Key responsibilities include operational management, record maintenance, monitoring workflow targets, supervising subordinate staff, preparing official briefs, and ensuring strict adherence to statutory regulatory standards. Appointees will operate in modern departmental facilities with access to continuous skill enhancement and on-the-job training workshops.`,
    `Appointees for <strong>${posts}</strong> will oversee daily administrative, technical, or field responsibilities at ${org}. Daily operations encompass coordinating departmental tasks, compiling performance data, assisting senior officers in executive execution, maintaining procedural compliance, and ensuring timely citizen service delivery. The organization promotes team collaboration and merit-based advancement.`,
    `The functional mandate for <strong>${posts}</strong> involves technical execution, process documentation, compliance monitoring, and project implementation within branches of ${org}. Personnel will be exposed to modern operational systems and will have opportunities to participate in professional leadership development programs.`
  ];
  return pick(v, seed, 8);
}

function buildDynamicEligibility(job, seed) {
  const qual = escapeHtml(job.qualificationText);
  const lastDate = job.importantDates.lastDate;
  const posts = escapeHtml(job.posts);
  const v = [
    `To ensure high administrative competence, applicants for <strong>${posts}</strong> must possess <strong>${qual}</strong> obtained from a recognized University, State Technical Board, or authorized National Institute. Candidates must have attained the qualifying pass percentage as mandated in the notification. Proof of qualification, including degree certificates and provisional marksheets, must be officially issued on or before <strong>${lastDate}</strong>.`,
    `Academic criteria mandate that candidates must have completed <strong>${qual}</strong> from a recognized institution approved by UGC, AICTE, NCVT, or the appropriate statutory council. All mark statements, passing certificates, and professional registrations must be valid and ready for verification before the closing deadline (<strong>${lastDate}</strong>).`,
    `Eligibility standards require an authentic degree or diploma in <strong>${qual}</strong>. Candidates appearing in final examinations must ensure their results are officially published and provisional certificates acquired on or before <strong>${lastDate}</strong> alongside necessary professional registrations.`
  ];
  return pick(v, seed, 9);
}

function buildDynamicAgeSection(job, seed) {
  const age = escapeHtml(job.ageLimit);
  const relax = escapeHtml(job.ageRelaxation);
  const v = [
    `Candidates must satisfy the prescribed age limit of <strong>${age}</strong> computed as on the benchmark date specified in the notice. Permissible age relaxations apply to reserved candidates: <strong>${relax}</strong>. Ex-Servicemen and PwBD applicants are eligible for upper age relaxations according to standing Government norms. Proof of age requires a valid 10th class passing certificate or official birth certificate.`,
    `The age limitation is set at <strong>${age}</strong>. Government-approved concessions in maximum age limits are granted to eligible reserved categories: <strong>${relax}</strong>. Applicants seeking age relaxation must produce authentic caste/community or service certificates during document verification.`,
    `Applicants must fall within <strong>${age}</strong> as of the crucial eligibility calculation date. Relaxations in the upper age ceiling are admissible as follows: <strong>${relax}</strong>. Only the birth date recorded in the Matriculation certificate will be accepted as authentic proof.`
  ];
  return pick(v, seed, 10);
}

function buildDynamicSalarySection(job, seed) {
  const salary = escapeHtml(job.salary);
  const posts = escapeHtml(job.posts);
  const org = escapeHtml(job.org);
  const v = [
    `Appointees for <strong>${posts}</strong> in <strong>${org}</strong> will receive remuneration under the pay matrix of <strong>${salary}</strong>. In addition to basic salary, employees are entitled to Dearness Allowance (DA revised periodically), House Rent Allowance (HRA based on city classification), transport allowance, medical reimbursement, and coverage under the National Pension System (NPS).`,
    `The compensation package for <strong>${posts}</strong> is structured under <strong>${salary}</strong>. Appointees enjoy applicable government allowances including DA revisions, HRA subsidies, subsidized health care under departmental schemes, and retirement gratuity benefits.`,
    `Remuneration is fixed at <strong>${salary}</strong> alongside admissible allowances. Selected personnel receive periodic DA revisions, travel allowances, comprehensive family health coverage, paid casual/earned leaves, and statutory pension contributions.`
  ];
  return pick(v, seed, 11);
}

function buildDynamicSelectionSection(job, seed) {
  const c = job.category;
  const posts = escapeHtml(job.posts);
  const org = escapeHtml(job.org);

  if (c === 'police') {
    return `
      <p style="font-size:13.5px; line-height:1.8; color:#333; margin-bottom:10px;">
        Selection for <strong>${posts}</strong> in <strong>${org}</strong> follows a rigorous multi-tier procedure:
      </p>
      <ul style="padding-left:22px; line-height:1.8; font-size:13px; color:#333; margin-bottom:14px;">
        <li><strong>Written Screening Test:</strong> Objective test evaluating Reasoning, General Awareness, Quantitative Aptitude, and Language Comprehension.</li>
        <li><strong>Physical Measurement Test (PMT):</strong> Scrutiny of candidate height, chest expansion (for males), and physical standards.</li>
        <li><strong>Physical Efficiency Test (PET):</strong> Standard physical trials including timed 800m/1600m run, long jump, and shot put events.</li>
        <li><strong>Document Verification &amp; Medical:</strong> Scrutiny of original credentials followed by a comprehensive medical fitness examination.</li>
      </ul>`;
  }
  if (c === 'no-exam') {
    return `
      <p style="font-size:13.5px; line-height:1.8; color:#333; margin-bottom:10px;">
        The recruitment process for <strong>${posts}</strong> in <strong>${org}</strong> is direct and merit-oriented:
      </p>
      <ul style="padding-left:22px; line-height:1.8; font-size:13px; color:#333; margin-bottom:14px;">
        <li><strong>Merit Ranking:</strong> Merit computation based entirely on aggregate percentage secured in qualifying educational certificates (10th / ITI / Diploma).</li>
        <li><strong>Apprenticeship Portal Verification:</strong> Candidate profile validation on the official NAPS / NATS government portal.</li>
        <li><strong>Certificate Verification:</strong> Scrutiny of original marksheets, caste credentials, and photo identity documents.</li>
        <li><strong>Medical Clearance:</strong> Submission of an authorized medical fitness certificate prior to engagement.</li>
      </ul>`;
  }
  if (c === 'teaching') {
    return `
      <p style="font-size:13.5px; line-height:1.8; color:#333; margin-bottom:10px;">
        Academic induction for <strong>${posts}</strong> in <strong>${org}</strong> comprises:
      </p>
      <ul style="padding-left:22px; line-height:1.8; font-size:13px; color:#333; margin-bottom:14px;">
        <li><strong>Academic Performance Evaluation:</strong> Screening based on academic records, research publications, and professional teaching experience.</li>
        <li><strong>Seminar &amp; Teaching Demo:</strong> Presentation on research domain and interactive classroom lecture delivery before the expert panel.</li>
        <li><strong>Personal Interview:</strong> In-depth interaction assessing pedagogical expertise, research vision, and academic contribution.</li>
        <li><strong>Final Board Approval:</strong> Formal verification of credentials and approval by institutional authorities.</li>
      </ul>`;
  }
  if (c === 'banking') {
    return `
      <p style="font-size:13.5px; line-height:1.8; color:#333; margin-bottom:10px;">
        The evaluation protocol for <strong>${posts}</strong> in <strong>${org}</strong> involves:
      </p>
      <ul style="padding-left:22px; line-height:1.8; font-size:13px; color:#333; margin-bottom:14px;">
        <li><strong>Online Examination:</strong> Testing Quantitative Aptitude, Logical Reasoning, English Comprehension, and Banking Awareness.</li>
        <li><strong>Interview &amp; Group Discussion:</strong> Structured evaluation assessing professional domain knowledge and communication skills.</li>
        <li><strong>Language Proficiency Verification:</strong> Local language reading and writing assessment where applicable.</li>
        <li><strong>Document Verification &amp; Medical:</strong> Comprehensive background check and pre-appointment medical examination.</li>
      </ul>`;
  }
  return `
    <p style="font-size:13.5px; line-height:1.8; color:#333; margin-bottom:10px;">
      Selection for <strong>${posts}</strong> in <strong>${org}</strong> is conducted across structured stages:
    </p>
    <ul style="padding-left:22px; line-height:1.8; font-size:13px; color:#333; margin-bottom:14px;">
      <li><strong>Written / Computer Based Test:</strong> Objective evaluation covering domain technical subjects, reasoning, and numerical ability.</li>
      <li><strong>Trade / Skill Test (If Applicable):</strong> Practical assessment verifying hands-on technical proficiency and trade skills.</li>
      <li><strong>Document Verification:</strong> Detailed examination of original academic marksheets, category documents, and age proof.</li>
      <li><strong>Medical Fitness Check:</strong> Official medical examination assessing fitness for public service duties.</li>
    </ul>`;
}

function buildDynamicPreparationStrategy(job, seed) {
  const posts = escapeHtml(job.posts);
  const org = escapeHtml(job.org);
  const v = [
    `Candidates preparing for the <strong>${posts}</strong> selection in <strong>${org}</strong> should adopt a structured preparation plan. First, thoroughly review the official syllabus and previous years' question patterns. Allocate daily study slots for core domain topics, analytical reasoning, and general awareness. Regular practice with mock examinations helps develop time management skills and accuracy. Maintain physical fitness if appearing for endurance tests, and ensure all original academic credentials and category certificates are kept updated for verification.`,
    `A systematic approach is recommended for cracking the <strong>${posts}</strong> recruitment at <strong>${org}</strong>. Begin by creating a focused study schedule covering all technical and general subjects. Solve previous examination papers to understand question difficulty levels. For positions involving trade tests or practical demos, practice core technical operations diligently. Review current affairs regularly and keep valid identity proofs ready.`,
    `Success in the <strong>${posts}</strong> examination of <strong>${org}</strong> requires disciplined revision and consistent practice. Candidates should focus on high-weightage topics, practice speed-accuracy drills, and take periodic full-length online mock tests. For interview stages, stay updated on recent departmental developments and policies. Ensure all educational marksheets and caste certificates comply with official prescribed formats.`
  ];
  return pick(v, seed, 12);
}

function buildDynamicApplicationSteps(job, seed) {
  const org = escapeHtml(job.org);
  const fee = escapeHtml(job.fee);
  const posts = escapeHtml(job.posts);
  const v = [
    `<ol style="padding-left:22px; line-height:1.8; font-size:13px; color:#333; margin-bottom:14px;">
      <li>Navigate to the official web portal of <strong>${org}</strong> using the verified link provided below.</li>
      <li>Open the recruitment notification tab for <strong>${posts} (2026)</strong> and register an account with a valid email and mobile number.</li>
      <li>Fill in academic credentials, personal details, communication address, and category information accurately.</li>
      <li>Upload scanned copies of recent passport photograph, signature, and qualifying certificates within prescribed file sizes.</li>
      <li>Remit the application fee (<strong>${fee}</strong>) via net banking, debit/credit cards, or UPI.</li>
      <li>Download and print the final submitted application form for verification during subsequent stages.</li>
    </ol>`,
    `<ol style="padding-left:22px; line-height:1.8; font-size:13px; color:#333; margin-bottom:14px;">
      <li>Access the online career portal of <strong>${org}</strong> through the direct link below.</li>
      <li>Complete initial candidate registration to generate unique login credentials.</li>
      <li>Log in and carefully enter educational background, technical qualifications, and category details into the application form.</li>
      <li>Attach digital copies of photograph, signature, and mandatory supporting certificates in the required format.</li>
      <li>Pay the registration fee (<strong>${fee}</strong>) through secure online payment channels.</li>
      <li>Submit the form, save the generated registration number, and take a physical printout for record keeping.</li>
    </ol>`,
    `<ol style="padding-left:22px; line-height:1.8; font-size:13px; color:#333; margin-bottom:14px;">
      <li>Visit the official online registration gateway of <strong>${org}</strong> via the direct link.</li>
      <li>Register with active contact details to receive verification OTP and application credentials.</li>
      <li>Complete all mandatory sections of the application form including educational marksheets and identity proofs.</li>
      <li>Upload clear scanned images of your photograph, signature, and requisite educational documents.</li>
      <li>Complete fee transaction (<strong>${fee}</strong>) using online payment gateways before the deadline.</li>
      <li>Verify all entered information, submit the final application, and archive the printable receipt.</li>
    </ol>`
  ];
  return pick(v, seed, 13);
}

function buildDynamicFaq(job, seed) {
  const posts = escapeHtml(job.posts);
  const org = escapeHtml(job.org);
  const lastDate = job.importantDates.lastDate;

  const f = [
    `
    <div style="margin-top:20px; display:flex; flex-direction:column; gap:10px;">
      <div style="background:#f8f9fa; border:1px solid #e2e8f0; padding:12px 16px; border-radius:4px;">
        <strong style="color:#0b2545;">Q1: What is the final date to apply for ${posts} in ${org}?</strong>
        <p style="margin-top:5px; font-size:13px; color:#444; line-height:1.6;">The online registration window officially closes on <strong>${lastDate}</strong>. Applicants are strongly advised to submit their forms well in advance of the deadline.</p>
      </div>
      <div style="background:#f8f9fa; border:1px solid #e2e8f0; padding:12px 16px; border-radius:4px;">
        <strong style="color:#0b2545;">Q2: What is the prescribed educational qualification?</strong>
        <p style="margin-top:5px; font-size:13px; color:#444; line-height:1.6;">Candidates must hold <strong>${escapeHtml(job.qualificationText)}</strong> from a recognized university or board as stipulated in the official notice.</p>
      </div>
      <div style="background:#f8f9fa; border:1px solid #e2e8f0; padding:12px 16px; border-radius:4px;">
        <strong style="color:#0b2545;">Q3: How can candidates download the official notification PDF?</strong>
        <p style="margin-top:5px; font-size:13px; color:#444; line-height:1.6;">The complete official advertisement PDF can be accessed directly through the download link provided in the official links table below.</p>
      </div>
      <div style="background:#f8f9fa; border:1px solid #e2e8f0; padding:12px 16px; border-radius:4px;">
        <strong style="color:#0b2545;">Q4: What is the prescribed application fee?</strong>
        <p style="margin-top:5px; font-size:13px; color:#444; line-height:1.6;">The application fee is <strong>${escapeHtml(job.fee)}</strong>, payable through authorized online payment methods.</p>
      </div>
    </div>`,
    `
    <div style="margin-top:20px; display:flex; flex-direction:column; gap:10px;">
      <div style="background:#f8f9fa; border:1px solid #e2e8f0; padding:12px 16px; border-radius:4px;">
        <strong style="color:#0b2545;">Q1: How many vacancies are available for ${posts}?</strong>
        <p style="margin-top:5px; font-size:13px; color:#444; line-height:1.6;">A total of <strong>${job.vacancies.toLocaleString('en-IN')} Vacancies</strong> have been announced by ${org} for this recruitment cycle.</p>
      </div>
      <div style="background:#f8f9fa; border:1px solid #e2e8f0; padding:12px 16px; border-radius:4px;">
        <strong style="color:#0b2545;">Q2: Is offline application submission accepted?</strong>
        <p style="margin-top:5px; font-size:13px; color:#444; line-height:1.6;">No, only online applications submitted through the official portal before <strong>${lastDate}</strong> are valid.</p>
      </div>
      <div style="background:#f8f9fa; border:1px solid #e2e8f0; padding:12px 16px; border-radius:4px;">
        <strong style="color:#0b2545;">Q3: What are the age requirements for this recruitment?</strong>
        <p style="margin-top:5px; font-size:13px; color:#444; line-height:1.6;">Applicants must fall within <strong>${escapeHtml(job.ageLimit)}</strong> with admissible relaxations for SC/ST/OBC/PwBD categories.</p>
      </div>
      <div style="background:#f8f9fa; border:1px solid #e2e8f0; padding:12px 16px; border-radius:4px;">
        <strong style="color:#0b2545;">Q4: What pay scale is offered for this post?</strong>
        <p style="margin-top:5px; font-size:13px; color:#444; line-height:1.6;">Selected personnel receive remuneration under the scale of <strong>${escapeHtml(job.salary)}</strong> plus standard government allowances.</p>
      </div>
    </div>`
  ];
  return pick(f, seed, 14);
}

function generateLongFormArticle(job, stateObj) {
  const seed = getHash(job.id);
  const qualNames = job.qualifications.map(qId => {
    const q = data.QUALIFICATIONS.find(item => item.id === qId);
    return q ? q.name : qId;
  }).join(' / ');

  const overviewText = buildDynamicOverview(job, stateObj, seed);
  const orgProfileText = buildDynamicOrgProfile(job, seed);
  const roleText = buildDynamicRoleSection(job, seed);
  const eligibilityText = buildDynamicEligibility(job, seed);
  const ageText = buildDynamicAgeSection(job, seed);
  const salaryText = buildDynamicSalarySection(job, seed);
  const selectionHtml = buildDynamicSelectionSection(job, seed);
  const prepStrategyText = buildDynamicPreparationStrategy(job, seed);
  const appStepsHtml = buildDynamicApplicationSteps(job, seed);
  const faqHtml = buildDynamicFaq(job, seed);

  return `
        <!-- Left Content Area -->
        <div class="primary-content-column">
          <div class="content-block" style="padding: 20px;">
            
            <div style="font-size:12px; color:#666; margin-bottom:12px;">
              <a href="/">Home</a> &rsaquo; <a href="/central-govt-jobs.html">${escapeHtml(job.subCategory || 'Govt Jobs')}</a> &rsaquo; <span>${escapeHtml(job.shortOrg)}</span>
            </div>

            <!-- Single Optimized H1 Tag -->
            <h1 class="portal-main-h1">${escapeHtml(job.title)}</h1>
            <div style="font-size:12px; color:#555; margin-bottom:14px; border-bottom:1px solid #eee; padding-bottom:8px;">
              Published by: <strong>RozgarDwaar Editorial Desk</strong> | Source: <strong>Official Recruitment Notice (${escapeHtml(job.shortOrg)})</strong>
            </div>

            <div class="action-cta-bar">
              <a href="${job.officialLinks.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-apply">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg> Apply Online (Official Website)
              </a>
              <a href="${job.officialLinks.notificationUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-pdf">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg> Download Notification PDF
              </a>
              <a href="${job.officialLinks.websiteUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-web">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Official Website
              </a>
            </div>

            <!-- Quick Overview Facts Table -->
            <div class="green-check-title">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>Recruitment Overview &amp; Summary Data:</span>
            </div>
            
            <table class="detail-table-custom">
              <tbody>
                <tr><th style="width:32%;">Recruiting Organization</th><td><strong>${escapeHtml(job.org)} (${escapeHtml(job.shortOrg)})</strong></td></tr>
                <tr><th>Advertised Post / Designation</th><td><strong>${escapeHtml(job.posts)}</strong></td></tr>
                <tr><th>Total Sanctioned Vacancies</th><td><strong style="color:#008000; font-size:14.5px;">${job.vacancies.toLocaleString('en-IN')} Posts</strong></td></tr>
                <tr><th>Pay Scale / Remuneration</th><td><strong>${escapeHtml(job.salary)}</strong></td></tr>
                <tr><th>Prescribed Educational Qualification</th><td>${escapeHtml(qualNames)} (${escapeHtml(job.qualificationText)})</td></tr>
                <tr><th>Prescribed Age Limit</th><td>${escapeHtml(job.ageLimit)}</td></tr>
                <tr><th>Applicable Age Relaxation</th><td>${escapeHtml(job.ageRelaxation)}</td></tr>
                <tr><th>Application Registration Fee</th><td>${escapeHtml(job.fee)}</td></tr>
                <tr><th>Online Registration Start Date</th><td>${job.importantDates.startDate}</td></tr>
                <tr><th>Online Registration Closing Date</th><td><strong style="color:#cc0000; font-size:14.5px;">${job.importantDates.lastDate}</strong></td></tr>
                <tr><th>Tentative Exam / Selection Timeline</th><td>${job.importantDates.examDate}</td></tr>
                <tr><th>Primary Posting Location</th><td>${escapeHtml(stateObj.name)} / All India Postings</td></tr>
              </tbody>
            </table>

            <!-- Section 1: Executive Overview -->
            <div class="green-check-title" style="margin-top:22px;">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>1. In-Depth Notification Overview &amp; Recruitment Summary:</span>
            </div>
            <p style="font-size:13.5px; line-height:1.8; color:#333; margin-bottom:14px;">
              ${overviewText}
            </p>

            <!-- Section 2: Department Profile -->
            <div class="green-check-title" style="margin-top:22px;">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>2. Institutional Profile &amp; Operational Domain:</span>
            </div>
            <p style="font-size:13.5px; line-height:1.8; color:#333; margin-bottom:14px;">
              ${orgProfileText}
            </p>

            <!-- Section 3: Roles & Responsibilities -->
            <div class="green-check-title" style="margin-top:22px;">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>3. Role Profile, Key Responsibilities &amp; Work Environment:</span>
            </div>
            <p style="font-size:13.5px; line-height:1.8; color:#333; margin-bottom:14px;">
              ${roleText}
            </p>

            <!-- Section 4: Educational Qualification -->
            <div class="green-check-title" style="margin-top:22px;">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>4. Comprehensive Educational &amp; Professional Eligibility Standards:</span>
            </div>
            <p style="font-size:13.5px; line-height:1.8; color:#333; margin-bottom:14px;">
              ${eligibilityText}
            </p>

            <!-- Section 5: Age Limitations -->
            <div class="green-check-title" style="margin-top:22px;">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>5. Age Limitations, Cut-Off Calculations &amp; Category Concessions:</span>
            </div>
            <p style="font-size:13.5px; line-height:1.8; color:#333; margin-bottom:14px;">
              ${ageText}
            </p>

            <!-- Section 6: Salary & Remuneration -->
            <div class="green-check-title" style="margin-top:22px;">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>6. Pay Scale, Salary Matrix &amp; Service Benefits:</span>
            </div>
            <p style="font-size:13.5px; line-height:1.8; color:#333; margin-bottom:14px;">
              ${salaryText}
            </p>

            <!-- Section 7: Selection Methodology -->
            <div class="green-check-title" style="margin-top:22px;">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>7. Detailed Selection Process &amp; Evaluation Methodology:</span>
            </div>
            ${selectionHtml}

            <!-- Section 8: Preparation Strategy -->
            <div class="green-check-title" style="margin-top:22px;">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>8. Candidate Preparation Guidelines &amp; Strategy:</span>
            </div>
            <p style="font-size:13.5px; line-height:1.8; color:#333; margin-bottom:14px;">
              ${prepStrategyText}
            </p>

            <!-- Section 9: Step-by-Step Application Protocol -->
            <div class="green-check-title" style="margin-top:22px;">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>9. Step-by-Step Online Registration &amp; Application Protocol:</span>
            </div>
            ${appStepsHtml}

            <!-- Section 10: Mandatory Documents -->
            <div class="green-check-title" style="margin-top:22px;">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>10. Mandatory Documents &amp; Verification Checklist:</span>
            </div>
            <ul style="padding-left:22px; line-height:1.8; font-size:13px; color:#333; margin-bottom:14px;">
              <li>Valid Matriculation (10th) Passing Certificate or official Birth Certificate for Date of Birth proof.</li>
              <li>Consolidated Marksheets and Degree / Diploma certificates verifying <strong>${escapeHtml(job.qualificationText)}</strong>.</li>
              <li>Valid Community / Caste (SC/ST/OBC-NCL) or EWS Certificate issued by a competent revenue officer.</li>
              <li>PwBD Medical Disability Certificate (40% and above) or Ex-Servicemen discharge documentation where applicable.</li>
              <li>Government-issued Photo ID Card (Aadhaar Card, Passport, Driving License, or Voter ID).</li>
            </ul>

            <!-- Section 11: Official Links -->
            <div class="green-check-title" style="margin-top:22px;">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>11. Official Notification &amp; Direct Application Links:</span>
            </div>
            <table class="detail-table-custom">
              <tbody>
                <tr>
                  <th style="width:38%;">Online Application Portal</th>
                  <td><a href="${job.officialLinks.applyUrl}" target="_blank" rel="noopener noreferrer" style="color:#008000; font-weight:700;">Click Here to Apply Online &raquo;</a></td>
                </tr>
                <tr>
                  <th>Official Notification (PDF)</th>
                  <td><a href="${job.officialLinks.notificationUrl}" target="_blank" rel="noopener noreferrer" style="color:#0000cc; font-weight:700;">Download Full Notification PDF &raquo;</a></td>
                </tr>
                <tr>
                  <th>Official Department Website</th>
                  <td><a href="${job.officialLinks.websiteUrl}" target="_blank" rel="noopener noreferrer" style="color:#333; font-weight:700;">Visit Official Website &raquo;</a></td>
                </tr>
              </tbody>
            </table>

            <!-- Section 12: FAQs -->
            <div class="green-check-title" style="margin-top:22px;">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>12. Frequently Asked Questions (FAQs):</span>
            </div>
            ${faqHtml}

            <!-- Bottom Action CTA Bar -->
            <div class="action-cta-bar" style="border-top:1px solid #eee; padding-top:14px; margin-top:24px;">
              <a href="${job.officialLinks.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-apply">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg> Apply Online Now
              </a>
              <a href="${job.officialLinks.notificationUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-pdf">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg> Official PDF Notification
              </a>
              <a href="/" class="tool-btn">&larr; Back to Portal Home</a>
            </div>

          </div>
        </div>`;
}

module.exports = {
  generateLongFormArticle: generateLongFormArticle
};
