/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import DetailsComponent from "../components/productdetail/ProductDetail";
import ShoppingCart from "../components/shoppingCart/shoppingCar";
import ShoppingData from "../components/shoppingCart/shoppingData";
import LoadingPage from "../components/Landing/Landing"
import Home from "../pages/home";
import AdminHome from "../components/admin/adminHome";
import ListProduct from "../components/admin/listProduct";
import ListCategory from "../components/admin/listCategory";
import ListProductor from "../components/admin/listProductor";
import ListLocation from "../components/admin/listLocation";
import Addvino from "../../src/components/admin/addVino";
import FormCategory from "../../src/components/admin/formCategory";
import FormLocation from "../../src/components/admin/formLocation";
import FormProductor from "../../src/components/admin/formProductor";
import AddvinoUpd from "../../src/components/admin/addVinoUpd";
import Review from "../../src/components/review/review";
import Profile from "../../src/components/profile/Profile.jsx";
import Error from "../components/patherror/patherror";
import OrderDetail from "../components/user/orderDetail";
import OrderDetailAdmin from "../components/user/orderDetailAdmin";
import Contact from "../components/footer/contact";
import Ventas from "../../src/components/admin/ventas";
import Graficos from "../../src/components/admin/graficos";
import UserOrders from "../components/user/orders";
import DatosEnvio from "../components/user/datosEnvio";
import CompraRealizada from "../components/user/CompraRealizada";
import ListFavorites from "../components/user/listFavorite.jsx";
import About from "../components/about/about";
import GestionUsuarios from "../components/admin/gestionUsuarios";
import { useAuth0 } from "@auth0/auth0-react";
import VerifyUserRoles from "./verifyUserRoles";
import { getUserById } from "../actions/action";
import { useDispatch } from "react-redux";

//import ListDescuentos from "../components/admin/listDescuentos";
const msj = "Ud. debe tener ser administrador para acceder a esta p??gina";


function HandleRoutes() {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const [userRole, setUserRole] = useState(false);

  const id = user && user.sub;

  const handleSearchForUserRoleApi = async () => {
    let res = await dispatch(getUserById(id));

    res.role && setUserRole(res.role);
  };

  useEffect(() => {
    id && handleSearchForUserRoleApi();
  }, [id]);


  const routes = [
    {
      path: "/",
      element: <LoadingPage />,
      exact: true,
      private: false,
    },
    {
      path: "/shoppingCart",
      element: <ShoppingCart />,

      exact: true,
      private: false,
    },
    {
      path: "/detail/:id",
      element: <DetailsComponent />,
      exact: true,
      private: true,
    },
    {
      path: "/contact",
      element: <Contact />,
      exact: true,
      private: true,
    },
    {
      path: "/admin/home",
      element: (
        <VerifyUserRoles userRole={userRole}>
        <AdminHome />
        </VerifyUserRoles>
      ),
      exact: true,
    },

    {
      path: "/admin/ventas",
      element: (
        <VerifyUserRoles userRole={userRole}>
        <Ventas />
        </VerifyUserRoles>
      ),
      exact: true,
      private: true,
    },
    {
      path: "/admin/listProduct",
      element: (
        <VerifyUserRoles userRole={userRole}>
        <ListProduct />
        </VerifyUserRoles>
      ),

      exact: true,
      private: true,
    },
    {
      path: "/admin/listCategory",
      element: (
        <VerifyUserRoles userRole={userRole}>
        <ListCategory />
        </VerifyUserRoles>
      ),
      exact: true,
      private: true,
    },
    {
      path: "/admin/listProductor",
      element: (
        <VerifyUserRoles userRole={userRole}>
        <ListProductor />
        </VerifyUserRoles>
      ),
      exact: true,
      private: true,
    },
    {
      path: "/admin/listLocation",
      element: (
        <VerifyUserRoles userRole={userRole}>
        <ListLocation />
        </VerifyUserRoles>
      ),
      exact: true,
      private: true,
    },
   
    {
      path: "/admin/addProduct",
      element: (
        <VerifyUserRoles userRole={userRole}>
        <Addvino />
        </VerifyUserRoles>
      ),
      exact: true,
      private: true,
    },
    {
      path: "/review/:id",
      element: <Review />,
      exact: true,
      private: true,
    },
    {
      path: "/admin/addProductUpd/:id",
      element: (
        <VerifyUserRoles userRole={userRole}>
        <AddvinoUpd />
        </VerifyUserRoles>
      ),
      exact: true,
      private: true,
    },
    {
      path: "/admin/formLocation",
      element: (
        <VerifyUserRoles userRole={userRole}>
        <FormLocation />
        </VerifyUserRoles>
      ),
      exact: true,
      private: true,
    },
    {
      path: "/admin/formProductor",
      element: (
        <VerifyUserRoles userRole={userRole}>
        <FormProductor />
        </VerifyUserRoles>
      ),

      exact: true,
      private: true,
    },
    {
      path: "/admin/formCategory",
      element: (
        <VerifyUserRoles userRole={userRole}>
        <FormCategory />
        </VerifyUserRoles>
      ),
      exact: true,
      private: true,
    },
    {
      path: "/admin/usuarios",
      element: (
        <VerifyUserRoles userRole={userRole}>
        <GestionUsuarios />
        </VerifyUserRoles>
      ),
      exact: true,
      private: true,
    },
    {
      path: "/user/orders",
      element: <UserOrders />,
      exact: true,
      private: true,
    },
    {
      path: "/user/orderDetail/",
      element: <OrderDetail />,
      exact: true,
      private: true,
    },
    {
      path: "/user/orderDetailAdmin/",
      element: <OrderDetailAdmin />,
      exact: true,
      private: true,
    },
    {
      path: "/profile",
      element: <Profile />,
      exact: true,
      private: true,
    },
    {
      path: "/error",
      element: <Error msj={msj} />,
      exact: true,
      private: true,
    },
    {
      path: "/user/comprarealizada",
      element: <CompraRealizada />,
    },
    {
      path: "/user/address/:id",
      element: <DatosEnvio />,
    },
    {
      path: "/user/listfavorite",
      element: <ListFavorites />
    },
    {
      path: "/admin/graficos",
      element: (
        <VerifyUserRoles userRole={userRole}>
        <Graficos />
      </VerifyUserRoles>
      ),
      exact: true,
      private: true,
    },
    {
      path: "/shoppingData",
      element: <ShoppingData />,
      exact: true,
      private: false,
    },
    {
      path: "/about",
      element: <About />,
      exact: true,
      private: false,
    },
  ];
  return routes;
  
}
export default HandleRoutes;
