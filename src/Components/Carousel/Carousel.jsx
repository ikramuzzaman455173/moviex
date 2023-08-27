
import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Img from "../LazyLoadImage/LazyLoadImage";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "./CircleRating/CircleRating";
const Carousel = ({ data, loading }) => {
  const carouselContainer = useRef()
  const { url } = useSelector(state => state.home)
  const navigate = useNavigate()
  const navigation = (direction) => {

  }

  const skItem = () => {
    return (
      <div className="skeltonItem">
        <div className="posterBlock skelton">
          <div className="textBlock">
            <div className="title skelton"></div>
            <div className="date skelton"></div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="carousel">
      <ContentWrapper>
        <BsFillArrowLeftCircleFill className="carouselLeftNav arrow" onClick={() => navigation("left")} />
        <BsFillArrowRightCircleFill className="carouselRightNav arrow" onClick={() => navigation("right")} />
        {!loading ? (
          <div className="carouselItems">
            {data?.map((item) => {
              const posterUrl = item?.poster_path ? url?.poster + item?.poster_path : PosterFallback;
              return (
                <div key={item.id} className="carouselItem">
                  <div className="posterBlock">
                    <Img src={posterUrl} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                  </div>
                  <div className="textBlock">
                    <span className="title">
                      {item.title||item.name}
                    </span>
                    <span className="date">
                      {dayjs(item.release_Date).format("MMMM D, YYYY")}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
            <div className="loadingSkelton">
              skItem()
              skItem()
              skItem()
              skItem()
              skItem()
          </div>
        )}
      </ContentWrapper>
    </div>
  )
}

export default Carousel