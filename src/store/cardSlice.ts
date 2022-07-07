import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { CardType, CardListType } from '../types/cards';

const dummy = [
	{
		title: 'git 꿀팀',
		desc: '실전에서 겪은 문제들을 정리',
		link: 'https://dangitgit.com/ko#accidental-commit-master',
	},
];

const initialState = {
	cardList: dummy,
	status: 'idle',
	error: null,
} as CardListType;

export const cardSlice = createSlice({
	name: 'cards',
	initialState: initialState,
	reducers: {
		addCard: (state: CardListType, action: PayloadAction<CardType>) => {
			state.cardList.push(action.payload);
		},
		removeCard: (state: CardListType, action: PayloadAction<number>) => {
			const newCardList = state.cardList?.filter((card: CardType) => {
				card.id !== action.payload;
			});
			state.cardList = newCardList;
		},
		editCard: (state: CardListType, action: PayloadAction<CardType>) => {
			const targetCard = state.cardList?.find((card: CardType) => {
				card.id === action.payload.id;
			});
			if (targetCard) {
				targetCard.title = action.payload.title;
				targetCard.link = action.payload.link;
				targetCard.desc = action.payload.desc;
			}
		},
	},
});

export const { addCard, removeCard, editCard } = cardSlice.actions;
export default cardSlice.reducer;
