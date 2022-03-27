import React, {useState} from 'react'
// import axios from "axios";

const Tenders = () => {
  const url = "http://localhost:5000/tenders/list";
  
  const [tender, setTender] = useState([]);

  const fetchData = async() => {
    try {
      const response = await fetch(url);
      const data = response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  const tenders = fetchData()
  setTender(tenders)
  // data = Array.from(tenders);
  // console.log(tenders);

  return (
    <section className='stories'>
      {tenders.map((bid) => {
        const {id, tenderName, services, closingDate} = bid;
        (
          <article key={id} className='story'>
            <h4 className='title'>{tenderName}</h4>
            <p className='info'>{services}</p>
            <p className='info'>{closingDate}</p>
          </article>
        )
      })}
    </section>
  );
};

export default Tenders