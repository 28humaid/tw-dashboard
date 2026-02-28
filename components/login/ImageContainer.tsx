import Image from "next/image";
import twLogo from "@/public/images/twlogo.jpg";
import loginImg from "@/public/images/Login.png"
export default function ImageContainer(){
    return(
        <>
            <div className="flex flex-col items-center">
                <div>
                    <Image
                        className=""
                        src={twLogo}
                        alt="TW logo"
                        width={200}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        className=""
                        src={loginImg}
                        alt="TW logo"
                        width={400}
                        height={100}
                    />
                </div>
            </div>
        </>
    )
}