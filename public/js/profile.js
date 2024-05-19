const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        body: JSON.stringify({ name, needed_funding, description }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Failed to create project. Please try again later.');
    }
  } else {
    alert('Please fill out all fields.');
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Failed to delete project. Please try again later.');
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const newProjectForm = document.querySelector('.new-project-form');
  if (newProjectForm) {
    newProjectForm.addEventListener('submit', newFormHandler);
  } else {
    console.error('New project form not found.');
  }

  const projectList = document.querySelector('.project-list');
  if (projectList) {
    projectList.addEventListener('click', delButtonHandler);
  } else {
    console.error('Project list not found.');
  }
});
