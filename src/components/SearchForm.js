import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  // console.log(cocktails,setSearchTerm);
  const searchRef = React.useRef(null);
  
  const handleSearchTerm = ()=>{
    setSearchTerm(searchRef.current.value);
  }
  const handleSubmit = (e)=>{
     e.preventDefault();
  }
  React.useEffect(()=>{
    searchRef.current.focus();
  },[]);
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input type='text' id='name' name='name' ref={searchRef} onChange={handleSearchTerm}></input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
