import React from 'react';
import { Snackbar } from 'react-native-paper';
import { SnackbarContainer } from './styles';


interface CustomSnackbarProps {
    visible: boolean;
    text: string;
    onDismiss: () => void;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({ visible, text, onDismiss }) => {
    return (
        <SnackbarContainer>
            <Snackbar
                visible={visible}
                duration={400}
                onDismiss={onDismiss}
            >
                {text}
            </Snackbar>
        </SnackbarContainer>
    );
};


export default CustomSnackbar;
