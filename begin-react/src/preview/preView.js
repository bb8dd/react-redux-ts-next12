// js class 생성
// ES6
// eslint-disable-next-line max-classes-per-file
// class Human {
//   // 생성자 키워드 constructor
//   constructor() {
//     this.name = 'lee';
//   }

//   // 메소드
//   printName() {
//     console.log(this.name);
//   }
// }

// // js class 상속
// class Person extends Human {
//   constructor() {
//     super(); // 클래스 상속 시 초기화 키워드로 필수
//     this.gender = 'male';
//   }

//   // 메소드
//   printGender() {
//     console.log(this.gneder);
//   }
// }

// ES7
// eslint-disable-next-line max-classes-per-file
class Human {
  name = 'lee';

  printName = () => {
    console.log(this.name);
  };
}

class Person extends Human {
  gender = 'male';

  printGender = () => {
    console.log(this.gender);
  };
}

const me = new Person(); // 인스턴스 생성

me.printGender(); // 'male'
me.printName(); // 'lee'
