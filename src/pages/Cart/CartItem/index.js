import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ItemImage,
  ItemDescription,
  ItemInfo,
  ItemName,
  ItemBrand,
  ItemPrice,
  ItemQuantity,
  RemoveButton,
} from './styles';

const CartItem = ({
  item, index, updateQuantity, remove,
}) => (
  <Container>
    <ItemImage
      source={{
        uri: item.image,
      }}
    />
    <ItemInfo>
      <ItemDescription>
        <ItemName>{item.name}</ItemName>
        <ItemBrand>{item.brand}</ItemBrand>
        <ItemPrice>{`R$${item.price}`}</ItemPrice>
      </ItemDescription>
      <ItemQuantity
        value={String(item.quantity)}
        onChangeText={text => updateQuantity(index, text)}
      />
      <RemoveButton onPress={() => remove(index)}>
        <Icon name="close" size={20} color="grey" />
      </RemoveButton>
    </ItemInfo>
  </Container>
);

export default CartItem;
