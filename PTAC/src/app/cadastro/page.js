'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [details, setDetails] = useState();
    const [imageurl, setImageURL] = useState();
    const [date_register, setDate] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const produto = {
            title: title,
            price: price,
            details: details,
            imageurl: imageurl,
            date_register: date_register
        }
        
        const produtoJson = JSON.stringify(produto);
        fetch("http://localhost:3003/produto", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className={styles.main}>
            <form  onSubmit={cadastrar}>
                <input
                    type="text"
                    placeholder='Titulo:'
                    nome="titulo"
                    onChange={e => setTitle(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='Preço:'
                    nome="preco"
                    onChange={e => setPrice(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='Detalhes:'
                    nome="detalhes"
                    onChange={e => setDetails(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='URL da imagem:'
                    nome="image"
                    onChange={e => setImageURL(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='Data de registro:'
                    nome="date_register"
                    onChange={e => setDate(e.target.value)}
                /><br/>
                <button type='submit'>Cadastrar</button>
                <div>
                    <a href='/'>Voltar</a>
                </div>
            </form>
        </div>
    );
}