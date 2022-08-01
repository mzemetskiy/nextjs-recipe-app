import styles from "../styles/Navbar.module.css"
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";

const Navbar = ({ children }) => {
    const [menuVisibility, setMenuVisibility] = useState(false)

    function toggleMenu() {
        setMenuVisibility(!menuVisibility)
    }

    const Menu = () => {
        return ( 
            <ul id={styles.menu}>
                <li>
                    <Link href="/"><a className={styles.link}>Home</a></Link>
                </li>
                <li>
                    <hr className={styles.ruler}/>
                </li>
                <li>
                    <Link href="/recipes"><a className={styles.link}>Recipes</a></Link>
                </li>
                <li>
                    <hr className={styles.ruler}/>
                </li>
                <li>
                    <Link href="/contact"><a className={styles.link}>Contact</a></Link>
                </li>
            </ul>
        );
    }

    return ( 
        <>
            <nav className={styles.nav}>
                <ul className={styles.container}>
                    <li className={styles.icon} onClick={toggleMenu}>
                        <div className={styles.iconContainer}>
                            <Image src="/menu.svg" height={80} width={80}/>
                        </div>
                    </li>
                    <li>
                        <Link href="/">
                            <a className={styles.link}>Food Concepts</a>
                        </Link>
                    </li>
                    <li className={styles.mainOptions}>
                        <Link href="/recipes">
                            <a className={styles.options + " " + styles.link}>Search</a>
                        </Link>
                        <Link href="/contact">
                            <a className={styles.options + " " + styles.link}>Contact</a>
                        </Link>
                    </li>
                </ul>
                {menuVisibility ? <Menu /> : <></>}
            </nav>
            {children}
            <div className={styles.nav}>
                <footer id={styles.footer}>
                    <small>NAVIGATION</small>
                    <div id={styles.footerflex}>
                        <div><Link href="/"><a className={styles.footerlink}>Home</a></Link></div>
                        <div><Link href="/recipes"><a className={styles.footerlink}>Recipes</a></Link></div>
                        <div><Link href="/contact"><a className={styles.footerlink}>Contact</a></Link></div>
                    </div>
                    <small>Matthew Zemetskiy<br/>@ Copyright {new Date().getFullYear()}<br/>All rights reserved.</small>
                </footer>
            </div>
            
        </>
    );
}
 
export default Navbar;