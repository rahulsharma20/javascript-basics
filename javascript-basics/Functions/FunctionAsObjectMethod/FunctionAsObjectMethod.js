// Function as Object Method

var name = {
    firstName: 'Rahul',
    lastName: 'Sharma',
    fullName: function() {

        return this.firstName + ' ' + this.lastName;
    }
};

try {
    // You cannot define a variable named "name" in the global scope. Refer https://stackoverflow.com/a/10524040/5400741
    document.write('Full name is ' + name.fullName()); // Throws an exception (Uncaught TypeError: name.fullName is not a function)
} catch (err) {
    console.log(err);
}

var myName = {
    firstName: 'Rahul',
    lastName: 'Sharma',
    fullName: function() {

        return this.firstName + ' ' + this.lastName;
    }
};

document.write('Full name is ' + myName.fullName());