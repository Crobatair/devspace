# DevSpace static Blog, with nextjs & vercel deployment service.

This repository, is to create the projects studied while learning about NextJs and Strapi, on course [Next.js Udemy course](https://www.udemy.com/course/nextjs-dev-to-deployment)


![DevSpace Blog](/public/images/showcase.png 'DevSpace Blog')


This project, it's a static website, that generate static routes for each Blog posted on the site.
The posts are generated from Markdown files, formatted as frontmatter & cont. Where the frontmatter is metadata related to blog rendering and content, that holds the data of the post itself.

The site contains a serverless function, that filter all the posts, and the user can searh for a prefference topic. This

[VIEW DEMO](https://customevents.vercel.app/)

# Screenshots of the site running...

#### Seach
![Search Bar](/public/images/searchShowCase.png 'Search Blogs')

#### Show Blog entries by Category
![Categories](/public/images/categoriesShowCase.png 'Categories')

#### Show Blog entries by Category
![Blog page](/public/images/readMoreShowCase.png 'Blog Page')


## Project Structure:

```javascript
/**
    /pages
        - All pages for the blog
        - /api
            - Serverless function, to perform the search posts action.
        
    /scripts
        - Scripts for create cache data accessible from the serverless function.
    /public
        - Images for the blog
        - Styles for the blog
    /posts
        - Markdown files for the blog
    /cache
        - Cache data for the blog, to perform searchs on the serverless function
        
*/
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Backend preparations.
First, run the development server for backend:

```bash

$ git clone git@github.com:Crobatair/devspace.git
$ npm install
$ touch .env
$ npm run dev

```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.