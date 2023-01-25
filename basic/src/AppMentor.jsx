import React, { useState } from "react";

function AppMentor() {
  const [person, setPerson] = useState({
    name: "엘리",
    title: "주니어개발자",
    mentor: {
      name: "밥",
      title: "시니어개발자",
    },
  });

  const changeMentorName = () => {
    let name = window.prompt("멘토 이름 바꾸기");

    setPerson((person) => ({
      ...person,
      mentor: { ...person.mentor, name },
    }));
  };

  const changeMentorTitle = () => {
    let title = window.prompt("멘토 타이틀 바꾸기");

    setPerson((person) => ({
      ...person,
      mentor: { ...person.mentor, title },
    }));
  };

  return (
    <>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <h3>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </h3>
      <button onClick={changeMentorName}>멘토 이름 바꾸기</button>
      <button onClick={changeMentorTitle}>멘토 타이틀 바꾸기</button>
    </>
  );
}

export default AppMentor;
