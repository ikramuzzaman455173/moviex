import React from "react";
import { useSelector } from "react-redux";
import ContentWrapper from "../../../Components/ContentWrapper/ContentWrapper";
import Img from "../../../Components/LazyLoadImage/LazyLoadImage";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <>
      {data===null||data?.length===0?'':<div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">
            {!!data && <>
              {data?.map(item => {
                let imgUrl = item.profile_path ? url.profile + item.profile_path : avatar
                return (<div key={item.id}>
                  <div className="listItem">
                    <div className="profileImg">
                      <Img src={imgUrl} alt="profile img" />
                    </div>
                    <div className="name">{item.name}</div>
                    <div className="character">{item.character}</div>
                  </div>
                </div>)
              })}
            </>}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>}
    </>
  );
};

export default Cast;
