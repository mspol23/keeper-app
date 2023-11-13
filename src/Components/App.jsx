import Heading from "./Heading/Heading";
import Footer from './Footer/Footer';
import Note from './Note/Note';
import notes from './data/notes'

function App() {
  return (
  <>
    <Heading />
    {
      notes.map(note => (
      <Note 
      key={note.key}
      title={note.title}
      content={note.content}
      />))
    }
    <Footer />
  </>
  )
}

export default App;
