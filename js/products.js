const productList = document.getElementById("productList");

/*Función que se ejecuta una vez que se haya lanzado el evento de
que el documento se encuentra cargado, es decir, se encuentran todos los
elementos HTML presentes.*/
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            const products = resultObj.data;          
            products.forEach(product => {
                let item = document.createElement("li");
                item.innerHTML += `
                <div class="row">
                    <div class="col-3">
                        <img src="` + product.imgSrc + `" " class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ product.name +`</h4>
                            <small class="text-muted">` + product.soldCount + ` artículos</small>
                        </div>
                        <p class="mb-1">` + product.description + `</p>
                        <p class="mb-1">` + product.currency + ` ` + product.cost + `</p>
                    </div>
                </div>
                `;
                productList.appendChild(item);
            });
        }
    })
});