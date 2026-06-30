'use client'

import { useState, useEffect } from "react"
import DefaultCard from "../Utilities/DefaultCard"
import Link from "next/link"
import HandlePage from "./handleclick"

const Pagination = () => {

    const [halaman, setHalaman] = useState(1)
    const [animeData, setAnimeData] = useState([])
    const [animePage, setAnimePage] = useState([])
    const maxPage = animePage.last_visible_page

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now?limit=5&page=${halaman}`, { cache: 'no-cache' })
            const topAnime = await response.json()
            setAnimeData(topAnime.data)
            setAnimePage(topAnime.pagination)
        }

        fetchData()
    }, [halaman])

    return (
        <div>
            <div className="h-125 flex">
                <div className="grid grid-cols-5">
                    {animeData.map(data => (
                        <Link href={`/Anime/${data.mal_id}`}>
                            <DefaultCard title={data.title} age={data.rating} images={data.images.webp.image_url} review={data.score} reviewer={data.scored_by} ></DefaultCard>
                        </Link>
                    ))}
                </div>
            </div>
            <div>ini halaman {animePage.current_page}</div>
            {/* <div className="gap-4 flex">
                <button onClick={() => setHalaman((prev) => prev - 1)} disabled={halaman == 1} className="px-4 border-2 rounded cursor-pointer">Previous</button>
                <button onClick={() => setHalaman((prev) => prev + 1)} disabled={halaman == maxPage} className="px-4 border-2 rounded cursor-pointer">Next</button>
            </div> */}
            <HandlePage page={(1)}></HandlePage>
            <div>Max page: {maxPage}</div>
        </div>
    )
}

export default Pagination