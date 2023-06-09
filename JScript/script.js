


 let productHTML = '';
products.forEach((product)=>{
     productHTML += `
          <div class="product-container">
          <div class="product-img-container"><img class="product-img"
               src="${product.image}" alt="">
          </div>
          <div class="product-title">"${product.name}</div>
          <div class="rating">

               <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">

               <div class="product-rating-counts">${product.rating.count}</div>
          </div>
          <div class="product-price">$
          ${(product.priceCents / 100).toFixed(2)}
          </div>
          <div class="product-quantity-container">
               <select class="select-input">
               <option selected value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
               <option value="9">9</option>
               <option value="10">10</option>
               </select>
          </div>

          <div class="product-spacer"></div>


          <div class="added-to-cart js-added-to-cart"><img src="images/icons/checkmark.png">
               Added
          </div>
          <button class="add-to-cart-btn js-add-to-cart-btn" data-product-id="${product.id}">add to cart</button>
          </div>
          `;

    ; 
   
});

document.querySelector('.js-product-grid').innerHTML = productHTML;

document.querySelectorAll('.js-add-to-cart-btn').forEach((button)=>{
     button.addEventListener('click',()=>{
          ()=>{
          const addedText = document.querySelector('.added-to-cart').style;


          function addedtextfun()
               {addedText.opacity = 1;
                  setTimeout(addedTextClose, 800);
         
                       function addedTextClose(){
                         addedText.opacity = 0;};
               }
          }



     
   const productId = button.dataset.productId;
let matchingItem;

cart.forEach((item)=>{
     if (productId === item.productId){
          matchingItem = item;
     }
});
if(matchingItem){
     matchingItem.quantity += 1;
} else{cart.push({
     productId: productId,
     quantity: 1
});
}
let cartQuantity = 0;

cart.forEach((item)=>{
     cartQuantity += item.quantity; 


});
document.querySelector('.js-cart-quantity').innerHTML= cartQuantity;

  

})
});
