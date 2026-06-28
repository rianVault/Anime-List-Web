const Search = async ({ params }) => {

    const {keyword} = await params

    return(
        <div>
            <div>ini {keyword}</div>
        </div>
    )
}

export default Search