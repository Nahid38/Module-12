function addListItem() {
    const myList = document.getElementById("myList");
    const newListItem = document.createElement("li");
    const textNode = document.createTextNode("Apples");
    newListItem.appendChild(textNode);
    myList.appendChild(newListItem);
  }