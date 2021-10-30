import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import {sortByDate} from "@/utils/index";

export default function CategoryBlogPage({posts, category_name}) {
  return (
    <Layout title={`Posts for ${category_name}`}>
      <h1 className="text-5xl border-b-4 p-5 font-bold">
        Latest Posts for {category_name}
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          posts.map((post, index)=>
              <Post key={index} post={post} />
           )
        }
      </div>
    </Layout>
  )
}

export async function getStaticPaths({  }){
  const files = fs.readdirSync(path.join('posts'));
  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf8')
    const { data: frontmatter } = matter(markdownWithMeta);
    return frontmatter.category;
  })

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
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map((postFileName)=> {
    let slug = postFileName.replace('.md', '');
    let markdownWithMeta = fs.readFileSync(path.join('posts', postFileName), 'utf-8')
    const {data: frontmatter} = matter(markdownWithMeta);
    return {
      slug,
      frontmatter
    }
  }).filter((post)=>{
    return post.frontmatter.category.toLowerCase() === category_name
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
      category_name
    }
  }
}
