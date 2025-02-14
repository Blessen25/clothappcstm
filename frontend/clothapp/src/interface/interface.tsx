export interface containerdivProps{
    children: React.ReactNode;
}

export interface numberplustextProps{
    number : string;
    text: string;
}

export interface HomepageNewarrivalsProps {
    text : string;
    clothdata : ClothdetailsCardProps[];
}

export interface ClothdetailsCardProps{
    imglink : string;
    clothname : string;
    star : .5 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
    price : number;
    offerprice ?: number;
    

}

export interface ButtonTextOnlyProps{
    buttonlabel : string;
    fullwidth : boolean;
    route ?: string;
    onClick ?: () => void;
    type ?: "button" | "submit" | "reset";
    disabled ?: boolean;
    className ?: string;
    style ?: React.CSSProperties;
}

export interface CommentCardCompProps{
    star : .5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 ;
    personname : string;
    description: string;
}

export interface PropsstarsectionProps {
    star : .5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 ;
}