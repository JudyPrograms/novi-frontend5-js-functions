// Je gaat functies schrijven die we kunnen hergebruiken om sommige email-adressen te checken. Nu zul je gaan merken hoe
// handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object
// er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam
// is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

// Creating variable with test address for executing all new functions
const myMail = "hello@judyprograms.io"

// Declaring function to create domain from email address
function getEmailDomain(mail) {
    return mail.split("@")[1]
}

// Calling function and checking result with test address
console.log(getEmailDomain(myMail))

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi
// domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

// Declaring function to check the type of email address
function typeOfEmail (mail) {
    // First split address at @, then check content after @
    if (mail.split("@")[1] === "novi-education.nl") {
        return "Student"
    }
    else if (mail.split("@")[1] === "novi.nl") {
        return "Medewerker"
    }
    else {
        return "Extern"
    }
}

// Calling function and test if it works for different addresses
console.log(typeOfEmail(myMail))
console.log(typeOfEmail("n.eeken@novi-education.nl"))
console.log(typeOfEmail("t.mellink@novi.nl"))
console.log(typeOfEmail("a.wiersma@outlook.com"))

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

// Declaring function to check if email address has a valid format
function checkEmailValidity(mail) {
    let isValid = true;
    if ((mail.indexOf("@") === -1) ||
        mail.includes(",") ||
        (mail.lastIndexOf(".") === (mail.length-1))) {
        isValid = false
    }
    return isValid;
}

// Calling function to test if it works with test address
console.log(checkEmailValidity(myMail) + `: ${myMail} is a valid email address`)

// I challenged myself to do some more:
// Setting up test that checks expected results of function for a set of given email addresses
const testList = ["n.eeken@novi.nl", "tessmellink@novi.nl", "n.eekenanovi.nl", "n.eeken@novinl.", "tessmellink@novi,nl"]
const expectedResults = [true, true, false, false, false]
const testResults = []
for (const mail of testList) {
    const result = checkEmailValidity(mail)
    testResults.push(result)
}

// Loop through results of executed function and compare with expected results
let asExpected = true
for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] !== expectedResults[i]) {
        asExpected = false
        break
    }
}

// Log if results equal expected results
if (asExpected) {
    console.log("checkEmailValidity function has expected results")
} else {
    console.log("checkEmailValidity function has unexpected results")
}

