import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type Categoria from "../../model/Categoria";
import { buscar, cadastrar, atualizar } from "../../services/Service";

function Cadastrar() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    descricao: "",
    imagem: "",
    nivelprocura: 1,
  });

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setCategoria({
      ...categoria,
      [name]: name === "nivelprocura" ? Number(value) : value,
    });
  }

  async function buscarPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const novaCategoria = {
      id: categoria.id,
      nome: categoria.nome,
      descricao: categoria.descricao,
      imagem: categoria.imagem,
      nivelprocura: categoria.nivelprocura,
    };

    try {
      if (id !== undefined) {
        await atualizar(`/categoria/${id}`, novaCategoria, setCategoria);
        alert("Categoria atualizada!");
      } else {
        await cadastrar("/categoria", novaCategoria, setCategoria);
        alert("Categoria cadastrada!");
      }

      navigate("/categoria");
    } catch (error: any) {
      console.log(error.response?.data);
      alert("Erro ao processar categoria!");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-[#6357C3] to-[#3AB0CA]">
      <form
        onSubmit={gerarNovaCategoria}
        className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-450px"
      >
        <h1 className="text-white text-4xl font-bold mb-8 text-center">
          {id !== undefined ? "Atualizar Categoria" : "Cadastrar Categoria"}
        </h1>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            name="nome"
            placeholder="Nome da categoria"
            value={categoria.nome}
            onChange={atualizarEstado}
            className="p-4 rounded-xl outline-none bg-white text-gray-700"
            required
          />

          <textarea
            name="descricao"
            placeholder="Descrição"
            value={categoria.descricao}
            onChange={atualizarEstado}
            className="p-4 rounded-xl outline-none bg-white text-gray-700 h-32 resize-none"
            required
          />

          <input
            type="text"
            name="imagem"
            placeholder="URL da imagem"
            value={categoria.imagem}
            onChange={atualizarEstado}
            className="p-4 rounded-xl outline-none bg-white text-gray-700"
            required
          />

          <select
            name="nivelprocura"
            value={categoria.nivelprocura}
            onChange={atualizarEstado}
            className="p-4 rounded-xl outline-none bg-white text-gray-700"
          >
            <option value={1}>1 - Alto</option>
            <option value={2}>2 - Médio</option>
            <option value={3}>3 - Baixo</option>
          </select>

          <button
            type="submit"
            className="bg-white text-[#6357C3] py-3 rounded-xl font-bold text-lg hover:scale-105 transition"
          >
            {id !== undefined ? "Atualizar" : "Cadastrar"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cadastrar;