import React, { Fragment } from "react";
import SEO from "../components/layout/seo";
import Footer from "../components/layout/footer";
import LatestPosts from "../components/home/latest-posts";
import HeaderHero from "../components/home/header-hero";

class IndexPage extends React.Component {
  render() {
    return (
      <Fragment>
        <SEO
          title="Home"
          keywords={[
            `Mathias Michel`,
            `Developer`,
            `Entwickler`,
            `blog`,
            `gatsby`,
            `javascript`,
            `react`,
            `munich`,
            `blockchain`,
          ]}
        />
        <HeaderHero />
        <LatestPosts />
        <Footer />
      </Fragment>
    );
  }
}
export default IndexPage;
