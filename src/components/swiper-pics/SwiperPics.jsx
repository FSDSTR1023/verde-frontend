import { Carousel } from 'flowbite-react';

const customTheme = {
    "item": {
        "base": "absolute top-1/2 left-1/2 block h-full -translate-x-1/2 -translate-y-1/2",
    },

}

const SwiperPics = ({ pics = [] }) => {

    return (
        <div className="h-[823px] bg-white">
            <Carousel
                indicators={false}
                theme={customTheme}
                leftControl={<svg className='opacity-40 hover:opacity-100' xmlns="http://www.w3.org/2000/svg" width="28" height="74" viewBox="0 0 28 74" fill="none">
                    <path className='drop-shadow' d="M27.297 1.01582C28.2343 2.37025 28.2343 4.56626 27.297 5.92069L5.79412 36.9948L27.297 68.0691C28.2343 69.4235 28.2343 71.6192 27.297 72.9737C26.3598 74.3281 24.8404 74.3281 23.9031 72.9737L0.702938 39.4471C-0.234313 38.0926 -0.234313 35.897 0.702938 34.5425L23.9031 1.01582C24.8404 -0.338607 26.3598 -0.338607 27.297 1.01582Z"/*  fill="#D9D9D9"  */ fill='#fff' />
                </svg>}
                rightControl={<svg className='opacity-40 hover:opacity-100' xmlns="http://www.w3.org/2000/svg" width="28" height="74" viewBox="0 0 28 74" fill="none">
                    <path className='drop-shadow' d="M0.702938 1.01582C-0.234313 2.37025 -0.234313 4.56626 0.702938 5.92069L22.2058 36.9948L0.702938 68.0691C-0.234313 69.4235 -0.234313 71.6192 0.702938 72.9737C1.64019 74.3281 3.15981 74.3281 4.09706 72.9737L27.297 39.4471C28.2343 38.0926 28.2343 35.897 27.297 34.5425L4.09706 1.01582C3.15981 -0.338607 1.64019 -0.338607 0.702938 1.01582Z" /*  fill="#D9D9D9"  */ fill='#fff' />
                </svg>}
            >

                {
                    pics.map(p => <img className='object-contain rounded-none' key={p.id} src={p.image} alt={p.title} />)
                }

            </Carousel>
        </div>
    )

}

export default SwiperPics

// sm:h-64 xl:h-80 2xl:h-96