import Image from "next/image"

const DefaultCard = ({ title, images, age, review, reviewer, halaman }) => {
    return (
        <div>
            <Image src={images} width={100} height={200}></Image>
            <h3>{title}</h3>
            <p>{age}</p>
            <div className="flex gap-2">
                <p>{review}</p>
                <p>{reviewer} people</p>
            </div>

        </div>
    )
}

export default DefaultCard