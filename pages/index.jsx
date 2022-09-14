
import Hero from "../components/home/Hero"
import  Head  from "next/head"
import Product from "../components/home/Product"
export default function Home() {



  return (
    <div className="">
        <Head>
          <title> TeamColab </title>
        </Head>
        <Hero />
        <Product />
    </div>
  )
}
