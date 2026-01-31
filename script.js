const doctorsData = [
  {
    id: 1,
    name: "Dr. Samuel Adebola",
    rank: "Senior Consultant",
    spec: "General Physician",
    price: 15000,
    img: "images/doctor_1.jpg",
    about:
      "An experienced General Physician focused on diagnosing and managing common and chronic medical conditions.",
  },
  {
    id: 2,
    name: "Dr. Daniel Okeke",
    rank: "Consultant Gynecologist",
    spec: "Gynecologist",
    price: 25000,
    img: "images/doctor_2.jpg",
    about:
      "Provides comprehensive women’s health services including antenatal care and reproductive health management.",
  },
  {
    id: 3,
    name: "Dr. Grace Nwankwo",
    rank: "Consultant Dermatologist",
    spec: "Dermatologist",
    price: 20000,
    img: "images/doctor_3.jpg",
    about:
      "Specializes in the treatment of skin, hair, and nail disorders using modern clinical dermatology techniques.",
  },
  {
    id: 4,
    name: "Dr. Michael Ogun",
    rank: "Senior Pediatrician",
    spec: "Pediatrician",
    price: 12000,
    img: "images/doctor_4.jpg",
    about:
      "Dedicated to child health, offering preventive care and treatment for infants, children, and adolescents.",
  },
  {
    id: 5,
    name: "Dr. John Olatunji",
    rank: "Chief Neurologist",
    spec: "Neurologist",
    price: 32000,
    img: "images/doctor_5.jpg",
    about:
      "Expert in diagnosing and managing neurological conditions including seizures and nerve disorders.",
  },
  {
    id: 6,
    name: "Dr. Aisha Bello",
    rank: "General Practitioner",
    spec: "General Physician",
    price: 10000,
    img: "images/doctor_6.jpg",
    about:
      "Provides primary healthcare, routine checkups, and early detection of various medical conditions.",
  },
  {
    id: 7,
    name: "Dr. Fatima Abubakar",
    rank: "Senior Gynecologist",
    spec: "Gynecologist",
    price: 23000,
    img: "images/doctor_7.jpg",
    about:
      "Focused on maternal care, fertility support, and management of gynecological disorders.",
  },
  {
    id: 8,
    name: "Dr. Chinedu Obi",
    rank: "Clinical Dermatologist",
    spec: "Dermatologist",
    price: 18000,
    img: "images/doctor_8.jpg",
    about:
      "Treats acne, eczema, and other skin conditions with personalized and evidence-based care.",
  },
  {
    id: 9,
    name: "Dr. Peter Eze",
    rank: "Consultant Pediatrician",
    spec: "Pediatrician",
    price: 14000,
    img: "images/doctor_9.jpg",
    about:
      "Specializes in childhood infections, growth monitoring, and vaccination programs.",
  },
  {
    id: 10,
    name: "Dr. Ibrahim Musa",
    rank: "Consultant Neurologist",
    spec: "Neurologist",
    price: 30000,
    img: "images/doctor_10.jpg",
    about:
      "Provides advanced care for stroke patients and individuals with chronic neurological illnesses.",
  },
  {
    id: 11,
    name: "Dr. Kemi Ogunleye",
    rank: "Family Physician",
    spec: "General Physician",
    price: 12000,
    img: "images/doctor_11.jpg",
    about:
      "Delivers holistic medical care for adults and families with emphasis on prevention.",
  },
  {
    id: 12,
    name: "Dr. Ngozi Okafor",
    rank: "Consultant Gynecologist",
    spec: "Gynecologist",
    price: 24000,
    img: "images/doctor_12.jpg",
    about:
      "Experienced in prenatal monitoring and management of hormonal and menstrual disorders.",
  },
  {
    id: 13,
    name: "Dr. Tunde Balogun",
    rank: "Senior Dermatologist",
    spec: "Dermatologist",
    price: 21000,
    img: "images/doctor_13.jpg",
    about:
      "Handles complex skin diseases and offers modern non-invasive skin treatments.",
  },
  {
    id: 14,
    name: "Dr. Zainab Lawal",
    rank: "Child Health Specialist",
    spec: "Pediatrician",
    price: 13000,
    img: "images/doctor_14.jpg",
    about:
      "Passionate about early childhood development and preventive pediatric care.",
  },
  {
    id: 15,
    name: "Dr. Emeka Nnamdi",
    rank: "Neuro Consultant",
    spec: "Neurologist",
    price: 34000,
    img: "images/doctor_15.jpg",
    about:
      "Focuses on brain and spinal cord disorders with accurate neuro-diagnostic methods.",
  },
  {
    id: 16,
    name: "Dr. Yusuf Abdullahi",
    rank: "General Practitioner",
    spec: "General Physician",
    price: 9000,
    img: "images/doctor_16.jpg",
    about:
      "Provides accessible primary care and management of everyday medical complaints.",
  },
  {
    id: 17,
    name: "Dr. Hadiza Sadiya",
    rank: "Obstetric & Gynecology Consultant",
    spec: "Gynecologist",
    price: 26000,
    img: "images/doctor_17.jpg",
    about:
      "Specialist in pregnancy care, safe delivery planning, and postnatal follow-up.",
  },
  {
    id: 18,
    name: "Dr. Uche Chukwu",
    rank: "Skin Care Consultant",
    spec: "Dermatologist",
    price: 17000,
    img: "images/doctor_18.jpg",
    about:
      "Treats pigmentation, rashes, and chronic inflammatory skin conditions.",
  },
  {
    id: 19,
    name: "Dr. Sadiq Mohammed",
    rank: "Senior Pediatrician",
    spec: "Pediatrician",
    price: 15000,
    img: "images/doctor_19.jpg",
    about:
      "Experienced in managing neonatal issues and childhood respiratory illnesses.",
  },
  {
    id: 20,
    name: "Dr. Bola Akinwale",
    rank: "Consultant Neurologist",
    spec: "Neurologist",
    price: 31000,
    img: "images/doctor_20.jpg",
    about: "Provides care for migraines, neuropathies, and movement disorders.",
  },
  {
    id: 21,
    name: "Dr. Esther Ogun",
    rank: "Primary Care Physician",
    spec: "General Physician",
    price: 11000,
    img: "images/doctor_21.jpg",
    about:
      "Offers routine health checks, screenings, and management of common illnesses.",
  },
  {
    id: 22,
    name: "Dr. Blessing Eze",
    rank: "Women’s Health Consultant",
    spec: "Gynecologist",
    price: 22000,
    img: "images/doctor_22.jpg",
    about:
      "Focused on reproductive wellness and treatment of gynecological infections.",
  },
  {
    id: 23,
    name: "Dr. Musa Abdullahi",
    rank: "Clinical Dermatologist",
    spec: "Dermatologist",
    price: 16000,
    img: "images/doctor_23.jpg",
    about:
      "Provides medical and lifestyle guidance for maintaining healthy skin.",
  },
  {
    id: 24,
    name: "Dr. Maryam Danjuma",
    rank: "Consultant Pediatrician",
    spec: "Pediatrician",
    price: 14500,
    img: "images/doctor_24.jpg",
    about:
      "Specializes in nutrition, immunization, and general child wellness.",
  },
  {
    id: 25,
    name: "Dr. Chimaobi Okoye",
    rank: "Neurology Specialist",
    spec: "Neurologist",
    price: 33000,
    img: "images/doctor_25.jpg",
    about:
      "Manages epilepsy, nerve pain, and other long-term neurological conditions.",
  },
  {
    id: 26,
    name: "Dr. Kabir Lawal",
    rank: "Senior General Physician",
    spec: "General Physician",
    price: 14000,
    img: "images/doctor_26.jpg",
    about:
      "Handles acute and chronic medical cases with patient-centered care.",
  },
  {
    id: 27,
    name: "Dr. Funmi Adeyemi",
    rank: "Consultant Gynecologist",
    spec: "Gynecologist",
    price: 25500,
    img: "images/doctor_27.jpg",
    about:
      "Experienced in fertility evaluation and minimally invasive gynecologic care.",
  },
  {
    id: 28,
    name: "Dr. Kelvin Okoro",
    rank: "Dermatology Consultant",
    spec: "Dermatologist",
    price: 19500,
    img: "images/doctor_28.jpg",
    about:
      "Treats chronic skin allergies and provides long-term skin care plans.",
  },
  {
    id: 29,
    name: "Dr. Amina Bello",
    rank: "Child Specialist",
    spec: "Pediatrician",
    price: 12500,
    img: "images/doctor_29.jpg",
    about:
      "Focused on healthy growth, development tracking, and preventive pediatrics.",
  },
  {
    id: 30,
    name: "Dr. David Nwoye",
    rank: "Senior Neurologist",
    spec: "Neurologist",
    price: 35000,
    img: "images/doctor_30.jpg",
    about:
      "Provides advanced neurological assessments and long-term brain health care.",
  },
];

const days = [
  { d: "WED", n: "4" },
  { d: "THU", n: "5" },
  { d: "FRI", n: "6" },
  { d: "SAT", n: "7" },
  { d: "SUN", n: "8" },
];
const times = ["05:00 pm", "06:00 pm", "07:00 pm", "08:00 pm"];

const grid = document.getElementById("doctor-list-grid");
const modal = document.getElementById("doctor-modal");

window.onload = () => {
  const modal = document.getElementById("doctor-modal");
  modal.classList.add("hidden");
  modal.style.display = "none";

  const stepForm = document.getElementById("step-form");
  const stepSlots = document.getElementById("step-slots");
  if (stepForm) stepForm.classList.add("hidden");
  if (stepSlots) stepSlots.classList.remove("hidden");
};

function renderDoctors(data) {
  const grid = document.getElementById("doctor-list-grid");
  grid.innerHTML = data
    .map(
      (doc) => `
        <div class="doctor-card-alt" onclick="openModal(${doc.id})">
            <div class="image-container">
                <img src="${doc.img}" alt="${doc.name}" onerror="this.src='https://via.placeholder.com/300x300?text=Doctor'">
                <div class="top-rated-badge">
                    <span>★</span> Top Rated
                </div>
            </div>
            <div class="card-content">
                <h3 class="doc-name">${doc.name}</h3>
                <p class="doc-specialty">${doc.spec}</p>
                
                <hr class="divider">
                
                <div class="stats-row">
                    <span class="exp-text">${doc.experience || "10+"} Years</span>
                    <span class="rating-text">★ 4.9</span>
                </div>
                
                <button class="card-book-btn">Book Appointment</button>
            </div>
        </div>
    `,
    )
    .join("");
}

function filterDoctors(category, btn) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  const filtered =
    category === "All"
      ? doctorsData
      : doctorsData.filter(
          (d) => d.spec.toLowerCase() === category.toLowerCase(),
        );

  renderDoctors(filtered);

  if (window.innerWidth < 768) toggleSidebar();
}

const formatNaira = (amount) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
};

function openModal(id) {
  const doc = doctorsData.find((d) => d.id === id);
  if (!doc) return;

  document.getElementById("detail-name").innerHTML =
    `${doc.name} <span style="color:#13A2B1">✓</span>`;
  document.getElementById("detail-spec").innerText = doc.spec;
  document.getElementById("detail-rank").innerText = doc.rank || "Specialist";
  document.getElementById("detail-about").innerText =
    doc.about || "Providing quality healthcare services.";
  document.getElementById("detail-img").src = doc.img;

  document.getElementById("detail-fee").innerText = formatNaira(
    doc.price || 5000,
  );

  renderSlots();

  const modal = document.getElementById("doctor-modal");
  modal.classList.remove("hidden");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("doctor-modal");
  const controls = document.getElementById("booking-controls");
  const successView = document.getElementById("booking-success");

  modal.classList.add("hidden");
  modal.style.display = "none";

  document.body.style.overflow = "auto";

  setTimeout(() => {
    if (controls) controls.classList.remove("hidden");
    if (successView) successView.classList.add("hidden");
  }, 300);
}

window.addEventListener("click", function (event) {
  const modal = document.getElementById("doctor-modal");
  if (event.target === modal) {
    closeModal();
  }
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
}

function renderSlots() {
  document.getElementById("daysContainer").innerHTML = days
    .map(
      (d, i) => `
        <div class="slot-item ${i === 0 ? "active" : ""}" onclick="selectSlot(this)">
            <p style="margin:0; font-size: 0.7rem;">${d.d}</p><strong>${d.n}</strong>
        </div>`,
    )
    .join("");

  document.getElementById("timesContainer").innerHTML = times
    .map(
      (t, i) => `
        <div class="slot-item ${i === 0 ? "active" : ""}" onclick="selectSlot(this)">${t}</div>
    `,
    )
    .join("");
}

function selectSlot(el) {
  el.parentElement
    .querySelectorAll(".active")
    .forEach((i) => i.classList.remove("active"));
  el.classList.add("active");
}

function handleBooking() {
  const docName = document.getElementById("detail-name").innerText;
  const controls = document.getElementById("booking-controls");
  const successView = document.getElementById("booking-success");

  const selectedDay = document.querySelector(
    "#daysContainer .active strong",
  )?.innerText;
  const selectedTime = document.querySelector(
    "#timesContainer .active",
  )?.innerText;

  controls.classList.add("hidden");
  successView.classList.remove("hidden");
  document.getElementById("booked-doc").innerText = docName.replace("✓", "");

  setTimeout(() => {
    closeModal();

    setTimeout(() => {
      controls.classList.remove("hidden");
      successView.classList.add("hidden");
    }, 500);
  }, 3000);
}

function handleFinalBooking(event) {
  event.preventDefault();

  const patientName = document.getElementById("patient-name").value;
  const docName = document
    .getElementById("detail-name")
    .innerText.replace("✓", "")
    .trim();
  const selectedDay = document.querySelector(
    "#daysContainer .active strong",
  )?.innerText;
  const selectedTime = document.querySelector(
    "#timesContainer .active",
  )?.innerText;

  alert(
    `Appointment Booked Successfully!\n\nThank you, ${patientName}. Your visit with ${docName} is confirmed for ${selectedDay} at ${selectedTime}.`,
  );

  closeModal();
}

function closeModal() {
  const modal = document.getElementById("doctor-modal");

  modal.classList.add("hidden");
  modal.style.display = "none";
  document.body.style.overflow = "auto";

  setTimeout(() => {
    goToStep(1);
    if (document.getElementById("patient-details-form")) {
      document.getElementById("patient-details-form").reset();
    }
  }, 300);
}

renderDoctors(doctorsData);
