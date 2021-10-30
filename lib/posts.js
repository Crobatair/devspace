import fs from "fs";
import path from "path";
import matter from "gray-matter";

const files = fs.readdirSync(path.join('posts'))
/**
 * Return all posts for DevBlog
 *
 * @returns {{frontmatter: *|{[p: string]: any}, slug: *}[]}
 */
export function getPosts(){
  return files.map((postFileName)=> {
    let slug = postFileName.replace('.md', '');
    let markdownWithMeta = fs.readFileSync(path.join('posts', postFileName), 'utf-8')
    const {data: frontmatter} = matter(markdownWithMeta);
    return {
      slug,
      frontmatter
    }
  })
}

/**
 * Return a single post by slug
 *
 * @param slug {str}
 * @returns {{[p: string]: any}}
 */
export function getPost(slug){
  let markDownWithMeta = fs.readFileSync(path.join('posts', `${slug}.md`), 'utf8');
  let { data: frontmatter, content} = matter(markDownWithMeta);
  return { frontmatter, content };
}

/**
 * Return all posts for DevBlog
 * @returns {{params: {slug: *}}[]}
 */
export function getPostsPaths(){
  return files.map((filename) => {
    return {
      params: {
        slug: filename.replace('.md', '')
      }
    }
  })
}

/**
 * return a array of categories as array of strings
 * @returns {string[]}
 */
export function getCategories(){
  const categories = getPosts().map((post) => post.frontmatter.category.toLowerCase());
  return [... new Set(categories)]
}