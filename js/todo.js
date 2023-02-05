const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    // saveToDos: toDos array의 내용 localStorage에 넣는 것
    // 입력되는 input.value들을 문자열로 바꿔서 저장
    localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));
}

function delteTodo(event) {
    // target: 클릭된 HTML element
    // 모든 HTML element에는 하나 이상의 property가 있고, 그 중
    // parentElement는 클릭된 element의 부모
    // todo: 화면에서 어떤 HTML의 element를 지워야하는지 알고 있음. but,
    // todo: 어떤 todo text를 데이터베이스에서 지워야하는지 모름.
    const li = event.target.parentElement;
    // console.log(typeof li.id);
    li.remove();
    // 22-10-21 삭제 id 지정하여 제거한 뒤, 다른 id 새 array로 되돌려 줄 것
    // 클릭했던 li의 id를 갖고 있는 toDo 지우기
    // = 클릭한 li.id와 다른 toDo 남기기
    // toDo = toDos DB에 있는 요소 중 하나
    // toDo.id = number, li.id = string
    // parseInt 사용해서 String인 li.id number(int)로 바꿔주기
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // toDos DB에서 todo 삭제 후 saveToDos 재호출
    saveToDos();
}

function paintToDo(newTodo) {
    // li태그 생성
    const li = document.createElement("li");
    // todo: 22-10-21 추가
    li.id = newTodo.id;
    // span 태그 생성
    const span = document.createElement("span");
    // span 텍스트 변경
    // todo 22-10-21
    // todo: newTodo'.text' 추가
    // todo: -> 객체(object)로 받아오기 때문에, 객체 안의 'text'를 불러와야 함.
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", delteTodo);

    // todo: .append는 맨 마지막에 놓여져야 함.
    // span 태그 li 내부에 생성(집어넣음)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // input의 value를 새로운 변수에 복사
    // input의 value를 비우기 전의 값을 나타내는 string
    const newTodo = toDoInput.value;
    // input 상자 비우기
    toDoInput.value = "";

    // todo : 22-10-20
    // toDos에 newTodo Array 저장(데이터베이스로 매번 사용자가 적어둔 text를 push)
    // toDos.push(newTodo);

    // todo : 22-10-21
    // todo : 데이터베이스에 text 저장이 아닌 object 저장하기
    const newTodoObj = {
        text: newTodo,
        // id로 각각의 li item 구별
        id: Date.now(),
    };

    toDos.push(newTodoObj);
    // todo : 22-10-20
    // input.value를 paintToDo에 넣어서 호출
    // paintToDo는 오직 text인 newTodo만 가지고 있음.
    // paintToDo(newTodo);
    // todo : 22-10-21
    // todo: paintToDo에 String으로 newTodo를 주는 대신, newTodoObj 줌.
    paintToDo(newTodoObj);

    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("This is the turn of", item);
// }
// 동일 => (item) => console.log("this is the turn of ", item)

// localStorage의 toDos 불러오기
const savedToDos = localStorage.getItem("TODOS_KEY");
console.log(savedToDos);
if (savedToDos !== null) {
    // localStorage의 value 사용가능한 JS object로 변환
    const parsedToDos = JSON.parse(savedToDos);
    // 비어있는 toDos 배열에 저장된 parsedToDos 배열 붙여넣어
    // 로그인 시 저장된 배열 불러오기
    toDos = parsedToDos;
    // item: parsedToDos에 있는 각각의 item에 대해 console.log한 것
    parsedToDos.forEach(paintToDo);
}

// function sexyFilter() {
//     // 새 array에도 1,2,3,4를 포함하고 싶다면
//     // sexyFilter 함수는 반드시 true를 리턴해야 함.
//     // false를 리턴하면 해당 item은 새 array에 포함되지 않을 것.

// }
