function limitString(string, limit) {
    return string.substring(string, limit);
}

function convertPrice(price){
    return parseFloat(price.split(",").join('.').split(" ").join(''))
}

export {
    limitString,
    convertPrice
}