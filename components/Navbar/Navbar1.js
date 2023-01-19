import Link from "next/link";
import styles from "./Navbar.module.css";
// import Image from "next/image";
import React from "react";

// export const getServerSideProps = async (context) => {
//     const { token } = context.req.cookies;
//     console.log(token);
//     if (!token) {
//       return {
//         redirect: {
//           destination: "/login",
//           permanent: true,
//         },
//       };
//     }

    //  const user = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };
    //   const result = await fetch(`http://localhost:3009/users/data`, user);
    //   const dataUser = await result.json();
    //   console.log(dataUser,"data get usr in add ssr");

    // return {
    //     props: {
    //       isLogin: true,
    //       token: token,
    //       dataUser,
    //     },
    //   };
    // };

const Navbar1 = () => {
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
            {/* <div className={styles.logout}> */}
                {/* <image src="/image/user.png" alt="" width={50} height={50} /> */}
                {/* <img src={dataUser.data[0].photo} alt="" width={50} height={50} /> */}
            {/* </div>  */}
            {/* <Link href="/login">Login</Link> */}
            <span onClick={logout} className={styles.span}>
                <Link href="/login">Logout</Link>
            </span>
        </div>
    </nav>
  );
};

export default Navbar1;
