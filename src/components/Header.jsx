import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
    return (
        <div>
              
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid mt-2 mb-3">
                    <img className='logo' src="https://e-complaint.icta.az/assets/imgs/gradient_black.png" alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                  <div className="user d-flex me-4">
                    <h5 className='mt-3 me-2'> PƏRİ ABBASZADƏ ZAUR QIZI  </h5> <span> <FaRegCircleUser /></span>
                  </div>
                </div>
            </nav>



        </div>
    )
}

export default Header