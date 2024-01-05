import { ImageList, ImageListItem } from "@mui/material";

export const DisplayListImages = ({
    pics = [{ id: 0, image: '', title: '' }],
    variant = 'quilted',
    cols = 4,
    rowHeight = 100,
    paddingX = 1,
    paddingY = 0,
    gap = 7
}) => {

    if (!pics || pics.length === 0) {
        throw new Error('El parámetro "pics" es obligatorio');
    }

    return (
        <ImageList
            variant={variant}
            cols={cols}
            rowHeight={rowHeight}
            sx={{ px: paddingX, py: paddingY }}
            gap={gap}
        >
            {
                pics
                    .map((item, i) => (
                        <ImageListItem
                            key={`masonry-${item.id}-${i}`}
                            rows={item.id % 2 ? 1 : 2}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))
            }
        </ImageList>
    )
}
