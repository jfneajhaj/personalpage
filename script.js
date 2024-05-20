let car = "lambo";
let x = 1;
let y = 2;
let z = x+y;


alert(car)
console.log("this is working")
console.log(car)
console.log(z)
// document.getElementById("test").innerText="hi how are you"


 function headerprofile(){
     document.getElementById("test").innerText="This Is The About Me Information"
 };

 function extrastuff(){
    document.getElementById("extrainfo").innerText="Extra Information About Me:\nNo Information Currently Released."
 };

 function extraitem(){
    document.getElementById("about-info").innerText="<h3>yo</h3>"
  }

  function extraschool(){
    document.getElementById("schoolwork").innerHTML="<h3>yo</h3>"
  }
 function addition_calculator(num1,num2){
let sum= num1+num2
console.log(sum)

 }

 addition_calculator(5,10)
   
 new_array=["Bryce","Chadi"]
 students = [{name:"mark",
            age:11,
            address:{street:"kimberly",housenum:12}},


           {name:"bryce",
            age:14, 
            address:{street:"johnville",housenum:9}},
 
           {name:"robert",
           age:16,
           address:{street:"zumberlie",housenum:4}},
        
        {
            name:"joe",
            age: 17,
            address:{street:"fjjdjadj",housenum:5},
        }]

console.log(students);
console.log(students[0], students[1], students[2]);
console.log(students[0].age);

S_students= JSON.stringify(students)

console.log(S_students)

AOO_student= JSON.parse(S_students) 

console.log(AOO_student[0])


  // fetch('https://jsonplaceholder.typicode.com/photos')
  //     .then(response => response.json())
  //     .then(photos_link => {
      
  //    photos_link.forEach(element => {
  //      console.log(element.url)
  //    });
      
      
  //     });

fetch('https://restcountries.com/v3.1/all')
 .then(response => response.json())
  .then(countries => {

     countries.forEach(element => {
     console.log(element.name.common)

    })
 })

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      console.log(`Full Name Is: ${user.name}`);
      console.log(`Street Address: ${user.address.street}`);
      console.log(`Suite Address: ${user.address.suite}`);
      console.log(`City Address: ${user.address.city}`);
      console.log(`Current ZipCode: ${user.address.zipcode}`);
      console.log(user.address.geo);
    })
  })


