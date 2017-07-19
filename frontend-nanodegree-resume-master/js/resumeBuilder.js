//data about me
var bio = {
  "name" : "Aaron Stutzer",
  "role" : "System Engineer",
  "contacts" : {
    "email" : "aaron.stutzer@gmail.com",
    "mobile" : "+41763524827",
    "github" : "aaronstutzer",
    "location" : "Switzerland Cham"
  },
  "welcomeMessage" : "Hej, hur är läget?",
  "biopic" : "images/awesome_profile_picture.jpg",
  "skills" : ["Windows Server" , "Python", "JS"],
  "display" : function display() {
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

    for(info in formattedContacts) {
      $("#topContacts").append(formattedContacts[info]);
      $("#footerContacts").append(formattedContacts[info]);
    }

    if (bio.skills.length > 0){
      $("#header").append(HTMLskillsStart);

      for(skill in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
      }
    }
  }
}

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
  "display" : function display() {
    for (job in work.jobs){
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;

      $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
  }
}

var education = {
  "schools": [
    {
    "name" : "ZLI",
    "location" : "Switzerland Zurich",
    "degrees" : "EFZ",
    "majors" : "Information Technology",
    "dates" : "2011-2013",
    "url" : "http://www.zli.ch"
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
  "display" : function display() {
    for (school in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

      $(".education-entry:last").append(formattedName);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedMajor);
    }
    //$("#education").append(HTMLonlineClasses);
   for (c in education.onlineCourses) {
     $("#education").append(HTMLonlineClasses);
     $("#education").append(HTMLschoolStart);

     var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[c].school);
     var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[c].title);
     var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[c].dates);
     var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[c].url);

     $(".education-entry:last").append(formattedTitle + formattedSchool);
     $(".education-entry:last").append(formattedDates);
     $(".education-entry:last").append(formattedURL);
   }
  }
}

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
  "display" : function display() {
    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

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
