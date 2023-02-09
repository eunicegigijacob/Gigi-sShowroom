const loginBtn = document.getElementById('login-btn');
const signupForm = document.getElementById('signup-form');
const userName = document.getElementById('username');
const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');

loginBtn.onclick = async () => {
  window.location.href = 'http://localhost:3000/login';
};

signupForm.onsubmit = async (e) => {
  e.preventDefault();
  console.log(userName.value, userEmail.value, userPassword.value);

  const response = await fetch(window.location.href, {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      userName: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    }),
  });
  console.log(await response.json());
};
