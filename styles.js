var person = {
    firstName: "John",
    lastName : "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };
  Var maleName=Kwasi,Kwadwo,Kwabena,Kwaku,Yaw,Kofi,Kwame;
  var maleName=Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday;
  var femaleName=Akosua,Adwoa,Abenaa,Akua,Yaa,Afua,Ama;
  var femaleName= Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday;

  // Display data from the object using a getter:
  document.getElementById("demo").innerHTML = person.fullName;
    function validateForm() {
        var x = document.forms["myForm"]["fname"].value;
        if (x == <"") {
          alert("Date invalid");
          return false;
        }
      }
      <input id="date" type="number" min="01" max="31" required></input>
      <input id="month" type="number" min="01" max="12" required></input> 
      <input id="year" type="number" min="01" max="2020" required></input>
      <button onclick="myFunction()">OK</button>
      
      <script>
function myFunction() {
  var inpObj = document.getElementById("date","month","year");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  }
}
</script>
