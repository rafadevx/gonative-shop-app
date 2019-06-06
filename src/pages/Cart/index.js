import React, { Component } from 'react';

import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

import {
  Container, Title, Header, CartTotalContainer, TotalText, TotalValue,
} from './styles';

import CartItem from './CartItem';

class Cart extends Component {
  componentDidMount() {}

  handleUpdateQuantity = (index, value) => {
    const { products } = this.props.cart;
    const { addProductSuccess } = this.props;
    const prod = products[index].set('quantity', value || 0);
    addProductSuccess(products.set(0, prod));
  };

  handleRemoveItem = (index) => {
    const { products } = this.props.cart;
    const { addProductSuccess } = this.props;
    const prod = [...products];
    prod.splice(index, 1);

    addProductSuccess(prod);
  };

  renderItem = ({ item, index }) => (
    <CartItem
      item={item}
      index={index}
      updateQuantity={this.handleUpdateQuantity}
      remove={this.handleRemoveItem}
    />
  );

  renderList = () => {
    const { cart } = this.props;

    return (
      <FlatList
        data={cart.products}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderItem}
      />
    );
  };

  render() {
    const { cart } = this.props;
    return (
      <Container>
        <Header>
          <Title>Carrinho</Title>
        </Header>
        {this.renderList()}
        <CartTotalContainer>
          <TotalText>Subtotal</TotalText>
          <TotalValue>{`R$${cart.subtotal}`}</TotalValue>
        </CartTotalContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
