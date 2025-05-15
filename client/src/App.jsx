import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Page/Homepage/Home'
import Gallery from './components/Page/Gallery'
import Blog from './components/Page/Blog'
import BlogPage from './components/Page/BlogPage'
import Community from './components/Page/Community/Community'
import Event from './components/Page/Event/Event'
import Family from './components/Page/Family'
import Login from './components/Page/User/Login'
import About from './components/Page/About'
import Upcoming from './components/Page/Event/Upcoming'
import { Routes, Route } from "react-router-dom"
import Past from './components/Page/Event/Past'
import Mentorship from './components/Page/Giveback/Mentorship'
import Achievement from './components/Page/Giveback/Achievement'
import Opportunity from './components/Page/Giveback/Opportunity'
import Donation from './components/Page/Giveback/Donation'
import Transcript from './components/Page/Giveback/Transcript'
import Register from './components/Page/Register'
import Dashboard from './components/Page/User/Dashboard'
import UserBlog from './components/Page/User/UserBlog'
import UserCommunity from './components/Page/User/UserCommunity'
import UserAchievement from './components/Page/User/UserAchievement'
import UserSetting from './components/Page/User/UserSetting'
import AdminLogin from './components/Page/AdminLogin'
import AdminDashboard from './components/Page/AdminDashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar/>
            <Home/>
            <Footer/>
          </div>
        } />
        <Route path="/about" element={
          <div>
            <Navbar/>
            <About/>
            <Footer/>
          </div>
        } />
        <Route path="/about/login" element={
          <div>
            <AdminLogin/>
          </div>
        } />
        <Route path="/admin-dashboard" element={
          <div>
            <AdminDashboard/>
          </div>
        } />
        <Route path="/gallery" element={
          <div>
            <Navbar/>
            <Gallery/>
            <Footer/>
          </div>
        } />
        <Route path="/blog" element={
          <div>
            <Navbar/>
            <Blog/>
          </div>} />
        <Route path="/community" element={
          <div>
            <Navbar/>
            <Community/>
            <Footer/>
          </div>} />
        <Route path="/events" element={
          <div>
            <Navbar/>
            <Event/>
          </div>} />
        <Route path="/family" element={
          <div>
            <Navbar/>
            <Family/>
            <Footer/>
          </div>} />
        <Route path="/login" element={
          <div>
            <Navbar/>
            <Login/>
          </div>} />
        <Route path="/mentorship" element={
          <div>
            <Navbar/>
            <Mentorship/>
          </div>} />
        <Route path="/achievement" element={
          <div>
            <Navbar/>
            <Achievement/>
          </div>} />
        <Route path="/opportunity" element={
          <div>
            <Navbar/>
            <Opportunity/>
          </div>} />
        <Route path="/transcript" element={
          <div>
            <Navbar/>
            <Transcript/>
          </div>} />
        <Route path="/donation" element={
          <div>
            <Navbar/>
            <Donation/>
          </div>} />
        <Route path="/register" element={
          <div>
            <Navbar/>
            <Register/>
          </div>} />
        <Route path="events/upcomingevents" element={
          <div>
            <Navbar/>
            <Upcoming/>
            <Footer/>
          </div>} />
        <Route path="events/pastevents" element={
          <div>
            <Navbar/>
            <Past/>
            <Footer/>
          </div>} />
        <Route path="dashboard" element={
          <div>
            <Navbar/>
            <Dashboard/>
          </div>} />
        <Route path="dashboard/userblog" element={
          <div>
            <Navbar/>
            <UserBlog/>
          </div>} />
        <Route path="dashboard/usercommunity" element={
          <div>
            <Navbar/>
            <UserCommunity/>
          </div>} />
        <Route path="dashboard/userachievement" element={
          <div>
            <Navbar/>
            <UserAchievement/>
          </div>} />
        <Route path="dashboard/usersetting" element={
          <div>
            <Navbar/>
            <UserSetting/>
          </div>} />
        <Route path="/" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
    </>
  )
}

export default App;
