import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import SocialProfile from '../../common/SocialProfile/SocialProfile';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';
import { AboutWrapper, AboutImage, AboutPageTitle, AboutDetails, SocialProfiles } from './style';

const SocialLinks = [
	{
		icon: <IoLogoFacebook />,
		url: 'https://www.facebook.com/redqinc/',
		tooltip: 'Facebook'
	},
	{
		icon: <IoLogoInstagram />,
		url: 'https://www.instagram.com/redqinc/',
		tooltip: 'Instagram'
	},
	{
		icon: <IoLogoTwitter />,
		url: 'https://twitter.com/redqinc',
		tooltip: 'Twitter'
	},
	{
		icon: <IoLogoLinkedin />,
		url: 'https://www.linkedin.com/company/redqinc/',
		tooltip: 'Linked In'
	}
];

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = (props) => {
	const Data = useStaticQuery(graphql`
		query {
			avatar: file(absolutePath: { regex: "/about.jpg/" }) {
				childImageSharp {
					fluid(maxWidth: 1770, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			site {
				siteMetadata {
					author
					about
				}
			}
		}
	`);

	return (
		<AboutWrapper>
			<AboutPageTitle>
				<h2>ABOUT ME</h2>
				<p />
			</AboutPageTitle>

			<AboutImage>
				<Image fluid={Data.avatar.childImageSharp.fluid} alt='author' />
			</AboutImage>

			<AboutDetails>
				<h2>Hey there, I'm Xiuming XU </h2>
				<p>
					For the past three years, I worked as a creative technologist in the Human Machine Interaction
					domain. It was interesting that I attached to the physical and digital world in my first career step
					and it was really lovely. However, I am an explorer, not only a traveler around the world, but also
					in my career. I am resilient to meet unknown, ambiguity, and embracing the changing.
				</p>
				<p>
					I love to see the impact of my handcrafting, and practically influence the big amount of customers
					and users. It is challenging, but very exciting in the end.
				</p>
				<p>
					My solid engineering background is the base for me to solve critical problems and I am honored to
					have participated in the whole lifecycle of market-lauched products (NIO ES8 HMI, NIO Nomi, and NIO
					ET7 exterior lighting). My expertises are suited in a team where designer and technology experts
					dream up ideas together. My background in CS, HCI and entrepreneurship supports me in vertitile role
					between business, users and technology crafting the solution within the business requirement and
					market need.
				</p>
				<p>I would love to hear new ideas and ready to fix hands-on problems again.</p>

				<h2>--XX</h2>

				<SocialProfiles>
					<SocialProfile items={SocialLinks} />
				</SocialProfiles>
			</AboutDetails>
		</AboutWrapper>
	);
};

export default About;
