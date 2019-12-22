require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: `Portfolio`,
		author: `Xiuming Xu`,
		about: `Self-study and thinking`,
		description: `A blog, a portfolio, a summary`,
		siteUrl: `http://xiumingxu.com`
	},
	plugins: [
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				minify: false // Breaks styles if not set to false
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
				ignore: [ `**/\.*` ] // ignore files starting with a dot
			}
		},

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
				ignore: [ `**/\.*` ] // ignore files starting with a dot
			}
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/data`,
				name: `data`,
				ignore: [ `**/\.*` ] // ignore files starting with a dot
			}
		},

		{
			resolve: `gatsby-transformer-remark`,
			options: {
				tableOfContents: {
					heading: null,
					maxDepth: 1
				},

				plugins: [
					`gatsby-remark-autolink-headers`,

					// {
					// 	resolve: `gatsby-remark-table-of-contents`,
					// 	options: {
					// 		exclude: 'Table of Contents',
					// 		tight: false,
					// 		fromHeading: 1,
					// 		toHeading: 1
					// 	}
					// },
					{
						resolve: `@raae/gatsby-remark-oembed`,
						options: {
							// usePrefix defaults to false
							// usePrefix: true is the same as ["oembed"]
							usePrefix: [ 'oembed', 'video' ],
							include: [ 'Twitter', 'Instagram', 'Vimeo' ],
							settings: {
								// Ex. Show all Twitter embeds with the dark theme
								Twitter: { theme: 'dark' },
								// Ex. Hide all Instagram comments by default
								Instagram: { hidecaption: true }
							},
							providers: {
								// Important to exclude providers
								// that adds js to the page.
								// If you do not need them.
								exclude: [ 'Reddit' ]
							}
						}
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							// maxWidth: 590,
							linkImagesToOriginal: true,
							wrapperStyle: `margin-top: 3rem !important; margin-bottom: 3rem !important; width: 100%`
						}
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem;`
						}
					},
					{
						resolve: `gatsby-remark-katex`,
						options: {
							// Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
							strict: `ignore`
						}
					},
					{
						resolve: `gatsby-remark-mermaid`
					},
					{
						resolve: `gatsby-remark-prismjs`
					},
					{
						resolve: `gatsby-remark-prismjs`
					},

					{
						resolve: `gatsby-remark-copy-linked-files`
					},
					{
						resolve: `gatsby-remark-smartypants`
					},
					{
						resolve: `gatsby-remark-reading-time`
					}
				]
			}
		},
		{
			resolve: `gatsby-transformer-sharp`
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				useMozJpeg: false,
				stripMetadata: true,
				defaultQuality: 75
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				//trackingId: `ADD YOUR TRACKING ID HERE`,
			}
		},
		{
			resolve: `gatsby-plugin-feed`
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Portfolio - Xiuming XU `,
				short_name: `Portfolio`,
				start_url: `/`,
				background_color: `#E6E6E6`,
				theme_color: `#BB1CFF`,
				display: `minimal-ui`,
				icon: `content/assets/favicon.png`
			}
		},
		{
			resolve: `gatsby-plugin-offline`
		},
		{
			resolve: `gatsby-plugin-react-helmet`
		},
		{
			resolve: `gatsby-plugin-typescript`
		},
		{
			resolve: `gatsby-plugin-lodash`
		},
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint: 'https://xiumingxu.us4.list-manage.com/subscribe/post?u=c5a0ceaeafb0782cc07897ada&amp'
			}
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Poppins`,
						variants: [ `300`, `400`, `500`, `600`, `700` ]
					},
					{
						family: `Fira Sans`,
						variants: [ `100`, `300`, `400`, `500`, `600`, `700` ]
					},
					{
						family: `Raleway`,
						variants: [ `100`, `300`, `400`, `500`, `600`, `700` ]
					},
					{
						family: `Saira Condensed`,
						variants: [ `100`, `300`, `400`, `500`, `600`, `700` ]
					}
				]
			}
		}
	]
};
