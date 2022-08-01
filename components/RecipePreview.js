import styles from "../styles/RecipePreview.module.css"
import Image from "next/image"

const RecipePreview = ({img, height, width, title}) => {
    return ( 
        <div className={styles.container}>
            <Image src={img} height={height} width={width} />
            <h3 className={styles.title}>{title}</h3>
        </div>
    );
}
 
export default RecipePreview;