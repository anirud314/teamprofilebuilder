/*This class generates the html output using the data collected from inquirer in index.js, should send file to dist folder.*/
function renderManager(manager) { // Function block that generates HTML for a manager
    return `
    <div class= "card profile">
        <div class= "card-header">
            <h2 class= "card-title">${manager.getEName()}</h2>
            <h3 class= "card-title"><i class= "fas fa-mug-hot mr-2"></i>${manager.getEType()}</h3>
        </div>
        <div class="profile-details">
            <ul class= "bio">
            <li class="bio-item">ID: ${manager.getEID()}</li>
            <li class="bio-item">Email: <a href="mailto:${manager.getEEmail()}">${manager.getEEmail()}</a></li>
            <li class="bio-item">Office number: ${manager.getOnumber()}</li>
        </ul>
        </div>
    </div>
`;   
};

function renderEngineer(engineer) { // Function block that generates HTML for Engineer
    return `
    <div class="card profile">
        <div class="card-header">
            <h2 class="card-title">${engineer.getEName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getEType()}</h3>
        </div>
        <div class="profile-details">
            <ul class="bio">
                <li class="bio-item">ID: ${engineer.getEID()}</li>
                <li class="bio-item">Email: <a href="mailto:${engineer.getEEmail()}">${engineer.getEEmail()}</a></li>
                <li class="bio-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
`;
};

function renderIntern(intern) { // Function block that generates HTML for Intern
    return `
    <div class="card profile">
        <div class="card-header">
            <h2 class="card-title">${intern.getEName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getEType()}</h3>
        </div>
        <div class="profile-details">
            <ul class="bio">
                <li class="bio-item">ID: ${intern.getEID()}</li>
                <li class="bio-item">Email: <a href="mailto:${intern.getEEmail()}">${intern.getEEmail()}</a></li>
                <li class="bio-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
`;
};

function renderTeam(team) { // Function is used to render correct html
    const html = []; // create an empty array to hold html
    html.push(team // filters for manager in team and creates a new array of managers using map
        .filter(employee => employee.getEType() === "Manager")
        .map(manager => renderManager(manager)) // calls renderManager function to create html block and that is pushed into html array
    );// This same logic is repeated for engineer and intern
    html.push(team
        .filter(employee => employee.getEType() === "Engineer")
        .map(engineer => renderEngineer(engineer))
        .join("")// join is used to join the html together
    );
    html.push(team
        .filter(employee => employee.getEType() === "Intern")
        .map(intern => renderIntern(intern))
        .join("")
    );
    return html.join(""); // returns the html and joins it
}

function generateHtml(team) { // boilerplate html code  calls renderTeam(team)in the body
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>My Team profies</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </head>
        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading">
                        <h1 class="text-center">My Team</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                        ${renderTeam(team)}
                    </div>
                </div>
            </div>
        </body>
    </html>
`;
};

module.exports = generateHtml;
