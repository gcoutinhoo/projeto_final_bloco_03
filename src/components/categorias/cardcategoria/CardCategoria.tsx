import { useState } from "react";
import type Categoria from "../../../model/Categoria";
import { atualizar } from "../../../services/Service";
import { PencilSimpleIcon } from "@phosphor-icons/react";
import DeleteCategoria from "../deletarcategoria/DeletarCategoria";

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  const [modal, setModal] = useState(false);

  const [categoriaEditada, setCategoriaEditada] =
    useState<Categoria>(categoria);

  function atualizarEstado(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setCategoriaEditada({
      ...categoriaEditada,
      [name]: name === "nivelProcura" ? Number(value) : value,
    });
  }

  async function atualizarCategoria() {
    try {
      await atualizar(
        `/categoria/${categoriaEditada.id}`,
        categoriaEditada,
        () => {}
      );

      alert("Categoria atualizada!");
      setModal(false);
      window.location.reload();
    } catch (error) {
      alert("Erro ao atualizar!");
    }
  }

  return (
    <>
      <div className="h-125 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        <img
          src={categoria.imagem}
          alt={categoria.nome}
          className="w-full h-52 object-cover"
        />

        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-3">
            {categoria.nome}
          </h2>

          <p className="text-lg opacity-90 mb-5">
            {categoria.descricao}
          </p>

          <span className="bg-white text-[#6357C3] px-4 py-2 rounded-xl font-bold">
            Nível de Procura: {categoria.nivelprocura}
          </span>
          
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setModal(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl transition flex items-center gap-2"
            >
              <PencilSimpleIcon size={22} />
              Editar
            </button>

            {categoria.id && (
              <DeleteCategoria id={categoria.id} />
            )}
          </div>
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white w-500px rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-[#6357C3] mb-6">
              Editar Categoria
            </h2>

            <div className="flex flex-col gap-5">
              <input
                type="text"
                name="nome"
                value={categoriaEditada.nome}
                onChange={atualizarEstado}
                placeholder="Nome"
                className="p-4 rounded-xl border"
              />

              <textarea
                name="descricao"
                value={categoriaEditada.descricao}
                onChange={atualizarEstado}
                placeholder="Descrição"
                className="p-4 rounded-xl border h-32"
              />

              <input
                type="text"
                name="imagem"
                value={categoriaEditada.imagem}
                onChange={atualizarEstado}
                placeholder="Imagem"
                className="p-4 rounded-xl border"
              />

              <select
                name="nivelProcura"
                value={categoriaEditada.nivelprocura}
                onChange={atualizarEstado}
                className="p-4 rounded-xl border"
              >
                <option value={1}>1 - Alto</option>
                <option value={2}>2 - Médio</option>
                <option value={3}>3 - Baixo</option>
              </select>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={atualizarCategoria}
                  className="bg-[#6357C3] hover:bg-[#5144b6] text-white font-bold px-6 py-3 rounded-xl transition"
                >
                  Salvar
                </button>

                <button
                  onClick={() => setModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-black font-bold px-6 py-3 rounded-xl transition"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardCategorias;
