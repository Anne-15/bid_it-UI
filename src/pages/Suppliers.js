import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Suppliers = () => {
  const url = 'http://localhost:5000/suppliers/list';
  const [company, setCompany] = useState([]);

  async function getCompanies(){
    const response = await axios.get(url).then((res) => res.data)
    return response
  }

  useEffect(() => {
    getCompanies().then((res) => setCompany(res))
  },[])

  getCompanies()

  return (
    <section className='stories'>
      {company.map((fav) => {
        const {id, companyName, category, sector} = fav;
        return (
          <article key={id} className='story'>
            <h4 className='title'>{companyName}</h4>
            <p className='info'>Category: {category}</p>
            <p className='info'>Sector/Department: {sector}</p>
          </article>
        )
      })}

    </section>
  )
}

export default Suppliers