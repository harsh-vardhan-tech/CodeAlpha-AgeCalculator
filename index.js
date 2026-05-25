function calculateAge(){

  var day =
  parseInt(document.getElementById("day").value);

  var month =
  parseInt(document.getElementById("month").value);

  var year =
  parseInt(document.getElementById("year").value);

  var errorMsg =
  document.getElementById("errorMsg");

  errorMsg.textContent = "";

  if(!day || !month || !year){

    errorMsg.textContent =
    "Please enter valid date";

    return;
  }

  var today = new Date();

  var birthDate =
  new Date(year, month - 1, day);

  if(birthDate > today){

    errorMsg.textContent =
    "Future date not allowed";

    return;
  }

  var years =
  today.getFullYear() -
  birthDate.getFullYear();

  var months =
  today.getMonth() -
  birthDate.getMonth();

  var days =
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

  document.getElementById("ageYears")
  .textContent = years;

  document.getElementById("ageMonths")
  .textContent = months;

  document.getElementById("ageDays")
  .textContent = days;

  document.getElementById("resultBox")
  .style.display = "block";
}
