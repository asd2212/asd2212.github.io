$(document).ready(function(){


	console.log("hello!");

	var myFavoriteBook = "A Raisin in the Sun"; 
	console.log("My fav book is: " + myFavoriteBook); 

	window.onclick = changeBG; 

	function changeBG(){
		document.getElementsByTagName("body")[0].style.backgroundColor ="#C1E3B0"; 
		document.getElementsByTagName("body")[0].style.color="pink"; 
	}
}); 