document.addEventListener('DOMContentLoaded', function() {
  // 🧑 Get logged-in username (from login.js)
  const username = sessionStorage.getItem('loggedInUser');
  
  if (!username) {
    alert('You must be logged in to access settings.');
    window.location.href = 'login.html';
    return;
  }

  // 🔐 Get form fields
  const currentPassInput = document.getElementById('currentPassword');
  const newPassInput = document.getElementById('newPassword');
  const confirmPassInput = document.getElementById('confirmPassword');
  const form = document.querySelector('form');

  // 📝 Handle form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop real submit

    // 🔍 Get all users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // 👤 Find current user
    const userIndex = users.findIndex(u => u.username === username);
    if (userIndex === -1) {
      alert('User not found. Please log in again.');
      return;
    }

    const currentUser = users[userIndex];

    // ✅ Step 1: Check current password
    if (currentPassInput.value !== currentUser.password) {
      showFeedback('Current password is incorrect.', 'error');
      return;
    }

    // ✅ Step 2: Check new password is not empty
    const newPassword = newPassInput.value.trim();
    if (newPassword === '') {
      showFeedback('New password cannot be empty.', 'error');
      return;
    }

    // ✅ Step 3: Check new password length
    if (newPassword.length < 6) {
      showFeedback('Password must be at least 6 characters.', 'error');
      return;
    }

    // ✅ Step 4: Check confirmation matches
    if (newPassword !== confirmPassInput.value) {
      showFeedback('New passwords do not match!', 'error');
      return;
    }

    // ✅ All good! Update password
    users[userIndex].password = newPassword;
    localStorage.setItem('users', JSON.stringify(users));

    showFeedback('✅ Password updated successfully!', 'success');
    
    // Clear form
    form.reset();
  });

  // 🎯 Helper: Show message above the button
  function showFeedback(message, type) {
    let msgDiv = document.getElementById('feedback');
    if (!msgDiv) {
      msgDiv = document.createElement('div');
      msgDiv.id = 'feedback';
      form.insertBefore(msgDiv, form.lastElementChild);
    }

    msgDiv.className = type === 'success' 
      ? 'alert alert-success alert-dismissible fade show' 
      : 'alert alert-danger alert-dismissible fade show';
    
    msgDiv.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
  }
});