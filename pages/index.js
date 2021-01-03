import Head from 'next/head'
import React from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  const [data, setData] = React.useState(null);

  function handleAPI(){
    fetch('http://localhost:3000/api/graphql',{
      method: 'POST',
      body: JSON.stringify({
        query: `
          query {
            user
          }
        `
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => setData(json));
  }
  
  React.useEffect(()=>{
    handleAPI();
  },[]);

  return (

    <div className={styles.container}>
      
      <h1>Hello {data && data.data.user}</h1>
    </div>
  )
}


