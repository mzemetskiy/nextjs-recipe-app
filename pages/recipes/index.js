import styles from "../../styles/recipes.module.css"
import data from "../../public/data";
import RecipePreview from "../../components/RecipePreview";
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";

const Recipes = () => {
    const [searchTerm, setSearchTerm] = useState("")

    return ( 
        <div id={styles.container}>
            <Head>
                <title>Recipes | Food Concepts</title>
            </Head>
            <h1 id={styles.search}>Looking for something?</h1>
            <input onChange={(event) => {setSearchTerm(event.target.value)}} type="text" id={styles.searchbar} placeholder="Filter Recipes..." />
            <div id={styles.recipes}>
                {data.filter((x) => {
                    if (searchTerm === "") return x
                    if (x.title.toLowerCase().includes(searchTerm.toLowerCase())) return x
                }).map(recipe => (
                    <Link key={data.indexOf(recipe) + 1} href={"/recipes/" + (data.indexOf(recipe) + 1)}>
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
        </div>
    );
}

export default Recipes;