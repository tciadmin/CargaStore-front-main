const initialState = {
  allUsers: [],
  driver: [],
  customer: [],
  allShipments: [],
  shipments: [],
  products: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
