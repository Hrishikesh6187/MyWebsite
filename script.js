// Theme switching functionality
const themeSwitch = document.querySelector('#checkbox');
const htmlElement = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
themeSwitch.checked = savedTheme === 'light';

// Handle theme switching
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Navigation active state
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 180) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
    reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
});

// Experience data
const experienceData = [
    {
        company: 'SMARTBUILD AUTOMATION',
        logo: 'Smartbuild.png',
        location: 'BANGALORE, INDIA',
        position: 'Software Development Intern',
        period: 'July 2023 - July 2024',
        achievements: [
            'Developed Smart Home Applications for IOS and Android platforms using Swift, Flutter, and Java allowing users to connect to in-house smart home devices.',
            'Integrated real-time device control and monitoring using REST APIs, enhancing user experience and efficiency by reducing lag by 50%.',
            'Implemented secure authentication systems for user management, ensuring data privacy and protection using a token system.',
            'Developed a Water Distribution application in Android Studio for ISKON temple, enabling them to streamline the daily delivery of 30,000 gallons of water to 50+ local schools and businesses.'
        ]
    }
];

// Function to populate experience section
function populateExperience() {
    const experienceGrid = document.querySelector('.experience-grid');
    experienceGrid.innerHTML = experienceData.map(exp => `
        <div class="experience-item" data-sr="enter">
            <div class="experience-header">
                <img src="${exp.logo}" alt="${exp.company} logo" class="experience-logo">
                <div class="experience-title">
                    <h3>${exp.company}</h3>
                    <p class="location">${exp.location}</p>
                </div>
            </div>
            <div class="experience-details">
                <h4>${exp.position}</h4>
                <p class="period">${exp.period}</p>
                <ul class="achievements">
                    ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Education data
const educationData = [
    {
        institution: 'CLEMSON UNIVERSITY',
        logo: 'Clemson.png',
        location: 'CLEMSON, SC',
        degree: 'Master\'s Degree in Computer Science',
        gpa: 'GPA 3.95/4.0',
        specialization: 'Specialization: Data Science, Software Development, and Network Security',
        period: 'Aug 2024 – Current'
    },
    {
        institution: 'BMS COLLEGE OF ENGINEERING',
        logo: 'BMS.png',
        location: 'BANGALORE, INDIA',
        degree: 'Bachelor\'s Degree in Information Science and Engineering',
        gpa: 'GPA: 8.88/10.0',
        period: 'Sep 2020 – July 2024'
    }
];

// Function to populate education section
function populateEducation() {
    const educationGrid = document.querySelector('.education-grid');
    educationGrid.innerHTML = educationData.map(edu => `
        <div class="education-item" data-sr="enter">
            <div class="education-header">
                <img src="${edu.logo}" alt="${edu.institution} logo" class="education-logo">
                <div class="education-title">
                    <h3>${edu.institution}</h3>
                    <p class="location">${edu.location}</p>
                </div>
            </div>
            <div class="education-details">
                <h4>${edu.degree}</h4>
                <p class="gpa">${edu.gpa}</p>
                ${edu.specialization ? `<p class="specialization">${edu.specialization}</p>` : ''}
                <p class="period">${edu.period}</p>
            </div>
        </div>
    `).join('');
}


// About Me data
const aboutData = `
    I’m a computer science graduate student at Clemson University with a deep interest in software engineering, AI, data science, and emerging technologies.
    I enjoy building real-world solutions that blend intelligent systems with intuitive user experiences.
    My recent experience includes developing cross-platform mobile applications, designing cloud-based architectures with AWS, and publishing research
    on Digital Twins in sustainable farming. I’m always exploring ways to combine creativity and code to build systems that are practical, impactful, efficient, and future-ready.
`;

// Function to populate About Me section
function populateAbout() {
    const aboutSection = document.querySelector('.about-text');
    if (aboutSection) {
        aboutSection.innerHTML = `<p>${aboutData}</p>`;
    }
}

// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});

// Skills data
function populateSkills() {
    const skills = {
      'Technical Skills & Coursework': [
        'Software Development',
        'Mobile App Development',
        'Web App Development',
        'Artificial Intelligence',
        'Machine Learning',
        'IoT',
        'DBMS',
        'Data Structures',
        'Object Oriented Programming',
        'Docker',
        'Cloud (AWS)',
      ],
      'Programming Languages': [
        'C', 'C++', 'Java', 'JavaScript', 'Python', 'SQL', 'Visual Basic', 'HTML', 'CSS',
      ]
    };
  
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;
    skillsGrid.innerHTML = '';
  
    const iconUrls = {
      'C': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/c/c-original.svg',
      'C++': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/cplusplus/cplusplus-original.svg',
      'Java': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/java/java-original.svg',
      'JavaScript': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/javascript/javascript-original.svg',
      'Python': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/python/python-original.svg',
      'SQL': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg',
      'HTML': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/html5/html5-original.svg',
      'CSS': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/css3/css3-original.svg',
      'Docker': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/docker/docker-original.svg',
      'Cloud (AWS)': 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      'Data Structures': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/python/python-original.svg',
      'Machine Learning': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/python/python-original.svg',
      'DBMS': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg',
      'Software Development': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/git/git-original.svg',
      'Mobile App Development': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/flutter/flutter-original.svg',
      'Web App Development': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/react/react-original.svg',
      'Object Oriented Programming': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/java/java-original.svg',
      'Artificial Intelligence': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/python/python-original.svg',
      'IoT': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/arduino/arduino-original.svg',
      'Visual Basic': 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/windows8/windows8-original.svg',
    };
  
    for (const category in skills) {
      const card = document.createElement('div');
      card.className = 'skill-card';
  
      const title = document.createElement('h3');
      title.textContent = category;
      title.className = 'skill-card-title';
      card.appendChild(title);
  
      const ul = document.createElement('ul');
      ul.className = 'skill-list';
  
      skills[category].forEach(skill => {
        const li = document.createElement('li');
  
        const img = document.createElement('img');
        img.src = iconUrls[skill] || '';
        img.alt = skill + ' logo';
        img.className = 'skill-icon';
  
        if (iconUrls[skill]) li.appendChild(img);
        li.appendChild(document.createTextNode(skill));
        ul.appendChild(li);
      });
  
      card.appendChild(ul);
      skillsGrid.appendChild(card);
    }
  }

const projectData = [
  {
    title: "Lead Scoring",
    summary: `A machine learning project that identifies high-potential customers by analyzing behavioral and demographic data from a banking dataset.
      XGBoost is used to clean and score the leads, enabling sales teams to personalize outreach and improve conversion rates.`,
    image: "LeadScoring.png",
    link: "https://github.com/Hrishikesh6187/LeadScore",
    skills: ["python", "ml", "jupyter"]
  },
  {
    title: "Exploring Digital Twin for Plant Growth Monitoring",
    summary: `This project integrates IoT sensors and real-time data streams with a cloud-based digital twin model on AWS to monitor plant health and growth.
      It provides actionable insights to optimize resources like water and fertilizers in order to promote sustainable farming practices.
      The research was published in IEEE Xplore as part of my undergraduate thesis work.`,
    image: "DigitalTwin.png",
    link: "https://ieeexplore.ieee.org/document/10334087",
    skills: ["raspberrypi", "aws", "iot", "ml"]
  },
  {
    title: "Everclean Home Servicing",
    summary: `Everclean Home Servicing is a web-based platform that connects homeowners with freelance service providers for a wide range of home maintenance needs. 
      Designed to be intuitive and accessible, the system supports both one-time and subscription-based bookings, making it easy for users to find affordable, high-quality help. 
      Unlike traditional service marketplaces, Everclean focuses exclusively on supporting freelancers—offering them tools for profile management, secure payments, and direct access to clients without marketing overhead.
      This approach empowers independent professionals while ensuring homeowners receive reliable, customized services.`,
    image: "everclean.jpg",
    link: "https://evercleanhomeservicingapp.netlify.app/",
    skills: ["html", "css", "javascript", "react"]
  },
  {
    title: "Modeling User Fatigue in Movie Recommendation Systems",
    summary: `This project adapts the FRec model from SIGIR 2024 to reduce user fatigue in movie recommendations by introducing diversity. 
Using the TMDB 5000 dataset, it combines self-attention, fatigue-gated recurrent units, and contrastive learning to balance relevance and novelty. 
This model is a template that can be implemented in any recommendation system to enhance user engagement and satisfaction.`,
    image: "UserFatigue.png",
    link: "https://github.com/Hrishikesh6187/UserFatigue",
    skills: ["ml", "python", "jupyter"]
  }
];

// Map skill names to icon URLs
const iconMap = {
  python: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/python/python-original.svg",
  ml: "Machine Learning Logo.png",
  jupyter: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg",
  raspberrypi: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/raspberrypi.svg",
  aws: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/amazonwebservices/amazonwebservices-original.svg",
  iot: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/arduino/arduino-original.svg",
  html: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/css3/css3-original.svg",
  javascript: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/javascript/javascript-original.svg",
  react: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/react/react-original.svg"
};

function populateProjects() {
  const projectsGrid = document.querySelector('.projects-grid');
  projectsGrid.innerHTML = "";

  projectData.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.background = `var(--card-color-${(index % 4) + 1})`;

    const skillsHtml = project.skills.map(skill => {
      const url = iconMap[skill];
      return url ? `<img class="project-skill-icon" data-skill="${skill}" src="${url}" alt="${skill}" title="${skill}">` : "";
    }).join("");

    card.innerHTML = `
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <a href="${project.link}" target="_blank" class="project-link">View case study</a>
        <div class="project-skills">${skillsHtml}</div>
        <div class="skill-label"></div>
      </div>
    `;

    projectsGrid.appendChild(card);
  });

  // Add hover listeners after cards are created
  document.querySelectorAll('.project-skill-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      console.log(icon.dataset.skill); // 👈 prints to console
      const label = icon.closest('.project-content').querySelector('.skill-label');
      if (label) label.textContent = icon.dataset.skill;
    });
    icon.addEventListener('mouseleave', () => {
      const label = icon.closest('.project-content').querySelector('.skill-label');
      if (label) label.textContent = "";
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateProjects();

  // Center scroll to middle card
  const scroller = document.querySelector('.projects-scroll-container');
  const grid = document.querySelector('.projects-grid');
  if (scroller && grid) {
    const middle = grid.scrollWidth / 2 - scroller.clientWidth / 2;
    scroller.scrollTo({ left: middle, behavior: 'smooth' });
  }
});


// Apply ScrollReveal to sections
sr.reveal('.section-title', { delay: 100 });
sr.reveal('.education-item', { interval: 200 });
sr.reveal('.experience-item', { interval: 200 });
sr.reveal('.about-text', { delay: 150, distance: '30px', origin: 'bottom' });
sr.reveal('.skill-category', { interval: 150 });

// Populate sections when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateEducation();
    populateExperience();
    populateAbout();
    console.log('Populating skills now...');
    populateSkills();
});

