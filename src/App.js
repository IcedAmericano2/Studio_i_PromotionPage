import React, { useEffect } from 'react';
import './App.css';
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import PromotionMainpage from "./Pages/MainPage/PromotionMainPage";
import AboutMainpage from "./Pages/AboutPage/AboutMainPage";
import { AnimatePresence, motion } from 'framer-motion';
import InsertPage from "./Pages/InsertPage/InsertPage";

function App() {
    const [showInsertPage, setShowInsertPage] = React.useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowInsertPage(false);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

  return (
      <BrowserRouter>
          <AnimatePresence>
          <Routes>
              <Route
                  path="/"
                  element={
                      showInsertPage ? (
                          <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0, transition: { duration: 0.5 } }}
                          >
                              <InsertPage />
                          </motion.div>
                      ) : (
                          <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                          >
                              <PromotionMainpage />
                          </motion.div>
                      )
                  }
              />
              <Route path="/About"  element={<AboutMainpage />}/>
              <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          </AnimatePresence>
      </BrowserRouter>
  );
}

export default App;
