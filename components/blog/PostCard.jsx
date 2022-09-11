
const PostCard = ( { post } )=>{
    return (
        <a href={'/blog/'+post.slug.current} className="rounded-md cursor-pointer mr-8 pb-2 shadow-sm hover:shadow-lg shadow-black transition-all duration-500">

            <div className="rounded-t-md post-card-image h-48">
            </div>            
            <div className="mt-2 px-2">
                <div className="text-2xl">
                    { post.title }
                </div>
                <div className="mt-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque nobis architecto nihil!
                </div>

            </div>
        </a>
    ); 
}

export default PostCard;

