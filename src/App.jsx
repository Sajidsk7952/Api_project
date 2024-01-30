import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import ContactForm from "./pages/ContactForm";
import Exercises from "./pages/Exercises";
import BodyPart from "./pages/BodyPart";
import Equipment from "./pages/Equipment";
import TargetList from "./pages/TargetList";
import { exerciseLoader } from "./pages/Exercises";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "contact_Form", element: <ContactForm /> },
        {
          path: "exercises",
          element: <Exercises />,
          loader:exerciseLoader,
          children: [
            { path: "bodypart", element: <BodyPart /> },
            { path: "equipment", element: <Equipment /> },
            { path: "targetList", element: <TargetList /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
