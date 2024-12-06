/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 0;
var calculatedCost = document.getElementById("calculated-cost");
var numberOfDaysSelected = 0;
var clearButton = document.getElementById("clear-button");
var halfButton = document.getElementById("half");
var fullButton = document.getElementById("full");
var mondayButton = document.getElementById("monday");
var tuesdayButton = document.getElementById("tuesday");
var wednesdayButton = document.getElementById("wednesday");
var thursdayButton = document.getElementById("thursday");
var fridayButton = document.getElementById("friday");
var daysSelected = [];
halfButton.classList.remove("clicked");
fullButton.classList.remove("clicked");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

mondayButton.addEventListener("click", function() {dayClick(mondayButton);});
tuesdayButton.addEventListener("click", function() {dayClick(tuesdayButton);});
wednesdayButton.addEventListener("click", function() {dayClick(wednesdayButton);});
thursdayButton.addEventListener("click", function() {dayClick(thursdayButton);});
fridayButton.addEventListener("click", function() {dayClick(fridayButton);});

function dayClick(dayButton){
    var boolDayExist = false;
    daysSelected.forEach(function(item){
        if (item == dayButton){
            boolDayExist = true;
            return;
        }
    });
    if (boolDayExist == false){
        daysSelected.push(dayButton);
        numberOfDaysSelected = numberOfDaysSelected + 1;
        dayButton.classList.add("clicked");
        recalculate();
        }
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener("click", function(){clearDays();});

function clearDays() {

    daysSelected.forEach(function(item) {
        item.classList.remove("clicked");
    });
    daysSelected = [];
    numberOfDaysSelected = 0;
    recalculate();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener("click", function(){clickHalf();});

function clickHalf(){
    costPerDay = 20;

    // calculatedCost.textContent = costPerDay;

    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");

    recalculate();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener("click", function(){clickFull();});

function clickFull (){
    costPerDay = 35;

    // calculatedCost.textContent = costPerDay;

    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");

    recalculate();
}


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate(){
    calculatedCost = numberOfDaysSelected * costPerDay;
    document.getElementById("calculated-cost").innerHTML = calculatedCost;
}