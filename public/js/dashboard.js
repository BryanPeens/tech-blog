document.addEventListener('DOMContentLoaded', () => {
  const newPostButton = document.querySelector('#new-post');
  if (newPostButton) {
    newPostButton.addEventListener('click', () => {
      window.location.href = '/create-post';
    });
  } else {
    console.error('New post button not found.');
  }

  document.querySelectorAll('.edit-post').forEach((button) => {
    button.addEventListener('click', (event) => {
      const id = event.target.getAttribute('data-id');
      window.location.href = `/edit-post/${id}`;
    });
  });

  document.querySelectorAll('.delete-post').forEach((button) => {
    button.addEventListener('click', async (event) => {
      const id = event.target.getAttribute('data-id');

      try {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          console.log('Post deleted successfully');
          window.location.reload(); // Reload to reflect the deletion
        } else {
          console.error('Failed to delete post');
        }
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    });
  });
});
