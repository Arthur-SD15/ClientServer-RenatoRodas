"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
require('dotenv').config(); 

export default function Alterar({ params }) {
  const route = useRouter();
  const id = params.id;
  const codigo = { id: parseInt(params.id) };
  const url = process.env.URL_API;

  const idJson = JSON.stringify(codigo);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [details, setDetails] = useState("");
  const [imageurl, setImageURL] = useState("");
  const [date_register, setDate] = useState("");

  useEffect(() => {
    async function loadList() {
      const req = await fetch(url + "/produtos", {
        method: "POST",
        cache: "no-cache",
        headers: { "content-type": "application/json" },
        body: idJson,
      });
      const produto = await req.json();
      setTitle(produto.title);
      setPrice(produto.price);
      setDetails(produto.details);
      setImageURL(produto.imageurl);
      setDate(produto.date_register.slice(0, 10));
    }
    loadList();
  }, [idJson, url]);

  const alterar = (e) => {
    e.preventDefault();

    const produto = {
      title: title,
      price: price,
      details: details,
      imageurl: imageurl,
      date_register: date_register,
    };

    const produtoJson = JSON.stringify(produto);
    fetch(url + "/produto/" + id, {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: produtoJson,
    })
      .then(function () {
        route.push(
          "/produtos"
        );
      })
      .catch(() => console.log("Não foi possível cadastrar!"));
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d+(.\d{0,2})?$/.test(value)) {
      setPrice(value);
      setValidationMessage("");
    } else {
      setValidationMessage(
        "O número deve conter no máximo duas casas decimais."
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-custom-yellow font-bold text-3xl border-b-4 border-custom-yellow mb-4 md:mb-0">
          Alteração de Produto
        </h2>
        <p className="text-gray-600 mt-4 md:max-w-md">
          Essa é a área de alteração de produto. Através do formulário, você pode alterar os dados do produto desejado.
        </p>
        <div className="flex flex-col rounded-lg bg-white dark:bg-custom-blue mt-3 md:max-w-4xl md:flex-row shadow-xl">
          <Image
            className="aspect-w-3 bg-white aspect-h-6 w-full rounded-t-lg object-contain md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={imageurl}
            alt="Imagem do produto"
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 text-left text-justify">
              {title} - <span className="text-custom-yellow font-bold">R${price}</span>
            </h5>
            <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200 text-left text-justify">
              {details}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-8">
        <form onSubmit={alterar} className="mt-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Nome"
              value={title}
              className="border border-gray-400 rounded p-2 w-full text-gray-800"
              style={{ border: '1px solid #888888', color: '#888888' }}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Preço"
              className="border border-gray-400 rounded p-2 w-full text-gray-800"
              style={{ border: '1px solid #888888', color: '#888888' }}
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
              value={imageurl}
              className="border border-gray-400 rounded p-2 w-full text-gray-800"
              style={{ border: '1px solid #888888', color: '#888888' }}
              onChange={(e) => setImageURL(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              placeholder="Data de cadastro"
              value={date_register}
              className="border border-gray-400 rounded p-2 w-full text-gray-800"
              style={{ border: '1px solid #888888', color: '#888888' }}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Descrição"
              value={details}
              className="border border-gray-400 resize-none rounded p-2 w-full h-32 text-gray-800"
              style={{ border: '1px solid #888888', color: '#888888' }}
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
