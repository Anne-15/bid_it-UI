import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddCompany = () => {
  const url = 'http://localhost:5000/suppliers';
  const [company, setCompany] = React.useState({
    companyName:"",
    category:"",
    sector:""
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
      sector: company.sector
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

  return(
    <div className='registration-form'>
          <form>
              <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control item" 
                  name="companyName"
                  value={company.companyName}
                  placeholder="Company Name"
                  onChange={handleChange}
                  />
              </div>

              <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control item" 
                  name="category" 
                  value={company.category}
                  placeholder="category"
                  onChange={handleChange}
                  />
              </div>

              <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control item" 
                  name="sector" 
                  value={company.sector}
                  placeholder="Sector"
                  onChange={handleChange}
                  />
              </div>

              <div className="form-group">
                  <button 
                  type="button" 
                  className="btn btn-block create-account"
                  onClick={handleSubmit}
                  >
                    <Link to={'/suppliers'} >
                      Add Company
                    </Link>
                  </button>
              </div>
          </form>
     </div>
  )
}

export default AddCompany