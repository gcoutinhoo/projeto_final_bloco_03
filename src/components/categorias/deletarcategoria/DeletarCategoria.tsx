import { deletar } from "../../../services/Service"

interface DeleteCategoriaProps {
  id: number
}

function DeleteCategoria({
  id
}: DeleteCategoriaProps) {

  async function deletarCategoria() {

    try {

      await deletar(`/categoria/${id}`)

      alert("Categoria apagada com sucesso!")

    } catch (error) {

      alert("Erro ao apagar categoria!")

    }
  }

  return (
    <button
      onClick={deletarCategoria}
      className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-xl transition">
      Deletar
    </button>
  )
}

export default DeleteCategoria