"use client"

import Link from "next/link"

const HandlePage = ({ page }) => {

    const now = Number(page) + 1
    const prev = Number(page) - 1

    return (
        <div>
            <div className="gap-4 flex">
                {/* <button onClick={() => setHalaman((prev) => prev - 1)} disabled={halaman == 1} className="px-4 border-2 rounded cursor-pointer">Previous</button> */}


                <Link href={`/TopAnime/${prev}`} className="px-4 border-2 rounded cursor-pointer">Previous</Link>
                <Link href={`/TopAnime/${now}`} className="px-4 border-2 rounded cursor-pointer">Next</Link>


            </div>
        </div>
    )
}

export default HandlePage