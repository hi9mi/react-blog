import React from 'react';
import ContentLoader from 'react-content-loader';

export default function BigLoadingBlock() {
	return (
		<ContentLoader
			className='article__big'
			speed={2}
			width={575}
			height={770}
			viewBox='0 0 575 770'
			backgroundColor='#dbfbff'
			foregroundColor='#ffffff'>
			<rect x='0' y='0' rx='0' ry='0' width='575' height='770' />
		</ContentLoader>
	);
}
