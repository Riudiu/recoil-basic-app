import { useRecoilValue } from 'recoil';
import { charCountState } from '../App'

export function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return (
    <div>
      CharacterCount: {count}
    </div>
  )
}
