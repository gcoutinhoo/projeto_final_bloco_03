import { useEffect, useState } from "react"
import { buscar } from "../../../services/Service"
import type Categoria from "../../../model/Categoria"
import CardCategorias from "../cardcategoria/CardCategoria"

function ListaCategoria() {

  const [categorias, setCategorias] = useState<Categoria[]>([])

  async function buscarCategorias() {
    await buscar("/categoria", setCategorias)
  }

  useEffect(() => {
    buscarCategorias()
  }, [])

  return (
    <div className="min-h-screen bg-linear-to-r from-[#6357C3] to-[#3AB0CA] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10">

      {categorias.map((categoria) => (
        <CardCategorias
          key={categoria.id}
          categoria={categoria}
        />
      ))}

    </div>
  )
}

export default ListaCategoria