// JavaScript to toggle between login and signup forms
document.getElementById("switchToSignup").addEventListener("click", () => {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signupForm").classList.remove("hidden");
});

document.getElementById("switchToLogin").addEventListener("click", () => {
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
});
