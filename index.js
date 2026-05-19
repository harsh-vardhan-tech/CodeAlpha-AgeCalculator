function calculateAge() {

    let dob = document.getElementById("dob").value;

    if(dob === ""){
        alert("Please select your Date of Birth");
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    document.getElementById("result").innerHTML =
    "Your Age is " + age + " Years";
}