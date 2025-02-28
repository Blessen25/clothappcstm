import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface containerdivProps {
    children: React.ReactNode;
}

export interface numberplustextProps {
    number: string;
    text: string;
}

export interface HomepageNewarrivalsProps {
    text: string;
    clothdata: ClothdetailsCardProps[];
    route?: string;
}


export interface ClothdetailsCardProps {
    imglink: string;
    clothname: string;
    star: .5 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
    price: number;
    offerprice?: number;


}

export interface ButtonTextOnlyProps {
    buttonlabel: string;
    fullwidth: boolean;
    route?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

export interface CommentCardCompProps {
    star: .5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
    personname: string;
    description: string;
}

export interface PropsstarsectionProps {
    star: .5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
}

export interface FlexCompwithimgProps {

    img: string;
    htext: string;
    ptext: string;
    button: boolean;
    buttonlabel?: string;
    imgclassname?: React.CSSProperties;
    htextclassname?: React.CSSProperties;
    ptextclassname?: React.CSSProperties;

}

export interface AboutusthreecarddivProps {

    h2text: string;
    ptext: string;
    icon: IconDefinition;
}

export interface AboutusthreefeaturesProps {

    title: string;
    features: AboutusthreecarddivProps[];
}

export interface HappyCustomerCmntSectionProps {

    title: string;
}

export interface HeadingwithtitleandhomeProps {

    headingtitle: string;
    headername: string;
}