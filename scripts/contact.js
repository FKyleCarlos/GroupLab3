// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
var submitButton = document.getElementById("submit-button");
var mainID = document.getElementById("contact-page");

var thankyouText = "<p>Thank you for your message!</p>";
submitButton.addEventListener("click", function() {changeText();});

function changeText (){
    mainID.innerHTML = thankyouText;

    var mainPar = document.querySelector(".contact p");
    mainPar.style["font-size"] = "24px";
}
