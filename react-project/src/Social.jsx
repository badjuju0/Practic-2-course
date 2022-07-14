import { useLocation } from "react-router-dom";
import React from "react";
import {Link} from "react-router-dom"

const Home = () => {
  
  return (
    <div className="">
      <div className="text-socials">
       <p>  In this links:
          <ul>
            <li>
              <a href="https://vk.com/pgorbachyov">Pavel</a> 
            </li>
            <li>
              <a href="https://vk.com/id392842132">Danila</a> 
            </li>
            <li>
              <a href="https://vk.com/f4vour1te">Ilya</a> 
            </li>
          </ul>you can watch our socials
          </p>
      </div>
    </div>
  );
};
 
export default Home;