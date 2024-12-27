// Registration Form
document.getElementById("register-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    // Отправка данных на сервер
    const response = await fetch("/api/users/register", {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        alert("Registration successful!");
    } else {
        alert("Registration failed. Please try again.");
    }
});

// Login Form
document.getElementById("login-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const loginData = {
        email: document.getElementById("login-email").value,
        password: document.getElementById("login-password").value
    };

    const response = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData)
    });

    if (response.ok) {
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your credentials.");
    }
});

// Add Product Form
document.getElementById("add-product-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    // Отправка данных о продукте
    const response = await fetch("/api/products", {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        alert("Product added successfully!");
    } else {
        alert("Failed to add produc
