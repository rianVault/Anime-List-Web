
import Pagination from "@/Components/TopAnime/pagination"
import Card from "@/Components/Utilities/Card"
import DefaultCard from "@/Components/Utilities/DefaultCard"
import Link from "next/link"

const Home = async () => {
  const response1 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now?limit=5`)
  const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=10`)
  const animeData = await response1.json()
  const topAnime = animeData.data
  const topManga = await response2.json()


  // const [halaman, setHalaman] = useState()

  return (
    <>
      <div className="flex justify-between">
        <h1>Top Anime</h1>
        <Link href={"/TopAnime"}>Load more</Link>
      </div>
      <div className="">
        <div className="grid grid-cols-5 pt-10">
          {/* {topAnime.data.map(data => (
            <Link href={`/Anime/${data.mal_id}`} key={data.mal_id}>
              <DefaultCard key={data.mal_id} title={data.title} age={data.rating} images={data.images.webp.image_url} review={data.score} reviewer={data.scored_by}></DefaultCard>
            </Link>
          ))} */}
        </div>
          <Card api={topAnime}></Card>
      </div>





      {/* <h1>Top Manga</h1>
      <div className="grid grid-cols-5 pt-10">
        {topManga.data.map(data => (
          <DefaultCard key={data.mal_id} title={data.title} age={data.rating} images={data.images.webp.image_url}></DefaultCard>
        ))}
      </div> */}
    </>
  )
}

export default Home