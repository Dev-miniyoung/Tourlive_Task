import React from "react";
import HomePresenter from "./HomePresenter";
import * as api from "../../api";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initData: [],
      resultData: [],
    };
  }

  componentDidMount = async () => {
    const response = await api.apiList.getTour();
    const {
      data: {
        data: { results },
      },
    } = response;
    if (response.status === 200) {
      this.setState({
        initData: results,
      });
    }
  };

  handleSearch = async (searchTerm) => {
    const response = await api.apiList.getSerchTour(searchTerm);
    console.log("response", response);
    const {
      data: {
        data: { results },
      },
    } = response;
    if (response.status === 200) {
      this.setState({
        resultData: results,
      });
    }
  };
  render() {
    const { initData, resultData } = this.state;
    const { handleSearch } = this;

    return (
      <>
        <HomePresenter
          initData={initData}
          resultData={resultData}
          handleSearch={handleSearch}
        />
      </>
    );
  }
}

export default HomeContainer;
