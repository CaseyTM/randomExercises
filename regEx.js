var creditCardRegEx = /\d{16}/;


function checkCard(creditCardNumber){
 var ccNumString = creditCardNumber.toString();
 if(ccNumString.length ==16){
   if(ccNumString.match(/4\d{15}/)){
     console.log("valid visa card which has 16 digits!")
   }else if(ccNumString.match(/6011\d{12}/)){
     console.log('valid discover card with 16 digits!')
   }else if(ccNumString.match(/5[05]\d{14}/)){
     console.log('valid mastercard with 16 digits starting with 50-55');
   }else{
     console.log("invalid credit card number, please try again")
   }
 }else if(ccNumString.length==15){
   if(ccNumString.match(/3[74]\d{13}/)){
     console.log("valid amex card and it has 15 digits!");
   }else{
     console.log("invalid amex card")
   }
 }else{
   console.log("invalid credit card number, please try again")
 }
 
}  
 
 
checkCard(341515151515151);
checkCard(3415151515151515);

checkCard(4616161616161616);
checkCard(6011161616161616);
checkCard(5011161616161616);
checkCard(55555555);