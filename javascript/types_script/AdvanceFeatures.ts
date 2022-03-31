class AdvanceFeatures {
    list1 = [
        { name: 'generics datatypes' },
        { name: 'access modifiers' }
    ]

    public getFeaturesList(key: string | number, list: object[]) {
        return list.filter((ele: any, inx, arr) => {
            return ele.name.includes(key);
        });
    }
}
let af = new AdvanceFeatures();
let list1 = [
    { name: 'generics datatypes' },
    { name: 'access modifiers' }
]

let result1 = af.getFeaturesList('access', list1);
console.log(result1);