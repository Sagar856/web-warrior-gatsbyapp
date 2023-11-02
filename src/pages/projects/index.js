import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/project.module.css";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Projects({ data }) {
  console.log(data);
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Develop and deploy project 1</h3>
        <div className={styles.projects}>
          {projects.map((project) => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage
                  image={project.frontmatter.thumb.childImageSharp.gatsbyImageData}
                  alt={project.frontmatter.thumb.childImageSharp.gatsbyImageData.backgroundColor}
                  src=""
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Write me to {contact}</p>
      </div>
    </Layout>
  );
}

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
