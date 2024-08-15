import React from "react";
import { Button, ButtonContainer, DescriptionText, FontAwesomeIcon, FontistoIcon, TextButtonContainer, TitleText } from "./styles";
import { Fontisto } from "@expo/vector-icons";

interface CardButtonProps {
    title: string;
    description: string;
    iconName: string;
    iconLib: string;
}


export function CardButton({ title, description, iconName, iconLib }: CardButtonProps) {
    return (
        <Button>
            
            <TextButtonContainer>
                <TitleText>{title}</TitleText>    
                <DescriptionText>{description}</DescriptionText>
            </TextButtonContainer>
            {
                iconLib === "font-awesome" ?  
                    <FontAwesomeIcon name='notes-medical' size={40} color="#354DB0" />
                :
                    <FontistoIcon name='pills' size={32} color="#354DB0" />
            }
        </Button>
    );
}
