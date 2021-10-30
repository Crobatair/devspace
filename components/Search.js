import { useState, useEffect} from "react";
import { FaSearch } from "react-icons/fa"
import SearchResults from "@/components/SearchResults";

export default function Search({}) {

  const [ searchTerm, setSearchTerm] = useState('');
  const [ searchResult, setSearchResult] = useState([]);

  useEffect(()=>{
    let getResults = async () =>{
      if (searchTerm === '' || searchTerm.trim() === ''){
        setSearchResult([]);
      } else {
        const response = await fetch(`/api/search?q=${searchTerm}`)
        const { results } = await response.json();
        console.log(results)
        setSearchResult( results )
      }

    }
    getResults()

  }, [ searchTerm ])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='relative bg-gray-600 p-a'>
      <div className="container mx-auto flex items-center justify-center md:justify-end">
        <div className="relative text-gray-600 w-72">
          <form onSubmit={handleSubmit}>
            <input
              id='search'
              type='search'
              name='search'
              value={searchTerm}
              className="bg-white h-10 px-5 pr-10 m-1 rounded-full text-sm focus:outline-none w-72"
              onChange={(e) => {
                setSearchTerm(e.target.value)
              }}
              placeholder='Search Posts...'
            />
            <FaSearch className='absolute top-0 right-0 text-black mt-4 mr-4' />

          </form>
        </div>
        <SearchResults results={searchResult} />
      </div>
    </div>

  );
}