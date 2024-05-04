const editPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    const id = window.location.toString().split('/')[window.location.toString().split('/').length-1];
    const idVal = id.replace('?', '');

    console.log(idVal);
      const response = await fetch(`/api/post/edit/${idVal}`, {
        method: 'PUT',
        body: JSON.stringify({ id, title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update a post');
      }
  };
  
  
  document
    .querySelector('.edit-post-form')
    .addEventListener('submit', editPostHandler);