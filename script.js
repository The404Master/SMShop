let cart = [];

document.getElementById("order-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const contact = document.getElementById("contact").value;

    const orderDetails = {
        username: username,
        contact: contact,
        items: JSON.stringify(cart),
        totalPrice: document.getElementById("total-price").textContent
    };

    alert("Order submitted! Please contact the owner directly to finalize the purchase.");
    console.log("Order Details:", orderDetails);
});
