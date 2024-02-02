import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import ContactForm from "./pages/ContactForm";
import Exercises from "./pages/Exercises";
import BodyPart from "./pages/BodyPart";
import Equipment from "./pages/Equipment";
import TargetList from "./pages/TargetList";
import { exerciseLoader } from "./pages/RootExercise";
import RootExercise from "./pages/RootExercise";
import ExerciseInfo from "./pages/ExerciseInfo";
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
          children: [
            { index: true, element: <RootExercise />, loader: exerciseLoader },
            { path:':name',element:<ExerciseInfo />},
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
