const technicalSkills = [
    { name: "HTML", value: 80 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 75 },
    { name: "PHP", value: 65 },
    { name: "Java", value: 70 },
    { name: "C", value: 55 },
    { name: "C++", value: 51 },
    { name: "C# avec Unity", value: 74 },
    { name: "SQL", value: 82 },
    { name: "Développement Orienté Objet", value: 95 },
    { name: "Bash (scripts shell)", value: 70 },
    { name: "Python", value: 100 },
    { name: "Scala", value: 65 },
    { name: "Méthode Agile", value: 100 }
];
technicalSkills.sort((a, b) => b.value - a.value);


const softSkills = [
    { name: "Communication", value: 80 },
    { name: "Utilisation de l'IA", value: 65 },
    { name: "Travail en équipe", value: 80 },
    { name: "Autonomie", value: 83 },
    { name: "Persévérance", value: 85 },
    { name: "Esprit critique", value: 75 },
    { name: "Rédacteur", value: 85 },
    { name: "Communication non violente", value: 90 },
    { name: "Sérénité", value: 80 },
    { name: "Patience et persévérance", value: 85 },
    { name: "Logique", value: 75 },
    { name: "Créatif", value: 70 },
    { name: "Ouvert d'esprit", value: 100 },
    { name: "Curiosité intellectuelle", value: 80 }
];
softSkills.sort((a, b) => b.value - a.value);

function generateSkillHTML(skill) {
    return `
      <div class="progress">
        <span class="skill"><span>${skill.name}</span> <i class="val">${skill.value}%</i></span>
        <div class="progress-bar-wrap">
          <div class="progress-bar" role="progressbar" aria-valuenow="${skill.value}" aria-valuemin="0" aria-valuemax="100" style="width: ${skill.value}%;"></div>
        </div>
      </div>
    `;
}

function renderSkills(skills, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = skills.map(generateSkillHTML).join('');
}

renderSkills(technicalSkills, "technical-skills");
renderSkills(softSkills, "soft-skills");