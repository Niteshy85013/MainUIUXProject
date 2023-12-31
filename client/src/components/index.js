import React from "react";
import {
  Home,
  WishList,
  ProtectedRoute,
  CartProtectedRoute,
  PageNotFound,
  ProductDetails,
  ProductByCategory,
  CheckoutPage,
  Products,
} from "./shop";
import { DashboardAdmin, Categories, Orders } from "./admin";
import { UserProfile, UserOrders, SettingUser } from "./shop/dashboardUser";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/wish-list" component={WishList} />
        <Route exact path="/products/:id" component={ProductDetails} />
        <Route
          exact
          path="/products/category/:catId"
          component={ProductByCategory}
        />
        <CartProtectedRoute
          exact={true}
          path="/checkout"
          component={CheckoutPage}
        />
        <Route exact={true} path="/admin" component={DashboardAdmin} />
        <Route
          exact={true}
          path="/admin/dashboard/categories"
          component={Categories}
        />
        <ProtectedRoute exact={true} path="/products" component={Products} />
         

        <ProtectedRoute
          exact={true}
          path="/user/profile"
          component={UserProfile}
        />
        <ProtectedRoute
          exact={true}
          path="/user/orders"
          component={Orders}
        />
        <ProtectedRoute
          exact={true}
          path="/user/setting"
          component={SettingUser}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
