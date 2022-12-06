// import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
    <div className={styles.container}>
      hello from next
      <button className='btn btn-primary'>button from bootstrap</button>
    </div>
      <image src='/image/egg.png' height={200} width={200} alt='' />
      <Image src="/image/egg.png" height={400} width={400} quality={1} priority alt='' />
    </div>
  )
}
