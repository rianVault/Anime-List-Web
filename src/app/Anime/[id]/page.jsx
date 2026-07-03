import Card from "@/Components/Utilities/Card"
import Link from "next/link"
import Image from "next/image"

const AnimePage = async ({ params }) => {

    const { id } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`)
    const res2 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}/recommendations`)

    const dataAnimeMentah = await res.json()
    const dataAnime = dataAnimeMentah.data

    const dataRekomendasiMentah = await res2.json()
    const dataRekomendasi = dataRekomendasiMentah.data

    return (
        <div>
            <div>{dataAnime.title}</div>
            <div className="grid grid-cols-5">
                {dataRekomendasi?.slice(0, 10).map(data => (
                    <Link href={`/Anime/${data.entry.mal_id}`} key={data.entry.mal_id}>
                        <Image src={data.entry.images?.webp?.image_url} alt="" width={100} height={200}></Image>
                        <h3>{data.entry.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default AnimePage