import React from 'react';
import img from'../assets/img/1.jpg'

export default function Article() {
	return (
		<div className='container'>
			<div className='title__page'>
				<h1>Рубрики</h1>
			</div>
			<div className='rubrics__title'>
				<h2>То, что доктор прописал: 5 полезных бьюти-блогов дерматологов и косметологов</h2>
			</div>
			<div className='rubrics__wrapper'>
				<div className='rubrics__img'>
					<img src={img} alt='rubric img' />
				</div>
				<div className='rubrics__article'>
					<div className='rubrics__text'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatum possimus sint deserunt
							temporibus aut similique laborum. Ipsa eveniet voluptatibus ipsum cum minus dicta ex natus, porro nam
							illum quam ab officia aliquam corporis. Maiores eos cupiditate dolores necessitatibus ex veritatis ipsum
							soluta, ducimus sit animi culpa eius praesentium consequatur reiciendis molestias nisi eum quis est!
							Assumenda laborum temporibus officiis, architecto impedit molestiae exercitationem, minima vero optio,
							ipsum reiciendis voluptates tempora. Dolor nam nesciunt, debitis soluta error excepturi laudantium natus
							possimus ipsam eligendi rerum saepe iste ab inventore placeat! Laboriosam iure dicta non, vitae ut amet
							aut id quod fuga quo perspiciatis repellat deserunt eum debitis unde reprehenderit sint blanditiis optio
							at assumenda. Velit suscipit, repellat at sed corrupti voluptates similique maxime natus inventore rerum
							quaerat tenetur ipsam eligendi officia reprehenderit, dolor dolorem! Quos laudantium quia ipsam animi
							assumenda quasi reprehenderit itaque commodi beatae, nulla incidunt et nostrum minus adipisci cumque,
							necessitatibus molestiae nihil. Ullam esse doloribus ad blanditiis eius aperiam perferendis accusantium
							vitae assumenda odit ipsam, totam dolore placeat, omnis harum consequatur eligendi illum similique rem.
							Iure quos harum officia iusto reiciendis. Iste debitis velit eveniet, voluptate natus nesciunt cumque
							laudantium quidem recusandae laborum illo sunt dicta, sed atque? Error animi, omnis quia voluptas nemo
							aspernatur aliquid necessitatibus est cumque magni laborum et hic fugit nihil accusamus quaerat dolorum
							enim dolore tenetur commodi saepe accusantium. Inventore ullam reiciendis incidunt hic temporibus,
							consectetur amet est sunt molestiae quis ex praesentium, facilis voluptatem nesciunt deleniti ratione qui.
							Fugiat nihil rerum animi magni accusantium, dolore nisi unde excepturi eligendi doloribus architecto quos
							totam laudantium repellendus, placeat veritatis magnam dolor facere dolorum illo? Explicabo, assumenda nam
							atque amet corrupti voluptatibus, consequuntur labore ut quisquam nostrum sed accusamus nesciunt est!
							Illum quos nostrum iste? Molestias dolorum architecto dolore inventore laudantium accusantium velit!
							Animi, voluptatum repudiandae deleniti explicabo optio ipsa quibusdam aut placeat excepturi aspernatur
							natus quaerat blanditiis doloribus, fugiat ex quo voluptatibus minima labore iste praesentium dolore nam
							aperiam. Quod ipsam voluptatum voluptates id dolores veritatis doloremque quo maxime. Possimus est
							consectetur eum reprehenderit mollitia voluptates rerum, sint, at magnam adipisci nemo, assumenda quo
							blanditiis voluptatem cum optio similique libero ab ducimus? Enim distinctio numquam consectetur deserunt
							ab autem quae nobis praesentium, nostrum quos sapiente doloremque est illo voluptatem? Laboriosam odit,
							laudantium temporibus eveniet porro ea earum facilis voluptates beatae officia libero! Deleniti tempore
							maxime fugiat culpa numquam placeat quia veniam eveniet molestiae commodi.
						</p>
					</div>
					<div className='rubrics__autor'>
						<p>Автор статьи: Lorem, ipsum.</p>
					</div>
					<div className='rubrics__date'>
						<p>14.09.2020</p>
					</div>
				</div>
			</div>
		</div>
	);
}
