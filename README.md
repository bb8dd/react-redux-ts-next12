# javaScript Refresh

* export, import
 * export default와 export의 차이점
   - export시 default를 사용한 경우
   ```
   // foo.js
   export default function foo() {}

   // bar.js
   import f from 'foo.js' === import foo from 'foo.js'
   ```
   - export만 사용한 경우
   ```
   //foo.js
   export frunction foo() {}
   export const bar = () => {}

   //baz.js 
   import {foo, bar} from 'foo.js'
   import * as fb from 'foo.js'
   import {foo as f } from 'foo.js'
   // 전부 같은 거임
   ```

* class 
 * 생성자 함수와 유사함
 * 상속할 수 있음
 * ES6 => ES7 변한 점
   - constructor 메서드 생략 및 this 바인딩 생략
   - 클래스 상속 시 사용하는 super() 생략
   - 메소드 생성시에 화살표 함수 사용

* spread 연산자, rest 연산자
 * 어디에서 사용하는 지에 따라 spread와 rest로 나뉨
  - array or Object : spread
  - arguments : rest

* 구조분해할당(Destructuring)
  * Array
    ```
    const numbers = [1, 2, 3];
    const [a, , c] = numbers;
    const [d, e] = numbers;
    console.log(a, c) // 1, 3
    console.log(d, e) // 1, 2
    ```
  * Object
    ```
    const person = {
      name : 'bb8dd',
      age : 14,
    }
    const { name, age } = person;
    console.log(name, age); // bb8dd, 14
  
  * 기본형과 참조형 데이터
   * 기본형
    - string, boolean, number ..
   * 참조형
    - array, object
    - 참조형 데이터 타입은 복사할 때 객체의 프로퍼티나 요소를 복사하는 것이 복사본을 만드는 것
    - 이미 만들어진 참조형 타입의 데이터를 할당 할 경우 포인터를 복사하기 때문에 할당한 데이터가 변경되면 할당 받은 변수도 데이터값이 변함
    ```
    const person = {
      name : 'bb8dd',
    }
    const person2 = person
    const person3 = {
      ...person
    }

    person.name = 'dd8bb'

    console.log(person2.name, person3.name); // 'dd8bb', 'bb8dd'
    ```
  * 배열 새로고침 메서드(배열을 리턴하는 메서드, 불변성)
    * map, filter, concat ...
  
  * promise, async await, try catch, optional paramter



  * reference error cannot access before initialization
    * TDZ 때문에 발생하는 오류

  * interface vs type alias 
    * 공통점
     - 타입 정의
    * 차이점
     - interface로 타입 정의를 할 경우 선언 병합이 가능

  * optional type 설정