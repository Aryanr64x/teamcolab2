
import imageUrlBuilder from '@sanity/image-url'

import client from '../../sanity/client'
import Navbar from '../../components/home/Navbar';
import { PortableText } from '@portabletext/react';
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'


const SinglePost = ({ post }) => {
    const builder = imageUrlBuilder(client)

    function urlFor(source) {
        return builder.image(source)
    }

    const customComponents = {
        marks: {
            superscript: ({ children }) => {
                return (<span> <sup>  {children} </sup></span>)
            },
            subscript: ({ children }) => {
                return (<span> <sub>  {children} </sub></span>)
            },
        },
        types: {
            image: ({ value }) => { return <img src={imageUrlBuilder(client).image(value)} /> },
            "video ": ({ value }) => {
                const url = value.url
                const id = getYouTubeId(url)
                return (<YouTube videoId={id} />)},
        },

    }

    return (
        <div>
            <Navbar isHome={false} />
            <div className="max-w-5xl mx-auto px-4">
                <div style={{ backgroundImage: 'url(' + urlFor(post.mainImage).url() + ')', backgroundSize: 'cover' }} className="h-80">

                </div>

                <div>
                    <PortableText value={post.body} components={customComponents} />
                </div>
            </div>
        </div>
    );
}

export default SinglePost;





export async function getStaticProps(context) {
    const slug = context.params.slug;
    const query = '*[_type == "post" && slug.current == "' + slug + '"]';

    const resp = await client.fetch(query);
    console.log(resp[0])

    return {
        props: {
            post: resp[0]
        }, // will be passed to the page component as props
    }
}



export async function getStaticPaths() {


    const query = '*[_type == "post"]';
    const resp = await client.fetch(query);
    const paths = resp.map((post) => {
        return {
            params: {
                slug: post.slug.current
            }
        }
    });
    return {
        paths,
        fallback: false // false or 'blocking'
    };
}







