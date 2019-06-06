import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  Title,
  BackButton,
  ProductContainer,
  ProductImage,
  ProductDescription,
  ProductInfo,
  ProductName,
  ProductBrand,
  ProductPrice,
  AddCartButton,
  ButtonText,
} from './styles';

class Product extends Component {
  componentDidMount() {}

  handleBack = () => {
    const { navigation } = this.props;

    navigation.goBack();
  };

  handleAddCart = () => {
    const { navigation, addProductRequest } = this.props;
    const product = navigation.getParam('item');

    addProductRequest(product);

    navigation.navigate('Cart');
  };

  render() {
    const { navigation } = this.props;
    const product = navigation.getParam('item');
    return (
      <Container>
        <Header>
          <Title>Detalhe do produto</Title>
          <BackButton onPress={this.handleBack}>
            <Icon name="keyboard-arrow-left" size={30} color="lightgrey" />
          </BackButton>
        </Header>
        <ProductContainer>
          <ProductImage
            source={{
              uri: product.image,
            }}
          />
          <ProductDescription>
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductBrand>{product.brand}</ProductBrand>
            </ProductInfo>
            <ProductPrice>{`R$${product.price}`}</ProductPrice>
          </ProductDescription>
          <AddCartButton onPress={this.handleAddCart}>
            <ButtonText>Adicionar ao carrinho</ButtonText>
          </AddCartButton>
        </ProductContainer>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Product);
