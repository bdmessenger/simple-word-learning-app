import { useState } from 'react'

export default function FlashCardModeSetup({words, setFlashCardMode, setStudyWords}) {
    const [checkedInputs, setCheckedInputs] = useState(Array.from({length: words.length}, (_,i) => false))

    const handleCheckedChange = index => {
        setCheckedInputs(state => [...state.map((input, i) => index === i ? !input : input)])
    }

    const handleSubmit = e => {
        e.preventDefault()
        setStudyWords([...words.filter((_,i) => checkedInputs[i])])
        setFlashCardMode(true)
    }

    return (
        <div>
            <h3>Select word(s) to study</h3>
            <form onSubmit={handleSubmit}>
                { words.map(({word}, i) => (
                    <div key={i}>
                    <input type="checkbox" value={word} checked={checkedInputs[i]} onChange={() => handleCheckedChange(i)}/>
                    <label htmlFor={word}>{word}</label>
                    </div>
                ))}
                <br/>
                <button type="submit" disabled={!checkedInputs.some(input => input)}>Continue</button>
            </form>
        </div>
    )
}
