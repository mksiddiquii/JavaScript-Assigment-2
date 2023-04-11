
function provideStudent(object) {

  let stringify = JSON.stringify(object); // Convert it to String
  localStorage.setItem("mykey", stringify); // Save it to LocalStorage
  };
  
  
  let object={
    name:"kamran",
    age:33,
    city:"karachi"
  }
provideStudent(object);
