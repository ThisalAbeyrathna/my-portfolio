// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Initialize Typed.js
new Typed('#typed-text', {
    strings: ['Automation Engineer', 'IoT Developer', 'Robotics Enthusiast'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    cursorChar: '|'
});

// Projects Data
const projects = [

    {
        title: "Smart Alcohol Detection & engine Locking System",
        category: "IoT",
        image:"image/sadel.jpg",
        description: "A web-based system This project is an ESP32-based Alcohol Detection System that monitors the driver's alcohol level and automatically locks the engine if intoxication is detected. The system also sends GPS coordinates to a server for further action. real-time sensor monitoring and control with gyroscope, color, and pressure sensors, featuring live data updates and LED control.",
        link: "https://github.com/ThisalAbeyrathna/Smart-ALcohol-and-Engine-Locking-System",
        technologies: ["ESP32", "Arduino", "PHP", "SQL"]
    },

    {
        title: "Automatic Bottle Filling, Capping & Packing System",
        category: "Automation",
        image: "image/abf.png",
        description: "The Automatic Bottle Filling, Capping, and Packing System is designed to automate the process of filling liquid into bottles, capping them securely, and finally, packing them for dispatch",
        link: "https://drive.google.com/drive/folders/1SI1gv3hktnRv-HD0GgmkQqMGi0yAuHZ4?usp=sharing",
        technologies: ["SELPRO", "Ladder Logic", "Sensors", "Actuators"]
    },
    {
        title: "Automatic Cloth Drying System with ESP32 and Firebase",
        category: "IoT",
        image: "image/clothdr.jpg",
        description: "This project is an automatic cloth drying system controlled by an ESP32 microcontroller. The system detects sunlight and rain using an LDR sensor and a rain sensor, respectively. Based on the sensor readings, it moves a stepper motor forward or backward to extend or retract the drying rack. Additionally, the system integrates Firebase to store and retrieve real-time data, including: Sunlight detection, Rain detection, Fan Control.",
        link: "https://github.com/ThisalAbeyrathna/Automatic-Cloth-Drying-System-with-ESP32-and-Firebase",
        technologies: ["ESP32", "Embedded C++", "Firebase", "Sensors"]
    },
    {
        title: "Simple Registration Form GUI in Java using Swing",
        category: "Other",
        image: "image/regformui.jpg",
        description: "This project is a Simple Registration Form built using Java Swing. It allows users to sign up by entering their details and later sign in using the registered credentials.",
        link: "https://github.com/ThisalAbeyrathna/Simple-Registration-Form-GUI-in-Java-using-Swing",
        technologies: ["Java", "Object-Oriented Programming", "Java Swing"]
    },
    {
        title: "Automatic Vertical Reciorocating Conveyor System",
        category: "Automation",
        image: "image/conveyour.png",
        description: "The Automatic Vertical Reciprocating Conveyor System is designed to efficiently transport materials between different levels in an industrial or warehouse setting. This system automates the vertical movement of goods, eliminating the need for manual handling and improving workflow efficiency.This project demonstrates expertise in industrial automation, PLC programming, sensor integration, and mechanical design, making it an essential addition to modern automated logistics and manufacturing environments.",
        link: "https://drive.google.com/drive/folders/1wBtpg9unFrZTLJqskuqMZ9MK1TIJGxKa?usp=sharing",
        technologies: ["FluidSim", "Arduino Uno", "Sensors", "Actuators"]
    }
];

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Initialize projects
function initializeProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const categoryBtns = document.querySelectorAll('.category-btn');

    function createProjectCard(project) {
        return `
            <div class="project-card" data-aos="fade-up">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <div class="project-header">
                        <h3>${project.title}</h3>
                        <span class="project-category">${project.category}</span>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                    <a href="${project.link}" class="project-link" target="_blank">View Project</a>
                </div>
            </div>
        `;
    }

    function renderProjects(category = 'All') {
        const filteredProjects = category === 'All' 
            ? projects 
            : projects.filter(project => project.category === category);
        
        projectsGrid.innerHTML = filteredProjects.map(createProjectCard).join('');
        AOS.refresh();
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.dataset.category);
        });
    });

    renderProjects();
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 1,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProjects);