import React, {useEffect, useState} from 'react'
import axios from 'axios';
// import axios from "axios";

const Tenders = () => {
    const url = "http://localhost:5000/tenders/list";
    const [tender, setTender] = useState([]);

    async function fetchBids() {
    const response = await axios.get(url).then((res) => res.data);
    return response;
  }

  // removeList = () => {
  // }

  useEffect(() => {
    fetchBids().then((res) => setTender(res));
  }, []);

  fetchBids();
  console.log(tender);

  return(
    <section className='stories'>
      {tender.map((bid) => {
        const {id, tenderName, services, closingDate} = bid;
        return (
          <article key={id} className='story'>
            <h4 className='title'>{tenderName}</h4>
            <p className='info'>Services: {services}</p>
            <p className='info'>Closing Date: {closingDate}</p>
            <button className='remove-btn'>remove</button>
          </article>
        )
      })}
    </section>
  );
};

export default Tenders