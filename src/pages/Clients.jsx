import React from 'react'
import Header from '../components/common/Header'
import ClientCardsGrid from '../components/clients/ClientCardsGrid'

const Clients = () => {
  return (
    <div className='h-screen w-full p-8 flex flex-col gap-10'>
      <Header HeaderName={"Clients"} HeaderDescription={"Manage your client contacts and information"}/>
      <ClientCardsGrid/>
    </div>
  )
}

export default Clients