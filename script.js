//your JS code here. If required.
let lists = document.getElementsByTagName("li");
for (let index = 0; index < lists.length; index++) {
	if(lists[index].id === "level"){
		alert("The level of the element is: " + (index + 1));
	}
}