const toDoForm = document.getElementById("toDoForm")
const formInput = document.getElementById("formInput")
const toDoList = document.getElementById("toDoList")

const makeItem = (text, newId) => {

  // create all elements
  const div = document.createElement("div")
  const listItem = document.createElement("li")
  const button = document.createElement("button")

  // append child voor structuur
  toDoList.appendChild(div)
  div.appendChild(listItem)
  div.appendChild(button)

  // add styling classes and id's
  button.classList.add("deleteButton")

  // add value to elements
  listItem.innerHTML = text
  listItem.htmlFor = newId
  button.innerHTML = "delete"

  // add delete event bij klik button
  button.addEventListener("click", (item) => {
  deleteDom(newId)
  })
};

const updateList = () => {
  getData().then(data => {
      data.forEach(item => {
        // Dit zorgt er voor dat je geen error krijgt
        const description = item && item.item ? item.item.description : null;
        makeItem(description, item._id)
      });
  })
}

toDoForm.addEventListener("submit", (item) => {
  addDom(item)
})

const addDom = async (item) => {
  item.preventDefault()
  await postData({ description: formInput.value, done: false })
  formInput.value = ""
  toDoList.innerHTML = ""
  updateList()
}

const deleteDom = async (id) => {
  await deleteData(id)
  toDoList.innerHTML = ""
  updateList()
}

updateList()
