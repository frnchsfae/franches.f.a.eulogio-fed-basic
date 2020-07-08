let product = 
	[{	
		"imgurl": "images/prod1.png",
		"name": "Watch Series 1",
		"brand": "Apple",
        "description": "New aluminum 42mm watch",
		"price": "145"

	},
	{
		"imgurl": "images/prod2.png",
		"name": "Mi Pad",
		"brand": "Mi",
        "description": "Second-hand Mi Pad 16gb",
		"price": "200"
	},
	{
		"imgurl": "images/prod3.png",
		"name": "Beats Pro",
		"brand": "Beats by Dre",
        "description": "New Wireless Earphones",
		"price": "350"
	}];

let shopCart = [];








// Shopping Cart -------------------------------------------------------
let modal = document.getElementById('modal');
let btn = document.getElementById('carticon');
let span = document.getElementsByClassName("closebtn")[0];


btn.onclick = function(){
	modal.style.display = "block";

	let shopList =  document.getElementById('cart-modal');
	shopCart.forEach((items, index) => {
		shopList.innerHTML += "<div id='shopList-container'>" +
		"<p id='shopList-name'>" + items.name + "</p>" +
		"<p id='shopList-price'> $" + items.price +"</p>" +
		"<img src='"+ items.imgurl +"' id='shopList-img'>"
		"</div>";
	});

	shopCart = [];
}

span.onclick = function(){
	modal.style.display = "none";
}

window.onclick = function(event){
	if(event.target == modal){
		modal.style.display = "none";
	}
}









// Cover Display -----------------------------------------------------
let slideIndex = 1;
showSlides(slideIndex);

function nextSlides(i){
	showSlides(slideIndex+=i);
}
function currentSlide(i){
	showSlides(slideIndex=i);
}
function showSlides(i){
	let x;
	let slides = document.getElementsByClassName('carousel-container');

	if (i > slides.length) {slideIndex=1}
	if (i < 1) {slideIndex = slides.length}
	for(x=0;x<slides.length;x++){
		slides[x].style.display='none';
	}

	slides[slideIndex-1].style.display = "grid";
}











// Content Display -----------------------------------------------------
product.forEach((prod, index) => {
	let prodlist = document.getElementById("products-section");
	
	prodlist.innerHTML += 
	"<div id='prod-item'>" + 
		"<img src='" + prod.imgurl + "'>" +
		"<ul>" + 
			"<li id='prod-item-title'>" + prod.name + "</li>" +
			"<li id='prod-item-brand'>" + prod.brand + "</li>" +
			"<li id='prod-item-subtitle'>" + prod.description + "</li>" +
			"<li id='prod-item-price'> $" + prod.price + "</li>" +
		"</ul>" +
		"<button value="+index+" onClick='addCart(this.value)'>Add to Cart</button>" +
	"</div>";
})

function addCart(x){
	let cartItem = product[x];
	shopCart.push(cartItem);
}













