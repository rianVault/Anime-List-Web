import HandlePage from "@/Components/TopAnime/handleclick"
import Pagination from "@/Components/TopAnime/pagination"

const MoreTopAnime = async ({ params }) => {

    const { page } = await params

    return (
        <div>
            <Pagination page={page}></Pagination>
        </div>
    )
}

export default MoreTopAnime