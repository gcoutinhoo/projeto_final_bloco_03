function Navbar() {
  return (
    <nav className="w-full absolute top-0 left-0 z-50">
      
      <div className="flex items-center justify-between px-10 py-5 bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20">

        <h1 className="text-white text-3xl font-bold">
          Farma Forte
        </h1>

        {/* Links */}
        <ul className="flex gap-8 text-white font-medium">
          <li className="hover:text-gray-200 cursor-pointer transition">
            Início
          </li>

          <li className="hover:text-gray-200 cursor-pointer transition">
            Categoria
          </li>

          <li className="hover:text-gray-200 cursor-pointer transition">
            Contato
          </li>

          <li className="hover:text-gray-200 cursor-pointer transition">
            Sobre
          </li>
        </ul>

      </div>

    </nav>
  )
}

export default Navbar