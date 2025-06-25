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

class Employee {
    private empName : string;
    private age : number;
    private empJob : string;

    constructor(empName: string, age: number, empJob: string) {
        this.empName = empName;
        this.age = age;
        this.empJob = empJob;
    }

    printEmp= () : void => {
    console.log(this.empName + '의 나이는' + this.age + '이고, 직업은 ' + this.empJob + '입니다.');
    }

}

// public: 공용 ,  private: 개인(외부 접근 X), protected
let employee1 = new Employee('kim', 20, 'developer');
employee1.printEmp();
