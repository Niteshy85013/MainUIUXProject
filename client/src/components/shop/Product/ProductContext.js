export const productState = {
  products: null,
  addProductModal: false,
  editProductModal: {
    modal: false,
    pId: "",
    pName: "",
    pDescription: "",
    pImages: null,
    pStatus: "",
    pFname: "",
    pCondition: "",
    pAddress: "",
    pPhone: "",
    pCategory: "",
    pQuantity: "",
    pPrice: "",
    pOffer: "",
  },
};

export const productReducer = (state, action) => {
  switch (action.type) {
    /* Get all product */
    case "fetchProductsAndChangeState":
      return {
        ...state,
        products: action.payload,
      };
    /* Create a product */
    case "addProductModal":
      return {
        ...state,
        addProductModal: action.payload,
      };
    /* Edit a product */
    case "editProductModalOpen":
      return {
        ...state,
        editProductModal: {
          modal: true,
          pId: action.product.pId,
          pName: action.product.pName,
          pDescription: action.product.pDescription,
          pImages: action.product.pImages,
          pStatus: action.product.pStatus,
          pCategory: action.product.pCategory,
          pFname: action.product.pFname,
          pCondition: action.product.pCondition,
          pPhone: action.product.pPhone,
          pAddress: action.product.pAddress,

          pQuantity: action.product.pQuantity,
          pPrice: action.product.pPrice,
          pOffer: action.product.pOffer,
        },
      };
    case "editProductModalClose":
      return {
        ...state,
        editProductModal: {
          modal: false,
          pId: "",
          pName: "",
          pDescription: "",
          pImages: null,
          pStatus: "",
          pFname: "",
          pCondition:"",
          pAddress: "",
          pPhone: "",
          pCategory: "",
          pQuantity: "",
          pPrice: "",
          pOffer: "",
        },
      };
    default:
      return state;
  }
};
