import React from 'react';
import { CardType } from '../../types/cards';

type PropType  = {
	cardInfo: CardType
}

const Card = ({ cardInfo }: PropType) => {
	const {title, desc, link} = cardInfo;
	return (
		<article>
			<div>title: {title}</div>
			<div>desc : {desc}</div>
			<div>link: <a href={link}>링크</a></div>
		</article>
	);
};

export default React.memo(Card);
