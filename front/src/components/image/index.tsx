import Image from "next/image"


const Profile = ({imagen}: {imagen: string}) => {

    return (
        <div className="flex flex-col items-center justify-center h-96">
                <Image src={imagen} alt="profile" width={288} height={384} className="absolute z-10 rounded-3xl"/>
                <div className="relative top-8 right-8 bg-lightBlue z-0 w-72 h-96 rounded-3xl"></div>
        </div>
    )
}

export default Profile