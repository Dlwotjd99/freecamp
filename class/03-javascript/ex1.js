const email = "codecamp@gamil.com";

let userMail = email.split("@")[0];

let company = email.split("@")[1];

let maskingMail = [];

for(i=0; i<4; i++){
    maskingMail.push(userMail[i]);
}

maskingMail.push('*');
maskingMail.push('*');
maskingMail.push('*');
maskingMail.push('*');

maskingMail.join("")+"@"+company;

let result = maskingMail.join("")+"@"+company;

console.log(result); 