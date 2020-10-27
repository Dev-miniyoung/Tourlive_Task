import React from "react";
import DetailCard from "../../component/DetailCard";
import styled from "styled-components";
import { Layout, Input } from "antd";

const { Content } = Layout;
const { Search } = Input;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
  font-size: 14px;
  font-weight: bold;
`;

const DetailPresenter = ({ detailData }) => (
  <>
    <Content style={{ margin: "0 auto", width: 850 }}>
      <DetailCard data={detailData} />
    </Content>
  </>
);

export default DetailPresenter;
