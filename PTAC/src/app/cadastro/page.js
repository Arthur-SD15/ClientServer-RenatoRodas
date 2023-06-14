"use client";
import { useState } from "react";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";

export default function Cadastro() {
  const route = useRouter();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [details, setDetails] = useState();
  const [imageurl, setImageURL] = useState();
  const [date_register, setDate] = useState();

  const cadastrar = (e) => {
    e.preventDefault();

    const produto = {
      title: title,
      price: price,
      details: details,
      imageurl: imageurl,
      date_register: date_register,
    };

    const produtoJson = JSON.stringify(produto);
    fetch("http://localhost:3003/produto", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: produtoJson,
    })
      .then(function () {
        route.push("/");
      })
      .catch(() => console.log("Não foi possível cadastrar!"));
  };

  return (
    <form onSubmit={cadastrar} class="p-4">
      <input
        type="text"
        placeholder="Titulo:"
        name="titulo"
        onChange={(e) => setTitle(e.target.value)}
        class="mb-2"
      />
      <br />
      <input
        type="text"
        placeholder="Preço:"
        name="preco"
        onChange={(e) => setPrice(e.target.value)}
        class="mb-2"
      />
      <br />
      <input
        type="text"
        placeholder="Detalhes:"
        name="detalhes"
        onChange={(e) => setDetails(e.target.value)}
        class="mb-2"
      />
      <br />
      <input
        type="text"
        placeholder="URL da imagem:"
        name="image"
        onChange={(e) => setImageURL(e.target.value)}
        class="mb-2"
      />
      <br />
      <input
        type="text"
        placeholder="Data de registro:"
        name="date_register"
        onChange={(e) => setDate(e.target.value)}
        class="mb-2"
      />
      <br />
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Cadastrar
      </button>
      <div>
        <a href="/" class="text-blue-500 hover:underline">
          Voltar
        </a>
      </div>
    </form>
  );
}
