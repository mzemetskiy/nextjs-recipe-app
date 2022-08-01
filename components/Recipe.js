import styles from "../styles/Recipe.module.css"
import Image from "next/image"

const Recipe = ({recipeObj}) => {
    let {imgSrc, imgHeight, imgWidth, title, author, website, ingredients, directions, time, servings} = recipeObj

    return ( 
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <Image src={imgSrc} height={imgHeight} width={imgWidth} />
            <h3 className={styles.credits}>Recipe by {author} on <a className={styles.link} href={"https://" + website}>{website}</a></h3>
            <ul className={styles.prepInfo}>
                <li className={styles.left}>
                    <span>Total time: <b>{time}</b></span>
                </li>
                <li className={styles.right}>
                    <span>Yields: <b>{servings}</b></span>
                </li>
            </ul>
            <div className={styles.split}>
                <ul className={styles.half}>
                    <li className={styles.subsection}>Ingredients</li>
                    {ingredients.map(ingredient => (
                        <li key={ingredient} className={styles.margin}>
                            <Image src="/checkmark.svg" className={styles.checkmark} height={20} width={20} />
                            <span className={styles.text}>{ingredient}</span>
                        </li>
                    ))}
                </ul>
                <ul className={styles.half}>
                    <div className={styles.subsection + " " + styles.moveUp}>Directions</div>
                    {directions.map(direction => (
                        <li key={direction} className={styles.margin}>
                            <span className={styles.text}>{direction}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Recipe;