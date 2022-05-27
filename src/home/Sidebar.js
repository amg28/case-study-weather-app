import React from "react";
import { formatDateTime } from "../utils/ReusableFunctions";
import Search from "./_utils/Search";
import styled from "styled-components";

const StyledInfoCard = styled.div`
  background-color: #ffffff;
  padding: 2rem 3rem;
  border-radius: 2rem;
  margin: 3rem 2rem 2rem;
  h3 {
    // @include font(rgba(0, 0, 0, 0.87), "OpenSans-SemiBold", 1.8rem, 600);
    font-family: "OpenSans-SemiBold", Arial, Helvetica, sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.87);
    margin: 0 0 2rem;
  }
  .item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    h4 {
      // @include font(rgba(0, 0, 0, 0.57), "OpenSans-Regular", 1.4rem, 400);
      font-family: "OpenSans-Regular", Arial, Helvetica, sans-serif;
      font-size: 1.4rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.57);
      margin: 0;
    }
    h5 {
      // @include font(rgba(0, 0, 0, 0.57), "OpenSans-SemiBold", 1.4rem, 600);
      font-family: "OpenSans-SemiBold", Arial, Helvetica, sans-serif;
      font-size: 1.4rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.57);
      margin: 0;
    }
  }

  @media (max-width: 575.98px) {
    margin: 0rem 2rem 3rem;
  }
`;

const StyledImageCard = styled.div`
  margin: 3rem 2rem;
  button {
    padding: 0;
    background: none;
    border: 0;
    cursor: pointer;
    position: relative;
    &:focus {
      outline: none;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.57);
      border-radius: 2rem;
    }
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 2rem;
      height: 18rem;
      position: relative;
    }
    span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      // @include font(#ffffff, "OpenSans-SemiBold", 1.5rem, 600);
      font-family: "OpenSans-SemiBold", Arial, Helvetica, sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      color: #ffffff;
      margin: 0;
    }
  }

  @media (max-width: 575.98px) {
    margin-bottom: 0;
  }
`;

const Sidebar = props => {
  return (
    <>
      <Search search={props.search} onChange={props.onChange} />
      <StyledInfoCard>
        <h3>Weather Details</h3>
        {props.weatherData ? (
          props.weatherData.main ? (
            <>
              <div className="item">
                <h4>Cloudy</h4>
                <h5>{props.weatherData.clouds.all}%</h5>
              </div>
              <div className="item">
                <h4>Pressure</h4>
                <h5>{props.weatherData.main.pressure} hPa</h5>
              </div>
              <div className="item">
                <h4>Humidity</h4>
                <h5>{props.weatherData.main.humidity}%</h5>
              </div>
              <div className="item">
                <h4>Wind</h4>
                <h5>{props.weatherData.wind.speed} m/s</h5>
              </div>
            </>
          ) : (
            <h2>{props.weatherData.message}</h2>
          )
        ) : (
          <h2>Loading...</h2>
        )}
      </StyledInfoCard>
      <StyledInfoCard>
        <h3>Weather Forecast</h3>
        {props.forcastData ? (
          props.forcastData.list ? (
            props.forcastData.list.slice(0, 4).map(item => (
              <div className="item" key={item.dt}>
                <h4>{formatDateTime(item.dt)}</h4>
                <h5>{Math.round(item.main.temp)}º</h5>
              </div>
            ))
          ) : (
            <h2>{props.forcastData.message}</h2>
          )
        ) : (
          <h2>Loading...</h2>
        )}
      </StyledInfoCard>
      <StyledImageCard>
        {props.photo ? (
          <button onClick={props.onViewImage}>
            <img
              src={props.photo.urls.small}
              alt={props.photo.alt_description}
            />
            <span>VIEW IMAGE</span>
          </button>
        ) : (
          <button>
            <img src="" alt={"Default mumbai location"} />
          </button>
        )}
      </StyledImageCard>
    </>
  );
};

export default Sidebar;
