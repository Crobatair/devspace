import Layout from "@/components/Layout";
import Post from "@/components/Post";
import {POSTS_PER_PAGE} from "@/config/index";
import Pagination from "@/components/Pagination";
import {getCategories, getPosts} from "@/lib/posts";
import CategoryList from "@/components/CategoryList";

export default function BlogPage({posts, numPages, currentPage, categories}) {
  return (
    <Layout>
      <h1 className="text-5xl border-b-4 p-5 font-bold">
        Blog
      </h1>
      <div className="flex justify-between">
        <div className="w-3/4 mr-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              posts.map((post, index)=>
                  <Post key={index} post={post} />
               )
            }
          </div>
        </div>
        <div className="w-1/4">
          <CategoryList categories={categories} />
        </div>
      </div>




      <Pagination currentPage={currentPage} numPages={numPages}/>
    </Layout>
  )
}

export async function getStaticPaths({  }){
  const files = getPosts()

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE)

  return {
    paths: Array.from({ length: numPages }).map((_, i) => {
      return {
        params: {
          page_index: (i + 1).toString()
        }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const page = parseInt( params && params.page_index || 1 )
  const posts = getPosts()
  const categories = getCategories();

  const numPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const pageIndex = page - 1
  const orderedPosts = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  )

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categories
    }
  }
}
