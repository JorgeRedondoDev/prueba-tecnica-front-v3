import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import Login from "./index";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Login", () => {
  const initialState = {
    token: {},
    users: [],
    modal: {},
  };
  const mockStore = configureStore();
  let store;

  it("Login", () => {
    store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    expect(component.getByText("Login")).not.toBeNull();
    expect(component.getByText("Email")).not.toBeNull();
  });

  it("Click", async () => {
    store = mockStore(initialState);

    const component = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const loginButton = component.getByTestId("login_button");

    fireEvent.click(loginButton);
  });
});
