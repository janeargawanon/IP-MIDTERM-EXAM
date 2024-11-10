window.onload = function() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    const productCount = document.getElementById("productCount");
    const dashboardProductList = document.getElementById("dashboardProductList");

    productCount.textContent = products.length;

    function displayProducts() {
        dashboardProductList.innerHTML = ''; 
        products.forEach((product, index) => {
            const productItem = document.createElement("div");
            productItem.classList.add("product-item");

            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Category ${product.category}</p>
                <p>Price ₱${product.price}</p>
                <p>Quantity ${product.quantity}</p>
                <button class="remove-button" data-index="${index}">Remove</button>
            `;

            dashboardProductList.appendChild(productItem);
        });

        console.log(products); 

        document.querySelectorAll(".remove-button").forEach(button => {
            button.addEventListener("click", function() {
                const index = this.dataset.index;
                products.splice(index, 1);
                localStorage.setItem("products", JSON.stringify(products));
                displayProducts();
                productCount.textContent = products.length;
            });
        });
    }

    displayProducts();

};
{/* <p>Description ${product.description}</p> */}
