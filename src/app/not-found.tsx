import Image from "next/image"
export default function pageNotFound(){
    return <div className="h-96 mx-auto flex justify-center items-center container">
         <Image src="/images/error-2.png" width={400} height={400} style={{ filter: "drop-shadow(3px 3px 10px #ffffff)" }} alt="" />
    </div>
}