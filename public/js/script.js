const signupBtn = document.getElementById('signup-btn');
const loginBtn = document.getElementById('login-btn');

signupBtn.onclick = async () => {
  window.location.href = 'http://localhost:3000/signup';
};

loginBtn.onclick = async () => {
  window.location.href = 'http://localhost:3000/login';
};
