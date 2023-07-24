import { useRecoilValue } from 'recoil';
import { charCountState } from '../App'

export function CharacterCount() {
  // useRecoilValue() - 전역 상태의 state 상태 값만을 참조하기 위해 사용
  // 선언된 변수에 할당하여 사용하면 된다.
  const count = useRecoilValue(charCountState);
  return (
    <div>
      CharacterCount: {count}
    </div>
  )
}
