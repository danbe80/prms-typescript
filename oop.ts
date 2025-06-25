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
    empName : string;
    age : number;
    empJob : string;

    printEmp= () : void => {
    console.log(this.empName + '의 나이는' + this.age + '이고, 직업은' + this.empJob + '입니다.');
    }

}

let employee1 = new Employee();
employee1.empName = 'kim';
employee1.age = 20;
employee1.empJob = 'developer';
employee1.printEmp();