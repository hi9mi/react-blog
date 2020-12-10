import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { Rubrics, SortBy } from '..';
import { setRubric, setSortBy } from '../../redux/actions/filters';

export default function Menu() {
	const dispatch = useDispatch();

	const onSelectRubric = React.useCallback((index) => {
		dispatch(setRubric(index));
	}, []);

	const onSelectSortType = React.useCallback((type) => {
		dispatch(setSortBy(type));
	}, []);

	const { rubric, sortBy } = useSelector(({ filters }) => filters);

	const rubricsNames = ['Рубрики 1', 'Рубрики 2', 'Рубрики 3', 'Рубрики 4'];

	const sortNames = [
		{ name: 'популярности', type: 'views' },
		{ name: 'дате', type: 'date' },
		{ name: 'выбор редакции', type: 'rating' },
	];

	return (
		<div className='menu'>
			<div className='container'>
				<ul className='menu__items'>
					<li className='menu__item'>
						<Link to='/' className='a__menu'>
							Главная
						</Link>
					</li>
					<Route path='/' exact>
						<Rubrics rotated activeRubric={rubric} onClickRubrics={onSelectRubric} rubricsItems={rubricsNames} />
					</Route>
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
				<Route path='/' exact>
					<SortBy activeSortType={sortBy} sortItems={sortNames} onClickSortType={onSelectSortType} />
				</Route>
			</div>
		</div>
	);
}
