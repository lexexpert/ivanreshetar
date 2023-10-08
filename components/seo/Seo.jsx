import Head from "next/head";
import personalData from "../../data/personalData";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>{pageTitle && `${pageTitle} | ${personalData.name}`}</title>
    </Head>
  </>
);

export default Seo;
