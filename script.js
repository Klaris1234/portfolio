document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.project-images-container img');
    const overlay = document.createElement('div');
    overlay.classList.add('fullscreen-overlay');
    overlay.innerHTML = '<span class="close-btn">&times;</span><img src="" alt="Full Image">';
    document.body.appendChild(overlay);

    const overlayImg = overlay.querySelector('img');
    const closeBtn = overlay.querySelector('.close-btn');

    images.forEach(image => {
        image.addEventListener('click', function() {
            overlayImg.src = image.src;
            overlay.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function() {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function(e) {
        if (e.target !== overlayImg && e.target !== closeBtn) {
            overlay.style.display = 'none';
        }
    });
});


function showProject(projectName) {
    const projectContent = document.getElementById('project-content');
    
    // Project data stored in an object for easy access
    const projects = {
        ngeeAnnCity: {
            title: "Ngee Ann City",
            description: "A city-building game developed in C#.",
            images: ["images/NPC-1.png", "images/NPC-2.png"],
            github: "https://github.com/cottcandy/SPM_Assignment",
            type: "Game Program"
        },
        bigFruits: {
            title: "BigFruits",
            description: "An online platform for purchasing fresh fruits with a delightful shopping experience.",
            images: ["images/BF-1.png", "images/BF-2.png", "images/BF-3.png", "images/BF-4.png", "images/BF-5.png"],
            github: "https://github.com/Klaris1234/assignment-1",
            type: "Web Development"
        },
        ocbcAtm: {
            title: "OCBC ATM",
            description: "An innovative ATM interface with improved user experience.",
            images: ["images/OCBC-1.png", "images/OCBC-2.png", "images/OCBC-3.png", "images/OCBC-4.png", "images/OCBC-5.png"],
            github: "https://github.com/dallaschan1/OCBC_ATM",
            type: "Web Development and Enhancements"
        },
        heartComesFirst: {
            title: "Heart Comes First",
            description: "A mobile dating app focusing on meaningful connections beyond appearances.",
            images: ["images/HCF-1.png", "images/HCF-2.png", "images/HCF-3.png"],
            github: "https://github.com/nevawins/MAD24_P02_Team4",
            type: "Mobile App"
        },
        safeGlobe: {
            title: "SafeGlobe",
            description: "An interactive platform for exploring COVID-19 travel information.",
            images: ["images/SG-1.png", "images/SG-2.png", "images/SG-3.png", "images/SG-4.png", "images/SG-5.png"],
            github: "https://github.com/cottcandy/Assignment2",
            type: "Web Development"
        },
        beeHive: {
            title: "BeeHive",
            description: "A platform for community service and social impact engagement.",
            images: ["images/BH-1.png", "images/BH-2.png", "images/BH-3.png"],
            github: "https://github.com/cottcandy/BED2024Apr_P04_T2",
            type: "Web Development"
        },
        sharedough: {
            title: "Sharedough",
            description: "A bakery e-commerce platform for selling baked goods, baking equipment, and sharing recipes.",
            images: ["images/SD-1.png"],
            proposalLink: "https://www.canva.com/design/DAGcUpFPL7c/Cykg1gZKGLs85S_M_xKT4A/view?utm_content=DAGcUpFPL7c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha56748ff51",
            mobileAppPrototype: "https://www.figma.com/proto/gbdjCC9UDwkU9TbkMh4xl8/4.2GPA_DUX_Asg2_-MobilePrototype?node-id=143-9&p=f&t=nNOeoRZX4l9Um8wl-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=143%3A9",
            type: "UX Design"
        },
        civique: {
            title: "Civique",
            description: "A bakery e-commerce platform for selling baked goods, baking equipment, and sharing recipes.",
            images: ["images/Civique-1.png", "images/Civique-2.png", "images/Civique-3.png", "images/Civique-4.png", "images/Civique-5.png"],
            proposalLink: "https://www.canva.com/design/DAGcUpFPL7c/Cykg1gZKGLs85S_M_xKT4A/view?utm_content=DAGcUpFPL7c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha56748ff51",
            mobileAppPrototypeLink: "https://www.figma.com/proto/YwJS2ysKU01m3xk4WMQC5B/DUX-ASSG1_Civique_Mobile?node-id=1-2&p=f&t=2lZiP8t8GARKA6SP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",
            smartwatchAppPrototypeLink: "https://www.figma.com/design/TBCvcAO4CafvPIb23vCs5H/DUX-ASSG1_Civique_Smartwatch?node-id=0-1&t=QMYEMICfjAmXiEdt-1",
            type: "UX Design"
        }
    };

    // Retrieve the project object based on the project name
    let project = projects[projectName];
    if (!project) {
        projectContent.innerHTML = '<p>Project not found.</p>';
        return;
    }

    // Map the images to HTML image tags and display them
    const imagesHTML = project.images.map(image => 
        `<img class="project-image" src="${image}" alt="${project.title}" style="width:100%; border-radius:10px; margin-bottom: 15px;">`
    ).join('');

    // Construct the project content with links, images, and details
    projectContent.innerHTML = `
        <h2>${project.title}</h2>
        <p><strong>Type:</strong> ${project.type}</p>
        <p>${project.description}</p>
        <div class="project-images-container">
            ${imagesHTML}
        </div>
        <p><a href="${project.github}" target="_blank">View on GitHub</a></p>
        ${project.proposalLink ? `<p><a href="${project.proposalLink}" target="_blank">View Proposal</a></p>` : ''}
        ${project.mobileAppPrototype ? `<p><a href="${project.mobileAppPrototype}" target="_blank">View Mobile App Prototype</a></p>` : ''}
        ${project.smartwatchAppPrototypeLink ? `<p><a href="${project.smartwatchAppPrototypeLink}" target="_blank">View Smartwatch App Prototype</a></p>` : ''}
    `;
}
