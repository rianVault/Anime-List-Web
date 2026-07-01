'use client'

import { useState, useEffect } from "react"
import Card from "../Utilities/Card"

const Pagination = () => {

    const [animeData, setAnimeData] = useState([])
    const [animePage, setAnimePage] = useState({})
    const [pageSekarang, setPageSekarang] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now?limit=10&page=${pageSekarang}`, { cache: 'no-cache' })
            const topAnime = await response.json()
            setAnimeData(topAnime?.data)
            setAnimePage(topAnime?.pagination)
        }
        fetchData()
    }, [pageSekarang])

    function handlePrev() {
        setPageSekarang(pageSekarang - 1)
    }

    function handleNext() {
        setPageSekarang(pageSekarang + 1)
    }
    
    return (
        <div>
            <div className="h-130">
                <Card api={animeData}></Card>
            </div>
            <div>ini halaman {animePage?.current_page}</div>
            <div className="gap-4 flex">
                <button onClick={handlePrev} disabled={pageSekarang === 1} className="p-2 border rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-default">prev</button>
                <button onClick={handleNext} disabled={pageSekarang === animePage?.last_visible_page} className="p-2 border rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-default">next</button>
            </div>
            <div>max page: {animePage?.last_visible_page}</div>
        </div>
    )
}

export default Pagination