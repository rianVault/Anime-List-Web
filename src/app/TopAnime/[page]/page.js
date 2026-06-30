import HandlePage from "@/Components/TopAnime/handleclick"

const MoreTopAnime = async ({ params }) => {

    const { page } = await params

    return (
        <div>
            ini halaman: {page}
            <HandlePage page={page}></HandlePage>
        </div>
    )
}

export default MoreTopAnime