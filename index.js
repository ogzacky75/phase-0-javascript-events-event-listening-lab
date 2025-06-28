function addingEventListener(){
	const btn = document.getElementById('button')
	btn.addEventListener('click',addingEventListener)
	alert('clicked btn')
}

