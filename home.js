function validateEmail() {
    const email = document.getElementById("emailInput").value.trim();
    const message = document.getElementById("message");

    // Email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        message.textContent = "✅ Valid email!";
        message.style.color = "green";
    } else {
        message.textContent = "❌ Invalid email! Please enter a valid email address.";
        message.style.color = "red";
    }
}

function subscribeEmail() {
    const email = document.getElementById("emailInput").value.trim();
    const message = document.getElementById("message");

    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        message.textContent = `✅ Thank you for subscribing! ${email}`;
        message.style.color = "green";
        document.getElementById("emailInput").value = ""; // Clear input field
    } else {
        message.textContent = "❌ Invalid email! Please enter a valid email address.";
        message.style.color = "red";
    }
}
