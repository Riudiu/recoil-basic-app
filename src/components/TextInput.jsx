import React from 'react'
import { useRecoilState } from 'recoil'
import { textState } from '../App'

export function TextInput() {
    // useRecoilState() - useState()와 유사하며, [state, useState] 튜플을 반환
    // 인자에 Atom 혹은 Selector를 넣어준다.
    const [text, setText] = useRecoilState(textState);
    const onChange = (event) => {
        setText(event.target.value);
    }
    return (
        <div>
            <input type='text' value={text} onChange={onChange} />
            <br/><br/>
            Echo: {text}
        </div>
    )
}
