import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { List } from "antd";

import DefaultImg from "../assets/defaultImage.jpg";

const Container = styled.div`
  display: flex;
  height: 660px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const ILink = styled(Link)`
  font-weight: bold;
`;

const DetailCard = ({ data }) => (
  <>
    <Container>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 5,
        }}
        style={{
          display: "flex",
          width: 800,
          flexDirection: "column",
          margin: "0 auto",
        }}
        dataSource={data}
        renderItem={(item, index) => {
          const date = new Date(item.created_at);
          const updateDate = new Date(item.updated_at);
          return (
            <List.Item
              key={item.id}
              extra={
                <img
                  width={200}
                  height={200}
                  alt="logo"
                  src={`${item.image}`}
                />
              }
            >
              <List.Item.Meta
                title={
                  <ILink
                    to={`/detail/${item.id}`}
                    style={{ fontWeight: "bold" }}
                  >{`제목 : ${item.title}`}</ILink>
                }
                description={`생성날짜 : ${date.getFullYear()}/${date.getMonth()}/${date.getDate()}   수정날짜 : ${updateDate.getFullYear()}/${updateDate.getMonth()}/${updateDate.getDate()}  가격 : ${item.price.slice(
                  0,
                  item.price.length - 3
                )} 원     평점 : ${item.rate} / 5 `}
              />
              <div>
                <p style={{ fontSize: 16, fontWeight: "bold" }}>내용</p>
                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
              </div>
            </List.Item>
          );
        }}
      />
    </Container>
  </>
);

export default DetailCard;
