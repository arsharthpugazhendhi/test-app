import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { apiServiceCall } from '../../services/api';
import ProductCard from '../Card/ProductCard';
import { colors } from '../../utils/colors';
import CheckoutBar from '../Cart/CheckoutBar';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../redux/reducers/cartReducer';

const ProductLists = ({ isBarCode = false }) => {

  const [products, setProducts] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  async function getProductList() {
    setLoading(true);
    try {
      const payload = {
        page: currentPage,
        pageSize: pageSize,
        sort: {
          creationDateSortOption: 'DESC',
        },
      };
      const productList = await apiServiceCall(
        'post',
        'filter/product',
        payload,
      );
      setLoading(false);
      setProducts([...products, ...productList?.products]);
      dispatch(getProducts([...products, ...productList?.products]));
    } catch (error) {
      console.log("Error from the products: " + error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  function loadMoreData () {
    setCurrentPage((prev) => prev + 1);
    setPageSize((prev) => prev + 10);
    getProductList();
  }

  // Render The Product List
  const renderProductList = (data: any) => {
    return <ProductCard data={data?.item} isBarCode={isBarCode} />
  }

  const renderFooterComponent = () => {
    if (loading) {
      return <View style={styles.container}><ActivityIndicator size={"large"} collapsable color={colors.black} /></View>
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderProductList}
        contentContainerStyle={styles.contentContainerStyle}
        onEndReachedThreshold={0.2}
        onEndReached={loadMoreData}
        ListFooterComponent={renderFooterComponent}
        showsVerticalScrollIndicator={false}
      />
      <CheckoutBar />
    </View>
  );
};

export default ProductLists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  noDataText: {
    color: colors.black,
    marginTop: 350
  },
  contentContainerStyle: {
    paddingBottom: 100
  }
});
