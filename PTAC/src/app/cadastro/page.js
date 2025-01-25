"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
require('dotenv').config(); 

export default function Cadastro() {
  const route = useRouter();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [validationMessage, setValidationMessage] = useState("");
  const [details, setDetails] = useState();
  const [imageurl, setImageURL] = useState();
  const [date_register, setDate] = useState();
  const url = process.env.NEXT_PUBLIC_URL_API;

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d+(.\d{0,2})?$/.test(value)) {
      setPrice(value);
      setValidationMessage("");
    } else {
      setValidationMessage("O número deve conter no maximo duas casas decimais.");
    }
  };

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
    fetch(url + "/produto", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: produtoJson,
    })
      .then(function () {
        route.push("/produtos");
      })
      .catch(() => console.log("Não foi possível cadastrar!"));
  };

  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-custom-yellow font-bold text-3xl border-b-4 border-custom-yellow">
          Cadastro de Produtos
        </h2>
        <p className="text-gray-600 mt-4">
          Essa é área de cadastro de produtos, através do formulário inclua o produto requisitado.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-8">
        <form onSubmit={cadastrar}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Nome"
              className="border border-gray-400 rounded p-2 w-full text-gray-800"
              style={{ border: "1px solid #888888", color: "#888888" }}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Preço"
              className="border border-gray-400 rounded p-2 w-full text-gray-800"
              style={{ border: "1px solid #888888", color: "#888888" }}
              value={price}
              onChange={handlePriceChange}
              required
            />
            {validationMessage && (
              <p className="text-red-500 font-bold">{validationMessage}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Imagem (URL)"
              className="border border-gray-400 rounded p-2 w-full text-gray-800"
              style={{ border: "1px solid #888888", color: "#888888" }}
              onChange={(e) => setImageURL(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              placeholder="Data de cadastro"
              className="border border-gray-400 rounded p-2 w-full text-gray-800"
              style={{ border: "1px solid #888888", color: "#888888" }}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Descrição"
              className="border border-gray-400 resize-none rounded p-2 w-full h-32 text-gray-800"
              style={{ border: "1px solid #888888", color: "#888888" }}
              onChange={(e) => setDetails(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-custom-yellow text-white rounded py-2 px-8 hover:bg-custom-yellow-hover"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
