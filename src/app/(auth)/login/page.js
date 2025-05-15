'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import Button from "@/app/_components/Button"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    const handleLogin = (e) => {
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem("users") || "[]")
        const user = users.find(u => u.email === email && u.password === password)
        if(user) {
            localStorage.setItem("loggedUser", JSON.stringify(user))
            router.push("/dashboard")
        } else {
            window.alert('Credenciais Inválidas')
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-base-200 p-6">
            <div className="card w-full max-w-md shadow-xl bg-base-100">
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl">Login</h2>
                    <form onSubmit={handleLogin} className="form-control space-y-4 mt-4">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="input input-bordered w-full"
                            value={email}
                            onChange={e => setEmail(e.target.value)} 
                        />
                        <input 
                            type="password" 
                            placeholder="Senha"
                            className="input input-bordered w-full"
                            value={password}
                            onChange={e => setPassword(e.target.value)}  
                        />
                        <div className="text-right">
                            <Button title="Entrar" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}