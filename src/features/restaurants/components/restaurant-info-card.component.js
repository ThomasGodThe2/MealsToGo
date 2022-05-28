import React from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "./../../../../assets/star";
import open from "./../../../../assets/open";
import { Spacer } from "./../../../components/spacer/spacer.component";
import { Text } from "./../../../components/typography/text.component";
import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Rating,
  Section,
  SectionEnd,
} from "./restaurant-info-card.styles";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://cdn-icons-png.flaticon.com/512/4483/4483612.png",
    photos = [
      "https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2017/08/foodie-apps1-800x450.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        source={{
          uri: photos[0],
        }}
      />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml width={20} height={20} xml={star} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
