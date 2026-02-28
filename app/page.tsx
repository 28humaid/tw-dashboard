import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import LoginComponent from "@/components/login/LoginComponent";
import Image from "next/image";


export default function Home() {

  return (
    <div className="relative min-h-screen font-sans">
      <div className="absolute top-4 right-6">
        <LanguageSwitcher />
      </div>
      <div>
        <LoginComponent/>
      </div>
    </div>
  );
}
