const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function postData(){
  const files = fs.readdirSync('posts');
  const posts = files.map(filename => {
    const fileContents = fs.readFileSync(path.join('posts', filename), 'utf8');
    const { data: frontmatter } = matter(fileContents);
    return {
      slug: filename.replace(/\.md$/, ''),
      frontmatter
    };
  });

  return `export const posts = ${JSON.stringify(posts)}`;
}

try {
  fs.readdirSync('cache');
} catch (e) {
  fs.mkdirSync('cache');
}

fs.writeFile('cache/data.js', postData(), function(err){
  if (err) {
   return console.log(err);
  }

  console.log('Posts Cached....')
})