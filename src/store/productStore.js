import { create } from "zustand";
import { persist } from "zustand/middleware";
import productData from "../db/products.json";

export const useProductStore = create(
  persist(
    (set, get) => ({
      productInfo: productData,
      selectedProduct: null,

      // Get product by ID
      getProductById: (productId) => {
        const product = get().productInfo.find((item) => item.id === productId);
        set({ selectedProduct: product || null });
        return product;
      },

      // Add a new product
      addProduct: (newProduct) => {
        set({
          productInfo: [...get().productInfo, newProduct],
        });
      },

      // Update product by ID
      updateProduct: (productId, updatedData) => {
        set({
          productInfo: get().productInfo.map((product) =>
            product.id === productId ? { ...product, ...updatedData } : product,
          ),
        });
      },

      // Delete product by ID
      deleteProduct: (productId) => {
        set({
          productInfo: get().productInfo.filter(
            (product) => product.id !== productId,
          ),
          selectedProduct:
            get().selectedProduct?.id === productId
              ? null
              : get().selectedProduct,
        });
      },

      // Clear selected product
      clearSelectedProduct: () => {
        set({ selectedProduct: null });
      },

      // Reset store to seed data
      resetToSeedData: () => {
        set({
          productInfo: productData,
          selectedProduct: null,
        });
      },
    }),
    {
      name: "productData",
      merge: (persistedState, currentState) => persistedState ?? currentState,
    },
  ),
);
