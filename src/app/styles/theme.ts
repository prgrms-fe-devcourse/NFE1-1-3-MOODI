import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    layout: {
        max_width: '960px'
    },
    colors: {
        black: '#000000',
        gray_dark: '#676767',
        gray_normal: '#00000066',
        gray_light: '#BDBDBD',
        orange_primary: '#FF480E',
        orange_warn: '#FF4949',
        orange_button: '#FF480E',
        orange_reaction: '#FFBB80',
        orange_selected: '#FFF4F166',
        green: '#3BDE86',
        white: '#FFFFFF',
        white_bg: '#F8F8F8'
    },
    border: {
        default: '1px solid #E0E0E0',
        normal: '1px solid #00000066',
        not_selected: '1px solid #0000001A',
        selected: '1px solid #FF480E'
    }
};

export default theme;
