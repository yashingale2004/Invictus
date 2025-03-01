import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>Dashboard</h2>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </nav>
      
      <div style={styles.content}>
        <div style={styles.welcomeCard}>
          <div style={styles.iconContainer}>
            <span style={styles.icon}>👋</span>
          </div>
          <h1 style={styles.title}>Welcome Back!</h1>
          <p style={styles.subtitle}>You're successfully authenticated and ready to go</p>
          
          <div style={styles.statsContainer}>
            <div style={styles.statCard}>
              <h3>0</h3>
              <p>Active Projects</p>
            </div>
            <div style={styles.statCard}>
              <h3>0</h3>
              <p>Completed Tasks</p>
            </div>
            <div style={styles.statCard}>
              <h3>0</h3>
              <p>Notifications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  navbar: {
    backgroundColor: "#ffffff",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  logo: {
    color: "#2c3e50",
    margin: 0,
    fontSize: "24px",
    fontWeight: "600",
  },
  logoutButton: {
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    padding: "10px 25px",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    ":hover": {
      backgroundColor: "#c0392b",
      transform: "translateY(-1px)",
    },
  },
  content: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "0 20px",
  },
  welcomeCard: {
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "40px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  iconContainer: {
    backgroundColor: "#3498db",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    margin: "0 auto 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: "40px",
  },
  title: {
    color: "#2c3e50",
    margin: "0 0 10px 0",
    fontSize: "32px",
    fontWeight: "600",
  },
  subtitle: {
    color: "#7f8c8d",
    margin: "0 0 30px 0",
    fontSize: "18px",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "40px",
  },
  statCard: {
    backgroundColor: "#f8f9fa",
    padding: "25px",
    borderRadius: "12px",
    minWidth: "180px",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "translateY(-5px)",
    },
    h3: {
      margin: "0 0 10px 0",
      fontSize: "28px",
      color: "#2c3e50",
    },
    p: {
      margin: 0,
      color: "#7f8c8d",
      fontSize: "14px",
    },
  },
};

export default Dashboard;