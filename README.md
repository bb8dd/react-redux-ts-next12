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

---

# React
  * Why Componets ? 
    * 재사용성
    * 분리성 ( 작은 단위로 관리할 수 있음 )
    * HTML + JS + CSS로 결합된 재사용 가능한 컴포넌트를 만듦
    * 선언적 접근 방식을 사용(선언형 프로그래밍)

  * SPA(Single Page Application)
   - 하나의 HTML(index.html)만을 사용

  * index.js
    * 실행 시 가장 먼저 실행되는 파일
    * createRoot : React에서 렌더링할 곳 고르는 메서드
    * render : 말 그대로 렌더링 함 {렌더링할 곳.render(element)}

  * JSX
    * javascript의 확장 문법
    * element를 사용할 수 있음
    * React는 JSX를 사용하여 개발자가 작성하기 쉽고 브러우저가 이해할 수 있는 코드로 변환해줌
    * 개발자 도구 soruce에서 변환된 코드를 확인할 수 있음
    * 변환된 코드들은 개발자가 작성한 코드뿐만 아니라, 전체 리액트 패키지를 변환한 것

  * React 작동 방식
    * 선언형 프로그래밍 방식으로 작동
    * 일반적인 javascript는 명령형으로 단계별로 지시(element 생성 => 추가할 곳 선택 => 추가)를 내려야 하는 반면, 리액트는 최종상태를 정의하여 위치에 선언하는 방식으로 컴포넌트 개념을 채택함 
  
  * App.js의 역할
    * Components Tree의 최상단으로 index.js에서 렌더링 될 때 최상단에 있는 App.js가 렌더링 됨
    * 렌더링 하고자 하는 컴포넌트들이 모임

  * React 규칙
    * Custom Element는 반드시 대문자로 시작해야 함
    * 소문자로 시작하는 element는 내부 HTML요소로 인식 함
    * index.js는 root Component를 위해 한번만 하는 작업
    * 반드시 1개의 root element만을 반환(return)해야 함 
    ```jsx
    function foo() {
      return (
        <div>
          <div>title</div>
          <div>Date</div>
        </div>
      )
    }
    ```

---

# Question

## JavaScript
  * 명령형 프로그래밍 vs 선언형 프로그래밍
    *

## React
  * 왜 useState를 작성할 때 const를 사용하여 선언했는데 값을 바꿀 수 있음?

  
  * useState에 파라미터형식과 함수형 업데이트 방식의 차이점은 무엇?

## typescript
  * interface vs type alias 
    * 공통점
     - 타입 정의
    * 차이점
     - interface로 타입 정의를 할 경우 선언 병합이 가능

  * optional type, default props
    ??? : optional type으로 타입 정의하고 optional parameter 쓰면 defaultProps 안 써도 되지 않나?
    dan : ㅇㅇ defaultProps 이제 안 씀 (트위터)
    ```ts
    interface GreetProps = {
      age?: number;
    }

    const Greet = ({age = 21} : GreetProps) => {
      // empty
    }

---

# trobleShooting
  * reference error cannot access before initialization
    * TDZ 때문에 발생하는 오류
    ```