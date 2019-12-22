import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../containers/About';
import Contact from '../containers/Contact';

type AboutPageProps = {};

const AboutPage: React.FunctionComponent<AboutPageProps> = (props) => {
	return (
		<Layout>
			<SEO title='About Me' description='Xiuming Xu&#39;s Portfolio: UX Engineer and Explorer' />

			<About />
			<Contact />
		</Layout>
	);
};

export default AboutPage;
