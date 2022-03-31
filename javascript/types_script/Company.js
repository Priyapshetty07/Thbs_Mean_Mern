var Company = /** @class */ (function () {
    // contact="";
    function Company(cmpName, location) {
        this.cmpName = "";
        this.location = "";
        this.cmpName = cmpName;
        this.location = location;
        // this.contact = contact;
    }
    Company.prototype.it = function () {
        return "".concat(this.cmpName, " ").concat(this.location);
    };
    Company.prototype.domain = function () {
        return "".concat(this.cmpName, " ").concat(this.location);
    };
    return Company;
}());
var thbs = new Company('THBS', 'BANGLORE');
var cmp11 = thbs.it();
console.log(cmp11);
var thiss = new Company('THIS', 'DUBAI');
var cmp22 = thiss.domain();
console.log(cmp22);
