const drivers = [
  { name: "Lando Norris", short: "Norris", team: "McLaren", number: "01", points: 68, image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=700&q=85" },
  { name: "George Russell", short: "Russell", team: "Mercedes", number: "63", points: 61, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=85" },
  { name: "Max Verstappen", short: "Verstappen", team: "Red Bull Racing", number: "03", points: 57, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=700&q=85" },
  { name: "Charles Leclerc", short: "Leclerc", team: "Ferrari", number: "16", points: 49, image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=700&q=85" },
  { name: "Oscar Piastri", short: "Piastri", team: "McLaren", number: "81", points: 45, image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=700&q=85" },
  { name: "Lewis Hamilton", short: "Hamilton", team: "Ferrari", number: "44", points: 41, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=85" },
  { name: "Andrea Kimi Antonelli", short: "Antonelli", team: "Mercedes", number: "12", points: 35, image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=700&q=85" },
  { name: "Alex Albon", short: "Albon", team: "Williams", number: "23", points: 28, image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=700&q=85" },
  { name: "Carlos Sainz", short: "Sainz", team: "Williams", number: "55", points: 26, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=85" },
  { name: "Fernando Alonso", short: "Alonso", team: "Aston Martin", number: "14", points: 24, image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=700&q=85" },
  { name: "Pierre Gasly", short: "Gasly", team: "Alpine", number: "10", points: 22, image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=700&q=85" },
  { name: "Esteban Ocon", short: "Ocon", team: "Haas", number: "31", points: 19, image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=700&q=85" },
  { name: "Oliver Bearman", short: "Bearman", team: "Haas", number: "87", points: 17, image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=700&q=85" },
  { name: "Yuki Tsunoda", short: "Tsunoda", team: "Red Bull Racing", number: "22", points: 15, image: "https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?auto=format&fit=crop&w=700&q=85" },
  { name: "Liam Lawson", short: "Lawson", team: "Racing Bulls", number: "30", points: 13, image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=700&q=85" },
  { name: "Isack Hadjar", short: "Hadjar", team: "Racing Bulls", number: "06", points: 11, image: "https://images.unsplash.com/photo-1550355191-aa8a80b41353?auto=format&fit=crop&w=700&q=85" },
  { name: "Nico Hulkenberg", short: "Hulkenberg", team: "Kick Sauber", number: "27", points: 9, image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=700&q=85" },
  { name: "Gabriel Bortoleto", short: "Bortoleto", team: "Kick Sauber", number: "05", points: 7, image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=700&q=85" },
  { name: "Lance Stroll", short: "Stroll", team: "Aston Martin", number: "18", points: 5, image: "https://images.unsplash.com/photo-1517994112540-009c47ea476b?auto=format&fit=crop&w=700&q=85" },
  { name: "Franco Colapinto", short: "Colapinto", team: "Alpine", number: "43", points: 3, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=700&q=85" }
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
  { round: "Round 05", flag: "🇸🇦", name: "Saudi Arabian GP", place: "Jeddah", date: "Apr 19" },
  { round: "Round 06", flag: "🇺🇸", name: "Miami GP", place: "Miami", date: "May 03" },
  { round: "Round 07", flag: "🇨🇦", name: "Canadian GP", place: "Montreal", date: "May 24" },
  { round: "Round 08", flag: "🇲🇨", name: "Monaco GP", place: "Monte Carlo", date: "Jun 07" },
  { round: "Round 09", flag: "🇪🇸", name: "Spanish GP", place: "Barcelona", date: "Jun 21" },
  { round: "Round 10", flag: "🇦🇹", name: "Austrian GP", place: "Spielberg", date: "Jul 05" },
  { round: "Round 11", flag: "🇬🇧", name: "British GP", place: "Silverstone", date: "Jul 19" },
  { round: "Round 12", flag: "🇧🇪", name: "Belgian GP", place: "Spa-Francorchamps", date: "Jul 26" },
  { round: "Round 13", flag: "🇭🇺", name: "Hungarian GP", place: "Budapest", date: "Aug 02" },
  { round: "Round 14", flag: "🇳🇱", name: "Dutch GP", place: "Zandvoort", date: "Aug 30" },
  { round: "Round 15", flag: "🇮🇹", name: "Italian GP", place: "Monza", date: "Sep 06" },
  { round: "Round 16", flag: "🇪🇸", name: "Madrid GP", place: "Madrid", date: "Sep 13" },
  { round: "Round 17", flag: "🇦🇿", name: "Azerbaijan GP", place: "Baku", date: "Sep 27" },
  { round: "Round 18", flag: "🇸🇬", name: "Singapore GP", place: "Marina Bay", date: "Oct 11" },
  { round: "Round 19", flag: "🇺🇸", name: "United States GP", place: "Austin", date: "Oct 25" },
  { round: "Round 20", flag: "🇲🇽", name: "Mexico City GP", place: "Mexico City", date: "Nov 01" },
  { round: "Round 21", flag: "🇧🇷", name: "São Paulo GP", place: "Interlagos", date: "Nov 08" },
  { round: "Round 22", flag: "🇺🇸", name: "Las Vegas GP", place: "Las Vegas", date: "Nov 21" },
  { round: "Round 23", flag: "🇶🇦", name: "Qatar GP", place: "Lusail", date: "Nov 29" },
  { round: "Round 24", flag: "🇦🇪", name: "Abu Dhabi GP", place: "Yas Marina", date: "Dec 06" }
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

const themeToggle = document.querySelector("#themeToggle");
const savedTheme = localStorage.getItem("f1-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.querySelector(".theme-icon").textContent = "☾";
}
themeToggle.addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark");
  themeToggle.querySelector(".theme-icon").textContent = dark ? "☾" : "☀";
  localStorage.setItem("f1-theme", dark ? "dark" : "light");
});
