"use client";

import { useRouter } from "next/navigation";
require('dotenv').config(); 

export default async function Produto({ params }) {
  const router = useRouter();
  const id = { id: parseInt(params.id) };
  const url = process.env.URL_API;

  const idJson = JSON.stringify(id);

  const req = await fetch(url + "/produtos", {
    method: "POST",
    cache: "no-cache",
    headers: { "content-type": "application/json" },
    body: idJson,
  });
  const produto = await req.json();

  const remover = () => {
    try {
      fetch(url + "/produto", {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: idJson,
      });
      router.push("/produtos");
    } catch (error) {
      alert("Ocorreu um erro" + error);
    }
  };
  
  const alterar = () => {
    try {
      fetch(url + "/produto", { 
        method: "PUT", 
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ 
          title: produto.title,
          price: produto.price,
          details: produto.details,
          imageurl: produto.imageurl,
          date_register: produto.date_register
        }),
      });
      router.push("/alterar/"+ params.id);
    } catch (error) {
      alert("Ocorreu um erro" + error);
    }
  };
  
  return (
    <div className="flex m-8 justify-center">
      <div
        className="flex flex-col rounded-lg bg-white dark:bg-custom-blue md:max-w-4xl md:flex-row shadow-lg"
        style={{ boxShadow: "3px 5px 7px 3px rgba(255, 157, 0, 0.8)" }}
      >
        <img
          className="aspect-w-3 bg-white aspect-h-6 w-full rounded-t-lg object-contain md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={produto.imageurl}
          alt="Imagem do produto"
        />
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 text-left text-justify">
            {produto.title} -{" "}
            <span className="text-custom-yellow font-bold">
              R${produto.price}
            </span>
          </h5>
          <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200 text-left text-justify">
            {produto.details}
          </p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={(e) => {
              e.preventDefault();
              remover();
            }}
          >
            Remover
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-center text-white font-bold py-2 px-4 rounded mt-2"
            onClick={(e) => {
              e.preventDefault();
              alterar();
            }}
          >
            Atualizar
          </button>
          <a
            href="/produtos"
            className="bg-blue-500 hover:bg-blue-600 text-center text-white font-bold py-2 px-4 rounded mt-2"
          >
            Voltar
          </a>
        </div>
      </div>
    </div>
  );
}
