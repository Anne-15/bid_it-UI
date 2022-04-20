import React from 'react'

const Search = () => {
  // const {setSearch} = useGlobalContext();

  return (
      <section>
          <form className='search-form'>
            <div className="form-control">
                <label htmlFor="name"> Search for an order</label>
                <input type="text" name='name' id='name' className='form-input'/>
            </div>
          </form>
      </section>
  )
}
export default Search