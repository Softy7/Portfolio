const resumeData = {
    personalInfo: {
        name: "Ewan Michel",
        aboutMe: "À l’aube de la fin de mon BUT Informatique, parcours A, dédié au développement mobile et web, ma passion pour la technologie me pousse à m’aventurer en génie logiciel, pour affiner mes compétences et embrasser de nouveaux défis.",
        address: "270 rue de la Barrière, Ferrière la Grande",
        phone: "+33 7 83 15 63 92",
        email: "ewan.michel59@gmail.com"
    },
    education: [
        {
            degree: "BUT Informatique (Ancien DUT)",
            duration: "2022 - 2025",
            institution: "IUT Valenciennes (UPHF) - Site de Maubeuge, France",
            description: "Une formation fertile en enseignements, forgée par des projets, des heures de TP et des stages, avec une spécialisation marquée dans l'art du développement."
        },
        {
            degree: "Baccalauréat Général et Technologique",
            duration: "2019 - 2022",
            institution: "Lycée Pierre Forest - Maubeuge, France",
            description: "Titulaire du Bac mention assez bien avec comme spécialités: Mathématiques, Numérique et Sciences de l'informatique"
        }
    ],
    experience: [
        {
            title: "Stagiaire développeur",
            duration: "Mars 2025 - Juin 2025",
            company: "Capside",
            tasks: [
                "Veille attentive sur les acteurs concurrents de l’application mobile dédiée aux collectivités.",
                "Scrapping du web, où un script Shell s’élance pour automatiser la collecte, suivi d’une analyse des données et de ses conclusions.",
                "Refonte du site de l’application mobile, une réinvention créative avec l’ajout de nouvelles fonctionnalités.",
                "Interventions sur d’autres projets de l’entreprise, tout aussi captivants et enrichissants.",
                "Utilisation de Shell, Php, JS, CodeIgniter2, Symphony, etc..."
            ]
        },
        {
            title: "Stagiaire développeur web",
            duration: "Avril 2024 - Juin 2024",
            company: "Communauté d'agglomération de Maubeuge, France",
            tasks: [
                "Analyse des procédures collaboratives et évaluation des effets d'une numérisation potentielle.",
                "Conception de diagrammes UML, de classes, de logigrammes, et autres cartes de réflexion.",
                "Développement de prototypes pour de petites applications, accompagnés de tests utilisateurs et d'explorations pratiques.",
                "Outils: PowerApps, Power BI, Power Automate, SharePoint, etc..."
            ]
        }
    ]
};

function generateResume() {
    const container = document.getElementById('resume-container');

    const htmlContent = `
      <div class="container">
        <div class="row">

          <!-- Personal Info Section -->
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Sommaire</h3>
            <div class="resume-item pb-0">
              <h4>${resumeData.personalInfo.name}</h4>
              <p><em>${resumeData.personalInfo.aboutMe}</em></p>
              <ul>
                <li>${resumeData.personalInfo.address}</li>
                <li>${resumeData.personalInfo.phone}</li>
                <li>${resumeData.personalInfo.email}</li>
              </ul>
            </div>

            <!-- Education Section -->
            <h3 class="resume-title">Formation</h3>
            ${resumeData.education.map(item => `
              <div class="resume-item">
                <h4>${item.degree}</h4>
                <h5>${item.duration}</h5>
                <p><em>${item.institution}</em></p>
                <p>${item.description}</p>
              </div>
            `).join('')}
          </div>

          <!-- Experience Section -->
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 class="resume-title">Expériences professionnelles</h3>
            ${resumeData.experience.map(item => `
              <div class="resume-item">
                <h4>${item.title}</h4>
                <h5>${item.duration}</h5>
                <p><em>${item.company}</em></p>
                <ul>
                  ${item.tasks.map(task => `<li>${task}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>

        </div>
      </div>
    `;

    container.innerHTML = htmlContent;
}

document.addEventListener('DOMContentLoaded', generateResume);
