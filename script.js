let resume = {
    name: "Anwar Qasim",
    address: "151 Ranch Estates RD NW, T3G 1L4",
    phone: "403.852.9562",
    email: "anwar.qasim320@gmail.com",
    qualifications: [
      "CPR Training",
      "Proficiency in Speech",
      "Perseverance In Tough Tasks, regardless of initial difficulty",
      "Computer Proficiency",
      "Leadership Experience",
      "Able to Solve difficult tasks no matter how difficult the task may seem",
      "Excellent Skills with working as a team",
      "Proficiency in HTML, CSS, C++, Arduino and Javascript"
    ],
    work: [
      {
        employer: "Al-Salam Center",
        location: "Calgary, Alberta",
        dates: "2019-2019",
        duties: [
          "Helped to run a community Quran competition",
          "Guided competitors to appropriate areas based on category",
          "Ushered parents to waiting area",
          "Ensured constant supply of refreshments are available to both competitors and parents"
        ]
      },
      {
        employer: "Calgary Drop-In & Rehab Centre Society",
        location: "Calgary, Alberta",
        dates: "2019-2020",
        duties: [
          "Set up dining area",
          "Serve food with the help of colleagues directing which table the plates of food went to",
          "Welcomed visitors with a warm and friendly attitude to the center and ushered to dining area"
        ]
      },
      {
        employer: "Inn from the Cold",
        location: "Calgary, Alberta",
        dates: "2018-2018",
        duties: [
          "Set up dining area for the meal",
          "Serve food at the front end and worked with kitchen so the constant demand was met",
          "Welcomed visitors with a warm and friendly attitude to the center and ushered to dining area"
        ]
      }
    ],
    education: [
      {
        institution: "Robert Thirsk High School",
        location: "Calgary, Alberta",
        degree: "Grade 12",
        dates: "Graduated"
      },
      {
        institution: "Bow Valley College",
        location: "Calgary, Alberta",
        degree: "Software Development",
        dates: "2023-2025"
      },
      {
        institution: "Sir John A Hamilton, Navy Cadets",
        location: "Calgary, Alberta",
        degree: "",
        dates: "2015-2016"
      },
      {
        institution: "781 Air Cadets, RCACS",
        location: "Calgary, Alberta",
        degree: "",
        dates: "2019-2022"
      }
    ]
  };
  
  // Function to display contact information
  function displayContact() {
    let contactSection = document.getElementById("contact");
    let contactHTML = "<h2>Contact Information</h2>";
    contactHTML += "<p>" + resume.name + "</p>";
    contactHTML += "<p>" + resume.address + "</p>";
    contactHTML += "<p>" + resume.phone + "</p>";
    contactHTML += "<p>" + resume.email + "</p>";
    contactSection.innerHTML = contactHTML;
  }
  
  // Function to display qualifications
  function displayQualifications() {
    let qualificationsSection = document.getElementById("qualifications");
    let qualificationsHTML = "<h2>Qualifications</h2><ul>";
    for (let i = 0; i < resume.qualifications.length; i++) {
      qualificationsHTML += "<li>" + resume.qualifications[i] + "</li>";
    }
    qualificationsHTML += "</ul>";
    qualificationsSection.innerHTML = qualificationsHTML;
  }