export interface Card {
    image?: Blob;
    title?: string;
    desc?: string;
    source?: string;
    sourceIcon?: Blob
}

export interface CardList {
    cardList: Card[];
    status: 'idle' | 'loading' | 'success' | 'failed';
    error: string;
}