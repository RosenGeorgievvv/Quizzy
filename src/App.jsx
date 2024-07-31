import './App.css'
import Quizz from './components/Quizz'
import { reactQuizz } from './data'

function App() {


  return (
    <>
    <Quizz questions={reactQuizz.questions} />
    </>
  )
}

export default App
