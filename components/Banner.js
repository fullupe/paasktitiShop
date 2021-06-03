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
            src="https://th.bing.com/th/id/Ra3ac153bd225d28f2b3ef7398c9a5383?rik=G9oJvndCu%2fEmvA&pid=ImgRaw"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/fullupe/image/upload/v1621214089/YOUTUB-J-E-G/5ad4e8a9-e9ca-4555-a6b7-a720e5648e06_3_wmtnfe.png"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/fullupe/image/upload/v1622590120/YOUTUB-J-E-G/PHOTO-2021-05-25-19-32-43_3_ko055l.png"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
