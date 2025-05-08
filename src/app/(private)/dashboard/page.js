'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Dashboard () {
    const [user, setUser] = useState(null)
    const router = useRouter()

    useEffect(()=>{
        const logged = localStorage.getItem("loggedUser")
        if (!logged) router.push("/login")
        else setUser(JSON.parse(logged))
    }, [])
    return(
        <main className="min-h-screen bg-base-200 p-6">
            <div className="max-w-4xl mx-auto">
                <div className='mb-6'>
                    <h1 className='text-4xl font-bold'>Dashboard</h1>
                    {user && <p className='mt-2 text-lg'>Olá, <span className='font-semibold text-primary'>{user.name}</span></p>}
                </div>
            </div>
            <div className="card shadow-md bg-base-100 p-4">
                <h2 className='text-2xl font-semibold mb-4'>Posts</h2>
            </div>
        </main>
    )
}