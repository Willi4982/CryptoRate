
export interface ICard{
    id:number,
    cryptoName:string,
    currency:string,
    value:number,
    isLiked:'unliked'|'liked',
}

export type CardsState = ICard[]


export interface IFilterState{
    isFilter:'unfiltered'|'filtered',
    buttonDescription:string,
}








