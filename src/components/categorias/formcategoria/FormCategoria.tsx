import { useState, type ChangeEvent } from "react"
import { cadastrar } from "../../../services/Service"
import type Categoria from "../../../model/Categoria"

function FormCategoria() {

  const [categoria, setCategoria] =
    useState<Categoria>({
      id: 0,
      nome: "",
      descricao: "",
      imagem: "",
      nivelprocura: 1
    })

  function atualizarEstado(
  e: ChangeEvent<
    HTMLInputElement |
    HTMLTextAreaElement |
    HTMLSelectElement
  >
) {
  setCategoria({
    ...categoria,
    [e.target.name]: e.target.value
  })
}


  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {

    e.preventDefault()

    await cadastrar(
      "/categoria",
      categoria,
      setCategoria
    )

    alert("Categoria cadastrada!")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-[#6357C3] to-[#3AB0CA]">

      <form
        onSubmit={gerarNovaCategoria}
        className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-500px flex flex-col gap-5">

        <h1 className="text-white text-4xl font-bold text-center">
          Cadastrar Categoria
        </h1>

        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={categoria.nome}
          onChange={atualizarEstado}
          className="p-4 rounded-xl outline-none"
        />

        <textarea
          name="descricao"
          placeholder="Descrição"
          value={categoria.descricao}
          onChange={atualizarEstado}
          className="p-4 rounded-xl outline-none"
        />

        <input
          type="text"
          name="imagem"
          placeholder="Imagem"
          value={categoria.imagem}
          onChange={atualizarEstado}
          className="p-4 rounded-xl outline-none"
        />

        <select
          name="nivelProcura"
          value={categoria.nivelprocura}
          onChange={atualizarEstado}
          className="p-4 rounded-xl outline-none"
        >
          <option value={1}>1 - Alto</option>

          <option value={2}>2 - Médio</option>

          <option value={3}>3 - Baixo</option>
        </select>

        <button
          type="submit"
          className="bg-white text-[#6357C3] py-4 rounded-xl font-bold"
        >
          Cadastrar
        </button>

      </form>
    </div>
  )
}

export default FormCategoria