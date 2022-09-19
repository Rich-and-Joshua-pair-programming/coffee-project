"use strict"

/*We want to submit the form with just the dropdown button*/

/*Collecting Form Data
* 1)how to collect data form text boxes
*
*
* */

// document.getElementById()


/*This is making our main list of coffees*/
function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
    // console.log(html);
}


/*This function displays the array in ascending order*/
function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


/*This is what is controlling the list of coffees by Roast Type*/
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "all") {
            filteredCoffees.push(coffee);
        }
    });
    showMeTheCoffee.innerHTML = renderCoffees(filteredCoffees);
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


//This is a variable that pulls the id of #coffees from the empty div
let showMeTheCoffee = document.querySelector('#coffees');


//Pulls all children nodes (options) of the select element
let roastSelection = document.getElementById("roast-selection");
console.log(roastSelection);


//This will allow the list to update With the dropdown alone.
roastSelection.addEventListener("change", updateCoffees);


/*This will activate the function of renderCoffees the empty div
* displaying our coffees onto the page */
showMeTheCoffee.innerHTML = renderCoffees(coffees);

