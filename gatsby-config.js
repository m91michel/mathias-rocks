module.exports = {
  siteMetadata: {
    title: `Mathias Michel`,
    author: `Mathias Michel`,
    description: `Personal Homepage of Mathias Michel.`,
    siteUrl: `https://mathias.rocks`,
    bio: `Fullstack and iOS Developer | Interested in Tech, Blockchain, finance & politics`,
    social: {
      twitter: `https://twitter.com/m91michel`,
      github: `https://github.com/m91michel`,
      xing: `https://www.xing.com/profile/Mathias_Michel4/`,
      linkedIn: `https://www.linkedin.com/in/mathias-michel-b07b6557/`,
      mail: ``,
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/pages`,
          name: `page`,
        },
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-vscode`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-34806330-6`,
        anonymize: true,
      },
    },
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Mathias.rocks`,
          short_name: `Mathias.rocks`,
          start_url: `/`,
          background_color: `#ffffff`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: `content/assets/gatsby-icon.png`,
        },
      },
  ],
}
