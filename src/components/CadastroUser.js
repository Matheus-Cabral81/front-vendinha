import { useState } from 'react'
import './CadastroUser.css'



function CadastroUser(){

    const [email, SetEmail] = useState('')
    const [name, SetName] = useState('')
    const [cpf_cnpj, SetCpf_cnpj] = useState('')
    const [senha, SetSenha] = useState('')
    const [SetIs_active] = useState('')


    async function salvar(){

        let api = await fetch("http://localhost:8081/api/usuario",{
            method:"POST",
            body:JSON.stringify({
                "name":name,
                "email":email,
                "password":senha,
                "is_active":1,
                "cpf_cnpj":cpf_cnpj
            }),
            headers:{
                "Content-Type": "application/json"
            }
        })

        let resposta = await api.json()

        if (api.ok) {
            console.log(resposta);
            alert("Cadastro realizado com sucesso!");
            return;
        }
        console.log(resposta);
    }
    return(
        <div className="cadastro-usuario-page">       
        <div className="form-container">
        <form id="formulario">
            <h2> Cadastre-se </h2>
                <label form='nome'>Nome</label>
                <input
                type='text' 
                name='name' 
                id='name'
                value={name}
                onChange={(e) => SetName(e.target.value)}/>

                <label form='email'>Email</label>
                <input 
                type='email' 
                name='email' 
                id='email'
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
                />


                <label form='cpf_cnpj'>CPF / CNPJ</label>
                <input 
                type='text' 
                name='cpf_cnpj' 
                id='cpf_cnpj'
                value={cpf_cnpj}
                onChange={(e) => SetCpf_cnpj(e.target.value)}
                />

                <label form='password'>Senha</label>
                <input 
                type='password' 
                name='senha' 
                id='senha'
                value={senha}
                onChange={(e) => SetSenha(e.target.value)}
                />

                <label form='is_active'></label>
                <input 
                type='hidden' 
                name='is_active' 
                id='is_active'
                value={senha}
                onChange={(e) => SetIs_active(true)}
                />

                <input onClick={salvar} type='button' value="Cadastre-se"/>
            </form>
        </div>
        </div>
    );
}
export default CadastroUser;