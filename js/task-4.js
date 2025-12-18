`use strict`;


function getShippingCost(country) {
    let price;
    switch (country) {
        case "China":
            price = 100;
            break;
        case "Chile":
            price = 250;
            break;
        case "Australia":
            price = 170;
            break;
        case "Jamaica":
            price = 120;
            break
        default:
            price = 0;
    }

    if (price) {
        return `Shipping to ${country} will cost ${price} credits`;
    } else {
        return "Sorry, there is no delivery to your country"
    }
}

