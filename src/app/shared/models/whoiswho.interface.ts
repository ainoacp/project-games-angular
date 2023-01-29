export interface IQuestions{
    title:string;
    key:string
    options:string[];
    isAnswered?:boolean;
}


export interface IPeople{
    img:string;
    gender:string;
    hairColor:string;
    moustache:string;
    glasses:string;
    hatOrCap:string;
    clothesColor:string;
    skinColor:string;
    longHair:string;
    isChecked?:boolean;
}