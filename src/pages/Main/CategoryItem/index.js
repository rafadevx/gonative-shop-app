import React from 'react';
import { withNavigation } from 'react-navigation';

import {
  ItemButton, ItemInfo, ItemImage, ItemTitle, ItemBrand, ItemPrice,
} from './styles';

const CategoryItem = ({ item, navigation }) => (
  <ItemButton
    onPress={() => {
      navigation.navigate('Product', { item });
    }}
  >
    <ItemImage
      source={{
        uri: item.image,
      }}
    />
    <ItemInfo>
      <ItemTitle>{item.name}</ItemTitle>
      <ItemBrand>{item.brand}</ItemBrand>
      <ItemPrice>{`R$${item.price}`}</ItemPrice>
    </ItemInfo>
  </ItemButton>
);

export default withNavigation(CategoryItem);
