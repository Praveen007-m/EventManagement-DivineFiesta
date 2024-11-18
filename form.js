// Assuming this is in the ticket selection page where user selects a zone and quantity
const ticketPriceMap = {
    "Bronze": 1299,
    "Fanpit-2": 3000,
    "Fanpit-1": 5000,
    "VIP": 7500,
    "MIP": 10000
};

const seatingZone = document.getElementById("seatingZone").value; // Assuming you get seating zone from a dropdown or selection input
const numberOfTickets = document.getElementById("numTickets").value; // Assuming number of tickets is input by the user

const pricePerTicket = ticketPriceMap[seatingZone] || 0;
const totalPrice = pricePerTicket * numberOfTickets;

// Store the values in localStorage
localStorage.setItem("totalPrice", totalPrice);
localStorage.setItem("seatingZone", seatingZone);

