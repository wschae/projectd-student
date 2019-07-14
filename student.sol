pragma solidity >=0.4.0 <0.7.0;

contract Student {
   string firstName;
   string lastName;
   string dateOfBirth;
   
    function setStudent(string memory fname, string memory lname, string memory dob) public {
        firstName = fname;
        lastName = lname;
        dateOfBirth = dob;
    }
   
    function getStudent() 
        public view returns (string memory, string memory, string memory) {
        return (firstName, lastName, dateOfBirth);
    }
}
