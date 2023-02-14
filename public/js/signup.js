const loginBtn = document.getElementById('login-btn');
const signupForm = document.getElementById('signup-form');
const userName = document.getElementById('username');
const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const url = window.location.href;
const url1 = url.split('/signup');
url1.pop();
const url3 = url1.toString();
loginBtn.onclick = async () => {
  window.location.href = `${url3}/login`;
};

signupForm.onsubmit = async (e) => {
  e.preventDefault();
  console.log(userName.value, userEmail.value, userPassword.value);

  const response = await fetch(url, {
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
  const resolved = await response.json();
  console.log(resolved);
  if (resolved) {
    window.location.href = `${url3}/login`;
  }
};
