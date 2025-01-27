"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
require("dotenv").config();

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [imageError, setImageError] = useState(new Set());
  const url = process.env.NEXT_PUBLIC_URL_API;

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const req = await fetch(`${url}/produtos`, {
          cache: "no-store",
        });
        const data = await req.json();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProdutos();
  }, [url]);

  const handleImageError = (imageUrl) => {
    setImageError((prev) => new Set(prev).add(imageUrl));
  };

  return (
    <div className="p-16">
      {produtos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {produtos.map((produto) => (
            <div
              className="max-w-md pb-8 rounded-xl w-full bg-white overflow-hidden shadow-lg relative transition-transform transform hover:scale-105 hover:shadow-2xl"
              key={produto.id}
            >
              <Link href={`/produto/${produto.id}`}>
                <div className="flex items-center justify-center h-48">
                {imageError.has(produto.imageurl) ? (
                  <p className="font-bold">Imagem Indisponível</p>
                ) : (
                  <Image
                    src={produto.imageurl}
                    alt="Imagem Produto"
                    width={200}
                    height={200}
                    onError={() => handleImageError(produto.imageurl)}
                  />
                )}
                </div>
                <div className="px-6 py-4 flex flex-col justify-end">
                  <h2 className="mb-2 text-sm font-bold text-black text-justify">
                    {produto.title}
                  </h2>
                  <p className="absolute bottom-3 right-6 text-custom-yellow text-lg font-bold">
                    R${produto.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p className="text-gray-600 text-lg animate-pulse">
            Carregando produtos, por favor aguarde...
          </p>
        </div>
      )}
    </div>
  );
}
