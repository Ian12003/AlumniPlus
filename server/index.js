const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
const communityRoutes = require("./routes/community");
app.use("/api/communities", communityRoutes);
const pastEventRoutes = require("./routes/pastevents");
app.use("/api/pastevents", pastEventRoutes);
const logRoutes = require('./routes/login');
app.use('/', logRoutes);
const announcementRoutes = require("./routes/announcement");
app.use("/api/announcement", announcementRoutes);
const upcomingEventRoutes = require('./routes/upcomingevents');
app.use("/api/upcomingevents", upcomingEventRoutes);
const adminRoutes = require('./routes/admin');
app.use('/api/admin', adminRoutes);

const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);



// Serve Vite static files
app.use(express.static(path.join(__dirname, "../client/dist")));

// Catch-all: send React's index.html for any unknown route
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
  

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
