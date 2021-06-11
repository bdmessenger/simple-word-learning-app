import { useState } from 'react'

export default function WordForm({words, setWords, setFlashCardModeSetup}) {
    const [currentWord, setCurrentWord] = useState('')
    const [isFetching, setIsFetching] = useState(false)
    const [message, setMessage] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage(null)
        setIsFetching(true)

        const wordValue = currentWord.trim().toLowerCase()

        if(wordValue) {
            try {
                const res = await fetch(`https://kettle-assess.glitch.me/definition?word=${wordValue}`)

                const { definition, word, error} = await res.json()

                if(!error) {
                    setMessage(`the word "${word}" has been added.`)
                    setWords(state => !state.find(wordObj => wordObj.word === wordValue) ? [...state, {word, definition}] : state)
                    setCurrentWord('')
                } else {
                    setMessage(`the word "${word}" couldn't be added.`)
                }

                setIsFetching(false)
            } catch (err) {
                console.log(err)
                setMessage("Something went wrong. Make sure it's a single word and not multiple words.")
                setIsFetching(false)
            }
        } else {
            console.log('Missing Input Value')
            setMessage('Missing input value.')
            setIsFetching(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add a word to study:</h2>
                <input type="text" disabled={isFetching} value={currentWord} onChange={(e) => {
                    setMessage(null)
                    setCurrentWord(e.target.value)
                }}/>
                <button disabled={isFetching} type="submit">Add New Word</button>
            </form>
            { message && <div>{message}</div>}

            { words.length > 0 && <button style={{marginTop: '15px'}} disabled={isFetching} onClick={() => setFlashCardModeSetup(true)}>Start Flash Card Mode</button> }
        </div>
    )
}
