import styled from 'styled-components/native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: lightgray;
`;

export const Header = styled.View`
  background: #fff;
  height: ${getStatusBarHeight() + 80}px;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  padding-top: ${getStatusBarHeight() + 30}px;
  color: lightcoral;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
`;

export const CartTotalContainer = styled.View`
  height: ${70 + getBottomSpace()}px;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 100%;
`;

export const TotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: grey;
`;

export const TotalValue = styled.Text`
  margin-top: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #44c9b3;
`;
