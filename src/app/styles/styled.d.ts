import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        layout: {
            max_width: string;
        };
        colors: {
            black: string;
            gray_dark: string;
            gray_normal: string;
            gray_light: string;
            orange_primary: string;
            orange_warn: string;
            orange_button: string;
            orange_reaction: string;
            green: string;
            white: string;
            white_bg: string;
        };
        border: {
            default: string;
        };
    }
}
