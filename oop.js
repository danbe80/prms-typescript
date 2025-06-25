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
    function Employee(empName, age, empJob) {
        var _this = this;
        this.printEmp = function () {
            console.log(_this.empName + '의 나이는' + _this.age + '이고, 직업은 ' + _this.empJob + '입니다.');
        };
        this.empName = empName;
        this.age = age;
        this.empJob = empJob;
    }
    return Employee;
}());
// public: 공용 ,  private: 개인(외부 접근 X), protected
var employee1 = new Employee('kim', 20, 'developer');
employee1.printEmp();
