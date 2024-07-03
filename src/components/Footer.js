// import React from 'react'
import React, { useState } from 'react';
import '../Assets/Styles/Footer.css'

export const Footer = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
      };
  return (
   <>
     <div className="footer">
      <div className="country">India</div>
      <div className="countryinfo">
        <div className="start">
          <a href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a>
          <a href="https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</a>
          <a href="https://www.google.com/intl/en_in/business/">Business</a>
          <a href="https://www.google.com/search/howsearchworks/?fg=1">How Search Works</a>
        </div>
        <div className="end">
          <a href="https://policies.google.com/privacy?hl=en-IN&fg=1">Privacy</a>
          <a href="https://policies.google.com/terms?hl=en-IN&fg=1">Terms</a>
          <div className="dropdown">
            <a href="#" className="dropbtn" onClick={toggleDropdown}>Settings</a>
            {dropdownVisible && (
              <div className="dropdown-content" id="myDropdown">
                <a href="https://www.google.com/preferences?hl=en-IN&fg=1">Search Settings</a>
                <a href="https://www.google.com/advanced_search?hl=en-IN&fg=1">Advanced Search</a>
                <a href="https://myaccount.google.com/yourdata/search?utm_source=googlemenu&fg=1&pli=1">Your Data in Search</a>
                <a href="https://myactivity.google.com/product/search?utm_source=google&hl=en-IN&fg=1">Search History</a>
                <a href="https://support.google.com/websearch/?visit_id=638548925263676114-3701408891&hl=en-IN&rd=2#topic=3378866">Search Help</a>
                <a href="#">Send Feedback</a>
                <hr />
                <div id="darkThemeToggle" onClick={toggleTheme}>
                  Dark theme: {darkTheme ? 'On' : 'Off'}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
   </> 
  )
}
export default Footer;