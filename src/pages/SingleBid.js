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
      console.log(response.data)
      if (response) {
        const {
          tenderName: name,
          services: service,
          description: desc,
          closingDate: date
        } = response[0]

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
  const { date, name, service, desc } = single;
  return (
    <section className='section'>
      <div className='title'>
        <h2>Bid Details</h2>
        <div className="underline"></div>
      </div>
      <div>

        {/* job info */}
        <section className='job-info'>
          <h3>{name}</h3>
          <h4>{service}</h4>
          <p className='job-date'>Closing Date: {date}</p>
          <h3>Job Description</h3>
          <p>{desc}</p>
          <button className='btn btn-primary'>Apply</button>
        </section>
      </div>
    </section>
  )
}

export default SingleBid