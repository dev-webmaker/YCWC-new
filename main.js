
// ==================================================
//  SIDEBAR
// ==================================================
function openNav() {
  document.getElementById("sidebar-content").style.width = "250px";
}
function closeNav() {
  document.getElementById("sidebar-content").style.width = "0";
}

// ==================================================
//  PARTICLES
// ==================================================
function initParticles() {
  const canvas = document.getElementById("particles-demo");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const particles = [];

  function resize() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: 1 + Math.random() * 2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  draw();
}

let currentLang = 'en';

const popupData = {
  "Healthcare": {
    desc: "healthcare_popup_desc",
    stats: [
      { num: "83%", text: "healthcare_stat1" },
      { num: "250,000+", text: "healthcare_stat2" },
      { num: "37%", text: "healthcare_stat3" }
    ]
  },

  "Transportation": {
    desc: "transport_popup_desc",
    stats: [
      { num: "94%", text: "transport_stat1" },
      { num: "4.2M", text: "transport_stat2" },
      { num: "20%", text: "transport_stat3" }
    ]
  },

  "Education": {
    desc: "education_popup_desc",
    stats: [
      { num: "48%", text: "education_stat1" },
      { num: "1.1B", text: "education_stat2" },
      { num: "32%", text: "education_stat3" }
    ]
  },
  "Virtual Assistants and Chatbots": {
    desc: "virtual_assistants_popup_desc",
    stats: [
      { num: "80%", text: "virtual_assistants_stat1" },
      { num: "1.4B", text: "virtual_assistants_stat2" },
      { num: "65%", text: "virtual_assistants_stat3" }
    ]
  },
  "Finance and Banking": {
    desc: "finance_popup_desc",
    stats: [
      { num: "85%", text: "finance_stat1" },
      { num: "70%", text: "finance_stat2" },
      { num: "$1.3T", text: "finance_stat3" }
    ]
  },
  "Recommendations and Personalization": {
    desc: "recommendations_popup_desc",
    stats: [
      { num: "75%", text: "recommendations_stat1" },
      { num: "60%", text: "recommendations_stat2" },
      { num: "30%", text: "recommendations_stat3" }
    ]
  },
  "Automation and Efficiency": {
    desc: "automation_popup_desc",
    stats: [
      { num: "40%", text: "automation_stat1" },
      { num: "50%", text: "automation_stat2" },
      { num: "70%", text: "automation_stat3" }
    ]
  },
  "Cybersecurity": {
    desc: "cybersecurity_popup_desc",
    stats: [
      { num: "90%", text: "cybersecurity_stat1" },
      { num: "60%", text: "cybersecurity_stat2" },
      { num: "45%", text: "cybersecurity_stat3" }
    ]
  }
};

// DOM TARGET
const popup = document.getElementById("info-popup");

// EVENT CARD → POPUP
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const type = card.getAttribute("data-type");
    const data = popupData[type];

    if (!data) return;

    const title = card.querySelector("h3").textContent.trim();

    popup.innerHTML = `
      <button class="close-popup">&times;</button>
      <h2>${title}</h2>
      <p class="popup-desc">${translations[currentLang][data.desc]}</p>

      <div class="popup-stats">
        ${data.stats
          .map(
            s => `
          <div class="stat-box">
            <div class="stat-num">${s.num}</div>
            <div class="stat-text">${translations[currentLang][s.text]}</div>
          </div>
        `
          )
          .join("")}
      </div>
    `;

    popup.setAttribute("data-current-type", type);
    popup.style.display = "block";
    popup.scrollIntoView({ behavior: "smooth", block: "center" });

    popup.querySelector(".close-popup").onclick = () => {
      popup.style.display = "none";
    };
  });
});

// ==================================================
//  AI INVESTMENT CHART (BIRU PASTEL) 
// ==================================================
function initInvestChart() {
  const canvas = document.getElementById("chartInvestAI");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["USA", "China", "UK", "Germany", "Japan"],
      datasets: [
        {
          label: "AI Investment (Billion USD)",
          data: [224, 109, 28, 22, 18],
          backgroundColor: "rgba(100, 170, 255, 0.8)", // biru pastel 80%
          borderRadius: 10,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { 
            color: "rgba(60, 60, 60, 0.9)", // teks abu tua 90%
            font: { size: 14 }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: "rgba(60, 60, 60, 0.9)" },
          grid: { color: "rgba(0,0,0,0.1)" }
        },
        x: {
          ticks: { color: "rgba(60, 60, 60, 0.9)" },
          grid: { display: false }
        }
      }
    }
  });
}
// =========================
// SYSTEM TRANSLATE 3 BAHASA
// =========================
const translations = {
  "id": {
    title: "Gambaran Umum Kecerdasan Buatan",
    what_is_ai: "Apa itu AI?",
    ai_description: "Temukan bagaimana AI membantu di berbagai sektor kehidupan modern",

    healthcare: "Kesehatan",
    healthcare_desc: "AI meningkatkan akurasi diagnosa dan pemantauan pasien.",

    transport: "Transportasi",
    transport_desc: "AI membantu mengurangi kecelakaan dan mengoptimalkan lalu lintas.",

    education: "Pendidikan",
    education_desc: "AI meningkatkan pengalaman belajar yang personal.",

    home: "Beranda",
    benefits: "Manfaat AI",
    contact: "Kontak",

    footer: "© 2025 Proyek Gambaran AI",

    // Popup translations
    healthcare_popup_desc: "AI membantu diagnosis cepat, pemantauan pasien, dan mengurangi kesalahan manusia.",
    healthcare_stat1: "Rumah sakit utama menggunakan AI untuk diagnosis cepat.",
    healthcare_stat2: "Pemindaian MRI/CT diproses oleh AI setiap hari secara global.",
    healthcare_stat3: "Pengurangan kesalahan medis manusia karena bantuan AI.",

    transport_popup_desc: "AI mengurangi kecelakaan, kemacetan, dan meningkatkan efisiensi bahan bakar.",
    transport_stat1: "Kecelakaan dari kesalahan manusia. AI membantu menguranginya.",
    transport_stat2: "Jam lalu lintas dapat dikurangi oleh AI setiap tahun.",
    transport_stat3: "Efisiensi bahan bakar ditingkatkan melalui optimasi rute AI.",

    education_popup_desc: "Kecepatan belajar meningkat dengan AI adaptif yang membuat pembelajaran lebih cepat, lebih personal, dan lebih adaptif.",
    education_stat1: "Sekolah global menggunakan personalisasi AI.",
    education_stat2: "Siswa menggunakan aplikasi alat pembelajaran AI.",
    education_stat3: "Kecepatan belajar meningkat dengan AI adaptif.",

    virtual_assistants_popup_desc: "Kecerdasan buatan mendukung asisten virtual dan chatbot yang memfasilitasi berbagai tugas sehari-hari. Sistem ini mampu merespons pertanyaan secara real-time, mengelola jadwal, memberikan pengingat, mengambil informasi, dan membantu pengguna melalui platform digital atau saluran layanan pelanggan. Agen percakapan berbasis AI modern dapat menafsirkan bahasa alami, beradaptasi dengan pola komunikasi pengguna, dan memberikan interaksi yang sangat dipersonalisasi.",
    virtual_assistants_stat1: "Dari interaksi layanan pelanggan ditangani oleh chatbot AI.",
    virtual_assistants_stat2: "Orang menggunakan asisten suara setiap hari.",
    virtual_assistants_stat3: "Peningkatan kepuasan pengguna dengan asisten AI.",

    finance_popup_desc: "AI digunakan secara luas di sektor keuangan dan perbankan untuk berbagai aplikasi, termasuk deteksi penipuan, penilaian risiko, perdagangan algoritmik, dan layanan pelanggan. Algoritma pembelajaran mesin menganalisis data keuangan dalam jumlah besar untuk mengidentifikasi pola yang tidak biasa yang mungkin menunjukkan aktivitas penipuan. Selain itu, sistem berbasis AI dapat mengevaluasi kelayakan kredit, mengoptimalkan strategi investasi, dan memberikan nasihat keuangan yang dipersonalisasi kepada pelanggan melalui chatbot dan asisten virtual.",
    finance_stat1: "Institusi keuangan menggunakan AI untuk deteksi penipuan.",
    finance_stat2: "Pengurangan positif palsu dalam deteksi penipuan.",
    finance_stat3: "Nilai aset dikelola oleh platform investasi berbasis AI.",

    recommendations_popup_desc: "AI memberdayakan sistem rekomendasi yang mempersonalisasi pengalaman pengguna di berbagai platform, termasuk e-commerce, layanan streaming, dan media sosial. Dengan menganalisis perilaku pengguna, preferensi, dan interaksi, algoritma AI dapat menyarankan produk, konten, atau koneksi yang sesuai dengan selera individu. Rekomendasi yang dipersonalisasi ini meningkatkan keterlibatan pengguna, kepuasan, dan retensi dengan memberikan pengalaman yang relevan dan disesuaikan.",
    recommendations_stat1: "Dari pengguna mengandalkan rekomendasi AI untuk pembelian.",
    recommendations_stat2: "Peningkatan keterlibatan pengguna dengan konten yang dipersonalisasi.",
    recommendations_stat3: "Peningkatan penjualan melalui rekomendasi berbasis AI.",

    automation_popup_desc: "Otomasi berbasis AI meningkatkan efisiensi di berbagai industri dengan merampingkan proses, mengurangi tenaga kerja manual, dan meminimalkan kesalahan. Dalam manufaktur, robot berbasis AI dan sistem dapat melakukan tugas berulang dengan presisi dan kecepatan tinggi. Dalam operasi bisnis, AI mengotomasi entri data, layanan pelanggan, dan manajemen rantai pasokan, memungkinkan pekerja manusia untuk fokus pada aktivitas yang lebih kompleks dan strategis. Hal ini mengarah pada peningkatan produktivitas, penghematan biaya, dan peningkatan kinerja keseluruhan.",
    automation_stat1: "Peningkatan produktivitas melalui otomasi AI.",
    automation_stat2: "Pengurangan biaya operasional dengan proses berbasis AI.",
    automation_stat3: "Pengurangan kesalahan karena otomasi AI.",

    cybersecurity_popup_desc: "AI memainkan peran penting dalam meningkatkan keamanan siber dengan mendeteksi dan merespons ancaman secara real-time. Algoritma pembelajaran mesin menganalisis lalu lintas jaringan, perilaku pengguna, dan log sistem untuk mengidentifikasi anomali yang mungkin menunjukkan serangan siber atau kerentanan. Sistem keamanan berbasis AI dapat secara otomatis merespons ancaman, seperti memblokir aktivitas berbahaya atau memberi tahu tim keamanan. Pendekatan proaktif ini membantu organisasi melindungi data sensitif, mempertahankan integritas sistem, dan mengurangi risiko yang terkait dengan ancaman siber.",
    cybersecurity_stat1: "Dari perusahaan keamanan siber menggunakan AI untuk deteksi ancaman.",
    cybersecurity_stat2: "Pengurangan waktu respons terhadap ancaman siber.",
    cybersecurity_stat3: "Pengurangan serangan siber yang berhasil dengan pertahanan AI."
  },

  "en": {
    title: "How AI Give Benefit to Human Life",
    what_is_ai: "What is AI?",
    ai_description: "AI, or artificial intelligence, is a field of computer science that creates systems capable of performing tasks that  require human intelligence, such as learning, problem-solving, and decision-making",

    healthcare: "Healthcare",
    healthcare_desc: "AI improves diagnosis accuracy and patient monitoring.",

    transport: "Transportation",
    transport_desc: "AI helps reduce accidents and optimize traffic.",

    education: "Education",
    education_desc: "AI enhances personalized learning experiences.",

    home: "Home",
    benefits: "Benefits of AI",
    contact: "Contact",

    footer: "© 2025 AI Overview Project",

    // Popup translations
    healthcare_popup_desc: "AI helps with rapid diagnosis, patient monitoring, and reduces human error.",
    healthcare_stat1: "Major hospitals are using AI for rapid diagnosis.",
    healthcare_stat2: "MRI/CT scans are processed by AI every day globally.",
    healthcare_stat3: "Reduction of medical human error due to AI assistance.",

    transport_popup_desc: "AI reduces accidents, congestion, and improves fuel efficiency.",
    transport_stat1: "Accidents from human error. AI helps reduce them.",
    transport_stat2: "Traffic hours can be reduced by AI every year.",
    transport_stat3: "Fuel efficiency is increased through AI route optimization.",

    education_popup_desc: "Learning speed increases with adaptive AI that makes learning faster, more personal, and more adaptive.",
    education_stat1: "Global schools use AI personalization.",
    education_stat2: "Students use the AI learning tools application.",
    education_stat3: "Learning speed increases with adaptive AI.",

    virtual_assistants_popup_desc: "Artificial intelligence supports virtual assistants and chatbots that facilitate a wide range of daily tasks. These systems are capable of responding to inquiries in real time, managing schedules, providing reminders, retrieving information, and assisting users through digital platforms or customer service channels. Modern AI-based conversational agents can interpret natural language, adapt to user communication patterns, and deliver highly personalized interactions.",
    virtual_assistants_stat1: "Of customer service interactions handled by AI chatbots.",
    virtual_assistants_stat2: "People use voice assistants daily.",
    virtual_assistants_stat3: "Improvement in user satisfaction with AI assistants.",

    finance_popup_desc: "AI is widely used in the finance and banking sectors for various applications, including fraud detection, risk assessment, algorithmic trading, and customer service. Machine learning algorithms analyze vast amounts of financial data to identify unusual patterns that may indicate fraudulent activities. Additionally, AI-driven systems can evaluate creditworthiness, optimize investment strategies, and provide personalized financial advice to customers through chatbots and virtual assistants.",
    finance_stat1: "Financial institutions use AI for fraud detection.",
    finance_stat2: "Reduction in false positives in fraud detection.",
    finance_stat3: "Value of assets managed by AI-driven investment platforms.",

    recommendations_popup_desc: "AI powers recommendation systems that personalize user experiences across various platforms, including e-commerce, streaming services, and social media. By analyzing user behavior, preferences, and interactions, AI algorithms can suggest products, content, or connections that align with individual tastes. These personalized recommendations enhance user engagement, satisfaction, and retention by delivering relevant and tailored experiences.",
    recommendations_stat1: "Of users rely on AI recommendations for purchases.",
    recommendations_stat2: "Increase in user engagement with personalized content.",
    recommendations_stat3: "Boost in sales through AI-driven recommendations.",

    automation_popup_desc: "AI-driven automation enhances efficiency across various industries by streamlining processes, reducing manual labor, and minimizing errors. In manufacturing, AI-powered robots and systems can perform repetitive tasks with high precision and speed. In business operations, AI automates data entry, customer support, and supply chain management, allowing human workers to focus on more complex and strategic activities. This leads to increased productivity, cost savings, and improved overall performance.",
    automation_stat1: "Increase in productivity through AI automation.",
    automation_stat2: "Reduction in operational costs with AI-driven processes.",
    automation_stat3: "Decrease in errors due to AI automation.",

    cybersecurity_popup_desc: "AI plays a crucial role in enhancing cybersecurity by detecting and responding to threats in real time. Machine learning algorithms analyze network traffic, user behavior, and system logs to identify anomalies that may indicate cyberattacks or vulnerabilities. AI-driven security systems can automatically respond to threats, such as blocking malicious activities or alerting security teams. This proactive approach helps organizations protect sensitive data, maintain system integrity, and mitigate risks associated with cyber threats.",
    cybersecurity_stat1: "Of cybersecurity firms use AI for threat detection.",
    cybersecurity_stat2: "Reduction in response time to cyber threats.",
    cybersecurity_stat3: "Decrease in successful cyberattacks with AI defenses."
  }
};

function setLanguage(lang) {
  currentLang = lang;
  const elements = document.querySelectorAll("[data-text]");

  elements.forEach(el => {
    const key = el.getAttribute("data-text");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update popup content if it's open
  const popup = document.getElementById("info-popup");
  if (popup && popup.style.display === "block") {
    const type = popup.getAttribute("data-current-type");
    if (type && popupData[type]) {
      const data = popupData[type];
      const title = translations[lang][type.toLowerCase()] || type; // Use translated title

      popup.innerHTML = `
        <button class="close-popup">&times;</button>
        <h2>${title}</h2>
        <p class="popup-desc">${translations[lang][data.desc]}</p>

        <div class="popup-stats">
          ${data.stats
            .map(
              s => `
            <div class="stat-box">
              <div class="stat-num">${s.num}</div>
              <div class="stat-text">${translations[lang][s.text]}</div>
            </div>
          `
            )
            .join("")}
        </div>
      `;

      popup.setAttribute("data-current-type", type);

      popup.querySelector(".close-popup").onclick = () => {
        popup.style.display = "none";
      };
    }
  }

  localStorage.setItem("site-lang", lang);

  // Close the language menu after selection
  const langMenu = document.querySelector('.language-menu');
  if (langMenu) langMenu.classList.remove('active');
}

// =========================
// LANGUAGE DROPDOWN
// =========================
function initLanguageDropdown() {
  const langMenu = document.querySelector('.language-menu');
  const langBtn = document.querySelector('.lang-btn');

  if (!langMenu || !langBtn) return;

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!langMenu.contains(e.target)) {
      langMenu.classList.remove('active');
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("site-lang") || "en";
  setLanguage(saved);
  initParticles();
  initInvestChart();
  initLanguageDropdown();
});
document.getElementById('year9').textContent = new Date().getFullYear();
