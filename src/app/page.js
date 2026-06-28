import DefaultCard from "@/Components/Utilities/DefaultCard"
import Link from "next/link"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now?limit=10`)
  const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=10`)
  const topAnime = await response.json()
  const topManga = await response2.json()

  return (
    <>
      <h1>Top Anime</h1>
      <div className="grid grid-cols-5">
        {topAnime.data.map(data => (
          <Link href={`/Anime/${data.mal_id}`} key={data.mal_id}>
            <DefaultCard key={data.mal_id} title={data.title} age={data.rating} images={data.images.webp.image_url} review={data.score} reviewer={data.scored_by}></DefaultCard>
          </Link>
        ))}
      </div>
      <h1>Top Manga</h1>
      <div className="grid grid-cols-5 pt-10">
        {topManga.data.map(data => (
          <DefaultCard key={data.mal_id} title={data.title} age={data.rating} images={data.images.webp.image_url}></DefaultCard>
        ))}
      </div>
    </>
  )
}

export default Home