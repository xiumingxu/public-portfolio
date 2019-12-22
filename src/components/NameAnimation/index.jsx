import React from 'react';
import TweenOne from 'rc-tween-one';
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';

import PropTypes from 'prop-types';
import styles from './NameAnimation.module.css';

const propTypes = {
	text: PropTypes.string.isRequired
};

TweenOne.plugins.push(SvgDrawPlugin);

const NameAnimation = () => {
	// const name = useRef(null);
	// useEffect(() => {
	// 	let tl = new gsap.timeline();
	// 	tl
	// 		.to(name.current, {
	// 			strokeDashoffset : 0,
	// 			ease             : 'ease',
	// 			duration         : 2
	// 		})
	// 		.to(
	// 			name.current,
	// 			{
	// 				fill     : '#616161',
	// 				duration : 2
	// 			},
	// 			'-=1'
	// 		);
	// 	tl.play();
	// }, []);
	// const TweenOneGroup = TweenOne.TweenOneGroup;
	const animation = [
		{
			strokeDashoffset: '0%',
			// ease             : 'ease',
			duration: 2000
		},
		{
			fill: '#616161',
			duration: 1000,
			delay: -500
		}
	];

	return (
		<div className={styles.container}>
			<svg
				className='svg-content'
				height='100%'
				width='100%'
				viewBox='0 0 100 100'
				xmlns='http://www.w3.org/2000/svg'
			>
				<text
					// transform="translate(-922)"
					// fill-rule="evenodd"
					fontFamily='Saira Condensed'
					fontWeight='600'
					// letter-spacing=".3"
					strokeDasharray='100%'
					strokeDashoffset='100%'
					fill='rgba(0,0,0,0.3)'
					stroke='#616161'
					strokeWidth='0.3'
				>
					<TweenOne component='tspan' animation={animation}>
						<tspan x='0' y='50' fontSize='30'>
							Hey,
						</tspan>
					</TweenOne>
					<TweenOne component='tspan' animation={animation}>
						<tspan x='0' y='80' fontSize='20'>
							I ‘m Xiuming
						</tspan>
					</TweenOne>
				</text>
			</svg>
		</div>
	);
};

NameAnimation.propType = propTypes;
export default NameAnimation;
