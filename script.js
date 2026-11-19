const drivers = [
  { name: "Lando Norris", short: "Norris", team: "McLaren", number: "01", points: 68, image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=700&q=85" },
  { name: "George Russell", short: "Russell", team: "Mercedes", number: "63", points: 61, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=85" },
  { name: "Max Verstappen", short: "Verstappen", team: "Red Bull Racing", number: "03", points: 57, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=700&q=85" },
  { name: "Charles Leclerc", short: "Leclerc", team: "Ferrari", number: "16", points: 49, image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=700&q=85" },
  { name: "Oscar Piastri", short: "Piastri", team: "McLaren", number: "81", points: 45, image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=700&q=85" },
  { name: "Lewis Hamilton", short: "Hamilton", team: "Ferrari", number: "44", points: 41, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=85" },
  { name: "Andrea Kimi Antonelli", short: "Antonelli", team: "Mercedes", number: "12", points: 35, image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=700&q=85" },
  { name: "Alex Albon", short: "Albon", team: "Williams", number: "23", points: 28, image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=700&q=85" }
];

const teams = [
  { name: "McLaren", points: 113 },
  { name: "Mercedes", points: 96 },
  { name: "Red Bull Racing", points: 82 }
];

const races = [
  { round: "Round 01", flag: "🇦🇺", name: "Australian GP", place: "Melbourne", date: "Mar 08" },
  { round: "Round 02", flag: "🇨🇳", name: "Chinese GP", place: "Shanghai", date: "Mar 15" },
  { round: "Round 03", flag: "🇯🇵", name: "Japanese GP", place: "Suzuka", date: "Mar 29" },
  { round: "Round 04", flag: "🇧🇭", name: "Bahrain GP", place: "Sakhir", date: "Apr 12" },
  { round: "Round 05", flag: "🇸🇦", name: "Saudi Arabian GP", place: "Jeddah", date: "Apr 19" }
];

function renderStandings(type = "drivers") {
  const grid = document.querySelector("#leaderGrid");
  const items = type === "drivers"
    ? drivers.slice(0, 3).map((d, i) => ({ rank: i + 1, name: d.short, team: d.team, points: d.points }))
    : teams.map((t, i) => ({ rank: i + 1, name: t.name, team: "Constructor", points: t.points }));

  grid.innerHTML = items.map((item, i) => `
    <article class="leader-card ${i === 0 ? "featured" : ""}">
      <span class="rank">${String(item.rank).padStart(2, "0")}</span>
      <span class="team-name">${item.team}</span>
      <h3>${item.name}</h3>
      <div class="points"><strong>${item.points}</strong> PTS</div>
    </article>
  `).join("");
}

document.querySelectorAll(".segmented button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segmented button").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    renderStandings(button.dataset.table);
  });
});

renderStandings();

document.querySelector("#raceList").innerHTML = races.map(race => `
  <article class="race-item">
    <span class="round">${race.round}</span>
    <span class="flag">${race.flag}</span>
    <h3>${race.name}</h3>
    <p>${race.place} · ${race.date}</p>
  </article>
`).join("");

document.querySelector("#driverGrid").innerHTML = drivers.map(driver => `
  <article class="driver-card">
    <img src="${driver.image}" alt="${driver.name}" />
    <span class="number">${driver.number}</span>
    <div class="info">
      <span class="team">${driver.team}</span>
      <h3>${driver.short}</h3>
      <div class="points"><span>Points</span><strong>${driver.points}</strong></div>
    </div>
  </article>
`).join("");

const target = new Date("2026-04-11T14:00:00");
function updateCountdown() {
  const diff = Math.max(0, target - new Date());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  document.querySelector("#days").textContent = String(days).padStart(2, "0");
  document.querySelector("#hours").textContent = String(hours).padStart(2, "0");
  document.querySelector("#mins").textContent = String(mins).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 60000);
