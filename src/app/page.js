import DefaultCard from "@/Components/Utilities/DefaultCard"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
  const topAnime = await response.json()

  return (
    <div>
      {topAnime.data.map(data => (
        <DefaultCard key={data.mal_id} title={data.title} age={data.rating} images={data.images.webp.image_url}></DefaultCard>
      ))}
    </div>
  )
}

export default Home