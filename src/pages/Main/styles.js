import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: lightgray;
`;

export const Header = styled.View`
  background: #fff;
  height: ${getStatusBarHeight() + 80}px;
`;

export const Title = styled.Text`
  padding-top: ${getStatusBarHeight() + 30}px;
  color: lightcoral;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
`;

export const ContainerMenu = styled.View`
  height: 50px;
  display: flex;
  margin-bottom: 10px;
`;

export const HorizontalMenu = styled.ScrollView.attrs({
  contentContainerStyle: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
  },
})`
  background: lightcoral;
  display: flex;
`;

export const MenuButton = styled.TouchableOpacity`
  margin-left: 15px;
  border-bottom-width: ${props => (props.actived ? '5px' : '0')};
  border-bottom-color: ${props => (props.actived ? 'white' : 'transparent')};
  height: 50px;
  justify-content: center;
`;

export const MenuText = styled.Text`
  color: ${props => (props.actived ? '#fff' : 'lightgrey')};
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Loading = styled.ActivityIndicator``;
