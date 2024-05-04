const newFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment-content').value.trim();
    const post_id = document.querySelector('#post-comment').getAttribute('data-id');

    console.log(post_id);
  
    if (content) {
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create a comment');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);