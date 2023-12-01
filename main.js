// Example1
while (true) {
    var ageInput = prompt("Please Enter your Age (positive numbers only)");
    if (ageInput === null) {
      break;
    }
    var age = parseInt(ageInput);
    if (isNaN(age) || age <= 0) {
      alert("Invalid input. Please enter a positive number.");
      continue;
    }
    if (age >= 1 && age <= 10) {
      alert ("Your Status is Child") ;
    } 
    else if (age >= 11 && age <= 18) {
      alert ("Your Status is Teenager") ;
    } 
    else if (age >= 19 && age <= 50) {
      alert("Your Status is Grown up")
    }
    else {
      alert("Your Status is Old" )
    }
    }
    // Example2
    var vowelCount = 0;
    var vowels = ['a','e','o','u','i'];
    var input = prompt("Please Enter a String");
    for (var i = 0; i < input.length; i++) {
      var char = input[i].toLowerCase();
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
    window.alert(`Number of Vowels in that String is ${vowelCount}`);
    // Example3
    function convertTo12Hour(time) {
      var hour = time % 12;
      var period = (time >= 12) ? 'PM' : 'AM';
      
      if (hour === 0) {
        hour = 12;
      }
      
      return hour + period;
    }
    
    var input = prompt("Please enter the time in 24-hour format (0-23)");
    var time = parseInt(input);
    
    if (isNaN(time) || time < 0 || time > 23) {
      alert("Invalid input. Please enter a number between 0 and 23.");
    } else {
      var convertedTime = convertTo12Hour(time);
      alert("The Clock time is: " + convertedTime);
    }