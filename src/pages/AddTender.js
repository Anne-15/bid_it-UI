import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AddTender = () => {
  const url = 'http://localhost:6060/tenders';
  const [order, setOrder] = useState({
    tenderName:"",
    services:"",
    description:"",
    closingDate:""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setOrder({
      ...order,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      tenderName: order.tenderName,
      services: order.services,
      description: order.description,
      closingDate: order.closingDate
    };

    axios({
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin":"*"
      },
      url:url,
      data:orderData
    }).then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return(
    <div className='registration-form'>
          <form>
              <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control item" 
                  name="tenderName"
                  value={order.tenderName}
                  placeholder="Tender Name"
                  onChange={handleChange}
                  />
              </div>

              <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control item" 
                  name="services" 
                  value={order.services}
                  placeholder="services"
                  onChange={handleChange}
                  />
              </div>

              <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control item" 
                  name="description" 
                  value={order.description}
                  placeholder="Description"
                  onChange={handleChange}
                  />
              </div>

              <div className="form-group">
                  <input 
                  type="date" 
                  className="form-control item" 
                  name="closingDate" 
                  value={order.closingDate}
                  placeholder="Closing Date"
                  onChange={handleChange}
                  />
              </div>

              <div className="form-group">
                  <button 
                  type="button" 
                  className="btn btn-block create-account"
                  onClick={handleSubmit}
                  >
                    <Link to={'/'} >
                      Add Tender
                    </Link>
                  </button>
              </div>
          </form>
     </div>
  )
}

export default AddTender