import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

//Components
import ReviewItem from "../ReviewItem/ReviewItem";

//Style
import "./style.scss";
import "swiper/swiper.scss";

SwiperCore.use([Pagination, Autoplay]);

const StudentsReview = () => {
  return (
    <div className="students-review-container">
      <h2>آراء الطلاب</h2>
      <Swiper
        className="reviews-slider"
        spaceBetween={150}
        slidesPerView={1}
        grabCursor
        pagination={{ clickable: true }}
        autoplay={{ delay: 1500, stopOnLastSlide: false }}
        effect="slide"
        breakpoints={{
          // when window width is >= 640px
          1025: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
        }}
      >
        <SwiperSlide>
          <ReviewItem />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default StudentsReview;
