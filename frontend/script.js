fetch("http://localhost:5000/products")
.then(res=>res.json())
.then(data=>{

const container=document.getElementById("products");

data.forEach(product=>{

container.innerHTML+=`

<div class="card">

<img src="${product.image}">

<h2>${product.name}</h2>

<h3>$${product.price}</h3>

<button>Add to Cart</button>

</div>

`;

});

});