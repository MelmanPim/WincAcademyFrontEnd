const dierButton = document.querySelectorAll('.big-five-button');
const dierButtonText = document.querySelectorAll('.big-five-button').innerHTML;
const list = document.querySelector("#spotted-animals-list");

dierButton.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        console.log("dier toevoegen: " + event.target.innerHTML);

        const newListItem = document.createElement("li");
        list.appendChild(newListItem);
        newListItem.innerHTML = event.target.innerHTML;
    });
});

// Verwijdert bovenste dier uit de lijst
const removeFirstButton = document.querySelector('#remove-first-item-button');
let child = list.getElementsByTagName("li")[0];

const removeFirstList = () => {
    console.log(list);
    list.removeChild(child);
};

removeFirstButton.addEventListener('click', removeFirstList);

// Verwijdert alle dieren uit de lijst
const removeAllButton = document.querySelector('#remove-all-button');
let children = list.getElementsByTagName("li");

const removeAllList = () => {
    console.log("Verwijder alle dieren");
    list.innerHTML = "";
};

removeAllButton.addEventListener('click', removeAllList);