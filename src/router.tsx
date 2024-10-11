import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import Review from "./pages/Review";
import SectionSneakers from "./components/SectionSneakers";
import SectionAbout from "./components/SectionAbout";
import SectionSelection from "./components/SectionSelection";
import SectionTeams from "./components/SectionTeam";
import SneakerPage from "./pages/Sneaker";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		loader: Loader ,
		children: [
			{index: true, element: <Home />},
			{path: "catalog",element: <SectionSneakers />},
			{path: "sneaker/:id",element: <SneakerPage />},
			{path: "about_us",element: <SectionAbout />},
			{path: "selection",element: <SectionSelection />},
			{path: "team",element: <SectionTeams />},
            // {path: "payment",element: < />},     
			// {path: "contacts",element: < />},
			{path: "review",element: <Review />},
			{path: "*",element: <NotFound />}
		]
	}
	//{
	//	path: "/",
	//	element: <Home />,
	//},
	//{
	//	path: "/facts",
	//	element:<Facts />,
	//},
	//{
	//	path: "/bean/:id",
	//	element: <BeanPage />
	//},
	//{
	//	path: "/beans",
	//	element: <Beans />
	//},
	//{
	//	path: "/recipies",
	//	element: <Recipies />
	//},
	//{
	//	path: "/combinations",
	//	element: <Combinations />
	//},
	//{
	//	path: "/history",
	//	element: <History />
	//},
	//{
	//	path: "*",
	//	element: <NotFound />
	//}
]);

export default router;
