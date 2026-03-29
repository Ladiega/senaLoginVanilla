console.log("form loaded");
const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (user == "admin" && password === "12345") {
    message.textContent = "Login successful!";
    message.style.color = "green";
    console.log("Login successful!");
  } else {
    message.textContent = "Login failed!";
    message.style.color = "red";
    console.log("Login failed!");
  }
});
