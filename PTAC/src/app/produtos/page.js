"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react"; // Importar corretamente useState e useEffect
require('dotenv').config(); 

export default function Home() {
  const [produtos, setProdutos] = useState([]); // Definir o estado dos produtos
  const url = process.env.NEXT_PUBLIC_URL_API;  // Acesse variáveis de ambiente com NEXT_PUBLIC_
  console.log(url)  // Verificar se a URL está correta

  // Usar useEffect corretamente para chamar a função assíncrona
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const req = await fetch(`${url}/produtos`, {
          cache: "no-cache",
        });
        const data = await req.json();
        setProdutos(data);  // Atualiza o estado com os produtos
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProdutos();  // Chama a função de fetch
  }, [url]); // A dependência é o `url` para garantir que a URL seja atualizada corretamente

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-16 gap-4">
      {produtos.length > 0 ? (
        produtos.map((produto) => (
          <div
            className="max-w-md pb-8 rounded-xl w-full mb-12 bg-white overflow-hidden shadow-xl relative"
            key={produto.id}
          >
            <Link href={`/produto/${produto.id}`}>
              <div className="flex items-center justify-center h-48">
                <Image
                  className="w-9/12 h-full object-center object-contain"
                  src={produto.imageurl}
                  alt="Imagem Produto"
                  width={200} // Defina o tamanho da imagem (ou pode calcular com base na proporção)
                  height={200}
                />
              </div>
              <div className="px-6 py-4 flex flex-col justify-end">
                <div className="mb-2">
                  <h2 className="mb-2 text-sm text-md font-bold text-black text-justify">
                    {produto.title}
                  </h2>
                </div>
              </div>
              <div className="absolute bottom-3 right-6">
                <span
                  className="text-custom-yellow text-lg font-bold"
                  style={{ bottom: "-20px" }}
                >
                  R${produto.price}
                </span>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p>Carregando produtos...</p> // Mensagem de carregamento se não houver produtos
      )}
    </div>
  );
}
