var AdvanceFeatures = /** @class */ (function () {
    function AdvanceFeatures() {
        this.list1 = [
            { name: 'generics datatypes' },
            { name: 'access modifiers' }
        ];
    }
    AdvanceFeatures.prototype.getFeaturesList = function (key, list) {
        return list.filter(function (ele, inx, arr) {
            return ele.name.includes(key);
        });
    };
    return AdvanceFeatures;
}());
var af = new AdvanceFeatures();
var list1 = [
    { name: 'generics datatypes' },
    { name: 'access modifiers' }
];
var result1 = af.getFeaturesList('access', list1);
console.log(result1);
