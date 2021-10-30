import Link from 'next/link';

export default function CategoryList({ categories }) {


  return (
    <div>
      <div className="w-full p-5 bg-white rounded-lg shadow-md mt-6">
        <h3 className="text-2xl bg-gray-500 text-white p-3 rounded">
          Blog Categories
        </h3>
        <ul className="divide-y divide-gray-300">

          {categories.map((category, index) => (
            <Link key={index} href={`/blog/category/${category}`}>
              <a>
                <li className="p-4 cursor-pointer hover:bg-gray-50">
                  {category}
                </li>
              </a>
            </Link>
          ))}
        </ul>


      </div>
    </div>

  );
}