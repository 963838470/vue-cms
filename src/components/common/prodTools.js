let ProdTools = {};
let store = window.localStorage;
let prods = JSON.parse(store.getItem('prod') || '{}');

ProdTools.addOrUpdate = function (p) {
    if (prods[p.id]) {
        prods[p.id] += p.num;
    } else {
        prods[p.id] = p.num;
    }
    this.save(prods);
}

ProdTools.delete = function (id) {
    delete prods[id];
    this.save(prods);
}

ProdTools.getProds = function () {
    return JSON.parse(store.getItem('prod') || '{}');
}

ProdTools.getTotalCount = function () {
    let sum = 0;
    for (let id in prods) {
        sum += prods[id];
    }
    return sum;
}

ProdTools.save = function (prods) {
    store.setItem('prod', JSON.stringify(prods));
}

export default ProdTools;