const stats = [
    { end: 124, label: "Problèmes résolus" },
    { end: 12, label: "Projets" },
    { end: 200, label: "Heures de support" },
    { end: 2, label: "Collaborateurs" }
];

function createStatItem(id, stat) {
    return `
      <div class="col-lg-3 col-md-6">
        <div class="stats-item text-center w-100 h-100">
          <span id="counter-${id}" class="counter" style="font-size: 2rem;">0</span>
          <p>${stat.label}</p>
        </div>
      </div>
    `;
}

function animateValue(id, start, end, duration) {
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const obj = document.getElementById(id);

    const timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function renderStats() {
    const container = document.getElementById("stats-container");
    container.innerHTML = stats.map((stat, i) => createStatItem(i, stat)).join("");

    // Lance l’envol des chiffres
    stats.forEach((stat, i) => {
        animateValue(`counter-${i}`, 0, stat.end, 1500); // 1.5 sec d'ascension
    });
}

document.addEventListener("DOMContentLoaded", renderStats);