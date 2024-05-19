import React, { useState } from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ handleToggleSidebar }) => {
  const user = useSelector((state) => state.auth.user);
  const [input, setInput] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search/${input}`);
  };
  return (
    <div className='header'>
      <FaBars
        onClick={() => handleToggleSidebar()}
        className='header__menu'
        size={23}
      />

      <Link to='/'>
        <div className='header__logo'>
          <img
            style={{ height: "30px", objectFit: "contain" }}
            src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png'
            alt=''
          />
          {/* <p>
          <span>You</span>
          <span>Tube</span>
        </p>

        <p className='india'>IN</p> */}
        </div>
      </Link>

      <form className='header__form' onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
          placeholder='Search'
        />
        <button type='submit'>
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className='header__icons'>
        <MdNotifications cursor='pointer' size={28} />
        <MdApps cursor='pointer' size={28} />
        <img
          src={
            user
              ? user.photoUrl
              : "https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg"
          }
          alt={user?.name}
        />
      </div>
    </div>
  );
};

export default Header;
