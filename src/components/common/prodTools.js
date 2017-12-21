let ProdTools = {};
let prods = {};

ProdTools.addOrUpdate = function (p) {
    if (prods[p.id]) {
        prods[p.id] += p.num;
    } else {
        prods[p.id] = p.num;
    }
}

ProdTools.delete = function (p) {
    delete prods[id];
}

ProdTools.getProds = function () {
    return prods;
}

ProdTools.getTotalCount = function () {
    let sum = 0;
    for (let id in prods) {
        sum += prods[id];
    }
    return sum;
}

export default ProdTools;