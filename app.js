  var firebaseConfig = {
    apiKey: "AIzaSyDbqrbtj35I77Vimn1-DaGjvDDBKf8GqTQ",
    authDomain: "creativesiddharth-d7a79.firebaseapp.com",
    projectId: "creativesiddharth-d7a79",
    storageBucket: "creativesiddharth-d7a79.appspot.com",
    messagingSenderId: "21978440756",
    appId: "1:21978440756:web:413cea73df411d8327d661",
  };

  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();

  const db = firestore.collection("formData");

let submitBtn = document.querySelector('.submit')
submitBtn.addEventListener("click",submitForm);

function submitForm(e){
    e.preventDefault()
    let name = document.querySelector('.name').value;
    let email = document.querySelector(".mail").value;
    let msg = document.querySelector('.msg').value;
    // console.log(name,email,msg);
    db.doc().set({
      name: name,
      email: email,
      msg: msg,
    }).then(()=>{
      alert("Thanks for contacting us");
    }).catch((error)=>{
      alert("Failed to complete your request");
    })
}

// Retrieving data from firestore
function retrieveData(){
  db.get()
  .then((querySnapshot)=>{
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
    });
  })
  .catch((error)=>{
    console.log(error);
  })
}

document.onload=retrieveData()
  // if(doc.exists){
  //   console.log(doc.data());
  // }else{
  //   console.log("doc does not exist");
  // }
