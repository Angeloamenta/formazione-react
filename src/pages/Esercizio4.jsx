import {  useState } from "react";
import StampaEsercizio from "../components/StampaEsercizio"

// Extra
import { v4 as uuidv4 } from 'uuid';


const Esercizio4 = () => {

const [list, setList] = useState([])

const [title, setTitle] = useState ("")
const [note, setNote] = useState ("")
const [check, setCheck] = useState(false)


const handleChangeTitle = (e) => {
    setTitle(e.target.value)    
}

const handleChangeNote = (e) => {
    setNote(e.target.value)    
}


const addNote = () => {
    const newNote = {
        id: uuidv4(),
        title: title,
        note: note,
        check: check
    }
    
    setList([...list, newNote])    
}

const handleRemove = (id) => {
    console.log(id);
    
  setList(list.filter(item => item.id !== id));
}


const handleCheckChange = (id) => {
  setList(prevList =>
    prevList.map(item =>
      item.id === id ? { ...item, check: !item.check } : item
    )
  );
};
    return (
        <>
        <StampaEsercizio numero="4"/>
        <div>
            <h2 className="text-2xl mt-5 mb-10 *:">ToDoAct</h2>
        </div>
        <div className="todo-container">
            <div className=" flex w-50 flex-col gap-3">
                <input className="bg-white rounded-xl text-black p-1.5" value={title} onChange={handleChangeTitle} placeholder="titolo" type="text" />
                <textarea className="bg-white rounded-xl text-black p-1.5" value={note} onChange={handleChangeNote} placeholder="messaggio" type="text" />
                <button className="rounded-3xl bg-sky-600 p-2" onClick={addNote}>Aggiungi</button>
            </div>
            <div className="flex w-100">
                <ul>
                    {
                        list.map((element) => {
                            return (
                                <li className="w-100" key={element.id}> 
                                <div className="flex justify-between">
                                    <h2 className="text-2xl mt-5 mb-1">{element.title}</h2>
                                    <input type="checkbox"  checked={element.check}  onChange={() =>handleCheckChange(element.id)} id="" />
                                </div>
                                <div>
                                    <p>{element.note}</p>
                                  
                                </div>
                                <div>
                                    <button className="p-1 rounded-2xl bg-amber-800" onClick={() => handleRemove(element.id)}>Elimina</button>

                                </div>

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        </>
    )
}

export default Esercizio4