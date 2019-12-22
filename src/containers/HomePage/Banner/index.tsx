import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import NameAnimation from '../../../components/NameAnimation';

import SocialProfile from '../../../common/SocialProfile/SocialProfile';

// import NameAnimation from './NameAnimation';

import { BannerWrapper, BannerInner, Title } from './style';
import { SocialProfiles } from '../../About/style';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';

type BannerProps = {};

const Banner: React.FunctionComponent<BannerProps> = () => {
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
		<BannerWrapper>
			<BannerInner>
				<NameAnimation />
				<SocialProfiles>
					<SocialProfile items={SocialLinks} />
				</SocialProfiles>
			</BannerInner>
		</BannerWrapper>
	);
};

export default Banner;
