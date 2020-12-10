import PropTypes from 'prop-types';
import React from 'react';

const SortBy = React.memo(function SortBy({ sortItems, activeSortType, onClickSortType }) {
	const sortRef = React.useRef();

	const activeNameSort = sortItems.find((obj) => obj.type === activeSortType).name;

	const onSelectSortItem = (index) => {
		if (onClickSortType) {
			onClickSortType(index);
		}
		setVisableSortBy(false);
	};



	const [visableSortBy, setVisableSortBy] = React.useState(false);

	const toggleVisableSortBy = () => {
		setVisableSortBy(!visableSortBy);
	};

	const handlOutSideSortClick = (e) => {
		if (!e.path.includes(sortRef.current)) {
			setVisableSortBy(false);
		}
	};

	React.useEffect(() => {
		document.body.addEventListener('click', handlOutSideSortClick);
	}, []);

	return (
		<div ref={sortRef} className='sort__block'>
			<div className='sort__label'>
				<b>Сортировка по:</b>
				<span onClick={toggleVisableSortBy}>{activeNameSort}</span>
			</div>
			{visableSortBy && (
				<div className='sort__items'>
					<ul>
						{sortItems.map((obj, index) => (
							<li onClick={() => onSelectSortItem(obj.type)} key={`${obj.type}_${index}`}>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
});

SortBy.propTypes = {
	activeSortType: PropTypes.string,
	sortItems: PropTypes.arrayOf(PropTypes.object),
	onClickSortType: PropTypes.func,
};

SortBy.defaultProps = {
	sortItems: [],
};

export default SortBy;
