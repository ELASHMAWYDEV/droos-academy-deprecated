import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

//Components
import ReviewItem from "../ReviewItem/ReviewItem";

//Style
import "./style.scss";
import "swiper/swiper.scss";

SwiperCore.use([Pagination]);

const StudentsReview = () => {
  return (
    <div className="students-review-container">
      <h2>آراء الطلاب</h2>
      <Swiper
        className="reviews-slider"
        spaceBetween={150}
        slidesPerView={2}
        grabCursor
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000, stopOnLastSlide: false }}
        effect="slide"
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
