"use client"

import { useRef } from "react"

const Navbar = () => {

    const query = useRef()

    const handleSearch = () => {
        alert(query.current.value)
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