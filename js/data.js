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
  },
  {
    "id": "fresher-jobs",
    "title": "114359 Fresher Govt Jobs 2026 – Latest No Experience Sarkari Vacancies",
    "org": "114359 Fresher Govt Jobs 2026 – Latest No Experience Sarkari Vacancies",
    "shortOrg": "114359 Fresher Govt Jobs 2026 ",
    "posts": "Various State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-8 (₹25,500 – ₹92,300/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "State Government Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per Notification"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2015/01/fresher-jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2015/01/fresher-jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2015/01/fresher-jobs.html"
    }
  },
  {
    "id": "state-wise-govt-jobs",
    "title": "State wise Govt Jobs 2026  (73473 Sarkari Naukri Vacancies)",
    "org": "State wise Govt Jobs 2026  (73473 Sarkari Naukri Vacancies)",
    "shortOrg": "State wise Govt Jobs 2026  (73",
    "posts": "Various State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-8 (₹25,500 – ₹92,300/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "State Government Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per Notification"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2014/03/state-wise-govt-jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2014/03/state-wise-govt-jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2014/03/state-wise-govt-jobs.html"
    }
  },
  {
    "id": "upsssc-veterinary-pharmacist",
    "title": "UPSSSC Veterinary Pharmacist Recruitment 2026 – Apply Online for 1308 Posts | Last Date 05-10-2026",
    "org": "UPSSSC Veterinary Pharmacist",
    "shortOrg": "UPSSSC Veterinary Pharmacist",
    "posts": "Various State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-8 (₹25,500 – ₹92,300/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "State Government Recruitment",
    "state": "uttar-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "05-10-2026",
      "examDate": "As per Notification"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1agxzdlTp8cgnKr1dNJbcpB2iM8FCzexd/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1agxzdlTp8cgnKr1dNJbcpB2iM8FCzexd/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1agxzdlTp8cgnKr1dNJbcpB2iM8FCzexd/view?usp=sharing"
    }
  },
  {
    "id": "upsssc-junior-engineer-agriculture",
    "title": "UPSSSC Junior Engineer Agriculture Recruitment 2026 –Apply Online for 134 Posts | Last Date 07-10-2026",
    "org": "UPSSSC Junior Engineer Agriculture",
    "shortOrg": "UPSSSC Junior Engineer Agricul",
    "posts": "Various State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-8 (₹25,500 – ₹92,300/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "State Government Recruitment",
    "state": "uttar-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "07-10-2026",
      "examDate": "As per Notification"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1o83ci7Hwpqg98izwFeADa8uB4RAwlhoi/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1o83ci7Hwpqg98izwFeADa8uB4RAwlhoi/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1o83ci7Hwpqg98izwFeADa8uB4RAwlhoi/view?usp=sharing"
    }
  },
  {
    "id": "upsssc-scientific-assistant",
    "title": "UPSSSC Scientific Assistant & Lab Assistant Recruitment 2026: Apply Online for 208 Posts | Last Date 17-08-2026",
    "org": "UPSSSC Scientific Assistant & Lab Assistant",
    "shortOrg": "UPSSSC Scientific Assistant & ",
    "posts": "Various State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-8 (₹25,500 – ₹92,300/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "State Government Recruitment",
    "state": "uttar-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "17-08-2026",
      "examDate": "As per Notification"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1G3ZE0SabmrSEeQG-xlqauSxZX2LkSICs/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1G3ZE0SabmrSEeQG-xlqauSxZX2LkSICs/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1G3ZE0SabmrSEeQG-xlqauSxZX2LkSICs/view?usp=sharing"
    }
  },
  {
    "id": "psc-recruitment",
    "title": "PSC Recruitment 2026 – Latest State wise PSC Jobs Notifications",
    "org": "PSC",
    "shortOrg": "PSC",
    "posts": "Various State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-8 (₹25,500 – ₹92,300/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "State Government Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per Notification"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2016/07/PSC-Recruitment.html",
      "notificationUrl": "https://rozgardwaar.com/2016/07/PSC-Recruitment.html",
      "websiteUrl": "https://rozgardwaar.com/2016/07/PSC-Recruitment.html"
    }
  },
  {
    "id": "upsssc-forest-guard-recruitment",
    "title": "UPSSSC Forest Guard Recruitment 2026 - Apply Online for 708 Posts | Last Date 20-07-2026",
    "org": "UPSSSC Forest Guard",
    "shortOrg": "UPSSSC Forest Guard",
    "posts": "Various State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-8 (₹25,500 – ₹92,300/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "State Government Recruitment",
    "state": "uttar-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "20-07-2026",
      "examDate": "As per Notification"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1hokL4Ud1zg2S3Wqdp0DhSEpyxi6Fc_qC/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1hokL4Ud1zg2S3Wqdp0DhSEpyxi6Fc_qC/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1hokL4Ud1zg2S3Wqdp0DhSEpyxi6Fc_qC/view?usp=sharing"
    }
  },
  {
    "id": "bpsc-school-teacher-tre-40-recruitment",
    "title": "BPSC School Teacher TRE 4.0 Recruitment 2026 – Apply Online for 32388 Posts",
    "org": "BPSC School Teacher TRE 4.0",
    "shortOrg": "BPSC School Teacher TRE 4.0",
    "posts": "Various State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-8 (₹25,500 – ₹92,300/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "State Government Recruitment",
    "state": "bihar",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per Notification"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/10W7B0ADuDdx0T9xhDF38q1KyGyDfnqtO/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/10W7B0ADuDdx0T9xhDF38q1KyGyDfnqtO/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/10W7B0ADuDdx0T9xhDF38q1KyGyDfnqtO/view?usp=sharing"
    }
  },
  {
    "id": "bihar-tre-4-vacancy",
    "title": "Bihar TRE 4.0 Vacancy 2026 Notification Out – Apply Online for 32388 Posts | Last Date 30-09-2026",
    "org": "Bihar TRE 4.0",
    "shortOrg": "Bihar TRE 4.0",
    "posts": "Various State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-8 (₹25,500 – ₹92,300/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "State Government Recruitment",
    "state": "bihar",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "30-09-2026",
      "examDate": "As per Notification"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1UXMHS1B4N4u4neezBJa0J5CELfKYPxOn/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1UXMHS1B4N4u4neezBJa0J5CELfKYPxOn/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1UXMHS1B4N4u4neezBJa0J5CELfKYPxOn/view?usp=sharing"
    }
  },
  {
    "id": "bpsc-sugar-cane-officer-recruitment",
    "title": "BPSC Sugar Cane Officer Recruitment 2026 - Apply Online for 44 Posts | Last Date 31 May 2026",
    "org": "BPSC Sugar Cane Officer",
    "shortOrg": "BPSC Sugar Cane Officer",
    "posts": "Various State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-8 (₹25,500 – ₹92,300/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "State Government Recruitment",
    "state": "bihar",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per Notification"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://bpsconline.bihar.gov.in/",
      "notificationUrl": "https://rozgardwaar.com/2026/05/bpsc-sugar-cane-officer-recruitment.html",
      "websiteUrl": "https://bpsconline.bihar.gov.in/"
    }
  },
  {
    "id": "it-fresher-jobs",
    "title": "Latest IT Govt Jobs 2026 (1000+ Fresher & Experienced Vacancies)",
    "org": "Latest IT Govt Jobs 2026 (1000+ Fresher & Experienced Vacancies)",
    "shortOrg": "Latest IT Govt Jobs 2026 (1000",
    "posts": "Trade / Technician / Graduate Apprentice",
    "vacancies": 100,
    "salary": "Monthly Stipend ₹8,000 – ₹18,000/- as per Apprenticeship Rules / NATS",
    "qualificationText": "10th Pass / 12th Pass / ITI (NCVT) / Diploma / Degree (Fresher Eligible)",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Fresher & Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "To be notified"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Nil)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2014/04/it-fresher-jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2014/04/it-fresher-jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2014/04/it-fresher-jobs.html"
    }
  },
  {
    "id": "southern-railway-apprentice-recruitment",
    "title": "Southern Railway Apprentice Recruitment 2026 – Apply Online for 4471 Fresher Posts | Last Date 27-09-2026",
    "org": "Southern Railway Apprentice",
    "shortOrg": "Southern Railway Apprentice",
    "posts": "Fresher",
    "vacancies": 4471,
    "salary": "Monthly Stipend ₹8,000 – ₹18,000/- as per Apprenticeship Rules / NATS",
    "qualificationText": "10th Pass / 12th Pass / ITI (NCVT) / Diploma / Degree (Fresher Eligible)",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "no-exam",
    "subCategory": "Fresher & Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "27-09-2026",
      "examDate": "No Written Exam (Merit Based Selection)"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Nil)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://sronline.etrpindia.com/rrcchennaiapprentice26/notifications/Act%20Apprentices%20Notification%202026-27%20with%20enclosures.pdf",
      "notificationUrl": "https://sronline.etrpindia.com/rrcchennaiapprentice26/notifications/Act%20Apprentices%20Notification%202026-27%20with%20enclosures.pdf",
      "websiteUrl": "https://sronline.etrpindia.com/rrcchennaiapprentice26/notifications/Act%20Apprentices%20Notification%202026-27%20with%20enclosures.pdf"
    }
  },
  {
    "id": "bgssl-recruitment",
    "title": "BGSSL Recruitment 2026 Apply Online for 1949 Various Posts | Last Date 30-09-2026",
    "org": "BGSSL",
    "shortOrg": "BGSSL",
    "posts": "Various",
    "vacancies": 1949,
    "salary": "Monthly Stipend ₹8,000 – ₹18,000/- as per Apprenticeship Rules / NATS",
    "qualificationText": "10th Pass / 12th Pass / ITI (NCVT) / Diploma / Degree (Fresher Eligible)",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Fresher & Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "30-09-2026",
      "examDate": "To be notified"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Nil)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1oaR3jQAIHIz4EI8L_y8zZueyaypttKPX/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1oaR3jQAIHIz4EI8L_y8zZueyaypttKPX/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1oaR3jQAIHIz4EI8L_y8zZueyaypttKPX/view?usp=sharing"
    }
  },
  {
    "id": "nic-sta-recruitment",
    "title": "NIC STA Recruitment 2026 – Apply Online for 376 Fresher Posts | Last Date 30-09-2026",
    "org": "NIC STA",
    "shortOrg": "NIC STA",
    "posts": "Fresher",
    "vacancies": 376,
    "salary": "Monthly Stipend ₹8,000 – ₹18,000/- as per Apprenticeship Rules / NATS",
    "qualificationText": "10th Pass / 12th Pass / ITI (NCVT) / Diploma / Degree (Fresher Eligible)",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Fresher & Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "30-09-2026",
      "examDate": "To be notified"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Nil)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1_MOj3rA6LtfMeoMGojBZlxdQvIarc2AZ/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1_MOj3rA6LtfMeoMGojBZlxdQvIarc2AZ/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1_MOj3rA6LtfMeoMGojBZlxdQvIarc2AZ/view?usp=sharing"
    }
  },
  {
    "id": "bank-jobs",
    "title": "Bank Jobs 2026: Latest Banking Recruitment 18820 Vacancies",
    "org": "Bank Jobs 2026: Latest Banking",
    "shortOrg": "Bank Jobs 2026: Latest Banking",
    "posts": "Trade / Technician / Graduate Apprentice",
    "vacancies": 100,
    "salary": "Monthly Stipend ₹8,000 – ₹18,000/- as per Apprenticeship Rules / NATS",
    "qualificationText": "10th Pass / 12th Pass / ITI (NCVT) / Diploma / Degree (Fresher Eligible)",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Fresher & Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "To be notified"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Nil)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2026/08/bank-jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2026/08/bank-jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2026/08/bank-jobs.html"
    }
  },
  {
    "id": "gail-et-recruitment-gate-2027",
    "title": "GAIL ET Recruitment GATE 2027 Notification Out",
    "org": "GAIL ET",
    "shortOrg": "GAIL ET",
    "posts": "Trade / Technician / Graduate Apprentice",
    "vacancies": 100,
    "salary": "Monthly Stipend ₹8,000 – ₹18,000/- as per Apprenticeship Rules / NATS",
    "qualificationText": "10th Pass / 12th Pass / ITI (NCVT) / Diploma / Degree (Fresher Eligible)",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Fresher & Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "To be notified"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Nil)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/16FYMUTWfYBEVG5NnJ6RpCNSuGuCLtW07/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/16FYMUTWfYBEVG5NnJ6RpCNSuGuCLtW07/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/16FYMUTWfYBEVG5NnJ6RpCNSuGuCLtW07/view?usp=sharing"
    }
  },
  {
    "id": "ibps-rrb-xv-recruitment",
    "title": "IBPS RRB XV Recruitment 2026 – Apply Online for 13742+ Office Assistant and Officer Posts | Last Date 21-09-2026",
    "org": "IBPS RRB XV",
    "shortOrg": "IBPS RRB XV",
    "posts": "Office Assistant and Officer",
    "vacancies": 13742,
    "salary": "Monthly Stipend ₹8,000 – ₹18,000/- as per Apprenticeship Rules / NATS",
    "qualificationText": "10th Pass / 12th Pass / ITI (NCVT) / Diploma / Degree (Fresher Eligible)",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Fresher & Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "21-09-2026",
      "examDate": "To be notified"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Nil)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1IXJTpCFZ4YV6G_Im6wUZ3V7nJqhPvmGv/view?usp=sharing",
      "notificationUrl": "https://www.ibps.in/wp-content/uploads/CRP-RRBs-XV-notification.pdf",
      "websiteUrl": "https://drive.google.com/file/d/1IXJTpCFZ4YV6G_Im6wUZ3V7nJqhPvmGv/view?usp=sharing"
    }
  },
  {
    "id": "beml-non-executive-recruitment",
    "title": "BEML Non Executive Recruitment 2026 – Apply Online for 10 Posts for Fresher Diploma | Last Date 08-09-2026",
    "org": "BEML Non Executive",
    "shortOrg": "BEML Non Executive",
    "posts": "Trade / Technician / Graduate Apprentice",
    "vacancies": 100,
    "salary": "Monthly Stipend ₹8,000 – ₹18,000/- as per Apprenticeship Rules / NATS",
    "qualificationText": "10th Pass / 12th Pass / ITI (NCVT) / Diploma / Degree (Fresher Eligible)",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Fresher & Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "08-09-2026",
      "examDate": "To be notified"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Nil)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1tw2U20vNCVeUcDmmTEJex4QqFKPnX2PL/view?usp=sharing",
      "notificationUrl": "https://beml.registrationform.in/secuRegister_14Of2026vEr27/notification/KP_S_14_2026%20-V1.pdf",
      "websiteUrl": "https://drive.google.com/file/d/1tw2U20vNCVeUcDmmTEJex4QqFKPnX2PL/view?usp=sharing"
    }
  },
  {
    "id": "concor-mt-assistant-officer",
    "title": "CONCOR MT and Assistant Officer Recruitment 2026 – Apply Online for 77 Posts | Last Date 30-09-2026",
    "org": "CONCOR MT and Assistant Officer",
    "shortOrg": "CONCOR MT and Assistant Office",
    "posts": "Trade / Technician / Graduate Apprentice",
    "vacancies": 100,
    "salary": "Monthly Stipend ₹8,000 – ₹18,000/- as per Apprenticeship Rules / NATS",
    "qualificationText": "10th Pass / 12th Pass / ITI (NCVT) / Diploma / Degree (Fresher Eligible)",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Fresher & Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "30-09-2026",
      "examDate": "To be notified"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Nil)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://cms.concorindia.co.in:8000/uploads/cms/pdf/Asf6Xc3Mnw5BWdp_FinalAdvertisement-18thAug2026(Published).pdf",
      "notificationUrl": "https://cms.concorindia.co.in:8000/uploads/cms/pdf/Asf6Xc3Mnw5BWdp_FinalAdvertisement-18thAug2026(Published).pdf",
      "websiteUrl": "https://cms.concorindia.co.in:8000/uploads/cms/pdf/Asf6Xc3Mnw5BWdp_FinalAdvertisement-18thAug2026(Published).pdf"
    }
  },
  {
    "id": "employment-news",
    "title": "Employment News 29 August to 04 September 2026 – Pdf Download, Weekly Govt Job Notifications",
    "org": "Employment News 29 August to 04 September 2026 – Pdf Download, Weekly Govt Job",
    "shortOrg": "Employment News 29 August to 0",
    "posts": "Trade / Technician / Graduate Apprentice",
    "vacancies": 100,
    "salary": "Monthly Stipend ₹8,000 – ₹18,000/- as per Apprenticeship Rules / NATS",
    "qualificationText": "10th Pass / 12th Pass / ITI (NCVT) / Diploma / Degree (Fresher Eligible)",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "central-govt",
    "subCategory": "Fresher & Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "To be notified"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Nil)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1anLu7LkWZilCXGXj_FVSINT5XW_Pg-Hu/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1anLu7LkWZilCXGXj_FVSINT5XW_Pg-Hu/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1anLu7LkWZilCXGXj_FVSINT5XW_Pg-Hu/view?usp=sharing"
    }
  },
  {
    "id": "aai-northern-region-apprentice",
    "title": "AAI Northern Region Apprentice Recruitment 2026 – Apply Online for 205 Posts | Last Date 16-09-2026",
    "org": "AAI Northern Region Apprentice",
    "shortOrg": "AAI Northern Region Apprentice",
    "posts": "Trade / Technician / Graduate Apprentice",
    "vacancies": 100,
    "salary": "Monthly Stipend ₹8,000 – ₹18,000/- as per Apprenticeship Rules / NATS",
    "qualificationText": "10th Pass / 12th Pass / ITI (NCVT) / Diploma / Degree (Fresher Eligible)",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "no-exam",
    "subCategory": "Fresher & Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "16-09-2026",
      "examDate": "No Written Exam (Merit Based Selection)"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Nil)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://nats.education.gov.in/student_type.php",
      "notificationUrl": "https://www.aai.aero/sites/default/files/examdashboard_advertisement/Final%20Advt.%20App.%202026-27-RHQ-NR.pdf",
      "websiteUrl": "https://nats.education.gov.in/student_type.php"
    }
  },
  {
    "id": "bank-jobs-openings-august-2013",
    "title": "Latest Bank Jobs 2026 (12442 Vacancies Open Now)",
    "org": "Latest Bank Jobs 2026 (12442 Vacancies Open Now)",
    "shortOrg": "Latest Bank Jobs 2026 (12442 V",
    "posts": "Railway Technical & Non-Technical Posts",
    "vacancies": 50,
    "salary": "Level-1 to Level-7 (₹18,000 – ₹1,12,400/-) as per 7th CPC Railway Matrix",
    "qualificationText": "10th Pass / 12th / ITI / Diploma / Degree from recognized Board / University",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "railway",
    "subCategory": "Indian Railways Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Computer Based Test (CBT) / Merit List"
    },
    "fee": "UR / OBC: ₹500 (₹400 Refundable) | SC/ST/Female: ₹250 (Full Refundable)",
    "ageLimit": "18 to 33 / 36 Years (Railway Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://1.bp.blogspot.com/-u2HyTfTD6zs/XvGq5s4iYZI/AAAAAAABBhg/ZEz3UVWnWYsfUnKsAoATC8KXPGFU4JK2QCK4BGAsYHg/s595/Bank-Jobs-2020-indgovtjobs.png",
      "notificationUrl": "https://rozgardwaar.com/2013/08/bank-jobs-openings-august-2013.html",
      "websiteUrl": "https://1.bp.blogspot.com/-u2HyTfTD6zs/XvGq5s4iYZI/AAAAAAABBhg/ZEz3UVWnWYsfUnKsAoATC8KXPGFU4JK2QCK4BGAsYHg/s595/Bank-Jobs-2020-indgovtjobs.png"
    }
  },
  {
    "id": "western-railway-sports-quota",
    "title": "Western Railway Sports Quota Recruitment 2026 - Apply Online for 64 Posts | Last Date 30-09-2026",
    "org": "Western Railway Sports Quota",
    "shortOrg": "Western Railway Sports Quota",
    "posts": "Railway Technical & Non-Technical Posts",
    "vacancies": 50,
    "salary": "Level-1 to Level-7 (₹18,000 – ₹1,12,400/-) as per 7th CPC Railway Matrix",
    "qualificationText": "10th Pass / 12th / ITI / Diploma / Degree from recognized Board / University",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "railway",
    "subCategory": "Indian Railways Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "30-09-2026",
      "examDate": "Computer Based Test (CBT) / Merit List"
    },
    "fee": "UR / OBC: ₹500 (₹400 Refundable) | SC/ST/Female: ₹250 (Full Refundable)",
    "ageLimit": "18 to 33 / 36 Years (Railway Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1xMM9oezrXcN5F8M9KGbRaMqFdoHj9kGL/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1xMM9oezrXcN5F8M9KGbRaMqFdoHj9kGL/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1xMM9oezrXcN5F8M9KGbRaMqFdoHj9kGL/view?usp=sharing"
    }
  },
  {
    "id": "east-coast-railway-apprentice",
    "title": "East Coast Railway Apprentice Recruitment 2026 – Apply Online for 1599 Posts | Last Date 15-09-2026",
    "org": "East Coast Railway Apprentice",
    "shortOrg": "East Coast Railway Apprentice",
    "posts": "Railway Technical & Non-Technical Posts",
    "vacancies": 50,
    "salary": "Level-1 to Level-7 (₹18,000 – ₹1,12,400/-) as per 7th CPC Railway Matrix",
    "qualificationText": "10th Pass / 12th / ITI / Diploma / Degree from recognized Board / University",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "railway",
    "subCategory": "Indian Railways Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "15-09-2026",
      "examDate": "Computer Based Test (CBT) / Merit List"
    },
    "fee": "UR / OBC: ₹500 (₹400 Refundable) | SC/ST/Female: ₹250 (Full Refundable)",
    "ageLimit": "18 to 33 / 36 Years (Railway Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.rrcbbs.org.in/Act-apprenticeship.pdf",
      "notificationUrl": "https://www.rrcbbs.org.in/Act-apprenticeship.pdf",
      "websiteUrl": "https://www.rrcbbs.org.in/Act-apprenticeship.pdf"
    }
  },
  {
    "id": "ncr-prayagraj-apprentice-recruitment",
    "title": "NCR Prayagraj Apprentice Recruitment 2026 – Apply Online 3205 Posts | Last Date 31-08-2026",
    "org": "NCR Prayagraj Apprentice",
    "shortOrg": "NCR Prayagraj Apprentice",
    "posts": "Railway Technical & Non-Technical Posts",
    "vacancies": 50,
    "salary": "Level-1 to Level-7 (₹18,000 – ₹1,12,400/-) as per 7th CPC Railway Matrix",
    "qualificationText": "10th Pass / 12th / ITI / Diploma / Degree from recognized Board / University",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "railway",
    "subCategory": "Indian Railways Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "31-08-2026",
      "examDate": "Computer Based Test (CBT) / Merit List"
    },
    "fee": "UR / OBC: ₹500 (₹400 Refundable) | SC/ST/Female: ₹250 (Full Refundable)",
    "ageLimit": "18 to 33 / 36 Years (Railway Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rrcpryj.org/wp-content/uploads/2026/07/Notification-act-apprentice-2026.pdf",
      "notificationUrl": "https://rrcpryj.org/wp-content/uploads/2026/07/Notification-act-apprentice-2026.pdf",
      "websiteUrl": "https://rrcpryj.org/wp-content/uploads/2026/07/Notification-act-apprentice-2026.pdf"
    }
  },
  {
    "id": "north-central-railway-cultural-quota",
    "title": "North Central Railway Cultural Quota Recruitment 2026 – Apply Online for 02 Posts | Last Date 19-09-2026",
    "org": "North Central Railway Cultural Quota",
    "shortOrg": "North Central Railway Cultural",
    "posts": "Railway Technical & Non-Technical Posts",
    "vacancies": 50,
    "salary": "Level-1 to Level-7 (₹18,000 – ₹1,12,400/-) as per 7th CPC Railway Matrix",
    "qualificationText": "10th Pass / 12th / ITI / Diploma / Degree from recognized Board / University",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "railway",
    "subCategory": "Indian Railways Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "19-09-2026",
      "examDate": "Computer Based Test (CBT) / Merit List"
    },
    "fee": "UR / OBC: ₹500 (₹400 Refundable) | SC/ST/Female: ₹250 (Full Refundable)",
    "ageLimit": "18 to 33 / 36 Years (Railway Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rrcpryj.org/wp-content/uploads/2026/08/Notification-for-Cultural-Quota-Ope-Market-Recruitment-2026-27-for-NCR-1.pdf",
      "notificationUrl": "https://rrcpryj.org/wp-content/uploads/2026/08/Notification-for-Cultural-Quota-Ope-Market-Recruitment-2026-27-for-NCR-1.pdf",
      "websiteUrl": "https://rrcpryj.org/wp-content/uploads/2026/08/Notification-for-Cultural-Quota-Ope-Market-Recruitment-2026-27-for-NCR-1.pdf"
    }
  },
  {
    "id": "eastern-railway-scouts-and-guides-quota",
    "title": "Eastern Railway Scouts and Guides Quota 2026: 15 Posts, Notification, Online Form | Last Date 06-09-2026",
    "org": "Eastern Railway Scouts and Guides Quota 2026: 15 Posts,",
    "shortOrg": "Eastern Railway Scouts and Gui",
    "posts": "Railway Technical & Non-Technical Posts",
    "vacancies": 50,
    "salary": "Level-1 to Level-7 (₹18,000 – ₹1,12,400/-) as per 7th CPC Railway Matrix",
    "qualificationText": "10th Pass / 12th / ITI / Diploma / Degree from recognized Board / University",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "railway",
    "subCategory": "Indian Railways Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "06-09-2026",
      "examDate": "Computer Based Test (CBT) / Merit List"
    },
    "fee": "UR / OBC: ₹500 (₹400 Refundable) | SC/ST/Female: ₹250 (Full Refundable)",
    "ageLimit": "18 to 33 / 36 Years (Railway Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rrcer.org/Final%20notification%20S&amp;G%202026-27%20along%20with%20relevant%20annexures%20pdf.pdf",
      "notificationUrl": "https://rrcer.org/Final%20notification%20S&amp;G%202026-27%20along%20with%20relevant%20annexures%20pdf.pdf",
      "websiteUrl": "https://rrcer.org/Final%20notification%20S&amp;G%202026-27%20along%20with%20relevant%20annexures%20pdf.pdf"
    }
  },
  {
    "id": "central-railway-sports-quota",
    "title": "Central Railway Sports Quota Recruitment 2026 – Apply Online for 59 Group C & D Posts | Last Date 14-08-2026",
    "org": "Central Railway Sports Quota",
    "shortOrg": "Central Railway Sports Quota",
    "posts": "Group C & D",
    "vacancies": 59,
    "salary": "Level-1 to Level-7 (₹18,000 – ₹1,12,400/-) as per 7th CPC Railway Matrix",
    "qualificationText": "10th Pass / 12th / ITI / Diploma / Degree from recognized Board / University",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "railway",
    "subCategory": "Indian Railways Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "14-08-2026",
      "examDate": "Computer Based Test (CBT) / Merit List"
    },
    "fee": "UR / OBC: ₹500 (₹400 Refundable) | SC/ST/Female: ₹250 (Full Refundable)",
    "ageLimit": "18 to 33 / 36 Years (Railway Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://ibtexamination.com/RRCCR_02OF2026_SPORTSQUOTA/notification/Open%20Advertisment%20Sports%20Quota%20Notification%20English.pdf",
      "notificationUrl": "https://ibtexamination.com/RRCCR_02OF2026_SPORTSQUOTA/notification/Open%20Advertisment%20Sports%20Quota%20Notification%20English.pdf",
      "websiteUrl": "https://ibtexamination.com/RRCCR_02OF2026_SPORTSQUOTA/notification/Open%20Advertisment%20Sports%20Quota%20Notification%20English.pdf"
    }
  },
  {
    "id": "central-railway-scouts-guides-quota",
    "title": "Central Railway Scouts & Guides Quota Recruitment 2026 – Apply Online for 12 Posts | Last Date 12-08-2026",
    "org": "Central Railway Scouts & Guides Quota",
    "shortOrg": "Central Railway Scouts & Guide",
    "posts": "Railway Technical & Non-Technical Posts",
    "vacancies": 50,
    "salary": "Level-1 to Level-7 (₹18,000 – ₹1,12,400/-) as per 7th CPC Railway Matrix",
    "qualificationText": "10th Pass / 12th / ITI / Diploma / Degree from recognized Board / University",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "railway",
    "subCategory": "Indian Railways Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "12-08-2026",
      "examDate": "Computer Based Test (CBT) / Merit List"
    },
    "fee": "UR / OBC: ₹500 (₹400 Refundable) | SC/ST/Female: ₹250 (Full Refundable)",
    "ageLimit": "18 to 33 / 36 Years (Railway Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1y_1boGkGOEkCEjavtB9k_fdwYNinedyi/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1y_1boGkGOEkCEjavtB9k_fdwYNinedyi/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1y_1boGkGOEkCEjavtB9k_fdwYNinedyi/view?usp=sharing"
    }
  },
  {
    "id": "central-railway-apprentice-recruitment",
    "title": "Central Railway Apprentice Recruitment 2026 Apply Online 51 Posts | Last Date 09 April 2026",
    "org": "Central Railway Apprentice",
    "shortOrg": "Central Railway Apprentice",
    "posts": "Railway Technical & Non-Technical Posts",
    "vacancies": 50,
    "salary": "Level-1 to Level-7 (₹18,000 – ₹1,12,400/-) as per 7th CPC Railway Matrix",
    "qualificationText": "10th Pass / 12th / ITI / Diploma / Degree from recognized Board / University",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "railway",
    "subCategory": "Indian Railways Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Computer Based Test (CBT) / Merit List"
    },
    "fee": "UR / OBC: ₹500 (₹400 Refundable) | SC/ST/Female: ₹250 (Full Refundable)",
    "ageLimit": "18 to 33 / 36 Years (Railway Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rrccr.etrpindia.com/rrccrapprentice/pdfs/FINAL_TA_NOTICE_2526_For_Application_Part_2_published.pdf",
      "notificationUrl": "https://rrccr.etrpindia.com/rrccrapprentice/pdfs/FINAL_TA_NOTICE_2526_For_Application_Part_2_published.pdf",
      "websiteUrl": "https://rrccr.etrpindia.com/rrccrapprentice/pdfs/FINAL_TA_NOTICE_2526_For_Application_Part_2_published.pdf"
    }
  },
  {
    "id": "western-railway-apprentice-online-form",
    "title": "Western Railway Apprentice Recruitment 2026 - Apply Online for 5349 Posts | Last Date 23.03.2026",
    "org": "Western Railway Apprentice",
    "shortOrg": "Western Railway Apprentice",
    "posts": "Railway Technical & Non-Technical Posts",
    "vacancies": 50,
    "salary": "Level-1 to Level-7 (₹18,000 – ₹1,12,400/-) as per 7th CPC Railway Matrix",
    "qualificationText": "10th Pass / 12th / ITI / Diploma / Degree from recognized Board / University",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "railway",
    "subCategory": "Indian Railways Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Computer Based Test (CBT) / Merit List"
    },
    "fee": "UR / OBC: ₹500 (₹400 Refundable) | SC/ST/Female: ₹250 (Full Refundable)",
    "ageLimit": "18 to 33 / 36 Years (Railway Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1fJYA7q20sdaVu3mQtVa3VqXpbHTpxxKN/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1fJYA7q20sdaVu3mQtVa3VqXpbHTpxxKN/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1fJYA7q20sdaVu3mQtVa3VqXpbHTpxxKN/view?usp=sharing"
    }
  },
  {
    "id": "south-east-central-railway-sports-quota",
    "title": "South East Central Railway Sports Quota Recruitment 2026 - Apply Online for 22 Vacancies | Last Date 16.02.2026",
    "org": "South East Central Railway Sports Quota",
    "shortOrg": "South East Central Railway Spo",
    "posts": "Railway Technical & Non-Technical Posts",
    "vacancies": 50,
    "salary": "Level-1 to Level-7 (₹18,000 – ₹1,12,400/-) as per 7th CPC Railway Matrix",
    "qualificationText": "10th Pass / 12th / ITI / Diploma / Degree from recognized Board / University",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "railway",
    "subCategory": "Indian Railways Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Computer Based Test (CBT) / Merit List"
    },
    "fee": "UR / OBC: ₹500 (₹400 Refundable) | SC/ST/Female: ₹250 (Full Refundable)",
    "ageLimit": "18 to 33 / 36 Years (Railway Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://secr.indianrailways.gov.in/uploads/files/1768624038757-SportsQuota2025-26%20%20ENGLISH%20Notification%20(1).pdf",
      "notificationUrl": "https://secr.indianrailways.gov.in/uploads/files/1768624038757-SportsQuota2025-26%20%20ENGLISH%20Notification%20(1).pdf",
      "websiteUrl": "https://secr.indianrailways.gov.in/uploads/files/1768624038757-SportsQuota2025-26%20%20ENGLISH%20Notification%20(1).pdf"
    }
  },
  {
    "id": "stenographer-jobs-typist",
    "title": "Latest Stenographer & Typist Govt Jobs 2026 | 500+ Vacancies",
    "org": "Latest Stenographer & Typist Govt Jobs 2026 | 500+ Vacancies",
    "shortOrg": "Latest Stenographer & Typist G",
    "posts": "Railway Technical & Non-Technical Posts",
    "vacancies": 50,
    "salary": "Level-1 to Level-7 (₹18,000 – ₹1,12,400/-) as per 7th CPC Railway Matrix",
    "qualificationText": "10th Pass / 12th / ITI / Diploma / Degree from recognized Board / University",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "railway",
    "subCategory": "Indian Railways Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Computer Based Test (CBT) / Merit List"
    },
    "fee": "UR / OBC: ₹500 (₹400 Refundable) | SC/ST/Female: ₹250 (Full Refundable)",
    "ageLimit": "18 to 33 / 36 Years (Railway Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2017/03/Stenographer-Jobs-Typist.html",
      "notificationUrl": "https://rozgardwaar.com/2017/03/Stenographer-Jobs-Typist.html",
      "websiteUrl": "https://rozgardwaar.com/2017/03/Stenographer-Jobs-Typist.html"
    }
  },
  {
    "id": "rail-wheel-factory-sports-quota",
    "title": "Rail Wheel Factory Sports Quota Recruitment 2026 – Notification for 15 Posts, Application Form | Last Date 31-08-2026",
    "org": "Rail Wheel Factory Sports Quota",
    "shortOrg": "Rail Wheel Factory Sports Quot",
    "posts": "Railway Technical & Non-Technical Posts",
    "vacancies": 50,
    "salary": "Level-1 to Level-7 (₹18,000 – ₹1,12,400/-) as per 7th CPC Railway Matrix",
    "qualificationText": "10th Pass / 12th / ITI / Diploma / Degree from recognized Board / University",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "railway",
    "subCategory": "Indian Railways Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "31-08-2026",
      "examDate": "Computer Based Test (CBT) / Merit List"
    },
    "fee": "UR / OBC: ₹500 (₹400 Refundable) | SC/ST/Female: ₹250 (Full Refundable)",
    "ageLimit": "18 to 33 / 36 Years (Railway Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/11WgJJcLz51BGvpPQZz-kVeO5JByl8ddf/view",
      "notificationUrl": "https://drive.google.com/file/d/11WgJJcLz51BGvpPQZz-kVeO5JByl8ddf/view",
      "websiteUrl": "https://drive.google.com/file/d/11WgJJcLz51BGvpPQZz-kVeO5JByl8ddf/view"
    }
  },
  {
    "id": "forest-jobs",
    "title": "Latest Forest Govt Jobs 2026 (500+ New Vacancies Open)",
    "org": "Latest Forest Govt Jobs 2026 (500+ New Vacancies Open)",
    "shortOrg": "Latest Forest Govt Jobs 2026 (",
    "posts": "Railway Technical & Non-Technical Posts",
    "vacancies": 50,
    "salary": "Level-1 to Level-7 (₹18,000 – ₹1,12,400/-) as per 7th CPC Railway Matrix",
    "qualificationText": "10th Pass / 12th / ITI / Diploma / Degree from recognized Board / University",
    "qualifications": [
      "10th-pass",
      "12th-pass",
      "iti",
      "diploma",
      "graduate"
    ],
    "category": "railway",
    "subCategory": "Indian Railways Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Computer Based Test (CBT) / Merit List"
    },
    "fee": "UR / OBC: ₹500 (₹400 Refundable) | SC/ST/Female: ₹250 (Full Refundable)",
    "ageLimit": "18 to 33 / 36 Years (Railway Relaxation as per norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2019/12/Forest-Jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2019/12/Forest-Jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2019/12/Forest-Jobs.html"
    }
  },
  {
    "id": "iim-kozhikode-faculty-recruitment-2026",
    "title": "IIM Kozhikode Faculty Recruitment 2026 – Apply Online for 28 Posts | Last Date 30-09-2026",
    "org": "IIM Kozhikode Faculty",
    "shortOrg": "IIM Kozhikode Faculty",
    "posts": "Assistant Professor / School Teacher / Faculty",
    "vacancies": 25,
    "salary": "Academic Level-10 / Level-11 (₹57,700 – ₹1,82,400/-) as per 7th CPC / UGC Scales",
    "qualificationText": "Graduate + B.Ed / Post Graduate (Master's Degree) / Ph.D. / NET Qualified from recognized University",
    "qualifications": [
      "graduate",
      "bed-teaching",
      "post-graduate"
    ],
    "category": "teaching",
    "subCategory": "Teaching & Faculty Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "30-09-2026",
      "examDate": "Written Exam / Interview & Seminar Presentation"
    },
    "fee": "UR / OBC: ₹1,000 | SC/ST/PwBD/Women: Nil or ₹500",
    "ageLimit": "21 to 40 / 45 Years (Relaxation as per UGC / State norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://iimk.ac.in/uploads/userfiles/Notification_A-02.2026.pdf",
      "notificationUrl": "https://iimk.ac.in/uploads/userfiles/Notification_A-02.2026.pdf",
      "websiteUrl": "https://iimk.ac.in/uploads/userfiles/Notification_A-02.2026.pdf"
    }
  },
  {
    "id": "nit-goa-faculty-recruitment-2026",
    "title": "NIT Goa Faculty Recruitment 2026 – Apply Online for 28 Posts | Last Date 30-09-2026",
    "org": "NIT Goa Faculty",
    "shortOrg": "NIT Goa Faculty",
    "posts": "Assistant Professor / School Teacher / Faculty",
    "vacancies": 25,
    "salary": "Academic Level-10 / Level-11 (₹57,700 – ₹1,82,400/-) as per 7th CPC / UGC Scales",
    "qualificationText": "Graduate + B.Ed / Post Graduate (Master's Degree) / Ph.D. / NET Qualified from recognized University",
    "qualifications": [
      "graduate",
      "bed-teaching",
      "post-graduate"
    ],
    "category": "teaching",
    "subCategory": "Teaching & Faculty Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "30-09-2026",
      "examDate": "Written Exam / Interview & Seminar Presentation"
    },
    "fee": "UR / OBC: ₹1,000 | SC/ST/PwBD/Women: Nil or ₹500",
    "ageLimit": "21 to 40 / 45 Years (Relaxation as per UGC / State norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.nitgoa.ac.in/uploads/faculty_recruitment2026/Advt_Faculty%20_%20Recruitment%2031august2026.pdf",
      "notificationUrl": "https://www.nitgoa.ac.in/uploads/faculty_recruitment2026/Advt_Faculty%20_%20Recruitment%2031august2026.pdf",
      "websiteUrl": "https://www.nitgoa.ac.in/uploads/faculty_recruitment2026/Advt_Faculty%20_%20Recruitment%2031august2026.pdf"
    }
  },
  {
    "id": "idrbt-faculty-recruitment",
    "title": "IDRBT Faculty Recruitment 2026 – Apply Online for 15 Posts | Rolling Advertisement",
    "org": "IDRBT Faculty",
    "shortOrg": "IDRBT Faculty",
    "posts": "Assistant Professor / School Teacher / Faculty",
    "vacancies": 25,
    "salary": "Academic Level-10 / Level-11 (₹57,700 – ₹1,82,400/-) as per 7th CPC / UGC Scales",
    "qualificationText": "Graduate + B.Ed / Post Graduate (Master's Degree) / Ph.D. / NET Qualified from recognized University",
    "qualifications": [
      "graduate",
      "bed-teaching",
      "post-graduate"
    ],
    "category": "teaching",
    "subCategory": "Teaching & Faculty Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Written Exam / Interview & Seminar Presentation"
    },
    "fee": "UR / OBC: ₹1,000 | SC/ST/PwBD/Women: Nil or ₹500",
    "ageLimit": "21 to 40 / 45 Years (Relaxation as per UGC / State norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.idrbt.ac.in/wp-content/uploads/2026/08/Fac_Advt_July-2026.pdf",
      "notificationUrl": "https://www.idrbt.ac.in/wp-content/uploads/2026/08/Fac_Advt_July-2026.pdf",
      "websiteUrl": "https://www.idrbt.ac.in/wp-content/uploads/2026/08/Fac_Advt_July-2026.pdf"
    }
  },
  {
    "id": "sgpgims-faculty-recruitment",
    "title": "SGPGIMS Faculty Recruitment 2026: Apply Offline for 70 Posts | Last Date 31-08-2026",
    "org": "SGPGIMS Faculty",
    "shortOrg": "SGPGIMS Faculty",
    "posts": "Assistant Professor / School Teacher / Faculty",
    "vacancies": 25,
    "salary": "Academic Level-10 / Level-11 (₹57,700 – ₹1,82,400/-) as per 7th CPC / UGC Scales",
    "qualificationText": "Graduate + B.Ed / Post Graduate (Master's Degree) / Ph.D. / NET Qualified from recognized University",
    "qualifications": [
      "graduate",
      "bed-teaching",
      "post-graduate"
    ],
    "category": "teaching",
    "subCategory": "Teaching & Faculty Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "31-08-2026",
      "examDate": "Written Exam / Interview & Seminar Presentation"
    },
    "fee": "UR / OBC: ₹1,000 | SC/ST/PwBD/Women: Nil or ₹500",
    "ageLimit": "21 to 40 / 45 Years (Relaxation as per UGC / State norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1Qu71XzT2tRYBTlQrooNjA-bf5fhJuYX7/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1Qu71XzT2tRYBTlQrooNjA-bf5fhJuYX7/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1Qu71XzT2tRYBTlQrooNjA-bf5fhJuYX7/view?usp=sharing"
    }
  },
  {
    "id": "defence-jobs-govt-vacancy",
    "title": "Latest Defence Jobs 2026 (2500+ Govt Vacancies Open Now)",
    "org": "Latest Defence Jobs 2026 (2500+ Govt Vacancies Open Now)",
    "shortOrg": "Latest Defence Jobs 2026 (2500",
    "posts": "Assistant Professor / School Teacher / Faculty",
    "vacancies": 25,
    "salary": "Academic Level-10 / Level-11 (₹57,700 – ₹1,82,400/-) as per 7th CPC / UGC Scales",
    "qualificationText": "Graduate + B.Ed / Post Graduate (Master's Degree) / Ph.D. / NET Qualified from recognized University",
    "qualifications": [
      "graduate",
      "bed-teaching",
      "post-graduate"
    ],
    "category": "teaching",
    "subCategory": "Teaching & Faculty Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Written Exam / Interview & Seminar Presentation"
    },
    "fee": "UR / OBC: ₹1,000 | SC/ST/PwBD/Women: Nil or ₹500",
    "ageLimit": "21 to 40 / 45 Years (Relaxation as per UGC / State norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2018/02/defence-jobs-govt-vacancy.html",
      "notificationUrl": "https://rozgardwaar.com/2018/02/defence-jobs-govt-vacancy.html",
      "websiteUrl": "https://rozgardwaar.com/2018/02/defence-jobs-govt-vacancy.html"
    }
  },
  {
    "id": "sainik-school-recruitment",
    "title": "Sainik School Recruitment 2026 - Latest Vacancy Notifications",
    "org": "Sainik School",
    "shortOrg": "Sainik School",
    "posts": "Assistant Professor / School Teacher / Faculty",
    "vacancies": 25,
    "salary": "Academic Level-10 / Level-11 (₹57,700 – ₹1,82,400/-) as per 7th CPC / UGC Scales",
    "qualificationText": "Graduate + B.Ed / Post Graduate (Master's Degree) / Ph.D. / NET Qualified from recognized University",
    "qualifications": [
      "graduate",
      "bed-teaching",
      "post-graduate"
    ],
    "category": "teaching",
    "subCategory": "Teaching & Faculty Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Written Exam / Interview & Seminar Presentation"
    },
    "fee": "UR / OBC: ₹1,000 | SC/ST/PwBD/Women: Nil or ₹500",
    "ageLimit": "21 to 40 / 45 Years (Relaxation as per UGC / State norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2024/05/Sainik-School-Recruitment.html",
      "notificationUrl": "https://rozgardwaar.com/2024/05/Sainik-School-Recruitment.html",
      "websiteUrl": "https://rozgardwaar.com/2024/05/Sainik-School-Recruitment.html"
    }
  },
  {
    "id": "sainik-school-ambikapur-recruitment",
    "title": "Sainik School Ambikapur Recruitment 2026 - Apply for Ward Boy, Band Master, PEM PTI & Lab Assistant Posts",
    "org": "Sainik School Ambikapur",
    "shortOrg": "Sainik School Ambikapur",
    "posts": "Assistant Professor / School Teacher / Faculty",
    "vacancies": 25,
    "salary": "Academic Level-10 / Level-11 (₹57,700 – ₹1,82,400/-) as per 7th CPC / UGC Scales",
    "qualificationText": "Graduate + B.Ed / Post Graduate (Master's Degree) / Ph.D. / NET Qualified from recognized University",
    "qualifications": [
      "graduate",
      "bed-teaching",
      "post-graduate"
    ],
    "category": "teaching",
    "subCategory": "Teaching & Faculty Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Written Exam / Interview & Seminar Presentation"
    },
    "fee": "UR / OBC: ₹1,000 | SC/ST/PwBD/Women: Nil or ₹500",
    "ageLimit": "21 to 40 / 45 Years (Relaxation as per UGC / State norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.sainikschoolambikapur.org.in/pdf/Recruit%20of%20Staff_2026.pdf",
      "notificationUrl": "https://www.sainikschoolambikapur.org.in/pdf/Recruit%20of%20Staff_2026.pdf",
      "websiteUrl": "https://www.sainikschoolambikapur.org.in/pdf/Recruit%20of%20Staff_2026.pdf"
    }
  },
  {
    "id": "jharkhand-para-teacher-recruitment",
    "title": "Jharkhand Para Teacher Recruitment 2026: Apply Online for 7299 Posts | Last Date 30-08-2026",
    "org": "Jharkhand Para Teacher",
    "shortOrg": "Jharkhand Para Teacher",
    "posts": "Assistant Professor / School Teacher / Faculty",
    "vacancies": 25,
    "salary": "Academic Level-10 / Level-11 (₹57,700 – ₹1,82,400/-) as per 7th CPC / UGC Scales",
    "qualificationText": "Graduate + B.Ed / Post Graduate (Master's Degree) / Ph.D. / NET Qualified from recognized University",
    "qualifications": [
      "graduate",
      "bed-teaching",
      "post-graduate"
    ],
    "category": "teaching",
    "subCategory": "Teaching & Faculty Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "30-08-2026",
      "examDate": "Written Exam / Interview & Seminar Presentation"
    },
    "fee": "UR / OBC: ₹1,000 | SC/ST/PwBD/Women: Nil or ₹500",
    "ageLimit": "21 to 40 / 45 Years (Relaxation as per UGC / State norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1RYoc1LtoU1lLgxXMirm10FQUZVZatWa8/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1RYoc1LtoU1lLgxXMirm10FQUZVZatWa8/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1RYoc1LtoU1lLgxXMirm10FQUZVZatWa8/view?usp=sharing"
    }
  },
  {
    "id": "sainik-school-jhunjhunu-recruitment",
    "title": "Sainik School Jhunjhunu Recruitment 2026 – Apply for 18 Various Regular & Contractual Posts | Last Date 12-09-2026",
    "org": "Sainik School Jhunjhunu",
    "shortOrg": "Sainik School Jhunjhunu",
    "posts": "Various Regular & Contractual",
    "vacancies": 18,
    "salary": "Academic Level-10 / Level-11 (₹57,700 – ₹1,82,400/-) as per 7th CPC / UGC Scales",
    "qualificationText": "Graduate + B.Ed / Post Graduate (Master's Degree) / Ph.D. / NET Qualified from recognized University",
    "qualifications": [
      "graduate",
      "bed-teaching",
      "post-graduate"
    ],
    "category": "teaching",
    "subCategory": "Teaching & Faculty Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "12-09-2026",
      "examDate": "Written Exam / Interview & Seminar Presentation"
    },
    "fee": "UR / OBC: ₹1,000 | SC/ST/PwBD/Women: Nil or ₹500",
    "ageLimit": "21 to 40 / 45 Years (Relaxation as per UGC / State norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://ssjhunjhunu.com/uploads/308167detailed%20advt%2022%20aug%202026.pdf",
      "notificationUrl": "https://ssjhunjhunu.com/uploads/308167detailed%20advt%2022%20aug%202026.pdf",
      "websiteUrl": "https://ssjhunjhunu.com/uploads/308167detailed%20advt%2022%20aug%202026.pdf"
    }
  },
  {
    "id": "istc-executive-recruitment",
    "title": "ISTC Executive Recruitment 2026 – Apply Online for 09 Engineer, IT, Finance, HR Posts | Last Date 18-09-2026",
    "org": "ISTC Executive",
    "shortOrg": "ISTC Executive",
    "posts": "Engineer, IT, Finance, HR",
    "vacancies": 9,
    "salary": "Level-10 / IDA Pay Scale E-2 (₹50,000 – ₹1,60,000/-)",
    "qualificationText": "B.Tech / B.E. (Civil / Mechanical / Electrical / ECE / CS / IT) with min 60% Marks / GATE",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Engineering Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "18-09-2026",
      "examDate": "Computer Based Test (CBT) / Interview / GATE Score"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil",
    "ageLimit": "21 to 30 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://istcindia.org",
      "notificationUrl": "https://cochinshipyard.in/uploads/career/cd5346e2da18d06f6905eb292e8ce195.pdf",
      "websiteUrl": "https://istcindia.org"
    }
  },
  {
    "id": "iocl-executive-recruitment-through-cbt",
    "title": "IOCL Executive Recruitment through CBT 2026 – Apply Online for 470 Engineer, Officer & Law Posts | Last Date 03-09-2026",
    "org": "IOCL Executive",
    "shortOrg": "IOCL Executive",
    "posts": "Engineer, Officer & Law",
    "vacancies": 470,
    "salary": "Level-10 / IDA Pay Scale E-2 (₹50,000 – ₹1,60,000/-)",
    "qualificationText": "B.Tech / B.E. (Civil / Mechanical / Electrical / ECE / CS / IT) with min 60% Marks / GATE",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Engineering Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "03-09-2026",
      "examDate": "Computer Based Test (CBT) / Interview / GATE Score"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil",
    "ageLimit": "21 to 30 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://iocl.com/admin/img/UploadedFiles/LatestJobOpening/Files/DetailedAd14082026.pdf",
      "notificationUrl": "https://iocl.com/admin/img/UploadedFiles/LatestJobOpening/Files/DetailedAd14082026.pdf",
      "websiteUrl": "https://iocl.com/admin/img/UploadedFiles/LatestJobOpening/Files/DetailedAd14082026.pdf"
    }
  },
  {
    "id": "bank-of-india-officer-recruitment",
    "title": "Bank of India Officer Recruitment 2026 – Apply Online for 205 Posts | Last Date 25-09-2026",
    "org": "Bank of India Officer",
    "shortOrg": "Bank of India Officer",
    "posts": "Project Engineer / Executive Trainee (Engineering)",
    "vacancies": 40,
    "salary": "Level-10 / IDA Pay Scale E-2 (₹50,000 – ₹1,60,000/-)",
    "qualificationText": "B.Tech / B.E. (Civil / Mechanical / Electrical / ECE / CS / IT) with min 60% Marks / GATE",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Engineering Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "25-09-2026",
      "examDate": "Computer Based Test (CBT) / Interview / GATE Score"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil",
    "ageLimit": "21 to 30 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://bankofindia.bank.in/documents/20121/27827843/FINAL-NOTICE-SPECIALIST-OFFICER-2026-27-02-NOTICE-DATE-01.08.2026.pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "dmrc-supervisor-recruitment-2026",
    "title": "DMRC Supervisor Recruitment 2026 – Apply for 04 Posts | Last Date 15-09-2026",
    "org": "DMRC Supervisor",
    "shortOrg": "DMRC Supervisor",
    "posts": "Project Engineer / Executive Trainee (Engineering)",
    "vacancies": 40,
    "salary": "Level-10 / IDA Pay Scale E-2 (₹50,000 – ₹1,60,000/-)",
    "qualificationText": "B.Tech / B.E. (Civil / Mechanical / Electrical / ECE / CS / IT) with min 60% Marks / GATE",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Engineering Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "15-09-2026",
      "examDate": "Computer Based Test (CBT) / Interview / GATE Score"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil",
    "ageLimit": "21 to 30 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1sVL7tFLyQS70U751G8-yxl2uZ1qHJJaM/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1sVL7tFLyQS70U751G8-yxl2uZ1qHJJaM/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1sVL7tFLyQS70U751G8-yxl2uZ1qHJJaM/view?usp=sharing"
    }
  },
  {
    "id": "bel-kochi-deputy-engineer-recruitment",
    "title": "BEL Kochi Deputy Engineer Recruitment 2026 – Apply for 14 Posts | Last Date 23-09-2026",
    "org": "BEL Kochi Deputy Engineer",
    "shortOrg": "BEL Kochi Deputy Engineer",
    "posts": "Project Engineer / Executive Trainee (Engineering)",
    "vacancies": 40,
    "salary": "Level-10 / IDA Pay Scale E-2 (₹50,000 – ₹1,60,000/-)",
    "qualificationText": "B.Tech / B.E. (Civil / Mechanical / Electrical / ECE / CS / IT) with min 60% Marks / GATE",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Engineering Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "23-09-2026",
      "examDate": "Computer Based Test (CBT) / Interview / GATE Score"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil",
    "ageLimit": "21 to 30 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1JrDhlewR_hTBCf9ZqMjXwnKLMn4UlVWS/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1JrDhlewR_hTBCf9ZqMjXwnKLMn4UlVWS/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1JrDhlewR_hTBCf9ZqMjXwnKLMn4UlVWS/view?usp=sharing"
    }
  },
  {
    "id": "gmdc-it-professional-recruitment",
    "title": "GMDC IT Professional Recruitment 2026: Notification, Online Form | Last Date 02-09-2026",
    "org": "GMDC IT Professional",
    "shortOrg": "GMDC IT Professional",
    "posts": "Project Engineer / Executive Trainee (Engineering)",
    "vacancies": 40,
    "salary": "Level-10 / IDA Pay Scale E-2 (₹50,000 – ₹1,60,000/-)",
    "qualificationText": "B.Tech / B.E. (Civil / Mechanical / Electrical / ECE / CS / IT) with min 60% Marks / GATE",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Engineering Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "02-09-2026",
      "examDate": "Computer Based Test (CBT) / Interview / GATE Score"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil",
    "ageLimit": "21 to 30 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.gmdcltd.com/wp-content/uploads/2026/08/filenamehnbaOELZIdxYAdvertisement_IT-Dept.pdf",
      "notificationUrl": "https://www.gmdcltd.com/wp-content/uploads/2026/08/filenamehnbaOELZIdxYAdvertisement_IT-Dept.pdf",
      "websiteUrl": "https://www.gmdcltd.com/wp-content/uploads/2026/08/filenamehnbaOELZIdxYAdvertisement_IT-Dept.pdf"
    }
  },
  {
    "id": "niscpr-project-staff-recruitment-2026",
    "title": "NISCPR Project Staff Recruitment 2026 – Walk in Interview for 14 Posts",
    "org": "NISCPR Project Staff",
    "shortOrg": "NISCPR Project Staff",
    "posts": "Project Engineer / Executive Trainee (Engineering)",
    "vacancies": 40,
    "salary": "Level-10 / IDA Pay Scale E-2 (₹50,000 – ₹1,60,000/-)",
    "qualificationText": "B.Tech / B.E. (Civil / Mechanical / Electrical / ECE / CS / IT) with min 60% Marks / GATE",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Engineering Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Computer Based Test (CBT) / Interview / GATE Score"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil",
    "ageLimit": "21 to 30 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://niscpr.res.in/includes/images/jobs/Advertisment-ULIP-VII-2026-2026-07-31-03-05-19pm.pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "indian-overseas-bank-security-guard",
    "title": "Indian Overseas Bank Security Guard Recruitment 2026 – Apply Online for 25 Posts | Last Date 14-09-2026",
    "org": "Indian Overseas Bank Security Guard",
    "shortOrg": "Indian Overseas Bank Security ",
    "posts": "Project Engineer / Executive Trainee (Engineering)",
    "vacancies": 40,
    "salary": "Level-10 / IDA Pay Scale E-2 (₹50,000 – ₹1,60,000/-)",
    "qualificationText": "B.Tech / B.E. (Civil / Mechanical / Electrical / ECE / CS / IT) with min 60% Marks / GATE",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Engineering Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "14-09-2026",
      "examDate": "Computer Based Test (CBT) / Interview / GATE Score"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil",
    "ageLimit": "21 to 30 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1ikbI308kCQJlTE6WCF0AsN7FmUMnXDx2/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1ikbI308kCQJlTE6WCF0AsN7FmUMnXDx2/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1ikbI308kCQJlTE6WCF0AsN7FmUMnXDx2/view?usp=sharing"
    }
  },
  {
    "id": "mpesb-si-subedar-recruitment",
    "title": "MPESB SI & Subedar Recruitment 2026 – Apply Online for 504 Posts | Last Date 23-09-2026",
    "org": "MPESB SI & Subedar",
    "shortOrg": "MPESB SI & Subedar",
    "posts": "Project Engineer / Executive Trainee (Engineering)",
    "vacancies": 40,
    "salary": "Level-10 / IDA Pay Scale E-2 (₹50,000 – ₹1,60,000/-)",
    "qualificationText": "B.Tech / B.E. (Civil / Mechanical / Electrical / ECE / CS / IT) with min 60% Marks / GATE",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Engineering Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "23-09-2026",
      "examDate": "Computer Based Test (CBT) / Interview / GATE Score"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil",
    "ageLimit": "21 to 30 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1H_TOnZ5UxR5647hpbkcBg15FtcC42lko/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1H_TOnZ5UxR5647hpbkcBg15FtcC42lko/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1H_TOnZ5UxR5647hpbkcBg15FtcC42lko/view?usp=sharing"
    }
  },
  {
    "id": "jkssb-notification-no-09-of-2026",
    "title": "JKSSB Notification No. 09 of 2026 – Apply Online for 2863 MTS & Sanitation Worker Posts | Last Date 03-11-2026",
    "org": "JKSSB",
    "shortOrg": "JKSSB",
    "posts": "MTS & Sanitation Worker",
    "vacancies": 2863,
    "salary": "Level-10 / IDA Pay Scale E-2 (₹50,000 – ₹1,60,000/-)",
    "qualificationText": "B.Tech / B.E. (Civil / Mechanical / Electrical / ECE / CS / IT) with min 60% Marks / GATE",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Engineering Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "03-11-2026",
      "examDate": "Computer Based Test (CBT) / Interview / GATE Score"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil",
    "ageLimit": "21 to 30 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://jkssb.nic.in/Pdf/ADVT_09OF2026_01092026.pdf",
      "notificationUrl": "https://jkssb.nic.in/Pdf/ADVT_09OF2026_01092026.pdf",
      "websiteUrl": "https://jkssb.nic.in/Pdf/ADVT_09OF2026_01092026.pdf"
    }
  },
  {
    "id": "icar-igfri-young-professional",
    "title": "ICAR IGFRI Young Professional Recruitment 2026 – Walk in Interview for 05 Posts",
    "org": "ICAR IGFRI Young Professional",
    "shortOrg": "ICAR IGFRI Young Professional",
    "posts": "Project Engineer / Executive Trainee (Engineering)",
    "vacancies": 40,
    "salary": "Level-10 / IDA Pay Scale E-2 (₹50,000 – ₹1,60,000/-)",
    "qualificationText": "B.Tech / B.E. (Civil / Mechanical / Electrical / ECE / CS / IT) with min 60% Marks / GATE",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Engineering Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Computer Based Test (CBT) / Interview / GATE Score"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil",
    "ageLimit": "21 to 30 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://igfri.org.in/uploads/20260828055528802yp-II%205%20Post.pdf",
      "notificationUrl": "https://igfri.org.in/uploads/20260828055528802yp-II%205%20Post.pdf",
      "websiteUrl": "https://igfri.org.in/uploads/20260828055528802yp-II%205%20Post.pdf"
    }
  },
  {
    "id": "nalanda-university-non-teaching",
    "title": "Nalanda University Non Teaching Recruitment 2026 – Apply Online for Assistant, Librarian & Engineer Posts | Last Date 31-08-2026",
    "org": "Nalanda University Non Teaching",
    "shortOrg": "Nalanda University Non Teachin",
    "posts": "Project Engineer / Executive Trainee (Engineering)",
    "vacancies": 40,
    "salary": "Level-10 / IDA Pay Scale E-2 (₹50,000 – ₹1,60,000/-)",
    "qualificationText": "B.Tech / B.E. (Civil / Mechanical / Electrical / ECE / CS / IT) with min 60% Marks / GATE",
    "qualifications": [
      "graduate",
      "btech-engineering",
      "diploma"
    ],
    "category": "psu",
    "subCategory": "Engineering Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "31-08-2026",
      "examDate": "Computer Based Test (CBT) / Interview / GATE Score"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil",
    "ageLimit": "21 to 30 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://nalandauniv.edu.in/wp-content/uploads/2026/08/2.-Recruitment-Notice-03.08.2026-1.pdf",
      "notificationUrl": "https://nalandauniv.edu.in/wp-content/uploads/2026/08/2.-Recruitment-Notice-03.08.2026-1.pdf",
      "websiteUrl": "https://nalandauniv.edu.in/wp-content/uploads/2026/08/2.-Recruitment-Notice-03.08.2026-1.pdf"
    }
  },
  {
    "id": "data-entry-computer-jobs",
    "title": "Data Entry & Computer Jobs in Govt Sector 2026 (5000+ Vacancies Open Now)",
    "org": "Data Entry & Computer Jobs in Govt Sector 2026 (5000+ Vacancies Open Now)",
    "shortOrg": "Data Entry & Computer Jobs in ",
    "posts": "Trade Apprentice / ITI Technician (Fitter/Electrician/Welder)",
    "vacancies": 75,
    "salary": "Pay Level-2 (₹19,900 – ₹63,200/-) / Monthly Stipend ₹7,700 – ₹12,000/-",
    "qualificationText": "Class 10th (Matriculation) + ITI in relevant trade (NCVT / SCVT recognized)",
    "qualifications": [
      "10th-pass",
      "iti"
    ],
    "category": "central-govt",
    "subCategory": "ITI & Trade Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Merit Based (10th + ITI Marks) / Trade Test / CBT"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Exempted)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per Apprenticeship norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2015/03/data-entry-computer-jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2015/03/data-entry-computer-jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2015/03/data-entry-computer-jobs.html"
    }
  },
  {
    "id": "isro-lpsc-advertisement-no-lpsc-02-2026",
    "title": "ISRO LPSC Advertisement No. LPSC/02/2026 – Apply Online for 19 Posts | Last Date 04-09-2026",
    "org": "ISRO LPSC Advertisement No. LPSC/02/2026 – Apply Online for 19 Posts | Last Date 04-09-2026",
    "shortOrg": "ISRO LPSC Advertisement No. LP",
    "posts": "Trade Apprentice / ITI Technician (Fitter/Electrician/Welder)",
    "vacancies": 75,
    "salary": "Pay Level-2 (₹19,900 – ₹63,200/-) / Monthly Stipend ₹7,700 – ₹12,000/-",
    "qualificationText": "Class 10th (Matriculation) + ITI in relevant trade (NCVT / SCVT recognized)",
    "qualifications": [
      "10th-pass",
      "iti"
    ],
    "category": "central-govt",
    "subCategory": "ITI & Trade Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "04-09-2026",
      "examDate": "Merit Based (10th + ITI Marks) / Trade Test / CBT"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Exempted)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per Apprenticeship norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.lpsc.gov.in/docs/02-2026%20Detailed%20With%20Annexures.pdf",
      "notificationUrl": "https://www.lpsc.gov.in/docs/02-2026%20Detailed%20With%20Annexures.pdf",
      "websiteUrl": "https://www.lpsc.gov.in/docs/02-2026%20Detailed%20With%20Annexures.pdf"
    }
  },
  {
    "id": "driver-govt-jobs",
    "title": "Latest Driver Govt Jobs 2026 | All India Vacancies",
    "org": "Latest Driver Govt Jobs 2026 | All India Vacancies",
    "shortOrg": "Latest Driver Govt Jobs 2026 |",
    "posts": "Trade Apprentice / ITI Technician (Fitter/Electrician/Welder)",
    "vacancies": 75,
    "salary": "Pay Level-2 (₹19,900 – ₹63,200/-) / Monthly Stipend ₹7,700 – ₹12,000/-",
    "qualificationText": "Class 10th (Matriculation) + ITI in relevant trade (NCVT / SCVT recognized)",
    "qualifications": [
      "10th-pass",
      "iti"
    ],
    "category": "central-govt",
    "subCategory": "ITI & Trade Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Merit Based (10th + ITI Marks) / Trade Test / CBT"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Exempted)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per Apprenticeship norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2015/10/Driver-Govt-Jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2015/10/Driver-Govt-Jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2015/10/Driver-Govt-Jobs.html"
    }
  },
  {
    "id": "dgqa-technician-recruitment",
    "title": "DGQA Technician Recruitment 2026 – Application Form, Notification, 15 Posts | Last Date 28-08-2026",
    "org": "DGQA Technician",
    "shortOrg": "DGQA Technician",
    "posts": "Trade Apprentice / ITI Technician (Fitter/Electrician/Welder)",
    "vacancies": 75,
    "salary": "Pay Level-2 (₹19,900 – ₹63,200/-) / Monthly Stipend ₹7,700 – ₹12,000/-",
    "qualificationText": "Class 10th (Matriculation) + ITI in relevant trade (NCVT / SCVT recognized)",
    "qualifications": [
      "10th-pass",
      "iti"
    ],
    "category": "central-govt",
    "subCategory": "ITI & Trade Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "28-08-2026",
      "examDate": "Merit Based (10th + ITI Marks) / Trade Test / CBT"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Exempted)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per Apprenticeship norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1AuNbQvPYaQWkIHA5-vrc5DM9WRFozUWp/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1AuNbQvPYaQWkIHA5-vrc5DM9WRFozUWp/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1AuNbQvPYaQWkIHA5-vrc5DM9WRFozUWp/view?usp=sharing"
    }
  },
  {
    "id": "hpcl-biofuels-limited-recruitment",
    "title": "HPCL Biofuels Limited Recruitment 2026: Apply Offline for 58 Management & Non-Management Posts | Last Date 27-08-2026",
    "org": "HPCL Biofuels Limited",
    "shortOrg": "HPCL Biofuels Limited",
    "posts": "Management & Non-Management",
    "vacancies": 58,
    "salary": "Pay Level-2 (₹19,900 – ₹63,200/-) / Monthly Stipend ₹7,700 – ₹12,000/-",
    "qualificationText": "Class 10th (Matriculation) + ITI in relevant trade (NCVT / SCVT recognized)",
    "qualifications": [
      "10th-pass",
      "iti"
    ],
    "category": "central-govt",
    "subCategory": "ITI & Trade Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "27-08-2026",
      "examDate": "Merit Based (10th + ITI Marks) / Trade Test / CBT"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Exempted)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per Apprenticeship norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://hpclbiofuels.co.in/downloads/HBL-Advertisement-2026.pdf",
      "notificationUrl": "https://hpclbiofuels.co.in/downloads/HBL-Advertisement-2026.pdf",
      "websiteUrl": "https://hpclbiofuels.co.in/downloads/HBL-Advertisement-2026.pdf"
    }
  },
  {
    "id": "sail-rsp-apprentice-recruitment",
    "title": "SAIL RSP Apprentice Recruitment 2026: Notification for 1110 Posts | Apply Online up to 26-08-2026",
    "org": "SAIL RSP Apprentice",
    "shortOrg": "SAIL RSP Apprentice",
    "posts": "Trade Apprentice / ITI Technician (Fitter/Electrician/Welder)",
    "vacancies": 75,
    "salary": "Pay Level-2 (₹19,900 – ₹63,200/-) / Monthly Stipend ₹7,700 – ₹12,000/-",
    "qualificationText": "Class 10th (Matriculation) + ITI in relevant trade (NCVT / SCVT recognized)",
    "qualifications": [
      "10th-pass",
      "iti"
    ],
    "category": "central-govt",
    "subCategory": "ITI & Trade Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Merit Based (10th + ITI Marks) / Trade Test / CBT"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Exempted)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per Apprenticeship norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://aima-web-images.s3.ap-south-1.amazonaws.com/sailcareers.com/Downloads/RSP_News%20&amp;%20Jobs_17072026_140526.pdf",
      "notificationUrl": "https://aima-web-images.s3.ap-south-1.amazonaws.com/sailcareers.com/Downloads/RSP_News%20&amp;%20Jobs_17072026_140526.pdf",
      "websiteUrl": "https://aima-web-images.s3.ap-south-1.amazonaws.com/sailcareers.com/Downloads/RSP_News%20&amp;%20Jobs_17072026_140526.pdf"
    }
  },
  {
    "id": "beml-apprentice-recruitment",
    "title": "BEML Apprentice Recruitment 2026 – Apply Online for 1346 Posts | Last Date 08-09-2026",
    "org": "BEML Apprentice",
    "shortOrg": "BEML Apprentice",
    "posts": "Trade Apprentice / ITI Technician (Fitter/Electrician/Welder)",
    "vacancies": 75,
    "salary": "Pay Level-2 (₹19,900 – ₹63,200/-) / Monthly Stipend ₹7,700 – ₹12,000/-",
    "qualificationText": "Class 10th (Matriculation) + ITI in relevant trade (NCVT / SCVT recognized)",
    "qualifications": [
      "10th-pass",
      "iti"
    ],
    "category": "central-govt",
    "subCategory": "ITI & Trade Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "08-09-2026",
      "examDate": "Merit Based (10th + ITI Marks) / Trade Test / CBT"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Exempted)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per Apprenticeship norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1GZG8W6SmsYXKpXXaUm9WeWZDXNnKN9uz/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1GZG8W6SmsYXKpXXaUm9WeWZDXNnKN9uz/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1GZG8W6SmsYXKpXXaUm9WeWZDXNnKN9uz/view?usp=sharing"
    }
  },
  {
    "id": "sspl-drdo-apprentice-recruitment",
    "title": "SSPL DRDO Apprentice Recruitment 2026 – Apply for 41 ITI, Diploma & Graduate Posts | Last Date 21-08-2026",
    "org": "SSPL DRDO Apprentice",
    "shortOrg": "SSPL DRDO Apprentice",
    "posts": "ITI, Diploma & Graduate",
    "vacancies": 41,
    "salary": "Pay Level-2 (₹19,900 – ₹63,200/-) / Monthly Stipend ₹7,700 – ₹12,000/-",
    "qualificationText": "Class 10th (Matriculation) + ITI in relevant trade (NCVT / SCVT recognized)",
    "qualifications": [
      "10th-pass",
      "iti"
    ],
    "category": "central-govt",
    "subCategory": "ITI & Trade Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "21-08-2026",
      "examDate": "Merit Based (10th + ITI Marks) / Trade Test / CBT"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Exempted)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per Apprenticeship norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drdo.gov.in/drdo/sites/default/files/vacancy/advtSSPL_APP30072026.pdf",
      "notificationUrl": "https://drdo.gov.in/drdo/sites/default/files/vacancy/advtSSPL_APP30072026.pdf",
      "websiteUrl": "https://drdo.gov.in/drdo/sites/default/files/vacancy/advtSSPL_APP30072026.pdf"
    }
  },
  {
    "id": "ordnance-factory-dehu-road-dbw",
    "title": "Ordnance Factory Dehu Road DBW Recruitment 2026 – Apply Offline for 14 Posts | Last Date 20-08-2026",
    "org": "Ordnance Factory Dehu Road DBW",
    "shortOrg": "Ordnance Factory Dehu Road DBW",
    "posts": "Trade Apprentice / ITI Technician (Fitter/Electrician/Welder)",
    "vacancies": 75,
    "salary": "Pay Level-2 (₹19,900 – ₹63,200/-) / Monthly Stipend ₹7,700 – ₹12,000/-",
    "qualificationText": "Class 10th (Matriculation) + ITI in relevant trade (NCVT / SCVT recognized)",
    "qualifications": [
      "10th-pass",
      "iti"
    ],
    "category": "central-govt",
    "subCategory": "ITI & Trade Apprentice Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "20-08-2026",
      "examDate": "Merit Based (10th + ITI Marks) / Trade Test / CBT"
    },
    "fee": "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Exempted)",
    "ageLimit": "15 to 24 / 28 Years (Relaxation as per Apprenticeship norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://munitionsindia.in/wp-content/uploads/English-Full-Advertisement-AOCP_OFDR.pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "law-llb-govt-jobs",
    "title": "Latest Law Govt Jobs 2026 | BL, LLB and Advocate Job Updates",
    "org": "Latest Law Govt Jobs 2026 | BL, LLB and Advocate Job Updates",
    "shortOrg": "Latest Law Govt Jobs 2026 | BL",
    "posts": "Law Officer / Legal Advisor / Judicial Assistant",
    "vacancies": 15,
    "salary": "Pay Matrix Level-8 / Level-10 (₹47,600 – ₹1,77,500/-) + Legal Allowances",
    "qualificationText": "Bachelor's Degree in Law (LLB / 5-Year Integrated LLB) / LLM with Bar Council Registration",
    "qualifications": [
      "graduate",
      "law-llb"
    ],
    "category": "central-govt",
    "subCategory": "Legal & Judiciary Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Preliminary & Main Examination / Interview"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD: Nil or ₹250",
    "ageLimit": "21 to 35 / 40 Years (Relaxation as per Bar/Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2015/07/Law-LLB-Govt-Jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2015/07/Law-LLB-Govt-Jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2015/07/Law-LLB-Govt-Jobs.html"
    }
  },
  {
    "id": "cci-advertisement-no-co-03-2026",
    "title": "CCI Advertisement No CO/03/2026: Apply for Engineer, Officer & Analyst Posts | Last Date 15-09-2026",
    "org": "CCI Advertisement No CO/03/2026: Apply for Engineer, Officer & Analyst Posts | Last Date 15-09-2026",
    "shortOrg": "CCI Advertisement No CO/03/202",
    "posts": "Law Officer / Legal Advisor / Judicial Assistant",
    "vacancies": 15,
    "salary": "Pay Matrix Level-8 / Level-10 (₹47,600 – ₹1,77,500/-) + Legal Allowances",
    "qualificationText": "Bachelor's Degree in Law (LLB / 5-Year Integrated LLB) / LLM with Bar Council Registration",
    "qualifications": [
      "graduate",
      "law-llb"
    ],
    "category": "central-govt",
    "subCategory": "Legal & Judiciary Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "15-09-2026",
      "examDate": "Preliminary & Main Examination / Interview"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD: Nil or ₹250",
    "ageLimit": "21 to 35 / 40 Years (Relaxation as per Bar/Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://cciltd.in/UserFiles/files/Approved%20-%20draft%20advertisement%20-%20CO-03-2026(2).pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "seci-experienced-professionals",
    "title": "SECI Experienced Professionals Recruitment 2026 – Apply Online for 28 Posts | Last Date 23-09-2026",
    "org": "SECI Experienced Professionals",
    "shortOrg": "SECI Experienced Professionals",
    "posts": "Law Officer / Legal Advisor / Judicial Assistant",
    "vacancies": 15,
    "salary": "Pay Matrix Level-8 / Level-10 (₹47,600 – ₹1,77,500/-) + Legal Allowances",
    "qualificationText": "Bachelor's Degree in Law (LLB / 5-Year Integrated LLB) / LLM with Bar Council Registration",
    "qualifications": [
      "graduate",
      "law-llb"
    ],
    "category": "central-govt",
    "subCategory": "Legal & Judiciary Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "23-09-2026",
      "examDate": "Preliminary & Main Examination / Interview"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD: Nil or ₹250",
    "ageLimit": "21 to 35 / 40 Years (Relaxation as per Bar/Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1wYTK7K_QoZqOp4hhrjKeABmJMxSM979b/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1wYTK7K_QoZqOp4hhrjKeABmJMxSM979b/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1wYTK7K_QoZqOp4hhrjKeABmJMxSM979b/view?usp=sharing"
    }
  },
  {
    "id": "upsc-advertisement-no-10-2026",
    "title": "UPSC Advertisement No.10/2026 – Apply Online for 34 Posts | Last Date 04-09-2026",
    "org": "UPSC Advertisement No.10/2026 – Apply Online for 34 Posts | Last Date 04-09-2026",
    "shortOrg": "UPSC Advertisement No.10/2026 ",
    "posts": "Law Officer / Legal Advisor / Judicial Assistant",
    "vacancies": 15,
    "salary": "Pay Matrix Level-8 / Level-10 (₹47,600 – ₹1,77,500/-) + Legal Allowances",
    "qualificationText": "Bachelor's Degree in Law (LLB / 5-Year Integrated LLB) / LLM with Bar Council Registration",
    "qualifications": [
      "graduate",
      "law-llb"
    ],
    "category": "central-govt",
    "subCategory": "Legal & Judiciary Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "04-09-2026",
      "examDate": "Preliminary & Main Examination / Interview"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD: Nil or ₹250",
    "ageLimit": "21 to 35 / 40 Years (Relaxation as per Bar/Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.upsc.gov.in/sites/default/files/AdvtNo-10-2026-Engl-070826.pdf",
      "notificationUrl": "https://www.upsc.gov.in/sites/default/files/AdvtNo-10-2026-Engl-070826.pdf",
      "websiteUrl": "https://www.upsc.gov.in/sites/default/files/AdvtNo-10-2026-Engl-070826.pdf"
    }
  },
  {
    "id": "dpcc-various-posts-recruitment",
    "title": "DPCC Various Posts Recruitment 2026 – Apply for 54 Engineer, Scientist & Assistant Posts",
    "org": "DPCC Various Posts",
    "shortOrg": "DPCC Various Posts",
    "posts": "Engineer, Scientist & Assistant",
    "vacancies": 54,
    "salary": "Pay Matrix Level-8 / Level-10 (₹47,600 – ₹1,77,500/-) + Legal Allowances",
    "qualificationText": "Bachelor's Degree in Law (LLB / 5-Year Integrated LLB) / LLM with Bar Council Registration",
    "qualifications": [
      "graduate",
      "law-llb"
    ],
    "category": "central-govt",
    "subCategory": "Legal & Judiciary Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Preliminary & Main Examination / Interview"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD: Nil or ₹250",
    "ageLimit": "21 to 35 / 40 Years (Relaxation as per Bar/Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1pKrxexmVVj7QeSTjgkpCzjkefO9ck7vB/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1pKrxexmVVj7QeSTjgkpCzjkefO9ck7vB/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1pKrxexmVVj7QeSTjgkpCzjkefO9ck7vB/view?usp=sharing"
    }
  },
  {
    "id": "upcoming-government-exams",
    "title": "Upcoming Government Exams 2026 – Govt Job Notifications",
    "org": "Upcoming Government Exams 2026 – Govt Job",
    "shortOrg": "Upcoming Government Exams 2026",
    "posts": "Law Officer / Legal Advisor / Judicial Assistant",
    "vacancies": 15,
    "salary": "Pay Matrix Level-8 / Level-10 (₹47,600 – ₹1,77,500/-) + Legal Allowances",
    "qualificationText": "Bachelor's Degree in Law (LLB / 5-Year Integrated LLB) / LLM with Bar Council Registration",
    "qualifications": [
      "graduate",
      "law-llb"
    ],
    "category": "central-govt",
    "subCategory": "Legal & Judiciary Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Preliminary & Main Examination / Interview"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD: Nil or ₹250",
    "ageLimit": "21 to 35 / 40 Years (Relaxation as per Bar/Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.upsconline.nic.in/",
      "notificationUrl": "https://rozgardwaar.com/2025/08/Upcoming-Government-Exams.html",
      "websiteUrl": "https://www.upsconline.nic.in/"
    }
  },
  {
    "id": "iob-generalist-so-recruitment",
    "title": "IOB Generalist SO Recruitment 2026 – Apply Online for 291 Posts | Last Date 15-09-2026",
    "org": "IOB Generalist SO",
    "shortOrg": "IOB Generalist SO",
    "posts": "Management Trainee / Assistant Manager (HR/Finance/Operations)",
    "vacancies": 30,
    "salary": "IDA Pay Scale E-1 / E-2 (₹40,000 – ₹1,40,000/-) / CTC ₹12 to ₹18 LPA",
    "qualificationText": "2-Year Full Time MBA / PGDM (HR / Finance / Marketing / Operations / Supply Chain) or equivalent Master's Degree",
    "qualifications": [
      "graduate",
      "mba-pgdm",
      "post-graduate"
    ],
    "category": "psu",
    "subCategory": "Management & HR Trainee Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "15-09-2026",
      "examDate": "Computer Based Test (CBT) / Group Discussion (GD) & Personal Interview"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil or ₹250",
    "ageLimit": "21 to 28 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1jUZOts6VGIH1XqPi1LMwvIcA2rFzSjWF/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1jUZOts6VGIH1XqPi1LMwvIcA2rFzSjWF/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1jUZOts6VGIH1XqPi1LMwvIcA2rFzSjWF/view?usp=sharing"
    }
  },
  {
    "id": "indbank-relationship-manager-dealer",
    "title": "Indbank Relationship Manager & Dealer Recruitment 2026 – Apply for 14 Posts | Last Date 31-08-2026",
    "org": "Indbank Relationship Manager & Dealer",
    "shortOrg": "Indbank Relationship Manager &",
    "posts": "Management Trainee / Assistant Manager (HR/Finance/Operations)",
    "vacancies": 30,
    "salary": "IDA Pay Scale E-1 / E-2 (₹40,000 – ₹1,40,000/-) / CTC ₹12 to ₹18 LPA",
    "qualificationText": "2-Year Full Time MBA / PGDM (HR / Finance / Marketing / Operations / Supply Chain) or equivalent Master's Degree",
    "qualifications": [
      "graduate",
      "mba-pgdm",
      "post-graduate"
    ],
    "category": "psu",
    "subCategory": "Management & HR Trainee Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "31-08-2026",
      "examDate": "Computer Based Test (CBT) / Group Discussion (GD) & Personal Interview"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil or ₹250",
    "ageLimit": "21 to 28 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.indbankonline.com/v/?v=2026/08/Advertisement-for-the-post-of-Relationshipmanager-Dealer-dated-10.08.2026.pdf",
      "notificationUrl": "https://www.indbankonline.com/v/?v=2026/08/Advertisement-for-the-post-of-Relationshipmanager-Dealer-dated-10.08.2026.pdf",
      "websiteUrl": "https://www.indbankonline.com/v/?v=2026/08/Advertisement-for-the-post-of-Relationshipmanager-Dealer-dated-10.08.2026.pdf"
    }
  },
  {
    "id": "national-board-of-accreditation",
    "title": "National Board of Accreditation Recruitment 2026: Apply for 07 Manager, Director Posts | Last Date 31-08-2026",
    "org": "National Board of Accreditation",
    "shortOrg": "National Board of Accreditatio",
    "posts": "Manager, Director",
    "vacancies": 7,
    "salary": "IDA Pay Scale E-1 / E-2 (₹40,000 – ₹1,40,000/-) / CTC ₹12 to ₹18 LPA",
    "qualificationText": "2-Year Full Time MBA / PGDM (HR / Finance / Marketing / Operations / Supply Chain) or equivalent Master's Degree",
    "qualifications": [
      "graduate",
      "mba-pgdm",
      "post-graduate"
    ],
    "category": "psu",
    "subCategory": "Management & HR Trainee Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "31-08-2026",
      "examDate": "Computer Based Test (CBT) / Group Discussion (GD) & Personal Interview"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil or ₹250",
    "ageLimit": "21 to 28 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.nbaind.org/Uploads/Advt.,%20General%20terms%20&amp;%20Conditions_Format_20260724175301.pdf",
      "notificationUrl": "https://www.nbaind.org/Uploads/Advt.,%20General%20terms%20&amp;%20Conditions_Format_20260724175301.pdf",
      "websiteUrl": "https://www.nbaind.org/Uploads/Advt.,%20General%20terms%20&amp;%20Conditions_Format_20260724175301.pdf"
    }
  },
  {
    "id": "sbi-specialist-cadre-officer",
    "title": "SBI Specialist Cadre Officer Recruitment 2026 – Apply Online for 38 Various Posts | Last Date 27-08-2026",
    "org": "SBI Specialist Cadre Officer",
    "shortOrg": "SBI Specialist Cadre Officer",
    "posts": "Various",
    "vacancies": 38,
    "salary": "IDA Pay Scale E-1 / E-2 (₹40,000 – ₹1,40,000/-) / CTC ₹12 to ₹18 LPA",
    "qualificationText": "2-Year Full Time MBA / PGDM (HR / Finance / Marketing / Operations / Supply Chain) or equivalent Master's Degree",
    "qualifications": [
      "graduate",
      "mba-pgdm",
      "post-graduate"
    ],
    "category": "psu",
    "subCategory": "Management & HR Trainee Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "27-08-2026",
      "examDate": "Computer Based Test (CBT) / Group Discussion (GD) & Personal Interview"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil or ₹250",
    "ageLimit": "21 to 28 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://sbi.bank.in/documents/77530/57941334/ADV_CRPD_SCO_2026-27_11+%281%29.pdf/474dbe0d-e408-720b-f412-3788a553105a?t=1786024930974",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "rcfl-management-trainee-recruitment",
    "title": "RCFL Management Trainee Recruitment 2026 – Apply Online for 94 Posts | Last Date 10-09-2026",
    "org": "RCFL Management Trainee",
    "shortOrg": "RCFL Management Trainee",
    "posts": "Management Trainee / Assistant Manager (HR/Finance/Operations)",
    "vacancies": 30,
    "salary": "IDA Pay Scale E-1 / E-2 (₹40,000 – ₹1,40,000/-) / CTC ₹12 to ₹18 LPA",
    "qualificationText": "2-Year Full Time MBA / PGDM (HR / Finance / Marketing / Operations / Supply Chain) or equivalent Master's Degree",
    "qualifications": [
      "graduate",
      "mba-pgdm",
      "post-graduate"
    ],
    "category": "psu",
    "subCategory": "Management & HR Trainee Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "10-09-2026",
      "examDate": "Computer Based Test (CBT) / Group Discussion (GD) & Personal Interview"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil or ₹250",
    "ageLimit": "21 to 28 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rcfltd.com/files/MT%202026.pdf",
      "notificationUrl": "https://rcfltd.com/files/MT%202026.pdf",
      "websiteUrl": "https://rcfltd.com/files/MT%202026.pdf"
    }
  },
  {
    "id": "nainital-bank-specialist-officer",
    "title": "Nainital Bank Specialist Officer Recruitment 2026 – Apply Online for 41 Posts | Last Date 07-09-2026",
    "org": "Nainital Bank Specialist Officer",
    "shortOrg": "Nainital Bank Specialist Offic",
    "posts": "Management Trainee / Assistant Manager (HR/Finance/Operations)",
    "vacancies": 30,
    "salary": "IDA Pay Scale E-1 / E-2 (₹40,000 – ₹1,40,000/-) / CTC ₹12 to ₹18 LPA",
    "qualificationText": "2-Year Full Time MBA / PGDM (HR / Finance / Marketing / Operations / Supply Chain) or equivalent Master's Degree",
    "qualifications": [
      "graduate",
      "mba-pgdm",
      "post-graduate"
    ],
    "category": "psu",
    "subCategory": "Management & HR Trainee Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "07-09-2026",
      "examDate": "Computer Based Test (CBT) / Group Discussion (GD) & Personal Interview"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil or ₹250",
    "ageLimit": "21 to 28 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://www.nainitalbank.bank.in/pdf/Notification%202026.pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "nitttr-bhopal-faculty-recruitment",
    "title": "NITTTR Bhopal Faculty Recruitment 2026 – Apply for 22 Posts, Walk in Interview",
    "org": "NITTTR Bhopal Faculty",
    "shortOrg": "NITTTR Bhopal Faculty",
    "posts": "Management Trainee / Assistant Manager (HR/Finance/Operations)",
    "vacancies": 30,
    "salary": "IDA Pay Scale E-1 / E-2 (₹40,000 – ₹1,40,000/-) / CTC ₹12 to ₹18 LPA",
    "qualificationText": "2-Year Full Time MBA / PGDM (HR / Finance / Marketing / Operations / Supply Chain) or equivalent Master's Degree",
    "qualifications": [
      "graduate",
      "mba-pgdm",
      "post-graduate"
    ],
    "category": "psu",
    "subCategory": "Management & HR Trainee Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "Computer Based Test (CBT) / Group Discussion (GD) & Personal Interview"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil or ₹250",
    "ageLimit": "21 to 28 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://nitttrbpl.ac.in/vacancy26_27/Walk_in_Interview_contFaculty_200826.pdf",
      "notificationUrl": "https://nitttrbpl.ac.in/vacancy26_27/Walk_in_Interview_contFaculty_200826.pdf",
      "websiteUrl": "https://nitttrbpl.ac.in/vacancy26_27/Walk_in_Interview_contFaculty_200826.pdf"
    }
  },
  {
    "id": "mecon-executive-recruitment",
    "title": "MECON Executive Recruitment 2026 – Apply Online for 07 Manager Posts | Last Date 13-09-2026",
    "org": "MECON Executive",
    "shortOrg": "MECON Executive",
    "posts": "Manager",
    "vacancies": 7,
    "salary": "IDA Pay Scale E-1 / E-2 (₹40,000 – ₹1,40,000/-) / CTC ₹12 to ₹18 LPA",
    "qualificationText": "2-Year Full Time MBA / PGDM (HR / Finance / Marketing / Operations / Supply Chain) or equivalent Master's Degree",
    "qualifications": [
      "graduate",
      "mba-pgdm",
      "post-graduate"
    ],
    "category": "psu",
    "subCategory": "Management & HR Trainee Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "13-09-2026",
      "examDate": "Computer Based Test (CBT) / Group Discussion (GD) & Personal Interview"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil or ₹250",
    "ageLimit": "21 to 28 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1oOgYcBvd5o7BOvgBlmFJ3YjZ5I5Ai59M/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1oOgYcBvd5o7BOvgBlmFJ3YjZ5I5Ai59M/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1oOgYcBvd5o7BOvgBlmFJ3YjZ5I5Ai59M/view?usp=sharing"
    }
  },
  {
    "id": "aai-advt-no-12-2026",
    "title": "AAI Advt No 12/2026: Apply Online for 389 Manager and Junior Executive Posts | Last Date 07-09-2026",
    "org": "AAI",
    "shortOrg": "AAI",
    "posts": "Manager and Junior Executive",
    "vacancies": 389,
    "salary": "IDA Pay Scale E-1 / E-2 (₹40,000 – ₹1,40,000/-) / CTC ₹12 to ₹18 LPA",
    "qualificationText": "2-Year Full Time MBA / PGDM (HR / Finance / Marketing / Operations / Supply Chain) or equivalent Master's Degree",
    "qualifications": [
      "graduate",
      "mba-pgdm",
      "post-graduate"
    ],
    "category": "psu",
    "subCategory": "Management & HR Trainee Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "07-09-2026",
      "examDate": "Computer Based Test (CBT) / Group Discussion (GD) & Personal Interview"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil or ₹250",
    "ageLimit": "21 to 28 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://www.aai.aero/sites/default/files/examdashboard_advertisement/Detailed%20Advertisement%2012-2026-CHQ.pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "rfcl-experienced-professionals",
    "title": "RFCL Experienced Professionals Recruitment 2026 – Apply Online for 40 Engineer, Officer & Manager Posts | Last Date 24-09-2026",
    "org": "RFCL Experienced Professionals",
    "shortOrg": "RFCL Experienced Professionals",
    "posts": "Engineer, Officer & Manager",
    "vacancies": 40,
    "salary": "IDA Pay Scale E-1 / E-2 (₹40,000 – ₹1,40,000/-) / CTC ₹12 to ₹18 LPA",
    "qualificationText": "2-Year Full Time MBA / PGDM (HR / Finance / Marketing / Operations / Supply Chain) or equivalent Master's Degree",
    "qualifications": [
      "graduate",
      "mba-pgdm",
      "post-graduate"
    ],
    "category": "psu",
    "subCategory": "Management & HR Trainee Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "24-09-2026",
      "examDate": "Computer Based Test (CBT) / Group Discussion (GD) & Personal Interview"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil or ₹250",
    "ageLimit": "21 to 28 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.rfcl.co.in/upload/Detailed%20Advt%2001_2026.pdf",
      "notificationUrl": "https://www.rfcl.co.in/upload/Detailed%20Advt%2001_2026.pdf",
      "websiteUrl": "https://www.rfcl.co.in/upload/Detailed%20Advt%2001_2026.pdf"
    }
  },
  {
    "id": "sbi-trade-finance-officer-recruitment",
    "title": "SBI Trade Finance Officer Recruitment 2026: Apply Online for 35 Posts | Last Date 19-09-2026",
    "org": "SBI Trade Finance Officer",
    "shortOrg": "SBI Trade Finance Officer",
    "posts": "Management Trainee / Assistant Manager (HR/Finance/Operations)",
    "vacancies": 30,
    "salary": "IDA Pay Scale E-1 / E-2 (₹40,000 – ₹1,40,000/-) / CTC ₹12 to ₹18 LPA",
    "qualificationText": "2-Year Full Time MBA / PGDM (HR / Finance / Marketing / Operations / Supply Chain) or equivalent Master's Degree",
    "qualifications": [
      "graduate",
      "mba-pgdm",
      "post-graduate"
    ],
    "category": "psu",
    "subCategory": "Management & HR Trainee Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "19-09-2026",
      "examDate": "Computer Based Test (CBT) / Group Discussion (GD) & Personal Interview"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil or ₹250",
    "ageLimit": "21 to 28 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1Ax0inIxvFcU7Eyp7amgU1WXbRVbrVmgz/view?usp=sharing",
      "notificationUrl": "https://sbi.bank.in/documents/77530/57941334/29082026_BIODATA+2026_27_15.pdf/37417aaf-65ba-06f7-a774-402ed91c69d5?t=1787986943737",
      "websiteUrl": "https://drive.google.com/file/d/1Ax0inIxvFcU7Eyp7amgU1WXbRVbrVmgz/view?usp=sharing"
    }
  },
  {
    "id": "maharashtra-metro-rail-recruitment-2026",
    "title": "Maharashtra Metro Rail Recruitment 2026 – Apply for 56 Engineer, Technician, Assistant & Attendant Posts | Last Date 25-09-2026",
    "org": "Maharashtra Metro Rail",
    "shortOrg": "Maharashtra Metro Rail",
    "posts": "Engineer, Technician, Assistant & Attendant",
    "vacancies": 56,
    "salary": "IDA Pay Scale E-1 / E-2 (₹40,000 – ₹1,40,000/-) / CTC ₹12 to ₹18 LPA",
    "qualificationText": "2-Year Full Time MBA / PGDM (HR / Finance / Marketing / Operations / Supply Chain) or equivalent Master's Degree",
    "qualifications": [
      "graduate",
      "mba-pgdm",
      "post-graduate"
    ],
    "category": "psu",
    "subCategory": "Management & HR Trainee Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "25-09-2026",
      "examDate": "Computer Based Test (CBT) / Group Discussion (GD) & Personal Interview"
    },
    "fee": "General/OBC/EWS: ₹500 - ₹1000 | SC/ST/PwBD: Nil or ₹250",
    "ageLimit": "21 to 28 / 32 Years (Relaxation as per Govt norms)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://mahametro.org/pdf/Advt.%20N_HR_05%20%20with%20form%203.pdf",
      "notificationUrl": "https://mahametro.org/pdf/Advt.%20N_HR_05%20%20with%20form%203.pdf",
      "websiteUrl": "https://mahametro.org/pdf/Advt.%20N_HR_05%20%20with%20form%203.pdf"
    }
  },
  {
    "id": "stockholding-ciso-recruitment",
    "title": "StockHolding CISO Recruitment 2026 – Apply Online for 02 Posts | Last Date 02-09-2026",
    "org": "StockHolding CISO",
    "shortOrg": "StockHolding CISO",
    "posts": "Medical Officer / Staff Nurse / Pharmacist / Specialist Doctor",
    "vacancies": 50,
    "salary": "Pay Level-7 to Level-11 (₹44,900 – ₹2,09,200/-) + Non-Practicing Allowance (NPA)",
    "qualificationText": "MBBS / BDS / B.Sc Nursing / GNM / B.Pharm / D.Pharm from Medical / Nursing Council recognized Institute",
    "qualifications": [
      "graduate",
      "medical-nursing"
    ],
    "category": "central-govt",
    "subCategory": "Healthcare & Medical Services Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "02-09-2026",
      "examDate": "CBT Examination / Walk-in Interview / Practical Clinical Test"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD/Women: Nil or ₹250",
    "ageLimit": "18 to 35 / 45 Years (Relaxation as per Medical Service rules)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1A2VXKgqeyJzIP3b2K_NnaG98lASko556/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1A2VXKgqeyJzIP3b2K_NnaG98lASko556/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1A2VXKgqeyJzIP3b2K_NnaG98lASko556/view?usp=sharing"
    }
  },
  {
    "id": "drrmlims-non-teaching-recruitment-2026",
    "title": "DRRMLIMS Non Teaching Recruitment 2026 – Apply Online for 74 Posts",
    "org": "DRRMLIMS Non Teaching",
    "shortOrg": "DRRMLIMS Non Teaching",
    "posts": "Medical Officer / Staff Nurse / Pharmacist / Specialist Doctor",
    "vacancies": 50,
    "salary": "Pay Level-7 to Level-11 (₹44,900 – ₹2,09,200/-) + Non-Practicing Allowance (NPA)",
    "qualificationText": "MBBS / BDS / B.Sc Nursing / GNM / B.Pharm / D.Pharm from Medical / Nursing Council recognized Institute",
    "qualifications": [
      "graduate",
      "medical-nursing"
    ],
    "category": "central-govt",
    "subCategory": "Healthcare & Medical Services Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "CBT Examination / Walk-in Interview / Practical Clinical Test"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD/Women: Nil or ₹250",
    "ageLimit": "18 to 35 / 45 Years (Relaxation as per Medical Service rules)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.drrmlims.ac.in/Assets/pages/recruitment/Final_Advt_2026_GROUP_B_C_D_1.pdf",
      "notificationUrl": "https://www.drrmlims.ac.in/Assets/pages/recruitment/Final_Advt_2026_GROUP_B_C_D_1.pdf",
      "websiteUrl": "https://www.drrmlims.ac.in/Assets/pages/recruitment/Final_Advt_2026_GROUP_B_C_D_1.pdf"
    }
  },
  {
    "id": "nursing-govt-jobs-vacancy",
    "title": "Latest Nursing Govt Jobs 2026 – Staff Nurse, ANM, Nursing Officer Vacancies",
    "org": "Latest Nursing Govt Jobs 2026 – Staff Nurse, ANM, Nursing Officer Vacancies",
    "shortOrg": "Latest Nursing Govt Jobs 2026 ",
    "posts": "Medical Officer / Staff Nurse / Pharmacist / Specialist Doctor",
    "vacancies": 50,
    "salary": "Pay Level-7 to Level-11 (₹44,900 – ₹2,09,200/-) + Non-Practicing Allowance (NPA)",
    "qualificationText": "MBBS / BDS / B.Sc Nursing / GNM / B.Pharm / D.Pharm from Medical / Nursing Council recognized Institute",
    "qualifications": [
      "graduate",
      "medical-nursing"
    ],
    "category": "central-govt",
    "subCategory": "Healthcare & Medical Services Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "CBT Examination / Walk-in Interview / Practical Clinical Test"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD/Women: Nil or ₹250",
    "ageLimit": "18 to 35 / 45 Years (Relaxation as per Medical Service rules)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2013/12/nursing-govt-jobs-vacancy.html",
      "notificationUrl": "https://rozgardwaar.com/2013/12/nursing-govt-jobs-vacancy.html",
      "websiteUrl": "https://rozgardwaar.com/2013/12/nursing-govt-jobs-vacancy.html"
    }
  },
  {
    "id": "iit-bombay-advertisement-no-02-2026",
    "title": "IIT Bombay Advertisement No.02/2026 – Apply Online for 27 Technical, Officer, Nursing & Other Posts | Last Date 04-09-2026",
    "org": "IIT Bombay Advertisement No.02/2026 – Apply Online for 27 Technical, Officer, Nursing & Other Posts | Last Date 04-09-2026",
    "shortOrg": "IIT Bombay Advertisement No.02",
    "posts": "Technical, Officer, Nursing & Other",
    "vacancies": 27,
    "salary": "Pay Level-7 to Level-11 (₹44,900 – ₹2,09,200/-) + Non-Practicing Allowance (NPA)",
    "qualificationText": "MBBS / BDS / B.Sc Nursing / GNM / B.Pharm / D.Pharm from Medical / Nursing Council recognized Institute",
    "qualifications": [
      "graduate",
      "medical-nursing"
    ],
    "category": "central-govt",
    "subCategory": "Healthcare & Medical Services Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "04-09-2026",
      "examDate": "CBT Examination / Walk-in Interview / Practical Clinical Test"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD/Women: Nil or ₹250",
    "ageLimit": "18 to 35 / 45 Years (Relaxation as per Medical Service rules)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1VPS9A4hMs91zDFuI0YDTw8EjDbsW1oGX/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1VPS9A4hMs91zDFuI0YDTw8EjDbsW1oGX/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1VPS9A4hMs91zDFuI0YDTw8EjDbsW1oGX/view?usp=sharing"
    }
  },
  {
    "id": "aiims-nagpur-non-faculty-recruitment",
    "title": "AIIMS Nagpur Non Faculty Recruitment 2026 – Apply Online for 09 Posts | Last Date 07-09-2026",
    "org": "AIIMS Nagpur Non Faculty",
    "shortOrg": "AIIMS Nagpur Non Faculty",
    "posts": "Medical Officer / Staff Nurse / Pharmacist / Specialist Doctor",
    "vacancies": 50,
    "salary": "Pay Level-7 to Level-11 (₹44,900 – ₹2,09,200/-) + Non-Practicing Allowance (NPA)",
    "qualificationText": "MBBS / BDS / B.Sc Nursing / GNM / B.Pharm / D.Pharm from Medical / Nursing Council recognized Institute",
    "qualifications": [
      "graduate",
      "medical-nursing"
    ],
    "category": "central-govt",
    "subCategory": "Healthcare & Medical Services Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "07-09-2026",
      "examDate": "CBT Examination / Walk-in Interview / Practical Clinical Test"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD/Women: Nil or ₹250",
    "ageLimit": "18 to 35 / 45 Years (Relaxation as per Medical Service rules)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://aiimsnagpur.edu.in/upload/recruitment/AIIMS_Nagpur_Group_A_Posts_Advertisement.pdf",
      "notificationUrl": "https://aiimsnagpur.edu.in/upload/recruitment/AIIMS_Nagpur_Group_A_Posts_Advertisement.pdf",
      "websiteUrl": "https://aiimsnagpur.edu.in/upload/recruitment/AIIMS_Nagpur_Group_A_Posts_Advertisement.pdf"
    }
  },
  {
    "id": "sainik-school-balachadi-recruitment",
    "title": "Sainik School Balachadi Recruitment 2026 – Apply 16 Teaching and Non-Teaching Posts | Last Date 10-08-2026",
    "org": "Sainik School Balachadi",
    "shortOrg": "Sainik School Balachadi",
    "posts": "Medical Officer / Staff Nurse / Pharmacist / Specialist Doctor",
    "vacancies": 50,
    "salary": "Pay Level-7 to Level-11 (₹44,900 – ₹2,09,200/-) + Non-Practicing Allowance (NPA)",
    "qualificationText": "MBBS / BDS / B.Sc Nursing / GNM / B.Pharm / D.Pharm from Medical / Nursing Council recognized Institute",
    "qualifications": [
      "graduate",
      "medical-nursing"
    ],
    "category": "central-govt",
    "subCategory": "Healthcare & Medical Services Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "10-08-2026",
      "examDate": "CBT Examination / Walk-in Interview / Practical Clinical Test"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD/Women: Nil or ₹250",
    "ageLimit": "18 to 35 / 45 Years (Relaxation as per Medical Service rules)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.ssbalachadi.org/data/file-library/advat-for-various-regular-and-contr-posts-18-jul-2026.pdf",
      "notificationUrl": "https://www.ssbalachadi.org/data/file-library/advat-for-various-regular-and-contr-posts-18-jul-2026.pdf",
      "websiteUrl": "https://www.ssbalachadi.org/data/file-library/advat-for-various-regular-and-contr-posts-18-jul-2026.pdf"
    }
  },
  {
    "id": "aiims-norcet-11-recruitment",
    "title": "AIIMS NORCET 11 Recruitment 2026 – Apply Online for 2218 Nursing Officer Posts | Last Date 13-08-2026",
    "org": "AIIMS NORCET 11",
    "shortOrg": "AIIMS NORCET 11",
    "posts": "Nursing Officer",
    "vacancies": 2218,
    "salary": "Pay Level-7 to Level-11 (₹44,900 – ₹2,09,200/-) + Non-Practicing Allowance (NPA)",
    "qualificationText": "MBBS / BDS / B.Sc Nursing / GNM / B.Pharm / D.Pharm from Medical / Nursing Council recognized Institute",
    "qualifications": [
      "graduate",
      "medical-nursing"
    ],
    "category": "central-govt",
    "subCategory": "Healthcare & Medical Services Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "13-08-2026",
      "examDate": "CBT Examination / Walk-in Interview / Practical Clinical Test"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD/Women: Nil or ₹250",
    "ageLimit": "18 to 35 / 45 Years (Relaxation as per Medical Service rules)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1txiG4L5Wu1QoqCsdiQM_qa99R6ekrhTE/view",
      "notificationUrl": "https://drive.google.com/file/d/1txiG4L5Wu1QoqCsdiQM_qa99R6ekrhTE/view",
      "websiteUrl": "https://drive.google.com/file/d/1txiG4L5Wu1QoqCsdiQM_qa99R6ekrhTE/view"
    }
  },
  {
    "id": "osssc-nursing-officer",
    "title": "OSSSC Nursing Officer Recruitment 2026 – Notification, Online Form, 5989 Posts | Last Date 05-08-2026",
    "org": "OSSSC Nursing Officer",
    "shortOrg": "OSSSC Nursing Officer",
    "posts": "Medical Officer / Staff Nurse / Pharmacist / Specialist Doctor",
    "vacancies": 50,
    "salary": "Pay Level-7 to Level-11 (₹44,900 – ₹2,09,200/-) + Non-Practicing Allowance (NPA)",
    "qualificationText": "MBBS / BDS / B.Sc Nursing / GNM / B.Pharm / D.Pharm from Medical / Nursing Council recognized Institute",
    "qualifications": [
      "graduate",
      "medical-nursing"
    ],
    "category": "central-govt",
    "subCategory": "Healthcare & Medical Services Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "05-08-2026",
      "examDate": "CBT Examination / Walk-in Interview / Practical Clinical Test"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD/Women: Nil or ₹250",
    "ageLimit": "18 to 35 / 45 Years (Relaxation as per Medical Service rules)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1nI-EkLXRUnt1iYiq15H5StaajnZQwKN5/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1nI-EkLXRUnt1iYiq15H5StaajnZQwKN5/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1nI-EkLXRUnt1iYiq15H5StaajnZQwKN5/view?usp=sharing"
    }
  },
  {
    "id": "skau-kurukshetra-recruitment",
    "title": "SKAU Kurukshetra Recruitment 2026 – Apply Online for 60 Nurse, Pharmacist & Clerk Posts | Last Date 21-08-2026",
    "org": "SKAU Kurukshetra",
    "shortOrg": "SKAU Kurukshetra",
    "posts": "Nurse, Pharmacist & Clerk",
    "vacancies": 60,
    "salary": "Pay Level-7 to Level-11 (₹44,900 – ₹2,09,200/-) + Non-Practicing Allowance (NPA)",
    "qualificationText": "MBBS / BDS / B.Sc Nursing / GNM / B.Pharm / D.Pharm from Medical / Nursing Council recognized Institute",
    "qualifications": [
      "graduate",
      "medical-nursing"
    ],
    "category": "central-govt",
    "subCategory": "Healthcare & Medical Services Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "21-08-2026",
      "examDate": "CBT Examination / Walk-in Interview / Practical Clinical Test"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD/Women: Nil or ₹250",
    "ageLimit": "18 to 35 / 45 Years (Relaxation as per Medical Service rules)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1tYyauMvJoTvk0DB72ZZsgcGcipmlK2uF/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1tYyauMvJoTvk0DB72ZZsgcGcipmlK2uF/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1tYyauMvJoTvk0DB72ZZsgcGcipmlK2uF/view?usp=sharing"
    }
  },
  {
    "id": "inmas-drdo-recruitment",
    "title": "INMAS DRDO Recruitment 2026 Apply for 15 Research Posts | Last Date 30-06-2026",
    "org": "INMAS DRDO",
    "shortOrg": "INMAS DRDO",
    "posts": "Research",
    "vacancies": 15,
    "salary": "Pay Level-7 to Level-11 (₹44,900 – ₹2,09,200/-) + Non-Practicing Allowance (NPA)",
    "qualificationText": "MBBS / BDS / B.Sc Nursing / GNM / B.Pharm / D.Pharm from Medical / Nursing Council recognized Institute",
    "qualifications": [
      "graduate",
      "medical-nursing"
    ],
    "category": "central-govt",
    "subCategory": "Healthcare & Medical Services Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "30-06-2026",
      "examDate": "CBT Examination / Walk-in Interview / Practical Clinical Test"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD/Women: Nil or ₹250",
    "ageLimit": "18 to 35 / 45 Years (Relaxation as per Medical Service rules)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drdo.gov.in/drdo/sites/default/files/vacancy/advtINMAS03062026.pdf",
      "notificationUrl": "https://drdo.gov.in/drdo/sites/default/files/vacancy/advtINMAS03062026.pdf",
      "websiteUrl": "https://drdo.gov.in/drdo/sites/default/files/vacancy/advtINMAS03062026.pdf"
    }
  },
  {
    "id": "icmr-nihr-recruitment",
    "title": "ICMR NIHR Recruitment 2026 - Walk in Interview for 12 YP and Consultant Posts",
    "org": "ICMR NIHR",
    "shortOrg": "ICMR NIHR",
    "posts": "YP and Consultant",
    "vacancies": 12,
    "salary": "Pay Level-7 to Level-11 (₹44,900 – ₹2,09,200/-) + Non-Practicing Allowance (NPA)",
    "qualificationText": "MBBS / BDS / B.Sc Nursing / GNM / B.Pharm / D.Pharm from Medical / Nursing Council recognized Institute",
    "qualifications": [
      "graduate",
      "medical-nursing"
    ],
    "category": "central-govt",
    "subCategory": "Healthcare & Medical Services Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "CBT Examination / Walk-in Interview / Practical Clinical Test"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD/Women: Nil or ₹250",
    "ageLimit": "18 to 35 / 45 Years (Relaxation as per Medical Service rules)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.icmr.gov.in/icmrobject/uploads/Recruitment/1778757304_advertisementforconsultant_yp-iii_dristienglish.pdf",
      "notificationUrl": "https://www.icmr.gov.in/icmrobject/uploads/Recruitment/1778757304_advertisementforconsultant_yp-iii_dristienglish.pdf",
      "websiteUrl": "https://www.icmr.gov.in/icmrobject/uploads/Recruitment/1778757304_advertisementforconsultant_yp-iii_dristienglish.pdf"
    }
  },
  {
    "id": "goa-psc-advertisement-no-05-2026",
    "title": "Goa PSC Advertisement No 05 2026 - Apply Online for 25 Various Posts | Last Date 22 May",
    "org": "Goa PSC Advertisement No 05 2026 - Apply Online for 25 Various Posts | Last Date 22 May",
    "shortOrg": "Goa PSC Advertisement No 05 20",
    "posts": "Various",
    "vacancies": 25,
    "salary": "Pay Level-7 to Level-11 (₹44,900 – ₹2,09,200/-) + Non-Practicing Allowance (NPA)",
    "qualificationText": "MBBS / BDS / B.Sc Nursing / GNM / B.Pharm / D.Pharm from Medical / Nursing Council recognized Institute",
    "qualifications": [
      "graduate",
      "medical-nursing"
    ],
    "category": "central-govt",
    "subCategory": "Healthcare & Medical Services Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "CBT Examination / Walk-in Interview / Practical Clinical Test"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD/Women: Nil or ₹250",
    "ageLimit": "18 to 35 / 45 Years (Relaxation as per Medical Service rules)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://gpsc.goa.gov.in/wp-content/uploads/2026/05/ADVT052026.pdf",
      "notificationUrl": "https://gpsc.goa.gov.in/wp-content/uploads/2026/05/ADVT052026.pdf",
      "websiteUrl": "https://gpsc.goa.gov.in/wp-content/uploads/2026/05/ADVT052026.pdf"
    }
  },
  {
    "id": "dshm-recruitment",
    "title": "DSHM Recruitment 2026 - Online Form for 144 Various Contract Posts | Last Date 12th May",
    "org": "DSHM",
    "shortOrg": "DSHM",
    "posts": "Various Contract",
    "vacancies": 144,
    "salary": "Pay Level-7 to Level-11 (₹44,900 – ₹2,09,200/-) + Non-Practicing Allowance (NPA)",
    "qualificationText": "MBBS / BDS / B.Sc Nursing / GNM / B.Pharm / D.Pharm from Medical / Nursing Council recognized Institute",
    "qualifications": [
      "graduate",
      "medical-nursing"
    ],
    "category": "central-govt",
    "subCategory": "Healthcare & Medical Services Recruitment",
    "state": "all-india",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "CBT Examination / Walk-in Interview / Practical Clinical Test"
    },
    "fee": "General/OBC: ₹500 - ₹1000 | SC/ST/PwBD/Women: Nil or ₹250",
    "ageLimit": "18 to 35 / 45 Years (Relaxation as per Medical Service rules)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://dshm.delhi.gov.in/PDF/Advertisement_4_2026.pdf",
      "notificationUrl": "https://dshm.delhi.gov.in/PDF/Advertisement_4_2026.pdf",
      "websiteUrl": "https://dshm.delhi.gov.in/PDF/Advertisement_4_2026.pdf"
    }
  },
  {
    "id": "uppsc-pcs-recruitment",
    "title": "UPPSC PCS Recruitment 2026: Apply Online for 500 Posts | Last Date 03-08-2026",
    "org": "UPPSC PCS",
    "shortOrg": "UPPSC PCS",
    "posts": "Uttar Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttar Pradesh State Government Recruitment",
    "state": "uttar-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "03-08-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/14dPx180pRCTZKU6B1Gi9xkJ8kuD0EmG6/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/14dPx180pRCTZKU6B1Gi9xkJ8kuD0EmG6/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/14dPx180pRCTZKU6B1Gi9xkJ8kuD0EmG6/view?usp=sharing"
    }
  },
  {
    "id": "uppsc-technical-education-teaching",
    "title": "UPPSC Technical Education Teaching Service Exam 2025 Apply Online for 513 Vacancies | Last Date 02.01.2026",
    "org": "UPPSC Technical Education Teaching Service Exam 2025 Apply Online for 513 Vacancies | Last Date 02.01.2026",
    "shortOrg": "UPPSC Technical Education Teac",
    "posts": "Uttar Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttar Pradesh State Government Recruitment",
    "state": "uttar-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1jmUCnbhoJiWVs38BR9NtaNFiepBRXtjn/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1jmUCnbhoJiWVs38BR9NtaNFiepBRXtjn/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1jmUCnbhoJiWVs38BR9NtaNFiepBRXtjn/view?usp=sharing"
    }
  },
  {
    "id": "uppsc-group-b-recruitment-2025-apply",
    "title": "UPPSC Group A & B Recruitment 2025 – Apply Online for 12 Vacancies",
    "org": "UPPSC Group A & B",
    "shortOrg": "UPPSC Group A & B",
    "posts": "Uttar Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttar Pradesh State Government Recruitment",
    "state": "uttar-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1NraPLZTH8QNZZGxGVCSI16-QKL8O1NyA/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1NraPLZTH8QNZZGxGVCSI16-QKL8O1NyA/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1NraPLZTH8QNZZGxGVCSI16-QKL8O1NyA/view?usp=sharing"
    }
  },
  {
    "id": "uppsc-assistant-town-planner-vacancy",
    "title": "UPPSC Assistant Town Planner Vacancy 2025 Apply Online 08 Posts | Last Date 03 December",
    "org": "UPPSC Assistant Town Planner",
    "shortOrg": "UPPSC Assistant Town Planner",
    "posts": "Uttar Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttar Pradesh State Government Recruitment",
    "state": "uttar-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1sNV_4kkv2i1k0zrwk0AvHNZRPKF_xdBo/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1sNV_4kkv2i1k0zrwk0AvHNZRPKF_xdBo/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1sNV_4kkv2i1k0zrwk0AvHNZRPKF_xdBo/view?usp=sharing"
    }
  },
  {
    "id": "uppsc-research-assistant-engineering",
    "title": "UPPSC Research Assistant Engineering Recruitment 2025 Apply Online & Notification | Last Date 03 December",
    "org": "UPPSC Research Assistant Engineering",
    "shortOrg": "UPPSC Research Assistant Engin",
    "posts": "Uttar Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttar Pradesh State Government Recruitment",
    "state": "uttar-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/18VHp3BtGha-lHzBUMXuCQz9kBV_dqMst/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/18VHp3BtGha-lHzBUMXuCQz9kBV_dqMst/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/18VHp3BtGha-lHzBUMXuCQz9kBV_dqMst/view?usp=sharing"
    }
  },
  {
    "id": "uppsc-recruitment",
    "title": "UPPSC Recruitment 2025 Apply Online for 182 Assistant Prosecution Officer Posts | Last Date 16th October",
    "org": "UPPSC",
    "shortOrg": "UPPSC",
    "posts": "Assistant Prosecution Officer",
    "vacancies": 182,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttar Pradesh State Government Recruitment",
    "state": "uttar-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEght29s8ceao4MZD-IpJYec200qqP32Na0ekEY9kTusouulHNJ_4rw4cEFFOnB8QIb__9nx6rNJE-widm9Z0wDorrnU4ERqUwES03WvXuMFS-Y5Jn2eOYgYW1e2oyfzOJuIGWJWCGiJwql9uoVhYhHUSOhl1164HE3XtE9vN-TCdQIs6Cxyc13hBFYcHm0/s480/UPPSC%20Vacancy.png",
      "notificationUrl": "https://drive.google.com/file/d/19PrzU1YombONg_2G57rxvznPpA3YTlnG/view?usp=sharing",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEght29s8ceao4MZD-IpJYec200qqP32Na0ekEY9kTusouulHNJ_4rw4cEFFOnB8QIb__9nx6rNJE-widm9Z0wDorrnU4ERqUwES03WvXuMFS-Y5Jn2eOYgYW1e2oyfzOJuIGWJWCGiJwql9uoVhYhHUSOhl1164HE3XtE9vN-TCdQIs6Cxyc13hBFYcHm0/s480/UPPSC%20Vacancy.png"
    }
  },
  {
    "id": "uppsc-lecturer-recruitment",
    "title": "UPPSC Lecturer Recruitment 2025 - 1471 Posts, Notification, Online Form",
    "org": "UPPSC Lecturer",
    "shortOrg": "UPPSC Lecturer",
    "posts": "Uttar Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttar Pradesh State Government Recruitment",
    "state": "uttar-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1K4eBc5-G5Xrm2InuCGnrfLuTHsYcLwu-/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1K4eBc5-G5Xrm2InuCGnrfLuTHsYcLwu-/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1K4eBc5-G5Xrm2InuCGnrfLuTHsYcLwu-/view?usp=sharing"
    }
  },
  {
    "id": "hppsc-police-constable-recruitment",
    "title": "HPPSC Police Constable Recruitment 2026 – Apply Online for 734 Posts | Last Date 21-08-2026",
    "org": "HPPSC Police Constable",
    "shortOrg": "HPPSC Police Constable",
    "posts": "Uttar Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttar Pradesh State Government Recruitment",
    "state": "uttar-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "21-08-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://hppsc.hp.gov.in/CommonControls/ViewCMSFile?qs=KI3gZ53zz1wSGo29lXLTBfw1DHezN8KfEg%2BrikZhi%2FLLqiZME0%2BQReThfPJPy%2BjgrmLJ%2B48MSfenisMCQ3fHXMZ0%2BajrVuV3AylOo9mGWYM%3D",
      "notificationUrl": "https://rozgardwaar.com/2026/07/hppsc-police-constable-recruitment.html",
      "websiteUrl": "https://hppsc.hp.gov.in/CommonControls/ViewCMSFile?qs=KI3gZ53zz1wSGo29lXLTBfw1DHezN8KfEg%2BrikZhi%2FLLqiZME0%2BQReThfPJPy%2BjgrmLJ%2B48MSfenisMCQ3fHXMZ0%2BajrVuV3AylOo9mGWYM%3D"
    }
  },
  {
    "id": "telangana-police-recruitment",
    "title": "Telangana Police Recruitment 2026 – Notification for 325 SI, Constable, ASI & Fire Officer Posts | Apply Online up to 09-09-2026",
    "org": "Telangana Police",
    "shortOrg": "Telangana Police",
    "posts": "SI, Constable, ASI & Fire Officer",
    "vacancies": 325,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttar Pradesh State Government Recruitment",
    "state": "uttar-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://www.tgprb.in/SI_PC_2026/SI%20(Civil%20et%20al)%202026%20Notification%20dated%2029-07-2026.pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "bpssc-company-commander-recruitment",
    "title": "BPSSC Company Commander Recruitment 2026 - Apply Online for 65 Posts | Last Date 30-07-2026",
    "org": "BPSSC Company Commander",
    "shortOrg": "BPSSC Company Commander",
    "posts": "Uttar Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttar Pradesh State Government Recruitment",
    "state": "uttar-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "30-07-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://bpssc.bihar.gov.in/Notices/Advt.%20No.%2008-2026%20Company%20Commander%20DR.pdf",
      "notificationUrl": "https://bpssc.bihar.gov.in/Notices/Advt.%20No.%2008-2026%20Company%20Commander%20DR.pdf",
      "websiteUrl": "https://bpssc.bihar.gov.in/Notices/Advt.%20No.%2008-2026%20Company%20Commander%20DR.pdf"
    }
  },
  {
    "id": "up-police-81000-recruitment",
    "title": "UPPRPB UP Police 81000 Recruitment 2026 – Constable, SI & Other Posts | Latest Update",
    "org": "UPPRPB UP Police 81000",
    "shortOrg": "UPPRPB UP Police 81000",
    "posts": "Uttar Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttar Pradesh State Government Recruitment",
    "state": "uttar-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1PRSr6p1l4f8SZAm_ECSPvEgRNuH67PLq/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1PRSr6p1l4f8SZAm_ECSPvEgRNuH67PLq/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1PRSr6p1l4f8SZAm_ECSPvEgRNuH67PLq/view?usp=sharing"
    }
  },
  {
    "id": "aiims-deoghar-non-faculty-recruitment",
    "title": "AIIMS Deoghar Non Faculty Recruitment 2026 – Apply for 11 Posts | Last Date 20-07-2026",
    "org": "AIIMS Deoghar Non Faculty",
    "shortOrg": "AIIMS Deoghar Non Faculty",
    "posts": "Uttar Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttar Pradesh State Government Recruitment",
    "state": "uttar-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "20-07-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.aiimsdeoghar.edu.in/Content/resources/document/Recruitment/non_faculty_contractual_engagement_20052026035000492.pdf",
      "notificationUrl": "https://www.aiimsdeoghar.edu.in/Content/resources/document/Recruitment/non_faculty_contractual_engagement_20052026035000492.pdf",
      "websiteUrl": "https://www.aiimsdeoghar.edu.in/Content/resources/document/Recruitment/non_faculty_contractual_engagement_20052026035000492.pdf"
    }
  },
  {
    "id": "bpsc-72nd-notification",
    "title": "BPSC 72nd Notification 2026 - Apply Online for 1230 CCE Posts | Last Date 31-05-2026",
    "org": "BPSC 72nd",
    "shortOrg": "BPSC 72nd",
    "posts": "CCE",
    "vacancies": 1230,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Bihar State Government Recruitment",
    "state": "bihar",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "31-05-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Advertisement-Integrated-72th-CCE-PT_BPSC-20260505-p1euvo.pdf",
      "notificationUrl": "https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Advertisement-Integrated-72th-CCE-PT_BPSC-20260505-p1euvo.pdf",
      "websiteUrl": "https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Advertisement-Integrated-72th-CCE-PT_BPSC-20260505-p1euvo.pdf"
    }
  },
  {
    "id": "bihar-govt-jobs",
    "title": "Bihar Govt Jobs 2026 - Latest Notifications List",
    "org": "Bihar Govt Jobs 2026 - Latest",
    "shortOrg": "Bihar Govt Jobs 2026 - Latest",
    "posts": "Bihar State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Bihar State Government Recruitment",
    "state": "bihar",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2023/07/Bihar-Govt-Jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2023/07/Bihar-Govt-Jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2023/07/Bihar-Govt-Jobs.html"
    }
  },
  {
    "id": "bssc-inter-level-notification",
    "title": "BSSC Inter Level Notification 2026: Apply Online 25311 Posts, Last Date 16.02.2026",
    "org": "BSSC Inter Level",
    "shortOrg": "BSSC Inter Level",
    "posts": "Bihar State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Bihar State Government Recruitment",
    "state": "bihar",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1W7Lm-fjQCSSNWygwsDGYvdMs6msyNBla/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1W7Lm-fjQCSSNWygwsDGYvdMs6msyNBla/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1W7Lm-fjQCSSNWygwsDGYvdMs6msyNBla/view?usp=sharing"
    }
  },
  {
    "id": "bssc-sports-trainer-recruitment",
    "title": "BSSC Sports Trainer Recruitment 2025 Apply Online for 379 Posts | Last Date Extended 11 December",
    "org": "BSSC Sports Trainer",
    "shortOrg": "BSSC Sports Trainer",
    "posts": "Bihar State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Bihar State Government Recruitment",
    "state": "bihar",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.onlinebssc.com/sportsbsc25/awscdn/notice/08_25_advt.pdf",
      "notificationUrl": "https://www.onlinebssc.com/sportsbsc25/awscdn/notice/08_25_advt.pdf",
      "websiteUrl": "https://www.onlinebssc.com/sportsbsc25/awscdn/notice/08_25_advt.pdf"
    }
  },
  {
    "id": "bssc-office-attendant-recruitment-2025",
    "title": "BSSC Office Attendant Recruitment 2025 Apply Online 3727 Posts, Salary up to ₹ 56900 | Last Date 21 November",
    "org": "BSSC Office Attendant",
    "shortOrg": "BSSC Office Attendant",
    "posts": "Bihar State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Bihar State Government Recruitment",
    "state": "bihar",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/16Y5lRAZKr3e4ssUZmUzpsPCOYDSzM4sy/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/16Y5lRAZKr3e4ssUZmUzpsPCOYDSzM4sy/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/16Y5lRAZKr3e4ssUZmUzpsPCOYDSzM4sy/view?usp=sharing"
    }
  },
  {
    "id": "bssc-4th-graduate-level-recruitment",
    "title": "BSSC 4th Graduate Level Recruitment 2025 Apply Online 1481 Posts | Last Date 21 November",
    "org": "BSSC 4th Graduate Level",
    "shortOrg": "BSSC 4th Graduate Level",
    "posts": "Bihar State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Bihar State Government Recruitment",
    "state": "bihar",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1wbZbpgjZeanS3La7hGyW2hIaoJ3c98mt/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1wbZbpgjZeanS3La7hGyW2hIaoJ3c98mt/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1wbZbpgjZeanS3La7hGyW2hIaoJ3c98mt/view?usp=sharing"
    }
  },
  {
    "id": "bssc-recruitment",
    "title": "BSSC Recruitment 2025 Apply Online 432 Stenographer Posts | Last Date 03 November",
    "org": "BSSC",
    "shortOrg": "BSSC",
    "posts": "Bihar State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Bihar State Government Recruitment",
    "state": "bihar",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://bssc.bihar.gov.in/Advertisement/07_25_ADVT.pdf",
      "notificationUrl": "https://bssc.bihar.gov.in/Advertisement/07_25_ADVT.pdf",
      "websiteUrl": "https://bssc.bihar.gov.in/Advertisement/07_25_ADVT.pdf"
    }
  },
  {
    "id": "bssc-lab-assistant-recruitment-2025",
    "title": "BSSC Lab Assistant Recruitment 2025 - 143 Posts, Notification, Online Form",
    "org": "BSSC Lab Assistant",
    "shortOrg": "BSSC Lab Assistant",
    "posts": "Bihar State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Bihar State Government Recruitment",
    "state": "bihar",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/15qndLtEhG1uZc9amKLUaXqmQmVNtyG94/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/15qndLtEhG1uZc9amKLUaXqmQmVNtyG94/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/15qndLtEhG1uZc9amKLUaXqmQmVNtyG94/view?usp=sharing"
    }
  },
  {
    "id": "bssc-field-assistant-recruitment-2025",
    "title": "BSSC Field Assistant Recruitment 2025 Online Form for 201 Agriculture Posts",
    "org": "BSSC Field Assistant",
    "shortOrg": "BSSC Field Assistant",
    "posts": "Agriculture",
    "vacancies": 201,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Bihar State Government Recruitment",
    "state": "bihar",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://bssc.bihar.gov.in/Advertisement/0325_advt.pdf",
      "notificationUrl": "https://bssc.bihar.gov.in/Advertisement/0325_advt.pdf",
      "websiteUrl": "https://bssc.bihar.gov.in/Advertisement/0325_advt.pdf"
    }
  },
  {
    "id": "bssc-welfare-organiser-and-ldc",
    "title": "BSSC Welfare Organiser and LDC Recruitment 2025 Online Form for 56 Posts",
    "org": "BSSC Welfare Organiser and LDC",
    "shortOrg": "BSSC Welfare Organiser and LDC",
    "posts": "Bihar State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Bihar State Government Recruitment",
    "state": "bihar",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://bssc.bihar.gov.in/Advertisement/0225_advt.pdf",
      "notificationUrl": "https://bssc.bihar.gov.in/Advertisement/0225_advt.pdf",
      "websiteUrl": "https://bssc.bihar.gov.in/Advertisement/0225_advt.pdf"
    }
  },
  {
    "id": "bssc-sub-statistical-officer",
    "title": "BSSC Sub Statistical Officer Recruitment 2025 Online Form for 682 Posts",
    "org": "BSSC Sub Statistical Officer",
    "shortOrg": "BSSC Sub Statistical Officer",
    "posts": "Bihar State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Bihar State Government Recruitment",
    "state": "bihar",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1sNXZ4osrcv-QJ88F_XzwVsM2vH2SzbWF/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1sNXZ4osrcv-QJ88F_XzwVsM2vH2SzbWF/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1sNXZ4osrcv-QJ88F_XzwVsM2vH2SzbWF/view?usp=sharing"
    }
  },
  {
    "id": "bpssc-range-officer-recruitment",
    "title": "BPSSC Range Officer Recruitment 2026 – Apply Online for 16 Posts | Last Date 16-08-2026",
    "org": "BPSSC Range Officer",
    "shortOrg": "BPSSC Range Officer",
    "posts": "Bihar State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Bihar State Government Recruitment",
    "state": "bihar",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "16-08-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1gG84_Bfy7sDgJJMJ4m182nVtHtrsH7wA/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1gG84_Bfy7sDgJJMJ4m182nVtHtrsH7wA/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1gG84_Bfy7sDgJJMJ4m182nVtHtrsH7wA/view?usp=sharing"
    }
  },
  {
    "id": "sarkari-naukri-in-rajasthan",
    "title": "Rajasthan Government Jobs 2026 – Latest Free Sarkari Naukri Alert",
    "org": "Rajasthan Government Jobs 2026 – Latest Free Sarkari Naukri Alert",
    "shortOrg": "Rajasthan Government Jobs 2026",
    "posts": "Rajasthan State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Rajasthan State Government Recruitment",
    "state": "rajasthan",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2013/09/sarkari-naukri-in-rajasthan.html",
      "notificationUrl": "https://rozgardwaar.com/2013/09/sarkari-naukri-in-rajasthan.html",
      "websiteUrl": "https://rozgardwaar.com/2013/09/sarkari-naukri-in-rajasthan.html"
    }
  },
  {
    "id": "rssb-10644-clerk-junior-assistant",
    "title": "RSSB 10644 Clerk & Junior Assistant Recruitment 2026 – Notification, Online Form",
    "org": "RSSB 10644 Clerk & Junior Assistant",
    "shortOrg": "RSSB 10644 Clerk & Junior Assi",
    "posts": "Rajasthan State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Rajasthan State Government Recruitment",
    "state": "rajasthan",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/19uNi8F3dNLobKf0I--JotelXD_mcrqz4/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/19uNi8F3dNLobKf0I--JotelXD_mcrqz4/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/19uNi8F3dNLobKf0I--JotelXD_mcrqz4/view?usp=sharing"
    }
  },
  {
    "id": "rssb-agriculture-supervisor-recruitment",
    "title": "RSSB Agriculture Supervisor Recruitment 2026 – Apply Online for 1100 Vacancies",
    "org": "RSSB Agriculture Supervisor",
    "shortOrg": "RSSB Agriculture Supervisor",
    "posts": "Rajasthan State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Rajasthan State Government Recruitment",
    "state": "rajasthan",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1oqmp4zrgqCFzaYBZ25uxjdWfT_b81q1m/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1oqmp4zrgqCFzaYBZ25uxjdWfT_b81q1m/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1oqmp4zrgqCFzaYBZ25uxjdWfT_b81q1m/view?usp=sharing"
    }
  },
  {
    "id": "rssb-female-supervisor-recruitment-2026",
    "title": "RSSB Female Supervisor Recruitment 2026 Apply Online for 72 Posts | Last Date 05.02.2026",
    "org": "RSSB Female Supervisor",
    "shortOrg": "RSSB Female Supervisor",
    "posts": "Rajasthan State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Rajasthan State Government Recruitment",
    "state": "rajasthan",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1B5il9MgDyrGlVLMEsBpR2aFi5QGGGVtZ/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1B5il9MgDyrGlVLMEsBpR2aFi5QGGGVtZ/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1B5il9MgDyrGlVLMEsBpR2aFi5QGGGVtZ/view?usp=sharing"
    }
  },
  {
    "id": "rssb-forester-recruitment-2026-apply",
    "title": "RSSB Forester Recruitment 2026 Apply Online for 259 Vacancies | Last Date 04.02.2026",
    "org": "RSSB Forester",
    "shortOrg": "RSSB Forester",
    "posts": "Rajasthan State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Rajasthan State Government Recruitment",
    "state": "rajasthan",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1Ex1-wjd5plzK7h3ARsNKMaUs2cexiwad/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1Ex1-wjd5plzK7h3ARsNKMaUs2cexiwad/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1Ex1-wjd5plzK7h3ARsNKMaUs2cexiwad/view?usp=sharing"
    }
  },
  {
    "id": "rsmssb-recruitment",
    "title": "RSMSSB Recruitment 2025 - Latest RSSB Job Notifications List",
    "org": "RSMSSB",
    "shortOrg": "RSMSSB",
    "posts": "Rajasthan State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Rajasthan State Government Recruitment",
    "state": "rajasthan",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1gMYJfjDim0xRsJZ2rBgXLkrBFzol1FpK/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1gMYJfjDim0xRsJZ2rBgXLkrBFzol1FpK/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1gMYJfjDim0xRsJZ2rBgXLkrBFzol1FpK/view?usp=sharing"
    }
  },
  {
    "id": "rajasthan-patwari-vacancy",
    "title": "Rajasthan Patwari Vacancy 2025 - Apply Online for 3705 Posts",
    "org": "Rajasthan Patwari",
    "shortOrg": "Rajasthan Patwari",
    "posts": "Rajasthan State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Rajasthan State Government Recruitment",
    "state": "rajasthan",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1ZYG55qtREFmNsDEDRaHKWllb7h94l6cM/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1ZYG55qtREFmNsDEDRaHKWllb7h94l6cM/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1ZYG55qtREFmNsDEDRaHKWllb7h94l6cM/view?usp=sharing"
    }
  },
  {
    "id": "rssb-rajasthan-recruitment",
    "title": "RSSB NHM Recruitment 2025 - Online Form for 13398 Nurse, Assistant & Other Posts",
    "org": "RSSB NHM",
    "shortOrg": "RSSB NHM",
    "posts": "Nurse, Assistant & Other",
    "vacancies": 13398,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Rajasthan State Government Recruitment",
    "state": "rajasthan",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1mNeejsupXoGzZkzXT27vYAu7o4J6EWdb/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1mNeejsupXoGzZkzXT27vYAu7o4J6EWdb/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1mNeejsupXoGzZkzXT27vYAu7o4J6EWdb/view?usp=sharing"
    }
  },
  {
    "id": "rsmssb-conductor-recruitment",
    "title": "RSMSSB Conductor Recruitment 2025 Apply Online for 500 Posts",
    "org": "RSMSSB Conductor",
    "shortOrg": "RSMSSB Conductor",
    "posts": "Rajasthan State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Rajasthan State Government Recruitment",
    "state": "rajasthan",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1dkEK0BJSB5iJG6CYzGGNH_L_zX_gV-db/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1dkEK0BJSB5iJG6CYzGGNH_L_zX_gV-db/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1dkEK0BJSB5iJG6CYzGGNH_L_zX_gV-db/view?usp=sharing"
    }
  },
  {
    "id": "rsmssb-class-iv-recruitment",
    "title": "RSMSSB Class 4 Recruitment 2025 Online Form for 53749 Posts",
    "org": "RSMSSB Class 4",
    "shortOrg": "RSMSSB Class 4",
    "posts": "Rajasthan State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Rajasthan State Government Recruitment",
    "state": "rajasthan",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1dMRW_DqwSUSYwm8yqok5iwPyHPQCeH2N/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1dMRW_DqwSUSYwm8yqok5iwPyHPQCeH2N/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1dMRW_DqwSUSYwm8yqok5iwPyHPQCeH2N/view?usp=sharing"
    }
  },
  {
    "id": "mts-jobs",
    "title": "Latest MTS Govt Jobs 2026 (20000+ Vacancies Open Now)",
    "org": "Latest MTS Govt Jobs 2026 (20000+ Vacancies Open Now)",
    "shortOrg": "Latest MTS Govt Jobs 2026 (200",
    "posts": "Rajasthan State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Rajasthan State Government Recruitment",
    "state": "rajasthan",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.facebook.com/IndGovtJobs/",
      "notificationUrl": "https://rozgardwaar.com/2019/10/MTS-Jobs.html",
      "websiteUrl": "https://www.facebook.com/IndGovtJobs/"
    }
  },
  {
    "id": "assistant-govt-jobs",
    "title": "Latest Assistant Govt Jobs 2026 (60222+ Vacancies Open Now)",
    "org": "Latest Assistant Govt Jobs 2026 (60222+ Vacancies Open Now)",
    "shortOrg": "Latest Assistant Govt Jobs 202",
    "posts": "Rajasthan State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Rajasthan State Government Recruitment",
    "state": "rajasthan",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2019/08/Assistant-Govt-Jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2019/08/Assistant-Govt-Jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2019/08/Assistant-Govt-Jobs.html"
    }
  },
  {
    "id": "dsssb-advt-no-03-2026",
    "title": "DSSSB Advertisement No 03/2026 - Apply Online for 1979 Posts | Last Date 15-07-2026",
    "org": "DSSSB Advertisement No 03/2026 - Apply Online for 1979 Posts | Last Date 15-07-2026",
    "shortOrg": "DSSSB Advertisement No 03/2026",
    "posts": "Delhi NCR State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Delhi NCR State Government Recruitment",
    "state": "delhi",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "15-07-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://dsssb.delhi.gov.in/sites/default/files/DSSSB/circulars-orders/final_advt-03-2026_1.pdf",
      "notificationUrl": "https://dsssb.delhi.gov.in/sites/default/files/DSSSB/circulars-orders/final_advt-03-2026_1.pdf",
      "websiteUrl": "https://dsssb.delhi.gov.in/sites/default/files/DSSSB/circulars-orders/final_advt-03-2026_1.pdf"
    }
  },
  {
    "id": "dsssb-advt-no-02-2026",
    "title": "DSSSB Advt No. 02/2026 Apply Online for 216 Various Group B & C Posts",
    "org": "DSSSB",
    "shortOrg": "DSSSB",
    "posts": "Various Group B & C",
    "vacancies": 216,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Delhi NCR State Government Recruitment",
    "state": "delhi",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1jUjgo4sLGvvebHWuZQVph0tUSqUAaWGe/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1jUjgo4sLGvvebHWuZQVph0tUSqUAaWGe/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1jUjgo4sLGvvebHWuZQVph0tUSqUAaWGe/view?usp=sharing"
    }
  },
  {
    "id": "dsssb-advt-01-2026",
    "title": "DSSSB Advt 01/2026: Apply Online for 911 Engineer, Officer & Legal Posts",
    "org": "DSSSB",
    "shortOrg": "DSSSB",
    "posts": "Engineer, Officer & Legal",
    "vacancies": 911,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Delhi NCR State Government Recruitment",
    "state": "delhi",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/19hDZNctch_CC7PGW6-0mcEhqTzsy5hwS/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/19hDZNctch_CC7PGW6-0mcEhqTzsy5hwS/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/19hDZNctch_CC7PGW6-0mcEhqTzsy5hwS/view?usp=sharing"
    }
  },
  {
    "id": "paramedical-jobs",
    "title": "Paramedical Jobs 2026 - Latest Pharmacist, Nurse, Lab Technician Jobs in Govt Sector",
    "org": "Paramedical Jobs 2026 - Latest Pharmacist, Nurse, Lab Technician Jobs in Govt Sector",
    "shortOrg": "Paramedical Jobs 2026 - Latest",
    "posts": "Delhi NCR State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Delhi NCR State Government Recruitment",
    "state": "delhi",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBJZS_7ptv4Ztxjfi53OeSj_8LJ-DYu0FFGtR0qZRYT8595D2cbBIjo3ErskZq91OCtNtPyDQMEbMzuAqJuLUBVInboCRe323o3kWqnn6VlE07HVHjCyLTBKyCbJm80SPDYMWFcrGiuWijH_ab97BFRN4jqhWg9MBeDsEK_PDN38FVe1xAJgYOw9RWKKY/s434/Para%20Medical%20Govt%20Jobs.PNG",
      "notificationUrl": "https://rozgardwaar.com/2024/06/Paramedical-Jobs.html",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBJZS_7ptv4Ztxjfi53OeSj_8LJ-DYu0FFGtR0qZRYT8595D2cbBIjo3ErskZq91OCtNtPyDQMEbMzuAqJuLUBVInboCRe323o3kWqnn6VlE07HVHjCyLTBKyCbJm80SPDYMWFcrGiuWijH_ab97BFRN4jqhWg9MBeDsEK_PDN38FVe1xAJgYOw9RWKKY/s434/Para%20Medical%20Govt%20Jobs.PNG"
    }
  },
  {
    "id": "dsssb-exam-calendar",
    "title": "DSSSB Exam Calendar February to May 2026 PDF Download",
    "org": "DSSSB Exam Calendar February to May 2026 PDF Download",
    "shortOrg": "DSSSB Exam Calendar February t",
    "posts": "Delhi NCR State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Delhi NCR State Government Recruitment",
    "state": "delhi",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTmmpxCRGvOaA7EnOcoNoTf8wF7NjNlDUhR4Tlls46i6ipgnvz7zbrtGfbdWG4Gbt4pACS3RFcpF0mOFY0zMB3XlHVNVfWNpaODpwiyJC5zW5Y0RbEZfL2vQIy1U4lUH2zKn5cMP2iSeDCh-V4AFfqg3vlihlE3qTgzM5aYKfoaafkPa-Et1CWHeS0dE0m/s1024/dsssb-exam-2026.png",
      "notificationUrl": "https://dsssb.delhi.gov.in/sites/default/files/DSSSB/circulars-orders/notification_for_during_feb_to_may_2026_1.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTmmpxCRGvOaA7EnOcoNoTf8wF7NjNlDUhR4Tlls46i6ipgnvz7zbrtGfbdWG4Gbt4pACS3RFcpF0mOFY0zMB3XlHVNVfWNpaODpwiyJC5zW5Y0RbEZfL2vQIy1U4lUH2zKn5cMP2iSeDCh-V4AFfqg3vlihlE3qTgzM5aYKfoaafkPa-Et1CWHeS0dE0m/s1024/dsssb-exam-2026.png"
    }
  },
  {
    "id": "dsssb-mts-recruitment",
    "title": "DSSSB MTS Recruitment 2026 Apply Online for 714 Vacancies | Last Date 15.01.2026",
    "org": "DSSSB MTS",
    "shortOrg": "DSSSB MTS",
    "posts": "Delhi NCR State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Delhi NCR State Government Recruitment",
    "state": "delhi",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1zApArnJrdl24zLu_6ldo2xVtbjV9aWoU/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1zApArnJrdl24zLu_6ldo2xVtbjV9aWoU/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1zApArnJrdl24zLu_6ldo2xVtbjV9aWoU/view?usp=sharing"
    }
  },
  {
    "id": "dsssb-advt-no-06-2025",
    "title": "DSSSB Advt No. 06/2025 Apply Online for 5346 TGT, Special Teacher Posts | Last Date 07 November",
    "org": "DSSSB",
    "shortOrg": "DSSSB",
    "posts": "TGT, Special Teacher",
    "vacancies": 5346,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Delhi NCR State Government Recruitment",
    "state": "delhi",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1oTt9k0ZK-DsmZ17p78JayGZIsDcBUrw3/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1oTt9k0ZK-DsmZ17p78JayGZIsDcBUrw3/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1oTt9k0ZK-DsmZ17p78JayGZIsDcBUrw3/view?usp=sharing"
    }
  },
  {
    "id": "dsssb-teacher-recruitment",
    "title": "DSSSB Teacher Recruitment 2025 Apply Online 1180 Posts | Last Date 16 October",
    "org": "DSSSB Teacher",
    "shortOrg": "DSSSB Teacher",
    "posts": "Delhi NCR State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Delhi NCR State Government Recruitment",
    "state": "delhi",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://dsssb.delhi.gov.in/sites/default/files/DSSSB/circulars-orders/final_advt_no_05-2025_asstt_teacher_primary_1.pdf",
      "notificationUrl": "https://dsssb.delhi.gov.in/sites/default/files/DSSSB/circulars-orders/final_advt_no_05-2025_asstt_teacher_primary_1.pdf",
      "websiteUrl": "https://dsssb.delhi.gov.in/sites/default/files/DSSSB/circulars-orders/final_advt_no_05-2025_asstt_teacher_primary_1.pdf"
    }
  },
  {
    "id": "metro-rail-recruitment",
    "title": "Metro Rail Jobs 2026 - Latest Recruitment Notifications List",
    "org": "Metro Rail Jobs 2026 - Latest",
    "shortOrg": "Metro Rail Jobs 2026 - Latest",
    "posts": "Delhi NCR State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Delhi NCR State Government Recruitment",
    "state": "delhi",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2020/04/Metro-Rail-Recruitment.html",
      "notificationUrl": "https://rozgardwaar.com/2020/04/Metro-Rail-Recruitment.html",
      "websiteUrl": "https://rozgardwaar.com/2020/04/Metro-Rail-Recruitment.html"
    }
  },
  {
    "id": "ssc-delhi-police-constable",
    "title": "SSC Delhi Police Constable Executive Vacancy 2025 Apply Online for 7565 Posts | Last Date 31st October",
    "org": "SSC Delhi Police Constable Executive",
    "shortOrg": "SSC Delhi Police Constable Exe",
    "posts": "Delhi NCR State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Delhi NCR State Government Recruitment",
    "state": "delhi",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1zj3a_FPjAvhURZsNwdBcsOE25ua0R4gz/view?usp=sharing",
      "notificationUrl": "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Extension_Notice_CTDP_2025_21.10.2025.pdf",
      "websiteUrl": "https://drive.google.com/file/d/1zj3a_FPjAvhURZsNwdBcsOE25ua0R4gz/view?usp=sharing"
    }
  },
  {
    "id": "delhi-high-court-jja-recruitment",
    "title": "Delhi High Court JJA Recruitment 2026: 152 Posts, Notification, Online Form",
    "org": "Delhi High Court JJA",
    "shortOrg": "Delhi High Court JJA",
    "posts": "Delhi NCR State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Delhi NCR State Government Recruitment",
    "state": "delhi",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1kFvzE3mEeF2bNgO90Z7r9YCnSg3Sg4Mq/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1kFvzE3mEeF2bNgO90Z7r9YCnSg3Sg4Mq/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1kFvzE3mEeF2bNgO90Z7r9YCnSg3Sg4Mq/view?usp=sharing"
    }
  },
  {
    "id": "dmrc-executive-finance-recruitment",
    "title": "DMRC Executive Finance Recruitment 2026: Notification, Application Form | Last Date 10-08-2026",
    "org": "DMRC Executive Finance",
    "shortOrg": "DMRC Executive Finance",
    "posts": "Delhi NCR State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Delhi NCR State Government Recruitment",
    "state": "delhi",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "10-08-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.becil.com/uploads/topics/17842125673623.pdf",
      "notificationUrl": "https://www.becil.com/uploads/topics/17842125673623.pdf",
      "websiteUrl": "https://www.becil.com/uploads/topics/17842125673623.pdf"
    }
  },
  {
    "id": "mpesb-patwari-recruitment",
    "title": "MPESB Patwari Recruitment 2026: Apply Online for 200 Posts | Last Date 18-08-2026",
    "org": "MPESB Patwari",
    "shortOrg": "MPESB Patwari",
    "posts": "Madhya Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Madhya Pradesh State Government Recruitment",
    "state": "madhya-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "18-08-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1paZ33eSZ2S4ZykzOR6KTBfkC2ciPgDB0/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1paZ33eSZ2S4ZykzOR6KTBfkC2ciPgDB0/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1paZ33eSZ2S4ZykzOR6KTBfkC2ciPgDB0/view?usp=sharing"
    }
  },
  {
    "id": "mpesb-hospital-assistant-recruitment",
    "title": "MPESB Hospital Assistant Recruitment 2026 – Apply Online for 1200 Posts | Last Date 23 May 2026",
    "org": "MPESB Hospital Assistant",
    "shortOrg": "MPESB Hospital Assistant",
    "posts": "Madhya Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Madhya Pradesh State Government Recruitment",
    "state": "madhya-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/15sLTbexQEayestnuBGyp4lqQa5rJZO0b/view?usp=sharing",
      "notificationUrl": "https://esb.mp.gov.in/Advertisement/ADV_2026/Hostpital_asst._2026_FormDateChange_21052026.pdf",
      "websiteUrl": "https://drive.google.com/file/d/15sLTbexQEayestnuBGyp4lqQa5rJZO0b/view?usp=sharing"
    }
  },
  {
    "id": "mpesb-nursing-officer",
    "title": "MPESB Nursing Officer & Sister Tutor Posts 2026: Notification, Online Form, 2317 Posts | Last Date 20 April 2026",
    "org": "MPESB Nursing Officer & Sister Tutor Posts 2026",
    "shortOrg": "MPESB Nursing Officer & Sister",
    "posts": "Madhya Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Madhya Pradesh State Government Recruitment",
    "state": "madhya-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://esb.mp.gov.in/Rulebooks/RB_2026/Health_Nursing_2026RuleBook02_04_2026.pdf",
      "notificationUrl": "https://esb.mp.gov.in/Rulebooks/RB_2026/Health_Nursing_2026RuleBook02_04_2026.pdf",
      "websiteUrl": "https://esb.mp.gov.in/Rulebooks/RB_2026/Health_Nursing_2026RuleBook02_04_2026.pdf"
    }
  },
  {
    "id": "mpesb-asi-hc-computer-recruitment-2026",
    "title": "MPESB ASI HC Computer Recruitment 2026 (89 Posts) Online Form, Notification",
    "org": "MPESB ASI HC Computer",
    "shortOrg": "MPESB ASI HC Computer",
    "posts": "Madhya Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Madhya Pradesh State Government Recruitment",
    "state": "madhya-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/19MPDGm3Z105uvQ0pyRLBnFL2vmBAn6a4/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/19MPDGm3Z105uvQ0pyRLBnFL2vmBAn6a4/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/19MPDGm3Z105uvQ0pyRLBnFL2vmBAn6a4/view?usp=sharing"
    }
  },
  {
    "id": "mpesb-iti-training-officer-recruitment",
    "title": "MPESB ITI Training Officer Recruitment 2026 Online Form for 1120 Vacancies - Notification PDF",
    "org": "MPESB ITI Training Officer",
    "shortOrg": "MPESB ITI Training Officer",
    "posts": "Madhya Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Madhya Pradesh State Government Recruitment",
    "state": "madhya-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://esb.mp.gov.in/e_default.html",
      "notificationUrl": "https://drive.google.com/file/d/19mniuEFdv8qUgrPoUp85Dx9AXoDe3FQ0/view?usp=sharing",
      "websiteUrl": "https://esb.mp.gov.in/e_default.html"
    }
  },
  {
    "id": "mpesb-group-2-sub-group-3",
    "title": "MPESB Group 2 Sub Group 3 Vacancy 2025 Apply Online for 454 Posts | Last Date 12 November",
    "org": "MPESB Group 2 Sub Group 3",
    "shortOrg": "MPESB Group 2 Sub Group 3",
    "posts": "Madhya Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Madhya Pradesh State Government Recruitment",
    "state": "madhya-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1GY_keD_ZgWsd-gzzYRSMAwdQdfqFab0p/view?usp=sharing",
      "notificationUrl": "https://esb.mp.gov.in/Rulebooks/RB_2025/Group_2_Subgroup_3_2025_Rulebook_16102025.pdf",
      "websiteUrl": "https://drive.google.com/file/d/1GY_keD_ZgWsd-gzzYRSMAwdQdfqFab0p/view?usp=sharing"
    }
  },
  {
    "id": "mp-police-subedar-asi-recruitment-2025",
    "title": "MP Police Subedar & ASI Recruitment 2025 Apply Online for 500 Posts | Last Date 10 November",
    "org": "MP Police Subedar & ASI",
    "shortOrg": "MP Police Subedar & ASI",
    "posts": "Madhya Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Madhya Pradesh State Government Recruitment",
    "state": "madhya-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1Yp4KFzQs-daLYO4K_cE5M2kDn_cfcurO/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1Yp4KFzQs-daLYO4K_cE5M2kDn_cfcurO/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1Yp4KFzQs-daLYO4K_cE5M2kDn_cfcurO/view?usp=sharing"
    }
  },
  {
    "id": "mpesb-recruitment",
    "title": "MPESB Recruitment 2025 Apply Online for 500 ASI, Subedar Posts | Last Date 17th October",
    "org": "MPESB",
    "shortOrg": "MPESB",
    "posts": "ASI, Subedar",
    "vacancies": 500,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Madhya Pradesh State Government Recruitment",
    "state": "madhya-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://esb.mp.gov.in/Rulebooks/RB_2025/PRT_STENO_LDC_2025_Rulelbook.pdf",
      "notificationUrl": "https://esb.mp.gov.in/Rulebooks/RB_2025/PRT_STENO_LDC_2025_Rulelbook.pdf",
      "websiteUrl": "https://esb.mp.gov.in/Rulebooks/RB_2025/PRT_STENO_LDC_2025_Rulelbook.pdf"
    }
  },
  {
    "id": "mpesb-paramedical-recruitment-2025",
    "title": "MPESB Paramedical Recruitment 2025 – Apply Online for 752 Vacancies | Last Date 30.08.2025",
    "org": "MPESB Paramedical",
    "shortOrg": "MPESB Paramedical",
    "posts": "Madhya Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Madhya Pradesh State Government Recruitment",
    "state": "madhya-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://www.esb.mp.gov.in",
      "notificationUrl": "https://esb.mp.gov.in/Rulebooks/RB_2025/Paramedical_Pharmasist_2025_RuleBook.pdf",
      "websiteUrl": "http://www.esb.mp.gov.in"
    }
  },
  {
    "id": "madhya-pradesh-government-jobs",
    "title": "Madhya Pradesh Government Jobs 2026 – Latest MP Sarkari Naukri Alert",
    "org": "Madhya Pradesh Government Jobs 2026 – Latest MP Sarkari Naukri Alert",
    "shortOrg": "Madhya Pradesh Government Jobs",
    "posts": "Madhya Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Madhya Pradesh State Government Recruitment",
    "state": "madhya-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://mppsc.mp.gov.in/",
      "notificationUrl": "https://rozgardwaar.com/2013/10/madhya-pradesh-government-jobs.html",
      "websiteUrl": "https://mppsc.mp.gov.in/"
    }
  },
  {
    "id": "assistant-professor-recruitment",
    "title": "Assistant Professor Recruitment 2026 | Latest Govt College Faculty Job Vacancies",
    "org": "Assistant Professor",
    "shortOrg": "Assistant Professor",
    "posts": "Madhya Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Madhya Pradesh State Government Recruitment",
    "state": "madhya-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2023/10/Assistant-Professor-Recruitment.html",
      "notificationUrl": "https://rozgardwaar.com/2023/10/Assistant-Professor-Recruitment.html",
      "websiteUrl": "https://rozgardwaar.com/2023/10/Assistant-Professor-Recruitment.html"
    }
  },
  {
    "id": "mppsc-assistant-town-planner",
    "title": "MPPSC Assistant Town Planner Recruitment 2026 - Apply Online for 39 Posts",
    "org": "MPPSC Assistant Town Planner",
    "shortOrg": "MPPSC Assistant Town Planner",
    "posts": "Madhya Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Madhya Pradesh State Government Recruitment",
    "state": "madhya-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://mppsc.mp.gov.in/uploads/advertisement/Advt_Assistant_Town_Planner_Dated_02_02_2026.pdf",
      "notificationUrl": "https://mppsc.mp.gov.in/uploads/advertisement/Advt_Assistant_Town_Planner_Dated_02_02_2026.pdf",
      "websiteUrl": "https://mppsc.mp.gov.in/uploads/advertisement/Advt_Assistant_Town_Planner_Dated_02_02_2026.pdf"
    }
  },
  {
    "id": "mizoram-psc-udc-assistant-recruitment",
    "title": "Mizoram PSC UDC & Assistant Recruitment 2026 - Notification, Online Form, 65 Posts | Last Date 19-06-2026",
    "org": "Mizoram PSC UDC & Assistant",
    "shortOrg": "Mizoram PSC UDC & Assistant",
    "posts": "Maharashtra State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Maharashtra State Government Recruitment",
    "state": "maharashtra",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "19-06-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://mpsc.mizoram.gov.in/uploads/attachments/2026/05/028b7258bee327fbb3e29da0bcb0d87f/advertisement-no13-of-2026-27-assistant-udccombined.pdf",
      "notificationUrl": "https://mpsc.mizoram.gov.in/uploads/attachments/2026/05/028b7258bee327fbb3e29da0bcb0d87f/advertisement-no13-of-2026-27-assistant-udccombined.pdf",
      "websiteUrl": "https://mpsc.mizoram.gov.in/uploads/attachments/2026/05/028b7258bee327fbb3e29da0bcb0d87f/advertisement-no13-of-2026-27-assistant-udccombined.pdf"
    }
  },
  {
    "id": "mizoram-psc-nurse-recruitment-2026",
    "title": "Mizoram PSC Nurse Recruitment 2026 - Notification, Online Form for 42 Posts | Last Date 12-06-2026",
    "org": "Mizoram PSC Nurse",
    "shortOrg": "Mizoram PSC Nurse",
    "posts": "Maharashtra State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Maharashtra State Government Recruitment",
    "state": "maharashtra",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "12-06-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://mpsc.mizoram.gov.in/uploads/attachments/2026/05/194077fb3474dd1fb4383fa7e27ff5d4/advertisement-no12-of-2026-27-nursing-officer-staff-nurse.pdf",
      "notificationUrl": "https://mpsc.mizoram.gov.in/uploads/attachments/2026/05/194077fb3474dd1fb4383fa7e27ff5d4/advertisement-no12-of-2026-27-nursing-officer-staff-nurse.pdf",
      "websiteUrl": "https://mpsc.mizoram.gov.in/uploads/attachments/2026/05/194077fb3474dd1fb4383fa7e27ff5d4/advertisement-no12-of-2026-27-nursing-officer-staff-nurse.pdf"
    }
  },
  {
    "id": "meghalaya-psc-fishery-officer-and",
    "title": "Meghalaya PSC Fishery Officer and Junior Football Coach Recruitment 2026 – Apply Online for 13 Posts | Last Date 05-06-2026",
    "org": "Meghalaya PSC Fishery Officer and Junior Football Coach",
    "shortOrg": "Meghalaya PSC Fishery Officer ",
    "posts": "Maharashtra State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Maharashtra State Government Recruitment",
    "state": "maharashtra",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "05-06-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://www.mpsc.meghalaya.gov.in/advt/Advt25May2026.pdf",
      "notificationUrl": "http://www.mpsc.meghalaya.gov.in/advt/Advt25May2026.pdf",
      "websiteUrl": "http://www.mpsc.meghalaya.gov.in/advt/Advt25May2026.pdf"
    }
  },
  {
    "id": "mizoram-psc-junior-engineer-recruitment",
    "title": "Mizoram PSC Junior Engineer Recruitment 2026 - Apply for 08 Posts",
    "org": "Mizoram PSC Junior Engineer",
    "shortOrg": "Mizoram PSC Junior Engineer",
    "posts": "Maharashtra State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Maharashtra State Government Recruitment",
    "state": "maharashtra",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://mpsc.mizoram.gov.in/uploads/attachments/2026/05/a8fa7abad43f6459ec2db033506e5f69/advertisement-no8-of-2026-27-junior-engineercivil-under-power-electricity-deptt.pdf",
      "notificationUrl": "https://mpsc.mizoram.gov.in/uploads/attachments/2026/05/a8fa7abad43f6459ec2db033506e5f69/advertisement-no8-of-2026-27-junior-engineercivil-under-power-electricity-deptt.pdf",
      "websiteUrl": "https://mpsc.mizoram.gov.in/uploads/attachments/2026/05/a8fa7abad43f6459ec2db033506e5f69/advertisement-no8-of-2026-27-junior-engineercivil-under-power-electricity-deptt.pdf"
    }
  },
  {
    "id": "maharashtra-govt-recruitment-2014",
    "title": "Maharashtra Govt Jobs 2026 (1000+ Vacancies Open Now)",
    "org": "Maharashtra Govt Jobs 2026 (1000+ Vacancies Open Now)",
    "shortOrg": "Maharashtra Govt Jobs 2026 (10",
    "posts": "Maharashtra State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Maharashtra State Government Recruitment",
    "state": "maharashtra",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwJqLnrPoLKXKzFmBfyeC_TBuprllMhXTQq-AQlRxcbNN2hBZvmCcaV8ou0RCHOy-g5jc7yYhqrq3h2gvadv0hz_7fSalWmkh__WiACRieQ3h5MUh-YshQjpRsIc4IJH0fWooWdLLtOCjNTRh55jfW4Y0c8MUt1AgY7HMA2C9OGIDylX1IaHuSQ7wZC2_G/s1600/Maharashtra%20Govt%20Jobs.png",
      "notificationUrl": "https://rozgardwaar.com/2014/04/maharashtra-govt-recruitment-2014.html",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwJqLnrPoLKXKzFmBfyeC_TBuprllMhXTQq-AQlRxcbNN2hBZvmCcaV8ou0RCHOy-g5jc7yYhqrq3h2gvadv0hz_7fSalWmkh__WiACRieQ3h5MUh-YshQjpRsIc4IJH0fWooWdLLtOCjNTRh55jfW4Y0c8MUt1AgY7HMA2C9OGIDylX1IaHuSQ7wZC2_G/s1600/Maharashtra%20Govt%20Jobs.png"
    }
  },
  {
    "id": "manipur-psc-assistant-professor",
    "title": "Manipur PSC Assistant Professor Recruitment 2026 Apply Online for 419 Posts | Last Date 19.01.2026",
    "org": "Manipur PSC Assistant Professor",
    "shortOrg": "Manipur PSC Assistant Professo",
    "posts": "Maharashtra State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Maharashtra State Government Recruitment",
    "state": "maharashtra",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1ugPmPs6G0NHV_nbNcF1NdabfyEc7oDDv/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1ugPmPs6G0NHV_nbNcF1NdabfyEc7oDDv/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1ugPmPs6G0NHV_nbNcF1NdabfyEc7oDDv/view?usp=sharing"
    }
  },
  {
    "id": "mpsc-group-c-recruitment-2025-apply",
    "title": "MPSC Group C Recruitment 2025 Apply Online 938 Various Posts | Last Date 27th October",
    "org": "MPSC Group C",
    "shortOrg": "MPSC Group C",
    "posts": "Maharashtra State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Maharashtra State Government Recruitment",
    "state": "maharashtra",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1dVyZMYcsOv6vJ0tBNnCkHt4jflS4DWHt/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1dVyZMYcsOv6vJ0tBNnCkHt4jflS4DWHt/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1dVyZMYcsOv6vJ0tBNnCkHt4jflS4DWHt/view?usp=sharing"
    }
  },
  {
    "id": "mpsc-drug-inspector-recruitment-2025",
    "title": "MPSC Drug Inspector Recruitment 2025: Apply Online for 109 Posts",
    "org": "MPSC Drug Inspector",
    "shortOrg": "MPSC Drug Inspector",
    "posts": "Maharashtra State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Maharashtra State Government Recruitment",
    "state": "maharashtra",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1eTfS1m_P8hP-3jguIq4XlZN27rb_r1_o/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1eTfS1m_P8hP-3jguIq4XlZN27rb_r1_o/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1eTfS1m_P8hP-3jguIq4XlZN27rb_r1_o/view?usp=sharing"
    }
  },
  {
    "id": "aai-apprentice-recruitment",
    "title": "AAI Apprentice Recruitment 2026: Apply Online for 36 Posts | Last Date 30-09-2026",
    "org": "AAI Apprentice",
    "shortOrg": "AAI Apprentice",
    "posts": "Maharashtra State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Maharashtra State Government Recruitment",
    "state": "maharashtra",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "30-09-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1n-GTpdpEkEqRi-R3uR9u4RkODAEvXZMO/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1n-GTpdpEkEqRi-R3uR9u4RkODAEvXZMO/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1n-GTpdpEkEqRi-R3uR9u4RkODAEvXZMO/view?usp=sharing"
    }
  },
  {
    "id": "msc-bank-it-officer-recruitment-2026",
    "title": "MSC Bank IT Officer Recruitment 2026 – Apply Offline for 26 Posts | Last Date 08-07-2026",
    "org": "MSC Bank IT Officer",
    "shortOrg": "MSC Bank IT Officer",
    "posts": "Maharashtra State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Maharashtra State Government Recruitment",
    "state": "maharashtra",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "08-07-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1zIYUAO4UamgL9KwL7ClApgv-nBPjtEWd/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1zIYUAO4UamgL9KwL7ClApgv-nBPjtEWd/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1zIYUAO4UamgL9KwL7ClApgv-nBPjtEWd/view?usp=sharing"
    }
  },
  {
    "id": "railway-jobs-recruitment",
    "title": "Indian Railway Jobs 2026 | New Vacancy Updates",
    "org": "Indian Railway Jobs 2026 | New",
    "shortOrg": "Indian Railway Jobs 2026 | New",
    "posts": "Maharashtra State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Maharashtra State Government Recruitment",
    "state": "maharashtra",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2013/09/railway-jobs-recruitment.html",
      "notificationUrl": "https://rozgardwaar.com/2013/09/railway-jobs-recruitment.html",
      "websiteUrl": "https://rozgardwaar.com/2013/09/railway-jobs-recruitment.html"
    }
  },
  {
    "id": "maha-metro-manager-level-posts",
    "title": "MAHA Metro Manager Level Posts Recruitment 2026 – Apply Online for 05 Vacancies | Last Date 18-09-2026",
    "org": "MAHA Metro Manager Level Posts",
    "shortOrg": "MAHA Metro Manager Level Posts",
    "posts": "Maharashtra State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Maharashtra State Government Recruitment",
    "state": "maharashtra",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "18-09-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://mahametro.org/pdf/Advt.%20N_HR_06__2026..pdf",
      "notificationUrl": "https://mahametro.org/pdf/Advt.%20N_HR_06__2026..pdf",
      "websiteUrl": "https://mahametro.org/pdf/Advt.%20N_HR_06__2026..pdf"
    }
  },
  {
    "id": "haryana-job-vacancy",
    "title": "Haryana Govt Jobs 2026 - Latest Notifications List",
    "org": "Haryana Govt Jobs 2026 - Latest",
    "shortOrg": "Haryana Govt Jobs 2026 - Lates",
    "posts": "Haryana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Haryana State Government Recruitment",
    "state": "haryana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2023/09/Haryana-Job-Vacancy.html",
      "notificationUrl": "https://rozgardwaar.com/2023/09/Haryana-Job-Vacancy.html",
      "websiteUrl": "https://rozgardwaar.com/2023/09/Haryana-Job-Vacancy.html"
    }
  },
  {
    "id": "hsiidc-recruitment",
    "title": "HSIIDC Recruitment 2026 – Apply Online for 50 Manager, CS, Analyst Posts",
    "org": "HSIIDC",
    "shortOrg": "HSIIDC",
    "posts": "Manager, CS, Analyst",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Haryana State Government Recruitment",
    "state": "haryana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1RwItw8TWttQIVCieexev2Z5UBzdVd9SJ/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1RwItw8TWttQIVCieexev2Z5UBzdVd9SJ/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1RwItw8TWttQIVCieexev2Z5UBzdVd9SJ/view?usp=sharing"
    }
  },
  {
    "id": "haryana-psc-pgt-recruitment",
    "title": "Haryana PSC PGT Recruitment 2026 - Apply Online (1672 Computer Science Posts)",
    "org": "Haryana PSC PGT",
    "shortOrg": "Haryana PSC PGT",
    "posts": "Haryana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Haryana State Government Recruitment",
    "state": "haryana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://hpsc.gov.in/Portals/0/Advt_23_2026_PGT_CS_05_02_2026.pdf",
      "notificationUrl": "https://hpsc.gov.in/Portals/0/Advt_23_2026_PGT_CS_05_02_2026.pdf",
      "websiteUrl": "https://hpsc.gov.in/Portals/0/Advt_23_2026_PGT_CS_05_02_2026.pdf"
    }
  },
  {
    "id": "hpsc-veterinary-surgeon-recruitment",
    "title": "HPSC Veterinary Surgeon Recruitment 2026 Online Form for 162 Vacancies - Notification PDF",
    "org": "HPSC Veterinary Surgeon",
    "shortOrg": "HPSC Veterinary Surgeon",
    "posts": "Haryana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Haryana State Government Recruitment",
    "state": "haryana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://hpsc.gov.in/en-us/Instructions",
      "notificationUrl": "https://hpsc.gov.in/Portals/0/Advt_21_2026_Veterinary_Surgeon_14_01_2026.pdf",
      "websiteUrl": "https://hpsc.gov.in/en-us/Instructions"
    }
  },
  {
    "id": "hpsc-senior-scientific-officer",
    "title": "HPSC Senior Scientific Officer Recruitment 2026 – Apply Online for 17 Vacancies",
    "org": "HPSC Senior Scientific Officer",
    "shortOrg": "HPSC Senior Scientific Officer",
    "posts": "Haryana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Haryana State Government Recruitment",
    "state": "haryana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/17-h8cLzcD9A3CYyq7yqG1_QaLD67qatU/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/17-h8cLzcD9A3CYyq7yqG1_QaLD67qatU/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/17-h8cLzcD9A3CYyq7yqG1_QaLD67qatU/view?usp=sharing"
    }
  },
  {
    "id": "haryana-psc-assistant-engineer",
    "title": "Haryana PSC Assistant Engineer Recruitment 2026 - Apply Online for 50 Vacancies",
    "org": "Haryana PSC Assistant Engineer",
    "shortOrg": "Haryana PSC Assistant Engineer",
    "posts": "Haryana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Haryana State Government Recruitment",
    "state": "haryana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://hpsc.gov.in/Portals/0/Advt_04_2026_AE_Civil_08_01_2026.pdf",
      "notificationUrl": "https://hpsc.gov.in/Portals/0/Advt_04_2026_AE_Civil_08_01_2026.pdf",
      "websiteUrl": "https://hpsc.gov.in/Portals/0/Advt_04_2026_AE_Civil_08_01_2026.pdf"
    }
  },
  {
    "id": "haryana-psc-recruitment",
    "title": "Haryana PSC Recruitment 2025 Apply Online for 64 Officer Level Posts",
    "org": "Haryana PSC",
    "shortOrg": "Haryana PSC",
    "posts": "Officer Level",
    "vacancies": 64,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Haryana State Government Recruitment",
    "state": "haryana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://hpscadvt232023.onlineapplications.co.in/Advertisement_23_2023.pdf",
      "notificationUrl": "https://hpscadvt232023.onlineapplications.co.in/Advertisement_23_2023.pdf",
      "websiteUrl": "https://hpscadvt232023.onlineapplications.co.in/Advertisement_23_2023.pdf"
    }
  },
  {
    "id": "hpsc-assistant-professor-recruitment",
    "title": "HPSC Assistant Professor Recruitment 2024: Apply Online, 2424 Posts, Last Date Extended",
    "org": "HPSC Assistant Professor",
    "shortOrg": "HPSC Assistant Professor",
    "posts": "Haryana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Haryana State Government Recruitment",
    "state": "haryana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYQM5c-70SFKYfhyDMwKd5w-6cKAEGgxX6ASUc1Jsol_qhzrM92DW2dVxOeT6kND6Wqp5m3ZdYHP2WRNMwkVC1k39jHj582E4goKsKfv_R7Byl8hoUbCYWjfWnfASoqZAJ2impBZ2HOqc8PAvweSONPxkJuTxtn_Z_bHWPSYwWgHhj39gGrIv2yGbz7iKj/s450/HPSC%20Assistant%20Professor%202024.png",
      "notificationUrl": "https://drive.google.com/file/d/1-OqcDIle8-g2o2US9BJ16zirWkwjxd_j/view?usp=sharing",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYQM5c-70SFKYfhyDMwKd5w-6cKAEGgxX6ASUc1Jsol_qhzrM92DW2dVxOeT6kND6Wqp5m3ZdYHP2WRNMwkVC1k39jHj582E4goKsKfv_R7Byl8hoUbCYWjfWnfASoqZAJ2impBZ2HOqc8PAvweSONPxkJuTxtn_Z_bHWPSYwWgHhj39gGrIv2yGbz7iKj/s450/HPSC%20Assistant%20Professor%202024.png"
    }
  },
  {
    "id": "hpsc-teacher-recruitment",
    "title": "HPSC PGT Recruitment 2024: Apply Online for 3069 Vacancies",
    "org": "HPSC PGT",
    "shortOrg": "HPSC PGT",
    "posts": "Haryana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Haryana State Government Recruitment",
    "state": "haryana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://hpsc.gov.in/Portals/0/Advt_18_37_2024_23_07_2024.pdf",
      "notificationUrl": "https://hpsc.gov.in/Portals/0/Advt_18_37_2024_23_07_2024.pdf",
      "websiteUrl": "https://hpsc.gov.in/Portals/0/Advt_18_37_2024_23_07_2024.pdf"
    }
  },
  {
    "id": "drdo-tbrl-paid-internship-recruitment",
    "title": "DRDO TBRL Paid Internship Recruitment 2026 - 37 Posts, Notification, Application Form",
    "org": "DRDO TBRL Paid Internship",
    "shortOrg": "DRDO TBRL Paid Internship",
    "posts": "Haryana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Haryana State Government Recruitment",
    "state": "haryana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.drdo.gov.in/drdo/sites/default/files/vacancy/advtTBRL07052026.pdf",
      "notificationUrl": "https://www.drdo.gov.in/drdo/sites/default/files/vacancy/advtTBRL07052026.pdf",
      "websiteUrl": "https://www.drdo.gov.in/drdo/sites/default/files/vacancy/advtTBRL07052026.pdf"
    }
  },
  {
    "id": "power-grid-apprentice-recruitment",
    "title": "Power Grid Apprentice Recruitment 2026 - Apply Online for 188 Posts",
    "org": "Power Grid Apprentice",
    "shortOrg": "Power Grid Apprentice",
    "posts": "Haryana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Haryana State Government Recruitment",
    "state": "haryana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://nats.education.gov.in/",
      "notificationUrl": "https://www.powergrid.in/sites/default/files/apprentices_document/WR_I_Advt_02032026_1.pdf",
      "websiteUrl": "https://nats.education.gov.in/"
    }
  },
  {
    "id": "hpcl-graduate-apprentice-trainee",
    "title": "HPCL Graduate Apprentice Trainee Recruitment 2026-27 (608 Posts ) Online Form | Last Date 02.03.2026",
    "org": "HPCL Graduate Apprentice Trainee",
    "shortOrg": "HPCL Graduate Apprentice Train",
    "posts": "Haryana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Haryana State Government Recruitment",
    "state": "haryana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1ifR1LzbhmEkGJxnD0_NXUwZanjkYNTIt/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1ifR1LzbhmEkGJxnD0_NXUwZanjkYNTIt/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1ifR1LzbhmEkGJxnD0_NXUwZanjkYNTIt/view?usp=sharing"
    }
  },
  {
    "id": "psssb-craft-instructor-recruitment",
    "title": "PSSSB Craft Instructor Recruitment 2026 – Apply Online for 681 Posts | Last Date 25-08-2026",
    "org": "PSSSB Craft Instructor",
    "shortOrg": "PSSSB Craft Instructor",
    "posts": "Punjab State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Punjab State Government Recruitment",
    "state": "punjab",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "25-08-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1jVrQk4soLsvyJtxP9pZGBkDy_qPWWTgO/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1jVrQk4soLsvyJtxP9pZGBkDy_qPWWTgO/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1jVrQk4soLsvyJtxP9pZGBkDy_qPWWTgO/view?usp=sharing"
    }
  },
  {
    "id": "punjab-sssb-line-superintendent",
    "title": "Punjab SSSB Line Superintendent Recruitment 2026 – Apply Online for 06 Posts | Last Date 05-06-2026",
    "org": "Punjab SSSB Line Superintendent",
    "shortOrg": "Punjab SSSB Line Superintenden",
    "posts": "Punjab State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Punjab State Government Recruitment",
    "state": "punjab",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "05-06-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1f3g-pIBvhzm0g7rqF_2EWJpVeqYXWFv1/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1f3g-pIBvhzm0g7rqF_2EWJpVeqYXWFv1/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1f3g-pIBvhzm0g7rqF_2EWJpVeqYXWFv1/view?usp=sharing"
    }
  },
  {
    "id": "punjab-sssb-veterinary-inspector",
    "title": "Punjab SSSB Veterinary Inspector Recruitment 2026 - Apply Online for 150 Posts | Last Date 25 May 2026",
    "org": "Punjab SSSB Veterinary Inspector",
    "shortOrg": "Punjab SSSB Veterinary Inspect",
    "posts": "Punjab State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Punjab State Government Recruitment",
    "state": "punjab",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://sssb.punjab.gov.in/wp-content/uploads/2026/04/Advt.-No.-10-of-2026.pdf",
      "notificationUrl": "https://sssb.punjab.gov.in/wp-content/uploads/2026/04/Advt.-No.-10-of-2026.pdf",
      "websiteUrl": "https://sssb.punjab.gov.in/wp-content/uploads/2026/04/Advt.-No.-10-of-2026.pdf"
    }
  },
  {
    "id": "punjab-sssb-assistant-district-attorney",
    "title": "Punjab SSSB Assistant District Attorney Recruitment 2026 - Apply Online for 170 Posts",
    "org": "Punjab SSSB Assistant District Attorney",
    "shortOrg": "Punjab SSSB Assistant District",
    "posts": "Punjab State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Punjab State Government Recruitment",
    "state": "punjab",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1UY0_AaMsilJHnjJVxb_sUyw_YVCpmekX/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1UY0_AaMsilJHnjJVxb_sUyw_YVCpmekX/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1UY0_AaMsilJHnjJVxb_sUyw_YVCpmekX/view?usp=sharing"
    }
  },
  {
    "id": "psssb-warder-and-matron-recruitment",
    "title": "PSSSB Warder and Matron Recruitment 2026 Apply Online for 532 Posts | Last Date 21 April 2026",
    "org": "PSSSB Warder and Matron",
    "shortOrg": "PSSSB Warder and Matron",
    "posts": "Punjab State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Punjab State Government Recruitment",
    "state": "punjab",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://sssb.punjab.gov.in/wp-content/uploads/2026/04/Advertisement-No.08-of-2026.pdf",
      "notificationUrl": "https://sssb.punjab.gov.in/wp-content/uploads/2026/04/Advertisement-No.08-of-2026.pdf",
      "websiteUrl": "https://sssb.punjab.gov.in/wp-content/uploads/2026/04/Advertisement-No.08-of-2026.pdf"
    }
  },
  {
    "id": "psssb-excise-and-taxation-inspector",
    "title": "PSSSB Advt No 01/2026: Apply Online for 197 Excise and Taxation Inspector Posts",
    "org": "PSSSB",
    "shortOrg": "PSSSB",
    "posts": "Excise and Taxation Inspector",
    "vacancies": 197,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Punjab State Government Recruitment",
    "state": "punjab",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://sssb.punjab.gov.in/wp-content/uploads/2026/02/Advertisement-Excise-Inspector-13-2.pdf",
      "notificationUrl": "https://sssb.punjab.gov.in/wp-content/uploads/2026/02/Advertisement-Excise-Inspector-13-2.pdf",
      "websiteUrl": "https://sssb.punjab.gov.in/wp-content/uploads/2026/02/Advertisement-Excise-Inspector-13-2.pdf"
    }
  },
  {
    "id": "ppsc-punjab",
    "title": "PPSC Recruitment 2022 Apply Online | 56 Officer, Assistant Town Planner Vacancies",
    "org": "PPSC",
    "shortOrg": "PPSC",
    "posts": "Punjab State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Punjab State Government Recruitment",
    "state": "punjab",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEju3P5bww4TO5jPrnk-vuzT9aETKJqZTSKVg-ba8AAiBCR9Zd9JggWfIgno_o3UJ_fGwsyWulN-27sxna2PP140MyvFiiYlpMDrIyzo1TaeMk9KJAeAjinimB3LptGrYgks8Kv8s6jm9VI/s595/PPSC-Jobs.png",
      "notificationUrl": "https://drive.google.com/file/d/1xKUelqZobtxvP97pVwsPGPc5CFc--9rC/view?usp=sharing",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEju3P5bww4TO5jPrnk-vuzT9aETKJqZTSKVg-ba8AAiBCR9Zd9JggWfIgno_o3UJ_fGwsyWulN-27sxna2PP140MyvFiiYlpMDrIyzo1TaeMk9KJAeAjinimB3LptGrYgks8Kv8s6jm9VI/s595/PPSC-Jobs.png"
    }
  },
  {
    "id": "ppsc-civil-services-exam-2013-2014",
    "title": "Punjab State Civil Services Combined Competitive Exam 2021 Apply Online 75 Vacancies",
    "org": "Punjab State Civil Services Combined Competitive Exam 2021 Apply Online 75 Vacancies",
    "shortOrg": "Punjab State Civil Services Co",
    "posts": "Punjab State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Punjab State Government Recruitment",
    "state": "punjab",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/16K3cxqJYpcvq-5qGjKLEYHBuxNRFxrQl/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/16K3cxqJYpcvq-5qGjKLEYHBuxNRFxrQl/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/16K3cxqJYpcvq-5qGjKLEYHBuxNRFxrQl/view?usp=sharing"
    }
  },
  {
    "id": "ppsc-naib-tehsildar-recruitment",
    "title": "PPSC Naib Tehsildar Recruitment 2021 Apply Online | 78 Vacancies",
    "org": "PPSC Naib Tehsildar",
    "shortOrg": "PPSC Naib Tehsildar",
    "posts": "Punjab State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Punjab State Government Recruitment",
    "state": "punjab",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1D16Y_4hdMSf1Yk2wvhbi8HMtj6nLjEaV/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1D16Y_4hdMSf1Yk2wvhbi8HMtj6nLjEaV/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1D16Y_4hdMSf1Yk2wvhbi8HMtj6nLjEaV/view?usp=sharing"
    }
  },
  {
    "id": "ppsc-recruitment",
    "title": "PPSC Recruitment 2019 - Apply Online for 157 Sister Tutor, Judge Vacancies",
    "org": "PPSC",
    "shortOrg": "PPSC",
    "posts": "Sister Tutor, Judge",
    "vacancies": 157,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Punjab State Government Recruitment",
    "state": "punjab",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1sGm1dxDsphNY9YqfQrI4aRAb4TF9XKIT/",
      "notificationUrl": "https://drive.google.com/file/d/1sGm1dxDsphNY9YqfQrI4aRAb4TF9XKIT/",
      "websiteUrl": "https://drive.google.com/file/d/1sGm1dxDsphNY9YqfQrI4aRAb4TF9XKIT/"
    }
  },
  {
    "id": "ppsc-medical-officer-jobs-2015",
    "title": "PPSC Medical Officer Recruitment 2015 Apply Online (404 Vacancies)",
    "org": "PPSC Medical Officer",
    "shortOrg": "PPSC Medical Officer",
    "posts": "Punjab State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Punjab State Government Recruitment",
    "state": "punjab",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMb1v2HydmWU-hbQxz6c1vnPWsN-cuWUpBPsIIHScT3p57HBvrwWZqpAOZJgZgjbjSbyWa-55Jg0DohyphenhyphenuYLuGvqmiWazfvmNwqUmwyMQHMOFhSTUhsXOYcpYlObjey-QV8JTJIiud_G5Y/s1600-h/Punjab-Medical-Officer-2015%25255B3%25255D.png",
      "notificationUrl": "https://rozgardwaar.com/2015/03/ppsc-medical-officer-jobs-2015.html",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMb1v2HydmWU-hbQxz6c1vnPWsN-cuWUpBPsIIHScT3p57HBvrwWZqpAOZJgZgjbjSbyWa-55Jg0DohyphenhyphenuYLuGvqmiWazfvmNwqUmwyMQHMOFhSTUhsXOYcpYlObjey-QV8JTJIiud_G5Y/s1600-h/Punjab-Medical-Officer-2015%25255B3%25255D.png"
    }
  },
  {
    "id": "punjab-civil-judge-exam-2015",
    "title": "Punjab PPSC Civil Service Exam 2015 (118 Civil Judge Vacancies)",
    "org": "Punjab PPSC Civil Service Exam 2015 (118 Civil Judge Vacancies)",
    "shortOrg": "Punjab PPSC Civil Service Exam",
    "posts": "Punjab State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Punjab State Government Recruitment",
    "state": "punjab",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2T1Xf-A0Vhw6mFM2o0QsxEJo0McvmwEAM51zJsnnIpLLhkyI4pgm5jghI-IOkG7Hu_I3JRktU6fWh5aBO48DDf2gIWYKPdXt39BWHizmo8Bnr97WXOd21gHkK-h9j9cP90CkMVoK5zHU/s1600-h/Punjab-Civil-Judge-Recruitment-2015%25255B3%25255D.png",
      "notificationUrl": "https://rozgardwaar.com/2015/01/punjab-civil-judge-exam-2015.html",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2T1Xf-A0Vhw6mFM2o0QsxEJo0McvmwEAM51zJsnnIpLLhkyI4pgm5jghI-IOkG7Hu_I3JRktU6fWh5aBO48DDf2gIWYKPdXt39BWHizmo8Bnr97WXOd21gHkK-h9j9cP90CkMVoK5zHU/s1600-h/Punjab-Civil-Judge-Recruitment-2015%25255B3%25255D.png"
    }
  },
  {
    "id": "wbpsc-principal-recruitment-2026-apply",
    "title": "WBPSC Principal Recruitment 2026 – Apply Online for 12 Posts | Last Date 03-07-2026",
    "org": "WBPSC Principal",
    "shortOrg": "WBPSC Principal",
    "posts": "West Bengal State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "West Bengal State Government Recruitment",
    "state": "west-bengal",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "03-07-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1FwEdZVqslI6iNMYAq1NYU9plZhC4lL2f/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1FwEdZVqslI6iNMYAq1NYU9plZhC4lL2f/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1FwEdZVqslI6iNMYAq1NYU9plZhC4lL2f/view?usp=sharing"
    }
  },
  {
    "id": "west-bengal-govt-jobs",
    "title": "West Bengal Govt Jobs 2026 - Latest Vacancy Notifications",
    "org": "West Bengal Govt Jobs 2026 - Latest",
    "shortOrg": "West Bengal Govt Jobs 2026 - L",
    "posts": "West Bengal State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "West Bengal State Government Recruitment",
    "state": "west-bengal",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://employmentbankwb.gov.in/",
      "notificationUrl": "https://rozgardwaar.com/2013/10/west-bengal-govt-jobs.html",
      "websiteUrl": "https://employmentbankwb.gov.in/"
    }
  },
  {
    "id": "wbmsc-sub-assistant-engineer",
    "title": "WBMSC Sub Assistant Engineer Recruitment 2025 Apply Online for 125 Vacancies | Last Date 22nd September",
    "org": "WBMSC Sub Assistant Engineer",
    "shortOrg": "WBMSC Sub Assistant Engineer",
    "posts": "West Bengal State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "West Bengal State Government Recruitment",
    "state": "west-bengal",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://mscwb.org/home/download/KzNJSFBVeng4d056N1JUTjQ4ZzNiSy9sbW43aEc1cDFXNkR4NmZXbzdjREI0K21ndXFCSlRzNGdZRGRaODdSMTZodGpvYWd3L1BNbjF3UnF5cThKNzBTMmpVU0hwMjYrUDNvZC8zNUJlTlVuUW9iODFZS0dHK0RET2R6VUpOQjU=",
      "notificationUrl": "https://rozgardwaar.com/2025/09/wbmsc-sub-assistant-engineer.html",
      "websiteUrl": "https://mscwb.org/home/download/KzNJSFBVeng4d056N1JUTjQ4ZzNiSy9sbW43aEc1cDFXNkR4NmZXbzdjREI0K21ndXFCSlRzNGdZRGRaODdSMTZodGpvYWd3L1BNbjF3UnF5cThKNzBTMmpVU0hwMjYrUDNvZC8zNUJlTlVuUW9iODFZS0dHK0RET2R6VUpOQjU="
    }
  },
  {
    "id": "wbpsc-recruitment",
    "title": "WBPSC Recruitment 2023 Apply Online, Notification, 01 Job Vacancy",
    "org": "WBPSC",
    "shortOrg": "WBPSC",
    "posts": "West Bengal State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "West Bengal State Government Recruitment",
    "state": "west-bengal",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGhQIfeWbZh0oTpchXPuU1ZC3Q4jRWWxjLSr9qW9mHWz5VxAcmoxc5uloK2ynzrhiPfLNcCagOndpNxDD3Ci_519ztcZbWEHQWGvAcxgLyrSRycdUNG1t8jMNglhXqdpdZxeuo53QN7F0/s300/WBPSC-Jobs.png",
      "notificationUrl": "https://rozgardwaar.com/2016/05/WBPSC-Recruitment.html",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGhQIfeWbZh0oTpchXPuU1ZC3Q4jRWWxjLSr9qW9mHWz5VxAcmoxc5uloK2ynzrhiPfLNcCagOndpNxDD3Ci_519ztcZbWEHQWGvAcxgLyrSRycdUNG1t8jMNglhXqdpdZxeuo53QN7F0/s300/WBPSC-Jobs.png"
    }
  },
  {
    "id": "wbpsc-miscellaneous-recruitment",
    "title": "WBPSC Miscellaneous Recruitment 2023 Notification Pdf, Apply Online, Eligibility & Fee",
    "org": "WBPSC Miscellaneous",
    "shortOrg": "WBPSC Miscellaneous",
    "posts": "West Bengal State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "West Bengal State Government Recruitment",
    "state": "west-bengal",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDQbYVATsq_yd-JVxAxWiA3E1skeG90EguiD1TT4rih5ryQjdJ9452IFY1hpEbwe8Keqr7_8zBaugYLKjNZFxt3cMwghxX9H1DqOMkDo7zk76nWY2euTSsDJr6cmfTGkN900mXyTEGFvFSt9wTqObD3ynH5FeNiHRVOVloy_ZUdpOIBTLU_MrQ64cxmfc/s851/WBPSC%20Miscellaneous%20Notification%202023.webp",
      "notificationUrl": "https://drive.google.com/file/d/1fwEn2LkeQak2DnrVhLZA114SfjcdDTAn/view",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDQbYVATsq_yd-JVxAxWiA3E1skeG90EguiD1TT4rih5ryQjdJ9452IFY1hpEbwe8Keqr7_8zBaugYLKjNZFxt3cMwghxX9H1DqOMkDo7zk76nWY2euTSsDJr6cmfTGkN900mXyTEGFvFSt9wTqObD3ynH5FeNiHRVOVloy_ZUdpOIBTLU_MrQ64cxmfc/s851/WBPSC%20Miscellaneous%20Notification%202023.webp"
    }
  },
  {
    "id": "wbpsc-recruitment-2011-fishery-field",
    "title": "WBPSC Fishery Field Assistant Recruitment 2023 Apply Online for 50 Vacancies",
    "org": "WBPSC Fishery Field Assistant",
    "shortOrg": "WBPSC Fishery Field Assistant",
    "posts": "West Bengal State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "West Bengal State Government Recruitment",
    "state": "west-bengal",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEix7S6O7NTdvU4db9M7M_IjOJ_txU-0QzzMDxKhVAA0ZA1WQOVeYRO87Rs01foexgABtF9aiw59viHbgVdvuPCNb5QEyGgbfCy6iYWI-rD3sJ5IJavN8gtxFS0XcpikPHg0vJEIIiILVDvn9A5FZLT5JwyPqFhHn-ewvNlAmO6KNldcfvsQ6EUXJz3StKs/s775/WBPSC%20Fishery%20Field%20Assistant%20Advertisement%202023%20www.indgovtjobs.in.webp",
      "notificationUrl": "https://wbpsc.gov.in/Download?param1=An_20230920162124_IndFFA10-23.pdf&amp;param2=advertisement",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEix7S6O7NTdvU4db9M7M_IjOJ_txU-0QzzMDxKhVAA0ZA1WQOVeYRO87Rs01foexgABtF9aiw59viHbgVdvuPCNb5QEyGgbfCy6iYWI-rD3sJ5IJavN8gtxFS0XcpikPHg0vJEIIiILVDvn9A5FZLT5JwyPqFhHn-ewvNlAmO6KNldcfvsQ6EUXJz3StKs/s775/WBPSC%20Fishery%20Field%20Assistant%20Advertisement%202023%20www.indgovtjobs.in.webp"
    }
  },
  {
    "id": "wbpsc-assistant-translator",
    "title": "WBPSC Translator Recruitment 2023 Apply Online for Assistant Translator 14 Vacancies",
    "org": "WBPSC Translator",
    "shortOrg": "WBPSC Translator",
    "posts": "West Bengal State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "West Bengal State Government Recruitment",
    "state": "west-bengal",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1spksyZTJK5MGpHoLyx28OiCdRJCNleUZ/view",
      "notificationUrl": "https://drive.google.com/file/d/1spksyZTJK5MGpHoLyx28OiCdRJCNleUZ/view",
      "websiteUrl": "https://drive.google.com/file/d/1spksyZTJK5MGpHoLyx28OiCdRJCNleUZ/view"
    }
  },
  {
    "id": "wbpsc-medical-officer-recruitment-2013",
    "title": "WBPSC Medical Officer Recruitment 2023: Apply Online for 300 Posts - Notification and Details",
    "org": "WBPSC Medical Officer",
    "shortOrg": "WBPSC Medical Officer",
    "posts": "West Bengal State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "West Bengal State Government Recruitment",
    "state": "west-bengal",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3bErxCa4T2vm1LdyljXLV33pPWQEiJGsjZIqI7QXARbBnm6oP54bT60bKQS5u2nXPMCoY5M2jnY3nYwDXuvlLKlxvEvIdqo5Ijk16bezn-zSMSuJCGxMXxFMXeR0w4N2v3tSCXT7fUpuEyZPF45020wrWWn29-v1MAi0MQGH1mWlcOcPYj5eMgLnoFfA/s480/WBPSC-Medical-Officer-2023.png",
      "notificationUrl": "https://drive.google.com/file/d/1yqN9MsryYSFE3elRpZYTWO3VJc0PHNy_/view",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3bErxCa4T2vm1LdyljXLV33pPWQEiJGsjZIqI7QXARbBnm6oP54bT60bKQS5u2nXPMCoY5M2jnY3nYwDXuvlLKlxvEvIdqo5Ijk16bezn-zSMSuJCGxMXxFMXeR0w4N2v3tSCXT7fUpuEyZPF45020wrWWn29-v1MAi0MQGH1mWlcOcPYj5eMgLnoFfA/s480/WBPSC-Medical-Officer-2023.png"
    }
  },
  {
    "id": "wbpsc-food-si",
    "title": "WBPSC Food SI Recruitment 2023 Apply Online 509 Vacancies",
    "org": "WBPSC Food SI",
    "shortOrg": "WBPSC Food SI",
    "posts": "West Bengal State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "West Bengal State Government Recruitment",
    "state": "west-bengal",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://wbpsc.ucanapply.com/apply-now?app_id=UElZMDAwMDAwMQ==",
      "notificationUrl": "https://drive.google.com/file/d/1e86JcwWUju4dU-S4ro8zZvR5B-LKU18_/view",
      "websiteUrl": "https://wbpsc.ucanapply.com/apply-now?app_id=UElZMDAwMDAwMQ=="
    }
  },
  {
    "id": "metal-and-steel-factory-ishapore",
    "title": "Metal and Steel Factory Ishapore Recruitment 2025 Apply Online 15 Apprentice Posts",
    "org": "Metal and Steel Factory Ishapore",
    "shortOrg": "Metal and Steel Factory Ishapo",
    "posts": "West Bengal State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "West Bengal State Government Recruitment",
    "state": "west-bengal",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1wMS6lO35jCFrGmMUIw04zPy9lxX_haQt/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1wMS6lO35jCFrGmMUIw04zPy9lxX_haQt/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1wMS6lO35jCFrGmMUIw04zPy9lxX_haQt/view?usp=sharing"
    }
  },
  {
    "id": "wbsetcl-officer-recruitment-2025",
    "title": "WBSETCL Officer Recruitment 2025 - Notification, Offline Form, 02 Posts",
    "org": "WBSETCL Officer",
    "shortOrg": "WBSETCL Officer",
    "posts": "West Bengal State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "West Bengal State Government Recruitment",
    "state": "west-bengal",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://www.wbsetcl.in/career/REC_2025_03_EMPLOYMENT%20NOTIFICATION_SO%20Security.doc_09_07_25.pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "indian-coast-guard-navik-notification",
    "title": "Indian Coast Guard Navik Vacancy 2025, Notification Out, Apply Online Now, 300 Vacancies",
    "org": "Indian Coast Guard Navik",
    "shortOrg": "Indian Coast Guard Navik",
    "posts": "West Bengal State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "West Bengal State Government Recruitment",
    "state": "west-bengal",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1ieSs1uzQodhGXxlfDS5v-vi84M_e2s_3/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1ieSs1uzQodhGXxlfDS5v-vi84M_e2s_3/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1ieSs1uzQodhGXxlfDS5v-vi84M_e2s_3/view?usp=sharing"
    }
  },
  {
    "id": "odisha-govt-jobs",
    "title": "Odisha Govt Jobs 2026 - Latest Job Notifications List",
    "org": "Odisha Govt Jobs 2026 - Latest Job",
    "shortOrg": "Odisha Govt Jobs 2026 - Latest",
    "posts": "Odisha State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Odisha State Government Recruitment",
    "state": "odisha",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2023/09/Odisha-Govt-Jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2023/09/Odisha-Govt-Jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2023/09/Odisha-Govt-Jobs.html"
    }
  },
  {
    "id": "osssc-cre-recruitment",
    "title": "OSSSC CRE Recruitment 2026: Notification, Online Form, 3250 Vacancies | Last Date 31.01.2026",
    "org": "OSSSC CRE",
    "shortOrg": "OSSSC CRE",
    "posts": "Odisha State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Odisha State Government Recruitment",
    "state": "odisha",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1vi9SxnIyd51GyCFs0CRmrwWKr2GXKt_r/view?usp=sharing",
      "notificationUrl": "https://www.osssc.gov.in/Docs/Notice-283-Extn%20Date-CRE-2025_.pdf",
      "websiteUrl": "https://drive.google.com/file/d/1vi9SxnIyd51GyCFs0CRmrwWKr2GXKt_r/view?usp=sharing"
    }
  },
  {
    "id": "osssc-forest-guard-recruitment",
    "title": "OSSSC Forest Guard Recruitment 2026 Apply Online for 1518 Vacancies | Last Date 31.01.2026",
    "org": "OSSSC Forest Guard",
    "shortOrg": "OSSSC Forest Guard",
    "posts": "Odisha State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Odisha State Government Recruitment",
    "state": "odisha",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1PTq6UCoxsJWth8f3Om7PjRiBveXylni3/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1PTq6UCoxsJWth8f3Om7PjRiBveXylni3/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1PTq6UCoxsJWth8f3Om7PjRiBveXylni3/view?usp=sharing"
    }
  },
  {
    "id": "osssc-teacher-recruitment",
    "title": "OSSSC Teacher Recruitment 2025: Apply Online, 2829 Vacancies, Notification | Last Date 22 January",
    "org": "OSSSC Teacher",
    "shortOrg": "OSSSC Teacher",
    "posts": "Odisha State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Odisha State Government Recruitment",
    "state": "odisha",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1P8Tf0G_fM7IKoRcwIrL267iPtwDunqR6/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1P8Tf0G_fM7IKoRcwIrL267iPtwDunqR6/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1P8Tf0G_fM7IKoRcwIrL267iPtwDunqR6/view?usp=sharing"
    }
  },
  {
    "id": "osssc-radiographer-recruitment",
    "title": "OSSSC Radiographer Recruitment 2024 Apply Online (378 Vacancies)",
    "org": "OSSSC Radiographer",
    "shortOrg": "OSSSC Radiographer",
    "posts": "Odisha State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Odisha State Government Recruitment",
    "state": "odisha",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.blogger.com/#",
      "notificationUrl": "https://www.osssc.gov.in/Docs/Radiographer-Corrigendum.pdf",
      "websiteUrl": "https://www.blogger.com/#"
    }
  },
  {
    "id": "osssc-recruitment",
    "title": "OSSSC Recruitment 2024, Latest OSSSC Jobs, 2629 Vacancies",
    "org": "OSSSC",
    "shortOrg": "OSSSC",
    "posts": "Odisha State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Odisha State Government Recruitment",
    "state": "odisha",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://www.osssc.gov.in",
      "notificationUrl": "https://rozgardwaar.com/2016/11/OSSSC-Recruitment.html",
      "websiteUrl": "http://www.osssc.gov.in"
    }
  },
  {
    "id": "osssc-mphw-pharmacist-recruitment",
    "title": "OSSSC MPHW Pharmacist Recruitment 2024, Apply Online, 2453 Vacancies, Last Date 15/03/2024",
    "org": "OSSSC MPHW Pharmacist",
    "shortOrg": "OSSSC MPHW Pharmacist",
    "posts": "Odisha State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Odisha State Government Recruitment",
    "state": "odisha",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "15/03/2024",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYchi7coWvbRTAiC_eDRscCYwJ9ET1TSt0XlpBGrR9mg-SN03slItZSsz8OjVkmYBNHs5fEhHnX10u6-tXlBJmTEL_0LG9dndGqhH-r9Qp6d5aWLh-wNiXZUS1D6rvOX4j_cnyjfQ21Bv6WisFkZbCpYwHSkiBHoTdpVCNFZ-zM1ERF5XxnBip2_qXB1I/s450/OSSSC%20Pharmacist%20and%20MPHW%20Jobs.webp",
      "notificationUrl": "https://drive.google.com/file/d/1U5lxCwiDaDqy7jvUzeciTvKOnqTUTFHx/view",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYchi7coWvbRTAiC_eDRscCYwJ9ET1TSt0XlpBGrR9mg-SN03slItZSsz8OjVkmYBNHs5fEhHnX10u6-tXlBJmTEL_0LG9dndGqhH-r9Qp6d5aWLh-wNiXZUS1D6rvOX4j_cnyjfQ21Bv6WisFkZbCpYwHSkiBHoTdpVCNFZ-zM1ERF5XxnBip2_qXB1I/s450/OSSSC%20Pharmacist%20and%20MPHW%20Jobs.webp"
    }
  },
  {
    "id": "osssc-pharmacist-recruitment",
    "title": "OSSSC Pharmacist Recruitment 2024 Apply Online for 206 Vacancies",
    "org": "OSSSC Pharmacist",
    "shortOrg": "OSSSC Pharmacist",
    "posts": "Odisha State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Odisha State Government Recruitment",
    "state": "odisha",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinru1QQwhra3SShvD2ruODFw7TztjSu6tfUQrVdeXkj_GrMMC7u6PjUjGAio_qzf3BOJgjPLMijQwBP7fLjo_hENe1fAltRq03wq8XYDr_4lxj2as_c0uBDEb-ww9qVEsq6tZ6HG-4WUDX-ZLQzyHIXaiF080tUfFTGPMO8dTwaSgNOC6WDqNmNvHgynQ/s642/OSSSC%20Pharmacist%20Notification%202024%20indgovtjobs.PNG",
      "notificationUrl": "https://drive.google.com/file/d/1U5lxCwiDaDqy7jvUzeciTvKOnqTUTFHx/view",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinru1QQwhra3SShvD2ruODFw7TztjSu6tfUQrVdeXkj_GrMMC7u6PjUjGAio_qzf3BOJgjPLMijQwBP7fLjo_hENe1fAltRq03wq8XYDr_4lxj2as_c0uBDEb-ww9qVEsq6tZ6HG-4WUDX-ZLQzyHIXaiF080tUfFTGPMO8dTwaSgNOC6WDqNmNvHgynQ/s642/OSSSC%20Pharmacist%20Notification%202024%20indgovtjobs.PNG"
    }
  },
  {
    "id": "opsc-civil-service-notification-2026",
    "title": "OPSC Civil Service Notification 2026 Apply Online for 465 Vacancies | Last Date 20.02.2026",
    "org": "OPSC Civil Service",
    "shortOrg": "OPSC Civil Service",
    "posts": "Odisha State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Odisha State Government Recruitment",
    "state": "odisha",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1keFJMOEGd7nMsEv6kDx7eX6s6UZJiDLu/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1keFJMOEGd7nMsEv6kDx7eX6s6UZJiDLu/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1keFJMOEGd7nMsEv6kDx7eX6s6UZJiDLu/view?usp=sharing"
    }
  },
  {
    "id": "opsc-vas-recruitment",
    "title": "OPSC VAS Recruitment 2025 - Apply Online, Notification, 506 Posts",
    "org": "OPSC VAS",
    "shortOrg": "OPSC VAS",
    "posts": "Odisha State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Odisha State Government Recruitment",
    "state": "odisha",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/11gwmRbeFXVYDemMf2YyJr2sumETeHaPx/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/11gwmRbeFXVYDemMf2YyJr2sumETeHaPx/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/11gwmRbeFXVYDemMf2YyJr2sumETeHaPx/view?usp=sharing"
    }
  },
  {
    "id": "opsc-assistant-section-officer",
    "title": "OPSC Assistant Section Officer Recruitment 2025 Online Form for 29 Posts",
    "org": "OPSC Assistant Section Officer",
    "shortOrg": "OPSC Assistant Section Officer",
    "posts": "Odisha State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Odisha State Government Recruitment",
    "state": "odisha",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://513744082815-opscdocuments.s3.ap-south-1.amazonaws.com/dev/Advertisement/AdvertisementDocument/08dd8933-0c1b-4c92-8d91-558195a0ccbc/638817574496284837_022526.pdf?X-Amz-Expires=604800&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXPHMIS57RU2R2QOF%2F20250515%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20250515T040141Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=fe9e9550b0e4eb113bb9b81fa73c138656124fe1a4c4c38d09f637e6f104983e",
      "notificationUrl": "https://513744082815-opscdocuments.s3.ap-south-1.amazonaws.com/dev/Advertisement/AdvertisementDocument/08dd8933-0c1b-4c92-8d91-558195a0ccbc/638817574496284837_022526.pdf?X-Amz-Expires=604800&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXPHMIS57RU2R2QOF%2F20250515%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20250515T040141Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=fe9e9550b0e4eb113bb9b81fa73c138656124fe1a4c4c38d09f637e6f104983e",
      "websiteUrl": "https://513744082815-opscdocuments.s3.ap-south-1.amazonaws.com/dev/Advertisement/AdvertisementDocument/08dd8933-0c1b-4c92-8d91-558195a0ccbc/638817574496284837_022526.pdf?X-Amz-Expires=604800&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXPHMIS57RU2R2QOF%2F20250515%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20250515T040141Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=fe9e9550b0e4eb113bb9b81fa73c138656124fe1a4c4c38d09f637e6f104983e"
    }
  },
  {
    "id": "opsc-medical-officer-recruitment",
    "title": "OPSC Medical Officer 2025: Notification, Online Form, 5248 Posts",
    "org": "OPSC Medical Officer 2025",
    "shortOrg": "OPSC Medical Officer 2025:",
    "posts": "Odisha State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Odisha State Government Recruitment",
    "state": "odisha",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1TO_UlL89UExb9uMvz191m6AGYVU06kH2/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1TO_UlL89UExb9uMvz191m6AGYVU06kH2/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1TO_UlL89UExb9uMvz191m6AGYVU06kH2/view?usp=sharing"
    }
  },
  {
    "id": "tnpsc-ctse-diploma-iti-recruitment",
    "title": "TNPSC CTSE Diploma ITI Recruitment 2026: Apply Online for 839 Posts |  Last Date 15-08-2026",
    "org": "TNPSC CTSE Diploma ITI",
    "shortOrg": "TNPSC CTSE Diploma ITI",
    "posts": "Tamil Nadu State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tamil Nadu State Government Recruitment",
    "state": "tamil-nadu",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "15-08-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://tnpsc.gov.in/document/english/CTS%20-%20Diploma-(English).pdf",
      "notificationUrl": "https://tnpsc.gov.in/document/english/CTS%20-%20Diploma-(English).pdf",
      "websiteUrl": "https://tnpsc.gov.in/document/english/CTS%20-%20Diploma-(English).pdf"
    }
  },
  {
    "id": "government-jobs-in-tamilnadu",
    "title": "Government Jobs in Tamil Nadu 2026 – Latest TN Govt Jobs Alert",
    "org": "Government Jobs in Tamil Nadu 2026 – Latest TN Govt Jobs Alert",
    "shortOrg": "Government Jobs in Tamil Nadu ",
    "posts": "Tamil Nadu State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tamil Nadu State Government Recruitment",
    "state": "tamil-nadu",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.tnpsc.gov.in/",
      "notificationUrl": "https://rozgardwaar.com/2013/09/government-jobs-in-tamilnadu.html",
      "websiteUrl": "https://www.tnpsc.gov.in/"
    }
  },
  {
    "id": "tnpsc-group-2-2a-notification",
    "title": "TNPSC Group 2 2A Notification 2026 – Apply Online for 821 Various Posts | Last Date 09-09-2026",
    "org": "TNPSC Group 2 2A",
    "shortOrg": "TNPSC Group 2 2A",
    "posts": "Various",
    "vacancies": 821,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tamil Nadu State Government Recruitment",
    "state": "tamil-nadu",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "09-09-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1UdWlNbXLXWPKbLhD0nsq6gDRXp-JvtnG/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1UdWlNbXLXWPKbLhD0nsq6gDRXp-JvtnG/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1UdWlNbXLXWPKbLhD0nsq6gDRXp-JvtnG/view?usp=sharing"
    }
  },
  {
    "id": "tn-velai-vaippu-online-registration",
    "title": "TN Velai Vaippu 2026 - Online Registration, Renewal, tnvelaivaaippu.gov.in",
    "org": "TN Velai Vaippu 2026 - Online Registration, Renewal, tnvelaivaaippu.gov.in",
    "shortOrg": "TN Velai Vaippu 2026 - Online ",
    "posts": "Tamil Nadu State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tamil Nadu State Government Recruitment",
    "state": "tamil-nadu",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://tnvelaivaaippu.gov.in",
      "notificationUrl": "https://rozgardwaar.com/2013/07/tn-velai-vaippu-online-registration.html",
      "websiteUrl": "https://tnvelaivaaippu.gov.in"
    }
  },
  {
    "id": "tnusrb-recruitment",
    "title": "TNUSRB Recruitment 2025: Apply Online for 3665 Constable, Fireman, Jail Warder Posts | Last Date 21st September",
    "org": "TNUSRB",
    "shortOrg": "TNUSRB",
    "posts": "Constable, Fireman, Jail Warder",
    "vacancies": 3665,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tamil Nadu State Government Recruitment",
    "state": "tamil-nadu",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://tnusrb.tn.gov.in/pdfs/Notification_CR_2025.pdf",
      "notificationUrl": "https://tnusrb.tn.gov.in/pdfs/Notification_CR_2025.pdf",
      "websiteUrl": "https://tnusrb.tn.gov.in/pdfs/Notification_CR_2025.pdf"
    }
  },
  {
    "id": "tn-si-recruitment",
    "title": "TN SI Recruitment 2025 - Online Form for 1352 Vacancies",
    "org": "TN SI",
    "shortOrg": "TN SI",
    "posts": "Tamil Nadu State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tamil Nadu State Government Recruitment",
    "state": "tamil-nadu",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1araesOj08-eGaHb6Vw51QjrnEUehwC-5/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1araesOj08-eGaHb6Vw51QjrnEUehwC-5/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1araesOj08-eGaHb6Vw51QjrnEUehwC-5/view?usp=sharing"
    }
  },
  {
    "id": "tn-police-recruitment",
    "title": "TN Police Recruitment 2023 Apply Online | 750 Sub Inspector, Station Officer Vacancies",
    "org": "TN Police",
    "shortOrg": "TN Police",
    "posts": "Tamil Nadu State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tamil Nadu State Government Recruitment",
    "state": "tamil-nadu",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://tnusrb.tn.gov.in/pdfs/Notification_en.pdf",
      "notificationUrl": "https://tnusrb.tn.gov.in/pdfs/Notification_en.pdf",
      "websiteUrl": "https://tnusrb.tn.gov.in/pdfs/Notification_en.pdf"
    }
  },
  {
    "id": "karur-district-recruitment",
    "title": "Karur District Recruitment 2020 Apply Online | 7800 Police Personnel Vacancies",
    "org": "Karur District",
    "shortOrg": "Karur District",
    "posts": "Tamil Nadu State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tamil Nadu State Government Recruitment",
    "state": "tamil-nadu",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://cdn.s3waas.gov.in/s3bbf94b34eb32268ada57a3be5062fe7d/uploads/2020/10/2020101496.pdf",
      "notificationUrl": "https://cdn.s3waas.gov.in/s3bbf94b34eb32268ada57a3be5062fe7d/uploads/2020/10/2020101496.pdf",
      "websiteUrl": "https://cdn.s3waas.gov.in/s3bbf94b34eb32268ada57a3be5062fe7d/uploads/2020/10/2020101496.pdf"
    }
  },
  {
    "id": "tamil-nadu-police-si-vacancy",
    "title": "Tamil Nadu Police SI Vacancy 2019 - Apply Online 969 Vacancies",
    "org": "Tamil Nadu Police SI",
    "shortOrg": "Tamil Nadu Police SI",
    "posts": "Tamil Nadu State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tamil Nadu State Government Recruitment",
    "state": "tamil-nadu",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://tnusrbonline.org/pdfs/SI_TKARTSP_2019_Notification.pdf",
      "notificationUrl": "http://tnusrbonline.org/pdfs/SI_TKARTSP_2019_Notification.pdf",
      "websiteUrl": "http://tnusrbonline.org/pdfs/SI_TKARTSP_2019_Notification.pdf"
    }
  },
  {
    "id": "tamil-nadu-police-recruitment-2013-14",
    "title": "Tamil Nadu Police Recruitment 2013-14 - TNUSRB 10500 TN Special Police Youth Brigade Application Form",
    "org": "Tamil Nadu Police",
    "shortOrg": "Tamil Nadu Police",
    "posts": "Tamil Nadu State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tamil Nadu State Government Recruitment",
    "state": "tamil-nadu",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhk4oMPjENKRUQx88aI9fnTFW6Vu3gqnR1d94RuDf_nAKWp-VC53SYvIGwV4fNmEXJmAtbw1I7SotIdseNILp_cmD4rRKUYTFtu8JTq0vV4epeiSZQBjc_RC6_3r0huMJhRj672khibVUA/s1600-h/TN%252520Special%252520Police%252520Youth%252520Brigade%2525202013%25255B4%25255D.jpg",
      "notificationUrl": "http://www.tnusrb.tn.gov.in/tnspyb/Instruction%20to%20candidates%20in%20Tamil.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhk4oMPjENKRUQx88aI9fnTFW6Vu3gqnR1d94RuDf_nAKWp-VC53SYvIGwV4fNmEXJmAtbw1I7SotIdseNILp_cmD4rRKUYTFtu8JTq0vV4epeiSZQBjc_RC6_3r0huMJhRj672khibVUA/s1600-h/TN%252520Special%252520Police%252520Youth%252520Brigade%2525202013%25255B4%25255D.jpg"
    }
  },
  {
    "id": "tamil-nadu-uniformed-services",
    "title": "Tamil Nadu Uniformed Services Recruitment Board 2012 - TN Police Jobs 2012 Jail Warders, Constables and Fireman (Total 11485)",
    "org": "Tamil Nadu Uniformed Services",
    "shortOrg": "Tamil Nadu Uniformed Services",
    "posts": "Tamil Nadu State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tamil Nadu State Government Recruitment",
    "state": "tamil-nadu",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLLsUfIibeh2uD2aCBvZ8iHx1O20QpUQ8W67sHYoZLvAGtFGIiHJm0xB17N8Vvhbm8rxqWBHE4EiBmWlsGIzHHBVCBhvNlIHXvs3sZZqegfOQlyQobZiN0cOf86nLqhSS00ZJeQIsl3ps/s1600-h/tn%25255B3%25255D.jpg",
      "notificationUrl": "http://www.tn.gov.in/tnusrb/GR2PC_JW_Firemen_2012/PC_notification_2012.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLLsUfIibeh2uD2aCBvZ8iHx1O20QpUQ8W67sHYoZLvAGtFGIiHJm0xB17N8Vvhbm8rxqWBHE4EiBmWlsGIzHHBVCBhvNlIHXvs3sZZqegfOQlyQobZiN0cOf86nLqhSS00ZJeQIsl3ps/s1600-h/tn%25255B3%25255D.jpg"
    }
  },
  {
    "id": "npcil-maps-apprentice-recruitment",
    "title": "NPCIL MAPS Apprentice Recruitment 2026 – Apply Online for 158 Posts | Last Date 30-06-2026",
    "org": "NPCIL MAPS Apprentice",
    "shortOrg": "NPCIL MAPS Apprentice",
    "posts": "Tamil Nadu State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tamil Nadu State Government Recruitment",
    "state": "tamil-nadu",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "30-06-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.npcil.nic.in/WriteReadData/userfiles/file/Advertisement_25052026_01.pdf",
      "notificationUrl": "https://www.npcil.nic.in/WriteReadData/userfiles/file/Advertisement_25052026_01.pdf",
      "websiteUrl": "https://www.npcil.nic.in/WriteReadData/userfiles/file/Advertisement_25052026_01.pdf"
    }
  },
  {
    "id": "latest-govt-jobs-in-karnataka",
    "title": "Karnataka Govt Jobs 2026 - Latest Notifications List",
    "org": "Karnataka Govt Jobs 2026 - Latest",
    "shortOrg": "Karnataka Govt Jobs 2026 - Lat",
    "posts": "Karnataka State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Karnataka State Government Recruitment",
    "state": "karnataka",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2013/10/latest-govt-jobs-in-karnataka.html",
      "notificationUrl": "https://rozgardwaar.com/2013/10/latest-govt-jobs-in-karnataka.html",
      "websiteUrl": "https://rozgardwaar.com/2013/10/latest-govt-jobs-in-karnataka.html"
    }
  },
  {
    "id": "government-jobs-in-kerala",
    "title": "Kerala Govt Jobs 2026 – Latest കേരളം സർക്കാർ ജോലികൾ",
    "org": "Kerala Govt Jobs 2026 – Latest കേരളം സർക്കാർ ജോലികൾ",
    "shortOrg": "Kerala Govt Jobs 2026 – Latest",
    "posts": "Karnataka State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Karnataka State Government Recruitment",
    "state": "karnataka",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.keralapsc.gov.in/",
      "notificationUrl": "https://rozgardwaar.com/2013/10/government-jobs-in-kerala.html",
      "websiteUrl": "https://www.keralapsc.gov.in/"
    }
  },
  {
    "id": "kerala-psc-notifications",
    "title": "Latest Kerala PSC Notifications 2026: Apply Online for 500+ Job Vacancies",
    "org": "Latest Kerala PSC",
    "shortOrg": "Latest Kerala PSC",
    "posts": "Job",
    "vacancies": 500,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Karnataka State Government Recruitment",
    "state": "karnataka",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.keralapsc.gov.in/extra-ordinary-gazette-date-31122025",
      "notificationUrl": "https://rozgardwaar.com/2015/10/Kerala-PSC-Notifications.html",
      "websiteUrl": "https://www.keralapsc.gov.in/extra-ordinary-gazette-date-31122025"
    }
  },
  {
    "id": "karnataka-kpsc-recruitment",
    "title": "Karnataka KPSC Recruitment 2024 Apply Online - 400 Vacancies",
    "org": "Karnataka KPSC",
    "shortOrg": "Karnataka KPSC",
    "posts": "Karnataka State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Karnataka State Government Recruitment",
    "state": "karnataka",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkGpWV3omv8UHN7FgyieuuAMAgqnfmIDAnmIHQz0biljclqnd_q5ipiUmgzpMOUPyIjUND7SaZu3TJjWzGXytl2uNA8QA-E7k9FpKHENGzfUHsTnZDRiA98sIlc-QDnNEgw8U6isXfpWqvd_Dr-SBk_eWU_3cSGxddBuCm6NWKXuOWI5U5OfT-0oRwGVE/s500/KPSC%20Jobs.webp",
      "notificationUrl": "https://kpsc.kar.nic.in/IMV-RPC.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkGpWV3omv8UHN7FgyieuuAMAgqnfmIDAnmIHQz0biljclqnd_q5ipiUmgzpMOUPyIjUND7SaZu3TJjWzGXytl2uNA8QA-E7k9FpKHENGzfUHsTnZDRiA98sIlc-QDnNEgw8U6isXfpWqvd_Dr-SBk_eWU_3cSGxddBuCm6NWKXuOWI5U5OfT-0oRwGVE/s500/KPSC%20Jobs.webp"
    }
  },
  {
    "id": "kpsc-veterinary-officer-recruitment",
    "title": "KPSC Veterinary Officer Recruitment 2024 Apply Online - 400 Vacancies",
    "org": "KPSC Veterinary Officer",
    "shortOrg": "KPSC Veterinary Officer",
    "posts": "Karnataka State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Karnataka State Government Recruitment",
    "state": "karnataka",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1CftTZXz6FnzRt0JtbsAUJn1KPQ1xmkgj/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1CftTZXz6FnzRt0JtbsAUJn1KPQ1xmkgj/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1CftTZXz6FnzRt0JtbsAUJn1KPQ1xmkgj/view?usp=sharing"
    }
  },
  {
    "id": "kerala-state-cooperative-bank-recruitment",
    "title": "Kerala Bank Recruitment 2024, 479 Vacancies, Notification, Apply Online",
    "org": "Kerala Bank",
    "shortOrg": "Kerala Bank",
    "posts": "Karnataka State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Karnataka State Government Recruitment",
    "state": "karnataka",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1dn0SsYJHO-6ZYTVH-XZieHU5Bb6YBLAe/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1dn0SsYJHO-6ZYTVH-XZieHU5Bb6YBLAe/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1dn0SsYJHO-6ZYTVH-XZieHU5Bb6YBLAe/view?usp=sharing"
    }
  },
  {
    "id": "kpsc-gazetted-probationers-notification",
    "title": "KPSC Gazetted Probationers Exam Notification 2015 Apply Online (440 Vacancies)",
    "org": "KPSC Gazetted Probationers Exam",
    "shortOrg": "KPSC Gazetted Probationers Exa",
    "posts": "Karnataka State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Karnataka State Government Recruitment",
    "state": "karnataka",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiswiPSlT6kvkdE_oXPYMixdpKZNbOVEU2cqfeqY7csO36ipoElGytw_xRVQKWR-CtFIRr0I4AuG_eRtI5fdL528sgHAPCGEdC9N2p6n3dxvDY_4ERBlEr1Fa4tJBzFv6vzz9i793qYOt0/s1600-h/KPSC-Jobs-2015%25255B3%25255D.png",
      "notificationUrl": "https://rozgardwaar.com/2015/01/kpsc-gazetted-probationers-notification.html",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiswiPSlT6kvkdE_oXPYMixdpKZNbOVEU2cqfeqY7csO36ipoElGytw_xRVQKWR-CtFIRr0I4AuG_eRtI5fdL528sgHAPCGEdC9N2p6n3dxvDY_4ERBlEr1Fa4tJBzFv6vzz9i793qYOt0/s1600-h/KPSC-Jobs-2015%25255B3%25255D.png"
    }
  },
  {
    "id": "kerala-psc-notification-2014",
    "title": "Kerala PSC Notification 2014 Recruitment Apply Online (Above 90 Vacancies)",
    "org": "Kerala PSC",
    "shortOrg": "Kerala PSC",
    "posts": "Karnataka State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Karnataka State Government Recruitment",
    "state": "karnataka",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://www.keralapsc.gov.in/index.php?option=com_docman&amp;task=cat_view&amp;gid=584&amp;Itemid=15",
      "notificationUrl": "https://rozgardwaar.com/2014/03/kerala-psc-notification-2014.html",
      "websiteUrl": "http://www.keralapsc.gov.in/index.php?option=com_docman&amp;task=cat_view&amp;gid=584&amp;Itemid=15"
    }
  },
  {
    "id": "kpsc-recruitment-2014-in-karnataka",
    "title": "KPSC Recruitment 2014 Apply Online - 901 Vacancies",
    "org": "KPSC",
    "shortOrg": "KPSC",
    "posts": "Karnataka State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Karnataka State Government Recruitment",
    "state": "karnataka",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiu6yjUzlIf7tuYMyzv07Tz2FXVe1YKccGgu0MB2f5NUY7pvilE7UPHat_5DWYjU4V4Eu1hFNkVSxHpK9b5Cd36JXYEsER-KUtiV3EgW02fni-MeGKaUWbTBr1RRzPS9ecuWH_PIO8iLtc/s1600-h/KPSC-Vacancies-2014%25255B3%25255D.png",
      "notificationUrl": "http://kpsc.kar.nic.in/Notification%20dt.25-09-2014.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiu6yjUzlIf7tuYMyzv07Tz2FXVe1YKccGgu0MB2f5NUY7pvilE7UPHat_5DWYjU4V4Eu1hFNkVSxHpK9b5Cd36JXYEsER-KUtiV3EgW02fni-MeGKaUWbTBr1RRzPS9ecuWH_PIO8iLtc/s1600-h/KPSC-Vacancies-2014%25255B3%25255D.png"
    }
  },
  {
    "id": "kea-vao-recruitment",
    "title": "KEA VAO Recruitment 2026 – Apply Online for 572 Posts | Last Date 30-07-2026",
    "org": "KEA VAO",
    "shortOrg": "KEA VAO",
    "posts": "Karnataka State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Karnataka State Government Recruitment",
    "state": "karnataka",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "30-07-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://cetonline.karnataka.gov.in/keawebentry456/vaorpc2026/vao_rpc_notification_10072026english.pdf",
      "notificationUrl": "https://cetonline.karnataka.gov.in/keawebentry456/vaorpc2026/vao_rpc_notification_10072026english.pdf",
      "websiteUrl": "https://cetonline.karnataka.gov.in/keawebentry456/vaorpc2026/vao_rpc_notification_10072026english.pdf"
    }
  },
  {
    "id": "kea-recruitment",
    "title": "KEA Recruitment 2025: Apply for 3356 Watchman, Driver, Assistant & Other Posts",
    "org": "KEA",
    "shortOrg": "KEA",
    "posts": "Watchman, Driver, Assistant & Other",
    "vacancies": 3356,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Karnataka State Government Recruitment",
    "state": "karnataka",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1Xb5nLFWOOzdQ42ScwsjmaPFi55QAHKcj/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1Xb5nLFWOOzdQ42ScwsjmaPFi55QAHKcj/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1Xb5nLFWOOzdQ42ScwsjmaPFi55QAHKcj/view?usp=sharing"
    }
  },
  {
    "id": "gttc-recruitment",
    "title": "GTTC Recruitment 2024, 98 Vacancies, Notification, Online Application",
    "org": "GTTC",
    "shortOrg": "GTTC",
    "posts": "Karnataka State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Karnataka State Government Recruitment",
    "state": "karnataka",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://cetonline.karnataka.gov.in/keawebentry456/GBOREC2024/GTTC_gazette_final09052024.pdf",
      "notificationUrl": "https://cetonline.karnataka.gov.in/keawebentry456/GBOREC2024/GTTC_gazette_final09052024.pdf",
      "websiteUrl": "https://cetonline.karnataka.gov.in/keawebentry456/GBOREC2024/GTTC_gazette_final09052024.pdf"
    }
  },
  {
    "id": "govt-jobs-in-telangana",
    "title": "Telangana State Government Jobs 2026 - Latest Notifications List",
    "org": "Telangana State Government Jobs 2026 - Latest",
    "shortOrg": "Telangana State Government Job",
    "posts": "Telangana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Telangana State Government Recruitment",
    "state": "telangana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2014/11/govt-jobs-in-telangana.html",
      "notificationUrl": "https://rozgardwaar.com/2014/11/govt-jobs-in-telangana.html",
      "websiteUrl": "https://rozgardwaar.com/2014/11/govt-jobs-in-telangana.html"
    }
  },
  {
    "id": "tspsc-notifications",
    "title": "TSPSC Notification 2024 | Telangana PSC Jobs | 10000+ Upcoming Vacancies",
    "org": "TSPSC",
    "shortOrg": "TSPSC",
    "posts": "Telangana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Telangana State Government Recruitment",
    "state": "telangana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDk7IWlw9hkx-uBZexBwjLxCgsc170zWuBqVu7ANA24TYX2QYwmdZTI9EiAjv80xmsWk2aRTmU78URdYAcH2wfn4rXakuuAG2ZDnrHQynUWP0y0Lr2p1zKzZAajkDvW2VnsktKRx1SxtGY0Wo9qEsDtLqnjEv8Qml-ASaD4xpDv524kpjAPgEMg6Fm/s400/TSPSC-Jobs-indgovtjobs.webp",
      "notificationUrl": "https://websitenew.tspsc.gov.in/preview/DIRECTRECRUITMENTNOTI/20-2022-LECTURERS%20IN%20GOVERNMENT%20POLYTECHNIC%20COLLEGES-NOTIFN20221208143807.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDk7IWlw9hkx-uBZexBwjLxCgsc170zWuBqVu7ANA24TYX2QYwmdZTI9EiAjv80xmsWk2aRTmU78URdYAcH2wfn4rXakuuAG2ZDnrHQynUWP0y0Lr2p1zKzZAajkDvW2VnsktKRx1SxtGY0Wo9qEsDtLqnjEv8Qml-ASaD4xpDv524kpjAPgEMg6Fm/s400/TSPSC-Jobs-indgovtjobs.webp"
    }
  },
  {
    "id": "ts-trt-notification",
    "title": "TS TRT Notification 2023 | 5089 Vacancies | tsdsc.aptonline.in Apply Online",
    "org": "TS TRT",
    "shortOrg": "TS TRT",
    "posts": "Telangana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Telangana State Government Recruitment",
    "state": "telangana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/17CCQxBFtNq5IIdXYModd0GLSIKbBvggX/view",
      "notificationUrl": "https://drive.google.com/file/d/17CCQxBFtNq5IIdXYModd0GLSIKbBvggX/view",
      "websiteUrl": "https://drive.google.com/file/d/17CCQxBFtNq5IIdXYModd0GLSIKbBvggX/view"
    }
  },
  {
    "id": "tspsc-group-3-notification",
    "title": "TSPSC Group 3 Notification 2023 Apply Online | 1363 Vacancies",
    "org": "TSPSC Group 3",
    "shortOrg": "TSPSC Group 3",
    "posts": "Telangana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Telangana State Government Recruitment",
    "state": "telangana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhz1_2nBtOGbqhChqPxK33LTjprjEmNtpOacx-Xz9eoF0ZJ490gQJbDG9Zfl-B4gkyk_L_eghUCb0UogC0Nuqz70sMzY_99_CIgYzo9vHn3gsivm5Y5ls8BfrXka_iRVJvC46_6Xnb43l45o5DXler7ucub9iYYoXzDhPRslTWlqNSHEuSTa_EWOWz6/s896/TSPSC-Group-III-Notification-indgovtjobs.webp",
      "notificationUrl": "https://notificationslist.tspsc.gov.in/notificationPDF/29-2022-GROUP-III-2022.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhz1_2nBtOGbqhChqPxK33LTjprjEmNtpOacx-Xz9eoF0ZJ490gQJbDG9Zfl-B4gkyk_L_eghUCb0UogC0Nuqz70sMzY_99_CIgYzo9vHn3gsivm5Y5ls8BfrXka_iRVJvC46_6Xnb43l45o5DXler7ucub9iYYoXzDhPRslTWlqNSHEuSTa_EWOWz6/s896/TSPSC-Group-III-Notification-indgovtjobs.webp"
    }
  },
  {
    "id": "tspsc-agriculture-officer-notification",
    "title": "TSPSC Agriculture Officer Notification 2023 Apply Online | 148 Vacancies",
    "org": "TSPSC Agriculture Officer",
    "shortOrg": "TSPSC Agriculture Officer",
    "posts": "Telangana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Telangana State Government Recruitment",
    "state": "telangana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://websitenew.tspsc.gov.in/preview/DIRECTRECRUITMENTNOTI/27-2022-AGRICULTURE-OFFICER-NOTIFICATION20221228215456.pdf",
      "notificationUrl": "https://websitenew.tspsc.gov.in/preview/DIRECTRECRUITMENTNOTI/27-2022-AGRICULTURE-OFFICER-NOTIFICATION20221228215456.pdf",
      "websiteUrl": "https://websitenew.tspsc.gov.in/preview/DIRECTRECRUITMENTNOTI/27-2022-AGRICULTURE-OFFICER-NOTIFICATION20221228215456.pdf"
    }
  },
  {
    "id": "tspsc-group-4-notification",
    "title": "TSPSC Group 4 Jobs 2023 Apply Online | 8039 Telangana Job Vacancies",
    "org": "TSPSC Group 4 Jobs 2023 Apply Online | 8039 Telangana Job Vacancies",
    "shortOrg": "TSPSC Group 4 Jobs 2023 Apply ",
    "posts": "Telangana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Telangana State Government Recruitment",
    "state": "telangana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIuNDZPHl_Y8zPKtyvBJ4ktPkjABfxNizPwpzaCJD10S0qS775uiwxORMvLAmimO__vnF6ZlMPxEgCrJkummfwjjNw9iOQvHTDEc2jZa39Kj3zaXVrNoe727R6isRZCv5_wkAH89-ASGWeY6zZVWRu8HiLPuWMAGSqx01Av6QKXVSwKX8vyi3WQG1l/s400/TSPSC-Group-IV-indgovtjobs.webp",
      "notificationUrl": "https://websitenew.tspsc.gov.in/preview/DIRECTRECRUITMENTNOTI/GROUP-IV-2022%20NOTIFICATION%20-%20WITHOUT%20POST%20CODES20221230234213.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIuNDZPHl_Y8zPKtyvBJ4ktPkjABfxNizPwpzaCJD10S0qS775uiwxORMvLAmimO__vnF6ZlMPxEgCrJkummfwjjNw9iOQvHTDEc2jZa39Kj3zaXVrNoe727R6isRZCv5_wkAH89-ASGWeY6zZVWRu8HiLPuWMAGSqx01Av6QKXVSwKX8vyi3WQG1l/s400/TSPSC-Group-IV-indgovtjobs.webp"
    }
  },
  {
    "id": "tspsc-hostel-welfare-officer",
    "title": "TSPSC Hostel Welfare Officer Recruitment 2023 Apply Online | 581 Vacancies",
    "org": "TSPSC Hostel Welfare Officer",
    "shortOrg": "TSPSC Hostel Welfare Officer",
    "posts": "Telangana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Telangana State Government Recruitment",
    "state": "telangana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://websitenew.tspsc.gov.in/preview/DIRECTRECRUITMENTNOTI/HWO-NOTFN-25-202220221224111924.pdf",
      "notificationUrl": "https://websitenew.tspsc.gov.in/preview/DIRECTRECRUITMENTNOTI/HWO-NOTFN-25-202220221224111924.pdf",
      "websiteUrl": "https://websitenew.tspsc.gov.in/preview/DIRECTRECRUITMENTNOTI/HWO-NOTFN-25-202220221224111924.pdf"
    }
  },
  {
    "id": "tspsc-veterinary-assistant-surgeon",
    "title": "TSPSC Veterinary Assistant Surgeon 2023 Apply Online | 185 Vacancies",
    "org": "TSPSC Veterinary Assistant Surgeon 2023 Apply Online | 185 Vacancies",
    "shortOrg": "TSPSC Veterinary Assistant Sur",
    "posts": "Telangana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Telangana State Government Recruitment",
    "state": "telangana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://websitenew.tspsc.gov.in/preview/DIRECTRECRUITMENTNOTI/23-2022-VETERINARY-ASSISTANT-SURGEON-NOTIFICATION20221222220415.pdf",
      "notificationUrl": "https://websitenew.tspsc.gov.in/preview/DIRECTRECRUITMENTNOTI/23-2022-VETERINARY-ASSISTANT-SURGEON-NOTIFICATION20221222220415.pdf",
      "websiteUrl": "https://websitenew.tspsc.gov.in/preview/DIRECTRECRUITMENTNOTI/23-2022-VETERINARY-ASSISTANT-SURGEON-NOTIFICATION20221222220415.pdf"
    }
  },
  {
    "id": "telangana-group-2-notification",
    "title": "Telangana Group 2 Notification 2023 Apply Online | 783 Vacancies",
    "org": "Telangana Group 2",
    "shortOrg": "Telangana Group 2",
    "posts": "Telangana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Telangana State Government Recruitment",
    "state": "telangana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5d8dRfeId9dUjzk4OaZ_BB0UIeF3cmVl-tXHmOxprCf_y_mE887XOKnYFzfg-WD3NAU8t01QXu78fMx8xknQWxG42ombERTQiARiEK0NkoLPa2lNaoKQJoJIf2Yk-H8hBfbbr3wKIDoNh6TT3iw2u4Au8N9hpeSWduJ0aR_6yXSm21oZfY59Si6Qq/s400/TSPSC-Group-II-indgovtjobs.webp",
      "notificationUrl": "https://websitenew.tspsc.gov.in/preview/PRESSNOTE/web%20Note%20-%20GROUP%20II20221229235258.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5d8dRfeId9dUjzk4OaZ_BB0UIeF3cmVl-tXHmOxprCf_y_mE887XOKnYFzfg-WD3NAU8t01QXu78fMx8xknQWxG42ombERTQiARiEK0NkoLPa2lNaoKQJoJIf2Yk-H8hBfbbr3wKIDoNh6TT3iw2u4Au8N9hpeSWduJ0aR_6yXSm21oZfY59Si6Qq/s400/TSPSC-Group-II-indgovtjobs.webp"
    }
  },
  {
    "id": "tspsc-engineer-notification",
    "title": "TSPSC Engineering Notification 2022 Apply Online 1540 AEE Vacancies",
    "org": "TSPSC Engineering",
    "shortOrg": "TSPSC Engineering",
    "posts": "Telangana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Telangana State Government Recruitment",
    "state": "telangana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjle9SeRsp0l6L7Vfq12A4WaG3UZ2Kz4cyZ_P4qnWDGJqHqCDqLYbzbP6btZfmT1Tn0N8ul3YFnO3p0FzFAa1zzcbZkTNriisD6JNv-jlxs4haypUZHL89yIyRJLrHyJQP5gOxnz5o-LDs10naS8FoOfVPV9cFrh4kzVEQYVMwOTLN_5YzbfJDOKtox/s400/TSPSC-AEE-indgovtjobs.webp",
      "notificationUrl": "https://www.tspsc.gov.in/preview/PRESSNOTE/AEE-WEBNOTE20220903184823.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjle9SeRsp0l6L7Vfq12A4WaG3UZ2Kz4cyZ_P4qnWDGJqHqCDqLYbzbP6btZfmT1Tn0N8ul3YFnO3p0FzFAa1zzcbZkTNriisD6JNv-jlxs4haypUZHL89yIyRJLrHyJQP5gOxnz5o-LDs10naS8FoOfVPV9cFrh4kzVEQYVMwOTLN_5YzbfJDOKtox/s400/TSPSC-AEE-indgovtjobs.webp"
    }
  },
  {
    "id": "police-jobs-vacancy",
    "title": "Latest Police Jobs 2026 (1000+ New Vacancies Open)",
    "org": "Latest Police Jobs 2026 (1000+ New Vacancies Open)",
    "shortOrg": "Latest Police Jobs 2026 (1000+",
    "posts": "Telangana State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Telangana State Government Recruitment",
    "state": "telangana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2014/06/police-jobs-vacancy.html",
      "notificationUrl": "https://rozgardwaar.com/2014/06/police-jobs-vacancy.html",
      "websiteUrl": "https://rozgardwaar.com/2014/06/police-jobs-vacancy.html"
    }
  },
  {
    "id": "tslprb-police-constable-recruitment",
    "title": "TSLPRB Police Constable Recruitment 2026: Apply Online for 7112 Constable, Fire Fighter, Warder Posts",
    "org": "TSLPRB Police Constable",
    "shortOrg": "TSLPRB Police Constable",
    "posts": "Constable, Fire Fighter, Warder",
    "vacancies": 7112,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Telangana State Government Recruitment",
    "state": "telangana",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1RM9kgJsGS742BKLs_HCUsm395RegRMJ3/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1RM9kgJsGS742BKLs_HCUsm395RegRMJ3/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1RM9kgJsGS742BKLs_HCUsm395RegRMJ3/view?usp=sharing"
    }
  },
  {
    "id": "arunachal-pradesh-public-service",
    "title": "Arunachal Pradesh Govt Jobs 2026 - Latest Notifications List",
    "org": "Arunachal Pradesh Govt Jobs 2026 - Latest",
    "shortOrg": "Arunachal Pradesh Govt Jobs 20",
    "posts": "Andhra Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Andhra Pradesh State Government Recruitment",
    "state": "andhra-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2014/03/arunachal-pradesh-public-service.html",
      "notificationUrl": "https://rozgardwaar.com/2014/03/arunachal-pradesh-public-service.html",
      "websiteUrl": "https://rozgardwaar.com/2014/03/arunachal-pradesh-public-service.html"
    }
  },
  {
    "id": "govt-jobs-in-ap-andhra-pradesh-appsc",
    "title": "AP Govt Jobs 2026 – Latest Andhra Pradesh Job Notifications List",
    "org": "AP Govt Jobs 2026 – Latest Andhra Pradesh Job",
    "shortOrg": "AP Govt Jobs 2026 – Latest And",
    "posts": "Andhra Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Andhra Pradesh State Government Recruitment",
    "state": "andhra-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://psc.ap.gov.in/",
      "notificationUrl": "https://rozgardwaar.com/2013/09/govt-jobs-in-ap-andhra-pradesh-appsc.html",
      "websiteUrl": "https://psc.ap.gov.in/"
    }
  },
  {
    "id": "appsc-welfare-organiser-recruitment",
    "title": "APPSC Welfare Organiser Recruitment 2025 Apply Online for 10 Posts, Salary up to Rs.80910 | Last Date 29th October",
    "org": "APPSC Welfare Organiser",
    "shortOrg": "APPSC Welfare Organiser",
    "posts": "Andhra Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Andhra Pradesh State Government Recruitment",
    "state": "andhra-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://psc.ap.gov.in/Documents/NotificationDocuments/WelfareOrganiser_Notification_292025_24092025.pdf",
      "notificationUrl": "https://psc.ap.gov.in/Documents/NotificationDocuments/WelfareOrganiser_Notification_292025_24092025.pdf",
      "websiteUrl": "https://psc.ap.gov.in/Documents/NotificationDocuments/WelfareOrganiser_Notification_292025_24092025.pdf"
    }
  },
  {
    "id": "appsc-jao-sa-ja-recruitment",
    "title": "APPSC JAO SA JA Recruitment 2025 Apply Online for 11 Posts, Salary up to Rs. 127480 | Last Date 29th October",
    "org": "APPSC JAO SA JA",
    "shortOrg": "APPSC JAO SA JA",
    "posts": "Andhra Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Andhra Pradesh State Government Recruitment",
    "state": "andhra-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://psc.ap.gov.in/Documents/NotificationDocuments/JAO_SA_JA_Notification_272025_24092025.pdf",
      "notificationUrl": "https://psc.ap.gov.in/Documents/NotificationDocuments/JAO_SA_JA_Notification_272025_24092025.pdf",
      "websiteUrl": "https://psc.ap.gov.in/Documents/NotificationDocuments/JAO_SA_JA_Notification_272025_24092025.pdf"
    }
  },
  {
    "id": "appsc-recruitment",
    "title": "APPSC Recruitment 2025 – 10 Thanedar Vacancies, Notification, Online Form",
    "org": "APPSC",
    "shortOrg": "APPSC",
    "posts": "Andhra Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Andhra Pradesh State Government Recruitment",
    "state": "andhra-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://psc.ap.gov.in/Documents/NotificationDocuments/ThanedarNotification_132025_09092025.pdf",
      "notificationUrl": "https://psc.ap.gov.in/Documents/NotificationDocuments/ThanedarNotification_132025_09092025.pdf",
      "websiteUrl": "https://psc.ap.gov.in/Documents/NotificationDocuments/ThanedarNotification_132025_09092025.pdf"
    }
  },
  {
    "id": "appsc-assistant-engineer-recruitment",
    "title": "APPSC Assistant Engineer Recruitment 2025 - 166 Posts, Notification, Online Form,",
    "org": "APPSC Assistant Engineer",
    "shortOrg": "APPSC Assistant Engineer",
    "posts": "Andhra Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Andhra Pradesh State Government Recruitment",
    "state": "andhra-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://appsc.gov.in/upload/P69977_RECINS001/advtaewebsite_20250509_221146.pdf",
      "notificationUrl": "https://appsc.gov.in/upload/P69977_RECINS001/advtaewebsite_20250509_221146.pdf",
      "websiteUrl": "https://appsc.gov.in/upload/P69977_RECINS001/advtaewebsite_20250509_221146.pdf"
    }
  },
  {
    "id": "arunachal-pradesh-psc-jobs",
    "title": "Arunachal Pradesh PSC Jobs 2024: Apply Online for 140 Vacancies, Notification",
    "org": "Arunachal Pradesh PSC Jobs 2024: Apply Online for 140 Vacancies,",
    "shortOrg": "Arunachal Pradesh PSC Jobs 202",
    "posts": "Andhra Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Andhra Pradesh State Government Recruitment",
    "state": "andhra-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://appsc.gov.in/upload/RECINS001/APPSCCE2024_Notification_1compressed_1_20241010_230934.pdf",
      "notificationUrl": "https://appsc.gov.in/upload/RECINS001/APPSCCE2024_Notification_1compressed_1_20241010_230934.pdf",
      "websiteUrl": "https://appsc.gov.in/upload/RECINS001/APPSCCE2024_Notification_1compressed_1_20241010_230934.pdf"
    }
  },
  {
    "id": "appsc-lecturer-recruitment",
    "title": "APPSC Lecturer Recruitment 2024: Apply Online for 25 Vacancies",
    "org": "APPSC Lecturer",
    "shortOrg": "APPSC Lecturer",
    "posts": "Andhra Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Andhra Pradesh State Government Recruitment",
    "state": "andhra-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://appsc.gov.in/upload/P13065_RECINS001/Advertisement-_Lecturer_(DIET).pdf",
      "notificationUrl": "https://appsc.gov.in/upload/P13065_RECINS001/Advertisement-_Lecturer_(DIET).pdf",
      "websiteUrl": "https://appsc.gov.in/upload/P13065_RECINS001/Advertisement-_Lecturer_(DIET).pdf"
    }
  },
  {
    "id": "appsc-gdmo-recruitment",
    "title": "APPSC GDMO Recruitment 2024: 55 Vacancies, Notification, Online Form",
    "org": "APPSC GDMO",
    "shortOrg": "APPSC GDMO",
    "posts": "Andhra Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Andhra Pradesh State Government Recruitment",
    "state": "andhra-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://appsc.gov.in/upload/P85767_RECINS001/GDMO_advertisement.pdf",
      "notificationUrl": "https://appsc.gov.in/upload/P85767_RECINS001/GDMO_advertisement.pdf",
      "websiteUrl": "https://appsc.gov.in/upload/P85767_RECINS001/GDMO_advertisement.pdf"
    }
  },
  {
    "id": "andhra-pradesh-police-recruitment-2013",
    "title": "Andhra Pradesh Police Recruitment 2023 Apply Online (411 Sub Inspector Vacancies)",
    "org": "Andhra Pradesh Police",
    "shortOrg": "Andhra Pradesh Police",
    "posts": "Andhra Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Andhra Pradesh State Government Recruitment",
    "state": "andhra-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1xF3t3tyI3KeJEnyyzFxUR9ESkn6cwSb8/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1xF3t3tyI3KeJEnyyzFxUR9ESkn6cwSb8/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1xF3t3tyI3KeJEnyyzFxUR9ESkn6cwSb8/view?usp=sharing"
    }
  },
  {
    "id": "ap-police-recruitment",
    "title": "AP Police Recruitment 2019 Apply Online 50 Assistant Public Prosecutor Vacancies",
    "org": "AP Police",
    "shortOrg": "AP Police",
    "posts": "Andhra Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Andhra Pradesh State Government Recruitment",
    "state": "andhra-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1w7ZRKF91WLpZZCgAXm4VItFdG9PgR0o0/",
      "notificationUrl": "https://drive.google.com/file/d/1w7ZRKF91WLpZZCgAXm4VItFdG9PgR0o0/",
      "websiteUrl": "https://drive.google.com/file/d/1w7ZRKF91WLpZZCgAXm4VItFdG9PgR0o0/"
    }
  },
  {
    "id": "hpcl-refineries-division-recruitment",
    "title": "HPCL Refineries Division Recruitment 2026: Apply Online for 250 GAT Vacancies | Last Date 10.03.2026",
    "org": "HPCL Refineries Division",
    "shortOrg": "HPCL Refineries Division",
    "posts": "GAT",
    "vacancies": 250,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Andhra Pradesh State Government Recruitment",
    "state": "andhra-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.hindustanpetroleum.com/documents/pdf/Advertisement%20of%20%20HPCL%20GAT%20-%20Refineries%20Division%20FY26-27.pdf",
      "notificationUrl": "https://www.hindustanpetroleum.com/documents/pdf/Advertisement%20of%20%20HPCL%20GAT%20-%20Refineries%20Division%20FY26-27.pdf",
      "websiteUrl": "https://www.hindustanpetroleum.com/documents/pdf/Advertisement%20of%20%20HPCL%20GAT%20-%20Refineries%20Division%20FY26-27.pdf"
    }
  },
  {
    "id": "top-best-government-jobs",
    "title": "Top Government Jobs in India: Highest Paying Vacancies List – January 2025",
    "org": "Top Government Jobs in India: Highest Paying Vacancies List – January 2025",
    "shortOrg": "Top Government Jobs in India: ",
    "posts": "Kerala State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Kerala State Government Recruitment",
    "state": "kerala",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5khuYz8n5aMMM-JHVsnuE3UHTg-L3dRZ42rvRIZ1OjVsxVaWBCJwdSzv7P3zAJreRtslW8e9Y7Io2W_903_ktUoPBMPuiCpLCsKInAaUDBIcB7DhgcpCBNXX1z3UG599M8zmx-yonwR9nl8TeG3MUI74_IdFIjiNMFrhk0P0jnceC_AOOcvPahjZ8wnQ/s1600/Best%20Govt%20Jobs.png",
      "notificationUrl": "https://rozgardwaar.com/2024/09/top-best-government-jobs.html",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5khuYz8n5aMMM-JHVsnuE3UHTg-L3dRZ42rvRIZ1OjVsxVaWBCJwdSzv7P3zAJreRtslW8e9Y7Io2W_903_ktUoPBMPuiCpLCsKInAaUDBIcB7DhgcpCBNXX1z3UG599M8zmx-yonwR9nl8TeG3MUI74_IdFIjiNMFrhk0P0jnceC_AOOcvPahjZ8wnQ/s1600/Best%20Govt%20Jobs.png"
    }
  },
  {
    "id": "krfb-recruitment",
    "title": "KRFB Recruitment 2022 Apply Online 117 Engineer, Accountant Vacancies",
    "org": "KRFB",
    "shortOrg": "KRFB",
    "posts": "Kerala State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Kerala State Government Recruitment",
    "state": "kerala",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjd144wPf5s-DYDVTywLJ1Hyy6GgRArt5ZNAy39SOum9D3PjkeQQ0eDuW62fZIcBdtaGufiB_f7zg_r5riukIniF2jiRzBw9qBxHYcy0iexYDQqgivclsHxfbLyGK4SHDGmS_oX1rcyZzH1zw4lwD-RHoiS5-QVnjSNbEUNCSXt42wFCdjfCerAzK0w/s400/KRFB%20Recruitment%202022%20indgovtjobs.webp",
      "notificationUrl": "https://recruitopen.com/cmd/krfb3/Notification.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjd144wPf5s-DYDVTywLJ1Hyy6GgRArt5ZNAy39SOum9D3PjkeQQ0eDuW62fZIcBdtaGufiB_f7zg_r5riukIniF2jiRzBw9qBxHYcy0iexYDQqgivclsHxfbLyGK4SHDGmS_oX1rcyZzH1zw4lwD-RHoiS5-QVnjSNbEUNCSXt42wFCdjfCerAzK0w/s400/KRFB%20Recruitment%202022%20indgovtjobs.webp"
    }
  },
  {
    "id": "kerala-postal-circle-recruitment-2013",
    "title": "Kerala Post Office Recruitment 2021 Apply 95 Assistant, Postman, Mail Guard, MTS Vacancies",
    "org": "Kerala Post Office",
    "shortOrg": "Kerala Post Office",
    "posts": "Kerala State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Kerala State Government Recruitment",
    "state": "kerala",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1qnfdHLqqKbxXPgIfiVL3Sp6WIt11UfFC/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1qnfdHLqqKbxXPgIfiVL3Sp6WIt11UfFC/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1qnfdHLqqKbxXPgIfiVL3Sp6WIt11UfFC/view?usp=sharing"
    }
  },
  {
    "id": "kerala-psc-2015",
    "title": "Kerala PSC 2015 Apply Online - Assistant Professors",
    "org": "Kerala PSC 2015 Apply Online - Assistant Professors",
    "shortOrg": "Kerala PSC 2015 Apply Online -",
    "posts": "Kerala State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Kerala State Government Recruitment",
    "state": "kerala",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://www.keralapsc.gov.in/index.php?option=com_docman&amp;task=doc_view&amp;gid=17363&amp;Itemid=15",
      "notificationUrl": "https://rozgardwaar.com/2014/12/kerala-psc-2015.html",
      "websiteUrl": "http://www.keralapsc.gov.in/index.php?option=com_docman&amp;task=doc_view&amp;gid=17363&amp;Itemid=15"
    }
  },
  {
    "id": "indian-navy-10-2-btech-entry",
    "title": "Join Indian Navy 10+2 B.Tech Recruitment 2026 – Apply Online for 44 Executive & Technical Vacancies",
    "org": "Join Indian Navy 10+2 B.Tech",
    "shortOrg": "Join Indian Navy 10+2 B.Tech",
    "posts": "Executive & Technical",
    "vacancies": 44,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Kerala State Government Recruitment",
    "state": "kerala",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1oCzuEUiWIZPBDrHG1qIk0n16D-Bbzb0-/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1oCzuEUiWIZPBDrHG1qIk0n16D-Bbzb0-/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1oCzuEUiWIZPBDrHG1qIk0n16D-Bbzb0-/view?usp=sharing"
    }
  },
  {
    "id": "beml-security-guard-fire-service",
    "title": "BEML Security Guard & Fire Service Recruitment 2025 (56 Posts) Apply Online | Last Date 17 September",
    "org": "BEML Security Guard & Fire Service",
    "shortOrg": "BEML Security Guard & Fire Ser",
    "posts": "Kerala State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Kerala State Government Recruitment",
    "state": "kerala",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://cbtexam.bemlindia.in/PDF/KP_S_19_2025.pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "beml-assistant-officer-security-guard",
    "title": "BEML Assistant Officer and Other Posts Vacancy 2025: Apply Online for 20 Vacancies",
    "org": "BEML Assistant Officer and Other Posts",
    "shortOrg": "BEML Assistant Officer and Oth",
    "posts": "Kerala State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Kerala State Government Recruitment",
    "state": "kerala",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1tsFizg1fwkNywVKaJ79LLO5umHrCB_qG/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1tsFizg1fwkNywVKaJ79LLO5umHrCB_qG/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1tsFizg1fwkNywVKaJ79LLO5umHrCB_qG/view?usp=sharing"
    }
  },
  {
    "id": "high-court-of-kerala-recruitment-2025",
    "title": "High Court of Kerala Recruitment 2025 Online Form for 06 Higher Judicial Service Posts",
    "org": "High Court of Kerala",
    "shortOrg": "High Court of Kerala",
    "posts": "Higher Judicial Service",
    "vacancies": 6,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Kerala State Government Recruitment",
    "state": "kerala",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1G9jybH8DlDD6GsVZSvUOu6Ee3YRPd5XU/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1G9jybH8DlDD6GsVZSvUOu6Ee3YRPd5XU/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1G9jybH8DlDD6GsVZSvUOu6Ee3YRPd5XU/view?usp=sharing"
    }
  },
  {
    "id": "high-court-of-kerala-recruitment",
    "title": "High Court of Kerala Recruitment 2021 Apply Online | 55 Assistant Vacancies",
    "org": "High Court of Kerala",
    "shortOrg": "High Court of Kerala",
    "posts": "Kerala State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Kerala State Government Recruitment",
    "state": "kerala",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5DaJtiSLrhm-ImQhudUiP6T8pVjXDltOL8hw4uzOJTiIAMrYgNI2K6r-9b3RGUV3De_dP6XTu7Bjbay1gbDDKQ1KF4kiAyizMh_mmaEtUeBPnhNGqwe_6Z6aowv-sWtDL5f7fkroB6xo/s595/High-Court-Kerala-Jobs-2021-indgovtjobs.png",
      "notificationUrl": "https://drive.google.com/file/d/19vLCbYMrF7SazcSiYP9yOkvSZkiitgg3/view?usp=sharing",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5DaJtiSLrhm-ImQhudUiP6T8pVjXDltOL8hw4uzOJTiIAMrYgNI2K6r-9b3RGUV3De_dP6XTu7Bjbay1gbDDKQ1KF4kiAyizMh_mmaEtUeBPnhNGqwe_6Z6aowv-sWtDL5f7fkroB6xo/s595/High-Court-Kerala-Jobs-2021-indgovtjobs.png"
    }
  },
  {
    "id": "high-court-of-kerala-jobs-2014-section",
    "title": "High Court of Kerala Recruitment 2015 Apply Online - District and Sessions Judge",
    "org": "High Court of Kerala",
    "shortOrg": "High Court of Kerala",
    "posts": "Kerala State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Kerala State Government Recruitment",
    "state": "kerala",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://hckrecruitment.nic.in/app_notif.php#",
      "notificationUrl": "https://rozgardwaar.com/2014/02/high-court-of-kerala-jobs-2014-section.html",
      "websiteUrl": "http://hckrecruitment.nic.in/app_notif.php#"
    }
  },
  {
    "id": "kerala-administrative-tribunal-jobs-2014",
    "title": "Kerala Administrative Tribunal Jobs 2014 Judicial Member, Administrative Member",
    "org": "Kerala Administrative Tribunal Jobs 2014 Judicial Member, Administrative Member",
    "shortOrg": "Kerala Administrative Tribunal",
    "posts": "Kerala State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Kerala State Government Recruitment",
    "state": "kerala",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://prd.kerala.gov.in/)",
      "notificationUrl": "https://rozgardwaar.com/2014/04/kerala-administrative-tribunal-jobs-2014.html",
      "websiteUrl": "http://prd.kerala.gov.in/)"
    }
  },
  {
    "id": "high-court-of-kerala-recruitment-2013",
    "title": "High Court of Kerala Recruitment 2013 Personal Assistant",
    "org": "High Court of Kerala",
    "shortOrg": "High Court of Kerala",
    "posts": "Kerala State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Kerala State Government Recruitment",
    "state": "kerala",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrBBh27jiLKOL91v3jEZipj5BKSHjSV35Tv67jeP7mZxM0kHI6LWNP1DQY7qyol8LXZ_FRX54-mp1ZhjMd_hD-ePp6lE5l_xxJxjjKikuZ497G8N7ENhxg_7qRzK1iEnOkkdygqM8m8ig/s1600-h/Kerala%252520High%252520Court%25255B4%25255D.jpg",
      "notificationUrl": "http://hckrecruitment.nic.in/pdf/paj_notif1.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrBBh27jiLKOL91v3jEZipj5BKSHjSV35Tv67jeP7mZxM0kHI6LWNP1DQY7qyol8LXZ_FRX54-mp1ZhjMd_hD-ePp6lE5l_xxJxjjKikuZ497G8N7ENhxg_7qRzK1iEnOkkdygqM8m8ig/s1600-h/Kerala%252520High%252520Court%25255B4%25255D.jpg"
    }
  },
  {
    "id": "gujarat-psc-assistant-engineer",
    "title": "Gujarat PSC Assistant Engineer Recruitment 2026 – Apply Online for 235 Posts | Last Date 19-06-2026",
    "org": "Gujarat PSC Assistant Engineer",
    "shortOrg": "Gujarat PSC Assistant Engineer",
    "posts": "Gujarat State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Gujarat State Government Recruitment",
    "state": "gujarat",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "19-06-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://ojas.gujarat.gov.in/AdvtDetailFiles/GPSC_202627_24.pdf",
      "notificationUrl": "https://ojas.gujarat.gov.in/AdvtDetailFiles/GPSC_202627_24.pdf",
      "websiteUrl": "https://ojas.gujarat.gov.in/AdvtDetailFiles/GPSC_202627_24.pdf"
    }
  },
  {
    "id": "gwssb-assistant-engineer-recruitment",
    "title": "GWSSB Assistant Engineer Recruitment 2026 Apply Online (205 Posts)",
    "org": "GWSSB Assistant Engineer",
    "shortOrg": "GWSSB Assistant Engineer",
    "posts": "Gujarat State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Gujarat State Government Recruitment",
    "state": "gujarat",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://gpsc.gujarat.gov.in/AdvertisementDetail?no=2344&amp;tab=Advertisement",
      "notificationUrl": "https://rozgardwaar.com/2026/05/gwssb-assistant-engineer-recruitment.html",
      "websiteUrl": "https://gpsc.gujarat.gov.in/AdvertisementDetail?no=2344&amp;tab=Advertisement"
    }
  },
  {
    "id": "gpsc-advt-no-5-2026",
    "title": "GPSC Advt No 5/2026-27 Online Form for 213 Class I & Class II Posts | Last Date 16 April 2026",
    "org": "GPSC",
    "shortOrg": "GPSC",
    "posts": "Class I & Class II",
    "vacancies": 213,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Gujarat State Government Recruitment",
    "state": "gujarat",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://gpsc.gujarat.gov.in/Documents/AdvertismentDocument/ADA-05-202627.pdf",
      "notificationUrl": "https://gpsc.gujarat.gov.in/Documents/AdvertismentDocument/ADA-05-202627.pdf",
      "websiteUrl": "https://gpsc.gujarat.gov.in/Documents/AdvertismentDocument/ADA-05-202627.pdf"
    }
  },
  {
    "id": "gpsc-accounts-officer-recruitment-2026",
    "title": "GPSC Accounts Officer Recruitment 2026 Online Form 06 Posts | Last Date 15 April 2026",
    "org": "GPSC Accounts Officer",
    "shortOrg": "GPSC Accounts Officer",
    "posts": "Gujarat State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Gujarat State Government Recruitment",
    "state": "gujarat",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/16qa9UgJzbehYW9Q_NiEDR9oL3q1hnX1G/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/16qa9UgJzbehYW9Q_NiEDR9oL3q1hnX1G/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/16qa9UgJzbehYW9Q_NiEDR9oL3q1hnX1G/view?usp=sharing"
    }
  },
  {
    "id": "gpsc-state-tax-inspector-recruitment",
    "title": "GPSC State Tax Inspector Recruitment 2025 Apply Online for 323 Posts | Last Date 17th October",
    "org": "GPSC State Tax Inspector",
    "shortOrg": "GPSC State Tax Inspector",
    "posts": "Gujarat State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Gujarat State Government Recruitment",
    "state": "gujarat",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/14Ao0eyjHn4f8Jkr-G57MDzu6vhxxq--Z/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/14Ao0eyjHn4f8Jkr-G57MDzu6vhxxq--Z/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/14Ao0eyjHn4f8Jkr-G57MDzu6vhxxq--Z/view?usp=sharing"
    }
  },
  {
    "id": "goa-public-service-commission",
    "title": "Goa PSC Recruitment 2025 – 38 Junior Scale Officer Posts, Online Form, Notification",
    "org": "Goa PSC",
    "shortOrg": "Goa PSC",
    "posts": "Gujarat State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Gujarat State Government Recruitment",
    "state": "gujarat",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1SFHJjSg4U5UhXbYOv2BgCCK0wor5noJZ/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1SFHJjSg4U5UhXbYOv2BgCCK0wor5noJZ/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1SFHJjSg4U5UhXbYOv2BgCCK0wor5noJZ/view?usp=sharing"
    }
  },
  {
    "id": "gpsc-recruitment-gujarat",
    "title": "GPSC Recruitment 2025: Apply Online for 111 Officer, Lecturer, Nurse & Steno Posts",
    "org": "GPSC",
    "shortOrg": "GPSC",
    "posts": "Officer, Lecturer, Nurse & Steno",
    "vacancies": 111,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Gujarat State Government Recruitment",
    "state": "gujarat",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://gpsc.gujarat.gov.in/dashboard?stage=Advertisement",
      "notificationUrl": "https://rozgardwaar.com/2015/11/GPSC-Recruitment-Gujarat.html",
      "websiteUrl": "https://gpsc.gujarat.gov.in/dashboard?stage=Advertisement"
    }
  },
  {
    "id": "goa-psc-jobs",
    "title": "Goa PSC Recruitment 2024: Apply Online, 25 Various Posts",
    "org": "Goa PSC",
    "shortOrg": "Goa PSC",
    "posts": "Gujarat State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Gujarat State Government Recruitment",
    "state": "gujarat",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://cbes.goa.gov.in",
      "notificationUrl": "https://drive.google.com/file/d/1Q2ZoAz0P9aUzm5PqpqepOY_RsAac1FT3/",
      "websiteUrl": "https://cbes.goa.gov.in"
    }
  },
  {
    "id": "gsssb-horticulture-assistant",
    "title": "GSSSB Horticulture Assistant Recruitment 2026 - Apply Online for 100 Posts | Last Date 17-08-2026",
    "org": "GSSSB Horticulture Assistant",
    "shortOrg": "GSSSB Horticulture Assistant",
    "posts": "Gujarat State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Gujarat State Government Recruitment",
    "state": "gujarat",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "17-08-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1adKnx_Dl1FLNb1xWVj7KCSR-vg8V-OyD/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1adKnx_Dl1FLNb1xWVj7KCSR-vg8V-OyD/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1adKnx_Dl1FLNb1xWVj7KCSR-vg8V-OyD/view?usp=sharing"
    }
  },
  {
    "id": "agriculture-govt-jobs",
    "title": "Latest Agriculture Govt Jobs 2026 (100+ New Vacancies Open)",
    "org": "Latest Agriculture Govt Jobs 2026 (100+ New Vacancies Open)",
    "shortOrg": "Latest Agriculture Govt Jobs 2",
    "posts": "Gujarat State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Gujarat State Government Recruitment",
    "state": "gujarat",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2016/05/Agriculture-Govt-Jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2016/05/Agriculture-Govt-Jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2016/05/Agriculture-Govt-Jobs.html"
    }
  },
  {
    "id": "gsssb-sub-accountant-sub-auditor",
    "title": "GSSSB Sub Accountant Sub Auditor Vacancy 2026 – Apply Online for 776 Posts | Last Date 30-06-2026",
    "org": "GSSSB Sub Accountant Sub Auditor",
    "shortOrg": "GSSSB Sub Accountant Sub Audit",
    "posts": "Gujarat State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Gujarat State Government Recruitment",
    "state": "gujarat",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "30-06-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://gsssb.gujarat.gov.in/ViewFile?fileName=GU8WCUhfpjw1rxBy8x4rt9beNtC8aYB6OGWwhXWnTbpCRhg2qtJwqMcULzdSRxi80VESd81KUFiY9jqoom4%E2%9C%A4v7YPPXDSDDezi8u4Dm2%E2%9C%A4zVTBpgxoN0d1ARS1U%E2%9C%A4xu2WcA%E2%9C%BFQ8M0msBLK9B7%E2%9C%A4tCVU3xfw%E2%99%AC%E2%99%AC",
      "notificationUrl": "https://ojas.gujarat.gov.in/ojas1/AdvtDetailFiles/GSSSB_202526_366.pdf",
      "websiteUrl": "https://gsssb.gujarat.gov.in/ViewFile?fileName=GU8WCUhfpjw1rxBy8x4rt9beNtC8aYB6OGWwhXWnTbpCRhg2qtJwqMcULzdSRxi80VESd81KUFiY9jqoom4%E2%9C%A4v7YPPXDSDDezi8u4Dm2%E2%9C%A4zVTBpgxoN0d1ARS1U%E2%9C%A4xu2WcA%E2%9C%BFQ8M0msBLK9B7%E2%9C%A4tCVU3xfw%E2%99%AC%E2%99%AC"
    }
  },
  {
    "id": "gsssb-additional-assistant-engineer",
    "title": "GSSSB Additional Assistant Engineer Recruitment 2026 – Apply Online for 110 Posts | Last Date 29-06-2026",
    "org": "GSSSB Additional Assistant Engineer",
    "shortOrg": "GSSSB Additional Assistant Eng",
    "posts": "Gujarat State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Gujarat State Government Recruitment",
    "state": "gujarat",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "29-06-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://gsssb.gujarat.gov.in/ViewFile?fileName=4naZ%E2%9C%BF8wS64TzwZ61AZrbMP4tvDBt3Mj8UPSd1xKcshu%E2%9C%BFWaUrn%E2%9C%BFrNW6aHkhivEL7eARNjmcuGPwQhYRbSrqufGIiyRn8yvjbZi%E2%9C%A4uwHfekyzofBC%E2%9C%BFqDPVGBJv2vILnbQzFvRSyatTK6jAZ1DP0ONf6bQ%E2%99%AC%E2%99%AC",
      "notificationUrl": "https://rozgardwaar.com/2026/06/gsssb-additional-assistant-engineer.html",
      "websiteUrl": "https://gsssb.gujarat.gov.in/ViewFile?fileName=4naZ%E2%9C%BF8wS64TzwZ61AZrbMP4tvDBt3Mj8UPSd1xKcshu%E2%9C%BFWaUrn%E2%9C%BFrNW6aHkhivEL7eARNjmcuGPwQhYRbSrqufGIiyRn8yvjbZi%E2%9C%A4uwHfekyzofBC%E2%9C%BFqDPVGBJv2vILnbQzFvRSyatTK6jAZ1DP0ONf6bQ%E2%99%AC%E2%99%AC"
    }
  },
  {
    "id": "jkssb-warder-recruitment",
    "title": "JKSSB Warder Recruitment 2026: Apply Online for 288 Posts | Last Date 25-08-2026",
    "org": "JKSSB Warder",
    "shortOrg": "JKSSB Warder",
    "posts": "Jammu & Kashmir State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jammu & Kashmir State Government Recruitment",
    "state": "jammu-kashmir",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "25-08-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1zkga0LSJjwhxlApdhEC-4dMZvrlfR7gE/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1zkga0LSJjwhxlApdhEC-4dMZvrlfR7gE/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1zkga0LSJjwhxlApdhEC-4dMZvrlfR7gE/view?usp=sharing"
    }
  },
  {
    "id": "jkssb-notification-4-2026",
    "title": "JKSSB Notification 4 of 2026 – Apply Online for 130 UT, Divisional & District Cadre Posts | Last Date 21-07-2026",
    "org": "JKSSB",
    "shortOrg": "JKSSB",
    "posts": "UT, Divisional & District Cadre",
    "vacancies": 130,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jammu & Kashmir State Government Recruitment",
    "state": "jammu-kashmir",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "21-07-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://jkssb.nic.in/Pdf/Advt_04OF2026_25052026.pdf",
      "notificationUrl": "https://jkssb.nic.in/Pdf/Advt_04OF2026_25052026.pdf",
      "websiteUrl": "https://jkssb.nic.in/Pdf/Advt_04OF2026_25052026.pdf"
    }
  },
  {
    "id": "jkssb-agriculture-production-finance",
    "title": "JKSSB Agriculture Production & Finance Department Recruitment 2026 Apply Online 194 Posts | Last Date 19.05.2026",
    "org": "JKSSB Agriculture Production & Finance Department",
    "shortOrg": "JKSSB Agriculture Production &",
    "posts": "Jammu & Kashmir State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jammu & Kashmir State Government Recruitment",
    "state": "jammu-kashmir",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1IiOgPD7NT2VXMCrOUN73vcAlrLu1S65R/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1IiOgPD7NT2VXMCrOUN73vcAlrLu1S65R/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1IiOgPD7NT2VXMCrOUN73vcAlrLu1S65R/view?usp=sharing"
    }
  },
  {
    "id": "jammu-and-kashmir-govt-jobs-government",
    "title": "Jammu and Kashmir Govt Jobs 2026 - Latest Notifications List",
    "org": "Jammu and Kashmir Govt Jobs 2026 - Latest",
    "shortOrg": "Jammu and Kashmir Govt Jobs 20",
    "posts": "Jammu & Kashmir State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jammu & Kashmir State Government Recruitment",
    "state": "jammu-kashmir",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2013/11/jammu-and-kashmir-govt-jobs-government.html",
      "notificationUrl": "https://rozgardwaar.com/2013/11/jammu-and-kashmir-govt-jobs-government.html",
      "websiteUrl": "https://rozgardwaar.com/2013/11/jammu-and-kashmir-govt-jobs-government.html"
    }
  },
  {
    "id": "jkpsc-veterinary-assistant-surgeon",
    "title": "JKPSC Veterinary Assistant Surgeon Recruitment 2024: Online Apply for 176 Posts",
    "org": "JKPSC Veterinary Assistant Surgeon",
    "shortOrg": "JKPSC Veterinary Assistant Sur",
    "posts": "Jammu & Kashmir State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jammu & Kashmir State Government Recruitment",
    "state": "jammu-kashmir",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUD9MK2TwUD9M5pX6AHlveOhHMhBp6r6khAlzvi5ZD8FcPZnmBO-GIWt30N20kfVqIFUPaE_MsLiVCHLWMCqLRl3knbSrTfhUnORYfKHcqYMqU91R-tckWcUOpXZj8nNMHxBor6M3KyIhhVNdgKVfwUc-iCoUZXZHMUjdGVqjQTtKXjpbRY1Cl_1BNsLI/s758/JKPSC%20Veterinary%20Assistant%20Surgeon%20Last%20date%20notice.PNG",
      "notificationUrl": "https://drive.google.com/file/d/1UALobUTu9amW78qzMVDZCBmuQ29TkPcM/view?usp=sharing",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUD9MK2TwUD9M5pX6AHlveOhHMhBp6r6khAlzvi5ZD8FcPZnmBO-GIWt30N20kfVqIFUPaE_MsLiVCHLWMCqLRl3knbSrTfhUnORYfKHcqYMqU91R-tckWcUOpXZj8nNMHxBor6M3KyIhhVNdgKVfwUc-iCoUZXZHMUjdGVqjQTtKXjpbRY1Cl_1BNsLI/s758/JKPSC%20Veterinary%20Assistant%20Surgeon%20Last%20date%20notice.PNG"
    }
  },
  {
    "id": "jkpsc-recruitment",
    "title": "JKPSC Recruitment 2024 Apply Online | Jammu Kashmir Govt Jobs | Vacancies",
    "org": "JKPSC",
    "shortOrg": "JKPSC",
    "posts": "Jammu & Kashmir State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jammu & Kashmir State Government Recruitment",
    "state": "jammu-kashmir",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1_abupHs3vTTb7c_Y2NdfuwtMSbNt4iTc/view",
      "notificationUrl": "https://drive.google.com/file/d/1_abupHs3vTTb7c_Y2NdfuwtMSbNt4iTc/view",
      "websiteUrl": "https://drive.google.com/file/d/1_abupHs3vTTb7c_Y2NdfuwtMSbNt4iTc/view"
    }
  },
  {
    "id": "city-union-bank-careers-2015",
    "title": "City Union Bank Recruitment 2023 Apply Online Manager level Vacancies",
    "org": "City Union Bank",
    "shortOrg": "City Union Bank",
    "posts": "Jammu & Kashmir State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jammu & Kashmir State Government Recruitment",
    "state": "jammu-kashmir",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.cityunionbank.com/Careers",
      "notificationUrl": "https://rozgardwaar.com/2015/01/city-union-bank-careers-2015.html",
      "websiteUrl": "https://www.cityunionbank.com/Careers"
    }
  },
  {
    "id": "sbi-channel-manager-recruitment",
    "title": "SBI Channel Manager Recruitment 2022 Apply Online 641 Vacancies",
    "org": "SBI Channel Manager",
    "shortOrg": "SBI Channel Manager",
    "posts": "Jammu & Kashmir State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jammu & Kashmir State Government Recruitment",
    "state": "jammu-kashmir",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.sbi.co.in/documents/77530/25386736/17052022_Final+ATM+Anytime+Channel+AD+17.05.2022.pdf/50f3c3eb-4a8a-c95a-9fd0-0368ad53dfa4?t=1652798432029",
      "notificationUrl": "https://www.sbi.co.in/documents/77530/25386736/17052022_Final+ATM+Anytime+Channel+AD+17.05.2022.pdf/50f3c3eb-4a8a-c95a-9fd0-0368ad53dfa4?t=1652798432029",
      "websiteUrl": "https://www.sbi.co.in/documents/77530/25386736/17052022_Final+ATM+Anytime+Channel+AD+17.05.2022.pdf/50f3c3eb-4a8a-c95a-9fd0-0368ad53dfa4?t=1652798432029"
    }
  },
  {
    "id": "ntpc-assistant-officer-recruitment",
    "title": "NTPC Assistant Officer Recruitment 2022 Apply Online (10 Vacancies)",
    "org": "NTPC Assistant Officer",
    "shortOrg": "NTPC Assistant Officer",
    "posts": "Jammu & Kashmir State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jammu & Kashmir State Government Recruitment",
    "state": "jammu-kashmir",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://careers.ntpc.co.in/main/folders/Archives/advt/Advt.%20No.%2012.22.pdf",
      "notificationUrl": "https://careers.ntpc.co.in/main/folders/Archives/advt/Advt.%20No.%2012.22.pdf",
      "websiteUrl": "https://careers.ntpc.co.in/main/folders/Archives/advt/Advt.%20No.%2012.22.pdf"
    }
  },
  {
    "id": "jkpsc-medical-officer-recruitment",
    "title": "JKPSC Medical Officer Recruitment 2022 Apply Online | 708 Medical Officer Vacancies",
    "org": "JKPSC Medical Officer",
    "shortOrg": "JKPSC Medical Officer",
    "posts": "Jammu & Kashmir State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jammu & Kashmir State Government Recruitment",
    "state": "jammu-kashmir",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1fHjBogYH5JiuHmhqIFWYiB9rKAbb_3Di/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1fHjBogYH5JiuHmhqIFWYiB9rKAbb_3Di/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1fHjBogYH5JiuHmhqIFWYiB9rKAbb_3Di/view?usp=sharing"
    }
  },
  {
    "id": "jkpsc-assistant-professor",
    "title": "JKPSC Assistant Professor Recruitment 2022 Apply Online | 182 Vacancies",
    "org": "JKPSC Assistant Professor",
    "shortOrg": "JKPSC Assistant Professor",
    "posts": "Jammu & Kashmir State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jammu & Kashmir State Government Recruitment",
    "state": "jammu-kashmir",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1SeaiPNM8B5UUSiH7JusxY5VX5DghI1eK/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1SeaiPNM8B5UUSiH7JusxY5VX5DghI1eK/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1SeaiPNM8B5UUSiH7JusxY5VX5DghI1eK/view?usp=sharing"
    }
  },
  {
    "id": "jkpsc-assistant-engineer-recruitment",
    "title": "JKPSC Assistant Engineer Recruitment 2019 Apply Online (58 Vacancies)",
    "org": "JKPSC Assistant Engineer",
    "shortOrg": "JKPSC Assistant Engineer",
    "posts": "Jammu & Kashmir State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jammu & Kashmir State Government Recruitment",
    "state": "jammu-kashmir",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://jkpsc.nic.in/pdf/Notification_AE_Electrical_April_2019.pdf",
      "notificationUrl": "http://jkpsc.nic.in/pdf/Notification_AE_Electrical_April_2019.pdf",
      "websiteUrl": "http://jkpsc.nic.in/pdf/Notification_AE_Electrical_April_2019.pdf"
    }
  },
  {
    "id": "jssc-jtglcce-recruitment",
    "title": "JSSC JTGLCCE Recruitment 2026 (611 Posts) – Notification, Online Form | Last Date 30-06-2026",
    "org": "JSSC JTGLCCE",
    "shortOrg": "JSSC JTGLCCE",
    "posts": "Jharkhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jharkhand State Government Recruitment",
    "state": "jharkhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "30-06-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1TFgHZsgXHRso25VmUzb9JaRE2HgWLRvX/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1TFgHZsgXHRso25VmUzb9JaRE2HgWLRvX/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1TFgHZsgXHRso25VmUzb9JaRE2HgWLRvX/view?usp=sharing"
    }
  },
  {
    "id": "jharkhand-government-jobs",
    "title": "Jharkhand Govt Jobs 2026 – Latest Vacancy Notifications",
    "org": "Jharkhand Govt Jobs 2026 – Latest",
    "shortOrg": "Jharkhand Govt Jobs 2026 – Lat",
    "posts": "Jharkhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jharkhand State Government Recruitment",
    "state": "jharkhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.jharkhand.gov.in/",
      "notificationUrl": "https://rozgardwaar.com/2020/01/Jharkhand-Government-Jobs.html",
      "websiteUrl": "https://www.jharkhand.gov.in/"
    }
  },
  {
    "id": "jssc-special-education-teacher",
    "title": "JSSC Special Education Teacher Recruitment 2026 (3451 Posts) Online Form, Notification | Last Date 05.02.2026",
    "org": "JSSC Special Education Teacher",
    "shortOrg": "JSSC Special Education Teacher",
    "posts": "Jharkhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jharkhand State Government Recruitment",
    "state": "jharkhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/15qcxz-DsA9mRX3o8KIU3o5vRpOZDOi3N/view?usp=sharing",
      "notificationUrl": "https://jssc.jharkhand.gov.in/sites/default/files/JIGTSEATCCE-2025-NOTICE-01.pdf",
      "websiteUrl": "https://drive.google.com/file/d/15qcxz-DsA9mRX3o8KIU3o5vRpOZDOi3N/view?usp=sharing"
    }
  },
  {
    "id": "jssc-kakshpal-recruitment-2026",
    "title": "JSSC Kakshpal Recruitment 2026 - Notification, Apply Online for 1733 Vacancies",
    "org": "JSSC Kakshpal",
    "shortOrg": "JSSC Kakshpal",
    "posts": "Jharkhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jharkhand State Government Recruitment",
    "state": "jharkhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1SdfwRy9eXY_hTr5lPOkn8X78mm2pKpLp/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1SdfwRy9eXY_hTr5lPOkn8X78mm2pKpLp/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1SdfwRy9eXY_hTr5lPOkn8X78mm2pKpLp/view?usp=sharing"
    }
  },
  {
    "id": "jssc-assistant-jailor-recruitment-2025",
    "title": "JSSC Assistant Jailor Recruitment 2025 Apply Online for 45 Vacancies | Last Date 08 December",
    "org": "JSSC Assistant Jailor",
    "shortOrg": "JSSC Assistant Jailor",
    "posts": "Jharkhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jharkhand State Government Recruitment",
    "state": "jharkhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://jssc.jharkhand.gov.in/sites/default/files/JAJCE-2025%20Adv.%20Regular.pdf",
      "notificationUrl": "https://jssc.jharkhand.gov.in/sites/default/files/JAJCE-2025%20Adv.%20Regular.pdf",
      "websiteUrl": "https://jssc.jharkhand.gov.in/sites/default/files/JAJCE-2025%20Adv.%20Regular.pdf"
    }
  },
  {
    "id": "jharkhand-combined-civil-services",
    "title": "Jharkhand Combined Civil Services Examination 2026 - Apply Online for 103 Posts",
    "org": "Jharkhand Combined Civil Services Examination 2026 - Apply Online for 103 Posts",
    "shortOrg": "Jharkhand Combined Civil Servi",
    "posts": "Jharkhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jharkhand State Government Recruitment",
    "state": "jharkhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.jpsc.gov.in/data/Advertisement_01_26_dated_29_01_2026-1.pdf",
      "notificationUrl": "https://www.jpsc.gov.in/data/Advertisement_01_26_dated_29_01_2026-1.pdf",
      "websiteUrl": "https://www.jpsc.gov.in/data/Advertisement_01_26_dated_29_01_2026-1.pdf"
    }
  },
  {
    "id": "india-post-gds-july-recruitment-2026",
    "title": "India Post GDS July Recruitment 2026 Apply Online for 23757 Posts | Last Date 21-09-2026",
    "org": "India Post GDS July",
    "shortOrg": "India Post GDS July",
    "posts": "Jharkhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jharkhand State Government Recruitment",
    "state": "jharkhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "21-09-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://indiapost.gov.in/gdsonlineengagement/pdf/descriptive-notification.pdf",
      "notificationUrl": "https://indiapost.gov.in/gdsonlineengagement/pdf/descriptive-notification.pdf",
      "websiteUrl": "https://indiapost.gov.in/gdsonlineengagement/pdf/descriptive-notification.pdf"
    }
  },
  {
    "id": "iit-dhanbad-assistant-professor",
    "title": "IIT Dhanbad Assistant Professor Recruitment 2026: Apply Online for 30 Posts | Last Date 31-08-2026",
    "org": "IIT Dhanbad Assistant Professor",
    "shortOrg": "IIT Dhanbad Assistant Professo",
    "posts": "Jharkhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jharkhand State Government Recruitment",
    "state": "jharkhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "31-08-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://fr.iitism.ac.in/assets/docs/Advt_41100212026_Dean_Fac_1_Assistant_prof30062026.pdf",
      "notificationUrl": "https://fr.iitism.ac.in/assets/docs/Advt_41100212026_Dean_Fac_1_Assistant_prof30062026.pdf",
      "websiteUrl": "https://fr.iitism.ac.in/assets/docs/Advt_41100212026_Dean_Fac_1_Assistant_prof30062026.pdf"
    }
  },
  {
    "id": "ibps-clerk-notification",
    "title": "IBPS Clerk Notification 2026 – Apply Online for 11403+ Posts | Last Date 28-08-2026",
    "org": "IBPS Clerk",
    "shortOrg": "IBPS Clerk",
    "posts": "Jharkhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jharkhand State Government Recruitment",
    "state": "jharkhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "28-08-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1nI4iq0ZSOvHIt2WcoC8l_1dl6YA72xhU/view?usp=sharing",
      "notificationUrl": "https://www.ibps.in/wp-content/uploads/Notification_CRP_CSA_XVI-Final.pdf",
      "websiteUrl": "https://drive.google.com/file/d/1nI4iq0ZSOvHIt2WcoC8l_1dl6YA72xhU/view?usp=sharing"
    }
  },
  {
    "id": "sbi-junior-associate-backlog",
    "title": "SBI Junior Associates Backlog Vacancy 2026 – Apply Online for 1538 Clerk Posts | Last Date 27-08-2026",
    "org": "SBI Junior Associates Backlog",
    "shortOrg": "SBI Junior Associates Backlog",
    "posts": "Clerk",
    "vacancies": 1538,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jharkhand State Government Recruitment",
    "state": "jharkhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "27-08-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1Mmv37XshHmjB1b9Fs9Rn3FnCMq-NIIGT/view?usp=sharing",
      "notificationUrl": "https://sbi.bank.in/webfiles/uploads/files_2627/08/JA_2026_Backlog_Detailed_Advt_ENG.pdf",
      "websiteUrl": "https://drive.google.com/file/d/1Mmv37XshHmjB1b9Fs9Rn3FnCMq-NIIGT/view?usp=sharing"
    }
  },
  {
    "id": "jharkhand-high-court-private-secretary",
    "title": "Jharkhand High Court Private Secretary Recruitment 2026 - Apply Online for 195 Posts",
    "org": "Jharkhand High Court Private Secretary",
    "shortOrg": "Jharkhand High Court Private S",
    "posts": "Jharkhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jharkhand State Government Recruitment",
    "state": "jharkhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1UcAw54Nw0xWta7bX2rEhsvCvjI0ZE4tG/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1UcAw54Nw0xWta7bX2rEhsvCvjI0ZE4tG/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1UcAw54Nw0xWta7bX2rEhsvCvjI0ZE4tG/view?usp=sharing"
    }
  },
  {
    "id": "jharkhand-high-court",
    "title": "Jharkhand High Court Recruitment 2024: 15 District Judge Posts – Apply Online by 30th November",
    "org": "Jharkhand High Court",
    "shortOrg": "Jharkhand High Court",
    "posts": "Jharkhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Jharkhand State Government Recruitment",
    "state": "jharkhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbLfkGL9kYEJrkwjFIwlFFvMunEsQfzNWhZICn2LRfCzRSn3JxgE7WoivBrILDmybzm321wvZrqW-jt_HOVYI5EbygWOVM0sL8TcVCPEhA4jEBWFsB4lK46xuwwGzadVI_1M2LvnKCu1ZzUcMIQZG4uZUgv4K1p-QD5gQbSsMLePI6_hL2yEssFs4WQQ1q/s341/High%20Court%20of%20Jharkhand.PNG",
      "notificationUrl": "https://jharkhandhighcourt.nic.in/display_pdf/recruitment/Advt_depo_typist_21022024.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbLfkGL9kYEJrkwjFIwlFFvMunEsQfzNWhZICn2LRfCzRSn3JxgE7WoivBrILDmybzm321wvZrqW-jt_HOVYI5EbygWOVM0sL8TcVCPEhA4jEBWFsB4lK46xuwwGzadVI_1M2LvnKCu1ZzUcMIQZG4uZUgv4K1p-QD5gQbSsMLePI6_hL2yEssFs4WQQ1q/s341/High%20Court%20of%20Jharkhand.PNG"
    }
  },
  {
    "id": "cgpsc-assistant-district-prosecution",
    "title": "CGPSC Assistant District Prosecution Officer Recruitment 2026 – Apply Online for 15 Posts | Last Date 21-07-2026",
    "org": "CGPSC Assistant District Prosecution Officer",
    "shortOrg": "CGPSC Assistant District Prose",
    "posts": "Chhattisgarh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chhattisgarh State Government Recruitment",
    "state": "chhattisgarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "21-07-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://psc.cg.gov.in/PDFs/advertisement/SAHAYAK_JILA_LOK_ABHIYOJAN_ADHIKARI-2026_ADVERTISEMENT%20(17-06-2026).pdf",
      "notificationUrl": "https://psc.cg.gov.in/PDFs/advertisement/SAHAYAK_JILA_LOK_ABHIYOJAN_ADHIKARI-2026_ADVERTISEMENT%20(17-06-2026).pdf",
      "websiteUrl": "https://psc.cg.gov.in/PDFs/advertisement/SAHAYAK_JILA_LOK_ABHIYOJAN_ADHIKARI-2026_ADVERTISEMENT%20(17-06-2026).pdf"
    }
  },
  {
    "id": "cgpsc-state-engineering-services-2026",
    "title": "CGPSC State Engineering Services 2026 - Apply Online for 46 Assistant Engineer Posts | Last Date 11-06-2026",
    "org": "CGPSC State Engineering Services 2026 - Apply Online for 46 Assistant Engineer Posts | Last Date 11-06-2026",
    "shortOrg": "CGPSC State Engineering Servic",
    "posts": "Assistant Engineer",
    "vacancies": 46,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chhattisgarh State Government Recruitment",
    "state": "chhattisgarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "11-06-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://psc.cg.gov.in/PDFs/advertisement/STATE_ENGINEERING_SERVICE_EXAM-2026_ADVERTISEMENT%20(08-05-2026).pdf",
      "notificationUrl": "https://psc.cg.gov.in/PDFs/advertisement/STATE_ENGINEERING_SERVICE_EXAM-2026_ADVERTISEMENT%20(08-05-2026).pdf",
      "websiteUrl": "https://psc.cg.gov.in/PDFs/advertisement/STATE_ENGINEERING_SERVICE_EXAM-2026_ADVERTISEMENT%20(08-05-2026).pdf"
    }
  },
  {
    "id": "cgpsc-state-service-examination-2025",
    "title": "CGPSC State Service Examination 2026: Notification, Online Form, 265 Vacancies | Last Date 30th December",
    "org": "CGPSC State Service Examination 2026",
    "shortOrg": "CGPSC State Service Examinatio",
    "posts": "Chhattisgarh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chhattisgarh State Government Recruitment",
    "state": "chhattisgarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1R1c27Rdk8fjf77CRB2vT5u4OwYXMdjKu/view?usp=sharing",
      "notificationUrl": "https://psc.cg.gov.in/pdf/Advertisement/CORRIGENDUM_SSE2025_03122025.PDF",
      "websiteUrl": "https://drive.google.com/file/d/1R1c27Rdk8fjf77CRB2vT5u4OwYXMdjKu/view?usp=sharing"
    }
  },
  {
    "id": "cgpsc-assistant-professor-recruitment",
    "title": "CGPSC Assistant Professor Recruitment 2025 Apply Online for 125 Posts | Last Date 24 December",
    "org": "CGPSC Assistant Professor",
    "shortOrg": "CGPSC Assistant Professor",
    "posts": "Chhattisgarh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chhattisgarh State Government Recruitment",
    "state": "chhattisgarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://psc.cg.gov.in/pdf/Advertisement/Assistant_Prfessor_Medical_Education_2025_17112025.PDF",
      "notificationUrl": "https://psc.cg.gov.in/pdf/Advertisement/Assistant_Prfessor_Medical_Education_2025_17112025.PDF",
      "websiteUrl": "https://psc.cg.gov.in/pdf/Advertisement/Assistant_Prfessor_Medical_Education_2025_17112025.PDF"
    }
  },
  {
    "id": "cgpsc-recruitment",
    "title": "CGPSC Recruitment 2024: Apply Online for 341 SI and Other Posts",
    "org": "CGPSC",
    "shortOrg": "CGPSC",
    "posts": "SI and Other",
    "vacancies": 341,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chhattisgarh State Government Recruitment",
    "state": "chhattisgarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://psc.cg.gov.in/pdf/Advertisement/ADV_SI_PC_SUBE_2024_21102024.pdf",
      "notificationUrl": "https://psc.cg.gov.in/pdf/Advertisement/ADV_SI_PC_SUBE_2024_21102024.pdf",
      "websiteUrl": "https://psc.cg.gov.in/pdf/Advertisement/ADV_SI_PC_SUBE_2024_21102024.pdf"
    }
  },
  {
    "id": "chhattisgarh-public-service-commission",
    "title": "CGPSC Recruitment 2014 Chhattisgarh Apply Online - Assistant Professors 966 Vacancies",
    "org": "CGPSC",
    "shortOrg": "CGPSC",
    "posts": "Chhattisgarh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chhattisgarh State Government Recruitment",
    "state": "chhattisgarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://psc.cg.gov.in/pdf/Advertisement/ADV_AP_2014.pdf",
      "notificationUrl": "http://psc.cg.gov.in/pdf/Advertisement/ADV_AP_2014.pdf",
      "websiteUrl": "http://psc.cg.gov.in/pdf/Advertisement/ADV_AP_2014.pdf"
    }
  },
  {
    "id": "cgpsc-vacancies-2013-librarian-total-61",
    "title": "CGPSC Vacancies 2013 Librarian (Total 61 Posts)",
    "org": "CGPSC Vacancies 2013 Librarian (Total 61 Posts)",
    "shortOrg": "CGPSC Vacancies 2013 Librarian",
    "posts": "Chhattisgarh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chhattisgarh State Government Recruitment",
    "state": "chhattisgarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGPTt7h_80k7z2KQ-ZQTsxBBb3mZtzQQTfd_mdhDfo-P7GzSktrLR2zgfull0A-tIw1zUq_R2JvI4zf2YlUZpsxZoLE8dlN69bDT2LDgp0fJaD34cO5NF5gWdLv_qHast4QwAUHw71qD8/s1600-h/cgpsc%25255B3%25255D.jpg",
      "notificationUrl": "http://psc.cg.gov.in/pdf/Advertisement/adv_Librarian2013.PDF",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGPTt7h_80k7z2KQ-ZQTsxBBb3mZtzQQTfd_mdhDfo-P7GzSktrLR2zgfull0A-tIw1zUq_R2JvI4zf2YlUZpsxZoLE8dlN69bDT2LDgp0fJaD34cO5NF5gWdLv_qHast4QwAUHw71qD8/s1600-h/cgpsc%25255B3%25255D.jpg"
    }
  },
  {
    "id": "cgpsc-recruitment-2013-assistant",
    "title": "CGPSC Recruitment 2013 Assistant District Public Prosecution Officer (61 Vacancies)",
    "org": "CGPSC",
    "shortOrg": "CGPSC",
    "posts": "Chhattisgarh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chhattisgarh State Government Recruitment",
    "state": "chhattisgarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9Hyt5Rx4x-4blTanvwPsyHtZ8pRS1ILX3bTU_ns59cuV-J5JOwYJ6Ci-gVNk5NyrPuwzwvi_-J34CbQHgPo_Slzmd-5W6tbkXmCywW6Frmp7vxhe8NdfHEKXIipO-_GCdd7gWZdaYVz8/s1600-h/cgpsc%25255B3%25255D.jpg",
      "notificationUrl": "http://psc.cg.gov.in/pdf/ADVERTISEMENT/adv_adppo2013.PDF",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9Hyt5Rx4x-4blTanvwPsyHtZ8pRS1ILX3bTU_ns59cuV-J5JOwYJ6Ci-gVNk5NyrPuwzwvi_-J34CbQHgPo_Slzmd-5W6tbkXmCywW6Frmp7vxhe8NdfHEKXIipO-_GCdd7gWZdaYVz8/s1600-h/cgpsc%25255B3%25255D.jpg"
    }
  },
  {
    "id": "chhattisgarh-public-service-commission-v400",
    "title": "Chhattisgarh Public Service Commission Recruitment 2012 various posts",
    "org": "Chhattisgarh Public Service Commission",
    "shortOrg": "Chhattisgarh Public Service Co",
    "posts": "Chhattisgarh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chhattisgarh State Government Recruitment",
    "state": "chhattisgarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWVDGVeoDLJKEdAdeZSmddcCLedMlePaeQ3yxJ-jpaC4fZeygmH0fit5X8dCIjWVP31p9DQFYQ26f5GhUEuFz3bl6jK8rGE8SQOPbZ4tAMHQLCzhyphenhypheniDkc5GyBYeJU3vLhS6SNeySKC7sU/s1600-h/CPSC%25255B4%25255D.jpg",
      "notificationUrl": "https://www.mponline.gov.in/Quick%20Links/CGPSC/Advertisement/Pre2011.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWVDGVeoDLJKEdAdeZSmddcCLedMlePaeQ3yxJ-jpaC4fZeygmH0fit5X8dCIjWVP31p9DQFYQ26f5GhUEuFz3bl6jK8rGE8SQOPbZ4tAMHQLCzhyphenhypheniDkc5GyBYeJU3vLhS6SNeySKC7sU/s1600-h/CPSC%25255B4%25255D.jpg"
    }
  },
  {
    "id": "cg-vyapam-recruitment-2026-apply-online",
    "title": "CG Vyapam Recruitment 2026 – Apply Online for 295 Fireman, Driver and Other Posts | Last Date 05-06-2026",
    "org": "CG Vyapam",
    "shortOrg": "CG Vyapam",
    "posts": "Fireman, Driver and Other",
    "vacancies": 295,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chhattisgarh State Government Recruitment",
    "state": "chhattisgarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "05-06-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://vyapamcg.cgstate.gov.in/Post?PostID=NSF26ONLINE",
      "notificationUrl": "https://rozgardwaar.com/2026/05/cg-vyapam-recruitment-2026-apply-online.html",
      "websiteUrl": "https://vyapamcg.cgstate.gov.in/Post?PostID=NSF26ONLINE"
    }
  },
  {
    "id": "cg-vyapam-sub-auditor-recruitment",
    "title": "CG Vyapam Sub Auditor Recruitment 2026 - Notification, Online Form, 69 Posts",
    "org": "CG Vyapam Sub Auditor",
    "shortOrg": "CG Vyapam Sub Auditor",
    "posts": "Chhattisgarh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chhattisgarh State Government Recruitment",
    "state": "chhattisgarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/fe3d3912-d99d-4715-932b-37ec88c6a33c.pdf",
      "notificationUrl": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/fe3d3912-d99d-4715-932b-37ec88c6a33c.pdf",
      "websiteUrl": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/fe3d3912-d99d-4715-932b-37ec88c6a33c.pdf"
    }
  },
  {
    "id": "high-court-of-chhattisgarh-bilaspur",
    "title": "High Court of Chhattisgarh Recruitment 2025 Apply Online 133 Junior Judicial Assistant Posts | Last Date 25 November",
    "org": "High Court of Chhattisgarh",
    "shortOrg": "High Court of Chhattisgarh",
    "posts": "Chhattisgarh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chhattisgarh State Government Recruitment",
    "state": "chhattisgarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1eF0RL10rHP3A8ZkVa36JH8P5loq2gU3A/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1eF0RL10rHP3A8ZkVa36JH8P5loq2gU3A/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1eF0RL10rHP3A8ZkVa36JH8P5loq2gU3A/view?usp=sharing"
    }
  },
  {
    "id": "uksssc-inter-level-recruitment-2026",
    "title": "UKSSSC Inter Level Recruitment 2026 – Apply Online for 553 Various Posts | Last Date 07-10-2026",
    "org": "UKSSSC Inter Level",
    "shortOrg": "UKSSSC Inter Level",
    "posts": "Various",
    "vacancies": 553,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttarakhand State Government Recruitment",
    "state": "uttarakhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "07-10-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1ikWO0ewO9BImGzvfrZ7Gp5F2xOFs2riV/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1ikWO0ewO9BImGzvfrZ7Gp5F2xOFs2riV/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1ikWO0ewO9BImGzvfrZ7Gp5F2xOFs2riV/view?usp=sharing"
    }
  },
  {
    "id": "uksssc-assistant-accountant-recruitment",
    "title": "UKSSSC Assistant Accountant Recruitment 2026 – Apply Online for 339 Posts | Last Date 15-08-2026",
    "org": "UKSSSC Assistant Accountant",
    "shortOrg": "UKSSSC Assistant Accountant",
    "posts": "Uttarakhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttarakhand State Government Recruitment",
    "state": "uttarakhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "15-08-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1OPRelDW8zCOlmyYeTffNlfMkd3P-Z8kH/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1OPRelDW8zCOlmyYeTffNlfMkd3P-Z8kH/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1OPRelDW8zCOlmyYeTffNlfMkd3P-Z8kH/view?usp=sharing"
    }
  },
  {
    "id": "uksssc-recruitment",
    "title": "UKSSSC Recruitment 2026 – Apply Online 398 Kanisth Sahayak, Stenographer Posts | Last Date 06-07-2026",
    "org": "UKSSSC",
    "shortOrg": "UKSSSC",
    "posts": "Uttarakhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttarakhand State Government Recruitment",
    "state": "uttarakhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "06-07-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://cdnbbsr.s3waas.gov.in/s34ffd0e19d2069412274bd3025b0e176c/uploads/2026/06/202606151514320398.pdf",
      "notificationUrl": "https://cdnbbsr.s3waas.gov.in/s34ffd0e19d2069412274bd3025b0e176c/uploads/2026/06/202606151514320398.pdf",
      "websiteUrl": "https://cdnbbsr.s3waas.gov.in/s34ffd0e19d2069412274bd3025b0e176c/uploads/2026/06/202606151514320398.pdf"
    }
  },
  {
    "id": "uksssc-livestock-extension-officer",
    "title": "UKSSSC Livestock Extension Officer Recruitment 2026 - 120 Posts, Notification, Online Form | Last Date 02-06-2026",
    "org": "UKSSSC Livestock Extension Officer",
    "shortOrg": "UKSSSC Livestock Extension Off",
    "posts": "Uttarakhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttarakhand State Government Recruitment",
    "state": "uttarakhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "02-06-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://cdnbbsr.s3waas.gov.in/s34ffd0e19d2069412274bd3025b0e176c/uploads/2026/05/202605081403297718.pdf",
      "notificationUrl": "https://cdnbbsr.s3waas.gov.in/s34ffd0e19d2069412274bd3025b0e176c/uploads/2026/05/202605081403297718.pdf",
      "websiteUrl": "https://cdnbbsr.s3waas.gov.in/s34ffd0e19d2069412274bd3025b0e176c/uploads/2026/05/202605081403297718.pdf"
    }
  },
  {
    "id": "uksssc-new-vacancy-2026-calendar",
    "title": "UKSSSC New Vacancy 2026 Calendar",
    "org": "UKSSSC New",
    "shortOrg": "UKSSSC New",
    "posts": "Uttarakhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttarakhand State Government Recruitment",
    "state": "uttarakhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2026/05/uksssc-new-vacancy-2026-calendar.html",
      "notificationUrl": "https://rozgardwaar.com/2026/05/uksssc-new-vacancy-2026-calendar.html",
      "websiteUrl": "https://rozgardwaar.com/2026/05/uksssc-new-vacancy-2026-calendar.html"
    }
  },
  {
    "id": "uksssc-driver",
    "title": "UKSSSC Driver Recruitment 2026: Notification, Online Form, 72 Posts | Last Date 07 May 2026",
    "org": "UKSSSC Driver",
    "shortOrg": "UKSSSC Driver",
    "posts": "Uttarakhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttarakhand State Government Recruitment",
    "state": "uttarakhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1NJKc5GiKlyrRnfvn31qyejuagxubkWV7/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1NJKc5GiKlyrRnfvn31qyejuagxubkWV7/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1NJKc5GiKlyrRnfvn31qyejuagxubkWV7/view?usp=sharing"
    }
  },
  {
    "id": "uksssc-recruitment-v410",
    "title": "UKSSSC Recruitment 2025 Apply Online for 128 Assistant Teacher Posts | Last Date 7th October",
    "org": "UKSSSC",
    "shortOrg": "UKSSSC",
    "posts": "Assistant Teacher",
    "vacancies": 128,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttarakhand State Government Recruitment",
    "state": "uttarakhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://cdnbbsr.s3waas.gov.in/s34ffd0e19d2069412274bd3025b0e176c/uploads/2025/09/202509121073122835.pdf",
      "notificationUrl": "https://cdnbbsr.s3waas.gov.in/s34ffd0e19d2069412274bd3025b0e176c/uploads/2025/09/202509121073122835.pdf",
      "websiteUrl": "https://cdnbbsr.s3waas.gov.in/s34ffd0e19d2069412274bd3025b0e176c/uploads/2025/09/202509121073122835.pdf"
    }
  },
  {
    "id": "ukpsc-tax-and-revenue-inspector",
    "title": "UKPSC Tax and Revenue Inspector Recruitment 2026 – Apply Online for 29 Posts, Notification | Last Date 04-08-2026",
    "org": "UKPSC Tax and Revenue Inspector",
    "shortOrg": "UKPSC Tax and Revenue Inspecto",
    "posts": "Uttarakhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttarakhand State Government Recruitment",
    "state": "uttarakhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "04-08-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1NX-EwNmTGt5CH4Ya59RDKVpQ7CWbEewZ/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1NX-EwNmTGt5CH4Ya59RDKVpQ7CWbEewZ/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1NX-EwNmTGt5CH4Ya59RDKVpQ7CWbEewZ/view?usp=sharing"
    }
  },
  {
    "id": "ukpsc-lecturer-recruitment-2026-apply",
    "title": "UKPSC Lecturer Recruitment 2026 - Apply Online for 808 Vacancies",
    "org": "UKPSC Lecturer",
    "shortOrg": "UKPSC Lecturer",
    "posts": "Uttarakhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttarakhand State Government Recruitment",
    "state": "uttarakhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://psc.uk.gov.in/public/uploads/recruitment/942047021.pdf",
      "notificationUrl": "https://psc.uk.gov.in/public/uploads/recruitment/942047021.pdf",
      "websiteUrl": "https://psc.uk.gov.in/public/uploads/recruitment/942047021.pdf"
    }
  },
  {
    "id": "ukpsc-pcs-2025-notification-online-form",
    "title": "UKPSC PCS 2025: Notification, Online Form & Details for Uttarakhand Civil Services Exam",
    "org": "UKPSC PCS 2025",
    "shortOrg": "UKPSC PCS 2025:",
    "posts": "Uttarakhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttarakhand State Government Recruitment",
    "state": "uttarakhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://psc.uk.gov.in",
      "notificationUrl": "https://rozgardwaar.com/2025/05/ukpsc-pcs-2025-notification-online-form.html",
      "websiteUrl": "https://psc.uk.gov.in"
    }
  },
  {
    "id": "ukpsc-uttarakhand-recruitment",
    "title": "UKPSC Recruitment 2024: Apply Online, 613 Lecturer Vacancies",
    "org": "UKPSC",
    "shortOrg": "UKPSC",
    "posts": "Uttarakhand State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttarakhand State Government Recruitment",
    "state": "uttarakhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1mp7XOC3dPrdGxDz_Zzzf3nMX5lMtkMS1/view?usp=sharing",
      "notificationUrl": "https://ukpscnet.in/lecturer-cadre-exam-2024/assets/admin-reports/lecturer_Inter_College_exam_2024_advertisement_lce54f.pdf",
      "websiteUrl": "https://drive.google.com/file/d/1mp7XOC3dPrdGxDz_Zzzf3nMX5lMtkMS1/view?usp=sharing"
    }
  },
  {
    "id": "ukpsc-group-c-recruitment",
    "title": "UKPSC Group C Recruitment 2023 Apply Online for 645 Agriculture Officer, Assistant Posts",
    "org": "UKPSC Group C",
    "shortOrg": "UKPSC Group C",
    "posts": "Agriculture Officer, Assistant",
    "vacancies": 645,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Uttarakhand State Government Recruitment",
    "state": "uttarakhand",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1nNju3yxpbLAAIf5mtI-lbM3wTvih1Snk/view",
      "notificationUrl": "https://drive.google.com/file/d/1nNju3yxpbLAAIf5mtI-lbM3wTvih1Snk/view",
      "websiteUrl": "https://drive.google.com/file/d/1nNju3yxpbLAAIf5mtI-lbM3wTvih1Snk/view"
    }
  },
  {
    "id": "hppsc-assistant-professor-recruitment",
    "title": "HPPSC Assistant Professor Recruitment 2026 – Apply Online for 369 Posts | Last Date 14-07-2026",
    "org": "HPPSC Assistant Professor",
    "shortOrg": "HPPSC Assistant Professor",
    "posts": "Himachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Himachal Pradesh State Government Recruitment",
    "state": "himachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "14-07-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://hppsc.hp.gov.in/CommonControls/ViewContinuousLinkPage?qs=mhlKjiXMMItGo46f60VBXX8%2B1SQ83OzVLj9MfDScpvboDSdMygkK4iLV47Bu%2FJzMpJLanI%2BihrK9p8W6JsSQUgHTy39NyiuO%2BFtbEmiPQyc%3D",
      "notificationUrl": "https://rozgardwaar.com/2026/06/hppsc-assistant-professor-recruitment.html",
      "websiteUrl": "https://hppsc.hp.gov.in/CommonControls/ViewContinuousLinkPage?qs=mhlKjiXMMItGo46f60VBXX8%2B1SQ83OzVLj9MfDScpvboDSdMygkK4iLV47Bu%2FJzMpJLanI%2BihrK9p8W6JsSQUgHTy39NyiuO%2BFtbEmiPQyc%3D"
    }
  },
  {
    "id": "hp-govt-jobs",
    "title": "HP Govt Jobs 2026 - Latest Himachal Pradesh Job Notifications",
    "org": "HP Govt Jobs 2026 - Latest Himachal Pradesh Job",
    "shortOrg": "HP Govt Jobs 2026 - Latest Him",
    "posts": "Himachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Himachal Pradesh State Government Recruitment",
    "state": "himachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2024/05/HP-Govt-Jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2024/05/HP-Govt-Jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2024/05/HP-Govt-Jobs.html"
    }
  },
  {
    "id": "himachal-pradesh-public-service-commission",
    "title": "HPPSC Recruitment 2025 Apply Online Now for 21 Faculty Posts",
    "org": "HPPSC",
    "shortOrg": "HPPSC",
    "posts": "Faculty",
    "vacancies": 21,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Himachal Pradesh State Government Recruitment",
    "state": "himachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://www.hppsc.hp.gov.in/hppsc/content/Index/?qlid=42&amp;Ls_is=67&amp;lngid=1",
      "notificationUrl": "https://rozgardwaar.com/2018/06/Himachal-Pradesh-Public-Service-Commission.html",
      "websiteUrl": "http://www.hppsc.hp.gov.in/hppsc/content/Index/?qlid=42&amp;Ls_is=67&amp;lngid=1"
    }
  },
  {
    "id": "hppsc-vacancy-2015",
    "title": "HPPSC Vacancy 2017 Apply Online for Assistant Professor (17 Vacancies)",
    "org": "HPPSC",
    "shortOrg": "HPPSC",
    "posts": "Himachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Himachal Pradesh State Government Recruitment",
    "state": "himachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://www.hppsc.hp.gov.in/hppsc/file.axd?file=2017%2f9%2fAdvertisement+No.+10++2017.pdf",
      "notificationUrl": "http://www.hppsc.hp.gov.in/hppsc/file.axd?file=2017%2f9%2fAdvertisement+No.+10++2017.pdf",
      "websiteUrl": "http://www.hppsc.hp.gov.in/hppsc/file.axd?file=2017%2f9%2fAdvertisement+No.+10++2017.pdf"
    }
  },
  {
    "id": "hpsssb-recruitment-jobs",
    "title": "HPSSSB Recruitment 2021 Apply Online | 15 Clerk Vacancies | hpsssb.hp.gov.in",
    "org": "HPSSSB",
    "shortOrg": "HPSSSB",
    "posts": "Himachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Himachal Pradesh State Government Recruitment",
    "state": "himachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1yWz5DiTx5S3qkgIoEocO6b_h7WUE5xBc/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1yWz5DiTx5S3qkgIoEocO6b_h7WUE5xBc/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1yWz5DiTx5S3qkgIoEocO6b_h7WUE5xBc/view?usp=sharing"
    }
  },
  {
    "id": "himachal-pradesh-police-recruitment",
    "title": "Himachal Pradesh Police Recruitment 2021 Apply Online | 1334 Constable Vacancies",
    "org": "Himachal Pradesh Police",
    "shortOrg": "Himachal Pradesh Police",
    "posts": "Himachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Himachal Pradesh State Government Recruitment",
    "state": "himachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKfXFajT1gl97rmFw4j2pazHuEXSyIfP6JAjxsf8RLndXac087LbKP__XDlK7mutSSlYrwzeKpPcbdn2L8oqTNG-RG8TFTlUzfKBOnIvhtj4juoi_GocIYcDz4om2BLnfTNZO5fqwu1lc/s300/HP-Police-Jobs-2021-indgovtjobs.png",
      "notificationUrl": "https://hc.ap.nic.in/docs/Civil_Judge_notfication_9_2020.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKfXFajT1gl97rmFw4j2pazHuEXSyIfP6JAjxsf8RLndXac087LbKP__XDlK7mutSSlYrwzeKpPcbdn2L8oqTNG-RG8TFTlUzfKBOnIvhtj4juoi_GocIYcDz4om2BLnfTNZO5fqwu1lc/s300/HP-Police-Jobs-2021-indgovtjobs.png"
    }
  },
  {
    "id": "hp-prisons-recruitment",
    "title": "HP Prisons Recruitment 2017 Male Warders 39 Vacancies",
    "org": "HP Prisons",
    "shortOrg": "HP Prisons",
    "posts": "Himachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Himachal Pradesh State Government Recruitment",
    "state": "himachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://admis.hp.nic.in/hpprisons/Downloads/MaleWarderRecruitment2017.pdf",
      "notificationUrl": "http://admis.hp.nic.in/hpprisons/Downloads/MaleWarderRecruitment2017.pdf",
      "websiteUrl": "http://admis.hp.nic.in/hpprisons/Downloads/MaleWarderRecruitment2017.pdf"
    }
  },
  {
    "id": "hppsc-recruitment-2015",
    "title": "HPPSC Administrative Combined Competitive Exam 2015 (30 Vacancies)",
    "org": "HPPSC Administrative Combined Competitive Exam 2015 (30 Vacancies)",
    "shortOrg": "HPPSC Administrative Combined ",
    "posts": "Himachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Himachal Pradesh State Government Recruitment",
    "state": "himachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbprjjQMrKN3MUq_c5TOVuJ2VpLafhOVgcChWjL7p0CbLolaWRKh5MarDmqINMTiBaw3BcikDvGTUQzYOOh-XtfQ_JQ3w0HpCK-pfbnrXyZgBK5bSOvq-aXGGdgQk32fmCn0_YW6l0lEY/s1600-h/HPPSC-Exam-2015%25255B3%25255D.png",
      "notificationUrl": "http://hp.gov.in/hppsc/file.axd?file=2015%2f1%2fAdvertisement+No.+7_2014+++++%28H.P.+ADMINISTRATIVE+COMBINED+COMPETITIVE+EXAMINATION-2014%29.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbprjjQMrKN3MUq_c5TOVuJ2VpLafhOVgcChWjL7p0CbLolaWRKh5MarDmqINMTiBaw3BcikDvGTUQzYOOh-XtfQ_JQ3w0HpCK-pfbnrXyZgBK5bSOvq-aXGGdgQk32fmCn0_YW6l0lEY/s1600-h/HPPSC-Exam-2015%25255B3%25255D.png"
    }
  },
  {
    "id": "itbp-recruitment-2014",
    "title": "ITBP Recruitment 2014 Application Form - 152 Constable Vacancies",
    "org": "ITBP",
    "shortOrg": "ITBP",
    "posts": "Himachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Himachal Pradesh State Government Recruitment",
    "state": "himachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjj3W-g5jK8qPHAgkpyMytijRv1rybQIGHOoCSY-H_zfNTudWCGoMfcgPB-8M-F5NaxwH1whBa1TiaCqjGPFIYs7T5jEh2bpKcxrHYIsPFrsR08F5Ir0lhxorr71jlgiTxg_aNqGAYEUdA/s1600-h/ITBP-Constable-76-Vacancies%25255B3%25255D.png",
      "notificationUrl": "http://www.davp.nic.in/WriteReadData/ADS/eng_19112_262_1415b.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjj3W-g5jK8qPHAgkpyMytijRv1rybQIGHOoCSY-H_zfNTudWCGoMfcgPB-8M-F5NaxwH1whBa1TiaCqjGPFIYs7T5jEh2bpKcxrHYIsPFrsR08F5Ir0lhxorr71jlgiTxg_aNqGAYEUdA/s1600-h/ITBP-Constable-76-Vacancies%25255B3%25255D.png"
    }
  },
  {
    "id": "hppsc-himachal-pradesh-administrative",
    "title": "HPPSC Himachal Pradesh Administrative Combined Competitive Examination 2013",
    "org": "HPPSC Himachal Pradesh Administrative Combined Competitive Examination 2013",
    "shortOrg": "HPPSC Himachal Pradesh Adminis",
    "posts": "Himachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Himachal Pradesh State Government Recruitment",
    "state": "himachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJ40nbW0kBUTBAEdgmhdsKWFLY02s1zsejaGaUaMBsn2oy7AA9JhE5p_niDbe8TMJUuSZZIQAXR-088au7s_YGuysYSd-TGEOczbYGOghz2WTP9R-F3GMusNu2vmQYNqde_jHrpOGccwc/s1600-h/HP%25255B4%25255D.jpg",
      "notificationUrl": "http://hp.gov.in/hppsc/file.axd?file=2013%2f1%2fADV.HAS+2012.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJ40nbW0kBUTBAEdgmhdsKWFLY02s1zsejaGaUaMBsn2oy7AA9JhE5p_niDbe8TMJUuSZZIQAXR-088au7s_YGuysYSd-TGEOczbYGOghz2WTP9R-F3GMusNu2vmQYNqde_jHrpOGccwc/s1600-h/HP%25255B4%25255D.jpg"
    }
  },
  {
    "id": "sbi-clerk-recruitment",
    "title": "SBI Clerk Recruitment 2026 – Apply Online for 9766 Regular & Backlog Posts | Last Date 31-08-2026",
    "org": "SBI Clerk",
    "shortOrg": "SBI Clerk",
    "posts": "Regular & Backlog",
    "vacancies": 9766,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Himachal Pradesh State Government Recruitment",
    "state": "himachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "31-08-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1OdqZgvx1KsJlKhio8kbW_Pn5QKSPvRfL/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1OdqZgvx1KsJlKhio8kbW_Pn5QKSPvRfL/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1OdqZgvx1KsJlKhio8kbW_Pn5QKSPvRfL/view?usp=sharing"
    }
  },
  {
    "id": "south-indian-bank-junior-officer",
    "title": "South Indian Bank Junior Officer Recruitment 2026 – Notification, Online Form | Last Date 31-08-2026",
    "org": "South Indian Bank Junior Officer",
    "shortOrg": "South Indian Bank Junior Offic",
    "posts": "Himachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Himachal Pradesh State Government Recruitment",
    "state": "himachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "31-08-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1q1jCUpNLc3lWkHs7ruMNbU49d6sa3nn6/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1q1jCUpNLc3lWkHs7ruMNbU49d6sa3nn6/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1q1jCUpNLc3lWkHs7ruMNbU49d6sa3nn6/view?usp=sharing"
    }
  },
  {
    "id": "assam-police-grade-iv-staff-recruitment",
    "title": "Assam Police Grade IV Staff Recruitment 2026 (256 Posts) Notification & Online Form",
    "org": "Assam Police Grade IV Staff",
    "shortOrg": "Assam Police Grade IV Staff",
    "posts": "Assam State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Assam State Government Recruitment",
    "state": "assam",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://slprbassam.in/pdf/Notice2026/16012026/adv_gradeIV.pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "assam-police-paramedical-recruitment",
    "title": "Assam Police Paramedical Recruitment 2026 (18 Pharmacist, Nurse & Other Posts) - Notification, Online Form",
    "org": "Assam Police Paramedical",
    "shortOrg": "Assam Police Paramedical",
    "posts": "Assam State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Assam State Government Recruitment",
    "state": "assam",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://slprbassam.in/pdf/Notice2026/16012026/adv_dresser_tailor.pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "assam-slprb-recruitment",
    "title": "Assam SLPRB Forest, Constable, Fireman & Other Posts Recruitment 2026 (2972 Posts) - Notification, Online Form",
    "org": "Assam SLPRB Forest, Constable, Fireman & Other Posts",
    "shortOrg": "Assam SLPRB Forest, Constable,",
    "posts": "Assam State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Assam State Government Recruitment",
    "state": "assam",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1k1R3Kf6oq7z16_wNmL_kuBqUnuwlYLvY/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1k1R3Kf6oq7z16_wNmL_kuBqUnuwlYLvY/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1k1R3Kf6oq7z16_wNmL_kuBqUnuwlYLvY/view?usp=sharing"
    }
  },
  {
    "id": "assam-police-jail-warder-recruitment",
    "title": "Assam Police Jail Warder Recruitment 2026 (138 Vacancies) Notification & Online Form",
    "org": "Assam Police Jail Warder",
    "shortOrg": "Assam Police Jail Warder",
    "posts": "Assam State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Assam State Government Recruitment",
    "state": "assam",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://slprbassam.in/pdf/Notice2026/16012026/adv_jail-warder.pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "assam-police-constable-recruitment-2026",
    "title": "Assam Police Constable Recruitment 2026 Apply Online for 1715 Vacancies | Last Date 16.01.2026",
    "org": "Assam Police Constable",
    "shortOrg": "Assam Police Constable",
    "posts": "Assam State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Assam State Government Recruitment",
    "state": "assam",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://slprbassam.in/pdf/Notice2025/05122025/Advertisement-Constable-(AB-UB).pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "assam-police-recruitment",
    "title": "Assam Police Recruitment 2024 Online Apply 269 Constable Posts - apcap.in",
    "org": "Assam Police",
    "shortOrg": "Assam Police",
    "posts": "Assam State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Assam State Government Recruitment",
    "state": "assam",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjF7yhiZKnJf0s9ms9rb964fNNvHMKsL5jQsUIjcIGht8DJiVo2SqMptwqoiaX5Y0iC144WNOodLLdPpXfC3wFvOcThr0IdLmIPjR54imOQep0BCyb8yEw9GSQN3WUU9PjeZMYU1FCXphegoFtuBQIATWt21-EsfdDs8unnKPSTQWyGMGdp1WqpbzXcQlk/s759/Assam%20Police%20Constable%20Jobs%202024.PNG",
      "notificationUrl": "https://drive.google.com/file/d/1FbZgqYgHOiGT6IXTQj3HkkdLvuGin90C/",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjF7yhiZKnJf0s9ms9rb964fNNvHMKsL5jQsUIjcIGht8DJiVo2SqMptwqoiaX5Y0iC144WNOodLLdPpXfC3wFvOcThr0IdLmIPjR54imOQep0BCyb8yEw9GSQN3WUU9PjeZMYU1FCXphegoFtuBQIATWt21-EsfdDs8unnKPSTQWyGMGdp1WqpbzXcQlk/s759/Assam%20Police%20Constable%20Jobs%202024.PNG"
    }
  },
  {
    "id": "assam-excise-police-recruitment",
    "title": "Assam Excise Police Recruitment 2020 Apply Online 203 Vacancies",
    "org": "Assam Excise Police",
    "shortOrg": "Assam Excise Police",
    "posts": "Assam State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Assam State Government Recruitment",
    "state": "assam",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2020/06/Assam-Excise-Police-Recruitment.html",
      "notificationUrl": "https://slprbassam.in/pdf/RecruitmentNotice2020/Advertisement%20Excise%2012-06-2020.pdf",
      "websiteUrl": "https://rozgardwaar.com/2020/06/Assam-Excise-Police-Recruitment.html"
    }
  },
  {
    "id": "assam-constable-recruitment",
    "title": "Assam Constable Recruitment 2020 Online Apply 451 Vacancies | dgcd20.slprbassam.in",
    "org": "Assam Constable",
    "shortOrg": "Assam Constable",
    "posts": "Assam State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Assam State Government Recruitment",
    "state": "assam",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2020/06/Assam-Constable-Recruitment.html",
      "notificationUrl": "https://www.slprbassam.in/pdf/RecruitmentNotice2020/DCDG-%2008-06-2020.pdf",
      "websiteUrl": "https://rozgardwaar.com/2020/06/Assam-Constable-Recruitment.html"
    }
  },
  {
    "id": "assam-forest-recruitment",
    "title": "Assam Forest Recruitment 2020 Apply Online 1081 Vacancies | Last date 25/06/20",
    "org": "Assam Forest",
    "shortOrg": "Assam Forest",
    "posts": "Assam State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Assam State Government Recruitment",
    "state": "assam",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2016/12/Assam-Forest-Recruitment.html",
      "notificationUrl": "https://www.slprbassam.in/pdf/RecruitmentNotice2020/ForestAdvertisement%20%2024-05-2020.pdf",
      "websiteUrl": "https://rozgardwaar.com/2016/12/Assam-Forest-Recruitment.html"
    }
  },
  {
    "id": "itbp-medical-officer-recruitment",
    "title": "ITBP Medical Officer Recruitment 2026 – Apply Online for 282 Posts | Last Date 08-09-2026",
    "org": "ITBP Medical Officer",
    "shortOrg": "ITBP Medical Officer",
    "posts": "Assam State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Assam State Government Recruitment",
    "state": "assam",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "08-09-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1v8aBl1QOZTztqVsAlUU_XOt5CTO4yNfO/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1v8aBl1QOZTztqVsAlUU_XOt5CTO4yNfO/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1v8aBl1QOZTztqVsAlUU_XOt5CTO4yNfO/view?usp=sharing"
    }
  },
  {
    "id": "assam-govt-jobs",
    "title": "Assam Govt Jobs 2026 - Latest Vacancy Notifications List",
    "org": "Assam Govt Jobs 2026 - Latest",
    "shortOrg": "Assam Govt Jobs 2026 - Latest",
    "posts": "Assam State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Assam State Government Recruitment",
    "state": "assam",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2024/10/Assam-Govt-Jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2024/10/Assam-Govt-Jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2024/10/Assam-Govt-Jobs.html"
    }
  },
  {
    "id": "stockholding-executive-recruitment",
    "title": "StockHolding Executive Recruitment 2026 – Apply Online for 65 Posts | Last Date 30-08-2026",
    "org": "StockHolding Executive",
    "shortOrg": "StockHolding Executive",
    "posts": "Assam State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Assam State Government Recruitment",
    "state": "assam",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "30-08-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1A2VXKgqeyJzIP3b2K_NnaG98lASko556/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1A2VXKgqeyJzIP3b2K_NnaG98lASko556/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1A2VXKgqeyJzIP3b2K_NnaG98lASko556/view?usp=sharing"
    }
  },
  {
    "id": "goa-govt-jobs",
    "title": "Goa Government Jobs 2026 - Latest Notifications List",
    "org": "Goa Government Jobs 2026 - Latest",
    "shortOrg": "Goa Government Jobs 2026 - Lat",
    "posts": "Goa State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Goa State Government Recruitment",
    "state": "goa",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2024/10/Goa-Govt-Jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2024/10/Goa-Govt-Jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2024/10/Goa-Govt-Jobs.html"
    }
  },
  {
    "id": "goa-police-vacancy",
    "title": "Goa Police Recruitment 2021 Apply 1178 Constable, SI, ASI, Steno, Clerk Vacancies",
    "org": "Goa Police",
    "shortOrg": "Goa Police",
    "posts": "Goa State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Goa State Government Recruitment",
    "state": "goa",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://citizen.goapolice.gov.in/documents/10184/55793/Recruitment+of+Goa+Police.pdf/37e94f5a-b5c3-4ee0-a9bc-d69385906d34",
      "notificationUrl": "https://citizen.goapolice.gov.in/documents/10184/55793/Recruitment+of+Goa+Police.pdf/37e94f5a-b5c3-4ee0-a9bc-d69385906d34",
      "websiteUrl": "https://citizen.goapolice.gov.in/documents/10184/55793/Recruitment+of+Goa+Police.pdf/37e94f5a-b5c3-4ee0-a9bc-d69385906d34"
    }
  },
  {
    "id": "nit-goa-faculty-recruitment",
    "title": "NIT Goa Faculty Recruitment 2026 – Apply for 07 Posts | Last Date 10-06-2026",
    "org": "NIT Goa Faculty",
    "shortOrg": "NIT Goa Faculty",
    "posts": "Goa State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Goa State Government Recruitment",
    "state": "goa",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "10-06-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://nitgoa.ac.in/uploads/Advt_MCE%2019may2026.pdf",
      "notificationUrl": "https://nitgoa.ac.in/uploads/Advt_MCE%2019may2026.pdf",
      "websiteUrl": "https://nitgoa.ac.in/uploads/Advt_MCE%2019may2026.pdf"
    }
  },
  {
    "id": "nit-goa-recruitment-2025-apply-for",
    "title": "NIT Goa Recruitment 2025 Apply for Registrar Post | Last Date 15 December",
    "org": "NIT Goa",
    "shortOrg": "NIT Goa",
    "posts": "Goa State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Goa State Government Recruitment",
    "state": "goa",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://nitgoa.ac.in/uploads/AdvtRegistrar%2014nov2025.pdf",
      "notificationUrl": "https://nitgoa.ac.in/uploads/AdvtRegistrar%2014nov2025.pdf",
      "websiteUrl": "https://nitgoa.ac.in/uploads/AdvtRegistrar%2014nov2025.pdf"
    }
  },
  {
    "id": "nit-goa-recruitment-2014",
    "title": "NIT Goa Recruitment 2020 Faculty Vacancies",
    "org": "NIT Goa",
    "shortOrg": "NIT Goa",
    "posts": "Goa State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Goa State Government Recruitment",
    "state": "goa",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://www.nitgoa.ac.in/uploaded_files/Details_of_special_recruitment_drive_03dec2019.pdf",
      "notificationUrl": "http://www.nitgoa.ac.in/uploaded_files/Details_of_special_recruitment_drive_03dec2019.pdf",
      "websiteUrl": "http://www.nitgoa.ac.in/uploaded_files/Details_of_special_recruitment_drive_03dec2019.pdf"
    }
  },
  {
    "id": "nit-goa-recruitment-2013-faculty",
    "title": "NIT Goa Recruitment 2013 Faculty Positions",
    "org": "NIT Goa",
    "shortOrg": "NIT Goa",
    "posts": "Goa State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Goa State Government Recruitment",
    "state": "goa",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhl-aFYM9P-EIn3cqh-Txm0AQpTH_S1eqnMIj2fmC3lfyHczNPJ7J0EFlwXeIpgupHgfbGK5KTe4JduH_9R1DEAhMZ87M-sX9LqJ4OwaktlnnaEuzl1rPbcNUhSaE1eGVIDkPkyiZuGYk/s1600/nit+goa.jpg",
      "notificationUrl": "https://rozgardwaar.com/2013/03/nit-goa-recruitment-2013-faculty.html",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhl-aFYM9P-EIn3cqh-Txm0AQpTH_S1eqnMIj2fmC3lfyHczNPJ7J0EFlwXeIpgupHgfbGK5KTe4JduH_9R1DEAhMZ87M-sX9LqJ4OwaktlnnaEuzl1rPbcNUhSaE1eGVIDkPkyiZuGYk/s1600/nit+goa.jpg"
    }
  },
  {
    "id": "goa-medical-college-recruitment",
    "title": "Goa Medical College Recruitment 2021 Apply 834 Vacancies",
    "org": "Goa Medical College",
    "shortOrg": "Goa Medical College",
    "posts": "Goa State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Goa State Government Recruitment",
    "state": "goa",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://www.gmc.goa.gov.in/index.php/en/vacancy/984-walk-in-interview-adverisement-no-04-2021-date-19-04-2021",
      "notificationUrl": "http://www.gmc.goa.gov.in/images/Site_Images/photos/public_noticies/vacancy/Recruitment_Cell/2021/25-03-2021/advt_no_03-2021.pdf",
      "websiteUrl": "http://www.gmc.goa.gov.in/index.php/en/vacancy/984-walk-in-interview-adverisement-no-04-2021-date-19-04-2021"
    }
  },
  {
    "id": "gsl-manager-posts",
    "title": "GSL Manager Posts Recruitment 2026 Apply Online 25 Vacancies | Last Date 22.04.2026",
    "org": "GSL Manager Posts",
    "shortOrg": "GSL Manager Posts",
    "posts": "Goa State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Goa State Government Recruitment",
    "state": "goa",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://goashipyard.ibtexamination.com/notification/%20Advt_No_03-2026.pdf",
      "notificationUrl": "https://goashipyard.ibtexamination.com/notification/%20Advt_No_03-2026.pdf",
      "websiteUrl": "https://goashipyard.ibtexamination.com/notification/%20Advt_No_03-2026.pdf"
    }
  },
  {
    "id": "goa-shipyard-limited-expert-recruitment",
    "title": "Goa Shipyard Limited Expert Recruitment 2026 Notification for 10 Vacancies",
    "org": "Goa Shipyard Limited Expert",
    "shortOrg": "Goa Shipyard Limited Expert",
    "posts": "Goa State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Goa State Government Recruitment",
    "state": "goa",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://goashipyard.in/storage/clients_logo/1767960413.pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "gsl-mt-recruitment",
    "title": "GSL MT Recruitment 2025: Notification, Apply Online for 32 Posts",
    "org": "GSL MT",
    "shortOrg": "GSL MT",
    "posts": "Goa State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Goa State Government Recruitment",
    "state": "goa",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://recruitment.goashipyard.in/WriteData/819202535124PMAdvt.%20No.%2006-2025.pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "gsl-junior-project-executive",
    "title": "GSL Junior Project Executive Recruitment 2025 - 30 Posts, Notification, Online Form",
    "org": "GSL Junior Project Executive",
    "shortOrg": "GSL Junior Project Executive",
    "posts": "Goa State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Goa State Government Recruitment",
    "state": "goa",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://recruitment.goashipyard.in/WriteData/820202533143PMAdvt.%20No.%2007-2025.pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "goa-shipyard-limited-non-executive",
    "title": "Goa Shipyard Limited Non Executive Recruitment 2025 - Apply Online for 102 Posts",
    "org": "Goa Shipyard Limited Non Executive",
    "shortOrg": "Goa Shipyard Limited Non Execu",
    "posts": "Goa State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Goa State Government Recruitment",
    "state": "goa",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1V_i8jP-tirnxU88Kyuj_OS6H4bYPKquCdhtJoXMPGZKuRZmbLKix8cJwIQ7kWvTh60lmk04B8JYfR82s6rbAyAOnvEpmS8mJ3VVEs8K6tHg7Jmk61RugQz4jyqsvJ30fbmaiNlDJMmmgpFKaWgGqAawgigaKYdcDMU6hWPm6JrQOyU826e0FaLN_mtjx/s637/GSL-Non-Executive-2025.png",
      "notificationUrl": "https://rozgardwaar.com/2025/07/goa-shipyard-limited-non-executive.html",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1V_i8jP-tirnxU88Kyuj_OS6H4bYPKquCdhtJoXMPGZKuRZmbLKix8cJwIQ7kWvTh60lmk04B8JYfR82s6rbAyAOnvEpmS8mJ3VVEs8K6tHg7Jmk61RugQz4jyqsvJ30fbmaiNlDJMmmgpFKaWgGqAawgigaKYdcDMU6hWPm6JrQOyU826e0FaLN_mtjx/s637/GSL-Non-Executive-2025.png"
    }
  },
  {
    "id": "upsc-advertisement-no-07-2026",
    "title": "UPSC Advertisement No.07/2026: Notification, Online Form, 450+ Posts | Last Date 17-07-2026",
    "org": "UPSC Advertisement No.07/2026",
    "shortOrg": "UPSC Advertisement No.07/2026:",
    "posts": "Chandigarh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chandigarh State Government Recruitment",
    "state": "chandigarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "17-07-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.upsc.gov.in/sites/default/files/AdvtNo-07-2026-Engl-250626.pdf",
      "notificationUrl": "https://www.upsc.gov.in/sites/default/files/AdvtNo-07-2026-Engl-250626.pdf",
      "websiteUrl": "https://www.upsc.gov.in/sites/default/files/AdvtNo-07-2026-Engl-250626.pdf"
    }
  },
  {
    "id": "chandigarh-administration-clerk-steno",
    "title": "Chandigarh Administration Clerk & Steno Typist Recruitment 2026 - Apply Online for 257 Posts | Last date 26 April 2026",
    "org": "Chandigarh Administration Clerk & Steno Typist",
    "shortOrg": "Chandigarh Administration Cler",
    "posts": "Chandigarh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chandigarh State Government Recruitment",
    "state": "chandigarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://chandigarh.gov.in/sites/default/files/Updation26/dop26-advtclerstn0704.pdf",
      "notificationUrl": "https://chandigarh.gov.in/sites/default/files/Updation26/dop26-advtclerstn0704.pdf",
      "websiteUrl": "https://chandigarh.gov.in/sites/default/files/Updation26/dop26-advtclerstn0704.pdf"
    }
  },
  {
    "id": "chandigarh-administration-nursing",
    "title": "Chandigarh Administration Nursing Officer Recruitment 2025: Online Form for 424 Posts",
    "org": "Chandigarh Administration Nursing Officer",
    "shortOrg": "Chandigarh Administration Nurs",
    "posts": "Chandigarh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chandigarh State Government Recruitment",
    "state": "chandigarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1Ek38Oi9QlN3BaECgX04nVgWye0TS6e9h/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1Ek38Oi9QlN3BaECgX04nVgWye0TS6e9h/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1Ek38Oi9QlN3BaECgX04nVgWye0TS6e9h/view?usp=sharing"
    }
  },
  {
    "id": "pgimer-chandigarh-vacancy",
    "title": "PGIMER Chandigarh Recruitment 2024: Apply Online for 134 Vacancies in Medical Departments",
    "org": "PGIMER Chandigarh",
    "shortOrg": "PGIMER Chandigarh",
    "posts": "Chandigarh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chandigarh State Government Recruitment",
    "state": "chandigarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1oLDh3HFu6Qj_iT1zAVlgX3F0c48lPw90/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1oLDh3HFu6Qj_iT1zAVlgX3F0c48lPw90/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1oLDh3HFu6Qj_iT1zAVlgX3F0c48lPw90/view?usp=sharing"
    }
  },
  {
    "id": "chandigarh-police-constable-recruitment",
    "title": "Chandigarh Police Constable Recruitment 2024, 144 Vacancies, Eligibility, Salary, Apply Online",
    "org": "Chandigarh Police Constable",
    "shortOrg": "Chandigarh Police Constable",
    "posts": "Chandigarh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chandigarh State Government Recruitment",
    "state": "chandigarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1xVfWgIHepu6Ca7mkjkp009oZ8WTbiGbu1APlBQoD9Daw7gOJkxKdzGkf2dd_vXzuFHtU5h5_R60_d30EFcbr5TuZwmd_E3UVrXB_DQqH1Zfzeg5yKFE0FSz3KTyVRXXf9WCIe-H4f_KaF80AQLOtWP1UM9UZGQ87h6JaKYlcnqPstwQGNQil10g6LzA/s450/Chandigarh%20Police%20Constable%20Jobs%202024.png",
      "notificationUrl": "https://chandigarhpolice.gov.in/pdf/Recruitment/2024/IT/TierIISyllabus_IT_2024.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1xVfWgIHepu6Ca7mkjkp009oZ8WTbiGbu1APlBQoD9Daw7gOJkxKdzGkf2dd_vXzuFHtU5h5_R60_d30EFcbr5TuZwmd_E3UVrXB_DQqH1Zfzeg5yKFE0FSz3KTyVRXXf9WCIe-H4f_KaF80AQLOtWP1UM9UZGQ87h6JaKYlcnqPstwQGNQil10g6LzA/s450/Chandigarh%20Police%20Constable%20Jobs%202024.png"
    }
  },
  {
    "id": "pgimer-chandigarh-recruitment-2025",
    "title": "PGIMER Chandigarh Recruitment 2025 Apply Online for 151 Vacancies | Last Date 25 November",
    "org": "PGIMER Chandigarh",
    "shortOrg": "PGIMER Chandigarh",
    "posts": "Chandigarh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chandigarh State Government Recruitment",
    "state": "chandigarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://pgimer.edu.in/PGIMER_PORTAL/AbstractFilePath?FileType=E&amp;FileName=Final%20GUIDE%20LINES%20FOR%20SR%20Dec%20202510Nov2025154430.pdf&amp;PathKey=VACANCY_PATH",
      "notificationUrl": "https://pgimer.edu.in/PGIMER_PORTAL/AbstractFilePath?FileType=E&amp;FileName=Final%20GUIDE%20LINES%20FOR%20SR%20Dec%20202510Nov2025154430.pdf&amp;PathKey=VACANCY_PATH",
      "websiteUrl": "https://pgimer.edu.in/PGIMER_PORTAL/AbstractFilePath?FileType=E&amp;FileName=Final%20GUIDE%20LINES%20FOR%20SR%20Dec%20202510Nov2025154430.pdf&amp;PathKey=VACANCY_PATH"
    }
  },
  {
    "id": "pgi-chandigarh-nurse-vacancy",
    "title": "PGI Chandigarh Nurse Vacancy 2024, Notification, Application Form",
    "org": "PGI Chandigarh Nurse",
    "shortOrg": "PGI Chandigarh Nurse",
    "posts": "Chandigarh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chandigarh State Government Recruitment",
    "state": "chandigarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://pgimer.edu.in/PGIMER_PORTAL/AbstractFilePath?FileType=E&amp;FileName=Research%20nurse%20recruitment%20ad16May2024123754.pdf&amp;PathKey=VACANCY_PATH",
      "notificationUrl": "https://pgimer.edu.in/PGIMER_PORTAL/AbstractFilePath?FileType=E&amp;FileName=Research%20nurse%20recruitment%20ad16May2024123754.pdf&amp;PathKey=VACANCY_PATH",
      "websiteUrl": "https://pgimer.edu.in/PGIMER_PORTAL/AbstractFilePath?FileType=E&amp;FileName=Research%20nurse%20recruitment%20ad16May2024123754.pdf&amp;PathKey=VACANCY_PATH"
    }
  },
  {
    "id": "pgimer-chandigarh-recruitment-2012",
    "title": "PGIMER Chandigarh Recruitment 2012 Technicians",
    "org": "PGIMER Chandigarh",
    "shortOrg": "PGIMER Chandigarh",
    "posts": "Chandigarh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chandigarh State Government Recruitment",
    "state": "chandigarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFNJEpbGny7h7dTeb1MZYsddDvhWFI1vZgWzA7Ue4qlmOAdjDAl5lyfuo2FVHlIhXoCkFIgXSvLNaW8jlzIzo_4Ugpq6oYZD8LfPFQ_AaKHY9hEy9Jm4mj1qEpXXOL05nhDHLuoymBVwo/s1600-h/pgimer%25255B5%25255D.jpg",
      "notificationUrl": "http://pgimer.nic.in/code/pdf/guidelinesGRC1012.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFNJEpbGny7h7dTeb1MZYsddDvhWFI1vZgWzA7Ue4qlmOAdjDAl5lyfuo2FVHlIhXoCkFIgXSvLNaW8jlzIzo_4Ugpq6oYZD8LfPFQ_AaKHY9hEy9Jm4mj1qEpXXOL05nhDHLuoymBVwo/s1600-h/pgimer%25255B5%25255D.jpg"
    }
  },
  {
    "id": "upsc-notification",
    "title": "UPSC Notification 2023 Apply Online for Various Posts",
    "org": "UPSC",
    "shortOrg": "UPSC",
    "posts": "Chandigarh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Chandigarh State Government Recruitment",
    "state": "chandigarh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://www.upsconline.nic.in",
      "notificationUrl": "https://drive.google.com/file/d/1ltH56qBVyf5dLa-5fc7toZdqwYeSKTIR/view",
      "websiteUrl": "http://www.upsconline.nic.in"
    }
  },
  {
    "id": "appsc-recruitment-2014-research",
    "title": "APPSC Recruitment 2014 Research Assistant, Research Officer",
    "org": "APPSC",
    "shortOrg": "APPSC",
    "posts": "Arunachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Arunachal Pradesh State Government Recruitment",
    "state": "arunachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjndeoGCKLqAfjsnyBMPlnJkHpqPr4oZqJpkjkFd5z1_LrMOfMNc3Qhn8cX2wfHM3WmuAWKNX5zZ5w8KYgQ9zyk_R2QzljdNCcHhv8MUfeHkfWZPKgWsSu17dW8UebuKAeeFeIya1vGBVs/s1600-h/APPSC%25255B3%25255D.png",
      "notificationUrl": "http://www.appsc.gov.in/research_officer.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjndeoGCKLqAfjsnyBMPlnJkHpqPr4oZqJpkjkFd5z1_LrMOfMNc3Qhn8cX2wfHM3WmuAWKNX5zZ5w8KYgQ9zyk_R2QzljdNCcHhv8MUfeHkfWZPKgWsSu17dW8UebuKAeeFeIya1vGBVs/s1600-h/APPSC%25255B3%25255D.png"
    }
  },
  {
    "id": "arunachal-pradesh-recruitment-2013",
    "title": "Arunachal Pradesh Recruitment 2013 Clerks (12 UDC Vacancies)",
    "org": "Arunachal Pradesh",
    "shortOrg": "Arunachal Pradesh",
    "posts": "Arunachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Arunachal Pradesh State Government Recruitment",
    "state": "arunachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_TfTApv0g2fFotUqx6AR-tHaa3PEOzysZ05XEErk9YLCZVtSgLlX1zo00nI_tXbWgMFzYjTQ-Z93e8-v-SYE9TqcZwzRqfc8ZT0q0DNbzTHwBBU0zGGodTCTCu0b0-AF3xOjoPJVgf4s/s1600-h/APPSC-Clerk-Recruitment-201%25255B3%25255D.png",
      "notificationUrl": "http://appsc.gov.in/UDC.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_TfTApv0g2fFotUqx6AR-tHaa3PEOzysZ05XEErk9YLCZVtSgLlX1zo00nI_tXbWgMFzYjTQ-Z93e8-v-SYE9TqcZwzRqfc8ZT0q0DNbzTHwBBU0zGGodTCTCu0b0-AF3xOjoPJVgf4s/s1600-h/APPSC-Clerk-Recruitment-201%25255B3%25255D.png"
    }
  },
  {
    "id": "apssb-constable-fireman-stpf",
    "title": "APSSB Constable, Fireman & STPF Recruitment 2026 Apply Online for 984 Posts | Last Date 20 April 2026",
    "org": "APSSB Constable, Fireman & STPF",
    "shortOrg": "APSSB Constable, Fireman & STP",
    "posts": "Arunachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Arunachal Pradesh State Government Recruitment",
    "state": "arunachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1-Bv2T1FCQrGMBrRUAlSBP3wcKi-cqtBJ/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1-Bv2T1FCQrGMBrRUAlSBP3wcKi-cqtBJ/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1-Bv2T1FCQrGMBrRUAlSBP3wcKi-cqtBJ/view?usp=sharing"
    }
  },
  {
    "id": "nit-arunachal-pradesh-non-teaching",
    "title": "NIT Arunachal Pradesh Jobs 2025 – Registrar, Engineer & Medical Officer Vacancies",
    "org": "NIT Arunachal Pradesh Jobs 2025 – Registrar, Engineer & Medical Officer Vacancies",
    "shortOrg": "NIT Arunachal Pradesh Jobs 202",
    "posts": "Arunachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Arunachal Pradesh State Government Recruitment",
    "state": "arunachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.nitap.ac.in/storage/pdf/ff86ead90795268ae19cc7c2ebf3b59f.pdf",
      "notificationUrl": "https://www.nitap.ac.in/storage/pdf/ff86ead90795268ae19cc7c2ebf3b59f.pdf",
      "websiteUrl": "https://www.nitap.ac.in/storage/pdf/ff86ead90795268ae19cc7c2ebf3b59f.pdf"
    }
  },
  {
    "id": "aphwcl-recruitment",
    "title": "APHWCL Recruitment 2025 Apply for 05 Junior Engineer Posts",
    "org": "APHWCL",
    "shortOrg": "APHWCL",
    "posts": "Junior Engineer",
    "vacancies": 5,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Arunachal Pradesh State Government Recruitment",
    "state": "arunachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1A_zlsotRFZlhjSQeAJ5gXVBrdGczYAwf/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1A_zlsotRFZlhjSQeAJ5gXVBrdGczYAwf/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1A_zlsotRFZlhjSQeAJ5gXVBrdGczYAwf/view?usp=sharing"
    }
  },
  {
    "id": "powergrid-apprentice-recruitment",
    "title": "POWERGRID Apprentice Recruitment 2026 - Apply Online for 270 Posts | Last Date 10-09-2026",
    "org": "POWERGRID Apprentice",
    "shortOrg": "POWERGRID Apprentice",
    "posts": "Arunachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Arunachal Pradesh State Government Recruitment",
    "state": "arunachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "10-09-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://rozgardwaar.com/2026/08/powergrid-apprentice-recruitment.html",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "bank-of-baroda-local-bank-officer",
    "title": "Bank of Baroda Local Bank Officer Recruitment 2026 – Apply Online for 2482 Posts | Last Date 07-09-2026",
    "org": "Bank of Baroda Local Bank Officer",
    "shortOrg": "Bank of Baroda Local Bank Offi",
    "posts": "Arunachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Arunachal Pradesh State Government Recruitment",
    "state": "arunachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "07-09-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1KcB8eJX32X7FLyzTeb7AyR4GIMin86JU/view?usp=sharing",
      "notificationUrl": "https://drive.google.com/file/d/1KcB8eJX32X7FLyzTeb7AyR4GIMin86JU/view?usp=sharing",
      "websiteUrl": "https://drive.google.com/file/d/1KcB8eJX32X7FLyzTeb7AyR4GIMin86JU/view?usp=sharing"
    }
  },
  {
    "id": "nerist-recruitment-2014",
    "title": "NERIST Recruitment 2016 Faculty Posts (66 Vacancies)",
    "org": "NERIST",
    "shortOrg": "NERIST",
    "posts": "Arunachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Arunachal Pradesh State Government Recruitment",
    "state": "arunachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://nerist.ac.in/pdf/Advt.3.2016.pdf",
      "notificationUrl": "https://nerist.ac.in/pdf/Advt.3.2016.pdf",
      "websiteUrl": "https://nerist.ac.in/pdf/Advt.3.2016.pdf"
    }
  },
  {
    "id": "nerist-recruitment-2012-teaching-and",
    "title": "NERIST Recruitment 2012 Teaching and Non-Teaching Posts",
    "org": "NERIST",
    "shortOrg": "NERIST",
    "posts": "Arunachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Arunachal Pradesh State Government Recruitment",
    "state": "arunachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://www.nerist.ac.in/pdf/Full.pdf",
      "notificationUrl": "http://www.nerist.ac.in/pdf/Full.pdf",
      "websiteUrl": "http://www.nerist.ac.in/pdf/Full.pdf"
    }
  },
  {
    "id": "rgukt-recruitment-2014",
    "title": "RGUKT Recruitment 2023: 660 Faculty Vacancies - Notification, Apply Online",
    "org": "RGUKT",
    "shortOrg": "RGUKT",
    "posts": "Arunachal Pradesh State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Arunachal Pradesh State Government Recruitment",
    "state": "arunachal-pradesh",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://recruitments.universities.ap.gov.in",
      "notificationUrl": "https://recruitments.universities.ap.gov.in/PDF/NOTIFICATIONS/18_RGUKT/RGUKT-Detailed%20Notification%20No%204-Professors.pdf",
      "websiteUrl": "http://recruitments.universities.ap.gov.in"
    }
  },
  {
    "id": "manipur-civil-service-examination",
    "title": "Manipur Civil Service Exam 2019 Apply Online (70 Vacancies)",
    "org": "Manipur Civil Service Exam 2019 Apply Online (70 Vacancies)",
    "shortOrg": "Manipur Civil Service Exam 201",
    "posts": "Manipur State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Manipur State Government Recruitment",
    "state": "manipur",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://mpscmanipur.gov.in/files/MCSCCE2019/Advt_MSCCCE_2019.pdf",
      "notificationUrl": "https://mpscmanipur.gov.in/files/MCSCCE2019/Advt_MSCCCE_2019.pdf",
      "websiteUrl": "https://mpscmanipur.gov.in/files/MCSCCE2019/Advt_MSCCCE_2019.pdf"
    }
  },
  {
    "id": "manipur-civil-service-exam-2014",
    "title": "Manipur MPSC Recruitment 2014 Medical Officer (579 Vacancies)",
    "org": "Manipur MPSC",
    "shortOrg": "Manipur MPSC",
    "posts": "Manipur State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Manipur State Government Recruitment",
    "state": "manipur",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWM0YhNbBI57mhlnkYzvw8dFO_EdFj2_QDL8jhE6GQPOS0OGMiayCmKnygP2vIUmuN1GM-1ahVeht77RWZSjQDWmat6woVNeY2gR2gb4RBdwiiUPnVx7o2VX6ufx3g-0leSdFqcs_vUbA/s1600-h/MPSC-Manipur-Jobs-2014%25255B3%25255D.png",
      "notificationUrl": "http://mpscmanipur.gov.in/files/advertisementmhsgradeivseptember2014.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWM0YhNbBI57mhlnkYzvw8dFO_EdFj2_QDL8jhE6GQPOS0OGMiayCmKnygP2vIUmuN1GM-1ahVeht77RWZSjQDWmat6woVNeY2gR2gb4RBdwiiUPnVx7o2VX6ufx3g-0leSdFqcs_vUbA/s1600-h/MPSC-Manipur-Jobs-2014%25255B3%25255D.png"
    }
  },
  {
    "id": "manipur-forest-service-grade-ii",
    "title": "Manipur Forest Service Grade-II Recruitment 2013 - 13 Assistant Conservator of Forests",
    "org": "Manipur Forest Service Grade-II",
    "shortOrg": "Manipur Forest Service Grade-I",
    "posts": "Manipur State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Manipur State Government Recruitment",
    "state": "manipur",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieC14cNNYNmMHt_9PMJLQtd6dTNtyFhuISyzLjVvl8ZyBR2zxmQbHQjGAyfDdxSIXuO9dtWLP-jydFZXLPqQVoESer3FnQiQVbtcevaNzUPA1IfpvOrCQ8dpPB8zglKTuCoULgL_vlZSU/s1600-h/MPSC%252520Manipur%252520Forest%252520Service%252520Grade%252520II%25255B4%25255D.jpg",
      "notificationUrl": "http://mpscmanipur.gov.in/files/Adv_Assistant.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieC14cNNYNmMHt_9PMJLQtd6dTNtyFhuISyzLjVvl8ZyBR2zxmQbHQjGAyfDdxSIXuO9dtWLP-jydFZXLPqQVoESer3FnQiQVbtcevaNzUPA1IfpvOrCQ8dpPB8zglKTuCoULgL_vlZSU/s1600-h/MPSC%252520Manipur%252520Forest%252520Service%252520Grade%252520II%25255B4%25255D.jpg"
    }
  },
  {
    "id": "faculty-govt-jobs",
    "title": "Latest Faculty Govt Jobs 2026 (500+ Vacancies Open Now)",
    "org": "Latest Faculty Govt Jobs 2026 (500+ Vacancies Open Now)",
    "shortOrg": "Latest Faculty Govt Jobs 2026 ",
    "posts": "Manipur State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Manipur State Government Recruitment",
    "state": "manipur",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2014/12/faculty-govt-jobs.html",
      "notificationUrl": "https://rozgardwaar.com/2014/12/faculty-govt-jobs.html",
      "websiteUrl": "https://rozgardwaar.com/2014/12/faculty-govt-jobs.html"
    }
  },
  {
    "id": "rims-imphal-recruitment-2014",
    "title": "RIMS Imphal Recruitment 2021 Walk in Interview | 40 Junior / Senior Residents, Medical Doctor Vacancies",
    "org": "RIMS Imphal",
    "shortOrg": "RIMS Imphal",
    "posts": "Manipur State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Manipur State Government Recruitment",
    "state": "manipur",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://www.rims.edu.in/secure/wp-content/uploads/Notice-doctors-17-8-2021.pdf",
      "notificationUrl": "http://www.rims.edu.in/secure/wp-content/uploads/Notice-doctors-17-8-2021.pdf",
      "websiteUrl": "http://www.rims.edu.in/secure/wp-content/uploads/Notice-doctors-17-8-2021.pdf"
    }
  },
  {
    "id": "rims-imphal-recruitment-2011",
    "title": "RIMS Imphal Recruitment 2011 | www.rims.edu.in",
    "org": "RIMS Imphal",
    "shortOrg": "RIMS Imphal",
    "posts": "Manipur State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Manipur State Government Recruitment",
    "state": "manipur",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJWB3sl4KSU2lskDDWh9Vyb-rOApwgXBsY20XHDT-MSVvH0CS45rEhFIQjoxsgrLG0KacyFB7HzEsKXdN0g2Q3AKy79zYBK7RKsd8v7eal1JGPFsHhTd36ZI5lPAKtkmCIzdIEyvsPxc4/s1600-h/RIMS%25255B4%25255D.jpg",
      "notificationUrl": "http://www.rims.edu.in/advertisement/Nursing%20College-Appintment%20of%20Lecturer%20&amp;%20Tutor.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJWB3sl4KSU2lskDDWh9Vyb-rOApwgXBsY20XHDT-MSVvH0CS45rEhFIQjoxsgrLG0KacyFB7HzEsKXdN0g2Q3AKy79zYBK7RKsd8v7eal1JGPFsHhTd36ZI5lPAKtkmCIzdIEyvsPxc4/s1600-h/RIMS%25255B4%25255D.jpg"
    }
  },
  {
    "id": "meghalaya-police-online-apply",
    "title": "Meghalaya Police Online Apply 2024: 2968 Vacancies @ crb2024.apply-gov.in",
    "org": "Meghalaya Police Online Apply 2024: 2968 Vacancies @ crb2024.apply-gov.in",
    "shortOrg": "Meghalaya Police Online Apply ",
    "posts": "Meghalaya State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Meghalaya State Government Recruitment",
    "state": "meghalaya",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEB3xuB_nyGQv5Zoq8yJe8ez_iYiq0z4JxWpQQj8OeW6UvQgOI5MB1ANY22NMzm04e3jDZhx0ca9tyLZDfGs2ry93PzpcXw1CI3lJbwRvOC1qoyB_YG-xHTKE1Hn2x4H4HebAL8_CIEUPJvVn7bWzDdnyyoVW9Hpekex5dXTy6VIl-LXnltqTrxEnP0Ds/s450/Meghalaya%20Police%20Vacancy%202024.webp",
      "notificationUrl": "https://rozgardwaar.com/2024/04/Meghalaya-Police-Online-Apply.html",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEB3xuB_nyGQv5Zoq8yJe8ez_iYiq0z4JxWpQQj8OeW6UvQgOI5MB1ANY22NMzm04e3jDZhx0ca9tyLZDfGs2ry93PzpcXw1CI3lJbwRvOC1qoyB_YG-xHTKE1Hn2x4H4HebAL8_CIEUPJvVn7bWzDdnyyoVW9Hpekex5dXTy6VIl-LXnltqTrxEnP0Ds/s450/Meghalaya%20Police%20Vacancy%202024.webp"
    }
  },
  {
    "id": "meghalaya-police-recruitment",
    "title": "Meghalaya Police Recruitment 2021 Apply 17 IT Consultants, DEO Vacancies",
    "org": "Meghalaya Police",
    "shortOrg": "Meghalaya Police",
    "posts": "Meghalaya State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Meghalaya State Government Recruitment",
    "state": "meghalaya",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://megpolice.gov.in/sites/default/files/advertisment-19.7.2021.pdf",
      "notificationUrl": "https://megpolice.gov.in/sites/default/files/advertisment-19.7.2021.pdf",
      "websiteUrl": "https://megpolice.gov.in/sites/default/files/advertisment-19.7.2021.pdf"
    }
  },
  {
    "id": "govt-of-manipur-recruitment-2026-apply",
    "title": "Govt of Manipur Recruitment 2026 – Apply for 11 Various Contract Posts | Last Date 31-08-2026",
    "org": "Govt of Manipur",
    "shortOrg": "Govt of Manipur",
    "posts": "Various Contract",
    "vacancies": 11,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Meghalaya State Government Recruitment",
    "state": "meghalaya",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "31-08-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.iimshillong.ac.in/wp-content/uploads/2026/08/Recruitment-State-Support-Mission-Manipur.pdf",
      "notificationUrl": "https://www.iimshillong.ac.in/wp-content/uploads/2026/08/Recruitment-State-Support-Mission-Manipur.pdf",
      "websiteUrl": "https://www.iimshillong.ac.in/wp-content/uploads/2026/08/Recruitment-State-Support-Mission-Manipur.pdf"
    }
  },
  {
    "id": "iim-shillong-administrative-posts",
    "title": "IIM Shillong Administrative Posts Recruitment 2026 - Apply Online for 07 Various Posts | Last Date 20-07-2026",
    "org": "IIM Shillong Administrative Posts",
    "shortOrg": "IIM Shillong Administrative Po",
    "posts": "Various",
    "vacancies": 7,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Meghalaya State Government Recruitment",
    "state": "meghalaya",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "20-07-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.iimshillong.ac.in/wp-content/uploads/2026/06/Website-Advt.-NON-FACULTY-JUNE-2026.pdf",
      "notificationUrl": "https://www.iimshillong.ac.in/wp-content/uploads/2026/06/Website-Advt.-NON-FACULTY-JUNE-2026.pdf",
      "websiteUrl": "https://www.iimshillong.ac.in/wp-content/uploads/2026/06/Website-Advt.-NON-FACULTY-JUNE-2026.pdf"
    }
  },
  {
    "id": "iim-shillong-administrative-recruitment",
    "title": "IIM Shillong Administrative Recruitment 2026 – Apply Online for 06 Posts | Last Date 20-07-2026",
    "org": "IIM Shillong Administrative",
    "shortOrg": "IIM Shillong Administrative",
    "posts": "Meghalaya State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Meghalaya State Government Recruitment",
    "state": "meghalaya",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "20-07-2026",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.iimshillong.ac.in/wp-content/uploads/2026/06/Website-Advt.-NON-FACULTY-JUNE-2026.pdf",
      "notificationUrl": "https://www.iimshillong.ac.in/wp-content/uploads/2026/06/Website-Advt.-NON-FACULTY-JUNE-2026.pdf",
      "websiteUrl": "https://www.iimshillong.ac.in/wp-content/uploads/2026/06/Website-Advt.-NON-FACULTY-JUNE-2026.pdf"
    }
  },
  {
    "id": "iim-shillong-academic-associate",
    "title": "IIM Shillong Academic Associate Teaching Recruitment 2026 Apply Online | Last Date 15 April 2026",
    "org": "IIM Shillong Academic Associate Teaching",
    "shortOrg": "IIM Shillong Academic Associat",
    "posts": "Meghalaya State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Meghalaya State Government Recruitment",
    "state": "meghalaya",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.iimshillong.ac.in/wp-content/uploads/2026/03/Website-Advt.-Academic-Associate-March-2026.pdf",
      "notificationUrl": "https://www.iimshillong.ac.in/wp-content/uploads/2026/03/Website-Advt.-Academic-Associate-March-2026.pdf",
      "websiteUrl": "https://www.iimshillong.ac.in/wp-content/uploads/2026/03/Website-Advt.-Academic-Associate-March-2026.pdf"
    }
  },
  {
    "id": "iim-shillong-recruitment",
    "title": "IIM Shillong Recruitment 2025 Apply Online for Administrative Posts | Last Date 05 December",
    "org": "IIM Shillong",
    "shortOrg": "IIM Shillong",
    "posts": "Meghalaya State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Meghalaya State Government Recruitment",
    "state": "meghalaya",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.iimshillong.ac.in/wp-content/uploads/2025/10/Website-Advt.-Non-Faculty-OCT-2025-1.pdf",
      "notificationUrl": "https://www.iimshillong.ac.in/wp-content/uploads/2025/10/Website-Advt.-Non-Faculty-OCT-2025-1.pdf",
      "websiteUrl": "https://www.iimshillong.ac.in/wp-content/uploads/2025/10/Website-Advt.-Non-Faculty-OCT-2025-1.pdf"
    }
  },
  {
    "id": "iim-shillong-fellowship-recruitment",
    "title": "IIM Shillong Fellowship Recruitment 2025 - Apply Online for 100 Posts",
    "org": "IIM Shillong Fellowship",
    "shortOrg": "IIM Shillong Fellowship",
    "posts": "Meghalaya State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Meghalaya State Government Recruitment",
    "state": "meghalaya",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.iimshillong.ac.in/wp-content/uploads/2025/06/AP-Fellows-Advt.pdf",
      "notificationUrl": "https://www.iimshillong.ac.in/wp-content/uploads/2025/06/AP-Fellows-Advt.pdf",
      "websiteUrl": "https://www.iimshillong.ac.in/wp-content/uploads/2025/06/AP-Fellows-Advt.pdf"
    }
  },
  {
    "id": "iim-shillong-recruitment-2014",
    "title": "IIM Shillong Recruitment 2016 Apply Online (Faculty, Officer, Hostel Manager)",
    "org": "IIM Shillong",
    "shortOrg": "IIM Shillong",
    "posts": "Meghalaya State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Meghalaya State Government Recruitment",
    "state": "meghalaya",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2014/06/iim-shillong-recruitment-2014.html",
      "notificationUrl": "http://www.iimshillong.in/careers/april16/Advertisement%20Website%20FACULTY%20apr2016.pdf",
      "websiteUrl": "https://rozgardwaar.com/2014/06/iim-shillong-recruitment-2014.html"
    }
  },
  {
    "id": "iim-shillong-jobs-2015",
    "title": "IIM Shillong Jobs 2015 Resident Medical Officer",
    "org": "IIM Shillong Jobs 2015 Resident Medical Officer",
    "shortOrg": "IIM Shillong Jobs 2015 Residen",
    "posts": "Meghalaya State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Meghalaya State Government Recruitment",
    "state": "meghalaya",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://rozgardwaar.com/2015/02/iim-shillong-jobs-2015.html",
      "notificationUrl": "http://www.iimshillong.in/careers/Medical%20Officer%20Advt%202015.pdf",
      "websiteUrl": "https://rozgardwaar.com/2015/02/iim-shillong-jobs-2015.html"
    }
  },
  {
    "id": "mizoram-police-constable-recruitment",
    "title": "Mizoram Police Constable Recruitment 2025 Apply Online Now for 259 Vacancies",
    "org": "Mizoram Police Constable",
    "shortOrg": "Mizoram Police Constable",
    "posts": "Mizoram State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Mizoram State Government Recruitment",
    "state": "mizoram",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://mizopolicerec.in/RAE.pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "mhssp-recruitment",
    "title": "MHSSP Recruitment 2025: Apply Online for 3 Consultant & Manager Posts",
    "org": "MHSSP",
    "shortOrg": "MHSSP",
    "posts": "Consultant & Manager",
    "vacancies": 3,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Mizoram State Government Recruitment",
    "state": "mizoram",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://drive.google.com/file/d/1ubjBchG7_AgsH5OL0mVQ6R4YsFYM-Hpo/view",
      "notificationUrl": "https://drive.google.com/file/d/1ubjBchG7_AgsH5OL0mVQ6R4YsFYM-Hpo/view",
      "websiteUrl": "https://drive.google.com/file/d/1ubjBchG7_AgsH5OL0mVQ6R4YsFYM-Hpo/view"
    }
  },
  {
    "id": "nagaland-police-recruitment",
    "title": "Nagaland Police Recruitment 2025 Apply Online for 1176 Constable GD Posts | Last Date 22 November",
    "org": "Nagaland Police",
    "shortOrg": "Nagaland Police",
    "posts": "Constable GD",
    "vacancies": 1176,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Nagaland State Government Recruitment",
    "state": "nagaland",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o",
      "notificationUrl": "https://nagalandpolicerecruitment.in/api/storage/Nagaland-Police-Constable-GD-Recruitment-2025-Advertisement.pdf",
      "websiteUrl": "https://whatsapp.com/channel/0029Va4QP8d5kg7D4uJ29Q0o"
    }
  },
  {
    "id": "nagaland-police-recruitment-2015",
    "title": "Nagaland Police Recruitment 2015 (308 Vacancies)",
    "org": "Nagaland Police",
    "shortOrg": "Nagaland Police",
    "posts": "Nagaland State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Nagaland State Government Recruitment",
    "state": "nagaland",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1WkKQRNpLjyHmCft1-bRcbWRdLgg1ucBe_LIHqu2Co47iWvLcYoXVoJa_wz6Npmk_kSqdIVHwoFMfg9sdysWpHYzQOuYn2mnFGEGLBhx9ALyJYWOl8pPQ5TiAK2yEDi4nvT5oyLDGqVg/s1600-h/Nagaland-Police-Jobs-2015%25255B3%25255D.png",
      "notificationUrl": "http://nagapol.gov.in/PDF/Advertisement.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1WkKQRNpLjyHmCft1-bRcbWRdLgg1ucBe_LIHqu2Co47iWvLcYoXVoJa_wz6Npmk_kSqdIVHwoFMfg9sdysWpHYzQOuYn2mnFGEGLBhx9ALyJYWOl8pPQ5TiAK2yEDi4nvT5oyLDGqVg/s1600-h/Nagaland-Police-Jobs-2015%25255B3%25255D.png"
    }
  },
  {
    "id": "tpsc-agriculture-officer-recruitment",
    "title": "TPSC Agriculture Officer Recruitment 2023 Apply Online | Tripura Agriculture Officer 60 Vacancies",
    "org": "TPSC Agriculture Officer",
    "shortOrg": "TPSC Agriculture Officer",
    "posts": "Tripura State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tripura State Government Recruitment",
    "state": "tripura",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEay1QJ7-yKt4mYUTbtpdqucWW_RX99BvCRG9L-G-RLBwmP-7X41UT4bekCDsBijGJHUEM_in77ta1atUtzPlU2P7gu9-WkgaaIOhZH6VVKfbJ9OfTMEeFdjUgrFWxKDJTdJFimKqcDWG5Yx9rtjNcdvLlXPlQoM5UY-lBBZh129heN0E1LC6Cfi1Rci8/s450/TPSC-Agriculture-Officer-indgovtjobs.webp",
      "notificationUrl": "https://tpsc.tripura.gov.in/sites/default/files/advt._no.102023_01082023.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEay1QJ7-yKt4mYUTbtpdqucWW_RX99BvCRG9L-G-RLBwmP-7X41UT4bekCDsBijGJHUEM_in77ta1atUtzPlU2P7gu9-WkgaaIOhZH6VVKfbJ9OfTMEeFdjUgrFWxKDJTdJFimKqcDWG5Yx9rtjNcdvLlXPlQoM5UY-lBBZh129heN0E1LC6Cfi1Rci8/s450/TPSC-Agriculture-Officer-indgovtjobs.webp"
    }
  },
  {
    "id": "tripura-police-recruitment",
    "title": "Tripura Police Recruitment 2022 Selection for 1000 Constable Vacancies",
    "org": "Tripura Police",
    "shortOrg": "Tripura Police",
    "posts": "Constable",
    "vacancies": 1000,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tripura State Government Recruitment",
    "state": "tripura",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://tripurapolice.gov.in/files/uploaded-file/Recruitment%20constable%20men%20and%20women.pdf",
      "notificationUrl": "https://tripurapolice.gov.in/files/uploaded-file/Recruitment%20constable%20men%20and%20women.pdf",
      "websiteUrl": "https://tripurapolice.gov.in/files/uploaded-file/Recruitment%20constable%20men%20and%20women.pdf"
    }
  },
  {
    "id": "tpsc-si-recruitment",
    "title": "Tripura Police SI Recruitment 2019 - Apply Online 53 Vacancies",
    "org": "Tripura Police SI",
    "shortOrg": "Tripura Police SI",
    "posts": "Tripura State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tripura State Government Recruitment",
    "state": "tripura",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://www.tpsc.gov.in/2019/090319.pdf",
      "notificationUrl": "http://www.tpsc.gov.in/2019/090319.pdf",
      "websiteUrl": "http://www.tpsc.gov.in/2019/090319.pdf"
    }
  },
  {
    "id": "nit-agartala-group-officer-recruitment",
    "title": "NIT Agartala Group A Officer Recruitment 2026 - Apply Online for 06 Posts | Last Date 16 April 2026",
    "org": "NIT Agartala Group A Officer",
    "shortOrg": "NIT Agartala Group A Officer",
    "posts": "Tripura State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tripura State Government Recruitment",
    "state": "tripura",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.nita.ac.in/MO_10-03-2026_Advt-GrA-March2026_admin.pdf",
      "notificationUrl": "https://www.nita.ac.in/MO_10-03-2026_Advt-GrA-March2026_admin.pdf",
      "websiteUrl": "https://www.nita.ac.in/MO_10-03-2026_Advt-GrA-March2026_admin.pdf"
    }
  },
  {
    "id": "nit-agartala-faculty-recruitment-2026",
    "title": "NIT Agartala Faculty Recruitment 2026 Apply Online for 32 Posts | Last Date 15 April 2026",
    "org": "NIT Agartala Faculty",
    "shortOrg": "NIT Agartala Faculty",
    "posts": "Tripura State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tripura State Government Recruitment",
    "state": "tripura",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.nita.ac.in/MO_23-02-2026_Advt-Prof-AssoProf-Feb2026_admin.pdf",
      "notificationUrl": "https://www.nita.ac.in/MO_23-02-2026_Advt-Prof-AssoProf-Feb2026_admin.pdf",
      "websiteUrl": "https://www.nita.ac.in/MO_23-02-2026_Advt-Prof-AssoProf-Feb2026_admin.pdf"
    }
  },
  {
    "id": "nit-agartala-officer-recruitment-2026",
    "title": "NIT Agartala Officer Recruitment 2026 Apply Online | Last Date 16 April 2026",
    "org": "NIT Agartala Officer",
    "shortOrg": "NIT Agartala Officer",
    "posts": "Tripura State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tripura State Government Recruitment",
    "state": "tripura",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.nita.ac.in/MO_10-03-2026_Advt-GrA-March2026_admin.pdf",
      "notificationUrl": "https://www.nita.ac.in/MO_10-03-2026_Advt-GrA-March2026_admin.pdf",
      "websiteUrl": "https://www.nita.ac.in/MO_10-03-2026_Advt-GrA-March2026_admin.pdf"
    }
  },
  {
    "id": "nit-agartala-recruitment",
    "title": "NIT Agartala Recruitment 2024: Apply Online for 47 Assistant Professor Posts",
    "org": "NIT Agartala",
    "shortOrg": "NIT Agartala",
    "posts": "Assistant Professor",
    "vacancies": 47,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tripura State Government Recruitment",
    "state": "tripura",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://www.nita.ac.in/Minutes_Others/Recruitment/Addendum_AssttProf_Aug24.pdf",
      "notificationUrl": "https://www.nita.ac.in/Minutes_Others/Recruitment/Addendum_AssttProf_Aug24.pdf",
      "websiteUrl": "https://www.nita.ac.in/Minutes_Others/Recruitment/Addendum_AssttProf_Aug24.pdf"
    }
  },
  {
    "id": "nit-agartala-recruitment-2015-assistant",
    "title": "NIT Agartala Recruitment 2015 Assistant Professors, Registrar (46 Vacancies)",
    "org": "NIT Agartala",
    "shortOrg": "NIT Agartala",
    "posts": "Tripura State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tripura State Government Recruitment",
    "state": "tripura",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://www.nita.ac.in/NITAmain/news--events/Advt_AsstProf_NITAgartala_10042015.pdf",
      "notificationUrl": "http://www.nita.ac.in/NITAmain/news--events/Advt_AsstProf_NITAgartala_10042015.pdf",
      "websiteUrl": "http://www.nita.ac.in/NITAmain/news--events/Advt_AsstProf_NITAgartala_10042015.pdf"
    }
  },
  {
    "id": "nit-agartala-recruitment-2012-assistant",
    "title": "NIT Agartala Recruitment 2012 Assistant Professor and Technical Assistant",
    "org": "NIT Agartala",
    "shortOrg": "NIT Agartala",
    "posts": "Tripura State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tripura State Government Recruitment",
    "state": "tripura",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsfRAV9wzjD5fDi-x_ISU-jdm_1_XajAiq64tX2uhDLn44fgqmtN0MzbLTmiKwA6QUobW2dEMT5gU-wNxdjsiLVcwdiY9mgj9p-ZbZbWOF9E5CoqcBSLt1n48dHMP0LOWMT_g-1xISVBw/s1600-h/NIT%252520Agatala%25255B5%25255D.jpg",
      "notificationUrl": "http://www.nitagartala.in/NITAmain/news--events/Advt_Civil_Pub_19-10-12.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsfRAV9wzjD5fDi-x_ISU-jdm_1_XajAiq64tX2uhDLn44fgqmtN0MzbLTmiKwA6QUobW2dEMT5gU-wNxdjsiLVcwdiY9mgj9p-ZbZbWOF9E5CoqcBSLt1n48dHMP0LOWMT_g-1xISVBw/s1600-h/NIT%252520Agatala%25255B5%25255D.jpg"
    }
  },
  {
    "id": "nit-agartala-recruitment-2011-assistant",
    "title": "NIT Agartala Recruitment 2011 Assistant Professor | www.nitagartala.in",
    "org": "NIT Agartala",
    "shortOrg": "NIT Agartala",
    "posts": "Tripura State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Tripura State Government Recruitment",
    "state": "tripura",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzk78C7a0gNY7f1o1mHrX75odhCL54UztkYvH_5tRd8NYEFfq0S0tPhNzxGQkjZq5xCV6vp9AvqxcmijxN71n8RNCL5Gk3F34Q-ut5Dl6Yf0DmlVKNZKRfsN5svbpE8R21PrsRQiL7IVY/s1600-h/NIT%20Agartala%5B5%5D.jpg",
      "notificationUrl": "http://www.nitagartala.in/NITAmain/news--events/chemical_walkinintv.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzk78C7a0gNY7f1o1mHrX75odhCL54UztkYvH_5tRd8NYEFfq0S0tPhNzxGQkjZq5xCV6vp9AvqxcmijxN71n8RNCL5Gk3F34Q-ut5Dl6Yf0DmlVKNZKRfsN5svbpE8R21PrsRQiL7IVY/s1600-h/NIT%20Agartala%5B5%5D.jpg"
    }
  },
  {
    "id": "sikkim-public-service-commission",
    "title": "Sikkim Public Service Commission Recruitment 2014 Sub-Inspector (23 Vacancies)",
    "org": "Sikkim Public Service Commission",
    "shortOrg": "Sikkim Public Service Commissi",
    "posts": "Sikkim State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Sikkim State Government Recruitment",
    "state": "sikkim",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://spscskm.gov.in/documents/2014%20SI%20AD.pdf",
      "notificationUrl": "http://spscskm.gov.in/documents/2014%20SI%20AD.pdf",
      "websiteUrl": "http://spscskm.gov.in/documents/2014%20SI%20AD.pdf"
    }
  },
  {
    "id": "sikkim-public-service-commission-v502",
    "title": "Sikkim Public Service Commission Recruitment 2012 Sub Inspector (15 Posts)",
    "org": "Sikkim Public Service Commission",
    "shortOrg": "Sikkim Public Service Commissi",
    "posts": "Sikkim State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Sikkim State Government Recruitment",
    "state": "sikkim",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidASLCr53IMMpSNJBuzKs31ykRS2WNzm_F6Gkohm94MeaQI8OSRv9n7E8C4O91iZ1QHlqb2DiAYQ1FJxxwtOqWDBV0BRNGr7O92Q7H7kcPOxSuMcS5tG0zkeoB1KHpCBwgvojDIX124Kg/s1600-h/SKPSC%25255B4%25255D.jpg",
      "notificationUrl": "http://www.spscskm.gov.in/documents/SI%20AD%202012.pdf",
      "websiteUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidASLCr53IMMpSNJBuzKs31ykRS2WNzm_F6Gkohm94MeaQI8OSRv9n7E8C4O91iZ1QHlqb2DiAYQ1FJxxwtOqWDBV0BRNGr7O92Q7H7kcPOxSuMcS5tG0zkeoB1KHpCBwgvojDIX124Kg/s1600-h/SKPSC%25255B4%25255D.jpg"
    }
  },
  {
    "id": "sikkim-police-recruitment",
    "title": "Sikkim Police Recruitment 2018 Constables, Followers (54 Vacancies)",
    "org": "Sikkim Police",
    "shortOrg": "Sikkim Police",
    "posts": "Sikkim State Cadre Vacancies",
    "vacancies": 50,
    "salary": "Pay Matrix Level-4 to Level-10 (₹25,500 – ₹1,12,400/-) as per State Pay Rules",
    "qualificationText": "10th / 12th / Diploma / Graduate / Degree from recognized Board / University",
    "qualifications": [
      "graduate",
      "12th-pass",
      "10th-pass"
    ],
    "category": "state-govt",
    "subCategory": "Sikkim State Government Recruitment",
    "state": "sikkim",
    "importantDates": {
      "startDate": "2026-09-02",
      "lastDate": "2026-09-30",
      "examDate": "As per State Board Examination Schedule"
    },
    "fee": "As per State Reservation Rules (Refer Notification)",
    "ageLimit": "18 to 40 / 42 Years (State Norms Relaxation)",
    "ageRelaxation": "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
    "officialLinks": {
      "applyUrl": "http://sikkimpolice.nic.in/Archive_Employment/2018_Recruitments/SikkimPoliceRecruitment2018_Driver_Mechanic_Followers/1.Employment_Notice_2018_Driver_Mechanic_Follower.pdf",
      "notificationUrl": "http://sikkimpolice.nic.in/Archive_Employment/2018_Recruitments/SikkimPoliceRecruitment2018_Driver_Mechanic_Followers/1.Employment_Notice_2018_Driver_Mechanic_Follower.pdf",
      "websiteUrl": "http://sikkimpolice.nic.in/Archive_Employment/2018_Recruitments/SikkimPoliceRecruitment2018_Driver_Mechanic_Followers/1.Employment_Notice_2018_Driver_Mechanic_Follower.pdf"
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
