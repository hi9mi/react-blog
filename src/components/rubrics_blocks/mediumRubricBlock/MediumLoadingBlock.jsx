import React from 'react';
import ContentLoader from 'react-content-loader';

export default function MediumLoadingBlock() {
	return (
		<ContentLoader
			className='ad'
			speed={2}
			width={575}
			height={330}
			viewBox='0 0 575 330'
			backgroundColor='#dbfbff'
			foregroundColor='#ffffff'>
			<rect x='0' y='0' rx='0' ry='0' width='575' height='330' />
		</ContentLoader>
	);
}
