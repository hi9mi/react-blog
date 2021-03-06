import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Rubrics, SortBy } from '..';
import { setRubric, setSortBy } from '../../redux/actions/filters';
import { rubricsNames, sortNames } from '../../utils/Constants/rubricAndSortNames';

export default function Menu() {
	const dispatch = useDispatch();

	const onSelectRubric = React.useCallback((index) => {
		dispatch(setRubric(index));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onSelectSortType = React.useCallback((type) => {
		dispatch(setSortBy(type));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { rubric, sortBy } = useSelector(({ filters }) => filters);

	return (
		<div className='menu'>
			<div className='container'>
				<ul className='menu__items'>
					<li className='menu__item'>
						<Link to='/' className='a__menu'>
							Главная
						</Link>
					</li>
					<Rubrics rotated activeRubric={rubric} onClickRubrics={onSelectRubric} rubricsItems={rubricsNames} />
					<li className='menu__item'>
						<Link to='/about-us' className='a__menu'>
							О нас
						</Link>
					</li>
					<li className='menu__item'>
						<Link to='/contact-us' className='a__menu'>
							Контакты
						</Link>
					</li>
				</ul>
				<SortBy activeSortType={sortBy} sortItems={sortNames} onClickSortType={onSelectSortType} />
			</div>
		</div>
	);
}
