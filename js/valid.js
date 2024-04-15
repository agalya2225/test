function printError(elemId, hintMsg) 
{ 
document.getElementById(elemId).innerHTML = hintMsg; 
} // Defining a function to validate form 
function validateForm() 
{ // Retrieving the values of form elements 
let name = document.contactForm.name.value; 
let email = document.contactForm.email.value; 
let mobile = document.contactForm.mobile.value; 
let country = document.contactForm.country.value; 
let gender = document.contactForm.gender.value; 
let password=document.contactForm.password.value
let hobbies = []; 
let checkboxes = document.getElementsByName("hobbies[]"); 
for(let i=0; i < checkboxes.length; i++)
 { 
if(checkboxes[i].checked) 
{
// Populate hobbies array with selected values
 hobbies.push(checkboxes[i].value);
} 
        } 
// Defining error variables with a default value
 let nameErr = true, emailErr = true, mobileErr = true,countryErr =true, genderErr = true, passwordErr =true; 
// Validate name 
if(name == "") 
{ 
printError("nameErr", "Please enter your name"); 
} 
else
 { 
let regex = /^[/w]+$/; 
if(regex.test(name) === false) 
{ 
printError("nameErr", "Please enter a valid name"); 
} 
else
 { 
printError("nameErr", ""); 
nameErr = false; 
} 
} 
// Validate email address 
if(email == "") 
{ 
printError("emailErr", "Please enter your email address"); 
} 
else { 
// Regular expression for basic email validation 
let regex = /^\S+@\S+\.\S+$/; 
if(regex.test(email) === false) 
{ 
printError("emailErr", "Please enter a valid email address"); 
} 
else
{ 
printError("emailErr", ""); 
emailErr = false; 
} 
} 
// validate password
if (password =="")
{
printError("passwordErr" ,"please enter your password")
}
else 
{ 
let regex = /^[1-9a-zA-Z]\d{9}$/; 
if(regex.test(mobile) === false) 
{ 
printError("passwordErr", "Please enter a valid 10 digit mobile number"); 
} 
else{ printError("passwordErr", ""); 
passwordErr = false; 
} 
} 
// else if  (/^[a-z]$/.test(password)==false){
// printError("passworsErr","please enter small case")
// }
// else if(/^[A-Z]$/.test(password)==false){
// printError("passwordErr" ,"please enter capital letter")
// }
// else if(/^[0-9]&/.test.(password)== false){
// printError("passwordErr","please enter number")
// }
// else if(/^[$#@!%&*()_+/.]$/.test(password==false)){
// printError("passwordErr","please enter one special case")
// }
// else{
// printError("passwordErr","");
// passwordErr=false;
// }
// }
// Validate mobile number 
if(mobile == "") 
{ 
printError("mobileErr", "Please enter your mobile number");
 } 
else 
{ 
let regex = /^[1-9]\d{9}$/; 
if(regex.test(mobile) === false) 
{ 
printError("mobileErr", "Please enter a valid 10 digit mobile number"); 
} 
else{ printError("mobileErr", ""); 
mobileErr = false; 
} 
} 
// Validate country 
if(country == "Select") 
{ 
printError("countryErr", "Please select your country"); 
} 
else { 
printError("countryErr", ""); 
countryErr = false; 
} 
// Validate gender 
if(gender == "") 
{ 
printError("genderErr", "Please select your gender");
 } 
else 
{ 
printError("genderErr", ""); 
genderErr = false; 
} 
// Prevent the form from being submitted if there are any errors
 if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) 
{ 
return false; 
} 
else { 
// Creating a string from input data for preview 
let dataPreview = "You've entered the following details: \n" + "Full Name: " + name + "\n" + "Email Address: " + email + "\n" + "Mobile Number: " + mobile + "\n" + "Country: " + country + "\n" + "Gender: " + gender + "\n"; 
if(hobbies.length) 
{ 
dataPreview += "Hobbies: " + hobbies.join(", "); 
} 
// Display input data in a dialog box before submitting the form alert(dataPreview); 
} 
};