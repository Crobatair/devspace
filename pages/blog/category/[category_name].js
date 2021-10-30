import Layout from "@/components/Layout";
import Post from "@/components/Post";
import {sortByDate} from "@/utils/index";
import {getCategories, getPosts} from "@/lib/posts";
import CategoryList from "@/components/CategoryList";

export default function CategoryBlogPage({posts, category_name, categories}) {
  return (
    <Layout title={`Posts for ${category_name}`}>
      <h1 className="text-5xl border-b-4 p-5 font-bold">
        Latest Posts for {category_name}
      </h1>
      <div className='flex justify-between'>
        <div className="w-3/4 mr-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              posts.map((post, index)=>
                  <Post key={index} post={post} />
               )
            }
          </div>
        </div>
        <div className="w-1/4 mr-10">
          <CategoryList categories={categories}/>
        </div>
      </div>


    </Layout>
  )
}

export async function getStaticPaths({  }){
  const categories = getPosts().map((post)=>post.frontmatter.category);
  return {
    paths: categories.map((category) => ({
      params: {
        category_name: category.toLowerCase()
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params: { category_name }}) {
  let posts = getPosts().filter((post)=>{
    return post.frontmatter.category.toLowerCase() === category_name
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
      category_name,
      categories: getCategories()
    }
  }
}
