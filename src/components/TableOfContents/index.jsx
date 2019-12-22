import React from 'react';

// import PropTypes from 'prop-types';
import styles from './tableOfContents.module.css';

// const propTypes = {
// 	// toc: PropTypes.Array.isRequired
// };

const TableOfContents = (toc) => {
	toc = toc.toc;
	const headings = toc.filter((heading) => heading.depth === 2).map((node) => node.value);
	return (
		<div className={styles.container} draggable>
			<h1 className={styles.icon}>Content</h1>
			<ul className={styles.contents}>
				{headings.map((h) => {
					const link = h.toLowerCase().split(/[|,.&]/).join('').split(' ').join('-');

					return (
						<li className={styles.li}>
							<a href={'#' + link}>{h} </a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

// TableOfContents.propType = propTypes;
export default TableOfContents;
