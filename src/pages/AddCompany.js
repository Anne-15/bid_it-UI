import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddCompany = () => {
  const url = 'http://localhost:6060/suppliers';
  const [company, setCompany] = React.useState({
    companyName:"",
    category:"",
    sector: "",
    about: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setCompany({
      ...company,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const companyData = {
      companyName: company.companyName,
      category: company.category,
      sector: company.sector,
      about: company.about
    };

    axios({
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin":"*"
      },
      url:url,
      data:companyData
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
          <span className="contact100-form-title">Add Company</span>

          <div
            className="wrap-input100 validate-input bg1"
            data-validate="Please Type Your Name"
          >
            <span className="label-input100">COMPANY NAME *</span>
            <input
              className="input100"
              type="text"
              name="companyName"
              placeholder="Enter Your Company Name"
              value={company.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="wrap-input100 validate-input bg1 rs1-wrap-input100">
            <span className="label-input100">Category *</span>
            <input
              className="input100"
              type="text"
              name="category"
              value={company.category}
              placeholder="Category "
              onChange={handleChange}
            />
          </div>

          <div className="wrap-input100 bg1 rs1-wrap-input100">
            <span cclassName="label-input100">Sector</span>
            <input
              className="input100"
              type="text"
              name="sector"
              value={company.sector}
              placeholder="Sector"
              onChange={handleChange}
            />
          </div>
          <div
            class="wrap-input100 validate-input bg0 rs1-alert-validate"
            data-validate="Please Type Your Message"
          >
            <span class="label-input100">About Company</span>
            <textarea
              class="input100"
              name="about"
              value={company.about}
              placeholder="About us..."
              onChange={handleChange}
            ></textarea>
          </div>

          <div class="container-contact100-form-btn">
            <button class="contact100-form-btn" onClick={handleSubmit}>
              <Link to={"/"}>Add Company</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCompany