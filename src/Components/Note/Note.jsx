import './Note.css';
import note from '../data/notes';

function Note({content, title}) {
    return (
        <main className='note'>
            <div >
                <h1> {title} </h1>
                <p> {content} </p>
            </div>
        </main>
    )
}

export default Note;