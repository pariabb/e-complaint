import React from 'react'
import { CiSearch } from "react-icons/ci";

const Complaint = () => {
    return (
        <>
        
        <main>
            <div className='container-fluid my-4'>
                <div className="row d-flex justify-content-end me-3">
              
                    <div className="col-11">
                        <div className="button-input d-flex flex-row justify-content-between">
                        <div className="buttons">
                            <button className='btn mx-3' ><i class="fa-solid fa-plus"></i> Yeni şikayət yarat</button>
                            <button className='btn mx-3' ><i class="fa-solid fa-filter"></i> Ətraflı axtarış</button>
                            <button className='btn mx-3' ><i class="fa-solid fa-circle-info"></i> Təlimat</button>
                        </div>
                        <div className="search">
                            <label >
                                <CiSearch />
                            </label>
                            <input type="text" placeholder=" Axtar..." />
                        </div>
                        </div>
                        <table className="table">
                            <thead >

                                <tr>
                                    <th scope="col"><p>Şikayət nömrəsi</p></th>
                                    <th scope="col"><p>Fəaliyyət sahəsi</p></th>
                                    <th scope="col"><p>Şirkət</p></th>
                                    <th scope="col"><p>Mövzu</p></th>
                                    <th scope="col"><p>Abunəçi kodu</p></th>
                                    <th scope="col"><p>Status</p></th>
                                    <th scope="col"><p>Tarix</p></th>
                                    <th scope="col"><p>Əməliyyatlar</p></th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr className='text-center '>

                                    <td colSpan="100%" rowSpan="100% " >Heç bir şikayət əlavə edilməyib...</td>


                                </tr>
                            </tbody>
                        </table>
                       <div className="bottom-text">
                        <p className='mt-4'>Göstərilən: 0-0, cəmi 0 (0 səhifə)</p>
                        <div className="button-arrow">
                        <button> <i class="fa-solid fa-less-than"></i></button>
                        <span></span>
                        <button><i class="fa-solid fa-greater-than"></i></button>
                        </div>
                        </div>
                    </div>
                </div>


            </div>


        </main>
        </>
    )
}

export default Complaint
