import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleBid = () => {
  const url = 'http://localhost:5000/tenders/list'
  const [single, setSingle] = useState(null);
  const {id} = useParams()

  // async function singlebid(){
  //   const response = axios.get(url, id).then((res) => res.data)
  //   console.log(response)
  //   if (response) {
  //     const {
  //       closingDate: date,
  //       description: descr,
  //       services: service,
  //       tenderName: name
  //     } = response[0]
  //     const newOrder = { date, descr, service, name };
  //     setSingle(newOrder)
  //   } else{
  //     setSingle(null);
  //   }
  //   // return response;
  // }

  useEffect(() => {
    async function singlebid() {
      const response = await axios.get(url, id)
        .then((res) => res.data)
      console.log(response)
      if (response) {
        const {
          tenderName: name,
          services: service,
          description: desc,
          closingDate: date
        } = response[1]

        const newOrder = { name, service, desc, date }
        setSingle(newOrder)
      } else {
        setSingle(null)
      }
    }
    singlebid();
  },[id]);
  
  // singlebid();
  console.log(single);
  if (!single) {
    return (
      <h2>No orders to be found</h2>
    )
  }
  const { date, name, service, descr } = single;
  return (
    <section className='section'>
      <div className='title'>
        <h2>Bid Details</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">

        {/* job info */}
        <article className='job-info'>
          <h3>{name}</h3>
          <h4>{service}</h4>
          <p className='job-date'>{date}</p>
          <p>{descr}</p>
        </article>
      </div>
    </section>
  )
}

export default SingleBid