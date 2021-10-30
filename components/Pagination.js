import Link from 'next/link';


export default function Pagination({currentPage, numPages}) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numPages;

  const prevPage = `/blog/page/${currentPage-1}`;
  const nextPage = `/blog/page/${currentPage+1}`;

  if(numPages === 1) { return <></> }

  return (

    <div className="mt-6">
      <ul className="flex pl-0 list-none my-2">
        {!isFirstPage && (
          <Link key='first' href={prevPage}>
            <a>
              <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer">
                  Previous
              </li>
            </a>
          </Link>
        )}

        {
          Array.from({length: numPages}, (_, index)=> {
            return <Link key={index} href={`/blog/page/${index+1}`}>
              <a>
                <li className={`relative block py-2 px-3 leading-tight ${(currentPage===index+1)?`bg-gray-200`:`bg-white` } border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer`}>
                  index + 1
                </li>
              </a>
            </Link>
          })
        }

        {!isLastPage && (
          <Link key='last' href={nextPage}>
            <a>
              <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer">
                Next
              </li>
            </a>
          </Link>
        )}
      </ul>
    </div>

  );
}