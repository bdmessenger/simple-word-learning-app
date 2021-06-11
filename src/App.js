import { useState } from 'react'
import WordForm from './components/WordForm'
import FlashCardModeSetup from './components/FlashCardModeSetup'
import FlashCards from './components/FlashCards'

function App() {
  const [flashCardModeSetup, setFlashCardModeSetup] = useState(false)
  const [flashCardMode, setFlashCardMode] = useState(false)
  const [words, setWords] = useState([])

  const [studyWords, setStudyWords] = useState([])

  const handleEndOfStudy = () => {
    setStudyWords([])
    setFlashCardMode(false)
    setFlashCardModeSetup(false)
  }

  return (
    <div>
      <h1>word learning app</h1>
      { flashCardModeSetup && <h2>Study</h2>}
      {!flashCardModeSetup && <WordForm words={words} setWords={setWords} setFlashCardModeSetup={setFlashCardModeSetup}/>}
      { !flashCardMode && flashCardModeSetup &&  (
        <FlashCardModeSetup words={words} setFlashCardMode={setFlashCardMode} setStudyWords={setStudyWords}/>
      )}
      { flashCardMode && <FlashCards studyWords={studyWords} handleEndOfStudy={handleEndOfStudy} />}
    </div>
  );
}

export default App;
