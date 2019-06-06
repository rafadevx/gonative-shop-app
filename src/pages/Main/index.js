import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FlatList } from 'react-native';

import CategoriesActions from '~/store/ducks/categories';

import CategoryItem from './CategoryItem';

import {
  Container,
  Header,
  Title,
  ContainerMenu,
  HorizontalMenu,
  MenuButton,
  MenuText,
  Loading,
} from './styles';

class Main extends Component {
  state = {
    currentButton: null,
  };

  componentDidMount() {
    const { loadRequest, loadProductsRequest } = this.props;

    loadRequest();
    this.setState({ currentButton: 1 });
    loadProductsRequest(1);
  }

  handleButton = (id) => {
    const { loadProductsRequest } = this.props;
    this.setState({ currentButton: id });
    loadProductsRequest(id);
  };

  renderItem = ({ item }) => <CategoryItem item={item} />;

  renderList = () => {
    const { categories } = this.props;

    return (
      <FlatList
        data={categories.products}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
      />
    );
  };

  render() {
    const { categories } = this.props;

    return (
      <Container>
        <Header>
          <Title>GoCommerce</Title>
        </Header>
        <ContainerMenu>
          {categories.loadingCategories ? (
            <Loading />
          ) : (
            <HorizontalMenu horizontal>
              {categories.data
                && categories.data.map(category => (
                  <MenuButton
                    key={category.id}
                    onPress={() => this.handleButton(category.id)}
                    actived={this.state.currentButton === category.id}
                  >
                    <MenuText actived={this.state.currentButton === category.id}>
                      {category.title}
                    </MenuText>
                  </MenuButton>
                ))}
            </HorizontalMenu>
          )}
        </ContainerMenu>
        {this.renderList()}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
