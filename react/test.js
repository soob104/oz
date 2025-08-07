// 문제1. 아래 코드에서 JSX 문법 오류를 모두 찾아 수정해주세요. 오류는 총 3개가 있습니다. 
// 오른쪽 페이지 새로고침을 누르면 결과가 반영됩니다.
function App() {
  let count = 3;
  return (
    <>
      <h1>React는 JSX 문법을 사용합니다. </h1>
      <p>총 3가지 오류가 있어요. </p>
      <p>자바스크립트 요소를 사용하려면 </p>
      <p> count+count = {count + count} 이렇게 하면 됩니다.</p>
    {/* count + count = 6 이렇게 나와야합니다.*/}
    </>
);
}

export default App;
