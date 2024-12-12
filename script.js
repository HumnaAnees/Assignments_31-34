// Question_01

function displayDateTime() {
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString(); 
    const time = currentDate.toLocaleTimeString(); 
    document.getElementById("date-time").innerHTML = date + " " + time;
}
displayDateTime();
setInterval(displayDateTime, 1000);

// Question_02

function getCurrentMonth() {
    const currentDate = new Date();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentMonth = currentDate.getMonth(); 
    alert("Current Month: " + monthNames[currentMonth]);
}
getCurrentMonth();

// Question_03

function getCurrentDay() {
    const currentDate = new Date();
    const dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    const currentDay = currentDate.getDay(); 
    const shortDay = dayNames[currentDay].slice(0, 3); 
    alert("Current Day: " + shortDay);
}
getCurrentDay();


// Question_04

function checkWeekend() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    if (currentDay === 0 || currentDay === 6) {  
        alert("It's Fun day!");
    } else {
        alert("It's not the weekend yet!");
    }
}
checkWeekend();



// Question_05

function checkDayOfMonth() {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    if (currentDay < 16) {
        alert("First fifteen days of the month");
    } else {
        alert("Last days of the month");
    }
}
checkDayOfMonth();


// Question_06

let time = new Date();
        let millisecondsSinceEpoch = time.getTime();
        let minutesSinceEpoch = millisecondsSinceEpoch / 60000;
        alert("Minutes since January 1, 1970: " + minutesSinceEpoch);


// Question_07

function checkAMorPM() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours(); 
    if (currentHour < 12) {
        alert("It's AM");
    } else {
        alert("It's PM");
    }
}

// Question_08

        let laterDate = new Date(2020, 11, 31); // Month is 0-indexed, so 11 represents December
        alert("The last day of 2020 is: " + laterDate.toDateString());


// Question_09

function calculateDaysSinceRamadan() {
    const ramadanStart = new Date(2015, 5, 18); // June is month 5 (0-indexed)
    const currentDate = new Date();
    const timeDifference = currentDate - ramadanStart;
    const daysSinceRamadan = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    alert("Days since 1st Ramadan (June 18, 2015): " + daysSinceRamadan);
}
calculateDaysSinceRamadan();

// Question_10

function calculateElapsedSeconds() {
    const startOf2015 = new Date(2015, 0, 1); 
        const currentDate = new Date();
        const timeDifference = currentDate - startOf2015;
        const secondsElapsed = Math.floor(timeDifference / 1000);
        document.getElementById("elapsed-seconds").textContent = "Seconds since January 1, 2015: " + secondsElapsed;
}calculateElapsedSeconds();

// Question_11

function updateDateByOneHour() {
    let currentDate = new Date();
        const currentHours = currentDate.getHours();
        currentDate.setHours(currentHours + 1);
        document.getElementById("updated-date").textContent = "Updated Date and Time: " + currentDate;
}
updateDateByOneHour();

// Question_12

function showDate100YearsBack() {
    let currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 100);
    alert("The date 100 years back is: " + currentDate.toDateString());
}
showDate100YearsBack();

// Question_13

function calculateBirthYear() {
    const age = prompt("Please enter your age:");
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    document.getElementById("birth-year").textContent = "Your birth year is: " + birthYear;
}
calculateBirthYear();

// Question_14

function generateBill() {
    const customerName = "John Doe"; 
    const currentMonth = new Date().toLocaleString('default', { month: 'long' }); 
    const unitsConsumed = 150; 
    const unitRate = 14.5; 
    const totalAmount = unitsConsumed * unitRate;
    const roundedAmount = totalAmount.toFixed(2);
    document.getElementById("customer-name").textContent = customerName;
    document.getElementById("current-month").textContent = currentMonth;
    document.getElementById("units-consumed").textContent = unitsConsumed;
    document.getElementById("unit-rate").textContent = unitRate;
    document.getElementById("total-amount").textContent = roundedAmount;
}
generateBill();
