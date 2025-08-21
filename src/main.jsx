import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Landing from "./Components/LandingPage/Landing.jsx";
import SignInAdvance from "./Components/SignInAdvance/SignInAdvance.jsx";
import SignUpAdv from "./Components/SignUpAdvance/SignUpAdv.jsx";
import ForgotPasAdv from "./Components/ForgotpassAdv/ForgotPasAdv.jsx";
import Account from "./Components/Account/Account.jsx";
import Messaging from "./Components/Messaging/Messaging.jsx";
import NewListing from "./Components/Listing/NewListing.jsx";
import Project from "./Components/Project/Project.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import PropertyDetail from "./Components/Property/PropertyDetail.jsx";
import ProjectDetail from "./Components/Project/ProjectDetail.jsx";
import MyProfile from "./Components/MyProfile/MyProfile.jsx";
import Events from "./Components/Event/Events.jsx";
import EventDetails from "./Components/Event/EventDetails.jsx";
import RequirmentMatch from "./Components/Requirment/RequirmentMatch.jsx";
import PropertyMatch from "./Components/Property/PropertyMatch.jsx";
import AddProperty from "./Components/Property/AddProperty.jsx";
import MyProfileConnections from "./Components/MyProfile/MyProfileConnections.jsx";
import Notifications from "./Components/Notifications/Notifications.jsx";
import Groups from "./Components/Group/Groups.jsx";
import About from "./Components/About/About.jsx";
import Terms from "./Components/Terms/Terms.jsx";
import Privacy from "./Components/Privacy/Privacy.jsx";
import Help from "./Components/Help/Help.jsx";
import HelpDetails from "./Components/Help/HelpDetails.jsx";
import GroupDetails from "./Components/Group/GroupDetails.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Account2 from "./Components/Account/Account2.jsx";
import BlogDetails from "./Components/Blog/BlogDetails.jsx";
import Institute from "./Components/Institute/Institute.jsx";
import InstituteDetails from "./Components/Institute/InstituteDetails.jsx";
import Videos from "./Components/Videos/Videos.jsx";
import VideosDetails from "./Components/Videos/VideosDetails.jsx";
import CreateAvtar from "./Components/CreateAvtar/CreateAvtar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/landing-page" element={<Landing/>} />
        <Route path="/landing-page/sign-in-advance" element={<SignInAdvance/>} />
        <Route path="/sign-up-advance" element={<SignUpAdv/>} />
        <Route path="/forgot-password-advance" element={<ForgotPasAdv/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/account2" element={<Account2/>} />
        <Route path="/messaging" element={<Messaging/>} />
        <Route path="/new-listing" element={<NewListing/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog-details" element={<BlogDetails/>} />
        <Route path="/property-detail" element={<PropertyDetail/>} />
        <Route path="/property-match" element={<PropertyMatch/>} />
        <Route path="/add-property" element={<AddProperty/>} />
        <Route path="/project-detail" element={<ProjectDetail/>} />
        <Route path="/my-profile" element={<MyProfile/>} />
        <Route path="/my-profile-connections" element={<MyProfileConnections/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/events-details" element={<EventDetails/>} />
        <Route path="/requirement-match" element={<RequirmentMatch/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/groups" element={<Groups/>} />
        <Route path="/group-details" element={<GroupDetails/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/term" element={<Terms/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/help-details" element={<HelpDetails/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/institute" element={<Institute/>} />
        <Route path="/institute-details" element={<InstituteDetails/>} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/videos-details" element={<VideosDetails/>} />
        <Route path="/create-avtar" element={<CreateAvtar/>} />
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
