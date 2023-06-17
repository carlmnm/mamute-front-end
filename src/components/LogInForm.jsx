import { useContext, useState } from "react";
import useSignUp from "../hooks/api/useSignUp";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UserContext from "../contexts/userContext";
import useLogin from "../hooks/api/useLogIn";

export default function LogInForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useLogin()
    const { setUserData} = useContext(UserContext)
    const navigate = useNavigate()

    async function submit(event) {
        event.preventDefault()

        try {
            const userData = await login(email, password)
            setUserData(userData)
            navigate('/home')
        } catch (errror) {
            alert('Não foi possível fazer login')
        }
    }

    return (
        <form class="bg-orange-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submit}>
            <div class="mb-4">
                <label class="block text-white text-sm font-bold mb-2" for="username">
                    Digite seu e-mail
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
                    Digite sua senha
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
                <Link to='/'>ou faça seu cadastro</Link>
            </div>
        </form>
    )
}