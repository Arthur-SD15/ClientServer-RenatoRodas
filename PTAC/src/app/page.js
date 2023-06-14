"use client"

import Link from 'next/link';

export default async function Home() {
  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });

  const produtos = await req.json();

  return (
    <main> 
      {produtos.map(produto => (
        <div key={produto.id}>
          <img src={produto.imageurl} width={100} height={100}></img>
          <p>{produto.title}</p>
          <Link href={`/produto/${produto.id}`}>ver mais</Link>
        </div>
      ))}
    </main>
  )
}