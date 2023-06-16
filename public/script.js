
// ADD FIELD 
function addField(section) {
    switch(section){
    case 'experience':
        var container = document.getElementById("experience-container");
  var newItem = document.createElement("div");
  newItem.classList.add("experience-item");
  newItem.innerHTML = `
  
  <div class="experience-item">
    <div class="form-row">
      <div class="input-data">
        <input type="text" id="company" name="company[]" required>
        <div class="underline"></div>
        <label for="company">Company:<span class="required">*</span></label>
      </div>
    </div>
    <div class="form-row">
      <div class="input-data">
        <input type="text" id="role" name="role[]" required>
        <div class="underline"></div>
        <label for="role">Role:<span class="required">*</span></label>
      </div>
    </div>
    <div class="form-row">
      <div class="input-data">
        <textarea id="project" name="project[]" required></textarea>
        <div class="underline"></div>
        <label for="project">Project(s):<span class="required">*</span></label>
      </div>
    </div>
    <div class="form-row">
      <div class="input-data">
        <input type="date" id="experienceStart" name="experienceStart" required><br>
        <div class="underline"></div>
        <label for="experienceStart">Start Date:</label><br>
      </div>
      <div class="input-data">
        <input type="date" id="experienceEnd" name="experienceEnd" required>
        <div class="underline"></div>
        <label for="experienceEnd">End Date:</label>
      </div>
    </div>
  </div>

    <button type="button" class="delete-btn" onclick="removeItem(this)">Delete</button>
  `;
  container.insertBefore(newItem, container.lastChild);
  break;
  case 'education':
    var container = document.getElementById("education-container");
    var newItem = document.createElement("div");
    newItem.classList.add("education-item");
  
    newItem.innerHTML = `
    
  <div class="education-item">
    <div class="form-row">
      <div class="input-data">
        <input type="text" id="University_School" name="University_School[]" required>
        <div class="underline"></div>
        <label for="University_School">University/School:<span class="required">*</span></label>
      </div>
    </div>
    <div class="form-row">
      <div class="input-data">
        <input type="text" id="Class" name="Class[]" required>
        <div class="underline"></div>
        <label for="Class">Degree/Class:<span class="required">*</span></label>
      </div>
    </div>
    <div class="form-row">
      <div class="input-data">
        <input type="text" id="Percentage" name="Percentage[]" required>
        <div class="underline"></div>
        <label for="Percentage">CGPA/Percentage:<span class="required">*</span></label>
      </div>
    </div>
    <div class="form-row">
      <div class="input-data">
        <input type="date" id="educationStart" name="educationStart" required>
        <div class="underline"></div>
        <label for="educationStart">Start Date:</label>
      </div>
      <div class="input-data">
        <input type="date" id="educationEnd" name="educationEnd" required>
        <div class="underline"></div>
        <label for="educationEnd">End Date:</label>
      </div>
    </div>
  </div>

      <button type="button" class="delete-btn" onclick="removeItem(this)">Delete</button>
    `;
    container.insertBefore(newItem, container.lastChild);
        default:
        console.error('Invalid category');
      return;
    
    }
  }

  function removeItem(btn) {
    btn.parentNode.remove();
  }
  const fileInput = document.getElementById('imgField');
    fileInput.addEventListener('change', handleImageUpload);

    function handleImageUpload() {
      const file = fileInput.files[0];
      
      // Do something with the uploaded image file
      // For example, create a data URL
      const reader = new FileReader();
      reader.onload = function(event) {
        const imageDataUrl = event.target.result;

        // Redirect to the next page with the image data as a query parameter
      };
      reader.readAsDataURL(file);
    }
// Get the form element and add an event listener for form submission
// const form = document.querySelector('form');
// form.addEventListener('submit', generateResume);

// function generateResume(event) {
//   // Prevent the default form submission behavior
//   event.preventDefault();

//   // Get the form input values
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const phone = document.getElementById('phone').value;
//   const address = document.getElementById('address').value;
//   const summary = document.getElementById('summary').value;
//   const skills = document.getElementsByName('skills[]');
//   const experienceItems = document.querySelectorAll('.experience-item');
//   const education = document.getElementsByName('education[]');

//   // Create a new document to hold the resume
//   const resume = document.implementation.createHTMLDocument();

//   // Add the resume content
//   const title = document.createElement('title');
//   title.textContent = `${name} - Resume`;
//   resume.head.appendChild(title);

//   const header = document.createElement('h1');
//   header.textContent = name;
//   resume.body.appendChild(header);

//   const contactInfo = document.createElement('p');
//   contactInfo.innerHTML = `Email: ${email} <br> Phone: ${phone} <br> Address: ${address}`;
//   resume.body.appendChild(contactInfo);

//   const summaryHeader = document.createElement('h2');
//   summaryHeader.textContent = 'Summary';
//   resume.body.appendChild(summaryHeader);

//   const summaryText = document.createElement('p');
//   summaryText.textContent = summary;
//   resume.body.appendChild(summaryText);

//   const skillsHeader = document.createElement('h2');
//   skillsHeader.textContent = 'Skills';
//   resume.body.appendChild(skillsHeader);

//   const skillsList = document.createElement('ul');
//   for (let i = 0; i < skills.length; i++) {
//     const skill = skills[i].value.trim();
//     if (skill !== '') {
//       const skillItem = document.createElement('li');
//       skillItem.textContent = skill;
//       skillsList.appendChild(skillItem);
//     }
//   }
//   resume.body.appendChild(skillsList);

//   const experienceHeader = document.createElement('h2');
//   experienceHeader.textContent = 'Experience';
//   resume.body.appendChild(experienceHeader);

//   const experienceList = document.createElement('ul');
//   for (let i = 0; i < experienceItems.length; i++) {
//     const company = experienceItems[i].querySelector('#company').value.trim();
//     const role = experienceItems[i].querySelector('#role').value.trim();
//     const year = experienceItems[i].querySelector('#year').value.trim();
//     const project = experienceItems[i].querySelector('#project').value.trim();

//     if (company !== '' && role !== '' && year !== '' && project !== '') {
//       const experienceItem = document.createElement('li');
//       const experienceHeader = document.createElement('h3');
//       experienceHeader.textContent = `${company} - ${role} (${year})`;
//       experienceItem.appendChild(experienceHeader);
//       const projectText = document.createElement('p');
//       projectText.textContent = project;
//       experienceItem.appendChild(projectText);
//       experienceList.appendChild(experienceItem);
//     }
//   }
//   resume.body.appendChild(experienceList);

//   const educationHeader = document.createElement('h2');
//   educationHeader.textContent = 'Education';
//   resume.body.appendChild(educationHeader);

//   const educationList = document.createElement('ul');
//   for (let i = 0; i < education.length; i++) {
//     const educationItem = document.createElement('li');
//     const educationText = document.createElement('p');
//     educationText.textContent = education[i].value.trim();
//     educationItem.appendChild(educationText);
//     educationList.appendChild
// }
// resume.body.appendChild(educationList);

// // Open the generated resume in a new window
// const resumeWindow = window.open();
// resumeWindow.document.write(resume.documentElement.outerHTML);
// }

function handleData() {
  console.log("hello")
}
// document.getElementById("myForm").addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevents the default form submission behavior

//   var form = document.getElementById("myForm");
//   var formData = new FormData(form);
 
//   // Retrieve the individual form fields
//   var name = formData.get("name");
//   var email = formData.get("email");
//   var phone = formData.get("phone");
//   var address = formData.get("address");
//   var tagline = formData.get("Tagline");
//   var skill1 = formData.get("skill1");
//   var skill2 = formData.get("skill2");
//   var skill3 = formData.get("skill3");
//   var skill4 = formData.get("skill4");
//   var skill5 = formData.get("skill5");
//   var skill6 = formData.get("skill6");
//   var companies = formData.getAll("company[]");
//   var roles = formData.getAll("role[]");
//   var projects = formData.getAll("project[]");
//   var universities = formData.getAll("University/School[]");
//   var classes = formData.getAll("Class[]");
//   var fields = formData.getAll("Field[]");

//   // Code to do something with the form data goes here
// });
