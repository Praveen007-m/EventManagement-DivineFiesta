// Element selectors
const tColorA = document.getElementById('tColorA');
const tColorC = document.getElementById('tColorC');
const iconA = document.querySelector('.fa-credit-card');
const iconC = document.querySelector('.fa-wallet');
const cDetails = document.querySelector('.card-details');
const upiDetails = document.querySelector('.upi-details');

// Function to handle color and visibility changes
function selectPaymentMethod(method) {
    // Reset colors and hide sections
    tColorA.style.color = "#444";
    tColorC.style.color = "#444";
    iconA.style.color = "#aaa";
    iconC.style.color = "#aaa";
    cDetails.style.display = "none";
    upiDetails.style.display = "none";

    // Apply changes based on selected method
    if (method === 'card') {
        tColorA.style.color = "greenyellow";
        iconA.style.color = "greenyellow";
        cDetails.style.display = "block";
    } else if (method === 'upi') {
        tColorC.style.color = "greenyellow";
        iconC.style.color = "greenyellow";
        upiDetails.style.display = "block";
    }
}

// Add event listeners
tColorA.addEventListener('click', () => selectPaymentMethod('card'));
tColorC.addEventListener('click', () => selectPaymentMethod('upi'));


// Ensure data is fetched from localStorage
window.onload = function() {
    const price = localStorage.getItem('totalPrice'); 
    const seatingZone = localStorage.getItem('seatingZone'); 

    if (price !== null && seatingZone !== null) {
        // Tax calculation: 15%
        const tax = parseFloat(price) * 0.15;
        const total = parseFloat(price) + tax;

        // Update displayed values
        document.querySelector('.des-p').textContent = `₹ ${price}`;
        document.querySelector('.des-p.tax').textContent = `₹ ${tax.toFixed(2)}`;
        document.querySelector('.des-p.total').textContent = `₹ ${total.toFixed(2)}`;
    } else {
        console.log("Price or Seating Zone not found in localStorage");
    }
};


// Retrieve data from localStorage
window.onload = function() {
    const seatingZone = localStorage.getItem("seatingZone");
    const numTickets = parseInt(localStorage.getItem("numTickets"));
    const totalPrice = parseFloat(localStorage.getItem("totalPrice"));

    if (seatingZone && numTickets > 0 && totalPrice >= 0) {
        // Calculate tax (15%)
        const tax = totalPrice * 0.15;
        const finalTotal = totalPrice + tax;

        // Display the values
        document.getElementById("price").textContent = `₹${totalPrice.toFixed(2)}`;
        document.getElementById("tax").textContent = `₹${tax.toFixed(2)}`;
        document.getElementById("total").textContent = `₹${finalTotal.toFixed(2)}`;
    } else {
        alert("Invalid data. Please go back and complete the form.");
        window.location.href = "form.html"; // Redirect to form if no data is available
    }
}