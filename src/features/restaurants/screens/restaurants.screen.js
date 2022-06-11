import React, { useContext } from "react";
import styled from "styled-components/native";
import { RestaurantInfo } from "./../components/restaurant-info-card.component";
import { Spacer } from "./../../../components/spacer/spacer.component";
import { SafeArea } from "../../../utils/safe-area.component";
import { RestaurantsContext } from "./../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "./../components/search.component";

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: { padding: 16 },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfo restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
