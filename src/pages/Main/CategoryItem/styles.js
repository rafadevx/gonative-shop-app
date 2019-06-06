import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const ItemButton = styled.TouchableOpacity`
  flex: 1;
  max-width: ${(width - 50) / 2};
  background: #fff;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
`;

export const ItemImage = styled.Image`
  margin-top: 10px;
  height: 200px;
  width: 100px;
`;

export const ItemInfo = styled.View`
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ItemTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ItemBrand = styled.Text`
  font-size: 14px;
  color: grey;
`;

export const ItemPrice = styled.Text`
  font-size: 20px;
  color: #44c9b3;
  font-weight: bold;
  margin-top: 10px;
`;
