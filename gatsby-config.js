module.exports = {
  siteMetadata: {
    title: "faras Portfolio",
    description: "portofolio faras",
    author: "faras adilah",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "portofolio faras",
        short_name: "Portfolio",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sass",
  ],
};
