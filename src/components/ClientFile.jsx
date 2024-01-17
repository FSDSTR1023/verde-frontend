import { Box, Card, CardActions, CardContent, Stack, Typography, CardActionArea, CardMedia } from '@mui/material'

const ClientFile = () => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                // bgcolor: 'yellow',
                width: '60%'
            }}>
                <Box sx={{
                    display: 'flex',
                    // bgcolor: 'yellowgreen',
                    gap: '3rem'
                }}>
                    <Stack
                        direction='column'
                        alignItems='left'
                        sx={{
                            width: '50%',
                            // border: '1px solid black'
                        }}
                    >
                        <Typography variant="h6" textAlign='center' fontFamily='Tenor Sans' color='#7C7C7C' >
                            DATOS PERSONALES
                        </Typography>

                        <Typography
                            variant='body1'
                            fontFamily='Be Vietnam Pro'
                            color='#000000b8'
                            fontWeight='300'
                            textAlign='left'
                        >
                            Lucía Casado Hernández
                        </Typography>
                        <Typography
                            variant='body1'
                            fontFamily='Be Vietnam Pro'
                            color='#000000b8'
                            fontWeight='300'
                            textAlign='left'
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
                        sx={{
                            width: '50%',
                            // border: '1px solid black'
                        }}
                    >
                        <Typography variant="h6" textAlign='center' fontFamily='Tenor Sans' color='#7C7C7C' >
                            DATOS DE FACTURACIÓN
                        </Typography>

                        <Typography
                            variant='body1'
                            fontFamily='Be Vietnam Pro'
                            color='#000000b8'
                            fontWeight='300'
                            textAlign='left'
                        >
                            C/Juan Luis Peralta nº 1 4ºD
                        </Typography>
                        <Typography
                            variant='body1'
                            fontFamily='Be Vietnam Pro'
                            color='#000000b8'
                            fontWeight='300'
                            textAlign='left'
                        >
                            41006, Sevilla
                        </Typography>

                    </Stack>
                </Box>


            </Box>
            <Box
                sx={{
                    p: '3rem',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    overflow: 'auto',
                    gap: '1rem',
                    width: '100%'
                }}
            >
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
    )
}

export default ClientFile