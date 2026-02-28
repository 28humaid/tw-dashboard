import LoginForm from "./LoginForm";
import ImageContainer from "./ImageContainer";
import HeadingComponent from "./HeadingComponent";
// import { ToastProvider } from "../common/ToastProvider";

export default function LoginComponent(){
    return(
        <>
            <div className="py-16 space-y-16">
                <HeadingComponent/>
                <main className="flex flex-wrap w-full items-center justify-between px-16 sm:items-start gap-4">
                    <div className="flex-1 min-w-[260px] sm:min-w-[360px]">
                        <ImageContainer/>
                    </div>
                    <div className="flex-1 min-w-[260px] sm:min-w-[360px]">
                        <LoginForm/>
                    </div>
                </main>
            </div>
        </>
    )
}