//your JS code here. If required.
let nameBox = document.getElementById("fname")
nameBox.addEventListener("change",()=>{
	nameBox.value = nameBox.value.toUpperCase();
})