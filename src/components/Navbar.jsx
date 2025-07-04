import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <div id='navbar' className='navbar bg-gray-900 p-2.5 text-white flex gap-2'>
        <Link className='hover:bg-purple-800 rounded-4xl p-1' to="/" >Home</Link>
        <Link className='hover:bg-purple-800 rounded-4xl p-1' to="/esercizio-1" >Esercizio 1</Link>
        <Link className='hover:bg-purple-800 rounded-4xl p-1' to="/esercizio-2" >Esercizio 2</Link>
        <Link className='hover:bg-purple-800 rounded-4xl p-1' to="/esercizio-3" >Esercizio 3</Link>
        <Link className='hover:bg-purple-800 rounded-4xl p-1' to="/esercizio-4" >Esercizio 4</Link>




        </div>
    )
}

export default Navbar