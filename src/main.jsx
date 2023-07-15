import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./layout/Main/Main.jsx";
import Price from "./components/Price/Price.jsx";
import ContactUs from "./pages/Shared/ContactUs/ContactUs.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Services from "./components/Services/Services.jsx";
import GetAQuote from "./pages/Shared/GetAQuote/GetAQuote.jsx";
import Payment from './components/Payment/Payment.jsx'
// ----------------------all work Route-------------------
import ClippingPathServices from "./components/AllWork/ImageBackgroundRemoving/ClippingPathServices/ClippingPathServices.jsx";
import PhotoRestorationServices from "./components/AllWork/ProfessionalPhotoRetouching/PhotoRestorationServices/PhotoRestorationServices.jsx";
import ShoePhotoEditingServices from "./components/AllWork/PhotographyPostProduction/ShoePhotoEditingServices/ShoePhotoEditingServices.jsx";
import ProductPhotoRetouching from "./components/AllWork/CreativeEditingServices/ProductPhotoRetouching/ProductPhotoRetouching.jsx";
import GhostMannequinService from "./components/AllWork/ImageBackgroundRemoving/GhostMannequinService/GhostMannequinService.jsx";
import ColorCorrectionEditing from "./components/AllWork/ProfessionalPhotoRetouching/ColorCorrection&Editing/ColorCorrection&Editing.jsx";
import WeddingPhotoServices from "./components/AllWork/PhotographyPostProduction/WeddingPhotoServices/WeddingPhotoServices.jsx";
import ProductPhotoCleaning from "./components/AllWork/CreativeEditingServices/ProductPhotoCleaning/ProductPhotoCleaning.jsx";
import MaskingServices from "./components/AllWork/ImageBackgroundRemoving/MaskingServices/MaskingServices.jsx";
import RetouchingServices from "./components/AllWork/ProfessionalPhotoRetouching/RetouchingServices/RetouchingServices.jsx";
import ClothingPhotoEditingServices from "./components/AllWork/PhotographyPostProduction/ClothingPhotoEditingServices/ClothingPhotoEditingServices.jsx";
import ProductPhotoBGRemove from "./components/AllWork/CreativeEditingServices/ProductPhotoBGRemove/ProductPhotoBGRemove.jsx";
import ShadowReflectionServices from "./components/AllWork/ImageBackgroundRemoving/ShadowReflectionServices/ShadowReflectionServices.jsx";
import JewelryEditingServices from "./components/AllWork/ProfessionalPhotoRetouching/JewelryEditingServices/JewelryEditingServices.jsx";
import MultipleClippingPathServices from "./components/AllWork/PhotographyPostProduction/MultipleClippingPathServices/MultipleClippingPathServices.jsx";
import BulkPhotoEditing from "./components/AllWork/CreativeEditingServices/BulkPhotoEditing/BulkPhotoEditing.jsx";
//-------------------------- all work ---------------------------

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/home",
        element: <App />,
      },
      {
        path: "/clippingpath",
        element: <ClippingPathServices/>,
      },
      {
        path: "/photorestorations",
        element: <PhotoRestorationServices/>,
      },
      {
        path: "/shoephotoediting",
        element: <ShoePhotoEditingServices/>,
      },
      {
        path: "/productphotoretouching",
        element: <ProductPhotoRetouching/>,
      },
      {
        path: "/ghostmannequeen",
        element: <GhostMannequinService/>,
      },
      {
        path: "/colorcorrection",
        element: <ColorCorrectionEditing/>,
      },
      {
        path: "/weddingphoto",
        element: <WeddingPhotoServices/>,
      },
      {
        path: "/productphotoclean",
        element: <ProductPhotoCleaning/>,
      },
      {
        path: "/masking",
        element: <MaskingServices/>,
      },
      {
        path: "/retouch",
        element: <RetouchingServices/>,
      },
      {
        path: "/clothingphoto",
        element: <ClothingPhotoEditingServices/>,
      },
      {
        path: "/productphotobg",
        element: <ProductPhotoBGRemove/>,
      },
      {
        path: "/shadow",
        element: <ShadowReflectionServices/>,
      },
      {
        path: "/jewelry",
        element: <JewelryEditingServices/>,
      },
      {
        path: "/multiclippingpath",
        element:<MultipleClippingPathServices/>,
      },
      {
        path: "/bulkphotoedit",
        element: <BulkPhotoEditing/>,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/getaquote",
        element: <GetAQuote />,
      },

      {
        path: "/price",
        element: <Price />,
      },
      {
        path: "/payment",
        element: <Payment/>,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },

      // {
      //   path: "*",
      //   element: <NotFoundPage />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
