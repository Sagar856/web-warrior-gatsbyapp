import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from '../styles/project-details.module.css';
import { Link, graphql } from 'gatsby';

export default function projectDetails({data}) {
    const { html } = data.markdownRemark
    const {stack, title, featuredImg} = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={styles.details}>
        <Link to='/projects' style={{border: 'solid 1px rgb(119, 51, 171)', borderRadius: '5px', backgroundColor: 'rgb(196, 142, 237)', padding: '5px 8px', color: 'rgb(140, 7, 243)'}}>&larr;Back</Link>
        <h2>{title}</h2>
        <h3>{stack}</h3>
      </div>
      <div className={styles.featured}>
        <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData}/>
      </div>
      <div className={styles.html} dangerouslySetInnerHTML={{ __html: html}}/>
    </Layout>
  )
}

export const query = graphql`
query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
  `
