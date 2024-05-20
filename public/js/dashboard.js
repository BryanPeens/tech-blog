document.querySelectorAll('.delete-post-btn').forEach((button) => {
  button.addEventListener('click', async (event) => {
    const postId = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  });
});

document.querySelectorAll('.edit-post-btn').forEach((button) => {
  button.addEventListener('click', (event) => {
    const postId = event.target.getAttribute('data-id');
    const postTitle = event.target.parentElement.querySelector('h3').innerText;
    const postContent = event.target.parentElement.querySelector('p:nth-of-type(2)').innerText;

    document.querySelector('#post-title').value = postTitle;
    document.querySelector('#post-content').value = postContent;

    document.querySelector('#edit-post-modal').style.display = 'block';

    document.querySelector('#edit-post-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = document.querySelector('#post-title').value;
      const content = document.querySelector('#post-content').value;

      const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    });
  });
});
