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
function plus(a, b) {
    return a + b;
}
