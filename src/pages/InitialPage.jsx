import { useState } from "react";
import useSignUp from "../hooks/api/useSignUp";

export default function InitialPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { loadingSignUp, signUp } = useSignUp();

    async function submit(event) {
        event.preventDefault()
        try {
            await signUp(name, email, password)
            alert('cadastrado')
        } catch (errors) {
            alert(errors.response.data.message)
        }
        
    }

    return (
        <div class="flex w-screen h-screen bg-pattern justify-center items-center">
            <form class="bg-orange-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submit}>
                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Insira seu nome
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="nome" />
                </div>
                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Agora escreva seu e-mail
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="e-mail"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Digite uma senha bem segura
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="senha"
                    />
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="submit">
                        Sign In
                    </button>
                </div>
            </form>
        </div >
    );
}
