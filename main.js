
const btn = document.getElementById('btn');
btn.addEventListener('click', NextPersone);
 
function NextPersone(){
  const url = "https://randomuser.me/api/";
  fetch(url)
   .then(response =>{
   if(response.ok) 
    return response.json();
   throw new Error("Response was not ok");
     })
   .then(data => {
    newInfo(data)
   });
}

function newInfo(data){
  const persone = data.results[0];
  document.getElementById('name').textContent = persone.name.first + ' ' + persone.name.last;
  document.getElementById('birthday').textContent = persone.dob.age;
  document.getElementById('email').textContent = persone.email;
  document.getElementById('location').textContent = persone.location.street.name;
  document.getElementById('phone').textContent = persone.phone;
  document.getElementById('photo').src = persone.picture.large;
}
