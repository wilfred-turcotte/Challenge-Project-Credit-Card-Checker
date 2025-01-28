// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:

function validateCred(array) {
  let processedCard = [];
  let cardSum = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    let n = array[i];
    if ((array.length - 1 - i) % 2 === 1) {
      n *= 2;
    }
    if (n > 9) {
      n -= 9;
    }
    processedCard.push(n);
  }
  for (let i = 0; i <= processedCard.length - 1; i++) {
    cardSum += processedCard[i];
  }
  if (cardSum % 10 === 0) {
    // console.log(true);
    console.log("The card number: "+processedCard+" is valid.");
    return true;
  } else {
    // console.log(false);
    console.log("The card number: "+processedCard+" is invalid.");
    return false;
  }
}
// validateCred() function call
validateCred(valid1);

// 4
let invalidCards = [];
function findInvalidCards(arrayNest) {
  console.log("Function called: findInvalidCards ...");
  for (let i = 0; i < arrayNest.length; i++) {
    let cardNum = arrayNest[i];
    if (validateCred(cardNum) === true) {
    } else {
      invalidCards.push(arrayNest[i]);
    }
  }
  // console.log(invalidCards);
}
// findInvalidCards() function call
findInvalidCards(batch);

// 5
let acceptedCompanies = [
  { digit: 3, company: "Amex (American Express)" },
  { digit: 4, company: "Visa" },
  { digit: 5, company: "Mastercard" },
  { digit: 6, company: "Discover" },
];
let mailedCompanies = [];
function idInvalidCardCompanies(array) {
  let companydigit = 0;

  for (i = 0; i <= invalidCards.length - 1; i++) {
    // console.log(invalidCards[i]);
    companydigit = invalidCards[i][0];
    // console.log(companydigit);
    // console.log(acceptedCompanies[0].digit)
    for (a = 0; a <= acceptedCompanies.length - 1; a++) {
      if (
        companydigit === acceptedCompanies[a].digit &&
        mailedCompanies.indexOf(acceptedCompanies[a].company) === -1
      ) {
        mailedCompanies.push(acceptedCompanies[a].company);
      }
      let index = acceptedCompanies.findIndex((c) => c.digit === companydigit);
      // console.log(index);
      if(index === -1){
        console.log('Company not found')
      }
    }
  }
  console.log("Invalid card notifications mailed to the following companies: "+mailedCompanies);
}
idInvalidCardCompanies(invalidCards);
