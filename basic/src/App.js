import './App.css';

function App() {

  const name = 'chinyday'
  const milks = ['초코', '딸기', '바나나', '커피']

  return (
    <>
      <h3>{`Hello, ${name}`}</h3>
      {/* 화살표 함수, 리턴 사용x*/}
      <ul>
        {
          milks.map(item => <li>{item}</li>)
        }
      </ul>
      {/* 화살표 함수, 리턴 사용o */}
      <ul>{
        milks.map(item => { return <li>{item}</li> })
      }</ul>
      {/* function 함수 */}
      <ul>{
        milks.map(function (item) {
          return <li>{item}</li>
        })
      }</ul>
    </>
  );
}

export default App;
