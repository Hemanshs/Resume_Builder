const express= require("express");
const request=require("request");
const bodyParser=require("body-parser");
const https = require("https");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"))// to use the staic images in the website we make a public folder and then put all the images and css int that folder
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    // res.send("running");
})

htmltemp=`
`
app.post("/resume",function(req,res){
    console.log(req.body)
    var name=req.body.name;
    var lastname=(name.split(" ")).pop();
    var firstname=name.replace(lastname,"");
    var email=req.body.email;
    var phone=req.body.phone;
    var address=req.body.address;
    var Tagline=req.body.Tagline;
    var phone=req.body.phone;
    var Github=req.body.Github
    var Facebook=req.body.Facebook
    var LinkedIn=req.body.LinkedIn
    var twitter=req.body.twitter
    var skill1=req.body.skill1
    var skill2=req.body.skill2
    var skill3=req.body.skill3
    var skill4=req.body.skill4
    var skill5=req.body.skill5
    var skill6=req.body.skill6
    var interest1=req.body.interest1
    var interest2=req.body.interest2
    var interest3=req.body.interest3
    var interest4=req.body.interest4
    var UniSch=req.body.University_School
    var Class=req.body.Class
    var Percentage=req.body.Percentage
    var educationStart=req.body.educationStart
    var educationEnd=req.body.educationEnd
    var Company=req.body.company
    var role=req.body.role
    var Project=req.body.project
    var experienceStart=req.body.experienceStart
    var experienceEnd=req.body.experienceEnd
    var skill_proficiency1=req.body.skill_proficiency1
    var skill_proficiency2=req.body.skill_proficiency2
    var skill_proficiency3=req.body.skill_proficiency3
    var skill_proficiency4=req.body.skill_proficiency4
    var skill_proficiency5=req.body.skill_proficiency5
    var skill_proficiency6=req.body.skill_proficiency6
htmltemp=`<!DOCTYPE html>
<html>
    <head><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<style>
@import url(https://fonts.googleapis.com/css?family=Varela+Round);
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700);
*, *::after, *::before {
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5em;
}

a {
  color: #66cc99;
  text-decoration: none;
}

.clearfix::after, .clearfix::before {
  content: " ";
  display: table;
}

.clearfix::after {
  clear: both;
}

.bold {
  color: #4a4e51;
  font-weight: 400;
}

.resume-wrapper {
  position: relative;
  text-align: center;
  height: 100%;
}

.container {
  min-height: 600px;
}

.profile {
  background: #fff;
  width: 40%;
  float: left;
  color: #9099a0;
}
@media (max-width: 850px) {
  .profile {
    width: 100%;
  }
}
.profile .name-wrapper {
  float: left;
  width: 60%;
}
.profile h1 {
  font-size: 2.5em;
  text-align: left;
  font-family: "Varela Round", sans-serif;
  color: #4a4e51;
  text-transform: uppercase;
  line-height: 1em;
  padding-top: 40px;
}
@media (max-width: 1200px) {
  .profile h1 {
    padding-top: 20px;
  }
}
@media (max-width: 450px) {
  .profile h1 {
    font-size: 1.8em;
    padding-top: 20px;
  }
}
.profile li {
  margin-bottom: 10px;
}
.profile .picture-resume-wrapper {
  width: 40%;
  display: block;
  float: left;
}
@media (max-width: 1200px) {
  .profile .picture-resume-wrapper {
    width: 100%;
  }
}
.profile .picture-resume {
  width: 220px;
  height: 220px;
  background-size: cover;
  border-radius: 50%;
  margin-right: 0px;
  display: table;
  position: relative;
  vertical-align: middle;
}
.profile .picture-resume span {
  display: table-cell;
  vertical-align: middle;
  position: relative;
  margin: 0 auto;
  z-index: 10;
  text-align: center;
}
.profile .picture-resume img {
  border-radius: 50%;
  width: 130px;
}
@media (max-width: 1500px) {
  .profile .picture-resume img {
    width: 80px;
  }
}
@media (max-width: 1200px) {
  .profile .picture-resume img {
    width: 120px;
    height: 120px;
  }
}
@media (max-width: 1500px) {
  .profile .picture-resume {
    width: 150px;
    height: 150px;
  }
}
@media (max-width: 1200px) {
  .profile .picture-resume {
    width: 200px;
    height: 200px;
  }
}
@media (max-width: 450px) {
  .profile .picture-resume {
    width: 180px;
    height: 180px;
  }
}
.profile .contact-info {
  margin-top: 100px;
  font-weight: 300;
}
@media (max-width: 1200px) {
  .profile .contact-info {
    margin-top: 70px;
  }
}
@media (max-width: 450px) {
  .profile .contact-info {
    margin-top: 50px;
  }
}
.profile .list-titles {
  float: left;
  text-align: left;
  font-weight: 600;
  width: 40%;
  color: #4a4e51;
}
.profile .list-content {
  float: left;
  width: 60%;
  text-align: left;
  font-weight: 300;
}
.profile .contact-presentation {
  text-align: left;
  font-weight: 300;
  margin-top: 100px;
  margin-bottom: 100px;
}
@media (max-width: 1200px) {
  .profile .contact-presentation {
    margin-top: 70px;
    margin-bottom: 70px;
  }
}
@media (max-width: 850px) {
  .profile .contact-presentation {
    margin-top: 50px;
    margin-bottom: 50px;
  }
}
.profile svg {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.profile .st0, .profile .st1 {
  fill: #66cc99;
}

.experience {
  background: #3d3e42;
  width: 60%;
  float: left;
  position: relative;
  color: #9099a0;
  font-weight: 300;
  min-height: 100%;
  min-height: 100vh;
}
@media (max-width: 850px) {
  .experience {
    width: 100%;
  }
}
.experience h3.experience-title {
  color: #66cc99;
  text-align: left;
  text-transform: uppercase;
  font-size: 1.2em;
  margin-bottom: 20px;
  font-weight: 400;
}
.experience .company-wrapper {
  width: 30%;
  float: left;
  text-align: left;
  padding-right: 5%;
  margin-bottom: 60px;
}
@media (max-width: 450px) {
  .experience .company-wrapper {
    width: 100%;
    margin-bottom: 20px;
  }
}
.experience .job-wrapper {
  width: 70%;
  float: left;
  text-align: left;
  padding-right: 5%;
  margin-bottom: 60px;
}
@media (max-width: 450px) {
  .experience .job-wrapper {
    width: 100%;
    margin-bottom: 40px;
  }
}
.experience .experience-title {
  color: white;
  margin-bottom: 15px;
}

.section-padding {
  padding: 60px 60px 40px 40px;
}
@media (max-width: 850px) {
  .section-padding {
    padding: 80px 15% 40px 10%;
  }
}
@media (max-width: 450px) {
  .section-padding {
    padding: 40px 10% 20px 5%;
  }
}

.section-wrapper {
  width: 50%;
  float: right;
  text-align: left;
  color: #9099a0;
  font-weight: 300;
  margin-bottom: 20px;
}
@media (max-width: 450px) {
  .section-wrapper {
    width: 100%;
  }
}
.section-wrapper:nth-child(3) {
  padding-right: 8%;
}
.section-wrapper h3.section-title {
  color: #66cc99;
  text-align: left;
  text-transform: uppercase;
  font-size: 1.2em;
  margin-bottom: 20px;
  font-weight: 400;
}
.section-wrapper .skill-percentage {
  margin-bottom: 10px;
  position: relative;
}
.section-wrapper .skill-percentage::after {
  content: "";
  width: 100%;
  height: 6px;
  background: #4a4e51;
  display: block;
  margin-top: 3px;
}
.section-wrapper .skill-percentage::before {
  content: "";
  height: 6px;
  background: #66cc99;
  position: absolute;
  margin-top: 3px;
  bottom: 0;
}
.section-wrapper .skill-percentage:nth-child(1)::before {
  width: ${skill_proficiency1}%;
  -webkit-animation: skill_1 0.6s ease;
          animation: skill_1 0.6s ease;
}
.section-wrapper .skill-percentage:nth-child(2)::before {
  width: ${skill_proficiency2}%;
  -webkit-animation: skill_2 0.6s ease;
          animation: skill_2 0.6s ease;
}
.section-wrapper .skill-percentage:nth-child(3)::before {
  width: ${skill_proficiency3}%;
  -webkit-animation: skill_3 0.6s ease;
          animation: skill_3 0.6s ease;
}
.section-wrapper .skill-percentage:nth-child(4)::before {
  width: ${skill_proficiency4}%;
  -webkit-animation: skill_4 0.6s ease;
          animation: skill_4 0.6s ease;
}
.section-wrapper .skill-percentage:nth-child(5)::before {
  width: ${skill_proficiency5}%;
  -webkit-animation: skill_5 0.6s ease;
          animation: skill_5 0.6s ease;
}
.section-wrapper .skill-percentage:nth-child(6)::before {
  width: ${skill_proficiency6}%;
  -webkit-animation: skill_6 0.6s ease;
          animation: skill_6 0.6s ease;
}


@-webkit-keyframes skill_1 {
  from {
    width: 0%;
  }
  to {
    width: ${skill_proficiency1}%;
  }
}

@keyframes skill_1 {
  from {
    width: 0%;
  }
  to {
    width: ${skill_proficiency1}%;
  }
}
@-webkit-keyframes skill_2 {
  from {
    width: 0%;
  }
  to {
    width: ${skill_proficiency2}%;
  }
}
@keyframes skill_2 {
  from {
    width: 0%;
  }
  to {
    width: ${skill_proficiency2}%;
  }
}
@-webkit-keyframes skill_3 {
  from {
    width: 0%;
  }
  to {
    width: ${skill_proficiency3}%;
  }
}
@keyframes skill_3 {
  from {
    width: 0%;
  }
  to {
    width: ${skill_proficiency3}%;
  }
}
@-webkit-keyframes skill_4 {
  from {
    width: 0%;
  }
  to {
    width: ${skill_proficiency4}%;
  }
}
@keyframes skill_4 {
  from {
    width: 0%;
  }
  to {
    width: ${skill_proficiency4}%;
  }
}
@-webkit-keyframes skill_5 {
  from {
    width: 0%;
  }
  to {
    width: ${skill_proficiency5}%;
  }
}
@keyframes skill_5 {
  from {
    width: 0%;
  }
  to {
    width: ${skill_proficiency5}%;
  }
}
@-webkit-keyframes skill_6 {
  from {
    width: 0%;
  }
  to {
    width: ${skill_proficiency6}%;
  }
}
@keyframes skill_6 {
  from {
    width: 0%;
  }
  to {
    width: ${skill_proficiency6}%;
  }
}
.logo {
  width: 200px;
  height: 200px;
  background-color: #002a38;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  border-radius: 50%;
}

.initials {
  text-transform: uppercase;
}

</style>
</head>
<body>
    
<div class="resume-wrapper">
	<section class="profile section-padding">
		<div class="container">
			<div class="picture-resume-wrapper">
        <div class="picture-resume">
        <div class="logo">
        <span class="initials">${firstname[0]}${lastname[0]}</span>
        </div>
        <svg version="1.1" viewBox="0 0 350 350">
  
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9" result="cm" />
    </filter>
  </defs>
  
  
<g filter="url(#goo)" >  

  <circle id="main_circle" class="st0" cx="171.5" cy="175.6" r="130"/>
  
  <circle id="circle" class="bubble0 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble1 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble2 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble3 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble4 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble5 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble6 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble7 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble8 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble9 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble10 st1" cx="171.5" cy="175.6" r="122.7"/>

</g>  
</svg>
      </div>
         <div class="clearfix"></div>
 </div>
      <div class="name-wrapper">
        <h1>${firstname} <br/>${lastname}</h1><!-- YOUR NAME AND LAST NAME  -->
      </div>
      <div class="clearfix"></div>
      <div class="contact-info clearfix">
      	<ul class="list-titles">
      		<li>Phone </li>
      		<li>Mail</li>
      		
      		<li>Home</li>
      	</ul>
        <ul class="list-content ">
        	<li>${phone}</li> <!-- YOUR PHONE NUMBER  -->
        	<li>${email}</li> <!-- YOUR EMAIL -->

        	<li>${address}</li> <!-- YOUR STATE AND COUNTRY  -->
        </ul>
      </div>
      <div class="contact-presentation"> <!-- YOUR PRESENTATION RESUME  -->
      	<p><span class="bold">${Tagline}</span> </p>
      </div>
      <div class="contact-social clearfix">
      	<ul class="list-titles">
      		<li>Github</li>
      		<li>Facebook</li>
      		<li>LinkedIn</li>
            <li>Twitter</li>
      	</ul>
        <ul class="list-content"> <!-- REMEMBER TO PUT THE URL ON THE HREF TAG  -->
      		<li><a href="${Github}"><img src="images/github.png" alt="HTML tutorial" style="width:12px ;height:12px;"></a></li> <!-- YOUR Github USER  -->
      		<li><a href="${Facebook}"><img src="images/facebook.png" alt="HTML tutorial" style="width:12px;height:12px;"></a></li> <!-- YOUR Facebook USER  -->
      		<li><a href="${LinkedIn}"><img src="images/linkedin.png" alt="HTML tutorial" style="width:12px;height:12px;"></a></li> <!-- YOUR LinkedIn USER  -->
      		<li><a href="${twitter}"><img src="images/twitter.png" alt="HTML tutorial" style="width:12px;height:12px;"></a></li> <!-- YOUR TWITTER USER  -->
        </ul>
      </div>
		</div>
	</section> 
   <section class="experience section-padding">
  <div class="container">
    <h3 class="experience-title">Experience</h3>`
  for(let i=0;i<Company.length;i++){
  htmltemp+=`      
      <div class="experience-wrapper">
      	<div class="company-wrapper clearfix">
      		<div class="experience-title">${Company[i]}</div> <!-- NAME OF THE COMPANY YOUWORK WITH  -->
          <div class="time">${experienceStart[i]} - ${experienceEnd[i]}</div> <!-- THE TIME YOU WORK WITH THE COMPANY  -->
      	</div>
        
        <div class="job-wrapper clearfix">
        	<div class="experience-title">${role[i]} </div> <!-- JOB TITLE  -->
          <div class="company-description">
          	<p>${Project[i]}</p>  <!-- JOB DESCRIPTION  -->
          </div>
        </div>
        `}
        htmltemp+=` </div><!--Skill experience-->
        
        <div class="container">
          <h3 class="experience-title">Education</h3>`
          for(let i=0;i<UniSch.length;i++){
            htmltemp+=`      
                <div class="experience-wrapper">
                  <div class="company-wrapper clearfix">
                    <div class="experience-title">${UniSch[i]}</div> <!-- NAME OF THE COMPANY YOUWORK WITH  -->
                    <div class="time">${educationStart[i]} - ${educationEnd[i]}</div> <!-- THE TIME YOU WORK WITH THE COMPANY  -->
                  </div>
                  
                  <div class="job-wrapper clearfix">
                    <div class="experience-title">${Class[i]} </div> <!-- JOB TITLE  -->
                    <div class="company-description">
                      <p>${Percentage[i]}</p>  <!-- JOB DESCRIPTION  -->
                    </div>
                  </div>
                  
                  `}
        htmltemp+=`    
     
        </div><!--Skill experience-->
      <div class="section-wrapper clearfix">
      	<h3 class="section-title">Skills</h3>  <!-- YOUR SET OF SKILLS  -->
        	<ul>
        		<li class="skill-percentage">${skill1}</li>
        		<li class="skill-percentage">${skill2}</li>
        		<li class="skill-percentage">${skill3}</li>
        		<li class="skill-percentage">${skill4}</li>
        		<li class="skill-percentage">${skill5}</li>
        		<li class="skill-percentage">${skill6}</li>
            
        	</ul>
        
      </div>
      
      <div class="section-wrapper clearfix">
        <h3 class="section-title">Interest</h3>  <!-- DESCRIPTION OF YOUR HOBBIES -->
       
        	<ul>
        		<li >${interest1}</li>
        		<li >${interest2}</li>
        		<li >${interest3}</li>
        		<li >${interest4}</li>
        		           
        	</ul> 
      </div>
      
  	</div>
  </section>
  
  <div class="clearfix"></div>
</div>

<script>var select = function(s) {
    return document.querySelector(s);
  }
  
  function randomBetween(min,max)
  {
      var number = Math.floor(Math.random()*(max-min+1)+min);
    
      if ( number !== 0 ){
        return number;
      }else {
        return 0.5;
      }
  }
  
  var tl = new TimelineMax();
  
  for(var i = 0; i < 20; i++){
  
    var t = TweenMax.to(select('.bubble' + i), randomBetween(1, 1.5), {
      x: randomBetween(12, 15) * (randomBetween(-1, 1)),
      y: randomBetween(12, 15) * (randomBetween(-1, 1)), 
      repeat:-1,
      repeatDelay:randomBetween(0.2, 0.5),
      yoyo:true,
      ease:Elastic.easeOut.config(1, 0.5)
    })
  
    tl.add(t, (i+1)/0.6)
  }
  
  tl.seek(50);</script>
</body> 

</html>`
   res.send(htmltemp)
    // res.sendFile(__dirname+"/resume.html")
    
    // res.send("hello")
})
app.listen(3000,function(){
    console.log("server started on port 3000");
});
