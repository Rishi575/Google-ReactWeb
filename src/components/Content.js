import React, {useEffect} from 'react'
import '../Assets/Styles/Content.css'
import logo from '../Assets/Images/logo.png'

export const Content = () => {
  const performSearch = () => {
    const query = document.getElementById('APjFqb').value;
    if (query.trim() !== '') {
      const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.open(url, '_self');
      document.getElementById('APjFqb').value = '';
    }
  };

  const feelingLucky = () => {
    window.open('https://doodles.google/', '_self');
    const query = document.getElementById('APjFqb').value;
    if (query.trim() !== '') {
      const url = `https://www.google.com/search?btnI=I&q=${encodeURIComponent(query)}`;
      window.open(url, '_self');
      document.getElementById('APjFqb').value = '';
    }
  };


  useEffect(() => {
    const textarea = document.getElementById('APjFqb');
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); 
        performSearch();
      }
    };
    textarea.addEventListener('keydown', handleKeyDown);

    return () => {
      textarea.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='container'>
        <div className='logo'>
        <img src={logo} alt="google" />
        </div>
        <div className="textbox">
      <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
        <path
          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        />
      </svg>
      <textarea
        className="gLFyf"
        autoFocus
        title="Search"
        aria-label="Search"
        aria-autocomplete="both"
        aria-expanded="false"
        aria-haspopup="false"
        id="APjFqb"
        maxLength="2048"
        name="q"
        role="combobox"
        rows="1"
      ></textarea>

      <div className="tooltip">
        <svg className="goxjub" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
          <path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path>
          <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
          <path fill="#fbbc04" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path>
          <path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path>
        </svg>
        <span className="tooltiptext">Search by voice</span>
      </div>

      <div className="tooltip">
        <svg className="Gdd5U" focusable="false" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
          <rect fill="none" height="192" width="192"></rect>
          <g>
            <circle fill="#34a853" cx="144.07" cy="144" r="16"></circle>
            <circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle>
            <path fill="#ea4335" d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"></path>
            <path fill="#fbbc04" d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"></path>
            <path fill="#4285f4" d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"></path>
          </g>
        </svg>
        <span className="tooltiptext">Search by image</span>
      </div>
    </div>

    <div className="button">
      <input
        type="submit"
        className="gNO89b"
        value="Google Search"
        onClick={performSearch}
      />
      <input
        className="RNmpXc"
        value="I'm Feeling Lucky"
        aria-label="I'm Feeling Lucky"
        name="btnI"
        type="submit"
        onClick={feelingLucky}
      />
    </div>

    <div className="lang">
      <div className="vcVZ7d" id="gws-output-pages-elements-homepage_additional_languages__als">
        <div id="SIvCob">Google offered in:
          <a href="https://www.google.com/setprefs?sig=0_-ljQWPFHgsp95yNGCwRcMQLjU_8%3D&amp;hl=hi&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwik-7fw3fOGAxWwh1YBHSoHCHsQ2ZgBCBU">हिन्दी</a>
          <a href="https://www.google.com/setprefs?sig=0_-ljQWPFHgsp95yNGCwRcMQLjU_8%3D&amp;hl=bn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwik-7fw3fOGAxWwh1YBHSoHCHsQ2ZgBCBY">বাংলা</a>
          <a href="https://www.google.com/setprefs?sig=0_-ljQWPFHgsp95yNGCwRcMQLjU_8%3D&amp;hl=te&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwik-7fw3fOGAxWwh1YBHSoHCHsQ2ZgBCBc">తెలుగు</a>
          <a href="https://www.google.com/setprefs?sig=0_-ljQWPFHgsp95yNGCwRcMQLjU_8%3D&amp;hl=mr&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwik-7fw3fOGAxWwh1YBHSoHCHsQ2ZgBCBg">मराठी</a>
          <a href="https://www.google.com/setprefs?sig=0_-ljQWPFHgsp95yNGCwRcMQLjU_8%3D&amp;hl=ta&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwik-7fw3fOGAxWwh1YBHSoHCHsQ2ZgBCBk">தமிழ்</a>
          <a href="https://www.google.com/setprefs?sig=0_-ljQWPFHgsp95yNGCwRcMQLjU_8%3D&amp;hl=gu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwik-7fw3fOGAxWwh1YBHSoHCHsQ2ZgBCBo">ગુજરાતી</a>
          <a href="https://www.google.com/setprefs?sig=0_-ljQWPFHgsp95yNGCwRcMQLjU_8%3D&amp;hl=kn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwik-7fw3fOGAxWwh1YBHSoHCHsQ2ZgBCBs">ಕನ್ನಡ</a>
          <a href="https://www.google.com/setprefs?sig=0_-ljQWPFHgsp95yNGCwRcMQLjU_8%3D&amp;hl=ml&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwik-7fw3fOGAxWwh1YBHSoHCHsQ2ZgBCBw">മലയാളം</a>
          <a href="https://www.google.com/setprefs?sig=0_-ljQWPFHgsp95yNGCwRcMQLjU_8%3D&amp;hl=pa&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwik-7fw3fOGAxWwh1YBHSoHCHsQ2ZgBCB0">ਪੰਜਾਬੀ</a>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Content;