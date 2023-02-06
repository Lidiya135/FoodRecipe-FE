import styles from './search.module.css';
import Footer from "../../components/Footer";
import Layouts from "../../components/Layouts";
import Link from 'next/link';

export async function getServerSideProps(context){
  const res = await fetch(`https://odd-ruby-sea-lion-toga.cyclic.app/recipe`);
  const data = await res.json();
  console.log("dataaaa", data)
  console.log(data);
  return {
      props: {
      data,
      },
  };
}

export default function SearchRecipe({data}) {
console.log(data, "data list recipe")

  return (
    <Layouts title="| List_Recipe">
    <div className={styles.pages}>
       {/* <Navbar /> */}
      <div className={styles.input}>
        <input type="search" className='form-control mt-3' id="search" placeholder='Search Recipe'>
        </input>
        <div className={styles.container}>
        {data.data.map((rec) => {
            return (
              <div className={styles.box} key={rec.id}>
                 <img src={rec.photo} alt='' />
                 <h4>{rec.title}</h4>
                 <p>{rec.description}</p>
                <Link href={`/detailRecipe/${rec.id}`}>
                  <button className='btn btn-warning text-white'>Learn More</button>
                </Link>
              </div>
            )
        })}
      </div>
      </div>
    </div>      
    <Footer className="footer" style={{marginTop:"0px"}}/>
  </Layouts>
  )
}