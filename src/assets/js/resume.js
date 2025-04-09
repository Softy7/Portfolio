const resumeData = {
    personalInfo: {
        name: "Ewan Michel",
        aboutMe: "Je suis sur le point de terminer mon BUT Informatique, parcours A, spécialisé en développement mobile et web. Passionné par la technologie, je compte poursuivre en génie logiciel pour approfondir mes compétences et relever de nouveaux défis dans le développement.",
        address: "270 rue de la Barrière, Ferrière la Grande",
        phone: "+33 7 83 15 63 92",
        email: "ewan.michel59@gmail.com"
    },
    education: [
        {
            degree: "BUT Informatique (Ancien DUT)",
            duration: "2022 - 2025",
            institution: "IUT Valenciennes (UPHF) - Site de Maubeuge, France",
            description: "Formation riche en enseignement de part les projets, les nombreuses heures de TP et les stages, spécialisation dans le développement."
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
            duration: "Mars 2024 - ...",
            company: "Capside",
            tasks: [
                "Veille concurrentielle des concurrents de l'application mobile destinée aux collectivités.",
                "Scrapping du web, utilisation d'un script Shell pour automatiser le processus de scrapping. Analyse des données et conclusion.",
                "Refonte du site web de l'application mobile. Développement de nouvelles fonctionnalités.",
                "Intervention sur d'autres projets de l'entreprise tout aussi intéressants et enrichissants.",
                "Utilisation de Shell, Php, JS, CodeIgniter2, Symphony, etc..."
            ]
        },
        {
            title: "Stagiaire développeur web",
            duration: "Avril - Juin 2024",
            company: "Communauté d'agglomération de Maubeuge, France",
            tasks: [
                "Examen de procédures collaboratives et évaluation des impacts d'une potentielle numérisation.",
                "Elaboration de diagrammes UML, diagrammes de classes, logigrammes etc...",
                "Développement de prototypes des petites applications, tests utilisateurs, etc...",
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
