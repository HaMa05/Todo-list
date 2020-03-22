var url = "http://localhost:9081/item";
var add = document.getElementById('add');
var newItem = document.getElementById('new-item');

add.addEventListener('click', addItem);
function addItem() {
	var item = {content: newItem.value};
	if(newItem.value){	
		axios
			.post(url, item)
			.then(res => console.log(res))
			.catch(err => console.log(err))
		newItem.value = '';
	}
}