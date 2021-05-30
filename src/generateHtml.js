/*This class generates the html output using the data collected from inquirer in index.js, should send file to dist folder.*/
function renderManager(manager) {
    return `
    <div class= "card profile">
        <div class= "card-header">
            <h2 class= "card-title">${manager.getEName()}</h2>
            <h3 class= "card-title"><i class= "fas fa-mug-hot mr-2"></i>${manager.getEType()}</h3>
        </div>
        <div class="profile-details">
            <ul class= "list-group">
            <li class="list-group-item">ID: ${manager.getEID()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEEmail()}">${manager.getEEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOnumber()}</li>
        </ul>
        </div>
    </div>
`;   
};

function renderEngineer(engineer) {
    return `
    <div class="card profile">
        <div class="card-header">
            <h2 class="card-title">${engineer.getEName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getEType()}</h3>
        </div>
        <div class="profile-details">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getEID()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEEmail()}">${engineer.getEEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
`;
};

function renderIntern(intern) {
    return `
    <div class="card profile">
        <div class="card-header">
            <h2 class="card-title">${intern.getEName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getEType()}</h3>
        </div>
        <div class="profile-details">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getEID()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEEmail()}">${intern.getEEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
`;
};

function renderTeam(team) {
    const html = [];
    html.push(team
        .filter(employee => employee.getEType() === "Manager")
        .map(manager => renderManager(manager))
    );
    html.push(team
        .filter(employee => employee.getEType() === "Engineer")
        .map(engineer => renderEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getEType() === "Intern")
        .map(intern => renderIntern(intern))
        .join("")
    );
    return html.join("");
}

function generateHtml(team) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My Team</title>
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
