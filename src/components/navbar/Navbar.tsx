import { Link } from "react-router"

function Navbar() {
  return (
    <nav className="w-full absolute top-0 left-0 z-50">
      
      <div className="flex items-center justify-between px-10 py-5 bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20">

        <h1 className="text-white text-3xl font-bold">
          <Link to="/home" className="hover:text-gray-200 cursor-pointer transition">Farma Forte</Link>
        </h1>

        {/* Links */}
        <ul className="flex gap-8 text-white font-medium">
          <Link to="/home" className="hover:text-gray-200 cursor-pointer transition"> Início </Link>

          <Link to="/categoria" className="hover:text-gray-200 cursor-pointer transition">Categorias</Link>

          <Link to="/cadastrar" className="hover:text-gray-200 cursor-pointer transition">Cadastrar</Link>

          <Link to="/sobre" className="hover:text-gray-200 cursor-pointer transition">Sobre</Link>
        </ul>

      </div>

    </nav>
  )
}

export default Navbar