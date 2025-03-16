//Exercise 1 - Determine source of income based on age - if else statement

var age = 10;
if (age >= 65) {
    console.log("You get your income from your pension.");
} else if(age < 65 && age >= 18) {
    console.log("Each month you get a salary.");
} else if(age < 18) {
    console.log("You get an allowance.");
} else {
    console.log("The value of the age variable is not numerical.")
}

//Exercise 2 - Code the days of the week program as a switch statement

var day = "Sunday";

switch (day) {
    case "Monday":
        console.log('Go to uni');
        break;
    case "Tuesday":
        console.log('Go to uni');
        break;
    case 'Wednesday':
        console.log('Read a book');
        break;
    case 'Thursday':
        console.log('Play basketball');
        break;
    case 'Friday':
        console.log('Socialize');
        break;
    case 'Saturday':
        console.log('Chill');
        break;
    case 'Sunday':
        console.log('Have fun');
        break;
    default:
        console.log('There is no such day');
}