import React from "react";

import Card from "../../component/Card";
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

const HomePresenter = ({ initData, resultData, handleSearch }) => (
  <>
    <Content style={{ margin: "0 auto", width: 850 }}>
      <ButtonContainer>
        <ResultContainer>
          {resultData.length !== 0
            ? `[ 검색완료 : ${resultData.length} 건 ]`
            : null}
        </ResultContainer>
        <Search
          placeholder="투어 검색"
          style={{ width: 400, marginRight: 200 }}
          onSearch={(e) => handleSearch(e)}
          enterButton
        />
      </ButtonContainer>

      {resultData.length !== 0 ? (
        <Card data={resultData} />
      ) : (
        <Card data={initData} />
      )}
    </Content>
  </>
);

export default HomePresenter;
