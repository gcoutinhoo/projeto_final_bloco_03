import { Link } from "react-router-dom"

import ListaCategoria from "../../components/categorias/listacategoria/ListaCategoria"

function Categoria() {

  return (

    <div className="min-h-screen bg-linear-to-r from-[#6357C3] to-[#3AB0CA] p-10">


      <div className="flex items-center justify-between mt-10">

        <h1 className="text-white text-6xl font-bold">
          Categorias
        </h1>

        <Link to="/cadastrar">

          <button className="bg-white text-[#6357C3] px-6 py-3 rounded-xl font-bold hover:scale-105 transition">
            Nova Categoria
          </button>

        </Link>

      </div>

      <ListaCategoria />

    </div>

  )
}

export default Categoria