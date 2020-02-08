
const inquirer = require("inquirer");
const test = require("test");
const fs = require("fs");
// const generateHTML = require("./generateHTML")
const util = require("util");
// const employee = require ("./lib/employee.js");
// const engineer = require ("./lib/engineer.js");
// const intern = require ("./lib/intern.js");
// const manager = require ("./lib/manager.js");

const jest = require("jest");
// const generateHTML = require("./generateHTML")
//writeFile will create html page
const writeFileAsync = util.promisify(fs.writeFile);

inquirer
//User prompt in the terminal
function promptUser(userChoice) {
    return inquirer.prompt([{

        type: "input",
        name: "nameManager",
        message: "Enter name of Manager: "
    },


    //     {
    //     type: "input",
    //     message: "What is your name?",
    //     name: "name",

    // },
    {
        type: "input",
        message: "What is your ID number?",
        name: "id",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",

    },
    // .then (userChoice => {
    //     if (userChoice === "manager") { 
    //         addManager ()
    //     } 
    // }),

    {
        type: "input",
        message: "What is your office number?",
        name: "office",
    },
    {
        type: "input",
        name: "nameMan",
        message: "Enter name of second Manager: "
    },


    //     {
    //     type: "input",
    //     message: "What is your name?",
    //     name: "name",

    // },
    {
        type: "input",
        message: "What is your ID number?",
        name: "manid",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "manemail",
    },

    {
        type: "input",
        message: "What is your office number?",
        name: "manoffice",
    },

    {
        type: "input",
        name: "nameEngineer",
        message: "Enter name of Engineer: "
    },
    {
        type: "input",
        message: "What is your ID number?",
        name: "enid",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "enemail",
    },

    {
        type: "input",
        message: "What is your github username?",
        name: "enusername",
    },
    {
        type: "input",
        name: "nameEngineer1",
        message: "Enter name of the 2nd Engineer: "
    },
    {
        type: "input",
        message: "What is your ID number?",
        name: "id1",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email1",
    },

    {
        type: "input",
        message: "What is your github username?",
        name: "username1",
    },
    {
        type: "input",
        name: "nameEngineer2",
        message: "Enter name of the 3rd Engineer: "
    },
    {
        type: "input",
        message: "What is your ID number?",
        name: "id2",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email2",
    },

    {
        type: "input",
        message: "What is your github username?",
        name: "username2",
    },
    {
        type: "input",
        name: "nameEngineer3",
        message: "Enter name of the 4th Engineer: "
    },
    {
        type: "input",
        message: "What is your ID number?",
        name: "id3",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email3",
    },

    {
        type: "input",
        message: "What is your github username?",
        name: "username3",
    },
    {
        type: "input",
        name: "nameIntern",
        message: "Enter name of Intern: "
    },
    {
        type: "input",
        message: "What is your ID number?",
        name: "id4",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email4",
    },

    {
        type: "input",
        message: "What is your alma mater?",
        name: "school",
    },
    {
        type: "input",
        name: "nameIntern2",
        message: "Enter name of the 2nd Intern: "
    },
    {
        type: "input",
        message: "What is your ID number?",
        name: "id5",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email5",
    },

    {
        type: "input",
        message: "What is your alma mater?",
        name: "school2",
    },
    {
        type: "input",
        name: "nameIntern3",
        message: "Enter name of the 3rd Intern: "
    },
    {
        type: "input",
        message: "What is your ID number?",
        name: "id6",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email6",
    },

    {
        type: "input",
        message: "What is your alma mater?",
        name: "school3",
    },



    ]);

}


// promptUser()
// .then(function ({ name, id, email, position, office, username, school }) {
// const team = `https://dkb715.github.io/summary4/`
// const userChoice = require(userChoice)

// .get(team).then(function (res) {
//             //this will console log the users responses
//             console.log(res);
//             data = {
//                 position: res.data.name,
//                 id: res.data.id,
//                 email: res.data.email,
//                 position: res.data.position,
//                 office: res.data.office,
//                 username: res.data.username,
//                 school: res.data.school
//             }

// });
// });
async function init() {
    console.log("hi")
    try {
        const answers = await promptUser();

        const html = generateHTML(answers);
        //writeFile will creat html page with the answers
        await writeFileAsync("index.html", html);

        console.log("Successfully wrote to index.html");
    } catch (err) {
        console.log(err);
    }
}

init();


function generateHTML(answers) {
    console.log(answers)
    return `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <title>Employee Generator</title>
            <style>
                body {
                    text-align: center;
                    padding: 10px;
                }
        
                .column {
                    display: grid;
                    grid-template-columns: auto;
                    background-color: lightgray;
                    border: solid bisque;
                    float: right;
                    width: 100%;
                }
        
                .navText {
                    text-align: center;
        
                }
        
        
                .navbar-brand {
                    text-align: center;
                    height: 50px;
                    color: darksalmon;
                }
        
                .navbar.navbar-light {
                    border: solid bisque;
                    color: darksalmon;
                    text-align: center;
                    height: 150px;
                }
        
                #managers {
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    position: relative;
                    padding: 10px;
                    padding-left: 275px;
        
                }
        
                #employees {
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    position: relative;
                    padding: 10px;
                    padding-left: 100px;
                }
        
                #interns {
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    position: relative;
                    padding: 10px;
                    padding-left: 250px;
        
                }
        
                .a {
                    text-align: left;
                }
        
                img {
                    max-width: 15%;
                    max-height: 15%;
                    text-align: left;
                }
        
                .card-header {
                    text-align: left;
                }
            </style>
        </head>
        
        <body>
            <div class="container-fluid">
                <div class="title">
                    <nav class="navbar navbar-light" style="background-color: darksalmon;">
                        <div class="mx-auto" style="width: 250px; color: floralwhite;">
                            <heading class="navbar-brand mb-0" style="color: floralwhite;">My Team</heading>
                        </div>
                    </nav>
                </div>
                <div class="column">
                    <div class="row" id="managers">
                        <div class="col-lg-6">
                            <div class="card text-white bg-success mb-3" style="max-width: 24rem;">
                                <div class="card-header">
        
                                    <h5 class="card-title">${answers.nameManager}</h5>
                                    <p>
                                        <img src="https://img.favpng.com/20/0/21/manager-icon-png-favpng-ddESenWt4SY6Yi1gpQDS2g23W.jpg"
                                            alt="logo">
                                        Manager</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">
                                        <ul class="a">
                                            <p>ID:${answers.id}</p>
                                            <p>Email:${answers.email}</p>
                                            <p>Office #:${answers.office}</p>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card text-white bg-success mb-3" style="max-width: 24rem;">
                                <div class="card-header">
        
                                    <h5 class="card-title">${answers.nameMan}</h5>
                                    <p> <img src="https://img.favpng.com/20/0/21/manager-icon-png-favpng-ddESenWt4SY6Yi1gpQDS2g23W.jpg"
                                            alt="logo">
                                        Manager</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">
                                        <ul class="a">
                                            <p>ID:${answers.manid}</p>
                                            <p>Email:${answers.manemail}</p>
                                            <p>Office #:${answers.manoffice}</p>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="employees">
                        <div class="col-md-3">
                            <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                                <div class="card-header">
        
                                    <h5 class="card-title">${answers.nameEngineer}</h5>
                                    <p> <img src="https://cdn4.iconfinder.com/data/icons/data-management-1-2/50/20-512.png"
                                            alt="logo">
                                        Engineer</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">
                                        <ul class="a">
                                            <p>ID:${answers.enid}</p>
                                            <p>Email:${answers.enemail}</p>
                                            <p>Github:${answers.enusername}</p>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
        
                            <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                                <div class="card-header">
                                    <h5 class="card-title">${answers.nameEngineer1}</h5>
        
                                    <p> <img src="https://cdn4.iconfinder.com/data/icons/data-management-1-2/50/20-512.png"
                                            alt="logo">
                                        Engineer</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">
                                        <ul class="a">
                                            <p>ID:${answers.id1}</p>
                                            <p>Email:${answers.email1}</p>
                                            <p>Github:${answers.username1}</p>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
        
                            <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                                <div class="card-header">
                                    <h5 class="card-title">${answers.nameEngineer2}</h5>
                                    <p> <img src="https://cdn4.iconfinder.com/data/icons/data-management-1-2/50/20-512.png"
                                            alt="logo">
                                        Engineer</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">
                                        <ul class="a">
                                            <p>ID:${answers.id2}</p>
                                            <p>Email:${answers.email2}</p>
                                            <p>Github:${answers.username2}</p>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
        
                            <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                                <div class="card-header">
                                    <h5 class="card-title">${answers.nameEngineer3}</h5>
                                    <p> <img src="https://cdn4.iconfinder.com/data/icons/data-management-1-2/50/20-512.png"
                                            alt="logo">
                                        Engineer</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">
                                        <ul class="a">
                                            <p>ID:${answers.id3}</p>
                                            <p>Email:${answers.email3}</p>
                                            <p>Github:${answers.username3}</p>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
        
                    </div>
                    <div class="row" id="interns">
                        <div class="col-sm-4">
                            <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                                <div class="card-header">
                                    <h5 class="card-title">${answers.nameIntern}</h5>
                                    <p> <img src="studentlogo.png" alt="logo">
                                        Intern</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">
                                        <ul class="a">
                                            <p>ID:${answers.id4}</p>
                                            <p>Email:${answers.email4}</p>
                                            <p>School:${answers.school}</p>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
        
                            <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                                <div class="card-header">
                                    <h5 class="card-title">${answers.nameIntern2}</h5>
                                    <p> <img src="studentlogo.png" alt="logo">
                                        Intern</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">
                                        <ul class="a">
                                            <p>ID:${answers.id5}</p>
                                            <p>Email:${answers.email5}</p>
                                            <p>School:${answers.school2}</p>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
        
                            <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                                <div class="card-header">
                                    <h5 class="card-title">${answers.nameIntern3}</h5>
                                    <p> <img src="studentlogo.png" alt="logo">
                                        Intern</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">
                                        <ul class="a">
                                            <p>ID:${answers.id6}</p>
                                            <p>Email:${answers.email6}</p>
                                            <p>School:${answers.school3}</p>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </body>
        
        </html>`;
}


module.exports = generateHTML