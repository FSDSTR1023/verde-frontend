import { Box, Card, CardActions, CardContent, Stack, Typography, CardActionArea, CardMedia } from '@mui/material'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const ClientFile = () => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                pt: '4em',
                // bgcolor: 'yellow'
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                // bgcolor: 'yellowgreen',
                width: '80%'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: window.innerWidth < 1323 ? 'column' : 'row',
                    justifyContent: 'space-between',
                    // bgcolor: 'yellowgreen',
                    gap: '3rem'
                }}>

                    <Stack
                        direction='column'
                        alignItems='left'

                    >
                        <span style={{ display: 'flex', gap: '.5em' }}>
                            <Typography
                                variant="h6"
                                textAlign='left'
                                fontFamily='Tenor Sans'
                                color='#7C7C7C'
                            >
                                DATOS PERSONALES
                            </Typography>
                            <EditOutlinedIcon color='disabled' />
                        </span>

                        <Typography
                            variant='body1'
                            fontFamily='Be Vietnam Pro'
                            color='#000000b8'
                            fontWeight='300'
                            textAlign='left'
                            mt={2}
                        >
                            Lucía Casado Hernández
                        </Typography>
                        <Typography
                            variant='body1'
                            fontFamily='Be Vietnam Pro'
                            color='#000000b8'
                            fontWeight='300'
                            textAlign='left'
                            my={2}
                        >
                            cristinadelgado@gmail.com
                        </Typography>
                        <Typography
                            variant='body1'
                            fontFamily='Be Vietnam Pro'
                            color='#000000b8'
                            fontWeight='300'
                            textAlign='left'
                        >
                            654 89 25 65
                        </Typography>

                    </Stack>
                    <Stack
                        direction='column'
                        alignItems='left'
                    >
                        <span style={{ display: 'flex', gap: '.5em' }}>
                            <Typography
                                variant="h6"
                                textAlign='left'
                                fontFamily='Tenor Sans'
                                color='#7C7C7C'
                            >
                                DATOS DE FACTURACIÓN
                            </Typography>
                            <EditOutlinedIcon color='disabled' />
                        </span>

                        <Typography
                            variant='body1'
                            fontFamily='Be Vietnam Pro'
                            color='#000000b8'
                            fontWeight='300'
                            textAlign='left'
                            mt={2}
                        >
                            C/Juan Luis Peralta nº 1 4ºD
                        </Typography>
                        <Typography
                            variant='body1'
                            fontFamily='Be Vietnam Pro'
                            color='#000000b8'
                            fontWeight='300'
                            textAlign='left'
                            my={2}
                        >
                            41006, Sevilla
                        </Typography>

                    </Stack>
                </Box>

                <Typography variant="h6" textAlign='center' fontFamily='Tenor Sans' color='#7C7C7C' mt={5} >
                    GALERÍAS
                </Typography>
                <Box
                    sx={{
                        p: '3rem',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        overflow: 'auto',
                        gap: '1rem',
                        width: '100%'
                    }}
                >

                    {/* <Card sx={{ p: 1, minWidth: 225, minHeight: 225 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                width='200'
                                height='150'
                                image="https://cdn0.bodas.net/article-real-wedding/267/3_2/1280/jpg/2297557.webp"
                                alt="foto"
                            />
                        </CardActionArea>
                        <CardActions
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="body2"
                                    component="div"
                                    sx={{ fontFamily: "Be Vietnam Pro" }}
                                >
                                    LUCÍA Y MARIO
                                </Typography>

                            </CardContent>
                        </CardActions>
                    </Card>
                    <Card sx={{ p: 1, minWidth: 225, minHeight: 225 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                width='200'
                                height='150'
                                image="https://cdn0.bodas.net/article-real-wedding/267/3_2/1280/jpg/2297557.webp"
                                alt="foto"
                            />
                        </CardActionArea>
                        <CardActions
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="body2"
                                    component="div"
                                    sx={{ fontFamily: "Be Vietnam Pro" }}
                                >
                                    LUCÍA Y MARIO
                                </Typography>

                            </CardContent>
                        </CardActions>
                    </Card>
                    <Card sx={{ p: 1, minWidth: 225, minHeight: 225 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                width='200'
                                height='150'
                                image="https://cdn0.bodas.net/article-real-wedding/267/3_2/1280/jpg/2297557.webp"
                                alt="foto"
                            />
                        </CardActionArea>
                        <CardActions
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="body2"
                                    component="div"
                                    sx={{ fontFamily: "Be Vietnam Pro" }}
                                >
                                    LUCÍA Y MARIO
                                </Typography>

                            </CardContent>
                        </CardActions>
                    </Card> */}
                    <Card sx={{ p: 1, minWidth: 225, minHeight: 225 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                width='227'
                                height='157.5'
                                image="https://cdn0.bodas.net/article-real-wedding/267/3_2/1280/jpg/2297557.webp"
                                alt="foto"
                            />
                        </CardActionArea>
                        <CardActions
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="body2"
                                    component="div"
                                    sx={{ fontFamily: "Be Vietnam Pro" }}
                                >
                                    LUCÍA Y MARIO
                                </Typography>

                            </CardContent>
                        </CardActions>
                    </Card>
                    <Card sx={{ p: 1, minWidth: 225, minHeight: 225 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                width='227'
                                height='157.5'
                                image="https://cdn0.bodas.net/article-real-wedding/267/3_2/1280/jpg/2297557.webp"
                                alt="foto"
                            />
                        </CardActionArea>
                        <CardActions
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="body2"
                                    component="div"
                                    sx={{ fontFamily: "Be Vietnam Pro" }}
                                >
                                    LUCÍA Y MARIO
                                </Typography>

                            </CardContent>
                        </CardActions>
                    </Card>
                </Box>
            </Box>

        </Box>
    )
}

export default ClientFile