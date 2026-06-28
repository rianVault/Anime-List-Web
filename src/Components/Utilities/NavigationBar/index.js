"use client"

import { useRef } from "react"
import { useRouter } from "next/navigation"

const Navbar = () => {

    const query = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        event.preventDefault()
        const keyword = query.current.value
        router.push(`/search/${keyword}`)
    }

    return (
        <section className="flex justify-between">
            <div>
                Tes
            </div>
            <div>
                <input className="outline-none border-2 rounded-full p-1 pl-10 w-sm m-3" placeholder="Search" ref={query}></input>
                <button onClick={handleSearch}><a>Search</a></button>
            </div>
        </section>
    )
}

export default Navbar