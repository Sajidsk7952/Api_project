import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import ContactForm from "./pages/ContactForm";
import Exercises from "./pages/Exercises";
import { exerciseLoader } from "./pages/RootExercise";
import RootExercise from "./pages/RootExercise";
import ExerciseInfo from "./pages/ExerciseInfo";
import SearchExercise from "./pages/SearchExercise";
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
            {path:'search/:query',element:<SearchExercise />},
            { path:'view/:name',element:<ExerciseInfo />}
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
