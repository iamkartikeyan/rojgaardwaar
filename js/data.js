/**
 * ROZGARDWAAR (ROZGARDWAAR.in) - Master Government Recruitment Data Engine
 * Synchronized with 300+ live recruitment notices from IndGovtJobs.in
 */

window.ROZGAR_DATA = (function() {
  
  const STATES = [
  {
    "id": "all-india",
    "name": "All India / Central",
    "code": "AI",
    "totalActive": 142
  },
  {
    "id": "andhra-pradesh",
    "name": "Andhra Pradesh",
    "code": "AP",
    "totalActive": 18
  },
  {
    "id": "arunachal-pradesh",
    "name": "Arunachal Pradesh",
    "code": "AR",
    "totalActive": 8
  },
  {
    "id": "assam",
    "name": "Assam",
    "code": "AS",
    "totalActive": 22
  },
  {
    "id": "bihar",
    "name": "Bihar",
    "code": "BR",
    "totalActive": 38
  },
  {
    "id": "chandigarh",
    "name": "Chandigarh",
    "code": "CH",
    "totalActive": 6
  },
  {
    "id": "chhattisgarh",
    "name": "Chhattisgarh",
    "code": "CG",
    "totalActive": 16
  },
  {
    "id": "delhi",
    "name": "Delhi NCR",
    "code": "DL",
    "totalActive": 45
  },
  {
    "id": "goa",
    "name": "Goa",
    "code": "GA",
    "totalActive": 9
  },
  {
    "id": "gujarat",
    "name": "Gujarat",
    "code": "GJ",
    "totalActive": 26
  },
  {
    "id": "haryana",
    "name": "Haryana",
    "code": "HR",
    "totalActive": 24
  },
  {
    "id": "himachal-pradesh",
    "name": "Himachal Pradesh",
    "code": "HP",
    "totalActive": 14
  },
  {
    "id": "jammu-kashmir",
    "name": "Jammu & Kashmir",
    "code": "JK",
    "totalActive": 16
  },
  {
    "id": "jharkhand",
    "name": "Jharkhand",
    "code": "JH",
    "totalActive": 20
  },
  {
    "id": "karnataka",
    "name": "Karnataka",
    "code": "KA",
    "totalActive": 32
  },
  {
    "id": "kerala",
    "name": "Kerala",
    "code": "KL",
    "totalActive": 24
  },
  {
    "id": "madhya-pradesh",
    "name": "Madhya Pradesh",
    "code": "MP",
    "totalActive": 30
  },
  {
    "id": "maharashtra",
    "name": "Maharashtra",
    "code": "MH",
    "totalActive": 42
  },
  {
    "id": "manipur",
    "name": "Manipur",
    "code": "MN",
    "totalActive": 7
  },
  {
    "id": "meghalaya",
    "name": "Meghalaya",
    "code": "ML",
    "totalActive": 6
  },
  {
    "id": "mizoram",
    "name": "Mizoram",
    "code": "MZ",
    "totalActive": 5
  },
  {
    "id": "nagaland",
    "name": "Nagaland",
    "code": "NL",
    "totalActive": 6
  },
  {
    "id": "odisha",
    "name": "Odisha",
    "code": "OR",
    "totalActive": 22
  },
  {
    "id": "punjab",
    "name": "Punjab",
    "code": "PB",
    "totalActive": 20
  },
  {
    "id": "rajasthan",
    "name": "Rajasthan",
    "code": "RJ",
    "totalActive": 34
  },
  {
    "id": "sikkim",
    "name": "Sikkim",
    "code": "SK",
    "totalActive": 5
  },
  {
    "id": "tamil-nadu",
    "name": "Tamil Nadu",
    "code": "TN",
    "totalActive": 36
  },
  {
    "id": "telangana",
    "name": "Telangana",
    "code": "TS",
    "totalActive": 22
  },
  {
    "id": "tripura",
    "name": "Tripura",
    "code": "TR",
    "totalActive": 6
  },
  {
    "id": "uttar-pradesh",
    "name": "Uttar Pradesh",
    "code": "UP",
    "totalActive": 48
  },
  {
    "id": "uttarakhand",
    "name": "Uttarakhand",
    "code": "UK",
    "totalActive": 14
  },
  {
    "id": "west-bengal",
    "name": "West Bengal",
    "code": "WB",
    "totalActive": 28
  }
];
  const QUALIFICATIONS = [
  {
    "id": "10th-pass",
    "name": "10th Pass (Matriculation)"
  },
  {
    "id": "12th-pass",
    "name": "12th Pass (Higher Secondary / Intermediate)"
  },
  {
    "id": "iti",
    "name": "ITI (Industrial Training Institute)"
  },
  {
    "id": "diploma",
    "name": "Polytechnic / Engineering Diploma"
  },
  {
    "id": "graduate",
    "name": "Graduate (BA, BSc, BCom, Any Degree)"
  },
  {
    "id": "btech-engineering",
    "name": "B.Tech / B.E. (Engineering)"
  },
  {
    "id": "post-graduate",
    "name": "Post Graduate (MA, MSc, MCom, MCA)"
  },
  {
    "id": "mba-pgdm",
    "name": "MBA / PGDM (Management)"
  },
  {
    "id": "medical-nursing",
    "name": "Medical / MBBS / Nursing / BDS / B.Pharm"
  },
  {
    "id": "law-llb",
    "name": "Law / LLB / LLM"
  },
  {
    "id": "bed-teaching",
    "name": "B.Ed / D.El.Ed / Teaching Qualifications"
  }
];
  const RECRUITMENTS = [
  {
    "id": "10th-12th-pass-govt-jobs-2026-50000-vacancies-opening",
    "title": "10th 12th Pass Govt Jobs 2026 (50000+ Vacancies Opening)",
    "org": "10th 12th Pass Govt Jobs 2026 (50000+ Vacancies Opening)",
    "shortOrg": "10th 12th Pass Govt Jobs 2026 ",
    "posts": "10th 12th Pass Govt",
    "vacancies": 112,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "10th-pass",
      "12th-pass"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-28",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2013/09/10th-12th-pass-govt-jobs.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2013/09/10th-12th-pass-govt-jobs.html"
    }
  },
  {
    "id": "western-railway-sports-quota-recruitment-2026-apply-online-for-64-posts-last-dat",
    "title": "Western Railway Sports Quota Recruitment 2026 - Apply Online for 64 Posts | Last Date 30-09-2026",
    "org": "Western Railway Sports Quota",
    "shortOrg": "Western Railway Sports Quota",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 64,
    "salary": "pay scale in Western Railway Sports Quota Recruitment 2026?",
    "qualificationText": "Level-5/4 – 70, Level-3/2 – 65, Level-1 – 60. Merit will decide appointment. In case of a tie, the younger candidate wil",
    "qualifications": [
      "graduate"
    ],
    "category": "railway",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-31",
      "lastDate": "30-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/western-railway-sports-quota.html",
      "notificationUrl": "https://drive.google.com/file/d/1xMM9oezrXcN5F8M9KGbRaMqFdoHj9kGL/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/western-railway-sports-quota.html"
    }
  },
  {
    "id": "indian-overseas-bank-security-guard-recruitment-2026-apply-online-for-25-posts-l",
    "title": "Indian Overseas Bank Security Guard Recruitment 2026 - Apply Online for 25 Posts | Last Date 14-09-2026",
    "org": "Indian Overseas Bank Security Guard",
    "shortOrg": "Indian Overseas Bank Security ",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 25,
    "salary": "Pay Matrix Level-1 / Level-2 (₹36,000 – ₹89,890/- + Bank Allowances)",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "banking",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-31",
      "lastDate": "14-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/indian-overseas-bank-security-guard.html",
      "notificationUrl": "https://drive.google.com/file/d/1ikbI308kCQJlTE6WCF0AsN7FmUMnXDx2/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/indian-overseas-bank-security-guard.html"
    }
  },
  {
    "id": "mpesb-si-subedar-recruitment-2026-apply-online-for-504-posts-last-date-23-09-202",
    "title": "MPESB SI & Subedar Recruitment 2026 - Apply Online for 504 Posts | Last Date 23-09-2026",
    "org": "MPESB SI & Subedar",
    "shortOrg": "MPESB SI & Subedar",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 504,
    "salary": "Level-6 / Level-7 (₹35,400 – ₹1,12,400/-) as per 7th CPC Matrix",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "police",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "23-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/09/mpesb-si-subedar-recruitment.html",
      "notificationUrl": "https://drive.google.com/file/d/1H_TOnZ5UxR5647hpbkcBg15FtcC42lko/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/mpesb-si-subedar-recruitment.html"
    }
  },
  {
    "id": "jkssb-notification-no-09-of-2026-apply-online-for-2863-mts-sanitation-worker-pos",
    "title": "JKSSB Notification No. 09 of 2026 - Apply Online for 2863 MTS & Sanitation Worker Posts | Last Date 03-11-2026",
    "org": "JKSSB Notification No. 09 of 2026",
    "shortOrg": "JKSSB Notification No. 09 of 2",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 700,
    "salary": "As per 7th Pay Matrix / Institutional Pay Rules (Refer Official Notification)",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "03-11-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/09/jkssb-notification-no-09-of-2026.html",
      "notificationUrl": "https://jkssb.nic.in/Pdf/ADVT_09OF2026_01092026.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/jkssb-notification-no-09-of-2026.html"
    }
  },
  {
    "id": "bpsc-school-teacher-tre-40-recruitment-2026-apply-online-for-32388-posts",
    "title": "BPSC School Teacher TRE 4.0 Recruitment 2026 - Apply Online for 32388 Posts",
    "org": "BPSC School Teacher TRE 4.0",
    "shortOrg": "BPSC School Teacher TRE 4.0",
    "posts": "School Teacher / TGT / PGT",
    "vacancies": 32388,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "bed-teaching"
    ],
    "category": "teaching",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/09/bpsc-school-teacher-tre-40-recruitment.html",
      "notificationUrl": "https://drive.google.com/file/d/10W7B0ADuDdx0T9xhDF38q1KyGyDfnqtO/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/bpsc-school-teacher-tre-40-recruitment.html"
    }
  },
  {
    "id": "iim-kozhikode-faculty-recruitment-2026-apply-online-for-28-posts-last-date-30-09",
    "title": "IIM Kozhikode Faculty Recruitment 2026 - Apply Online for 28 Posts | Last Date 30-09-2026",
    "org": "IIM Kozhikode Faculty",
    "shortOrg": "IIM Kozhikode Faculty",
    "posts": "Faculty / Assistant Professor / Associate Professor",
    "vacancies": 28,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "bed-teaching"
    ],
    "category": "teaching",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "30-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/09/iim-kozhikode-faculty-recruitment-2026.html",
      "notificationUrl": "https://iimk.ac.in/uploads/userfiles/Notification_A-02.2026.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/iim-kozhikode-faculty-recruitment-2026.html"
    }
  },
  {
    "id": "istc-executive-recruitment-2026-apply-online-for-09-engineer-it-finance-hr-posts",
    "title": "ISTC Executive Recruitment 2026 - Apply Online for 09 Engineer, IT, Finance, HR Posts | Last Date 18-09-2026",
    "org": "ISTC Executive",
    "shortOrg": "ISTC Executive",
    "posts": "Project Engineer / Executive Trainee",
    "vacancies": 700,
    "salary": "₹30,000 to ₹2,00,000",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "btech-engineering"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "18-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://csl.cochinshipyard.in:8000/sap/bc/webdynpro/sap/hrrcf_a_candidate_registration?sap-language=EN#",
      "notificationUrl": "https://cochinshipyard.in/uploads/career/cd5346e2da18d06f6905eb292e8ce195.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/istc-executive-recruitment.html"
    }
  },
  {
    "id": "icar-igfri-young-professional-recruitment-2026-walk-in-interview-for-05-posts",
    "title": "ICAR IGFRI Young Professional Recruitment 2026 - Walk in Interview for 05 Posts",
    "org": "ICAR IGFRI Young Professional",
    "shortOrg": "ICAR IGFRI Young Professional",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 5,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "12th-pass"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/09/icar-igfri-young-professional.html",
      "notificationUrl": "https://igfri.org.in/uploads/20260828055528802yp-II%205%20Post.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/icar-igfri-young-professional.html"
    }
  },
  {
    "id": "nit-goa-faculty-recruitment-2026-apply-online-for-28-posts-last-date-30-09-2026",
    "title": "NIT Goa Faculty Recruitment 2026 - Apply Online for 28 Posts | Last Date 30-09-2026",
    "org": "NIT Goa Faculty",
    "shortOrg": "NIT Goa Faculty",
    "posts": "Faculty / Assistant Professor / Associate Professor",
    "vacancies": 28,
    "salary": "pay scale in NIT Goa Faculty Recruitment 2026?",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "bed-teaching"
    ],
    "category": "teaching",
    "subCategory": "Recruitment 2026",
    "state": "goa",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "30-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/09/nit-goa-faculty-recruitment-2026.html",
      "notificationUrl": "https://www.nitgoa.ac.in/uploads/faculty_recruitment2026/Advt_Faculty%20_%20Recruitment%2031august2026.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/nit-goa-faculty-recruitment-2026.html"
    }
  },
  {
    "id": "latest-it-govt-jobs-2026-1000-fresher-experienced-vacancies",
    "title": "Latest IT Govt Jobs 2026 (1000+ Fresher & Experienced Vacancies)",
    "org": "Latest IT Govt Jobs 2026 (1000+ Fresher & Experienced Vacancies)",
    "shortOrg": "Latest IT Govt Jobs 2026 (1000",
    "posts": "Latest IT Govt",
    "vacancies": 126,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2014/04/it-fresher-jobs.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2014/04/it-fresher-jobs.html"
    }
  },
  {
    "id": "latest-psu-jobs-2026-public-sector-company-jobs-4433-vacancies",
    "title": "Latest PSU Jobs 2026 | Public Sector Company Jobs | 4433+ Vacancies",
    "org": "Latest PSU Jobs 2026 | Public Sector Company Jobs | 4433+ Vacancies",
    "shortOrg": "Latest PSU Jobs 2026 | Public ",
    "posts": "Latest PSU",
    "vacancies": 118,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "psu",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2019/07/PSU-Govt-Jobs.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2019/07/PSU-Govt-Jobs.html"
    }
  },
  {
    "id": "iocl-executive-recruitment-through-cbt-2026-apply-online-for-470-engineer-office",
    "title": "IOCL Executive Recruitment through CBT 2026 - Apply Online for 470 Engineer, Officer & Law Posts | Last Date 03-09-2026",
    "org": "IOCL Executive",
    "shortOrg": "IOCL Executive",
    "posts": "Recruitment through CBT 2026 –",
    "vacancies": 700,
    "salary": "E-1 / E-2 Grade (₹40,000 – ₹1,40,000/- + IDA & Perks)",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "law-llb"
    ],
    "category": "psu",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "03-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/iocl-executive-recruitment-through-cbt.html",
      "notificationUrl": "https://iocl.com/admin/img/UploadedFiles/LatestJobOpening/Files/DetailedAd14082026.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/iocl-executive-recruitment-through-cbt.html"
    }
  },
  {
    "id": "railway-jobs-2026-apply-online-11338-new-vacancies",
    "title": "Railway Jobs 2026 Apply Online (11338 New Vacancies)",
    "org": "Railway Jobs 2026 Apply Online (11338 New Vacancies)",
    "shortOrg": "Railway Jobs 2026 Apply Online",
    "posts": "Railway",
    "vacancies": 134,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "railway",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/09/railway-jobs.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/railway-jobs.html"
    }
  },
  {
    "id": "southern-railway-apprentice-recruitment-2026-apply-online-for-4471-fresher-posts",
    "title": "Southern Railway Apprentice Recruitment 2026 - Apply Online for 4471 Fresher Posts | Last Date 27-09-2026",
    "org": "Southern Railway Apprentice",
    "shortOrg": "Southern Railway Apprentice",
    "posts": "Apprentice (Trade / Technician / Graduate)",
    "vacancies": 700,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Graduate / Degree / Diploma / 10th / 12th Pass",
    "qualifications": [
      "graduate",
      "10th-pass",
      "12th-pass",
      "diploma",
      "iti"
    ],
    "category": "railway",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "27-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://sronline.etrpindia.com/rrcchennaiapprentice26/notifications/Act%20Apprentices%20Notification%202026-27%20with%20enclosures.pdf",
      "notificationUrl": "https://sronline.etrpindia.com/rrcchennaiapprentice26/notifications/Act%20Apprentices%20Notification%202026-27%20with%20enclosures.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/southern-railway-apprentice-recruitment.html"
    }
  },
  {
    "id": "nic-sta-recruitment-2026-apply-online-for-376-fresher-posts-last-date-30-09-2026",
    "title": "NIC STA Recruitment 2026 - Apply Online for 376 Fresher Posts | Last Date 30-09-2026",
    "org": "NIC STA",
    "shortOrg": "NIC STA",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 700,
    "salary": "pay scale in NIC STA Recruitment 2026?",
    "qualificationText": "Graduate / Degree / Diploma / 10th / 12th Pass",
    "qualifications": [
      "graduate",
      "10th-pass",
      "12th-pass",
      "diploma"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "30-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/nic-sta-recruitment.html",
      "notificationUrl": "https://drive.google.com/file/d/1_MOj3rA6LtfMeoMGojBZlxdQvIarc2AZ/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/nic-sta-recruitment.html"
    }
  },
  {
    "id": "bank-jobs-2026-latest-banking-recruitment-18820-vacancies",
    "title": "Bank Jobs 2026: Latest Banking Recruitment 18820 Vacancies",
    "org": "Bank Jobs 2026: Latest Banking",
    "shortOrg": "Bank Jobs 2026: Latest Banking",
    "posts": "Bank",
    "vacancies": 18820,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "banking",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/bank-jobs.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/bank-jobs.html"
    }
  },
  {
    "id": "bank-of-india-officer-recruitment-2026-apply-online-for-205-posts-last-date-25-0",
    "title": "Bank of India Officer Recruitment 2026 - Apply Online for 205 Posts | Last Date 25-09-2026",
    "org": "Bank of India Officer",
    "shortOrg": "Bank of India Officer",
    "posts": "Specialist Officer / Executive Officer",
    "vacancies": 205,
    "salary": "pay scale, eligibility, application fee, selection process, official n",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "banking",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "25-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/09/bank-of-india-officer-recruitment.html",
      "notificationUrl": "https://bankofindia.bank.in/documents/20121/27827843/FINAL-NOTICE-SPECIALIST-OFFICER-2026-27-02-NOTICE-DATE-01.08.2026.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/bank-of-india-officer-recruitment.html"
    }
  },
  {
    "id": "uksssc-inter-level-recruitment-2026-apply-online-for-553-various-posts-last-date",
    "title": "UKSSSC Inter Level Recruitment 2026 - Apply Online for 553 Various Posts | Last Date 07-10-2026",
    "org": "UKSSSC Inter Level",
    "shortOrg": "UKSSSC Inter Level",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 700,
    "salary": "₹19,900 – ₹92,300",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "12th-pass"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "07-10-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/09/uksssc-inter-level-recruitment-2026.html",
      "notificationUrl": "https://drive.google.com/file/d/1ikWO0ewO9BImGzvfrZ7Gp5F2xOFs2riV/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/uksssc-inter-level-recruitment-2026.html"
    }
  },
  {
    "id": "gail-et-recruitment-gate-2027-notification-out",
    "title": "GAIL ET Recruitment GATE 2027 Notification Out",
    "org": "GAIL ET",
    "shortOrg": "GAIL ET",
    "posts": "Recruitment GATE 2027 Notification Out",
    "vacancies": 700,
    "salary": "pay scale, GATE paper mapping, important dates and official links.",
    "qualificationText": "Graduate / Degree / Diploma / 10th / 12th Pass",
    "qualifications": [
      "graduate",
      "10th-pass",
      "12th-pass",
      "diploma"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.gailonline.com",
      "notificationUrl": "https://drive.google.com/file/d/16FYMUTWfYBEVG5NnJ6RpCNSuGuCLtW07/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/gail-et-recruitment-gate-2027.html"
    }
  },
  {
    "id": "dmrc-supervisor-recruitment-2026-apply-for-04-posts-last-date-15-09-2026",
    "title": "DMRC Supervisor Recruitment 2026 - Apply for 04 Posts | Last Date 15-09-2026",
    "org": "DMRC Supervisor",
    "shortOrg": "DMRC Supervisor",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 4,
    "salary": "Level-9 (GP 5400) / Level-8 (GP 4800)",
    "qualificationText": "Graduate / Degree / Diploma / 10th / 12th Pass",
    "qualifications": [
      "graduate",
      "10th-pass",
      "12th-pass",
      "diploma"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "15-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/09/dmrc-supervisor-recruitment-2026.html",
      "notificationUrl": "https://drive.google.com/file/d/1sVL7tFLyQS70U751G8-yxl2uZ1qHJJaM/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/dmrc-supervisor-recruitment-2026.html"
    }
  },
  {
    "id": "idrbt-oracle-database-architect-vacancy-2026-notification-online-form",
    "title": "IDRBT Oracle Database Architect Vacancy 2026 - Notification, Online Form",
    "org": "IDRBT Oracle Database Architect Vacancy 2026",
    "shortOrg": "IDRBT Oracle Database Architec",
    "posts": "IDRBT Oracle Database Architect",
    "vacancies": 700,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/09/idrbt-oracle-database-architect-vacancy.html",
      "notificationUrl": "https://www.idrbt.ac.in/wp-content/uploads/2026/08/Oracle-DBA-Advt-31-Aug-2026.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/idrbt-oracle-database-architect-vacancy.html"
    }
  },
  {
    "id": "idrbt-faculty-recruitment-2026-apply-online-for-15-posts-rolling-advertisement",
    "title": "IDRBT Faculty Recruitment 2026 - Apply Online for 15 Posts | Rolling Advertisement",
    "org": "IDRBT Faculty",
    "shortOrg": "IDRBT Faculty",
    "posts": "Faculty / Assistant Professor / Associate Professor",
    "vacancies": 15,
    "salary": "pay scale in IDRBT Faculty Recruitment 2026?",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "bed-teaching"
    ],
    "category": "teaching",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/09/idrbt-faculty-recruitment.html",
      "notificationUrl": "https://www.idrbt.ac.in/wp-content/uploads/2026/08/Fac_Advt_July-2026.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/idrbt-faculty-recruitment.html"
    }
  },
  {
    "id": "indian-ports-association-consultant-recruitment-2026-apply-for-05-posts-last-dat",
    "title": "Indian Ports Association Consultant Recruitment 2026 - Apply for 05 Posts | Last Date 18-09-2026",
    "org": "Indian Ports Association Consultant",
    "shortOrg": "Indian Ports Association Consu",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 5,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "18-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/09/indian-ports-association-consultant.html",
      "notificationUrl": "https://docs.google.com/viewer?url=https%3A%2F%2Fwww.vocport.gov.in%2Fapi%2Ffiles%2Fcareers%2Fcareer-1788167885992-674329431.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/indian-ports-association-consultant.html"
    }
  },
  {
    "id": "niscpr-project-staff-recruitment-2026-walk-in-interview-for-14-posts",
    "title": "NISCPR Project Staff Recruitment 2026 - Walk in Interview for 14 Posts",
    "org": "NISCPR Project Staff",
    "shortOrg": "NISCPR Project Staff",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 14,
    "salary": "₹25,000 to ₹42,000",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "12th-pass"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/09/niscpr-project-staff-recruitment-2026.html",
      "notificationUrl": "https://niscpr.res.in/includes/images/jobs/Advertisment-ULIP-VII-2026-2026-07-31-03-05-19pm.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/niscpr-project-staff-recruitment-2026.html"
    }
  },
  {
    "id": "moil-limited-manager-medical-services-recruitment-2026-walk-in-interview-on-22-0",
    "title": "MOIL Limited Manager Medical Services Recruitment 2026 - Walk in Interview on 22-09-2026",
    "org": "MOIL Limited Manager Medical Services",
    "shortOrg": "MOIL Limited Manager Medical S",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 700,
    "salary": "As per 7th Pay Matrix / Institutional Pay Rules (Refer Official Notification)",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "medical-nursing"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/09/moil-limited-manager-medical-services.html",
      "notificationUrl": "https://drive.google.com/file/d/1MjEim73WYqgcZzvIgDu5KiklEU5t3mnA/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/moil-limited-manager-medical-services.html"
    }
  },
  {
    "id": "bel-kochi-deputy-engineer-recruitment-2026-apply-for-14-posts-last-date-23-09-20",
    "title": "BEL Kochi Deputy Engineer Recruitment 2026 - Apply for 14 Posts | Last Date 23-09-2026",
    "org": "BEL Kochi Deputy Engineer",
    "shortOrg": "BEL Kochi Deputy Engineer",
    "posts": "Project Engineer / Executive Trainee",
    "vacancies": 14,
    "salary": "pay scale, reservation, official notification and application form lin",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "btech-engineering"
    ],
    "category": "psu",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "23-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/09/bel-kochi-deputy-engineer-recruitment.html",
      "notificationUrl": "https://drive.google.com/file/d/1JrDhlewR_hTBCf9ZqMjXwnKLMn4UlVWS/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/09/bel-kochi-deputy-engineer-recruitment.html"
    }
  },
  {
    "id": "stockholding-ciso-recruitment-2026-apply-online-for-02-posts-last-date-02-09-202",
    "title": "StockHolding CISO Recruitment 2026 - Apply Online for 02 Posts | Last Date 02-09-2026",
    "org": "StockHolding CISO",
    "shortOrg": "StockHolding CISO",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 2,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Graduate / Degree / Diploma / 10th / 12th Pass",
    "qualifications": [
      "graduate",
      "10th-pass",
      "12th-pass",
      "diploma"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "02-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://online.stockholding.com/oln_career/cand_login_dtls.aspx?code=DYCISOFTE",
      "notificationUrl": "https://drive.google.com/file/d/1A2VXKgqeyJzIP3b2K_NnaG98lASko556/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/stockholding-ciso-recruitment.html"
    }
  },
  {
    "id": "gmdc-it-professional-recruitment-2026-notification-online-form-last-date-02-09-2",
    "title": "GMDC IT Professional Recruitment 2026: Notification, Online Form | Last Date 02-09-2026",
    "org": "GMDC IT Professional",
    "shortOrg": "GMDC IT Professional",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 700,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "02-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/gmdc-it-professional-recruitment.html",
      "notificationUrl": "https://www.gmdcltd.com/wp-content/uploads/2026/08/filenamehnbaOELZIdxYAdvertisement_IT-Dept.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/gmdc-it-professional-recruitment.html"
    }
  },
  {
    "id": "free-job-alert-latest-freejobalert-govt-job-notifications-2026",
    "title": "Free Job Alert - Latest FreeJobAlert Govt Job Notifications 2026",
    "org": "Free Job Alert",
    "shortOrg": "Free Job Alert",
    "posts": "Latest FreeJobAlert Govt Job Notifications 2026",
    "vacancies": 172,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2019/10/Free-Job-Alert.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2019/10/Free-Job-Alert.html"
    }
  },
  {
    "id": "all-india-government-jobs-2026-latest-sarkari-naukri-134403-vacancies",
    "title": "All India Government Jobs 2026 - Latest Sarkari Naukri 134403+ Vacancies",
    "org": "All India Government Jobs 2026",
    "shortOrg": "All India Government Jobs 2026",
    "posts": "All India Government",
    "vacancies": 172,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2015/10/Government-Jobs.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2015/10/Government-Jobs.html"
    }
  },
  {
    "id": "ibps-rrb-xv-recruitment-2026-apply-online-for-13742-office-assistant-and-officer",
    "title": "IBPS RRB XV Recruitment 2026 - Apply Online for 13742+ Office Assistant and Officer Posts | Last Date 21-09-2026",
    "org": "IBPS RRB XV",
    "shortOrg": "IBPS RRB XV",
    "posts": "Specialist Officer / Executive Officer",
    "vacancies": 700,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "railway",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-01",
      "lastDate": "21-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/ibps-rrb-xv-recruitment.html",
      "notificationUrl": "https://www.ibps.in/wp-content/uploads/CRP-RRBs-XV-notification.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/ibps-rrb-xv-recruitment.html"
    }
  },
  {
    "id": "bgssl-recruitment-2026-apply-online-for-1949-various-posts-last-date-30-09-2026",
    "title": "BGSSL Recruitment 2026 Apply Online for 1949 Various Posts | Last Date 30-09-2026",
    "org": "BGSSL",
    "shortOrg": "BGSSL",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 700,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Graduate / Degree / Diploma / 10th / 12th Pass",
    "qualifications": [
      "graduate",
      "10th-pass",
      "12th-pass",
      "diploma"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-31",
      "lastDate": "30-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/bgssl-recruitment.html",
      "notificationUrl": "https://drive.google.com/file/d/1oaR3jQAIHIz4EI8L_y8zZueyaypttKPX/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/bgssl-recruitment.html"
    }
  },
  {
    "id": "beml-non-executive-recruitment-2026-apply-online-for-10-posts-for-fresher-diplom",
    "title": "BEML Non Executive Recruitment 2026 - Apply Online for 10 Posts for Fresher Diploma | Last Date 08-09-2026",
    "org": "BEML Non Executive",
    "shortOrg": "BEML Non Executive",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 10,
    "salary": "pay scale, application fee, last date and selection process.",
    "qualificationText": "3 Year Full time Polytechnic Engineering Diploma in Electronics &amp; Communication, Electrical &amp; Electronics, Instr",
    "qualifications": [
      "graduate",
      "diploma",
      "btech-engineering"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-31",
      "lastDate": "08-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://beml.registrationform.in/secuRegister_14Of2026vEr27/notification/KP_S_14_2026%20-V1.pdf",
      "notificationUrl": "https://beml.registrationform.in/secuRegister_14Of2026vEr27/notification/KP_S_14_2026%20-V1.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/beml-non-executive-recruitment.html"
    }
  },
  {
    "id": "india-post-gds-july-recruitment-2026-apply-online-for-23757-posts-last-date-21-0",
    "title": "India Post GDS July Recruitment 2026 Apply Online for 23757 Posts | Last Date 21-09-2026",
    "org": "India Post GDS July",
    "shortOrg": "India Post GDS July",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 23757,
    "salary": "₹12,000 – ₹29,380",
    "qualificationText": "Secondary School Examination 10th pass with passing marks in Mathematics and English from a recognized Board. Candidat",
    "qualifications": [
      "graduate",
      "10th-pass"
    ],
    "category": "no-exam",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-31",
      "lastDate": "21-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://indiapost.gov.in/gdsonlineengagement/pdf/descriptive-notification.pdf",
      "notificationUrl": "https://indiapost.gov.in/gdsonlineengagement/pdf/descriptive-notification.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/india-post-gds-july-recruitment-2026.html"
    }
  },
  {
    "id": "sbi-trade-finance-officer-recruitment-2026-apply-online-for-35-posts-last-date-1",
    "title": "SBI Trade Finance Officer Recruitment 2026: Apply Online for 35 Posts | Last Date 19-09-2026",
    "org": "SBI Trade Finance Officer",
    "shortOrg": "SBI Trade Finance Officer",
    "posts": "Specialist Officer / Executive Officer",
    "vacancies": 35,
    "salary": "pay scale, application fee, selection process, official notification a",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "iti"
    ],
    "category": "banking",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-31",
      "lastDate": "19-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://recruitment.sbi.bank.in/crpd-sco-2026-27-15/apply",
      "notificationUrl": "https://drive.google.com/file/d/1Ax0inIxvFcU7Eyp7amgU1WXbRVbrVmgz/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/sbi-trade-finance-officer-recruitment.html"
    }
  },
  {
    "id": "uco-bank-it-specialist-officer-recruitment-2026-apply-online-for-20-posts-last-d",
    "title": "UCO Bank IT Specialist Officer Recruitment 2026 - Apply Online for 20 Posts | Last Date 18-09-2026",
    "org": "UCO Bank IT Specialist Officer",
    "shortOrg": "UCO Bank IT Specialist Officer",
    "posts": "Specialist Officer / Executive Officer",
    "vacancies": 20,
    "salary": "pay scale, application fee, selection process, official notification,",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "banking",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-31",
      "lastDate": "18-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://onlineappl.ucoonline.bank.in/SPE_RCER/",
      "notificationUrl": "https://drive.google.com/file/d/1DGYQDfN2zNYW2yWqoP2jMpqTrryWc5TC/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/uco-bank-it-specialist-officer.html"
    }
  },
  {
    "id": "concor-mt-and-assistant-officer-recruitment-2026-apply-online-for-77-posts-last-",
    "title": "CONCOR MT and Assistant Officer Recruitment 2026 - Apply Online for 77 Posts | Last Date 30-09-2026",
    "org": "CONCOR MT and Assistant Officer",
    "shortOrg": "CONCOR MT and Assistant Office",
    "posts": "Specialist Officer / Executive Officer",
    "vacancies": 77,
    "salary": "pay scale, and how to apply.",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-31",
      "lastDate": "30-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/concor-mt-assistant-officer.html",
      "notificationUrl": "https://cms.concorindia.co.in:8000/uploads/cms/pdf/Asf6Xc3Mnw5BWdp_FinalAdvertisement-18thAug2026(Published).pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/concor-mt-assistant-officer.html"
    }
  },
  {
    "id": "iob-generalist-so-recruitment-2026-apply-online-for-291-posts-last-date-15-09-20",
    "title": "IOB Generalist SO Recruitment 2026 - Apply Online for 291 Posts | Last Date 15-09-2026",
    "org": "IOB Generalist SO",
    "shortOrg": "IOB Generalist SO",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 291,
    "salary": "pay scale, exam pattern, official notification PDF and apply online li",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-31",
      "lastDate": "15-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/iob-generalist-so-recruitment.html",
      "notificationUrl": "https://drive.google.com/file/d/1jUZOts6VGIH1XqPi1LMwvIcA2rFzSjWF/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/iob-generalist-so-recruitment.html"
    }
  },
  {
    "id": "rail-wheel-factory-sports-quota-recruitment-2026-notification-for-15-posts-appli",
    "title": "Rail Wheel Factory Sports Quota Recruitment 2026 - Notification for 15 Posts, Application Form | Last Date 31-08-2026",
    "org": "Rail Wheel Factory Sports Quota",
    "shortOrg": "Rail Wheel Factory Sports Quot",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 15,
    "salary": "Level-2 (GP 1900) and Level-1 (GP 1800). Interested and eligible candi",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-31",
      "lastDate": "31-08-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/07/rail-wheel-factory-sports-quota.html",
      "notificationUrl": "https://drive.google.com/file/d/11WgJJcLz51BGvpPQZz-kVeO5JByl8ddf/view",
      "websiteUrl": "https://www.indgovtjobs.in/2026/07/rail-wheel-factory-sports-quota.html"
    }
  },
  {
    "id": "sbi-clerk-recruitment-2026-apply-online-for-9766-regular-backlog-posts-last-date",
    "title": "SBI Clerk Recruitment 2026 - Apply Online for 9766 Regular & Backlog Posts | Last Date 31-08-2026",
    "org": "SBI Clerk",
    "shortOrg": "SBI Clerk",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 700,
    "salary": "Pay Matrix Level-1 / Level-2 (₹36,000 – ₹89,890/- + Bank Allowances)",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "banking",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-30",
      "lastDate": "31-08-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/sbi-clerk-recruitment.html",
      "notificationUrl": "https://drive.google.com/file/d/1OdqZgvx1KsJlKhio8kbW_Pn5QKSPvRfL/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/sbi-clerk-recruitment.html"
    }
  },
  {
    "id": "31-august-2026-closing-govt-jobs-notifications-list-apply-online",
    "title": "31 August 2026 Closing Govt Jobs - Notifications List, Apply Online",
    "org": "31 August 2026 Closing Govt Jobs",
    "shortOrg": "31 August 2026 Closing Govt Jo",
    "posts": "Notifications List,",
    "vacancies": 193,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Graduate / Degree / Diploma / 10th / 12th Pass",
    "qualifications": [
      "graduate",
      "10th-pass",
      "12th-pass",
      "diploma"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-30",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2024/02/last-date-government-jobs.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2024/02/last-date-government-jobs.html"
    }
  },
  {
    "id": "indbank-relationship-manager-dealer-recruitment-2026-apply-for-14-posts-last-dat",
    "title": "Indbank Relationship Manager & Dealer Recruitment 2026 - Apply for 14 Posts | Last Date 31-08-2026",
    "org": "Indbank Relationship Manager & Dealer",
    "shortOrg": "Indbank Relationship Manager &",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 14,
    "salary": "pay scale in Indbank Relationship Manager &amp; Dealer Recruitment 202",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "banking",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-30",
      "lastDate": "31-08-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indbankonline.com/v/?v=2026/08/Advertisement-for-the-post-of-Relationshipmanager-Dealer-dated-10.08.2026.pdf",
      "notificationUrl": "https://www.indbankonline.com/v/?v=2026/08/Advertisement-for-the-post-of-Relationshipmanager-Dealer-dated-10.08.2026.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/indbank-relationship-manager-dealer.html"
    }
  },
  {
    "id": "gpcb-bank-clerk-recruitment-2026-apply-online-for-13-posts-last-date-31-08-2026",
    "title": "GPCB Bank Clerk Recruitment 2026 - Apply Online for 13 Posts | Last Date 31-08-2026",
    "org": "GPCB Bank Clerk",
    "shortOrg": "GPCB Bank Clerk",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 13,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "banking",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-30",
      "lastDate": "31-08-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/gpcb-bank-clerk-recruitment.html",
      "notificationUrl": "https://gpcb.bank.in/assets/documents/Detailed-Adevertisement.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/gpcb-bank-clerk-recruitment.html"
    }
  },
  {
    "id": "nalanda-university-non-teaching-recruitment-2026-apply-online-for-assistant-libr",
    "title": "Nalanda University Non Teaching Recruitment 2026 - Apply Online for Assistant, Librarian & Engineer Posts | Last Date 31-08-2026",
    "org": "Nalanda University Non Teaching",
    "shortOrg": "Nalanda University Non Teachin",
    "posts": "Project Engineer / Executive Trainee",
    "vacancies": 700,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "btech-engineering"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-30",
      "lastDate": "31-08-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/nalanda-university-non-teaching.html",
      "notificationUrl": "https://nalandauniv.edu.in/wp-content/uploads/2026/08/2.-Recruitment-Notice-03.08.2026-1.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/nalanda-university-non-teaching.html"
    }
  },
  {
    "id": "sgpgims-faculty-recruitment-2026-apply-offline-for-70-posts-last-date-31-08-2026",
    "title": "SGPGIMS Faculty Recruitment 2026: Apply Offline for 70 Posts | Last Date 31-08-2026",
    "org": "SGPGIMS Faculty",
    "shortOrg": "SGPGIMS Faculty",
    "posts": "Faculty / Assistant Professor / Associate Professor",
    "vacancies": 70,
    "salary": "pay scale, official short notification, and how to apply.",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "bed-teaching"
    ],
    "category": "teaching",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-30",
      "lastDate": "31-08-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/07/sgpgims-faculty-recruitment.html",
      "notificationUrl": "https://drive.google.com/file/d/1Qu71XzT2tRYBTlQrooNjA-bf5fhJuYX7/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/07/sgpgims-faculty-recruitment.html"
    }
  },
  {
    "id": "latest-officer-govt-jobs-2026-2000-vacancies-opening",
    "title": "Latest Officer Govt Jobs 2026 (2000+ Vacancies Opening)",
    "org": "Latest Officer Govt Jobs 2026 (2000+ Vacancies Opening)",
    "shortOrg": "Latest Officer Govt Jobs 2026 ",
    "posts": "Latest Officer Govt",
    "vacancies": 131,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-29",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2023/04/Officer-Govt-Jobs.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2023/04/Officer-Govt-Jobs.html"
    }
  },
  {
    "id": "teacher-government-jobs-2026-50000-vacancies-opening",
    "title": "Teacher Government Jobs 2026 (50000+ Vacancies Opening)",
    "org": "Teacher Government Jobs 2026 (50000+ Vacancies Opening)",
    "shortOrg": "Teacher Government Jobs 2026 (",
    "posts": "Teacher Government",
    "vacancies": 50,
    "salary": "pay scales and additional benefits compared to state-level positions.",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "bed-teaching"
    ],
    "category": "teaching",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-29",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2014/11/govt-teachers-jobs.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2014/11/govt-teachers-jobs.html"
    }
  },
  {
    "id": "latest-stenographer-typist-govt-jobs-2026-500-vacancies",
    "title": "Latest Stenographer & Typist Govt Jobs 2026 | 500+ Vacancies",
    "org": "Latest Stenographer & Typist Govt Jobs 2026 | 500+ Vacancies",
    "shortOrg": "Latest Stenographer & Typist G",
    "posts": "Latest Stenographer & Typist Govt",
    "vacancies": 132,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Graduate / Degree / Diploma / 10th / 12th Pass",
    "qualifications": [
      "graduate",
      "10th-pass",
      "12th-pass",
      "diploma"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-29",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2017/03/Stenographer-Jobs-Typist.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2017/03/Stenographer-Jobs-Typist.html"
    }
  },
  {
    "id": "cpcb-recruitment-2026-apply-online-for-51-scientist-assistant-deo-other-posts-la",
    "title": "CPCB Recruitment 2026 - Apply Online for 51 Scientist, Assistant, DEO & Other Posts | Last Date 07-09-2026",
    "org": "CPCB",
    "shortOrg": "CPCB",
    "posts": "Scientist / Research Associate",
    "vacancies": 700,
    "salary": "₹38,741 – ₹1,71,597",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-29",
      "lastDate": "07-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/cpcb-recruitment-advt-no-02-2026.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/cpcb-recruitment-advt-no-02-2026.html"
    }
  },
  {
    "id": "income-tax-pune-sports-quota-recruitment-2026-apply-online-for-85-posts-last-dat",
    "title": "Income Tax Pune Sports Quota Recruitment 2026 - Apply Online for 85 Posts | Last Date 15-09-2026",
    "org": "Income Tax Pune Sports Quota",
    "shortOrg": "Income Tax Pune Sports Quota",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 85,
    "salary": "Level-4 (₹25,500 – 81,100)",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-29",
      "lastDate": "15-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/income-tax-pune-sports-quota.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/income-tax-pune-sports-quota.html"
    }
  },
  {
    "id": "aai-northern-region-apprentice-recruitment-2026-apply-online-for-205-posts-last-",
    "title": "AAI Northern Region Apprentice Recruitment 2026 - Apply Online for 205 Posts | Last Date 16-09-2026",
    "org": "AAI Northern Region Apprentice",
    "shortOrg": "AAI Northern Region Apprentice",
    "posts": "Apprentice (Trade / Technician / Graduate)",
    "vacancies": 205,
    "salary": "₹9,600 to ₹15,000",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "iti"
    ],
    "category": "no-exam",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-29",
      "lastDate": "16-09-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/aai-northern-region-apprentice.html",
      "notificationUrl": "https://www.aai.aero/sites/default/files/examdashboard_advertisement/Final%20Advt.%20App.%202026-27-RHQ-NR.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/aai-northern-region-apprentice.html"
    }
  },
  {
    "id": "employment-news-29-august-to-04-september-2026-pdf-download-weekly-govt-job-noti",
    "title": "Employment News 29 August to 04 September 2026 - Pdf Download, Weekly Govt Job Notifications",
    "org": "Employment News 29 August to 04 September 2026",
    "shortOrg": "Employment News 29 August to 0",
    "posts": "Pdf Download, Weekly Govt Job Notifications",
    "vacancies": 147,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "\"Question\",",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-29",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2017/04/Employment-News.html",
      "notificationUrl": "https://drive.google.com/file/d/1anLu7LkWZilCXGXj_FVSINT5XW_Pg-Hu/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2017/04/Employment-News.html"
    }
  },
  {
    "id": "post-graduate-govt-jobs-2026-ma-msc-mba-mca-mtech-vacancies-list",
    "title": "Post Graduate Govt Jobs 2026 - MA, M.Sc, MBA, MCA, M.Tech Vacancies List",
    "org": "Post Graduate Govt Jobs 2026",
    "shortOrg": "Post Graduate Govt Jobs 2026",
    "posts": "Post Graduate Govt",
    "vacancies": 131,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "mba-pgdm",
      "post-graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-29",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2014/01/pg-jobs-2014-govt-sector.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2014/01/pg-jobs-2014-govt-sector.html"
    }
  },
  {
    "id": "sainik-school-recruitment-2026-latest-vacancy-notifications",
    "title": "Sainik School Recruitment 2026 - Latest Vacancy Notifications",
    "org": "Sainik School",
    "shortOrg": "Sainik School",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 118,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Graduate / Degree / Diploma / 10th / 12th Pass",
    "qualifications": [
      "graduate",
      "10th-pass",
      "12th-pass",
      "diploma"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-29",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2024/05/Sainik-School-Recruitment.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2024/05/Sainik-School-Recruitment.html"
    }
  },
  {
    "id": "sainik-school-ambikapur-recruitment-2026-apply-for-ward-boy-band-master-pem-pti-",
    "title": "Sainik School Ambikapur Recruitment 2026 - Apply for Ward Boy, Band Master, PEM PTI & Lab Assistant Posts",
    "org": "Sainik School Ambikapur",
    "shortOrg": "Sainik School Ambikapur",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 700,
    "salary": "pay scale in Sainik School Ambikapur Recruitment 2026?",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate",
      "post-graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-29",
      "lastDate": "11 September 2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/sainik-school-ambikapur-recruitment.html",
      "notificationUrl": "https://www.sainikschoolambikapur.org.in/pdf/Recruit%20of%20Staff_2026.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/sainik-school-ambikapur-recruitment.html"
    }
  },
  {
    "id": "latest-mts-govt-jobs-2026-20000-vacancies-open-now",
    "title": "Latest MTS Govt Jobs 2026 (20000+ Vacancies Open Now)",
    "org": "Latest MTS Govt Jobs 2026 (20000+ Vacancies Open Now)",
    "shortOrg": "Latest MTS Govt Jobs 2026 (200",
    "posts": "Latest MTS Govt",
    "vacancies": 132,
    "salary": "Pay Scale for MTS Jobs in Govt Sector?",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-29",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2019/10/MTS-Jobs.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2019/10/MTS-Jobs.html"
    }
  },
  {
    "id": "latest-assistant-govt-jobs-2026-60222-vacancies-open-now",
    "title": "Latest Assistant Govt Jobs 2026 (60222+ Vacancies Open Now)",
    "org": "Latest Assistant Govt Jobs 2026 (60222+ Vacancies Open Now)",
    "shortOrg": "Latest Assistant Govt Jobs 202",
    "posts": "Latest Assistant Govt",
    "vacancies": 164,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-29",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2019/08/Assistant-Govt-Jobs.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2019/08/Assistant-Govt-Jobs.html"
    }
  },
  {
    "id": "latest-court-jobs-2026-1192-govt-vacancies-opening",
    "title": "Latest Court Jobs 2026 (1192+ Govt Vacancies Opening)",
    "org": "Latest Court Jobs 2026 (1192+ Govt Vacancies Opening)",
    "shortOrg": "Latest Court Jobs 2026 (1192+ ",
    "posts": "Latest Court",
    "vacancies": 126,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Graduate / Degree / Diploma / 10th / 12th Pass",
    "qualifications": [
      "graduate",
      "10th-pass",
      "12th-pass",
      "diploma",
      "law-llb"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-29",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2024/06/High-Court-Jobs.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2024/06/High-Court-Jobs.html"
    }
  },
  {
    "id": "latest-clerk-govt-jobs-2026-25000-vacancies-opening",
    "title": "Latest Clerk Govt Jobs 2026 (25000+ Vacancies Opening)",
    "org": "Latest Clerk Govt Jobs 2026 (25000+ Vacancies Opening)",
    "shortOrg": "Latest Clerk Govt Jobs 2026 (2",
    "posts": "Latest Clerk Govt",
    "vacancies": 130,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-29",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2015/02/clerk-jobs-opening.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2015/02/clerk-jobs-opening.html"
    }
  },
  {
    "id": "stockholding-executive-recruitment-2026-apply-online-for-65-posts-last-date-30-0",
    "title": "StockHolding Executive Recruitment 2026 - Apply Online for 65 Posts | Last Date 30-08-2026",
    "org": "StockHolding Executive",
    "shortOrg": "StockHolding Executive",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 65,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-29",
      "lastDate": "30-08-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://online.stockholding.com/oln_career/cand_login_dtls.aspx?code=FTEREG",
      "notificationUrl": "https://drive.google.com/file/d/1A2VXKgqeyJzIP3b2K_NnaG98lASko556/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/stockholding-executive-recruitment.html"
    }
  },
  {
    "id": "sindhudurg-bank-peon-recruitment-2026-apply-online-for-32-posts-last-date-30-08-",
    "title": "Sindhudurg Bank Peon Recruitment 2026 - Apply Online for 32 Posts | Last Date 30-08-2026",
    "org": "Sindhudurg Bank Peon",
    "shortOrg": "Sindhudurg Bank Peon",
    "posts": "Peon / Office Attendant",
    "vacancies": 32,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "banking",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-29",
      "lastDate": "30-08-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/sindhudurg-bank-peon-recruitment.html",
      "notificationUrl": "https://sindhudurgdcc.bank.in/public/uploads/Peon-Advertise-2026.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/sindhudurg-bank-peon-recruitment.html"
    }
  },
  {
    "id": "jharkhand-para-teacher-recruitment-2026-apply-online-for-7299-posts-last-date-30",
    "title": "Jharkhand Para Teacher Recruitment 2026: Apply Online for 7299 Posts | Last Date 30-08-2026",
    "org": "Jharkhand Para Teacher",
    "shortOrg": "Jharkhand Para Teacher",
    "posts": "School Teacher / TGT / PGT",
    "vacancies": 7299,
    "salary": "Academic Pay Level-10 / 12 (₹57,700 – ₹1,44,200/- as per UGC)",
    "qualificationText": "Graduate / Degree / Diploma / 10th / 12th Pass",
    "qualifications": [
      "graduate",
      "10th-pass",
      "12th-pass",
      "diploma",
      "bed-teaching"
    ],
    "category": "teaching",
    "subCategory": "Recruitment 2026",
    "state": "jharkhand",
    "importantDates": {
      "startDate": "2026-08-29",
      "lastDate": "30-08-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/07/jharkhand-para-teacher-recruitment.html",
      "notificationUrl": "https://drive.google.com/file/d/1RYoc1LtoU1lLgxXMirm10FQUZVZatWa8/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/07/jharkhand-para-teacher-recruitment.html"
    }
  },
  {
    "id": "latest-fireman-fire-and-safety-govt-job-vacancies-2026",
    "title": "Latest Fireman, Fire and Safety Govt Job Vacancies 2026",
    "org": "Latest Fireman, Fire and Safety Govt Job Vacancies 2026",
    "shortOrg": "Latest Fireman, Fire and Safet",
    "posts": "Latest Fireman, Fire and Safety Govt Job",
    "vacancies": 134,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Graduate / Degree / Diploma / 10th / 12th Pass",
    "qualifications": [
      "graduate",
      "10th-pass",
      "12th-pass",
      "diploma"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-28",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2019/12/Fireman-Jobs.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2019/12/Fireman-Jobs.html"
    }
  },
  {
    "id": "latest-forest-govt-jobs-2026-500-new-vacancies-open",
    "title": "Latest Forest Govt Jobs 2026 (500+ New Vacancies Open)",
    "org": "Latest Forest Govt Jobs 2026 (500+ New Vacancies Open)",
    "shortOrg": "Latest Forest Govt Jobs 2026 (",
    "posts": "Latest Forest Govt",
    "vacancies": 140,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Graduate / Degree / Diploma / 10th / 12th Pass",
    "qualifications": [
      "graduate",
      "10th-pass",
      "12th-pass",
      "diploma"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-28",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2019/12/Forest-Jobs.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2019/12/Forest-Jobs.html"
    }
  },
  {
    "id": "latest-defence-jobs-2026-2500-govt-vacancies-open-now",
    "title": "Latest Defence Jobs 2026 (2500+ Govt Vacancies Open Now)",
    "org": "Latest Defence Jobs 2026 (2500+ Govt Vacancies Open Now)",
    "shortOrg": "Latest Defence Jobs 2026 (2500",
    "posts": "Latest Defence",
    "vacancies": 131,
    "salary": "Level-6 / Level-7 Pay Scale + Allowances",
    "qualificationText": "Graduate / Degree / Diploma / 10th / 12th Pass",
    "qualifications": [
      "graduate",
      "10th-pass",
      "12th-pass",
      "diploma"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-28",
      "lastDate": "2026-09-30",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2018/02/defence-jobs-govt-vacancy.html",
      "notificationUrl": "https://www.indgovtjobs.in",
      "websiteUrl": "https://www.indgovtjobs.in/2018/02/defence-jobs-govt-vacancy.html"
    }
  },
  {
    "id": "south-indian-bank-junior-officer-recruitment-2026-notification-online-form-last-",
    "title": "South Indian Bank Junior Officer Recruitment 2026 - Notification, Online Form | Last Date 31-08-2026",
    "org": "South Indian Bank Junior Officer",
    "shortOrg": "South Indian Bank Junior Offic",
    "posts": "Specialist Officer / Executive Officer",
    "vacancies": 50,
    "salary": "₹5,000–₹10,000",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "banking",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-28",
      "lastDate": "31-08-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/south-indian-bank-junior-officer.html",
      "notificationUrl": "https://drive.google.com/file/d/1q1jCUpNLc3lWkHs7ruMNbU49d6sa3nn6/view?usp=sharing",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/south-indian-bank-junior-officer.html"
    }
  },
  {
    "id": "ngel-manager-recruitment-2026-apply-online-for-34-posts-last-date-31-08-2026",
    "title": "NGEL Manager Recruitment 2026 - Apply Online for 34 Posts | Last Date 31-08-2026",
    "org": "NGEL Manager",
    "shortOrg": "NGEL Manager",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 34,
    "salary": "As per 7th Pay Matrix / Institutional Pay Rules (Refer Official Notification)",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-28",
      "lastDate": "31-08-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/ngel-manager-recruitment.html",
      "notificationUrl": "https://ngel.in/public/career/1/54361adc7b/54361adc7b.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/ngel-manager-recruitment.html"
    }
  },
  {
    "id": "neepco-junior-engineer-recruitment-2026-apply-online-for-07-posts-last-date-31-0",
    "title": "NEEPCO Junior Engineer Recruitment 2026 - Apply Online for 07 Posts | Last Date 31-08-2026",
    "org": "NEEPCO Junior Engineer",
    "shortOrg": "NEEPCO Junior Engineer",
    "posts": "Project Engineer / Executive Trainee",
    "vacancies": 7,
    "salary": "pay scale in NEEPCO Junior Engineer Recruitment 2026?",
    "qualificationText": "Graduate / Degree / Diploma / 10th / 12th Pass",
    "qualifications": [
      "graduate",
      "10th-pass",
      "12th-pass",
      "diploma",
      "btech-engineering"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-08-28",
      "lastDate": "31-08-2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/08/neepco-junior-engineer-recruitment.html",
      "notificationUrl": "https://neepco.co.in/neepco/sites/default/files/2026-08/advt_je_english_version_aggbps_tgbps_0.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/08/neepco-junior-engineer-recruitment.html"
    }
  },
  {
    "id": "karnataka-forest-watcher-recruitment-2026-notification-out-for-774-posts-apply-o",
    "title": "Karnataka Forest Watcher Recruitment 2026 Notification Out for 774 Posts | Apply Online up to 31-08-2026",
    "org": "Karnataka Forest Watcher",
    "shortOrg": "Karnataka Forest Watcher",
    "posts": "Various Technical & Administrative Posts",
    "vacancies": 774,
    "salary": "As per 7th Pay Matrix / Institutional Pay Rules (Refer Official Notification)",
    "qualificationText": "Bachelor’s Degree in any discipline from recognized University",
    "qualifications": [
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Recruitment 2026",
    "state": "karnataka",
    "importantDates": {
      "startDate": "2026-08-28",
      "lastDate": "31 August 2026",
      "examDate": "To be notified by board"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 35 Years (Relaxation as per norms)",
    "ageRelaxation": "Standard Relaxation for SC/ST/OBC/PwBD as per Government Rules",
    "officialLinks": {
      "applyUrl": "https://www.indgovtjobs.in/2026/07/karnataka-forest-watcher-recruitment.html",
      "notificationUrl": "https://aranya.gov.in/aranyacms/(S(khhcmbwy1bl2bqtyzral2urc))/downloads/latestNews/750%20FW%20final%20notification%20Mysore%20circle_compressed_20-07-2026_04.58.34.pdf",
      "websiteUrl": "https://www.indgovtjobs.in/2026/07/karnataka-forest-watcher-recruitment.html"
    }
  },
  {
    "id": "psu-govt-jobs",
    "title": "Latest PSU Jobs 2026 | Public Sector Company Jobs | 4433+ Vacancies",
    "org": "Latest PSU Jobs 2026 | Public Sector Company Jobs | 4433+ Vacancies",
    "shortOrg": "Latest PSU Jobs 2026 | Public ",
    "posts": "Project Engineer / Executive Trainee",
    "vacancies": 12,
    "salary": "Level-6 to Level-10 / IDA Pay Scales (₹40,000 – ₹1,40,000/-)",
    "qualificationText": "Degree in Engineering (B.E./B.Tech) / Diploma / Graduate from recognized University",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Public Sector Undertaking (PSU)",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "To be notified"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 30 / 35 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2019/07/PSU-Govt-Jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2019/07/PSU-Govt-Jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2019/07/PSU-Govt-Jobs.html"
    }
  },
  {
    "id": "railway-jobs",
    "title": "Railway Jobs 2026 Apply Online (11338 New Vacancies)",
    "org": "Railway Jobs 2026 Apply Online (11338 New Vacancies)",
    "shortOrg": "Railway Jobs 2026 Apply Online",
    "posts": "Project Engineer / Executive Trainee",
    "vacancies": 12,
    "salary": "Level-6 to Level-10 / IDA Pay Scales (₹40,000 – ₹1,40,000/-)",
    "qualificationText": "Degree in Engineering (B.E./B.Tech) / Diploma / Graduate from recognized University",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Public Sector Undertaking (PSU)",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "To be notified"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 30 / 35 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2026/09/railway-jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2026/09/railway-jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2026/09/railway-jobs.html"
    }
  },
  {
    "id": "free-job-alert",
    "title": "Free Job Alert – Latest FreeJobAlert Govt Job Notifications 2026",
    "org": "Free Job Alert – Latest FreeJobAlert Govt Job",
    "shortOrg": "Free Job Alert – Latest FreeJo",
    "posts": "Project Engineer / Executive Trainee",
    "vacancies": 12,
    "salary": "Level-6 to Level-10 / IDA Pay Scales (₹40,000 – ₹1,40,000/-)",
    "qualificationText": "Degree in Engineering (B.E./B.Tech) / Diploma / Graduate from recognized University",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Public Sector Undertaking (PSU)",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "To be notified"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 30 / 35 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2019/10/Free-Job-Alert.html",
      "notificationUrl": "https://rozgardwaar.com/2019/10/Free-Job-Alert.html",
      "websiteUrl": "https://rozgardwaar.com/2019/10/Free-Job-Alert.html"
    }
  },
  {
    "id": "pg-jobs-2014-govt-sector",
    "title": "Post Graduate Govt Jobs 2026 – MA, M.Sc, MBA, MCA, M.Tech Vacancies List",
    "org": "Post Graduate Govt Jobs 2026 – MA, M.Sc, MBA, MCA, M.Tech Vacancies List",
    "shortOrg": "Post Graduate Govt Jobs 2026 –",
    "posts": "Project Engineer / Executive Trainee",
    "vacancies": 12,
    "salary": "Level-6 to Level-10 / IDA Pay Scales (₹40,000 – ₹1,40,000/-)",
    "qualificationText": "Degree in Engineering (B.E./B.Tech) / Diploma / Graduate from recognized University",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Public Sector Undertaking (PSU)",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "To be notified"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 30 / 35 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2014/01/pg-jobs-2014-govt-sector.html",
      "notificationUrl": "https://rozgardwaar.com/2014/01/pg-jobs-2014-govt-sector.html",
      "websiteUrl": "https://rozgardwaar.com/2014/01/pg-jobs-2014-govt-sector.html"
    }
  },
  {
    "id": "ngel-manager-recruitment",
    "title": "NGEL Manager Recruitment 2026 – Apply Online for 34 Posts | Last Date 31-08-2026",
    "org": "NGEL Manager",
    "shortOrg": "NGEL Manager",
    "posts": "Project Engineer / Executive Trainee",
    "vacancies": 12,
    "salary": "Level-6 to Level-10 / IDA Pay Scales (₹40,000 – ₹1,40,000/-)",
    "qualificationText": "Degree in Engineering (B.E./B.Tech) / Diploma / Graduate from recognized University",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Public Sector Undertaking (PSU)",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "31-08-2026",
      "examDate": "To be notified"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 30 / 35 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://ngel.in/public/career/1/54361adc7b/54361adc7b.pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "nspcl-advertisement-01-2026",
    "title": "NSPCL Advertisement 01/2026 – Apply Online for 17 Engineer & Officer Posts | Last Date 22-09-2026",
    "org": "NSPCL Advertisement 01/2026 – Apply Online for 17 Engineer & Officer Posts | Last Date 22-09-2026",
    "shortOrg": "NSPCL Advertisement 01/2026 – ",
    "posts": "Engineer & Officer",
    "vacancies": 17,
    "salary": "Level-6 to Level-10 / IDA Pay Scales (₹40,000 – ₹1,40,000/-)",
    "qualificationText": "Degree in Engineering (B.E./B.Tech) / Diploma / Graduate from recognized University",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Public Sector Undertaking (PSU)",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "22-09-2026",
      "examDate": "To be notified"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 30 / 35 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1SZmEmzqKyG1Um_P3btt2yViK4SNZfyxr/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1SZmEmzqKyG1Um_P3btt2yViK4SNZfyxr/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1SZmEmzqKyG1Um_P3btt2yViK4SNZfyxr/view?usp=sharing"
    }
  },
  {
    "id": "ongc-graduate-trainee-recruitment",
    "title": "ONGC Graduate Trainee Recruitment 2026 �� Apply Online for 52 Posts, Notification | Last Date 31-07-2026",
    "org": "ONGC Graduate Trainee",
    "shortOrg": "ONGC Graduate Trainee",
    "posts": "Project Engineer / Executive Trainee",
    "vacancies": 12,
    "salary": "Level-6 to Level-10 / IDA Pay Scales (₹40,000 – ₹1,40,000/-)",
    "qualificationText": "Degree in Engineering (B.E./B.Tech) / Diploma / Graduate from recognized University",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Public Sector Undertaking (PSU)",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "31-07-2026",
      "examDate": "To be notified"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 30 / 35 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://ongcindia.com/documents/77751/2660534/PDF4-170726.pdf",
      "notificationUrl": "https://ongcindia.com/documents/77751/2660534/PDF4-170726.pdf",
      "websiteUrl": "https://ongcindia.com/documents/77751/2660534/PDF4-170726.pdf"
    }
  },
  {
    "id": "gate-2026-jobs",
    "title": "GATE 2026 Score based PSU Recruitment List",
    "org": "GATE 2026 Score based PSU",
    "shortOrg": "GATE 2026 Score based PSU",
    "posts": "Project Engineer / Executive Trainee",
    "vacancies": 12,
    "salary": "Level-6 to Level-10 / IDA Pay Scales (₹40,000 – ₹1,40,000/-)",
    "qualificationText": "Degree in Engineering (B.E./B.Tech) / Diploma / Graduate from recognized University",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Public Sector Undertaking (PSU)",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "To be notified"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 30 / 35 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2026/03/GATE-2026-Jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2026/03/GATE-2026-Jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2026/03/GATE-2026-Jobs.html"
    }
  },
  {
    "id": "mrpl-fire-officer-recruitment",
    "title": "MRPL Fire Officer Recruitment 2026 – Apply Online for 05 Posts | Last Date 16-07-2026",
    "org": "MRPL Fire Officer",
    "shortOrg": "MRPL Fire Officer",
    "posts": "Project Engineer / Executive Trainee",
    "vacancies": 12,
    "salary": "Level-6 to Level-10 / IDA Pay Scales (₹40,000 – ₹1,40,000/-)",
    "qualificationText": "Degree in Engineering (B.E./B.Tech) / Diploma / Graduate from recognized University",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Public Sector Undertaking (PSU)",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "16-07-2026",
      "examDate": "To be notified"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 30 / 35 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1CwLmpugriWcj-ybzCp2l_OIQ8qpiKfHO/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1CwLmpugriWcj-ybzCp2l_OIQ8qpiKfHO/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1CwLmpugriWcj-ybzCp2l_OIQ8qpiKfHO/view?usp=sharing"
    }
  },
  {
    "id": "ongc-consultant-recruitment",
    "title": "ONGC Consultant Recruitment 2026 – Apply for 37 Posts | Last Date 19-06-2026",
    "org": "ONGC Consultant",
    "shortOrg": "ONGC Consultant",
    "posts": "Project Engineer / Executive Trainee",
    "vacancies": 12,
    "salary": "Level-6 to Level-10 / IDA Pay Scales (₹40,000 – ₹1,40,000/-)",
    "qualificationText": "Degree in Engineering (B.E./B.Tech) / Diploma / Graduate from recognized University",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Public Sector Undertaking (PSU)",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "19-06-2026",
      "examDate": "To be notified"
    },
    "fee": "As per Category (Refer Notification)",
    "ageLimit": "18 to 30 / 35 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://ongcindia.com/documents/77751/2659209/Consultants040626.pdf/16a21ea6-f980-6b6d-0c74-015b89b30716",
      "notificationUrl": "https://ongcindia.com/documents/77751/2659209/Consultants040626.pdf/16a21ea6-f980-6b6d-0c74-015b89b30716",
      "websiteUrl": "https://ongcindia.com/documents/77751/2659209/Consultants040626.pdf/16a21ea6-f980-6b6d-0c74-015b89b30716"
    }
  }
];

  const ADMIT_CARDS = [
  {
    "id": "ssc-cgl-admit-card",
    "title": "SSC CGL Tier-1 Exam 2026 Admit Card",
    "shortOrg": "SSC",
    "examDate": "2026-09-22",
    "downloadUrl": "https://ssc.gov.in"
  },
  {
    "id": "ibps-po-admit-card",
    "title": "IBPS PO / MT XIV Prelims Admit Card 2026",
    "shortOrg": "IBPS",
    "examDate": "2026-10-19",
    "downloadUrl": "https://www.ibps.in"
  },
  {
    "id": "rrb-alp-admit-card",
    "title": "RRB ALP & Technician CBT-1 Admit Card 2026",
    "shortOrg": "RRB",
    "examDate": "2026-11-25",
    "downloadUrl": "https://www.rrbapply.gov.in"
  },
  {
    "id": "upsc-cse-admit-card",
    "title": "UPSC Civil Services Mains 2026 E-Admit Card",
    "shortOrg": "UPSC",
    "examDate": "2026-09-20",
    "downloadUrl": "https://upsconline.nic.in"
  },
  {
    "id": "aiims-norcet-admit-card",
    "title": "AIIMS NORCET-7 Prelims Exam City Slip & Admit Card",
    "shortOrg": "AIIMS",
    "examDate": "2026-09-15",
    "downloadUrl": "https://www.aiimsexams.ac.in"
  }
];
  const RESULTS = [
  {
    "id": "ssc-chsl-final-result",
    "title": "SSC Combined Higher Secondary (10+2) Final Merit List & Cutoff",
    "shortOrg": "SSC",
    "declareDate": "2026-08-28",
    "downloadUrl": "https://ssc.gov.in"
  },
  {
    "id": "sbi-clerk-final-result",
    "title": "SBI Junior Associates (Clerk) Final Selection Result Declared",
    "shortOrg": "SBI",
    "declareDate": "2026-08-25",
    "downloadUrl": "https://sbi.co.in/careers"
  },
  {
    "id": "upsc-cds-result",
    "title": "UPSC Combined Defence Services (CDS) Written Exam Result",
    "shortOrg": "UPSC",
    "declareDate": "2026-08-20",
    "downloadUrl": "https://upsc.gov.in"
  }
];

  return {
    STATES: STATES,
    QUALIFICATIONS: QUALIFICATIONS,
    RECRUITMENTS: RECRUITMENTS,
    ADMIT_CARDS: ADMIT_CARDS,
    RESULTS: RESULTS
  };

})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.ROZGAR_DATA;
}
