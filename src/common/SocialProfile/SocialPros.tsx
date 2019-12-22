import React from 'react';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';
import { SocialProfileFrame } from './SocialProfileFrame';
import SocialProfile from './SocialProfile';

type SocialProsProps = {};

const SocialPros: React.FunctionComponent<SocialProsProps> = () => {
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
	return (
		<SocialProfileFrame>
			<SocialProfile items={SocialLinks} />
		</SocialProfileFrame>
	);
};

export default SocialPros;
