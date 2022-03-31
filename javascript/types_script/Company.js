var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Company = /** @class */ (function () {
    function Company(cmpName, location) {
        this.cmpName = "";
        this.location = "";
        this.cmpName = cmpName;
        this.location = location;
    }
    Company.prototype.it = function () {
        return "".concat(this.cmpName, " ").concat(this.location);
    };
    Company.prototype.domain = function () {
        return "".concat(this.cmpName, " ").concat(this.location);
    };
    return Company;
}());
// let thbs =new Company('THBS','BANGLORE'); 
// let cmp11 = thbs.it();
// console.log(cmp11);
// let thiss =new Company('THIS','DUBAI');
// let cmp22 = thiss.domain();
// console.log(cmp22);
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(cmpName, location, empID, empName) {
        var _this = _super.call(this, cmpName, location) || this;
        _this.empName = empName;
        _this.empID = empID;
        return _this;
    }
    Employee.prototype.domain = function () {
        return "".concat(_super.prototype.domain.call(this), " and i am employee ").concat(this.empName, " ").concat(this.empID);
    };
    Employee.prototype.project = function () {
        return "".concat(this.empName, " ").concat(this.empID, " is from Employee class(child)");
    };
    return Employee;
}(Company));
var thbs = new Employee('THBS', 'BANGLORE', 'PRIYA', 3364);
var cmp11 = thbs.domain();
console.log(cmp11);
var cmp22 = thbs.project();
console.log(cmp22);
