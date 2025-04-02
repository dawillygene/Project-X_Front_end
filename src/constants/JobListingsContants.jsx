// src/constants/JobListingsConstants.js
export const jobCategories = [
    { id: 1, name: "Accounting, controlling, finance", count: 0 },
    { id: 2, name: "Health and social professions", count: 3 },
    { id: 3, name: "HR, training", count: 0 },
    { id: 4, name: "IT, new technologies", count: 44 },
    { id: 5, name: "Legal", count: 0 },
    { id: 6, name: "Management", count: 1 },
    { id: 7, name: "Marketing, communication, quality", count: 4 },
    { id: 8, name: "Production, maintenance", count: 2 },
    { id: 9, name: "Public buildings and works professions", count: 1 },
    { id: 10, name: "Purchases", count: 0 },
    { id: 11, name: "R&D, project management", count: 1 },
    { id: 12, name: "Sales", count: 2 },
    { id: 13, name: "Secretariat work, assistantship", count: 0 },
    { id: 14, name: "Services", count: 3 },
    { id: 15, name: "Telemarketing, telesaleship", count: 0 },
    { id: 16, name: "Tourism, hotel business and catering", count: 0 },
    { id: 17, name: "Transport, logistics", count: 0 },
  ];
  
  export const educationLevels = [
    { id: 1, name: "College", count: 5 },
    { id: 2, name: "Technical school", count: 2 },
    { id: 3, name: "Bachelor", count: 49 },
    { id: 4, name: "High school", count: 2 },
    { id: 5, name: "Master", count: 3 },
    { id: 6, name: "Doctorate", count: 3 },
    { id: 7, name: "HND", count: 3 },
  ];
  
  export const jobListings = [
    {
      id: 1,
      title: "Senior Software JAVA Engineer - Dodoma",
      company: "UNIVERSALGIVING",
      description: "Pro Bono: This position is tailored to a professional who wants to g...",
      education: "Bachelor",
      experience: "5 to 10 years",
      contract: "Fixed-term contract & Part-time work",
      region: "Arusha - Dar es Salaam & Dodoma",
      skills: "API - CSS - CVS - DOM - GIT - GITLAB - JAVA - JAVASCRIPT - JIRA - MYSQL - OPT - REACT - REST - UML",
      date: "02.04.2025",
      logo: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      title: "Assistant Volunteer - Dodoma",
      company: "UNIVERSALGIVING",
      description: "Volunteers: Volunteers have a heart for giving back.The Research A...",
      education: "Bachelor",
      experience: "2 to 5 years",
      contract: "Fixed-term contract & Part-time work",
      region: "Arusha - Dar es Salaam - Dodoma & Zanzibar",
      skills: "Communication - Marketing - OPT - Product Development - SALESFORCE",
      date: "02.04.2025",
      logo: "https://via.placeholder.com/100"
    },
    {
      id: 3,
      title: "Salesperson - Dar Es Salaam",
      company: "DONGFANG STEEL GROUP LIMITED",
      description: "We are looking for a Salesperson. Responsibilities: Develop relati...",
      education: "High school, Technical school, College, HND, Bachelor, Master & Doctorate",
      experience: "2 to 5 years et plus",
      contract: "Fixed-term contract",
      region: "Arusha - Dar es Salaam - Dodoma - Mbeya - Mwanza & Zanzibar",
      skills: "Communication - Marketing - Marketing Communication - Sales",
      date: "31.03.2025",
      logo: "https://via.placeholder.com/100"
    }
  ];
  
  export const sidebarContent = {
    categories: [
      { name: "Job category", items: jobCategories },
      { name: "Industries", items: [] },
      { name: "Education Level", items: educationLevels },
      { name: "Experience Level", items: [] },
      { name: "Job type", items: [] },
      { name: "Regions", items: [] },
      { name: "Spoken Languages", items: [] }
    ],
    jobCounts: {
      allJobs: 52,
      categories: ["All Jobs", "Management Jobs", "IT Jobs", "Sales Jobs"]
    },
    pagination: {
      currentPage: 1,
      totalPages: 3
    }
  };