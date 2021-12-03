// 1. WHEN I open the planner
//      THEN the current day is displayed at the top of the calendar
// alias for luxon
const DateTime = luxon.DateTime;


// reference selector to currentDay container 
var currentdayEl = document.querySelector("#currentDay");


// variable for getting the date based on specified format using luxon
var date = DateTime.now().toFormat('ffff');
//console.log(date);
//create element for date 
var dateEl = document.createElement("span");
// set text of element to the date
dateEl.textContent = date;
// attaches the date element to the currentDay container
currentdayEl.appendChild(dateEl);





// 2. WHEN I scroll down
//      THEN I am presented with time blocks for standard business hours

// 3. WHEN I view the time blocks for that day
//      THEN each time block is color-coded to indicate whether it is in the past, present, or future

// 4. WHEN I click into a time block
//      THEN I can enter an event

// 5. WHEN I click the save button for that time block
//      THEN the text for that event is saved in local storage

// 6. WHEN I refresh the page
//      THEN the saved events persist