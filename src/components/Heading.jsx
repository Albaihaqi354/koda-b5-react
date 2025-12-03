import { Link } from 'react-router'

function Heading({title}) {
  return (
    <>
        <header className="p-10 h-[15vh] bg-[#6DC3BB] font-bold select-none flex justify-between items-center">
            <h1 className="font-sans font-black text-3xl">{title}</h1>
            <nav className="flex justify-center">
            <ul className="flex gap-7 text-[25px]">
                <li className=' text-black hover:text-amber-50'>
                <Link to={"/Home"}>Home</Link>
                </li>
                <li className=' text-black hover:text-amber-50'>
                <Link to={"/Product"}>Product</Link>
                </li>
                <li className=' text-black hover:text-amber-50'>
                <Link to={"/Rick"}>RickAndMorty</Link>
                </li>
            </ul>
            </nav>
        </header>
    </>
  )
}

export default Heading
