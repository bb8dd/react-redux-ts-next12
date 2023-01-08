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
   * constructor 메서드 생략 및 this 바인딩 생략
   * 클래스 상속 시 사용하는 super() 생략
   * 메소드 생성시에 화살표 함수 사용

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
    * React는 최초 rendering 될 때 모든 jsx코드와 함수들을 실행하고 값이나 함수가 변경되었을 때 Component를 다시 실행하라고 trigger하지 않기 때문에 state(상태)가 update되었음을 react에 알려주어야 함

  
  * App.js의 역할
    * Components Tree의 최상단으로 index.js에서 렌더링 될 때 최상단에 있는 App.js가 렌더링 됨
    * 렌더링 하고자 하는 컴포넌트들이 모임

  * React 규칙
    * Custom Element는 반드시 대문자로 시작해야 함
    * 소문자로 시작하는 element는 내부 HTML요소로 인식 함
    * index.js는 root Component를 위해 한번만 하는 작업
    * 반드시 1개의 root element만을 반환(return)해야 함 (JSX)
    ```js
    function foo() {
      return (
        <div>
          <div>title</div>
          <div>Date</div>
        </div>
      )
    }
    ```
      * 반드시 1개의 root element(wrapper)만을 반환해야 하는 이유
        - jsx코드는 사용자가 읽고 쓰기 간편하게 되어있지만 변환과정에서 React.createElemet()를 사용하여 html코드를 만들어 반환
        - 반환과정에서 각각의 요소로 취급되기 때문에 항상 wrppaer로 wrapping해주어서 반환해주어야 함
        ```js
        return React.createElemnet(
          'div', // 생성할 HTML 요소
          {items: expense}, // 속성
          React.createElement(
            'h2',
            {},
            'Title'
          ) // 요소 내부
        )
        ```

  * props.children
    * react의 예약어로 컴포넌트 내부에 있는 컴포넌트를 받아옴
    * children 속성은 기본적으로 props에서 존재함
    ```js
    function(props) {
      const children = props.children 
      console.log(children) // <div>title<div>

      return (
        <div>
          {children}
        <div>
      )
      // <div><div>title</div></div>
    }
    ```
  * React Hooks
    * `useState`
      ```js
      import { useState } from 'react'; // named import

      const foo = 'initState'; // 초깃값

      const [state, setState] = useState(foo); // useState hook은 배열형태로 초기값과 setState라는 function을 반환

      const updateState = () => {
        setState('updateState');
      }
      ```
      * 반드시 컴포넌트 내부에 선언되어야 함
      * setState는 state가 포함된 컴포넌트만을 업데이트한 후 리렌더링하도록 트리거 역할을 함
      * setState로 값을 업데이트할 때 바로 값을 바꾸지 않고 state의 업데이트를 예약하기 때문에 다음 줄에 conosle을 찍었을 때 업데이트 이전의 state가 찍힘
        ```js
        {data.map(((e) => (
          <ExpenseItem
            key={e.id}
            date={e.date}
            title={e.title}
            amount={e.amount}
          />
        )))}
        ```
      * 동일한 컴포넌트가 여러개 렌더링 되었더라도, 각각의 컴포넌트는 독립적인 state를 가짐
      * Why can use const ?
        - setState는 state값을 변경하는 것이 아니라, react모듈의 _value를 변경하고 컴포넌트를 리렌더링 시키는 역할을 하고 변경된 값은 useState가 가져옴
      * 초깃값은 최초 렌더링될 때만 고려됨

---

# Question

## JavaScript
  * 명령형 프로그래밍 vs 선언형 프로그래밍
    * 명령형 프로그래밍 - How에 집중
    * 선언형 프로그래밍 - 목적에 집중
  
  * const(상수)로 선언한 배열에 push와 pop이 작동하는 이유
    * pointer?

## React
  * 왜 useState를 작성할 때 const를 사용하여 선언했는데 값을 바꿀 수 있음?

  * setState로 리렌더링될 때 초깃값을 재할당하지 않는 이유
    * https://velog.io/@jjunyjjuny/React-useState%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8F%99%EC%9E%91%ED%95%A0%EA%B9%8C
    * 다시 인수를 useState에 전달하며 호출
    * useState는 내부적으로 _value값을 확인하고, undefined가 아닌 값(초깃값)이 할당되어 있기 때문에 초기값 할당문을 실행하지 않음
    * 이후 현재시점의 _value와 setState를 반환 
  
  * useState에 파라미터형식과 함수형 업데이트 방식의 차이점은 무엇?

## typescript
  * interface vs type alias 
    * 공통점
     - 타입 정의
    * 차이점
     - interface로 타입 정의를 할 경우 선언 병합이 가능

  * optional type, default props
   - ??? : optional type으로 타입 정의하고 optional parameter 쓰면 defaultProps 안 써도 되지 않나?
   - dan : ㅇㅇ defaultProps 이제 안 씀 (트위터)
    ```ts
    interface GreetProps = {
      age?: number;
    }

    const Greet = ({age = 21} : GreetProps) => {
      // empty
    }

## react + ts 
  * ReactNode vs. JSX.Element 그리고 ReactElement
    * ReactNode
      - ReactNode는 ReactElement를 비롯하여 대부분의 JS 데이터 타입을 아우르는 범용적인 타입 (Element계의 any)
      ```ts
      // index.d.ts
      type ReactNode = ReactElement | string | number | ReactFragment | ReactPortal | boolean | null | undefined;
      ```

---

# trobleShooting
  * reference error cannot access before initialization
    * TDZ 때문에 발생하는 오류
    ```
  * .tsx에서 날짜 데이터 받는 법
    - typeof로 타입검사 했을 떄 string으로 나오지만 useState가 실행되지 않았는데, 템플릿 리터럴(``)로 감싸서 전달해주니 잘 됨

