
// Get the modal
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var modal3 = document.getElementById('id03');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openSignUp(){
  var openSignUpPage = document.getElementById('id01');

  // if (document.getElementById('id02').style.display= 'block'){
  //   document.getElementById('id02').style.display = 'none';
  // }
  // if (document.getElementById('id03').style.display= 'block'){
  //   document.getElementById('id03').style.display = 'none'
  // }
  // if (document.getElementById('id04').style.display= 'block'){
  //   document.getElementById('id04').style.display = 'none'
  // }
  // else{

  //   openSignUpPage.style.display='block'; 
  // }

  document.getElementById('id02').style.display = 'none';
  document.getElementById('id03').style.display = 'none'
  document.getElementById('id04').style.display = 'none'

  openSignUpPage.style.display='block'; 

}

function openSignIn(){
  var openSignInPage = document.getElementById('id02');

  // if (document.getElementById('id01').style.display= 'block'){
  //   document.getElementById('id01').style.display= 'none';
  // }
  // if (document.getElementById('id03').style.display= 'block'){
  //   document.getElementById('id03').style.display= 'none';
  // }
  // if (document.getElementById('id04').style.display= 'block'){
  //   document.getElementById('id04').style.display = 'none';
  // }
  // else{
  //   openSignInPage.style.display = 'block';
  // }
    document.getElementById('id01').style.display= 'none';

    document.getElementById('id03').style.display= 'none';

    document.getElementById('id04').style.display = 'none';

  openSignInPage.style.display = 'block';


}

function showSignUpModal() {
  var signUpModal = document.getElementById('id01');
  var signInModal = document.getElementById('id02');
  signUpModal.style.display = 'block';
  signInModal.style.display = 'none';
}



function openModal() {
  var creatPostModal = document.getElementById('id04');
  var containerStyle = document.getElementById('block_container')
  creatPostModal.style.display = 'block';
  // containerStyle.style.display = 'none';
  
};

function closeModal() {
  var modal = document.getElementById('id04');
  var containerStyle = document.getElementById('block_container')
  modal.style.display = 'none';
  // containerStyle.style.display = 'flex';

}




