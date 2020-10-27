import React from "react";
import DetailPresenter from "./DetailPresenter";
import * as api from "../../api";

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: [],
    };
  }

  componentDidMount = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const response = await api.apiList.getDetailTour(id);
    const {
      data: { data },
    } = response;
    console.log("response", response);
    if (response.status === 200) {
      this.setState({
        detailData: [data],
      });
    }
  };

  render() {
    const { detailData } = this.state;

    return (
      <>
        <DetailPresenter detailData={detailData} />
      </>
    );
  }
}

export default DetailContainer;
