
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

function openPostsModal() {
    var creatPostModal = document.getElementById('id05');
    var containerStyle = document.getElementById('block_container')
    creatPostModal.style.display = 'block';
    // containerStyle.style.display = 'none';
    
  };






// Open confirmation modal
function openConfirmationModal() {
  var modal = document.getElementById('confirmation-modal');
  modal.style.display = 'block';
}

// Close confirmation modal
function closeConfirmationModal() {
  var modal = document.getElementById('confirmation-modal');
  modal.style.display = 'none';
}

// Confirm deletion function
function confirmDeletion() {
  var postCard = document.getElementById('postcard');
  postCard.parentNode.removeChild(postCard);

  var modal = document.getElementById('confirmation-modal');
  modal.style.display = 'none';
} 




document.addEventListener("DOMContentLoaded", function() {
  const deleteButtons = document.getElementsByClassName("post-delete");
  const modal = document.getElementById("modal");
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function() {
      const postCard = deleteButtons[i].closest(".post-card");
      modal.style.display = "block";

      yesButton.addEventListener("click", function() {
        postCard.remove();
        rearrangePosts();
        modal.style.display = "none";
      });

      noButton.addEventListener("click", function() {
        modal.style.display = "none";
      });
    });
  }

  function rearrangePosts() {
    const postCards = document.querySelectorAll(".post-card");
    const postsArray = Array.from(postCards);
    postsArray.forEach((post, index) => {
      const rowNumber = Math.floor(index / 2) + 1;
      post.style.order = rowNumber;
    });
  }
});


