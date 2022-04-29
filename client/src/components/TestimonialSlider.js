import React, { Component } from "react";
import Swiper from "react-id-swiper";

class TestimonialSlider extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      effect: "fade",
      autoplay: {
        delay: 2000
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },
      renderPagenation: () => <div className="swiper-pagination" />
    };
    let data = [
      {
        testimonialImage: "1.jpg",
        testimonialName: "Anonymous",
        testimonialDesignation: "",
        testimonialText:
          "eLearning doesn't just 'happen'! It requires careful planning and implementation."
      },
      {
        testimonialImage: "3.jpg",
        testimonialName: "Arthur W. Chickering and Stephen C. Ehrmann",
        testimonialDesignation: "",
        testimonialText:
          "Students do not learn much just sitting in classes listening to teachers, memorizing prepackaged assignments, and spitting out answers. They must talk about what they are learning, write reflectively about it, relate it to past experiences, and apply it to their daily lives. They must make what they learn part of themselves."
      },
      {
        testimonialImage: "2.jpg",
        testimonialName: "Bernard Bull",
        testimonialDesignation: "",
        testimonialText:
          "In order to create an engaging learning experience, the role of instructor is optional, but the role of learner is essential"
      }
    ];

    let DataList = data.map((val, i) => {
      return (
        <div className="swiper-slide testimonial-slider__single-slide" key={i}>
          <div className="author">
            <div className="author__image">
              <img
                src={`assets/img/testimonial/${val.testimonialImage}`}
                alt=""
              />
            </div>
            <div className="author__details">
              <h4 className="name">{val.testimonialName}</h4>
              <div className="designation">{val.testimonialDesignation}</div>
            </div>
          </div>
          <div className="content">{val.testimonialText}</div>
        </div>
      );
    });

    return (
      <div>
        {/*====================  testimonial slider area ====================*/}
        <div className="testimonial-slider-area testimonial-slider-area-bg section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="testimonial-slider">
                  <div className="testimonial-slider__container-area">
                    <Swiper {...params}>{DataList}</Swiper>
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of testimonial slider area  ====================*/}
      </div>
    );
  }
}

export default TestimonialSlider;
