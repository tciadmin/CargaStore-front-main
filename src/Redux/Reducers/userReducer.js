const initialState = {
  allUsers: [],
  driver: [],
  customer: [],
  allShipments: [],
  shipments: [],
  products: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
