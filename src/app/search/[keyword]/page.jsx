import DefaultCard from "@/Components/Utilities/DefaultCard"
import Link from "next/link"

const Search = async ({ params }) => {

    const { keyword } = await params
    const respon = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}&limit=5`)
    const search = await respon.json()

    console.log(search)
    return (
        <div>
            <div>ini {decodeURIComponent(keyword)}</div>
            <div className="grid grid-cols-5">
                {search.data.map(data => (
                    <Link href={`/Anime/${data.mal_id}`} key={data.mal_id}>
                        <DefaultCard key={data.mal_id} title={data.title} age={data.rating} images={data.images.webp.image_url} review={data.score} reviewer={data.scored_by}></DefaultCard>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Search