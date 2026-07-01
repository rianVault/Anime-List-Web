import Link from "next/link"
import Image from "next/image"

const Card = ({ api }) => {
    return (
        <div className="grid grid-cols-5 gap-10">
            {api?.map(data => (
                <Link href={`/Anime/${data.mal_id}`}>
                    <Image src={data.images.webp.image_url} alt="" width={100} height={200}></Image>
                    <h3>{data.title}</h3>
                    <p>{data.rating}</p>
                    <div className="flex gap-2">
                        <p>{data.score}</p>
                        <p>{data.scored_by} people</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Card