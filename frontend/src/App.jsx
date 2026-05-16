import {
  Routes,
  Route,
} from "react-router-dom";

/* COMPONENTS */

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import WorkSection from "./components/WorkSection";

import StudioSection from "./components/StudioSection";

import WorkProcess from "./components/WorkProcess";

import PortfolioSection from "./components/PortfolioSection";

import TeamSection from "./components/TeamSection";

import TestimonialSection from "./components/TestimonialSection";

import FooterSection from "./components/FooterSection";

import SidebarPage from "./components/SidebarPage";

import BlocksPage from "./components/BlocksPage";

/* PAGES */

import Login from "./pages/Login";

import Tasks from "./pages/Tasks";

import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

/* =========================
   HOME PAGE
========================= */

function HomePage() {

  return (
    <>
      <Hero />

      <WorkSection />

      <StudioSection />

      <WorkProcess />

      <PortfolioSection />

      <TeamSection />

      <TestimonialSection />
    </>
  );
}

/* =========================
   APP
========================= */

function App() {

  return (

    <>
      {/* NAVBAR */}

      <Navbar />

      {/* ROUTES */}

      <Routes>

        {/* =========================
            HOME
        ========================= */}

        <Route
          path="/"
          element={<HomePage />}
        />

        {/* =========================
            SIDEBAR PAGES
        ========================= */}

        <Route
          path="/left-sidebar"
          element={<SidebarPage type="left" />}
        />

        <Route
          path="/right-sidebar"
          element={<SidebarPage type="right" />}
        />

        <Route
          path="/full-width"
          element={<SidebarPage type="full" />}
        />

        <Route
          path="/sub-page"
          element={<SidebarPage type="sub" />}
        />

        {/* =========================
            BLOCKS PAGES
        ========================= */}

        <Route
          path="/accordion"
          element={<BlocksPage type="accordion" />}
        />

        <Route
          path="/animated-content"
          element={<BlocksPage type="animated" />}
        />

        <Route
          path="/buttons"
          element={<BlocksPage type="buttons" />}
        />

        <Route
          path="/hero-units"
          element={<BlocksPage type="hero-units" />}
        />

        <Route
          path="/icon-boxes"
          element={<BlocksPage type="icon-boxes" />}
        />

        <Route
          path="/image-slider"
          element={<BlocksPage type="image-slider" />}
        />

        {/* =========================
            AUTH PAGES
        ========================= */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
  path="/tasks"
  element={<Tasks />}
/>

      </Routes>

      {/* FOOTER */}

      <FooterSection />

    </>
  );
}

export default App;