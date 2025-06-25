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
    constructor(
        private _empName: string, 
        private _age: number, 
        private _empJob: string 
    ) {

    }

    // get & set
    get empName() {
        return this._empName;
    }

    set empName(val : string) {
        this._empName = val;
    }

    printEmp= () : void => {
    console.log(this._empName + '의 나이는' + this._age + '이고, 직업은 ' + this._empJob + '입니다.');
    }

}

// public: 공용 ,  private: 개인(외부 접근 X), protected
let employee1 = new Employee('kim', 20, 'developer');
employee1.printEmp();
