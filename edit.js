var url = "http://localhost:9081/item";
var editItem = document.getElementById('edit-item');
var save = document.getElementById('save');
var x = parseInt(location.hash.slice(1));

var keyIdStorage = 'id'
var ids = JSON.parse(localStorage.getItem(keyIdStorage));
var keyContentStorage = 'content';
var items = JSON.parse(localStorage.getItem(keyContentStorage));

save.addEventListener('click', onSave);
editItem.value = items[x];

function onSave() {
	var idItem = ids[x];
	axios
		.put(url + '/' + idItem, {
			content: editItem.value
		})
		.then(res => console.log(res))
		.catch(err => console.log(err))	
	editItem.value = '';
}
