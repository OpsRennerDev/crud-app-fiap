'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Register(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    const handleRegister = (e) => {
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem("users") || "[]")
        users.push({name, email, password})
        localStorage.setItem("users", JSON.stringify(users))
        window.alert("Cadastro Realizado") //toast
        router.push("/login")
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-base-200 p-6">
            <div className="card w-full max-w-md shadow-xl bg-base-100">
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl">Cadastro</h2>
                    <form onSubmit={handleRegister} className="form-control gap-4 mt-4">
                        <input 
                            type="text" 
                            placeholder="Nome" 
                            className="input input-bordered w-full"
                            value={name}
                            onChange={e => setName(e.target.value)} 
                        />
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
                        <button type="submit" className="btn btn-success mt-2">Cadastrar</button>
                    </form>
                </div>
            </div>
        </main>
    )
}
