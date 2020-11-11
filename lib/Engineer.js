// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js") 

class Engineer extends Employee {
  constructor (name, email, gitHub){
      super(name, email)
      this.gitHub = gitHub
  }
}

module.exports = Engineer