import { atom, selector } from "recoil";
import { TextInput } from "./components/TextInput";
import { CharacterCount } from "./components/CharacterCount";

// Atom은 상태(state)의 일부를 나타낸다. 어떤 컴포넌트에서나 읽고 쓸 수 있다.
// atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독한다. 그래서 atom에 어떤 변화가 있으면
// 그 atom을 구독하는 모든 컴포넌트들이 다시 렌더링 된다.
export const textState = atom({
  key: 'textState',  // 고유 key
  default: '',       // 초기 값
});

// Selector는 atom 혹은 다른 selector의 상태를 입력 받아 동적인 데이터를 반환하는 순수 함수이다.
// selector가 참조하던 다른 상태가 변경되면 이도 같이 업데이트 되며, 이때 selector를 바라보던 컴포넌트들이 다시 렌더링 된다. 
export const charCountState = selector({
  key: 'charCountState', 
  get: ({get}) => {
    const text = get(textState);
    return text.length;
  },
});

export default function App() {
  return (
    <div className="App" style={{padding: '20px'}}>
      <TextInput />
      <CharacterCount />
    </div>
  );
}
