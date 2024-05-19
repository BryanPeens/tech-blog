// public/js/logout.js
document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.querySelector('#logout');
  if (logoutButton) {
    logoutButton.addEventListener('click', async () => {
      try {
        const response = await fetch('/api/users/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log out');
        }
      } catch (error) {
        console.error('Logout failed:', error);
        alert('Logout failed. Please try again later.');
      }
    });
  } else {
    console.error('Logout button not found.');
  }
});
