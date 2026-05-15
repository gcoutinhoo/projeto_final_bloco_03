function Cadastrar() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-[#6357C3] to-[#3AB0CA]">

      <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-450px">

        <h1 className="text-white text-4xl font-bold mb-8 text-center">
          Cadastrar Categoria
        </h1>

        <div className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Nome da categoria"
            className="p-4 rounded-xl outline-none bg-white text-gray-700"
          />

          <textarea
            placeholder="Descrição"
            className="p-4 rounded-xl outline-none bg-white text-gray-700 h-32 resize-none"
          />

          <input
            type="text"
            placeholder="URL da imagem"
            className="p-4 rounded-xl outline-none bg-white text-gray-700"
          />

          <select
            className="p-4 rounded-xl outline-none bg-white text-gray-700"
          >
            <option value="">
              Selecione o nível de procura
            </option>

            <option value="1">
              1 - Alto
            </option>

            <option value="2">
              2 - Médio
            </option>

            <option value="3">
              3 - Baixo
            </option>
          </select>

          <button
            className="bg-white text-[#6357C3] py-3 rounded-xl font-bold text-lg hover:scale-105 transition"
          >
            Cadastrar
          </button>

        </div>

      </div>

    </div>
  )
}

export default Cadastrar