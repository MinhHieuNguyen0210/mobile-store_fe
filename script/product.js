const api_url = "http://localhost:8080/api/admin/product/all";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);

  show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table

function show(data) {
  // Loop to access all rows
  let tab = `<div></div>`;
  for (let r of data) {
    tab += ` 
<div class="grid-column-3">
<div class="product-item">
<div class="product__item-brand">
    ${r.productName}
</div>
<div class="product__item-img" style="background-image: url(${r.image})"></div>
<p class="product__item--description">
   ${r.description}
</p>
<div class="product__item--price">${r.unitPrice}USD</div>
<div class="product__item--quantity">${r.unitInStock}unit instock</div>
<div class="product__item--button">
    <button class="btn button-details">
        <i class="fas fa-info-circle"></i>
        Details</button>
    <button class="btn button-order">
        <i class="fas fa-shopping-cart"></i>
        Order now</button>
</div>
</div>
</div>
   `;
  }
  // Setting innerHTML as tab variable
  document.getElementsByClassName("grid-row")[0].innerHTML = tab;
}
