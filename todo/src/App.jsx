import './App.css';
import TodoList from './components/TodoList/TodoList'

function App() {

  /*
  
  - 투두앱 만들기 
  
    1. 전체 할일 리스트 출력
    2. 할일 삭제 
    3. 할일 추가
    4. 할일 체크박스 (완료료 변경)
    5. 필터링 (전체, 완료, 진행중)
    6. 다크모드 
    7. 로컬 저장

  */
 
  return (
    <div>
      <h1>todo</h1>
      <TodoList />
    </div>
  );
}
export default App;
