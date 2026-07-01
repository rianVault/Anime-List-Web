'use client'

import { useState, useEffect } from "react"
import DefaultCard from "../Utilities/DefaultCard"
import Link from "next/link"
import { useRouter, useParams } from "next/navigation"
import HandlePage from "./handleclick"

const Pagination = () => {

    const params = useParams()

    const halaman = 1

    const pageSekarang = Number(params.page) || 1

    const [animeData, setAnimeData] = useState([])
    const [animePage, setAnimePage] = useState({})
    const maxPage = animePage.last_visible_page

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now?limit=5&page=${pageSekarang}`, { cache: 'no-cache' })
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
                    {animeData?.map(data => (
                        <Link href={`/Anime/${data.mal_id}`}>
                            <DefaultCard title={data.title} age={data.rating} images={data.images.webp.image_url} review={data.score} reviewer={data.scored_by} ></DefaultCard>
                        </Link>
                    ))}
                </div>
            </div>
            <div>ini halaman {animePage?.current_page}</div>
            <div className="gap-4 flex">
                {pageSekarang <= 1 ? (
                    <span className="px-4 border-2 rounded opacity-50 cursor-not-allowed">
                        Previous
                    </span>
                ) : (
                    <a
                        href={`/TopAnime/${pageSekarang - 1}`}
                        className="px-4 border-2 rounded cursor-pointer"
                    >
                        Previous
                    </a>
                )}
                {pageSekarang >= maxPage ? (
                    <span className="px-4 border-2 rounded opacity-50 cursor-not-allowed">
                        Next
                    </span>
                ) : (
                    <a
                        href={`/TopAnime/${pageSekarang + 1}`}
                        className="px-4 border-2 rounded cursor-pointer"
                    >
                        Next
                    </a>
                )}
            </div>
            <div>max page: {maxPage}</div>
            {/* <div className="">
                <Link href={`/TopAnime/${prev}`} className="px-4 border-2 rounded cursor-pointer">Previous</Link>
                <Link href={`/TopAnime/${now}`} className="px-4 border-2 rounded cursor-pointer">Next</Link>
            </div> */}
        </div>
    )
}

export default Pagination