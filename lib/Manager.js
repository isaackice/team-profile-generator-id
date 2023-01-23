const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email)
        this.number = number;
    }

    getHTML() {
        return `<div class="col-sm-6">
        <div class="card h-100">
            <div class="card-body">
                <h2 class="card-title">${this.name}<br>Manager</h2>
                <ul class="card-text bullets">
                    <li>Employee ID: ${this.id}</li>
                    <li><a href="mailto:${this.email}">Email: ${this.email}</a></li>
                    <li>Office Number: ${this.number}</li>
                </ul>
            </div>
        </div>
    </div>`
    }
    getNumber() {
        return this.number;
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;
