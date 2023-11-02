import * as React from "react";
import Layout from "../components/Layout";
// It is important to use '* as ' while importing '.module.css' files to import multiple css.module classes
import * as styles from "../styles/home.module.css";
import { Link, graphql } from "gatsby";
import {GatsbyImage} from 'gatsby-plugin-image';

export default function Home( {data} ) {
  // console.log(data)
  console.log(data)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop and Deploy</h3>
          <p>UX Designer & Web Developer based in Manchester</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio projects
          </Link>
        </div>
        <GatsbyImage  image={data.file.childImageSharp.gatsbyImageData} alt={data.file.childImageSharp.fluid}/>
        {/* <img src="/banner1.avif" alt="site banner" style={{ maxWidth: '100%', borderRadius: '25px' }} /> */}
      </section>
    </Layout>
  );
}

export const query = graphql`
query Banner {
  file(children: {}, relativePath: {eq: "banner1.avif"}) {
    id
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  }
}`

