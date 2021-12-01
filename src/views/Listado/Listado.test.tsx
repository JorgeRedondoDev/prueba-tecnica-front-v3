import React from "react";
import { render } from "@testing-library/react";

import Listado from "./index";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Listado View", () => {
  const initialState = {
    token: {},
    users: [],
    modal: {},
  };

  const mockStore = configureStore();
  let store;

  it("haveNoData", () => {
    store = mockStore(initialState);

    const component = render(
      <Provider store={store}>
        <Listado />
      </Provider>
    );
    expect(component.getByTestId("loading")).toBeInTheDocument();
  });
});
