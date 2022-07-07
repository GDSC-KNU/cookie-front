export interface CardType {
	id: number;
	link: string;
	title?: string;
	desc?: string;
	image?: Blob;
	source?: string;
	sourceIcon?: Blob;
}

export interface CardListType {
    cardList: CardType[];
    status: 'idle' | 'loading' | 'success' | 'failed';
    error: string | null;
}