import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import swal from "sweetalert";

const Navbar = ({ login }) => {
    const router = useRouter();
    const logout = async () => {
      try {
        const result = await fetch("api/logout");
        const { logout } = await result.json();
        if (logout) {
          swal("success", "Anda Berhasil Logout", "success");
          router.push("/login");
        }
      } catch (err) {
        console.log(err);
      }
    };

  return (
    <>
    <nav className={styles.navbar}>
        <div>
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
        </div>
        <div className={styles.linklogin}>
        {!login ? (
            <>
            <div className={styles.logout}>
                <Image src="/image/user.png" alt="" width={50} height={50} />
            </div>
            <div>
            <Link href="/login">Login</Link>
            </div>
            </>
        ):(
            <div onClick={logout} className={styles.span}>
                <span>Logout</span>
            </div>
            )}
        </div>
    </nav>
    </>
  );
};

export default Navbar;