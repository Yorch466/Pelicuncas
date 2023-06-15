import React from 'react'
import './NavigationBar.css'
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className="navigation-container">

          <NavLink className="button-1">
            <i>
              <img src="/static/image/boton1.png" alt="no furulo we" />
            </i>
          </NavLink >

          <NavLink className="button-2">
            <i>
              <img src="/static/image/boton2.png" alt="no furulo we" />
            </i>
          </NavLink>

          <NavLink className="button-3">
            <i>
              <img src="/static/image/boton3.png" alt="no furulo we" />
            </i>
          </NavLink>

          <NavLink className="button-4">
            <i>
              <img src="/static/image/boton4.png" alt="no furulo we" />
            </i>
          </NavLink>
          {/* {<button className="button-1">
            <img src="/static/image/boton1.png" alt="no furulo we" />
          </button>
          <button>
            <img src="/static/image/boton2.png" alt="no furulo we" />
          </button>
          <button>
            <img src="/static/image/boton3.png" alt="no furulo we" />
          </button>
          <button>
            <img src="/static/image/boton4.png" alt="no furulo we" />
          </button>} */}
        </div>
      );
    };
export default NavigationBar