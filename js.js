var form = document.getElementById('addform');
var Items = document.getElementById('items');
var filter= document.getElementById('filter');


form.addEventListener('submit' , addItem);
//filter evevnt
filter.addEventListener('keyup' , filterItems);

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
  
//filter item
function filterItems(e){
//converts text to lowercase
var text = e.target.value.toLowerCase();
//get lis
var items= Items.getElementsByTagName('li');
//conver to an array
Array.from(items).forEach(function(item){
 var itemName= item.firstChild.textContent;
 if(itemName.toLowerCase.indexOf(text)!=-1){
     item.style.display='block';   
 }
 else{
    item.style.display = 'none' ;
 }
});
}