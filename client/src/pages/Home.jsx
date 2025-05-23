import {Link} from "react-router-dom"
import CallToAction from "../components/CallToAction"
import PostCard from "../components/PostCard"
import { useEffect, useState } from "react"
export default function Home() {
    const [posts,setPosts]  = useState([]);
    console.log(posts)
    useEffect(()=>{
        const fetchPosts = async()=>{
            const res = await fetch('http://localhost:3000/api/post/getposts');
        const data = await res.json();
        setPosts(data.posts);
        }
        fetchPosts();
    },[])
    return (
        <div>
            <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold lg:text-6xl ">Welcome to my Blog.</h1>
                <p className="text-gray-500 text-xs sm:text-sm">Here you'll find a variety of articles and tutorials on topics such as web development,
                Software engineering ,and programing languages, 
                </p>

            <Link to={"/search"} className="text-xs sm:text-sm text-teal-500 font-bold hover:underline ">
            View all posts
            </Link>
            
            </div>
            {/* <div className="py-3 bg-amber-100 dark:bg-slate-700">
                <CallToAction/>
            </div> */}
              <div className="mx-auto w-full p-3 bg-amber-100 dark:bg-slate-700">
                         <CallToAction/>
            </div>

            <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
                {
                    posts && posts.length > 0 && (
                        <div className="flex flex-col gap-6 ">
                            <h2 className="text-2xl font-semibold  text-center">Recent Posts</h2>
                            <div className="flex flex-wrap gap-16 justify-center items-center py-8">
                                {posts.map((post)=>(
                                    <PostCard  key={post._id} post={post} />
                                ))}
                            </div>
                            <Link to={'/search'} className="text-lg text-teal-500 hover:underline text-center ">
                            View all posts
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
