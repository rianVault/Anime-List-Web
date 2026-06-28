const AnimePage = async ({ params }) => {

    const { id } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`)

    const dataAnimeMentah = await res.json()
    const dataAnime = dataAnimeMentah.data

    return (
        <div>
            <div>{dataAnime.title}</div>
        </div>
    )
}

export default AnimePage