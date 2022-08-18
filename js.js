var form = document.getElementById('addform');
var Items = document.getElementById('items');

form.addEventListener('submit' , addItem);

function addItem(e){
    e.preventDefault();


var newItem = document.getElementById('input1').value ;

var list = document.createElement('li');

list.appendChild(document.createTextNode(newItem));
//delete button
var Deletebtn = document.createElement('button');
Deletebtn.appendChild(document.createTextNode('X'));
list.appendChild(Deletebtn);
Items.appendChild(list);
}
