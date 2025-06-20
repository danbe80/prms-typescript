// 변수의 데이터 타입 명시

// let stdId: number = 1111;
// let stdName: string = 'lee';
// let age: number = 20;
// let gender: string = 'male';
// let course: string = 'Typescript';
// let completed: boolean = false;


// // 열거형 : 사용자 정의 타입
// enum GenderType {
//     Male,
//     Famale
// }


// interface Student {
//     stdId: number;
//     stdName: string;
//     age: number;
//     gender: GenderType;
//     course: string;
//     completed: boolean;
//     // setName(name: string) : void;
//     setName? : (name: string) => void;
//     getName? : () => string;
// }



// function getInfo(id : number) : Student {
//     return {
//     stdId: id,
//     stdName: 'lee',
//     age: 20,
//     gender: GenderType.Famale,
//     course: 'javascript',
//     completed: true,
// };
// }

// function setInfo(Student: Student) {

// }

// console.log(getInfo(5678))

// 컴파일 에러 - syntax 에러 (문법적인 에러)

// 함수의 데이터 타입 명시 (매개변수, 리턴타입)
// function plus(a: number, b: number) : number {
//     return a + b;
// }

// any 타입은 어떤 타입이든 OK
// let anyVal: any = 100;
// anyVal = 'kim';

// type strOrNum = number | string;

// let numStr: strOrNum = '100';
// let item: number;
// function convertToString(val: strOrNum): string {
//     if(typeof val === 'string') {
//         item = 0;
//     } else {
//         item = val;
//     }
//     return String(val);
// }

// function convertToNumber(val: strOrNum): number {
//     return Number(val);
// }

// console.log(convertToString(numStr));
// console.log(convertToNumber(numStr));

// 배열
let numbers: number[] = [1,2,3,4,5];

let fruits: string[] = ['apple', 'banana', 'orange'];

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 배열의 유니온 타입
let mixedArray: (number | string)[] = [1, 'two', 3, 'four'];

for(let i = 0; i< mixedArray.length; i++) {
    console.log(mixedArray[i]);
}

let infer = [1,2,3]; // 타입 추론

for(let i = 0; i< infer.length; i++) {
    console.log(infer[i]);
}

// 읽기 전용 수정되지 않음
let readOnlyArray : ReadonlyArray<number> = [1,2,3];

// 튜플  : 타입의 순서가 정해져 있다.
let greeting : [number, string, boolean] = [1, 'hello', true];

for(let i = 0; i< greeting.length; i++) {
    console.log(greeting[i]);
}

// Spread 연산자
let firstArray = [1,2,3];
let secondArray = [4,5,6];

let combineArray = [...firstArray, ...secondArray];

for(let i = 0; i< combineArray.length; i++) {
    console.log(combineArray[i]);
}
