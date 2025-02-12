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
    star : 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
    price : number;
    offerprice ?: number;
    

}