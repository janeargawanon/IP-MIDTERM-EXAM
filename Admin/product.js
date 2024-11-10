window.onload = function() {
    let products = JSON.parse(localStorage.getItem("products")) || [];

    const productList = document.getElementById("productList");
    

    products.forEach((product, index) => {
        let productItem = document.createElement("div");
        productItem.classList.add("product-item");

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>₱     ${product.price}</p>
            <button class="add-to-cart" onclick="addtocart('${product.name}')">Add to cart</button>
            <button class="buy-now" onclick="buynow('${product.name}')">Buy Now</button>

        `;

        productList.appendChild(productItem);
        
    });

        console.log(products); 
        
    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');

    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });

    // function toggleSearch() {
    //     const container = document.querySelector('.search-container');
    //     container.classList.toggle('active');
    // }
    

{/* <p>Category: ${product.category}</p>
            <p>Description: ${product.description}</p>
            <p>Quantity: ${product.quantity}</p> */}


    
};
