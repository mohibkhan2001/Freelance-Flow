import React from 'react'
import Header from '../components/common/Header'
import PaymentsGrid from '../components/payments/PaymentsGrid'

const Payment = () => {
  return (
     <div className='w-full h-screen py-6 px-8 flex flex-col'>
      <Header HeaderName={"Payments & Invoices"} HeaderDescription={"Track your earnings and payment status"}/>
      <PaymentsGrid/>
    </div>
  )
}

export default Payment