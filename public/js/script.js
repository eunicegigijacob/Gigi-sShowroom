const signupBtn = document.getElementById('signup-btn');
const loginBtn = document.getElementById('login-btn');

signupBtn.onclick = async () => {
  location.assign('/signup');
};

loginBtn.onclick = async () => {
  location.assign('/login');
};
