import Image from "next/image"

const DefaultCard = ({title, images, age}) => {
    return(
        <div>
            <Image src={images} width={100} height={200}></Image>
            <h3>{title}</h3>
            <p>{age}</p>
        </div>
    )
}

export default DefaultCard