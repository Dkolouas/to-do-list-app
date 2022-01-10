function newItem() {

  //1. Adding a new item to the list of items:

  let li = $('<li></li>');
  // let li = document.createElement("li");
  let inputValue = $('#input').val();
  // let inputValue = document.getElementById("input").value;
  // let text = document.createTextNode(inputValue);
  li.append(inputValue);
  // li.appendChild(text);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
    //   let list = document.querySelector('#list');
    //   list.appendChild(li);
  }

  //2. Crossing out an item from the list of items:
  function crossOut() {
    li.toggleClass("strike");
    //li.classList.toggle("strike");
  }
  li.on('dblclick', function crossOut() {
    li.toggleClass("strike");
  });
  //li.addEventListener("dblclick", crossOut);

  //3(i). Adding the delete button "X":
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  // let crossOutButton = document.createElement("crossOutButton");
  crossOutButton.append(document.createTextNode("X"));
  // crossOutButton.appendChild(document.createTextNode("X"));
  li.append(crossOutButton);
  // li.appendChild(crossOutButton);
  crossOutButton.on('click', deleteListItem);
  // crossOutButton.addEventListener("click", deleteListItem);
  // //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem() {
    li.addClass('delete')
  }
  // function deleteListItem() {
  //   li.classList.add("delete")
  // }
  // 4. Reordering the items:
  $('#list').sortable();

}