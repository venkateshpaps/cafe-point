import { createSlice } from '@reduxjs/toolkit'
import { calculateCartTotalAmount } from "common/Util"
import productsList from "products";

type SliceState = { allProducts?: any, selectedProducts?: any, cartAmount?: any }

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { allProducts: [...productsList],
    selectedProducts: [], cartAmount: 0 } as SliceState,
  reducers: {
    addProductQuantity: (state, data) => {
        const payload = data.payload;
        const newSelectedProducts = [...state.selectedProducts];
        const alreadySelectedProductIndex: any = newSelectedProducts.findIndex((product?: any) => product.productId === payload);
        const alreadySelectedProduct = newSelectedProducts[alreadySelectedProductIndex];
        const productObj: any = state.allProducts.find((product?: any) => product.productId === payload);
        if (alreadySelectedProductIndex !== -1) {
          newSelectedProducts.map((product?: any) => product.productId === payload ?
            { ...alreadySelectedProduct, quantity: product.quantity++ } : 
            { ...product });
            state.cartAmount = calculateCartTotalAmount([...newSelectedProducts]);
        } else {
          state.selectedProducts = [...newSelectedProducts, { ...productObj, quantity: 1 }];
          state.cartAmount = calculateCartTotalAmount([...newSelectedProducts, { ...productObj, quantity: 1 }]);
        }
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
    //   state.value += 1
    },
    deleteProductQuantity: (state, data) => {
      const payload = data.payload;
      let newSelectedProducts = [...state.selectedProducts];
        const selectedProductIndex: any = newSelectedProducts ? state.selectedProducts.findIndex((product?: any) => product.productId === payload) : {};
        const alreadySelectedProduct = newSelectedProducts[selectedProductIndex];
        if (selectedProductIndex !== -1) {
          newSelectedProducts.splice(selectedProductIndex, 1, { ...alreadySelectedProduct, quantity: alreadySelectedProduct.quantity - 1 });
          newSelectedProducts = newSelectedProducts.filter((product:any) => product.quantity > 0);
          state.selectedProducts = [...newSelectedProducts];
          state.cartAmount = calculateCartTotalAmount(newSelectedProducts);
        }
    },
    deleteCartProduct: (state, data) => {
      const payload = data.payload;
      let newSelectedProducts = [...state.selectedProducts];
        const selectedProductIndex: any = newSelectedProducts ? state.selectedProducts.findIndex((product?: any) => product.productId === payload) : {};
        if (selectedProductIndex !== -1) {
          newSelectedProducts.splice(selectedProductIndex, 1);
          state.selectedProducts = [...newSelectedProducts];
          state.cartAmount = calculateCartTotalAmount(newSelectedProducts);
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProductQuantity, deleteProductQuantity, deleteCartProduct } = cartSlice.actions

export default cartSlice.reducer