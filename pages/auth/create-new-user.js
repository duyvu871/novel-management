
import { useRouter } from 'next/router'
import React from 'react'


export default function CreateNewUser({ islogin }) {

    console.log(islogin);

  return (
    <div></div>
  )
}


export async function getServerSideProps(context) {
    const session = await getSession(context);
  
    if (session?.userId === "") {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
  
    
    return {
      props: {
        islogin: session
      },
    };
  }