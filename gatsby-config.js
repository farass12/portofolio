module.exports = {
  siteMetadata: {
    title: "Faras Portfolio",
    description: "portofolio Faras",
    author: "Faras Adilah",
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
        name: "portofolio Faras",
        short_name: "Portfolio",
        start_url: "/",
        background_color: "#ffc6eeff",
        theme_color: "#fca0e4ff",
        display: "standalone",
        icon: "src/images/iconayas.jpeg",
      },
    },
    "gatsby-plugin-sass",
  ],
};
