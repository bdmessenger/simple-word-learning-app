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
      <div style={{borderBottom: '1px solid', padding: 4, maxWidth: '500px'}}>
        <h1>Word Learning App {flashCardModeSetup && <span>- Study Mode</span>}</h1>
      </div>
      {!flashCardModeSetup && <WordForm words={words} setWords={setWords} setFlashCardModeSetup={setFlashCardModeSetup}/>}
      { !flashCardMode && flashCardModeSetup &&  (
        <FlashCardModeSetup words={words} setFlashCardMode={setFlashCardMode} setStudyWords={setStudyWords}/>
      )}
      { flashCardMode && <FlashCards studyWords={studyWords} handleEndOfStudy={handleEndOfStudy} />}
    </div>
  );
}

export default App;
