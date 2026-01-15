import React, { useState, useEffect } from "react";

export default function FloatingActionButton(props) {
  const [theme, setTheme] = useState('light');

  // Fungsi ini akan berjalan setiap kali state 'theme' berubah
  useEffect(() => {
    // Menangkap elemen <html> dan mengubah atribut data-theme
    document.documentElement.setAttribute('data-theme', theme);
    // console.log(document.documentElement.getAttribute('data-theme'))
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <div className="fab fab-flower mb-15">
        {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
        <div tabIndex={0} role="button" className="btn btn-lg btn-circle btn-success">F</div>

        {/* Main Action button replaces the original button when FAB is open */}
        <button className="fab-main-action btn btn-circle btn-lg">M</button>

        {/* buttons that show up when FAB is open */}
        <label htmlFor="my_modal" className="btn btn-lg btn-circle">+</label>
        <button className="btn btn-lg btn-circle" onClick={toggleTheme}>DM</button>
      </div>
    </>
  )
}