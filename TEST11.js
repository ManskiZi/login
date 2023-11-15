// Get the reference to the <p> element in the HTML document
const paragraph = document.querySelector("p");

// Create a user object to store user information and display it
const user = {
    firstName: "",     // User's first name
    lastName: "",      // User's last name
    userName: "",      // User's username
    password: "",      // User's password
    displayInfo: function () {
        // Retrieve user information from input fields in the HTML document
        this.firstName = document.getElementById("firstName").value;
        this.lastName = document.getElementById("lastName").value;
        this.userName = document.getElementById("username").value;
        this.password = document.getElementById("password").value;

        if (!this.firstName || !this.lastName || !this.userName || !this.password) {
            paragraph.innerHTML = "Please fill in all fields.";
            return;
        }

        // Display user information in the <p> element
        paragraph.innerHTML = `${this.firstName} ${this.lastName} username is 
        ${this.userName}, and your password is ${this.password}`;
    }
};
