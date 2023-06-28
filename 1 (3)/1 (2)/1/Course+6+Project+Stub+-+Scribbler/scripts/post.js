function toggleEditMode() {
    const postTitle = document.querySelector('.post-title');
    const editButton = document.querySelector('.edit-button');
    
    if (postTitle.contentEditable === 'true') {
      // Save changes
      postTitle.contentEditable = 'false';
      editButton.innerHTML = 'Edit <i class="fas fa-edit"></i>';
    } else {
      // Enter edit mode
      postTitle.contentEditable = 'true';
      editButton.innerHTML = 'Save <i class="fas fa-save"></i>';
    }
  }
  let likeCount = 0;

  function toggleLike() {
    const likeButton = document.querySelector('.like-button');
    const likeStatus = document.querySelector('.like-status');
    
    likeCount++;
    
    if (likeCount === 1) {
      likeStatus.textContent = '1 person likes this!';
      likeButton.textContent = 'Liked!';
    } else {
      likeStatus.textContent = likeCount + ' people like this!';
    }
  }
  function addComment() {
    const commentInput = document.querySelector('.comment-input');
    const commentSection = document.querySelector('.all-comments');
    
    const commentText = commentInput.value;
    commentInput.value = '';
    
    const commentItem = document.createElement('div');
    commentItem.classList.add('comment-item');
    commentItem.textContent = commentText;
    
    commentSection.prepend(commentItem);
  }
    