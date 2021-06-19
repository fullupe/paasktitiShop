import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/fullupe/image/upload/v1624027786/pascktiti/beadbags_cf1pqu.png"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/fullupe/image/upload/v1624027767/pascktiti/9bf167c4819bda569e37f709722ac717_otxsdh.png"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/fullupe/image/upload/v1622590120/YOUTUB-J-E-G/PHOTO-2021-05-25-19-32-43_3_ko055l.png"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src=" https://res.cloudinary.com/fullupe/image/upload/v1624043001/pascktiti/phoneAccessories_wjbc16.png"
          />
        </div>

       
      </Carousel>
    </div>
  );
};

export default Banner;
