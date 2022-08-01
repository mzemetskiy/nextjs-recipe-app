import data from "../../public/data";
import Recipe from "../../components/Recipe"
import styles from "../../styles/id.module.css"
import Head from "next/head";

export const getStaticPaths = async () => {
    const paths = data.map(recipe => {
        return {
            params: { id: ((data.indexOf(recipe) + 1).toString())}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id - 1
    return {
        props: {recipe: data[id]}
    }
}

const RecipeId = ({ recipe }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Recipes | Food Concepts</title>
            </Head>
            <Recipe 
                recipeObj={recipe}
            />
        </div>
        
    );
}
 
export default RecipeId;