module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
    description:
      "This is my first day of learning gatsby freamewrok so far so.",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
  ],
};
