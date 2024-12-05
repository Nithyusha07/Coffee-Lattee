// Array to store the coffee items
const coffeeMenu = [
    { 
name: 'Espresso',
price: 3.50,
description: 'Strong,
black coffee made by forcing steam through ground coffee beans.'
 },
    { 
name: 'Cappuccino', 
price: 4.00, 
description: 'Espresso topped with steamed milk and froth.' 
},
    { 
name: 'Latte', 
price: 4.50, 
description: 'Espresso with steamed milk and a light foam.' 
},
    { 
name: 'Americano', 
price: 3.75, 
description: 'Espresso with hot water added to dilute the strength.' 
},
    { 
name: 'Mocha', 
price: 5.00, 
description: 'Espresso with steamed milk and chocolate syrup.'
 }
];

// Function to display the menu
function displayMenu() {
    const coffeeList = document.getElementById('coffee-list');

    // Clear the previous menu items (if any)
    coffeeList.innerHTML = '';

    // Loop through the coffeeMenu array and create HTML elements
    coffeeMenu.forEach(coffee => {
        const coffeeDiv = document.createElement('div');
        coffeeDiv.classList.add('coffee-item');
        coffeeDiv.innerHTML = `
            <h3>${coffee.name}</h3>
            <p><strong>Price:</strong> $${coffee.price.toFixed(2)}</p>
            <p>${coffee.description}</p>
        `;
        coffeeList.appendChild(coffeeDiv);
    });
}

// Run the function to display the menu when the page loads
window.onload = displayMenu;
