
import Pagination from "@/Components/TopAnime/pagination"
import Link from "next/link"

const Home = async () => {
  const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=10`)
  const topManga = await response2.json()

  // const [halaman, setHalaman] = useState()

  return (
    <>
      <div className="flex justify-between">
        <h1>Top Anime</h1>
        <Link href={"/"}>Load more</Link>
      </div>
      <div className="">
        <Pagination></Pagination>
      </div>


wsdasd
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