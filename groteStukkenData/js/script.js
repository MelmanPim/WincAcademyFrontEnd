// Voegt personen toe aan de pagina DOM 

const list = document.getElementById('listItems');

function addPersonsToDomLanden(input) {

  removeList();

  console.log('Start adding countries to dom')

  input.forEach(item => {
  // Maakte een nieuw element aan voor elke film
  let newLi = document.createElement("li");

  // Ordent de elementen in elkaar
  list.appendChild(newLi);

  // Geeft de elementen de gepaste inhoud
  newLi.innerHTML = item.region;
})
sortList();
};

function findOutIfSteenbok(input) {

removeList();

input.forEach(mens => {
  const datum = mens.birthday.dmy;
  const dagen = datum.split("/")[2];
  const maanden = datum.split("/")[1];
  if (dagen < 20 && maanden < 2 || dagen > 22 && maanden > 11 && mens.gender === 'female' && mens.age > 30) {
      
      // Maakte een nieuw element aan voor elke film
      let newLi = document.createElement("li");
      var listText = document.createTextNode(mens.name + ' ' + mens.surname);     // Create a text node
    
      let newImg = document.createElement("img");
    
      // Ordent de elementen in elkaar
      list.appendChild(newLi);
      newLi.appendChild(listText);
      newLi.appendChild(newImg);
    
      // Geeft de elementen de gepaste inhoud
      newImg.src = mens.photo;

      console.log(mens);

      } else {
          console.log("This person is not included in the categories")
        }

  sortList();

  });
};


function addPersonsToDomSteenbok(input) {

  console.log('Start adding names to dom')

};

// link aan button

const buttonLanden = document.getElementById('landenlijst');

buttonLanden.addEventListener('click', function () {
  addPersonsToDomLanden(randomPersonData);
});

const buttonSteenbok = document.getElementById('steenbokvrouwen');

buttonSteenbok.addEventListener('click', function () {
  findOutIfSteenbok(randomPersonData);
});


// Verwijder huidige lijst

const removeList = () => {
  const huidigeLijst = document.getElementById('listItems');
  huidigeLijst.innerHTML = '';
}


// sorteer de lijst automatisch bron: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sort_list

function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("listItems");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("li");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* if next item is alphabetically
        lower than current item, mark as a switch
        and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}