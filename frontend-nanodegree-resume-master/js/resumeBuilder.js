//data about me
var bio = {
  "name" : "Aaron Stutzer",
  "role" : "System Engineer",
  "contacts" : {
    "email" : "aaron.stutzer@gmail.com",
    "mobile" : "+41761234567",
    "github" : "aaronstutzer",
    "location" : "Switzerland Cham"
  },
  "welcomeMessage" : "Hej, hur är läget?",
  "biopic" : "images/awesome_profile_picture.jpg",
  "skills" : ["Windows Server" , "Python", "JS"],
  "display" : function() {
    var formattedName = HTMLheaderName.replace( "%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace( "%data%", bio.role);
    var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBiopic);
    $("#header").append(formattedWelcomeMsg);

    var formattedContacts = [];
    formattedContacts.push(HTMLemail.replace("%data%",bio.contacts.email));
    formattedContacts.push(HTMLmobile.replace("%data%",bio.contacts.mobile));
    formattedContacts.push(HTMLgithub.replace("%data%",bio.contacts.github));
    formattedContacts.push(HTMLlocation.replace("%data%",bio.contacts.location));

    formattedContacts.forEach(function(info) {
      $("#topContacts,#footerContacts").append(formattedContacts[info]);
    });

    if (bio.skills.length > 0){
      $("#header").append(HTMLskillsStart);

      bio.skills.forEach(function(skill) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
      });
    }
  }
};

var work = {
  "jobs": [
    {
    "employer" : "ricardo.ch",
    "title" : "System Engineer",
    "location" : "Switzerland Zug",
    "dates" : "2012-2017",
    "description" : "Blablablaaa"
  },{
    "employer" : "Work-Service",
    "title" : "Mover",
    "location" : "Switzerland Baar",
    "dates" : "2011-2012",
    "description" : "Blablablaaa"
  },{
    "employer" : "IBK Göteborg",
    "title" : "Defender",
    "location" : "Sweden Gothenburg",
    "dates" : "2010-2011",
    "description" : "Blablablaaa"
  }
],
  "display" : function() {
    $("#workExperience").append(HTMLworkStart);

    work.jobs.forEach(function(job) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedDescription);
    });
  }
};

var education = {
  "schools": [
    {
    "name" : "ZLI",
    "location" : "Switzerland Zurich",
    "degree" : "EFZ",
    "majors" : ["Information Technology"],
    "dates" : "2011-2013",
    "url" : "http://www.zli.ch"
  },{
    "name" : "SLT",
    "location" : "Ecuador Quito",
    "degree" : "B2",
    "majors" : ["Spanish"],
    "dates" : "2016",
    "url" : "http://www.spanishlanguagetravels.com"
  }
],
  "onlineCourses" : [
    {
      "school" : "Udacity",
      "title" : "Nanodegree Intro to Programming",
      "dates" : "in progress",
      "url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }
  ],
  "display" : function() {
    $("#education").append(HTMLschoolStart);

      education.schools.forEach(function(school){
        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);

        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedMajor);
      });

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);

     education.onlineCourses.forEach(function(course){
       var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
       var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
       var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
       var formattedURL = HTMLonlineURL.replace("%data%", course.url);

       $(".education-entry:last").append(formattedTitle + formattedSchool);
       $(".education-entry:last").append(formattedOnlineDates);
       $(".education-entry:last").append(formattedURL);
     });

  }
};

var projects = {
  "projects" : [
    {
      "title" : "Sweden",
      "dates" : "2010-2011",
      "description" : "learn swedish and play floorball",
      "images" : ["images/Sweden.png", "images/floorball.jpg"]
    },{
      "title" : "Ecuador",
      "dates" : "2016",
      "description" : "learn spanish and surfing",
      "images" : ["images/Ecuador.png", "images/surf.png"]
    }
  ],
  "display" : function() {
    $("#projects").append(HTMLprojectStart);
      projects.projects.forEach(function(project) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        project.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        });
      });
    }
  };

bio.display();
work.display();
projects.display();
education.display();

/*
function locationizer(work_obj) {
  var locationArray = [];

  for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }

  return locationArray;
}
locationizer(work);
*/
//add google map
$("#mapDiv").append(googleMap);
