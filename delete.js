var url = "http://localhost:9081/item";
var deleteItem = document.getElementById('delete-item');
var itemsList = document.getElementById('items-list');

var keyContentStorage = 'content';
var delItems = [];
var keyIdStorage = 'id'
var items = JSON.parse(localStorage.getItem(keyContentStorage));
var ids = JSON.parse(localStorage.getItem(keyIdStorage));
// delItems = items;
deleteItem.addEventListener('click', onDelete);
itemsList.addEventListener('change', onClick);

function convertItemsToLi() {
	var content = items.map((item) => {
		return "<li><input type='checkbox' data-id=item  name='"+ item +"'>" + item + "</></li>";
	})
	itemsList.innerHTML = content.join('');
}
convertItemsToLi();

function onClick(event) {
	var button = event.target;
	var i = button.checked;
	if(i === true){
		delItems.push(button.name);
	}else{
		var indexDel = delItems.indexOf(button.name)
		delItems.splice(indexDel,1);
	}
 	console.log(delItems);
}

function onDelete() {
	var idDel = [];
	for(var delItem = 0; delItem < delItems.length; delItem++){
		var id = items.indexOf(delItems[delItem]);
		idDel.push(ids[id]);
	}

	idDel.forEach(id =>{
		axios
			.delete(url + '/' + id)
			.then(res => console.log(res))
			.catch(err => console.log(err))
	})
}