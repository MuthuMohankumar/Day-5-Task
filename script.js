const myResume=[{
    name: "Mohan",
    age: 24,
    address: {
        city: "Bangalore",
        state: "Karnataka"
    },
    hobbies: ["Reading", "Gaming", "Coding"],
    education: "Software Engineering",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS", "MongoDB", "ExpressJS", "Python", "Django", "Flask", "C", "C++", "Java", "PHP", "MySQL", "PostgreSQL", "Git", "Linux", "AWS", "Heroku", "Firebase", "Bootstrap", "JQuery", "AJAX", "jQuery UI", "AngularJS", "Angular 2+", "Angular"],
    projects: [{
        pname: "Project 1",
        description: "Project 1 Description",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS", "MongoDB", "ExpressJS", "Python", "Django", "Flask", "C", "C++", "Java", "PHP", "MySQL", "PostgreSQL", "Git", "Linux", "AWS", "Heroku", "Firebase", "Bootstrap", "JQuery", "AJAX", "jQuery UI", "AngularJS", "Angular 2+", "Angular"]
        },
        {
        pname: "Project 1",
        description: "Project 1 Description",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS", "MongoDB", "ExpressJS", "Python", "Django", "Flask", "C", "C++", "Java", "PHP", "MySQL", "PostgreSQL", "Git", "Linux", "AWS", "Heroku", "Firebase", "Bootstrap", "JQuery", "AJAX", "jQuery UI", "AngularJS", "Angular 2+", "Angular"]
        }
    ],
    achivements:["Achievement1", "Achievement2", "Achievement3"],
    certificates:["Certificate1", "Certificate2", "Certificate3"]



}]

myResume.forEach((ele)=>console.log(ele))

for(const ele of myResume){
    console.log(ele);
}

for(const ele in myResume){
    console.log(myResume[ele])
}

