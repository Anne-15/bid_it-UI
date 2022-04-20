import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleBid = () => {
  const url = 'http://localhost:5000/tenders/list'
  const [single, setSingle] = useState([]);
  const {id} = useParams()

  async function singlebid(){
    const response = axios.get(url, id).then((res) => res.data);
    return response;
  }

  useEffect(() => {
    singlebid().then((res) => setSingle(res))
  },[id]);
  
  singlebid();
  console.log(single);

  const [tenderName, services, description, closingDate] = single;
  return (
    <section className='section'>
      <div className='title'>
        <h2>Bid Details</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">

        {/* job info */}
        <article className='job-info'>
          <h3>{tenderName}</h3>
          <h4>{services}</h4>
          <p className='job-date'>{closingDate}</p>
          <p className='job-desc'>{description}</p>
        </article>
      </div>
    </section>
  )
}

export default SingleBid