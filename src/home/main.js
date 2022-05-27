import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  font-size: 3.5rem;
  // position: relative;
  // height: inherit;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 575.98px) {
    .search-wrapper {
      position: absolute;
      top: 2rem;
      input {
        box-shadow: none;
      }
    }
    .info-wrapper {
      padding: 1rem 2rem;
      h2 {
        font-size: 7rem;
        img {
          width: 1.5rem;
          margin-top: 2.4rem;
        }
      }
      .city-info {
        h1 {
          font-size: 2.5rem;
        }
        h3 {
          font-size: 1.5rem;
        }
      }
    }
  }
`;

const InfoWrapper = styled.div`
  // font-size: 3.5rem;
  position: absolute;
  bottom: 0;
  // background-color: rgba(0, 0, 0, 0.4);
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.03) 100%
    )
    no-repeat;
  right: 0;
  left: 0;
  color: #ffffff;
  display: flex;
  align-items: center;
  // height: 10rem;
  padding: 3rem 3rem;
  h2 {
    // @include font(#ffffff, "OpenSans-Bold", 9rem, bold);
    font-family: "OpenSans-Bold", Arial, Helvetica, sans-serif;
    font-size: 9rem;
    font-weight: bold;
    color: #ffffff;
    margin: 0;
    margin-right: 2rem;
    img {
      width: 2rem;
      vertical-align: top;
      margin: 3rem 0 0 0.5rem;
    }
  }
  .city-info {
    flex: 1;
    h1 {
      // @include font(#ffffff, "OpenSans-Light", 2.8rem, 300);
      font-family: "OpenSans-Light", Arial, Helvetica, sans-serif;
      font-size: 2.8rem;
      font-weight: 300;
      color: #ffffff;
      margin: 0.5rem 0 0;
      strong {
        font-family: "OpenSans-Bold", Arial, Helvetica, sans-serif;
      }
    }
    h3 {
      // @include font(#ffffff, "OpenSans-SemiBold", 1.6rem, 600);
      font-family: "OpenSans-SemiBold", Arial, Helvetica, sans-serif;
      font-size: 1.6rem;
      font-weight: 600;
      color: #ffffff;
      margin: 0.3rem 0 0;
    }
  }
  h2.error {
    font-size: 3.5rem;
  }
`;

const Main = props => {
  return (
    <MainWrapper>
      {props.photo ? (
        <img src={props.photo.urls.regular} alt={props.photo.alt_description} />
      ) : (
        <img src="" alt={"Default mumbai location"} />
      )}
      <InfoWrapper>
        {props.weather ? (
          props.weather.main ? (
            <>
              <h2>{Math.round(props.weather.main.temp)}°</h2>
              <div className="city-info">
                <h1>
                  <strong>{props.weather.name}</strong>
                </h1>
                <h3>
                  {new Date().toLocaleDateString("en-IN", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </h3>
              </div>
            </>
          ) : (
            <h2 class="error">{props.weather.message}</h2>
          )
        ) : (
          <h2>Loading...</h2>
        )}
      </InfoWrapper>
    </MainWrapper>
  );
};

export default Main;
