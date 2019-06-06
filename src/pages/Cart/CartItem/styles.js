import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin: 5px 20px;
  align-items: center;
  border-radius: 3px;
`;

export const ItemImage = styled.Image`
  height: 70px;
  width: 45px;
  margin-right: 20px;
`;

export const ItemInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemDescription = styled.View`
  flex: 1;
`;

export const ItemName = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export const ItemBrand = styled.Text`
  font-size: 12px;
  color: grey;
`;

export const ItemPrice = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #44c9b3;
`;

export const ItemQuantity = styled.TextInput`
  border: 1px solid lightgrey;
  width: 40px;
  height: 30px;
  border-radius: 3px;
`;

export const RemoveButton = styled.TouchableOpacity`
  margin-left: 10px;
`;
