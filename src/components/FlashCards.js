import { useState } from 'react'

export default function FlashCards({studyWords, handleEndOfStudy}) {
    const maxLength = studyWords.length
    const [currentWordIndex, setWordCurrentIndex] = useState(0)
    const [showDefinition, setShowDefinition] = useState(false)


    return (
        <div>
            <h1>Current Word: {studyWords[currentWordIndex].word}</h1>
            { !showDefinition ? (
                <button onClick={() => setShowDefinition(true)}>Show Definition</button>
            ) : (
                <div>
                    <h3>Definition:</h3>
                    <p>{studyWords[currentWordIndex].definition}</p>
                    <br/>
                    <button onClick={() => {
                        if(currentWordIndex + 1 < maxLength) {
                            setShowDefinition(false)
                            setWordCurrentIndex(state => state + 1)
                        } else {
                            handleEndOfStudy()
                        }
                    }}>{currentWordIndex + 1 < maxLength ? 'Continue to next word' : 'Finish'}</button>
                </div>
            )}
        </div>
    )
}
