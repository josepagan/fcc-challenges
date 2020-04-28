// Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

// Run the tests to see the expected output for each method. The methods
//  that take an argument must accept only one argument and it has to be a
//   string. These methods must be the only available means of interacting
//    with the object.

var Person = function(firstAndLast) {
    let fullName;
    
    this.setFullName = (full) => {fullName = full.split(' ');};
    this.setFirstName = (first) => {fullName[0] = first;};
    this.setLastName = (last) => {fullName[1] = last;};
    
    this.setFullName(firstAndLast);
    
    this.getFullName = () => fullName.join(' ');
    this.getFirstName = () => fullName[0];
    this.getLastName = () => fullName[1];
  };


  
  var bob = new Person('Bob Ross');
  console.log(bob.setFirstName("Juan"));
  console.log(bob.getFullName())
  