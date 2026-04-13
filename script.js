// Inline Data (instead of fetching from data.json)
const data = {
  "about": {
    "name": "Vahini Krishnamoorthy",
    "description": "I am passionate about technology, machine learning, and web development. I enjoy building solutions that combine creativity and innovation.",
    "image": "images/profile.jpg"
  },
  "projects": [
    {
      "title": "Bakebloom Website",
      "description": "A responsive bakery website showcasing products and orders."
    },
    {
      "title": "Rainfall Prediction - Machine Learning",
      "description": "A predictive model using ML algorithms to forecast rainfall."
    }
  ],
  "internships": [
    {
      "company": "Edvedha",
      "role": "Intern - Machine Learning with Python",
      "description": "Worked on real-world projects using Python and ML concepts."
    }
  ],
  "workshops": [
    {
      "title": "Data Analytics Workshop",
      "description": "Hands-on workshop covering tools and techniques in data analytics."
    }
  ],
  "skills": ["Python", "Machine Learning", "Java", "HTML", "CSS", "JavaScript", "SQL", "Data Analytics"],
  "education": [
    {
      "degree": "B.Tech in Computer Science",
      "institution": "Your College Name",
      "year": "2021 - 2025"
    },
    {
      "degree": "Higher Secondary",
      "institution": "Your School Name",
      "year": "2019 - 2021"
    }
  ],
  "contact": {
    "email": "youremail@example.com",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourgithub"
  }
};

// =================== RENDER ===================

// About
document.getElementById("about").innerHTML = `
  <div class="text-center">
    <img src="${data.about.image}" class="rounded-circle profile-img" alt="Profile Picture">
    <h2 class="mt-3">${data.about.name}</h2>
    <p>${data.about.description}</p>
  </div>
`;

// Projects
document.getElementById("projects").innerHTML = `
  <h2 class="section-title">Projects</h2>
  <div class="row">
    ${data.projects.map(p => `
      <div class="col-md-6">
        <div class="card mb-3 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text">${p.description}</p>
          </div>
        </div>
      </div>
    `).join("")}
  </div>
`;

// Internships
document.getElementById("internships").innerHTML = `
  <h2 class="section-title">Internships</h2>
  ${data.internships.map(i => `
    <div class="card mb-3 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">${i.role} at ${i.company}</h5>
        <p class="card-text">${i.description}</p>
      </div>
    </div>
  `).join("")}
`;

// Workshops
document.getElementById("workshops").innerHTML = `
  <h2 class="section-title">Workshops</h2>
  ${data.workshops.map(w => `
    <div class="card mb-3 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">${w.title}</h5>
        <p class="card-text">${w.description}</p>
      </div>
    </div>
  `).join("")}
`;

// Skills
document.getElementById("skills").innerHTML = `
  <h2 class="section-title">Skills</h2>
  <div class="d-flex flex-wrap">
    ${data.skills.map(skill => `
      <span class="badge bg-success m-1 p-2">${skill}</span>
    `).join("")}
  </div>
`;

// Education
document.getElementById("education").innerHTML = `
  <h2 class="section-title">Education</h2>
  ${data.education.map(e => `
    <div class="card mb-3 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">${e.degree}</h5>
        <p class="card-text">${e.institution}</p>
        <small class="text-muted">${e.year}</small>
      </div>
    </div>
  `).join("")}
`;

// Contact
document.getElementById("contact").innerHTML = `
  <h2 class="section-title">Contact</h2>
  <p>Email: <a href="mailto:${data.contact.email}">${data.contact.email}</a></p>
  <p>LinkedIn: <a href="${data.contact.linkedin}" target="_blank">${data.contact.linkedin}</a></p>
  <p>GitHub: <a href="${data.contact.github}" target="_blank">${data.contact.github}</a></p>
`;

