$(document).ready(() => {
    showHome();
})
var content = {
    experience: [
        {
            key: "borndigital",
            name: "Intermediate Software Engineer at Born Digital, Auckland",
            dates: "FEB 2023 – PRESENT",
            projects: [
                {
                    name: "Toyota",
                    details: "Toyota Fleet Portal is a web application that makes it easier for companies to manage and keep an eye on their fleet of company vehicles. While the Fleet Portal is used for company Admins to manage the entire fleet. The Driver App on the other hand is a lightweight app that allows the individual drivers at a company to log services, notify admins of required repairs, schedule WOFs, etc.",
                    responsibility: "I am the development lead on the Toyota Fleet Portal & Toyota Driver App Project. It is my responsibility to estimate, develop and maintain the codebase. Beyond that I have also taken up the responsibility to plan and take charge in production deployments, maintaining clear lines of communication directly with the client as well as taking on devops tasks such as investigating issues on the Kubernetes clusters that Born Digital uses for hosting this project.",
                    technologies: [
                        ".NET Core",
                        "Entity Framework Core",
                        "React 18",
                        "T-SQL",
                        "Azure"
                    ]
                },
                {
                    name: "ChatGPT Research Project",
                    details: "This project was intended to research the feasibility of using ChatGPT to create a chatbot to help out the customers when navigating websites such as property management websites and news agencies as well as using Generative AI to query Databases, Edit the tone of articles, answer questions about current news and many more.",
                    responsibility: "On this project, I was responsible for the backend implementation and frontend development with the help of our Web designer to provide a working POC of the chatbot",
                    technologies: [
                        ".NET Core",
                        "Umbraco 10",
                        "Azure OpenAI"
                    ]
                },
                {
                    name: "Inzone Careers",
                    details: "In this project I aimed to develop a windows desktop application that could be used on touch screen kiosks in buses and libraries. The kiosks are supposed to help young students make the decision of which career paths to explore by providing a library of instructive videos about various jobs. As an extra constraint, the videos had to be available without an internet connection, so streaming the videos was not an option.",
                    responsibility: "On this project, I was the sole developer, responsible for the design and implementation of the desktop application in accordance with loose UI/UX designs. As the sole developer on this project I was responsible on all technical tasks such as production deployments, dev-ops and providing clear communication towards the client",
                    technologies: [
                        ".NET MAUI (.NET Core 6.0)",
                        "Umbraco 13",
                        "SQLite",
                        "T-SQL",
                        "Azure"
                    ]
                },
                {
                    name: "Evolve Education",
                    details: "In this project we provided a CMS-backed suite of websites that are used by various ECE centers part of the Evolve Education Group.",
                    responsibility: "My Contributions to this project was the implementation of various anti-spam measures for the sign up and contact forms on the Evolve websites. I solved their Spam issues by upgrading their reCAPTCHA approach to use reCAPTCHA v3, which while more complex allows more flexibility in terms of fine-tuning the results of the reCAPTCHA.",
                    technologies: [
                        ".NET Core",
                        "Umbraco 8",
                        "T-SQL",
                        "Azure"
                    ]
                }
            ],
            takeaways: ""
        },
        {
            key: "cloudcheck",
            name: "Java Software Engineer at GBG CloudCheck, Auckland",
            dates: "FEB 2022 - FEB 2023",
            projects: [
                {
                    name: "Live Rebuild",
                    details: "Live is a Product developed by CloudCheck that allows a user to authenticate themselves with a driver license or passport. The Product will match submitted photos and identification document with the Department of Internal Affairs (DIA) databases to verify a user. This product needed to get a completely new frontend look.",
                    responsibility: "I was the sole developer on this rebuild. I used the designs provided to me by the UI/UX designer and mimic the design as closely as possible while still communicating with the existing API calls.",
                    technologies: [
                        "JQuery",
                        "Css Animations",
                        "AWS"
                    ]
                },
                {
                    name: "ReadID",
                    details: "The ReadID project was a brand new project where we tried to use the NFC  features of biometric passports to verify someone’s identity.",
                    responsibility: "On this project, I was the sole dev in charge of the fullstack development and implementation of Api communication, webhooka and integrating it in the rest of the Cloudcheck Ecosystem.",
                    technologies: [
                        "Java 11",
                        "Java Servlets",
                        "AWS"
                    ]
                },
                {
                    name: "Loqate Library",
                    details: "The aim of this project was to create a JS library for interacting with the Loqate API. Loqate allows for autocompleting addresses when you type the first few characters of the address. This library could be elegantly used to provide clients with a better user experience when they verify their addresses.",
                    responsibility: "On this project, I was the sole developer, responsible for development and implementation of a JS wrapper for the existing Loqate REST API.",
                    technologies: [
                        "JavaScript"
                    ]
                }
            ],
            takeaways: "test"
        },
        {
            key: "soludtiondynamics",
            name: "Software Engineer at Solution Dynamics Limited, Auckland",
            dates: "MAR 2021 - FEB 2022",
            projects: [
                {
                    name: "Post-on-Demand Rebuild",
                    details: "Post-on-Demand is the main web portal for clients to interact with Solution Dynamics’ products. This project needed a rebuild with more modern frameworks and technologies as it was getting too hard to maintain.",
                    responsibility: "I was hired as one of the fixed-term developers tasked to rebuild the entire ASP.NET frontend and use Angular 10 instead. This project was under a harsh deadline and I did extensive collaboration with not only other devs but testers and UI/UX designers as well. The Frontend had to be pixel-perfect so eye for detail was an important skill I needed to learn.",
                    technologies: [
                        ".NET Core",
                        "ASP.NET",
                        "ANGULAR 10",
                        "AWS"
                    ]
                },
                {
                    name: "HTML Emails",
                    details: "This was a short term project. For Auckland council, we had to send out emails reminding people to register their dogs.",
                    responsibility: "On this project, I was the sole developer. I had to take email designs and write html emails that could be used to send to customers. They too had to be pixel-perfect with the added difficulty that compatibility with older versions of outlook was very challenging.",
                    technologies: [
                        "HTML",
                        "CSS"
                    ]
                }
            ],
            takeaways: ""
        },
        {
            key: "reply",
            name: "Software Development Consultant at Reply, Luxembourg",
            dates: "JUL 2020 - DEC 2020 ",
            projects: [
                {
                    name: "Sentry",
                    details: "Sentry is a web platform that would allow financial sector companies who do outsourcing, to fill in their data into the portal. The Portal would automatically provide the user with the reports and paperwork required to remain compliant in terms of auditing with an upcoming EU regulation change.",
                    responsibility: "I had several responsibilities on this project. Primarily I did the frontend development for the web platform using VueJS and all of its features. As the project grew I also had to train primarily backend devs to help us in the frontend development. Finally I was also in charge of writing automated unit testing as well as end-to-end regression testing.",
                    technologies: [
                        "GO",
                        "VueJS",
                        "GCP",
                        "Firebase"
                    ]
                }
            ],
            takeaways: ""
        }
    ]
}
const showHome = () => {
    content.experience.forEach((experience) => {
        console.log(experience)
        var $para = $('<p></p>');
        $para.append(`<b>${experience.name}</b><br>`);
        $para.append(`${experience.dates}<br>`);
        $para.append(`<i>PROJECTS</i>`);
        var $list = $('<ul></ul>');
        experience.projects.forEach((project) => {
            $list.append(`<li>${project.name}</li>`);
        })
        $para.append($list);
        
        if((experience.takeaways.length) != 0) {
            $para.append(`<i>TAKEAWAYS</i>`);
            $para.append(`<i>${experience.takeaways}</i>`)
        }
       $('#experience-paragraphs').append($para);
    })
}
const showExperience = (experience) => {
    switch (experience) {
        case 'home':
          console.log('Oranges are $0.59 a pound.');
          break;
        case 'borndigital':
        case 'Papayas':
          console.log('Mangoes and papayas are $2.79 a pound.');
          // Expected output: "Mangoes and papayas are $2.79 a pound."
          break;
        default:
          console.log(`Sorry, we are out of ${expr}.`);
    }
}