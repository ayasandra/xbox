import React, { useState } from 'react';
import games from '../../Main/GamesList/games';

const GamesFilter = () => {
	const [category, setCategory] = useState({ cat: '' });

	const handleCategory = (e) =>
		setCategory((value) => ({ cat: e.target.innerText }));

	return (
		<>
			<div className="blog">
				{games
					.filter((item) => item.category.includes(category.cat))
					.map(({ image, type, name, category }) => (
						<BlogElement
							image={image}
							type={type}
							name={name}
							category={category}
						/>
					))}
			</div>
		</>
	);
};

export default GamesFilter;