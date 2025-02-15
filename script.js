function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "apollo" && password === "12345") {
        sessionStorage.setItem("loggedIn", true);
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        errorMessage.innerText = "Incorrect username or password!";
    }
}
