import React, { useEffect, useState } from 'react';
import Card from './Card';
import { CardListType, CardType } from '../../types/cards';
import { useAppSelector } from '../../hooks/useStore';

const CookieList = () => {
	const {cardList, status, error} = useAppSelector(state => state.cards);
	return (
		<section>
			{cardList?.map(card => (
				<Card key={card.id} cardInfo={card} />
			))}
		</section>
	);
};

export default CookieList;
