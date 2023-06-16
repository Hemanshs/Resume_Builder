
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());


console.log(params)

const userName = params.name
document.getElementById('resume_username').innerHTML = userName;

console.log(urlSearchParams.getAll('company[]'))


document.getElementById('s1').innerHTML =urlSearchParams.get('skill1') ;
document.getElementById('s2').innerHTML =urlSearchParams.get('skill2') ;
document.getElementById('s3').innerHTML =urlSearchParams.get('skill3') ;
document.getElementById('s4').innerHTML =urlSearchParams.get('skill4') ;
document.getElementById('s5').innerHTML =urlSearchParams.get('skill5') ;
document.getElementById('s6').innerHTML =urlSearchParams.get('skill6') ;
document.getElementById('state').innerHTML =urlSearchParams.get('address') ;
document.getElementById('phone').innerHTML =urlSearchParams.get('phone') ;
document.getElementById('email').innerHTML =urlSearchParams.get('email') ;
document.getElementById('tag').innerHTML =urlSearchParams.get('Tagline') ;

    const imageDataUrl = urlSearchParams.get('image');
    
    if (imageDataUrl) {
      const imageElement = document.createElement('img');
      imageElement.src = imageDataUrl;
      document.body.appendChild(imageElement);
    }

if (urlSearchParams.getAll('company[]').length>=1)
{ 
  str="";
  const companyName=urlSearchParams.getAll('company[]');
  const role=urlSearchParams.getAll('role[]');
  const project=urlSearchParams.getAll('project[]');
  const ExpStart=urlSearchParams.getAll('experienceStart');
  const ExpEnd=urlSearchParams.getAll('experienceEnd');
  for (let i=0;i<urlSearchParams.getAll('company[]').length;i++)
  {
    str = str + `<h3 style="display:inline;">${role[i]} at ${companyName[i]}</h3><tr><h6 style="display:inline; float:right;">${ExpStart[i]} to ${ExpEnd[i]}</h6><br><h6>${project[i]}</h6><br>`;

}

  document.getElementById('jD').innerHTML = str;

}
if (urlSearchParams.getAll('University/School[]').length>=1)
{
  str="";
  const companyName=urlSearchParams.getAll('University/School[]');
  const clas=urlSearchParams.getAll('Class[]');
  
  const Field=urlSearchParams.getAll('Field[]');
  const ExpStart=urlSearchParams.getAll('educationStart');
  const ExpEnd=urlSearchParams.getAll('educationEnd');
  for (let i=0;i<urlSearchParams.getAll('University/School[]').length;i++)
  {
   
      str = str + `<h4 style="display:inline; "> ${companyName[i]}</h4><h4 style="display:inline; margin-left: 10em;">${clas[i]}</h4><h6 style="display:inline; float:right;">${ExpStart[i]} to ${ExpEnd[i]}</h6><br><br>`;

    
}

  document.getElementById('eD').innerHTML = str;
}