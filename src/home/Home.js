import React, { Component } from "react";
import { connect } from "react-redux";
import Main from "./main";
import Sidebar from "./Sidebar";
import { searchPhotoApi, getWeatherApi, getForcastApi } from "./Api";
import { debounce } from "../utils/ReusableFunctions";
import { changeDataOrder } from "./HomeAction";
import styled from "styled-components";

const Container = styled.div`
  html {
    font-size: 10px;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "OpenSans-Regular", Arial, Helvetica, sans-serif;
  }

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto;
  height: 100vh;

  @media (max-width: 575.98px) {
    display: block;
    main {
      height: 45rem;
    }
    aside {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
  }
`;

const StyledMain = styled.main`
  background-color: #ffffff;
  height: 100%;
`;

const StyledSidebar = styled.aside`
  background-color: #f3f4f8;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      width: 0, // REPRESENTS THE SCREEN WIDTH
      height: 0 // REPRESENTS THE SCREEN HEIGHT
    };
    this.debounced = debounce(search => {
      if (search !== "") {
        this.props.searchPhotoApi(search);
        this.props.getWeatherApi(search);
        this.props.getForcastApi(search);
      }
    }, 600);

    this.onChange = this.onChange.bind(this);
    this.handleViewImage = this.handleViewImage.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    // TO GET THE INITIAL SCREEN WIDTH AND HEIGHT.
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    // TO GET SEARCH API DATA
    this.props.searchPhotoApi();
    // TO GET TODAYS WEATHER DATA
    this.props.getWeatherApi();
    // TO GET FORCAST DATA FOR NEXT 5 DAYS.
    this.props.getForcastApi();
  }

  onChange(e) {
    this.setState({ search: e.target.value }, () =>
      this.debounced(this.state.search)
    );
  }

  handleViewImage() {
    this.props.changeDataOrder();
    // SCROLL TO TOP IF IN MOBILE VIEW.
    if (this.state.width < 575.98)
      window.scrollTo({ top: 0, behavior: "smooth" });
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    return (
      <Container>
        <StyledMain>
          <Main
            photo={this.props.homeState.photos[0]}
            weather={this.props.homeState.weatherData}
            isMobile={this.state.width < 575.98}
            search={this.state.search}
            onChange={this.onChange}
          />
        </StyledMain>
        <StyledSidebar>
          <Sidebar
            photo={this.props.homeState.photos[1]}
            isMobile={this.state.width < 575.98}
            search={this.state.search}
            onChange={this.onChange}
            onViewImage={this.handleViewImage}
            weatherData={this.props.homeState.weatherData}
            forcastData={this.props.homeState.forcastData}
          />
        </StyledSidebar>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  homeState: state.homeState
});
const mapDispatchToProps = {
  searchPhotoApi,
  getWeatherApi,
  getForcastApi,
  changeDataOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
