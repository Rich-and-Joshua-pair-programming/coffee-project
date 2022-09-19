"use strict"

function renderCoffee(coffee) {
    let html = '<div class="col-12 col-md-6 col-xl-4 coffee card px-4">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<img src="img/coffee-bag.png" class="card-img-top" alt="coffee bag">';
    html += '<div class="coffee-name card-title mb-0">' + coffee.name + '</div>';
    html += '<p class="coffee-roast card-text mb-3">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

//without this code nothing is printed to webpage

function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    console.log(html);
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast && coffeeSearch.value === "") {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "all" && coffeeSearch.value === "") {
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast && coffeeSearch.value.toLowerCase() === coffee.name.toLowerCase()) {
            filteredCoffees.push(coffee);
        } else if (coffee.name.includes("City") && selectedRoast === "all") {
            filteredCoffees.push(coffee);
            // } else if (coffee.name.includes("City") && selectedRoast === "light") {
            //     //City medium is showing up here for some reason...
            // filteredCoffees.push(coffee);
            // if (filteredCoffees.length === 3) {
            //     filteredCoffees.pop();
            // }
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function myFunction() {
    let selectedRoast1 = roastSelection.value;
    let filteredCoffees1 = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast1 && coffeeSearch.value === "") {
            filteredCoffees1.push(coffee);
        } else if (selectedRoast1 === "all" && coffeeSearch.value === "") {
            filteredCoffees1.push(coffee);
        } else if (coffee.roast === selectedRoast1 && coffeeSearch.value.toLowerCase() === coffee.name.toLowerCase()) {
            filteredCoffees1.push(coffee);
        } else if (coffee.name.includes("City") && selectedRoast1 === "all") {
            filteredCoffees1.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees1);
}

function addNewCoffee(e) {
    e.preventDefault()
    let newCoffeeArray = [];
    const newCoffeeObject = {name: coffeeAdd.value, roast: roastSelection1.value};
    newCoffeeArray.push(newCoffeeObject);
    coffees.forEach(function(coffee) {
        newCoffeeArray.push(coffee)
    });
    tbody.innerHTML = renderCoffees(newCoffeeArray);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// use .find/.filter to find types in the array

// an array of objects with name and roast

// write code to push new coffee name and roast onto existing array

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let searchForCoffee = document.querySelector('#coffee-search');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

searchForCoffee.addEventListener('keyup', updateCoffees);

console.log(document.forms);

let coffeeSearch = document.getElementById('coffee-search');

let roastSelection1 = document.querySelector('#roast-selection1');

let coffeeAdd = document.querySelector('#coffeeAdd');

let submitNewCoffee = document.querySelector('#submitNewCoffee');

submitNewCoffee.addEventListener('click', addNewCoffee);

// let submitCoffee = function (event) {
//     alert(`You are searching for ${coffeeSearch.value}`);
// }
//
// submitButton.addEventListener('click', submitCoffee);

// 1. dropdown menu for roast: all, light, dark etc
// 2. Search bar for coffee name (includes coffee name too)
// 3. A separate form to add new roast/coffee name at the beginning of an array

// Need to create two forms - first input is drop and second input is text
// Coffee name is displayed in big letters first and then next is type of roast in small letters
// Don't need to click submit button
// First form sorts existing items in the array and second form purely adds new items to the array

// roast 'all' should all elements in the object

//final project