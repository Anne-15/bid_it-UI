import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Tenders = () => {
    const url = "http://localhost:6060/tenders/list";
    const [tender, setTender] = useState([]);

    async function fetchBids() {
    const response = await axios.get(url).then((res) => res.data);
    return response;
  }
  // countdown
  // const useCountdown = (targetDate) => {
  //   const countDownDate = new Date(targetDate).getTime();

  //   const [countDown, setCountDown] = useState(
  //     countDownDate - new Date().getTime()
  //   );

  // }

  useEffect(() => {
    fetchBids().then((res) => setTender(res));
  }, []);

  fetchBids();
  console.log(tender);

  return (
    <section className='stories'>
      {tender.map((bid) => {
        const {id, tenderName, services, closingDate} = bid;
        return (
          <article key={id} className='story'>
            <h4 className='title'>{tenderName}</h4>
            <p className='info'>Services: {services}</p>
            <p className='info'>Closing Date: {closingDate}</p>
            <Link to={`/tender/${id}`} className="btn btn-primary">
              Details
            </Link>
          </article>
        )
      })}
    </section>
  );
};

export default Tenders