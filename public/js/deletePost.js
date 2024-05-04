const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      console.log(id);
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete a post');
      }
    }
  };
  

  document
  .querySelector('.del-post-form')
  .addEventListener('click', delButtonHandler);