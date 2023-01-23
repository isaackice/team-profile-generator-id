const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getHTML() {
        return `<div class="col-sm-6">
        <div class="card h-100">
            <div class="card-body">
                <h2 class="card-title">${this.name}<br>Engineer</h2>
                <ul class="card-text bullets">
                    <li>Employee ID: ${this.id}</li>
                    <li><a href="mailto:${this.email}">Email: ${this.email}</a></li>
                    <li><a href="https://github.com/${this.github}" target="_blank">GitHub: ${this.github}</a></li>
                </ul>
            </div>
        </div>
    </div>`
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
