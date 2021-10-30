import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function handler(req, res) {
  let posts;
  if(req.method === 'OPTIONS'){ res.status(200).send('ok'); return; }

  if (process.env.NODE_ENV === 'production'){
    posts = require('../../cache/data').posts;

  } else {
    const files = fs.readdirSync(path.join('posts'))
    posts = files.map((filename) => {
      const file = fs.readFileSync(path.join('posts', filename), 'utf8');
      const slug = filename.replace('.md', '')
      const { data: frontmatter } = matter(file);
      return {
        slug,
        frontmatter
      };
    });
  }

  const results = posts.filter((post) => {
    const { title, excerpt, category } = post.frontmatter;
    const { q: search } = req.query;
    return title.toLowerCase().includes(search.toLowerCase()) ||
      excerpt.toLowerCase().includes(search.toLowerCase()) ||
      category.toLowerCase().includes(search.toLowerCase());
  });

  res.status(200).json(JSON.stringify({ results }));
}
