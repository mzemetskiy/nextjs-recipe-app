import styles from '../styles/Home.module.css'
import Image from "next/image"
import Link from "next/link"
import RecipePreview from '../components/RecipePreview'
import data from "../public/data.js"
import Head from "next/head"

export default function Home() {

  const Header = () => (
    <header id={styles.header}>
      <Image id={styles.banner} src="/banner.jpg" width={4350} height={2900} />
      <div id={styles.bannerPosition}>
        <h1 id={styles.title}>Top <br/>Summer <br/>Recipes <br/></h1>
        <h3 id={styles.subtitle}>Fresh meals everyone will appreciate.</h3>
        <div id={styles.centerButton}>
          <Link href="/recipes"><a id={styles.button}>Start crafting!</a></Link>
        </div>
      </div>
    </header>
  )

  const Main = () => {
    return ( 
      <main id={styles.main}>
        <Head>
          <title>Home | Food Concepts</title>
        </Head>
        <div id={styles.recipes}>
          {data.map(recipe => (
            <Link href={"/recipes/" + (data.indexOf(recipe) + 1)} key={"/recipes/" + (data.indexOf(recipe) + 1)}>
              <a>
                <RecipePreview 
                  img={recipe.imgSrc}
                  width={recipe.imgWidth}
                  height={recipe.imgHeight}
                  title={recipe.title}
                />
              </a>
            </Link>
          ))}
        </div>
      </main>
    );
  }

  return (
    <div id={styles.container}>
        <Header />
        <Main />
    </div>
  )
}
