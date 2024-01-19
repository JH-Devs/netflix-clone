import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";

async function getData(category: string, userId : string){
    switch(category) {
        case "shows": {
            const data = await prisma.movie.findMany({
               where: {
                category: 'show'
               }, 
               select: {
                age:true,
                duration: true,
                id: true,
                title:true,
                release: true,
                imageString: true,
                overview: true,
                youtubeString: true,
                WatchLists: {
                    where: {
                        userId: userId,
                    }
                }
               }
            });
            return data;
        }
        case "movies": {
            const data = await prisma.movie.findMany({
               where: {
                category: 'movie'
               }, 
               select: {
                age:true,
                duration: true,
                id: true,
                title:true,
                release: true,
                imageString: true,
                overview: true,
                youtubeString: true,
                WatchLists: {
                    where: {
                        userId: userId,
                    }
                }
               }
            });
            return data;
        }
        case "recently": {
            const data = await prisma.movie.findMany({
               where: {
                category: 'recent'
               }, 
               select: {
                age:true,
                duration: true,
                id: true,
                title:true,
                release: true,
                imageString: true,
                overview: true,
                youtubeString: true,
                WatchLists: {
                    where: {
                        userId: userId,
                    }
                }
               }
            });
            return data;
        }
        default: {
            throw new Error();
        }
    }
}

export default async function CategoryPage({
    params,
  }: {
    params: { genre: string };
  }) {
    const session = await getServerSession(authOptions);
    const data = await getData(params.genre, "abc");
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
            {data.map((movie) => (
                <div key={movie.id} className="relative h-60">

                </div>
            ))}
        </div>
    );
};