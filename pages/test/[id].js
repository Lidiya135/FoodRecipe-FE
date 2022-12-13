import styles from './test.module.css'
import Link from 'next/link';

export async function getServerSideProps(context){
    try{
        const id =context.params.id
        console.log(id)
        const res = await
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await res.json();
        console.log(data)
        return{
          props: {
            data
          },
        }
    } catch(e){
        console.log(e)
    }
  }
const testDetail = ({data}) => {
  return (
    <div className={styles.container}>
        {data && 
        <div className={styles.card}
        >
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
        }
        <span>post number: {data.id}</span>
        <span>by : {data.userId}</span>

        <Link href={'/test'}>back to recipe</Link>
    </div>
  )
}

export default testDetail