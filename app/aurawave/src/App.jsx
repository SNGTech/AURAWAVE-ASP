import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import { ProtectedRoute } from "./Components/ProtectedRoute";
import { Home } from "./Pages/Home";
import { Dashboard } from './Pages/Dashboard';
import { Music } from "./Pages/Music";
import { Therapy } from "./Pages/Therapy";
import { Diagnosis } from './Pages/Diagnosis';
import { Settings } from './Pages/Settings';
import { Profile } from './Pages/Profile';
import { Recording } from './Pages/Recording';
import { Patient } from './Pages/Patient';
import { Library } from './Pages/Library';
import { History } from './Pages/History';


import './App.css';
import { useEffect, useState } from "react";
import { Doctor } from './Pages/Doctor';

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  // Ping the microservice
  useEffect(() => {
    fetch("/ping").then(
      res => res.json()
    ).then(data => {
      console.log(data)
    });
    fetch("/get_music_list").then(
      res => res.json()
    ).then(data => {
      console.log(data)
    });
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }

      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home user={user}></Home>}></Route>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard></Dashboard>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/music"
          element={
            <ProtectedRoute user={user}>
              <Music></Music>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/therapy"
          element={
            <ProtectedRoute user={user}>
              <Therapy></Therapy>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/recording"
          element={
            <ProtectedRoute user={user}>
              <Recording></Recording>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/diagnosis"
          element={
            <ProtectedRoute user={user}>
              <Diagnosis></Diagnosis>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/settings"
          element={
            <ProtectedRoute user={user}>
              <Settings></Settings>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/Profile"
          element={
            <ProtectedRoute user={user}>
              <Profile></Profile>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/Doctor"
          element={
            <ProtectedRoute user={user}>
              <Doctor></Doctor>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/Patient"
          element={
            <ProtectedRoute user={user}>
              <Patient></Patient>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/Library"
          element={
            <ProtectedRoute user={user}>
              <Library></Library>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/History"
          element={
            <ProtectedRoute user={user}>
              <History></History>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
