// 변수의 데이터 타입 명시
var stdId = 1111;
var stdName = 'lee';
var age = 20;
var gender = 'male';
var course = 'Typescript';
var completed = false;
// 열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Male"] = 0] = "Male";
    GenderType[GenderType["Famale"] = 1] = "Famale";
})(GenderType || (GenderType = {}));
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'lee',
        age: 20,
        gender: GenderType.Famale,
        course: 'javascript',
        completed: true,
    };
}
function setInfo(Student) {
}
console.log(getInfo(5678));
// 컴파일 에러 - syntax 에러 (문법적인 에러)
// 함수의 데이터 타입 명시 (매개변수, 리턴타입)
// function plus(a: number, b: number) : number {
//     return a + b;
// }
// any 타입은 어떤 타입이든 OK
var anyVal = 100;
anyVal = 'kim';
var numStr = '100';
var item;
function convertToString(val) {
    if (typeof val === 'string') {
        item = 0;
    }
    else {
        item = val;
    }
    return String(val);
}
function convertToNumber(val) {
    return Number(val);
}
console.log(convertToString(numStr));
console.log(convertToNumber(numStr));
