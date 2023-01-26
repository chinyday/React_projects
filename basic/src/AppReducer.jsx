import React, { useReducer } from "react";
import personReducer from "./reducer/person-reduer";

function AppReducer() {
  const [person, dispatch] = useReducer(personReducer, init);

  const handleUpdataMentorName = () => {
    let prev = window.prompt("누구의 이름을 바꾸고 싶으신가요?");
    let curr = window.prompt("무엇으로 바꾸고 싶으신가요?");
    dispatch({ type: "uadated", prev, curr });
  };

  const handleAdd = () => {
    let name = window.prompt("이름의 무엇인가요?");
    let title = window.prompt("타이틀은 무엇인가요?");
    dispatch({ type: "added", name, title });
  };

  const handleDelet = () => {
    let name = window.prompt("누구를 삭제하고 싶으신가요?");
    dispatch({ type: "deleted", name });
  };

  return (
    <>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <h3>{person.name}의 멘토는 :</h3>
      <ul>
        {person.mentors.map((person, i) => (
          <li key={i}>
            {person.name} ({person.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdataMentorName}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelet}>멘토 삭제하기</button>
    </>
  );
}

export default AppReducer;

const init = {
  name: "엘리",
  title: "주니어개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};

/*

useReducer? 

상태를 업데이트 할 때에는 useState 를 사용해서 새로운 상태를 설정해주었는데,
상태를 관리하게 될 때 useState 말고 useReducer 를 사용 가능하다. 
이 Hook 함수를 사용하면 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있다. 
상태 업데이트 로직을 컴포넌트 바깥에 작성 할 수도 있고, 심지어 다른 파일에 작성 후 불러와서 사용 할 수도 있다.

personReducer는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환하는 함수
action 은 업데이트를 위한 정보 (주로 type 값을 지닌 객체 형태로 사용하지만, 꼭 따라야 할 규칙은 따로 없다)

useReducer 에 넣는 첫번째 파라미터는 함수이고 (여기서는 personReducer를 가르키고 있음), 두번째 파라미터는 초기 상태

*/
