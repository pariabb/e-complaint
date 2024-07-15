import React from 'react';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
// import {Complaint} from '../data/data';
import { ComplaintData } from '../data/data';

import resume from '../assets/pdf/E-Şikayət - Abunəçi Təlimatı (1).pdf'
const Complaint = () => {
    const data=ComplaintData
    return (
        <main>
            <div className='container-fluid my-4'>
                <div className="row d-flex justify-content-end me-3">
                    <div className="col-11 col-lg-11 col-md-11 col-sm-11">
                        <div className="button-input d-flex flex-row justify-content-between">
                            <div className="buttons">
                                <Link to='/newcomplaint' className='btn mx-3'><i className="fa-solid fa-plus"></i> Yeni şikayət yarat</Link>
                                <button className='btn mx-3'><i className="fa-solid fa-filter"></i> Ətraflı axtarış</button>
                                <a href={resume} download="E-Şikayət - Abunəçi Təlimatı">                                
                                    <button className='btn mx-3'><i className="fa-solid fa-circle-info"></i> Təlimat</button>
                                </a>
                            </div>
                            <div className="search">
                                <label>
                                    <CiSearch />
                                </label>
                                <input type="text" placeholder=" Axtar..." />
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
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
                                <tbody>
                                    {/* <tr className='text-center'>
                                        <td colSpan="100%" rowSpan="100%">Heç bir şikayət əlavə edilməyib...</td>
                                    </tr> */}
                                    {data.map((item,idx) => {
                                        return (
                                            <tr key={idx} className='text-center'>
                                                <td>{item.complaint_number}</td>
                                                <td>{item.field_of_action}</td>
                                                <td>{item.company}</td>
                                                <td>{item.subject}</td>
                                                <td>{item.subscriber_code}</td>
                                                <td>{item.status}</td>
                                                <td>{item.date}</td>
                                                <td className='d-flex justify-content-center'><div className="eye"><i className="fa-solid fa-eye"></i></div></td>






                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="bottom-text">
                            <p className='mt-4'>Göstərilən: 0-0, cəmi 0 (0 səhifə)</p>
                            <div className="button-arrow">
                                <button><i className="fa-solid fa-less-than"></i></button>
                                <span></span>
                                <button><i className="fa-solid fa-greater-than"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Complaint;
