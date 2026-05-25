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
    "Please enter valid date of birth";

    return;
  }

  let today = new Date();

  let birthDate =
  new Date(year, month - 1, day);

  if(birthDate > today){

    error.innerHTML =
    "Future date is not allowed";

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
}
