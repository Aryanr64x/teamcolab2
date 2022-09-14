import PostCard from "../../components/blog/PostCard"
import Navbar from "../../components/home/Navbar"
import client from "../../sanity/client"
import Head from "next/head"
export default function Blog({ posts }) {
    return (
        <div className="">
            <Head>
              <title> Blog | TeamColab </title>
            </Head>
            <Navbar isHome={false} />
            <div className="px-4  max-w-6xl mx-auto">
                <h1 className="text-5xl mt-12">
                    Blog
                </h1>
                <div className="text-lg opacity-80 mt-4">
                    Our latest web design tips, tricks, insights, and resources, hot off the presses.
                </div>
                <div className="mt-8">
                         <div className="grid grid-cols-3">
                          {
                            posts.map((post)=>{
                                return (  <PostCard key={post.slug.current} post={post} /> )
                            })
                          }
                        </div>
                </div>
          </div>
        </div>
    )
}



export async function getStaticProps(context) {
   
    const query = '*[_type == "post"]';
    
    const resp = await client.fetch(query);
    console.log(resp);
    return {
      revalidate: 20,
      props: {
        posts: resp
      }, // will be passed to the page component as props
    }
  }
  

