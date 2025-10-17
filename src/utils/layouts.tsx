import { Slide1, Slide2, Slide3 } from "@/assets/Home";

export const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Jobs', href: '/jobs' },
      { name: 'Employers', href: '/employers' },
      { name: 'Candidates', href: '/candidates' },
      { name: 'Pages', href: '/pages' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Pricing Plan', href: '/pricing' },
      { name: 'Site Map', href: '/sitemap' },
      { name: 'Security Center', href: '/security' },
      { name: 'Our Team', href: '/team' },
      { name: 'Latest Blog', href: '/blog' },
    ],
    quickLinks: [
      { name: 'Find Jobs', href: '/jobs' },
      { name: 'Employers', href: '/employers' },
      { name: 'Candidates', href: '/candidates' },
      { name: 'Post Job', href: '/post-job' },
      { name: 'Sign In', href: '/signin' },
      { name: 'Sign Up', href: '/signup' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: "Faq's", href: '/faqs' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms Of Service', href: '/terms' },
      { name: 'Need Help', href: '/help' },
      { name: 'Live Chat', href: '/chat' },
    ],
    social: [
      { name: 'Facebook', href: '#', icon: 'facebook' },
      { name: 'Twitter', href: '#', icon: 'twitter' },
      { name: 'LinkedIn', href: '#', icon: 'linkedin' },
      { name: 'YouTube', href: '#', icon: 'youtube' },
    ],
  }
  
  export const companyInfo = {
    phone: '+91 9776666555',
    address: 'Plot No-HIG-42, Ground Floor, Gangadhar Meher Marg, Jayadev Vihar, Bhubaneswar, 751013',
    email: 'info@utkalone.com',
  }
  
  export const sliderArr = [
    {
      id: 1,
      img: Slide1,
      subheading: "500+ Jobs Available",
      heading: "Find Your Dream Job",
      description: "Explore a variety of job opportunities from top companies and find the perfect fit for your career goals.",
    },
    {
      id: 2,
      img: Slide2,
      subheading: "700+ Jobs Available",
      heading: "Build Your Future",
      description: "Find your next big opportunity with our extensive job listings that match your skills and aspirations.",
    },
    {
      id: 3,
      img: Slide3,
      subheading: "300+ Jobs Available",
      heading: "Shape Your Career Path",
      description: "Search through thousands of job listings across various industries and start your career journey today.",
    },
  ];
  

  export const menuData = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Jobs',
      link: '/Jobs',
    },
    {
      title: 'Employers',
      submenu: [
        { title: 'Dashboard', link: '/Employers/dashboard' },
        { title: 'Profile', link: '/Employers/companyprofile' },
        { title: 'Post A Job', link: '/Employers/postjobs' },
        { title: 'Manage Job', link: '/Employers/managejob' },
        { title: 'All Candidates', link: '/Employers/allcandidates' },
        { title: 'Shortlisted Resumes', link: '/Employers/shortlisted-resumes' },
        { title: 'Messages', link: '/Employers/messages' },
        { title: 'Resume Alerts', link: '/Employers/resumealertpage' },
        { title: 'Transaction', link: '/Employers/transactionpage' },
        { title: 'Settings', link: '/Employers/settings' },
      ],
    },
    {
      title: 'Candidates',
      submenu: [
        { title: 'Dashboard', link: '/Candidates/dashboard' },
        { title: 'My Profile', link: '/Candidates/myprofile' },
        { title: 'My Resume', link: '/Candidates/myresume' },
        { title: 'Applied Jobs', link: '/Candidates/appliedjob' },
        { title: 'Shortlisted Jobs', link: '/Candidates/shortlistedjobs' },
        { title: 'CV Manager', link: '/Candidates/cvmanager' },
        { title: 'Saved Jobs', link: '/Candidates/savedjobs' },
        { title: 'Messages', link: '/Candidates/messages' },
        { title: 'Job Alerts', link: '/Candidates/jobalertpage' },
        { title: 'Transaction', link: '/Candidates/transactionpage' },
        { title: 'Settings', link: '/Candidates/settings' },
      ],
    },
    {
      title: 'Pages',
      submenu: [
        { title: 'About Us', link: '/about-us' },
        { title: 'Our Team', link: '/our-team' },
        { title: 'Pricing Plan', link: '/pricing' },
        { title: 'FAQ', link: '/faq' },
        { title: 'Contact Us', link: '/contact' },
        { title: 'Testimonials', link: '/testimonials' },
        { title: 'Authentication', link: '/auth' },
        { title: '404 Error', link: '/404' },
        { title: 'Coming Soon', link: '/coming-soon' },
        { title: 'Terms Of Service', link: '/terms' },
        { title: 'Privacy Policy', link: '/privacy' },
      ],
    },
    {
      title: 'Blog',
      link: '/blog',
    },
    {
      title: 'Contact',
      link: '/contact',
    },
  ];
  

  export const navigationItems = [
    { label: 'Dashboard', path: '/Employers/dashboard' },
    { label: 'All Companies', path: '/Employers/allcompanies' },
    { label: 'All Candidates', path: '/Employers/allcandidates' },
    { label: 'Posted Jobs', path: '/Employers/managejob' },
    { label: 'Posted Campus', path: '/Employers/managecampus' },
    // { label: 'Company Profile', path: '/Employers/companyprofile' },
    // { label: 'Shortlisted Resumes', path: '/Employers/shortlistedresumes' },
    // { label: 'Messages', path: '/Employers/message' },
    { label: 'Post Job', path: '/Employers/transactionpage' },
    // { label: 'Resume Alerts', path: '/Employers/resumealertpage' },
    // { label: 'Delete Profile', path: '/Employers/deleteaccount' },
    { label: 'Settings', path: '/Employers/settings' },
    { label: 'Logout', path: '/Employers/logout' },
  ];
  
  
  export const cnavigationItems = [
    { label: 'Dashboard', path: '/Candidates/dashboard' },
    { label: 'My Profile', path: '/Candidates/myprofile' },
    { label: 'My Resume', path: '/Candidates/myresume' },
    { label: 'Applied jobs', path: '/Candidates/appliedjobs' },
    { label: 'Shortlisted Job', path: '/Candidates/shortlistedjobs' },
    { label: 'Cv Manager', path: '/Candidates/cvmanager' },
    { label: 'Saved Jobs', path: '/Candidates/savedjobs' },
    { label: 'Messages', path: '/Candidates/message' },
    { label: 'Transaction', path: '/Candidates/transactionpage' },
    { label: 'Job Alerts', path: '/Candidates/jobalertpage' },
    { label: 'Settings', path: '/Candidates/settings' },
    { label: 'Delete Profile', path: '/Candidates/deleteaccount' },
    { label: 'Logout', path: '/Candidates/logout' },
  ];
  