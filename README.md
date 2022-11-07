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