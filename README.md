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