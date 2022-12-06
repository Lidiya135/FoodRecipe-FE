import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <ul className={styles.links}>
            <li>
                <Link href="/landingPage">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/addRecipe">
                    Add Recipe
                </Link>
            </li>
            <li>
                <Link href="/profile">
                    Profile
                </Link>
            </li>
        </ul>
        <div className={styles.linklogin}>
            <div className={styles.logout}>
                <Image src="/image/user.png" alt="" width={50} height={50} />
            </div>
            <Link href="/login">Login</Link>
        </div>
    </nav>
  );
};

export default Navbar;