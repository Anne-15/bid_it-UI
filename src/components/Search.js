import React from 'react'

const Search = () => {
  // const {setSearch} = useGlobalContext();

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