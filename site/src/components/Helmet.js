import React from 'react';
import ReactHelmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

// import logo16 from '../../media/logo16.png';
// import logo32 from '../../media/logo32.png';
// import logo180 from '../../media/logo180.png';
// import logo512 from '../../media/logo512.png';

const Helmet = ({ theme = {} }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            siteUrl
            description
            title
          }
        }
      }
    `}
    render={({ site }) => {
      const { title, description, siteUrl } = site.siteMetadata;

      return (
        <ReactHelmet htmlAttributes={{ lang: 'en' }}>
          <meta charSet="utf-8" />

          <title>{`${title}`}</title>
          <meta name="description" content={description} />
          <meta name="theme-color" content={theme.background} />

          <meta itemProp="name" content={title} />
          <meta itemProp="description" content={description} />
          <meta
            itemProp="image"
            content={`${siteUrl}/images/swarm_banner_main.png`}
          />

          <meta property="og:site_name" content="Reach4Help" />
          <meta property="fb:app_id" content="1626611720838538" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta
            property="og:image"
            content={`${siteUrl}/images/swarm_banner_main.png`}
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@Reach4HelpOrg" />
          <meta name="twitter:creator" content="@Reach4HelpOrg" />
          <meta
            name="twitter:image"
            content={`${siteUrl}/images/swarm_banner_main.png`}
          />
          <meta
            name="twitter:image:src"
            content={`${siteUrl}/images/swarm_banner_main.png`}
          />
          <meta
            name="twitter:image:alt"
            content="Reach 4 Help / Unifying help around the world."
          />

          <link rel="shortcut icon" href={`${siteUrl}/images/logo32.png`} />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${siteUrl}/images/logo180.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${siteUrl}/images/logo32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${siteUrl}/images/logo16.png`}
          />
        </ReactHelmet>
      );
    }}
  />
);

Helmet.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object,
};

export default withTheme(Helmet);
