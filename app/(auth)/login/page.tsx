import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GithubSignInButton from "@/app/components/GithubSigninButton";
import GoogleSignInButton from "@/app/components/GoogleSigninButton";
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import { authOptions } from "@/app/utils/auth";


export default async function Login() {
    const session = await getServerSession(authOptions);

    if(session) {
        return redirect("/home");
    }

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
                Nemáte zde ještě účet? <Link href="/sign-up" className="text-white hover:text-red-500">Registrace</Link>
            </div>
            <div className="flex w-full justify-center items-center gap-x-3 mt-6">
                <GithubSignInButton />
                <GoogleSignInButton />
            </div>
        </div>
    );
};