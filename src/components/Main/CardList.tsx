import React, { useState } from 'react';
import Card from './Card';
import { CardListType, CardType } from '../../types/cards';

const dummyCards = [
	{
		title: 'git 꿀팀',
		desc: '실전에서 겪은 문제들을 정리',
		link: 'https://dangitgit.com/ko#accidental-commit-master',
	},
] as CardType[];

const CookieList = () => {
	const [cardList, setCardList] = useState<CardType[]>(dummyCards);
	return (
		<section>
			{cardList.map(card => (
				<Card key={card.id} cardInfo={card} />
			))}
		</section>
	);
};

export default CookieList;
