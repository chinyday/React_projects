import React, { useState } from "react";

function AppMentors() {
  const [person, setPerson] = useState({
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
  });

  /*
  
  리액트의 State는 불변성을 유지해야 한다.
  전체적인 객체를 새롭게 만들어서 새롭게 참조값을 만들어줘야한다

  */

  const changeMentorName = () => {
    let prev = window.prompt("누구의 이름을 바꾸고 싶으신가요?");
    let curr = window.prompt("무엇으로 바꾸고 싶으신가요?");

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: curr };
        }
        return mentor;
      }),
    }));
  };

  const changeMentorTitle = () => {
    let prev = window.prompt("누구의 타이틀을 바꾸고 싶으신가요?");
    let curr = window.prompt("무엇으로 바꾸고 싶으신가요?");

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, title: curr };
        }
        return mentor;
      }),
    }));
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
      <button onClick={changeMentorName}>멘토 이름 바꾸기</button>
      <button onClick={changeMentorTitle}>멘토 타이틀 바꾸기</button>
    </>
  );
}

export default AppMentors;
