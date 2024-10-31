import { Box } from './ImageBoxCss';

interface ImageBoxProps {
    imgUrl: string;
    musicName: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({ imgUrl, musicName }) => {
    return (
        <Box imgUrl={imgUrl}>
            <p>{musicName}</p>
        </Box>
    );
};

export default ImageBox;
