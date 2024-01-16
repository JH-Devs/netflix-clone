import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github } from "lucide-react";
import Link from "next/link";
import GoogleIcon from "@/public/images/google.svg";
import Image from "next/image";


export default function Login() {
    return (
        <div className="mt-24 rouded bg-black/70 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
            <form>
                <h1 className="text-3xl font-semibold text-white">Přihlášení</h1>
                <div className="space-y-4 mt-5">
                <Input type="email" name="email" placeholder="zadejte email" className="bg-neutral-700 placeholder:text-xs placeholder:text-gray-400 w-full inline-block" />
                <Button type="submit" variant="destructive" className="w-full bg-red-500 ">Přihlásit se</Button>
                </div>
            </form>
            <div className="text-gray-500 text-sm mt-4">
                Nemáte zde ještě účet? <Link href="/sign-up" className="text-white hover:text-red-500">Registrujte se</Link>
            </div>
            <div className="flex w-full justify-center items-center gap-x-3 mt-6">
                <Button variant="outline" size="icon">
                    <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                    <Image src={GoogleIcon} alt="Google icon" className="w-6 h-6" />
                </Button>
            </div>
        </div>
    );
};