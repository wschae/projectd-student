// set the provider you want from Web3.providers
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
console.log('using web3 provider');

web3.eth.defaultAccount = web3.eth.accounts[0];
console.log(web3.eth.defaultAccount);

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

var StudentDetails = web3.eth.contract(StudentABI)
    .at('0x9a219920a59cc225d256efe242e485b09f3f0634');

function refresh() {
    StudentDetails.getStudent((error, result) => {
        if (!error) {
            $("#instructor").html(
                'Enrolled ' + result[0] + ' ' + result[1] + ' with DOB ' + result[2]);
            console.log(result);
        } else {
            console.log(error);
        }
    });
}
refresh();

function Update() {
    StudentDetails.setStudent(
        $("#fname").val(), $("#lname").val(), $("#dob").val());
}

