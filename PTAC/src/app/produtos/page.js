"use client";

import Link from "next/link";
import Image from "next/image";
require('dotenv').config(); 

export default async function Home() {
  const req = await fetch(`${process.env.URL_API}/produtos`, {
    cache: "no-cache",
  });

  const produtos = await req.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-16 gap-4">
      {produtos.map((produto) => (
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
      ))}
    </div>
  );
}
