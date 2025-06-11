//import Link from react router dom
import { Link } from "react-router-dom";
import Navbar from "@components/Navbar";
//import routes
import Routes from "@/routes";

//import css
import "@css/style.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
}
