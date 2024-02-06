import React from 'react'
import { pics } from './ClientGallery'
import SwiperPics from '../components/swiper-pics/SwiperPics'

const Home = () => {


    return (
        <div>

            <SwiperPics pics={pics} />

        </div>
    )
}

export default Home