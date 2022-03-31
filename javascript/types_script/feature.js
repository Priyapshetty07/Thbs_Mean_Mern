var AdvanceFeature = /** @class */ (function () {
    function AdvanceFeature() {
    }
    // list=[
    //     {name:'generics datatype'},
    //     {name: 'access modifiers'}
    // ]
    AdvanceFeature.prototype.getFeatureList = function (list, key) {
        return list.filter(function (element, index, array) {
            return element.name.includes(key || 'datatype');
        });
    };
    return AdvanceFeature;
}());
var test = new AdvanceFeature();
var list = [
    { name: 'generics' },
    { name: 'access modifiers' }
];
var result = test.getFeatureList(list);
console.log(result);
