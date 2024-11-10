document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const productName = document.getElementById("productName").value;
    const productCategory = document.getElementById("category").value;
    const productPrice = document.getElementById("productPrice").value;
    const quantity = document.getElementById("quantity").value;
    const productDescription = document.getElementById("productDescription").value;
    const fileInput = document.getElementById("fileInput").files[0];

    const reader = new FileReader();

    reader.onload = function(event) {
        const imageUrl = event.target.result;

        let product = {
            name: productName,
            category: productCategory,
            price: productPrice,
            quantity: quantity,
            description: productDescription,
            image: imageUrl
        };

        let products = JSON.parse(localStorage.getItem("products")) || [];
        products.push(product);

        console.log(product);

        localStorage.setItem("products", JSON.stringify(products));

        document.getElementById("productForm").reset();
    };

    if (fileInput) {
        reader.readAsDataURL(fileInput);
    } else {
        console.log("No file selected");
    }
});
