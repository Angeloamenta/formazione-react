import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <div id='navbar' className='bg-black p-2.5 text-white flex gap-2'>
        <Link to="/" >Home</Link>
        <Link to="/esercizio-1" >Esercizio 1</Link>

        </div>
    )
}

export default Navbar