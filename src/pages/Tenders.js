import React, { useEffect, useState } from 'react'

const Tenders = () => {
  const url = "http://localhost:5000/tenders/list";

  const [tender, setTender] = useState([]);

  const fetchData = async() => {
    try {
      const response = await fetch(`${url}`);
      const data = await response.json()
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect = (() => {
    fetchData()
  }, [])
  
  return (
    <section className='stories'>
      {hits.map((bid) => {
        const {id, tenderName, services, closingDate} = bid
        return(
          <article key={id} className='story'>
            <h4 className='title'>{tenderName}</h4>
            <p className='info'>{services}</p>
            <p>{closingDate}</p>
          </article>
        );
      })}
    </section>
  )
}

export default Tenders