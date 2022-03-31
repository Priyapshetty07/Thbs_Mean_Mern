class AdvanceFeature {
    // list=[
    //     {name:'generics datatype'},
    //     {name: 'access modifiers'}
    // ]
    public getFeatureList(list: object[], key?: string | number) {
        return list.filter((element: any, index, array) => {
            return element.name.includes(key || 'datatype');
        });
    }
}

let test: AdvanceFeature = new AdvanceFeature();

let list = [
    { name: 'generics' },
    { name: 'access modifiers' }
]

let result = test.getFeatureList(list);
console.log(result);
