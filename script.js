const projects = [
  {
    title: "Calculator App",
    level: "Beginner",
    desc: "Oddiy kalkulyator. Qo‘shish, ayirish, ko‘paytirish va bo‘lish ishlaydi."
  },
  {
    title: "Digital Clock",
    level: "Beginner",
    desc: "Real vaqtni ko‘rsatadigan digital soat."
  },
  {
    title: "Password Generator",
    level: "Beginner",
    desc: "Random kuchli parol yaratib beradi."
  },
  {
    title: "BMI Calculator",
    level: "Beginner",
    desc: "Bo‘y va vazn orqali BMI hisoblaydi."
  },
  {
    title: "QR Code Generator",
    level: "Beginner",
    desc: "Matn yoki linkdan QR code yaratish projecti."
  },
  {
    title: "Quiz App with Timer",
    level: "Intermediate",
    desc: "Savollar, variantlar, timer va natija chiqaradigan quiz app."
  },
  {
    title: "Notes App",
    level: "Intermediate",
    desc: "Eslatmalar yozish, saqlash va o‘chirish uchun app."
  },
  {
    title: "Expense Tracker",
    level: "Intermediate",
    desc: "Kirim va chiqimlarni hisoblaydigan project."
  },
  {
    title: "GitHub Profile Search",
    level: "Intermediate",
    desc: "GitHub username orqali profil ma’lumotlarini chiqaradi."
  },
  {
    title: "Task Tracker",
    level: "Intermediate",
    desc: "Vazifalarni qo‘shish, bajarildi qilish va o‘chirish mumkin."
  },
  {
    title: "Admin Dashboard",
    level: "Advanced",
    desc: "Statistika, cardlar, chart joylari va responsive dashboard."
  },
  {
    title: "Employee Database UI",
    level: "Advanced",
    desc: "Xodimlarni qo‘shish, tahrirlash va ro‘yxatda ko‘rsatish."
  },
  {
    title: "Image Editor",
    level: "Advanced",
    desc: "Rasmga filter, brightness va contrast berish projecti."
  },
  {
    title: "Text To Speech App",
    level: "Advanced",
    desc: "Matnni ovozga aylantirib beradigan web app."
  },
  {
    title: "Online Shop UI",
    level: "Advanced",
    desc: "Mahsulotlar, savatcha va checkout ko‘rinishidagi project."
  }
];

const projectGrid = document.getElementById("projectGrid");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");
const darkBtn = document.getElementById("darkBtn");

let currentLevel = "All";

function showProjects() {
  projectGrid.innerHTML = "";

  const searchValue = searchInput.value.toLowerCase();

  const filteredProjects = projects.filter(function(project) {
    const matchesSearch = project.title.toLowerCase().includes(searchValue);
    const matchesLevel = currentLevel === "All" || project.level === currentLevel;

    return matchesSearch && matchesLevel;
  });

  if (filteredProjects.length === 0) {
    projectGrid.innerHTML = "<p>Project topilmadi...</p>";
    return;
  }

  filteredProjects.forEach(function(project) {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <span class="level">${project.level}</span>
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <button onclick="alert('${project.title} projectini boshladingiz!')">
        Start Project
      </button>
    `;

    projectGrid.appendChild(card);
  });
}

filterBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    filterBtns.forEach(function(item) {
      item.classList.remove("active");
    });

    btn.classList.add("active");
    currentLevel = btn.getAttribute("data-level");

    showProjects();
  });
});

searchInput.addEventListener("input", showProjects);

darkBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkBtn.textContent = "Light";
  } else {
    darkBtn.textContent = "Dark";
  }
});

showProjects();
