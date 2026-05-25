function calculateAge(){

  let day =
  parseInt(document.getElementById("day").value);

  let month =
  parseInt(document.getElementById("month").value);

  let year =
  parseInt(document.getElementById("year").value);

  let error =
  document.getElementById("error");

  error.innerHTML = "";

  if(!day || !month || !year){

    error.innerHTML =
    "Please enter valid date";

    return;
  }

  if(day > 31 || month > 12){

    error.innerHTML =
    "Invalid date entered";

    return;
  }

  let today = new Date();

  let birthDate =
  new Date(year, month - 1, day);

  if(birthDate > today){

    error.innerHTML =
    "Future date not allowed";

    return;
  }

  let years =
  today.getFullYear() -
  birthDate.getFullYear();

  let months =
  today.getMonth() -
  birthDate.getMonth();

  let days =
  today.getDate() -
  birthDate.getDate();

  if(days < 0){

    months--;

    days += 30;
  }

  if(months < 0){

    years--;

    months += 12;
  }

  document.getElementById("years")
  .innerHTML = years;

  document.getElementById("months")
  .innerHTML = months;

  document.getElementById("days")
  .innerHTML = days;

  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  document.getElementById("weekday")
  .innerHTML =
  "Born on " +
  weekdays[birthDate.getDay()];

  let nextBirthday =
  new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  if(nextBirthday < today){

    nextBirthday.setFullYear(
    today.getFullYear() + 1);
  }

  let diffTime =
  nextBirthday - today;

  let daysLeft =
  Math.ceil(
  diffTime / (1000 * 60 * 60 * 24)
  );

  document.getElementById("birthday")
  .innerHTML =
  "Next Birthday in " +
  daysLeft + " days";
}

function resetFields(){

  document.getElementById("day").value = "";

  document.getElementById("month").value = "";

  document.getElementById("year").value = "";

  document.getElementById("years").innerHTML = "0";

  document.getElementById("months").innerHTML = "0";

  document.getElementById("days").innerHTML = "0";

  document.getElementById("birthday").innerHTML = "";

  document.getElementById("weekday").innerHTML = "";

  document.getElementById("error").innerHTML = "";
}
