import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import DevicePage from "./pages/DevicePage"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
        name: "Admin",
    },
    {
        path: BASKET_ROUTE,
        Component: Basket,
        name: "Basket",
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop,
        name: "Shop",
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
        name: "Login",
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
        name: "Registration",
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage,
        name: "Device",
    }
]