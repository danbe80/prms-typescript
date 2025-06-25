// 일반적인 직원 정보
// let empName : string;
// let age : number;
// let empJob : string;
// function printEmp(empName: string, age : number, empJob: string) : void {
//     // console.log(`${empName}의 나이는 ${age}이고, 직업은 ${empJob}입니다.`);
//     console.log(empName + '의 나이는' + age + '이고, 직업은' + empJob + '입니다.');
// }
// printEmp('kim', 20, 'developer');
// 멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메소드
var Employee = /** @class */ (function () {
    function Employee(_empName, _age, _empJob) {
        var _this = this;
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
        this.printEmp = function () {
            console.log(_this._empName + '의 나이는' + _this._age + '이고, 직업은 ' + _this._empJob + '입니다.');
        };
    }
    Object.defineProperty(Employee.prototype, "empName", {
        // get & set
        get: function () {
            return this._empName;
        },
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
// public: 공용 ,  private: 개인(외부 접근 X), protected
var employee1 = new Employee('kim', 20, 'developer');
employee1.printEmp();
