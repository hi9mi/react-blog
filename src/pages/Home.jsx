import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	BigLoadingBlock,
	BigRubricBlock,
	Button,
	LoadingBlock,
	MediumLoadingBlock,
	MediumRubrickBlock,
	RubricsBlock,
} from '../components';
import { fetchBigRubrics, fetchMediumRubrics, fetchRubrics } from '../redux/actions';

export default function Home() {
	const dispatch = useDispatch();

	const { rubricsItems, MediumRubricItems, BigRubricItems } = useSelector(({ rubrics, mRubrics, bigRubrics }) => {
		return {
			rubricsItems: rubrics.rubricsItems,
			MediumRubricItems: mRubrics.MediumRubricItems,
			BigRubricItems: bigRubrics.BigRubricItems,
		};
	});

	const { isLoaded, isLoadedM, isLoadedB } = useSelector(({ rubrics, mRubrics, bigRubrics }) => {
		return {
			isLoaded: rubrics.isLoaded,
			isLoadedM: mRubrics.isLoaded,
			isLoadedB: bigRubrics.isLoaded,
		};
	});

	const { sortBy, rubric } = useSelector(({ filters }) => filters);

	React.useEffect(() => {
		dispatch(fetchRubrics( sortBy ,rubric));
		dispatch(fetchMediumRubrics(sortBy ,rubric));
		dispatch(fetchBigRubrics(sortBy ,rubric));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rubric, sortBy]);

	return (
		<div className='container'>
			<div className='title__page'>
				<h1>Главная</h1>
			</div>
			<div className='main__content'>
				{isLoaded
					? rubricsItems.map((objRubric) => <RubricsBlock key={objRubric.id} {...objRubric} />)
					: Array(10)
							.fill(0)
							.map((_, index) => <LoadingBlock key={index} />)}
				{isLoadedM
					? MediumRubricItems.map((objMediumRubric) => (
							<MediumRubrickBlock key={objMediumRubric.id} {...objMediumRubric} />
					  ))
					: Array(1)
							.fill(1)
							.map((_, index) => <MediumLoadingBlock key={index} />)}
				{isLoadedB
					? BigRubricItems.map((objBigRubric) => <BigRubricBlock key={objBigRubric.id} {...objBigRubric} />)
					: Array(1)
							.fill(2)
							.map((_, index) => <BigLoadingBlock key={index} />)}
			</div>
			<Button showMore>
				<h2 className='more-h2'>Показать еще</h2>
			</Button>
		</div>
	);
}
