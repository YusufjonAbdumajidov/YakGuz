import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { BsGlobe2, BsChevronDown, BsChevronUp } from "react-icons/bs";

const Navbar = () => {
  const [ showDropdown, setShowDropdown ] = useState(false);
  return (
    <div className="navbar">
        <section>
            <span>+99855 404-18-74</span>
            <span>G’uzor shaxri, Mustaqillik ko’chasi 41 uy</span>
        </section>
        <section>
            <h1 className='logo'>YAKGUZ</h1>
            <div>
              <div className="dropdown">
                <li className="moreBtn" onClick={() => setShowDropdown(!showDropdown) }>Ma'lumotlar</li>
                <div className="dropdown-content">
                  <li>Umumiy qoidalar</li>
                  <li>Tashkiliy tuzilma</li>
                  <li>Vazifa va funksiyalar</li>
                  <li>Huquq va majburiyatlar</li>
                </div>
              </div>
                <p>Rahbariyat</p>
                <p>Qabul</p>
                <p>Aloqa</p>
            </div>
        </section>
    </div>
  )
}

export default Navbar