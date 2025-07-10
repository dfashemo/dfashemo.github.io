document.addEventListener('DOMContentLoaded', function() {
    const resumeData = {
        experience: [
            {
                title: 'SEO Tech Developer Intern',
                company: 'SEO - Sponsors for Educational Opportunity',
                duration: 'June 2025 - August 2025',
                description: 'In progress: '
            },
            {
                title: 'Customer Experience Specialist; Salesperson',
                company: 'CycleBar',
                duration: 'April 2023 - August 2023',
                description: 'Managed customer inquiries regarding account information and class-scheduling, executed new-member orientation; Maximized revenue by selling 20+ memberships per month and company-brand retail items through cold-calling and implementing social media marketing campaigns. Developed strong client engagement skills.'
            },
            {
                title: 'Coding Teacher',
                company: 'Code Ninjas',
                duration: 'October 2021 - January 2021',
                description: 'Instructed students aged 5-14 on coding curriculum including Java, Python, and C++; Developed individualized lesson plans to guide each student through curriculum integrating problem-solving, logic, and software design.'
            },
        ],
        skills: [
            {
                category: 'Programming Languages',
                items: ['Java', 'Python', 'SQL', 'JavaScript', 'OCaml']
            },
            {
                category: 'Frameworks & Libraries',
                items: ['React', 'Node.js','Express']
            },
            {
                category: 'Cloud & DevOps',
                items: ['Amazon Web Services (AWS)']
            },
            {
                category: 'Databases',
                items: ['MySQL', 'Amazon DynamoDB']
            },
            {
                category: 'Soft Skills',
                items: ['Problem Solving', 'Leadership', 'Communication', 'Creativity', 'Teamwork']
            },
            {
                category: 'Additional Skills & Tools',
                items: ['Microsoft Office Suite', 'Technical Writing', 'GitHub', 'Customer Service, Analysis, and Sales']
            }
        ],
        education: [
            {
                degree: 'Bachelor of Science in Engineering',
                institution: 'University of Pennsylvania | School of Engineering and Applied Science',
                duration: '2023 - 2027',
                description: 'Major: Networked and Social Systems Engineering - a specialized degree program centered around Computer Science, Economics, and Network Theory. Coursework includes: Programming Languages & Techniques I & II, Networked Life, Mathematical Foundations of Computer Science, Scalable & Cloud Computing, Market and Social Systems on the Internet, Microeconomics, and more.'
            },
            {
                degree: '',
                institution: '',
                duration: '',
                description: 'Minors: Engineering Entrepreneurship; Mathematics'
            }
        ],
        projects: [
            {
                title: 'InstaLite – Social Media Platform Development',
                description: 'Co-developed Instagram-inspired social media platform featuring secure user authentication, image uploads with facial embedding matching via ChromaDB, and real-time chat functionality. Engineered personalized content feeds using Apache Spark-powered ranking algorithm, integrating Apache Kafka for posts.',
                technologies: ['Apache Kafka', 'ChromaDB', 'Apache Spark', 'Amazon S3', 'DynamoDB', 'ChatGPT Integration','etc.' ]
            },
            {
                title: 'BookBase - Smart Book List Manager',
                description: 'Developed a full-stack web application for managing book lists with features like book search, reading status tracking, and AI-generated summaries. Implemented using Google Books API for book metadata, Google GenAI API for summaries, SQLite3 for data storage, and the Python Click library for the command line interface.',
                technologies: ['Python', 'SQLite3', 'Google Books API', 'Google GenAI API', 'Click Library']
            },
            {
                title: 'Full-Stack Hangman Game',
                description: 'Programmed an interactive version of popular computer game using Java and JavaFX for front-end user interface. Implemented backend logic with use of Java Collections, JUnit Components, 2D Arrays, File Input/Output to encapsulate various portions of the game onto an interactive user interface.',
                technologies: ['Java', 'JavaFX', 'JUnit', 'Java Collections', 'File I/O']
            },
            {
                title: 'United to Learn',
                description: 'Conducted a service project with a non-profit to help underfunded elementary schools combat teacher inconsistency. Interviewed six Dallas Independent School District teachers to discuss unaddressed classroom needs after COVID-19. Created an online curriculum aid that serves as a centralized resource of vetted educational videos for Spanish and English speakers. Led to the temporary implementation of the resource as a guide for substitute teachers in 12 United to Learn partner-elementary schools.',
                technologies: ['Wix Website Builder']
            }
        ],
        contact: {
            email: 'dfashemo@seas.upenn.edu',
            linkedin: 'https://www.linkedin.com/in/demi-fashemo/',
            github: 'https://github.com/dfashemo'
        }
    };

    // Work Experience
    const experienceList = document.getElementById('experience-list');
    if (experienceList) {
        resumeData.experience.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.classList.add('timeline-item');
            
            // Logic for company logo
            let logoHtml = '';
            if (job.company.includes('CycleBar')) {
                logoHtml = `<img src="..images/CYCLEBAR.png" alt="CycleBar Logo" class="company-logo">`;
            } else if (job.company.includes('Code Ninjas')) {
                logoHtml = `<img src="..images/CODE NINJAS.jpeg" alt="Code Ninjas Logo" class="company-logo">`;
            } else if (job.company.includes('SEO')) {
                logoHtml = `<img src="..images/SEO TECH DEV.png" alt="SEO Logo" class="company-logo">`;
            }
            
            jobElement.innerHTML = `
                <div class="job-header">
                    ${logoHtml}
                    <div class="job-title">
                        <h3>${job.title}</h3>
                        <h4>${job.company}</h4>
                        <span class="timeline-duration">${job.duration}</span>
                    </div>
                </div>
                <p>${job.description}</p>
            `;
            experienceList.appendChild(jobElement);
        });
    }

    // Skills Section
    const skillsList = document.getElementById('skills-list');
    if (skillsList) {
        skillsList.innerHTML = '';
        
        //  Make two columns for skills
        const leftColumn = document.createElement('div');
        leftColumn.classList.add('skills-column');
        
        const rightColumn = document.createElement('div');
        rightColumn.classList.add('skills-column');
        
        resumeData.skills.forEach((skillGroup, index) => {
            const skillCategory = document.createElement('div');
            skillCategory.classList.add('skill-category');
            skillCategory.innerHTML = `
                <h3>${skillGroup.category}</h3>
                <ul class="skill-list">
                    ${skillGroup.items.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            `;
            
            if (index % 2 === 0) {
                leftColumn.appendChild(skillCategory);
            } else {
                rightColumn.appendChild(skillCategory);
            }
        });
        
        // Add both columns to the skills list
        skillsList.appendChild(leftColumn);
        skillsList.appendChild(rightColumn);
    }

    // Education Section
    const educationList = document.getElementById('education-list');
    if (educationList) {
        resumeData.education.forEach(edu => {
            const eduElement = document.createElement('div');
            eduElement.classList.add('education-item');
            eduElement.innerHTML = `
                <h3>${edu.degree}</h3>
                <h4>${edu.institution}</h4>
                <span class="education-duration">${edu.duration}</span>
                <p>${edu.description}</p>
            `;
            educationList.appendChild(eduElement);
        });
    }
    
    // Projects Section
    const projectsList = document.getElementById('projects-list');
    if (projectsList) {
        projectsList.innerHTML = '';
        
        // Make two columns for projects
        const leftProjectsColumn = document.createElement('div');
        leftProjectsColumn.classList.add('projects-column');
        
        const rightProjectsColumn = document.createElement('div');
        rightProjectsColumn.classList.add('projects-column');
        
        resumeData.projects.forEach((project, index) => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project-item');
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    <h4>Technologies Used:</h4>
                    <ul class="tech-list">
                        ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                </div>
            `;
            
            if (index % 2 === 0) {
                leftProjectsColumn.appendChild(projectElement);
            } else {
                rightProjectsColumn.appendChild(projectElement);
            }
        });
        
        // Add both columns to the projects list
        projectsList.appendChild(leftProjectsColumn);
        projectsList.appendChild(rightProjectsColumn);
    }

    // Contact Info
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        contactInfo.innerHTML = `
            <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <div class="contact-details">
                    <h3>Email</h3>
                    <p><a href="mailto:${resumeData.contact.email}">${resumeData.contact.email}</a></p>
                </div>
            </div>
            <div class="contact-item">
                <i class="fab fa-linkedin"></i>
                <div class="contact-details">
                    <h3>LinkedIn</h3>
                    <p><a href="${resumeData.contact.linkedin}" target="_blank">${resumeData.contact.linkedin.replace('https://', '')}</a></p>
                </div>
            </div>
        `;
    }
});