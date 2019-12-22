import * as React from 'react';
import PersonalBlogWrapper from './style';
import Posts from './Posts';
import Banner from './Banner';
import SimpleSwiper from './PostSlider';
import Contact from '../Contact';

type PersonalBlogProps = {};

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = ({ ...props }) => {
	return (
		<PersonalBlogWrapper {...props}>
			<Banner />
			{/* <SimpleSwiper /> */}
			<Posts />
			<div id='#contact'>
				<Contact />
			</div>
		</PersonalBlogWrapper>
	);
};

export default PersonalBlog;
