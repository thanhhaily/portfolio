var bio = {
	"name" : "Thanh Hai Ly",
	"role" : "Java Developer",
	"contacts" : {
		"email" : "hai.lt1015@gmail.com",
		"mobile" : "0916710xxx",
		"twitter" : "lythanhhai89",
		"github" : "thanhhaily",
		"location" : "Da Nang"
	},
	"pictureUrl" : "images/me.jpg",
	"welcomeMessage" : "Hi, my name is Hai. I'm living in a romantic city, I like to spend my time listening music, watching movie, travelling, and most of all, I like meditation.",
	"skills" : ["English", "HMTL + CSS", "JavaScript", "Java", "MySQL + SQL SERVER"]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);
	$("#topContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation);
	$("#header").append(formattedWelcomeMsg);

	if(bio.skills.length !== 0) {
		$("#header").append(HTMLskillsStart);
		for(var i = 0; i < bio.skills.length; i++) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkills);
		}
	}
}

var work = {
	"job" : [
		{
			"employer" : "Truong An Lac Lmt",
			"title" : "Accountancy",
			"location" : "Ho Chi Minh city",
			"dates" : "February - May 2012",
			"description" : "Documents financial transactions by entering account information. Summarizes current financial status by collecting information; preparing balance sheet, profit and loss statement, and other reports."
		},
		{
			"employer" : "GCOMM Research Company",
			"title" : "Data entry personnel",
			"location" : "Ho Chi Minh city",
			"dates" : "August 2012 - December 2013",
			"description" : "Prepares source data for computer entry by compiling and sorting information; establishing entry priorities. Enters customer and account data by inputting alphabetic and numeric information on keyboard or optical scanner according to screen format."
		},
		{
			"employer" : "My Own Group",
			"title" : "Translator, Copywriter",
			"location" : "Ha Noi city",
			"dates" : "February 2014 - December 2014",
			"description" : "We are a small Startup Company."
		}
	]
};

work.display = function() {
	for(var i = 0; i < work.job.length; i++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.job[i].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.job[i].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.job[i].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.job[i].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.job[i].description);

		$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

var education = {
	"schools" : [
		{
			"name" : "University of Economics",
			"location" : "Da Nang",
			"degree" : "Bachelor's degree",
			"majors" : "Accountant",
			"dates" : "DROPOUT"
		},
		{
			"name" : "Aptech",
			"location" : "Da Nang",
			"degree" : "Diploma",
			"majors" : "Computer Science",
			"dates" : "UNDERGRADUATE"
		}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/course/ud804"
		}
	]
};

education.display = function() {
	for(var i = 0; i < education.schools.length; i++) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	$("#education").append(HTMLonlineClasses);
	for(var i = 0; i < education.onlineCourses.length; i++) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDate);
		$(".education-entry:last").append(formattedOnlineUrl);
	}
}

var projects = {
	"project" : [
		{
			"title" : "iMovie Website Project",
			"dates" : 2015,
			"description" : "A static website for watching movie online. The website is created using HTML, CSS, JavaScript, Bootstrap, JQuery",
			"images" : [
				"images/project1-1.jpg",
				"images/category-movie-page.jpg",
				"images/watch-movie-page.jpg"
			]
		},
		{
			"title" : "School Mangement Program",
			"dates" : 2015,
			"description" : "Java application built using Java with JDBC, Swing, SQL SERVER 2008.",
			"images" : ["images/javaapp.jpg"]
		}
	]
}

projects.display = function() {
	for(var i = 0;  i < projects.project.length; i++) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
		var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.project[i].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDate);
		$(".project-entry:last").append(formattedProjectDescription);

		if(projects.project[i].images.length > 0) {
			projects.project[i].images.forEach(function(e) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", e);
				$(".project-entry:last").append(formattedProjectImage);
			});
		}
	}
}

//$("#main").append(internationalizeButton);

function inName() {
	var finalName = bio.name;
	var arrayName = finalName.trim().split(" ");
	arrayName[0] = arrayName[0].slice(0,1).toUpperCase() + arrayName[0].slice(1).toLowerCase();
	arrayName[1] = arrayName[1].slice(0,1).toUpperCase() + arrayName[1].slice(1).toLowerCase();
	arrayName[2] = arrayName[2].toUpperCase();
	finalName = arrayName.join(" ");
  return finalName;
}

// Maps
$("#mapDiv").append(googleMap);

// Call display functions
bio.display();
work.display();
education.display();
projects.display();
