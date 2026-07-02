import Card from "@/Components/Utilities/Card"

const Search = async ({ params }) => {

    const { keyword } = await params
    const respon = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}&limit=5`)
    const search = await respon.json()
    const searchData = search.data

    return (
        <div>
            <div>ini {decodeURIComponent(keyword)}</div>
            <div className="">
                <Card api={searchData}></Card>
            </div>
        </div>
    )
}

export default Search