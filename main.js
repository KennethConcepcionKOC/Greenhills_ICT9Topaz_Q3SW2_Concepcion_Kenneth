// Area compution
function compute_discount() {
    let price = Number(document.getElementById("price").value);
    let discount = Number(document.getElementById("discount").value);
    let discounted_price = price - (price * discount / 100);

    document.getElementById("result").innerHTML = "The discounted price is: " + discounted_price + " PHP";
}