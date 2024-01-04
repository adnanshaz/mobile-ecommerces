function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let items = document.querySelectorAll('.product-card');

    for (var i = 0; i < items.length; i++) {
        let productName = items[i].querySelector('.product-heading');
        let value = productName.innerHTML || productName.innerText || productName.textContent;

        if (value.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}