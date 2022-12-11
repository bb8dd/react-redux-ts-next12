### TroubleShooting

* eslint react-proto types 
   * react 프로토 타입 지정 or eslint 룰 추가 
   * map vs forEach
      - 컴포넌트를 리턴할 때 forEach를 사용했었는데, map은 결과값을 반환하는 반면 forEach는 결과값을 반환하지는 않기 때문에 jsx내에서 forEach를 사용하요 컴포넌트를 리턴하였을 때 컴포넌트가 렌더링 되지 않았다.