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

  return (
    <div className="container-contact100">
      <div className="wrap-contact100">
        <form className="contact100-form validate-form">
          <span className="contact100-form-title">Add Tender</span>

          <div
            className="wrap-input100 validate-input bg1"
            data-validate="Please Type Your Name"
          >
            <span className="label-input100">TENDER NAME *</span>
            <input
              className="input100"
              type="text"
              name="tenderName"
              placeholder="Enter Tender Name"
              value={order.tenderName}
              onChange={handleChange}
            />
          </div>

          <div className="wrap-input100 validate-input bg1 rs1-wrap-input100">
            <span className="label-input100">Services *</span>
            <input
              className="input100"
              type="text"
              name="services"
              value={order.services}
              placeholder="Services "
              onChange={handleChange}
            />
          </div>

          <div className="wrap-input100 bg1 rs1-wrap-input100">
            <span cclassName="label-input100">Date</span>
            <input
              className="input100"
              type="date"
              name="closingDate"
              value={order.closingDate}
              placeholder="Closing Date"
              onChange={handleChange}
            />
          </div>
          <div
            class="wrap-input100 validate-input bg0 rs1-alert-validate"
            data-validate="Please Type Your Message"
          >
            <span class="label-input100">Description</span>
            <textarea
              class="input100"
              name="description"
              value={order.description}
              placeholder="Job Description"
              onChange={handleChange}
            ></textarea>
          </div>

          <div class="container-contact100-form-btn">
            <button class="contact100-form-btn" onClick={handleSubmit}>
              <Link to={"/"}>Add Tender</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTender