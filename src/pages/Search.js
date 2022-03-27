import React from 'react'

const Search = () => {
    // const url = 'http://localhost:5000/tenders/list';
    // const [ tender, setTender ] = useState([]);

    // const getProducts = async (e) => {
    //     const response = await axios.get(url).then((bids) => setTender(bids));
    //     const data = await response.json();

    //     e.preventDefault();
    //     console.log(data);
    // }

  return (
      <section className='section search'>
          <form className='search-form'>
            <div className="form-control">
                <label htmlFor="name"> Search for an order</label>
                <input type="text" name='name' id='name'/>
            </div>
          </form>
      </section>
  )
}
export default Search