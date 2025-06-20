# 타입스크립트란?

## 타입스크립트는 왜 필요한가

- 자바스크립트 코드가 너무 지저분하다
- 코드의 스케일이 커지면서 코드 관리가 되지 않는다

## 타입스크립트를 사용하면 좋은 점

- 자바스크립트 기반보다 **버그를 줄일 수 있다.**
- **유지보수가 쉽다**
- 강력한 높은 퀄리티의 코드를 생산할 수 있다.

## 타입스크립트 = 자바스크립트 + 타입체크

- 타입스크립트 환경에 자바스크립트를 코딩하면 동작함
- 자바스크립트 환경에 타입스크립트를 코딩하면 동작 안함

⇒ 즉 타입스크립트 환경 안에 자바스크립트가 있다.

## 타입스크립트를 자바스크립트로 컴파일
```cmd
    tsc app.ts
```

app.js 라는 자바스크립트 파일이 생성

### 파일 실행
```cmd
    node app.js
```

### 타입스크립트를 자바스크립트로 자동 컴파일
```cmd
    tsc -w app.ts
```

### 타입스크립트 초기 셋팅 파일
```cmd
    tsc --init
```

tsconfig.json 파일 생성

## 왜 데이터 타입이 중요한가
- 자바스크립트의 변수에는 어떤 데이터 타입의 값도 할당될 수 있다.
- 자바스크립트는 이러한 문제를 사전에 막지 못한다.
```js
    let myname = 'lee';
    // 그런데 누군가가 myname을 실수로 변경할 수 있다
    let myname = 1;
```

## 타입 추론( Type Inference ) 기능
- 타입스크립트는 타입 추론 기능을 통해 변수의 타입을 자동으로 판단할 수 있다.
- 컴파일러가 초기에 할당된 값을 바탕으로 변수의 타입을 추론
- 코드를 간결하게 작성할 수 있도록 도와주지만 명시적으로 지정하는 것이 더 명확
- 모호한 경우나 복잡한 로직에서는 타입을 명시하는 것이 좋다.
 
---

## 데이터 타입의 종류
- 타입스크립트에서는 다양한 데이터 타입을 지원
- 데이터 타입은 크게 기본 데이터 타입, 객체 타입, 특수 타입으로 나눌 수 있음
- 기본 데이터 타입
  - number: 숫자 타입, 정수와 실수 포함
  - string: 문자열 타입
  - boolean: 참, 거짓을 나타내는 불리언 타입
  - null: 값이 없음을 나타내는 타입
  - undefined: 값이 할당되지 않는 변수의 기본값인 타입
- 객체 타입
  - object: 객체를 나타내는 타입
  - array: 동일한 타입의 요소를 가진 배열을 나타내는 타입
  - tuple: 각 요소가 다른 타입을 가질 수 있는 배열을 나타내는 타입
- 특수타입
  - any: 어떠한 타입이든 할당될 수 있는 타입
  - unknown: 타입을 미리 알 수 없는 경우 사용되는 타입 

## 타입 명시
- 변수를 선언할 때 변수 값의 타입을 명시함으로써 변수의 데이터 타입을 지정

```ts
    let x : string = "나는 문자열이다!";
```

---

## Interface

```ts
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
```
오브젝트의 타입을 정의하는 interface 는 보통 명에 'I' 를 포함시켜서 만드는 규칙이 있다.

ex)

```ts
interface IStudent { // Student가 아니라 IStudent
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
```


## 열거형 : 사용자 정의 타입
```ts
enum GenderType {
    Male, // 0
    Famale // 1
}
```

열거형 enum에는 문자나 특정 값을 정하는 것도 가능하지만, 특정 값을 정하지 않으면 0부터 숫자가 차례로 들어간다

ex)
```ts
enum GenderType {
    Male = 'male', 
    Famale = 'falmale'
}

```

---

# 객체 리터럴
- 리터럴 타입은 특정 값을 나타내는 타입으로 해당 값이 정확하게 일치해야 함. 사용되는 리터럴 타입에는 다양한 종류가 있음


- 문자열 리터럴 타입
```ts
  let status: 'success' | 'error'
  status = 'success'; // 유효
  status = 'pending'; // Error : 'pending'은 허용 X
 ```

 - 숫자 리터럴 타입
```ts
  let speed: 50 | 100 | 200;
  speed = 100; // 유효
  speed = 150; // Error
```

- 불리언 리터럴 타입
```ts
  let isTrue: true;
  isTrue = true; // 유효
  isTrue = false; // Error
```

- 객체 리터럴 타입 ( 제일 많이 사용 )
```ts
  let person: {name: 'John', age: 30};
  person = {name: 'John', age: 30}; // 유효
  person = {name: 'Alice', age: 25}; // Error
```

- 타입 별칭
```ts
  type CardinalDirection = 'North' | 'East' | 'South' | 'West';
  let direction: CardinalDirection;
  direction = 'North'; // 유효
  direction = 'Northeast; // Error
```

## 리터럴 타입을 사용하면 좋은 점
- 코드의 가독성을 높인다.
- 잘못된 값이 들어오는 것을 방지한다.