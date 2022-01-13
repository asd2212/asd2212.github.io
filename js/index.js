$(document).ready(function(){


	console.log("hello!");

	var myFavoriteBook = "A Raisin in the Sun"; 
	console.log("My fav book is: " + myFavoriteBook); 

	window.mousemove = changeBG; 

	function changeBG(){
		document.getElementsbyTagName("Body")[0].style.BackgroundColor = "#C1E3BO"; 
		document.getElementsbyTagName("Body")[0].style.color="pink"; 

	}
}); 