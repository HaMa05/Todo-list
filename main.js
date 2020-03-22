var url = "http://localhost:9081/item";
var createItem = document.getElementById('create-item');
var editItem = document.getElementById('edit-item');
var deleteItem = document.getElementById('delete-item');
var items = document.getElementById('items');

var keyContentStorage = 'content';
var keyIdStorage = 'id'
var contentStore = [];
var idStore = [];

items.addEventListener('click', onClick);
createItem.addEventListener('click', onCreate);
deleteItem.addEventListener('click', onDelete);
axios
	.get(url)
	.then(res => displayItem(res.data))
	.catch(err => console.log(err))

function displayItem(data){
	var contents = data.map((item, index) => {
		// + " <button data-idDelete=" + index + ">Delete</button>"
		contentStore.push(item.content);
		idStore.push(item.id)
		return "<li>" + item.content + " <button data-idEdit=" + index + ">Edit</button>"  +"</li>";
	})
	items.innerHTML = contents.join('');
	localStorage.setItem(keyContentStorage, JSON.stringify(contentStore));
	localStorage.setItem(keyIdStorage, JSON.stringify(idStore));
}

function onClick(event) {
	var button = event.target;
	var i = parseInt(button.dataset.idedit);
	if(i >= 0){
		location.hash = i;
		window.location = '/edit.html' + location.hash;
	}
}

function onCreate() {
	window.location = '/create.html';
}

function onDelete(event) {
	window.location = '/delete.html'
}