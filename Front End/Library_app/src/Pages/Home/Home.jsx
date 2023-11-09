import React from 'react'

import About from '../../Components/About/About'
import Footer from '../../Components/Footer/Footer'
import ImageSlider from '../../Components/ImageSlider/ImageSlider'
import News from '../../Components/News/News'
import PhotoGallery from '../../Components/PhotoGallery/PhotoGallery'
import PopularBooks from '../../Components/PopularBooks/PopularBooks'
import RecentAddedBooks from '../../Components/RecentAddedBooks/RecentAddedBooks'
import ReservedBooks from '../../Components/ReservedBooks/ReserverBooks'
import Stats from '../../Components/Stats/Stats'
import WelcomeBox from '../../Components/WelcomeBox/WelcomeBox'

function Home() {
    return (
        <div id='home'>
            <ImageSlider/>
            <WelcomeBox/>
            <About/>
            <Stats/>
            <RecentAddedBooks/>
            <PopularBooks/>
            <ReservedBooks/>
            {/* <News/> */}
            {/* <PhotoGallery/> */}
            <Footer/>
        </div>
    )
}

export default Home;
