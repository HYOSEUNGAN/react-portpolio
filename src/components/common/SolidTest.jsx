import React from 'react'

// 리액트의 기초 solid 원칙
// 목적 : 나는 어떻게 컴포넌트를 나눌까? 
// 1. 하나의 컴포넌트는 하나의 일만 한다.
// 2. 컴포넌트는 다른 컴포넌트를 호출할 수 있다.
// SRP : Single Responsibility Principle
// 즉, SRP 원칙을 지킨다는 것은 컴포넌트를 설계할 때 “요구사항을 전달하는 책무 단위”로 설계한다는 것을 의미합니다.

// 각 부서에 요구사항을 전달하는 컴포넌트이다. 즉 요구사항에 유연하게 대처할 수 있는 컴포넌트.
// 중요한 것은 컴포넌트와 요구사항의 변경 범위가 최대한 같도록 설계하는 것입니다. 나는 이것이 모여야 아키텍처를 이룬다고 생각한다.
// 기획은 srp를 적용해서 컴포넌트를 나누고 그대로 기획서에 맞는 what 테스트코드를 작성
// UI는 디자인 시스템이 성숙하다면 매우 효율적인 커뮤니케이션을 가질 수 있다.
// 개발팀과 디자인팀이 합쳐서 디자인 시스템을 구축. 이것을 활용하면 공통컴포넌트, 아토믹디자인으로 개발까지 도입 가능
// 네이밍, variant, 마진, 패딩 모두가 포함됩니다. w

const SolidTest = () => {
  return (
    <div>
      
    </div>
  )
}

export default SolidTest


// const useTodoTasks = () => {
//   const [todoTasks, setTodoTasks] = useState();

//   useEffect(() => {
//     const tasks = getTodoTasks();
//     setTodoTasks(tasks);
//   }, []);

//   return { todoTasks };
// };

// 커스텀 훅도 한가지 원칙을 하도록
// UI(프레젠테이션)를 표시해야 하는 컴포넌트인가요? 아니면 데이터(로직)를 처리해야 하는 컴포넌트인가요?
// 이 훅은 어떤 단일 유형의 데이터를 처리해야 하나요?
// 이 훅이나 컴포넌트는 어떤 레이어에 속하나요? 데이터 저장소를 처리하는 건가요? 아니면 UI의 일부일까요?

// const useUser = () => {
//   const [user, setUser] = useState();

//   useEffect(() => {
//     const userInfo = getUser();
//     setUser(userInfo);
//   }, []);

//   return { user };
// };

// // 새로운 훅인 useAdmin은 useUser 훅을 확장하며,
// // 이메일을 업데이트하는 추가 기능을 제공합니다.
// const useAdmin = () => {
//   const { user } = useUser();

//   const updateEmail = newEmail => {
//     if (user) {
//       updateUser({ ...user, email: newEmail });
//     } else {
//       console.error('Cannot update email');
//     }
//   };

//   return { user, updateEmail };
// };