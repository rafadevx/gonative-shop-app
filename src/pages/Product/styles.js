import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: lightgray;
`;

export const Header = styled.View`
  background: #fff;
  height: ${getStatusBarHeight() + 80}px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
  color: lightcoral;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  },
})`
  position: absolute;
  left: 30px;
  top: ${getStatusBarHeight() + 30}px;
`;

export const ProductContainer = styled.View`
  margin: 20px;
  padding: 20px;
  background: #fff;
  align-items: center;
  display: flex;
`;

export const ProductImage = styled.Image`
  width: 150px;
  height: 300px;
`;

export const ProductDescription = styled.View`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  align-items: center;
`;

export const ProductInfo = styled.View`
  max-width: 180px;
`;

export const ProductName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ProductBrand = styled.Text`
  font-size: 14px;
  color: grey;
`;

export const ProductPrice = styled.Text`
  font-size: 24px;
  color: #44c9b3;
  font-weight: bold;
`;

export const AddCartButton = styled.TouchableOpacity`
  height: 50px;
  align-self: stretch;
  background: #44c9b3;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
