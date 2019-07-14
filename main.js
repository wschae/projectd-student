// set the provider you want from Web3.providers
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
console.log('using web3 provider');

web3.eth.getAccounts().then((accounts) => {
    web3.eth.defaultAccount = accounts[0];
    console.log("set default account to " + web3.eth.defaultAccount);
});

var StudentABI = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "fname",
                "type": "string"
            },
            {
                "name": "lname",
                "type": "string"
            },
            {
                "name": "dob",
                "type": "string"
            }
        ],
        "name": "setStudent",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
    {
        "constant": true,
        "inputs": [],
        "name": "getStudent",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

var StudentDetails = new web3.eth.Contract(
        StudentABI, 
        '0x3496627e1143299ab18d960a26211a22ffe199d2');
console.log(StudentDetails);

StudentDetails.methods.getStudent().call().then((result, error) => {
    if (!error) {
        $("#instructor").html(
            'Enrolled ' + result[0] + ' ' + result[1] + ' with DOB ' + result[2]);
        console.log(result);
    } else {
        console.log(error);
    }
});

function Update() {
    StudentDetails.methods.setStudent(
        $("#fname").val(), $("#lname").val(), $("#dob").val())
        .send({from: web3.eth.defaultAccount})
        .then((result, error) => {
            if (!error) {
                console.log('request sent');
            }
            else
            {
                console.log(error);
            }
        });
}

