// 변수의 데이터 타입 명시

let stdId: number = 1111;
let stdName: string = 'lee';
let age: number = 20;
let gender: string = 'male';
let course: string = 'Typescript';
let completed: boolean = false;


// 열거형 : 사용자 정의 타입
enum GenderType {
    Male,
    Famale
}


interface Student {
    stdId: number;
    stdName: string;
    age: number;
    gender: GenderType;
    course: string;
    completed: boolean;
    // setName(name: string) : void;
    setName? : (name: string) => void;
    getName? : () => string;
}



function getInfo(id : number) : Student {
    return {
    stdId: id,
    stdName: 'lee',
    age: 20,
    gender: GenderType.Famale,
    course: 'javascript',
    completed: true,
};
}

function setInfo(Student: Student) {

}

console.log(getInfo(5678))

// 컴파일 에러 - syntax 에러 (문법적인 에러)

// 함수의 데이터 타입 명시 (매개변수, 리턴타입)
function plus(a: number, b: number) : number {
    return a + b;
}