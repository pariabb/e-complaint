import React from 'react'
import { LuUpload } from "react-icons/lu";
import { RiFullscreenExitLine, RiFullscreenLine } from "react-icons/ri";
import { PiTrashSimpleFill } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import { useState } from 'react';
import { Field_Of_Action ,Company} from '../data/data';


const NewComplaint = () => {
    const type = Field_Of_Action
    const type1 = Company


    const [fileContent, setFileContent] = useState(null);

    const [fullScreen, setFullScreen] = useState(false);

    const [actionField,setActionField]=useState(false);

    const [filteredCompany, setFilteredCompany] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile.type.includes("image")) {
            const reader = new FileReader();
            reader.onload = () => {
                setFileContent(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
        setFileContent(selectedFile.name);
    };

    const defineCompanies = (selectedField) => {
        const companies = type1.filter((type) => type.field === selectedField);
        setFilteredCompany(companies[0]);
    }
    return (
        <>  <div className="container">
            <div className="row">
                <div className="new-complaint my-4">
                    <div className="header col-12 mt-1 ">
                        <h3>Şikayət Məlumatları</h3>
                    </div>


                    <div className="row my-4 ms-3">

                        <div className="col-3 ">
                            <label><span>*</span>Şikayət etdiyiniz fəaliyyət sahəsi</label>
                            <select onChange={(e)=>{
                                e.target.value? setActionField(true) :setActionField(false);
                                defineCompanies(e.target.value);
                                }} defaultValue={"option"} className="form-select mt-1 mb-4" aria-label="Default select example">
                                <option disabled value={"option"}>Fəaliyyət sahəsi</option>
                                {type && type.map((data, idx) => (
                                    <option
                                        key={idx} value={data.value}>{data.title}</option>
                                ))}
                            </select>

                            <label><span>*</span>Şikayətçi olduğunuz şirkət</label>
                            <select disabled={actionField?false:true} defaultValue={"option"} className="form-select mt-1 mb-4" aria-label="Default select example">

                                <option disabled value={"option"}
                                
                                >Şikayətçi olduğunuz şirkət</option>
                                {filteredCompany && filteredCompany.names.map((data, idx) => (
                                    <option
                                        key={idx} value={data.name}>{data.name}</option>
                                ))}
                            </select>

                            <label><span>*</span>Şikayətin xarakteristikası</label>
                            <select defaultValue={"option"} className="form-select mt-1 mb-4" aria-label="Default select example">
                                <option disabled value={"option"}>Şikayətin xarakteristikası</option>
                                <option value="1">Internet(GPON,ADSL və s.)</option>
                                <option value="2">Telefon Rabitəsi</option>
                                <option value="3">Mobil İnternet</option>
                                <option value="4">Mobil Rabitə</option>
                                <option value="5">Universal poçt rabitəsi xidmətləri</option>
                                <option value="6">Sürətli poçt rabitəsi xidmətləri</option>
                            </select>

                            <label className='ms-1'>Şikayətin mövzusunu seçin</label>
                            <select defaultValue={"option"} className="form-select mt-1 mb-4" aria-label="Default select example">
                                <option disabled value={"option"}>Şikayətin mövzusunu seçin</option>
                                <option value="1">Internet(GPON,ADSL və s.)</option>
                                <option value="2">Telefon Rabitəsi</option>
                                <option value="3">Mobil İnternet</option>
                                <option value="4">Mobil Rabitə</option>
                                <option value="5">Universal poçt rabitəsi xidmətləri</option>
                                <option value="6">Sürətli poçt rabitəsi xidmətləri</option>
                            </select>
                        </div>
                        <div className="col-6">

                            <label><span>*</span>Abunəçi kodu <i className="fa-solid fa-circle-info"></i></label>
                            <input type="text" className="form-control w-50 mb-5" />

                            <label><span>*</span>Şikayət Mətni</label>


                            <div className="form-floating">
                                <textarea className="form-control textarea" />
                                <label htmlFor="floatingTextarea">Maximum 1000 simvol</label>
                            </div>



                        </div>
                        <div className="col-3 mt-5">

                            <div
                                className={`file-add position-relative ${fileContent === null ? "h-100" : "py-5"} 
                                        cursor-pointer pb-4 px-4  border d-flex flex-column align-items-center gap-2 justify-content-end  transition duration-300`}
                            >
                                {fileContent === null ? (
                                    <>
                                        <LuUpload className="fs-1 group-hover:text-muted transition duration-300" />
                                        <p className="fs-3 group-hover:text-muted transition duration-300">
                                            Fayl əlavə et
                                        </p>
                                        <span className="text-muted">
                                            Faylları buraya əlavə edin. Faylın ölçüsü maksimum 10 MB həcmində, png, txt, jpeg, jpg, pdf formatında fayl əlavə edə bilərsiniz.
                                        </span>
                                        <input
                                            type="file"
                                            accept=".png,.txt,.jpeg,.jpg,.pdf"
                                            onChange={(e) => {
                                                handleFileChange(e);
                                            }}
                                            className="position-absolute w-100 h-100 opacity-0 cursor-pointer"
                                        />
                                    </>
                                ) : (
                                    <>
                                        {fileContent.includes("image") ? (
                                            <div className="position-relative">
                                                <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center gap-2 transition duration-300">
                                                    <PiTrashSimpleFill
                                                        onClick={() => {
                                                            setFileContent(null);
                                                        }}
                                                        className="text-primary fs-1"
                                                    />
                                                    <RiFullscreenLine
                                                        className="text-primary fs-1"
                                                        onClick={() => setFullScreen(true)}
                                                    />
                                                </div>
                                                <img src={fileContent} alt="" />
                                            </div>
                                        ) : (
                                            <div>
                                                <div className=" position-absolute  end-0 bottom-0  gap-2 transition duration-300">
                                                    <PiTrashSimpleFill
                                                        onClick={() => {
                                                            setFileContent(null);
                                                        }}
                                                        className="text-danger trash"
                                                    />
                                                </div>
                                                <p>{fileContent}</p>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="last-sec ">
                    <div className=" row ms-3 mt-5">
                        <div className="col-12 d-flex flex-row">
                            <div className="d-flex flex-column">
                                <label><span>*</span>Şəhəri seçin</label>
                                <select defaultValue={"option"} className="form-select mt-1 mb-4  " aria-label="Default select example">
                                    <option disabled value={"option"}>Şəhəri seçin</option>
                                    <option value={1}>Internet(GPON,ADSL və s.)</option>
                                    <option value={2}>Telefon Rabitəsi</option>
                                    <option value={3}>Mobil İnternet</option>
                                    <option value={4}>Mobil Rabitə</option>
                                    <option value={5}>Universal poçt rabitəsi xidmətləri</option>
                                    <option value={6}>Sürətli poçt rabitəsi xidmətləri</option>
                                </select>
                            </div>

                            <div className="d-flex flex-column ms-5">
                                <label><span>*</span>Rayonu seçin</label>
                                <select defaultValue={"option"} className="form-select mt-1 mb-4 w-75  " aria-label="Default select example">
                                    <option disabled value={"option"}>Rayonu seçin</option>
                                    <option value={1}>Internet(GPON,ADSL və s.)</option>
                                    <option value={2}>Telefon Rabitəsi</option>
                                    <option value={3}>Mobil İnternet</option>
                                    <option value={4}>Mobil Rabitə</option>
                                    <option value={5}>Universal poçt rabitəsi xidmətləri</option>
                                    <option value={6}>Sürətli poçt rabitəsi xidmətləri</option>
                                </select>
                            </div>
                            <div className="d-flex flex-column">
                                <label><span>*</span>Küçəni/kəndi seçin</label>
                                <select defaultValue={"option"} className="form-select mt-1 mb-4 " aria-label="Default select example">
                                    <option disabled value={"option"}>Küçəni/kəndi seçin</option>
                                    <option value={1}>Internet(GPON,ADSL və s.)</option>
                                    <option value={2}>Telefon Rabitəsi</option>
                                    <option value={3}>Mobil İnternet</option>
                                    <option value={4}>Mobil Rabitə</option>
                                    <option value={5}>Universal poçt rabitəsi xidmətləri</option>
                                    <option value={6}>Sürətli poçt rabitəsi xidmətləri</option>
                                </select>

                            </div>

                            <div className="add-country d-flex flex-column  ">
                                <label><span>*</span> Yeni Küçə/kənd  əlavə edin</label>
                                <div className="main-div ms-2">
                                    <div className="plus-div">
                                        <FaPlus />
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                    <div className=" row ms-3 mt-3 ">
                        <div className="col-12 d-flex flex-row">
                            <div className="d-flex flex-column">
                                <label><span>*</span>Bina/Ev</label>
                                <input type="text" className="form-control inputs ms-2" />
                            </div>
                            <span className='space'>/</span>
                            <div className="d-flex flex-column">
                                <label>Mənzil</label>
                                <input type="text" className="form-control inputs" />
                            </div>

                            <div className="d-flex flex-column ms-5">
                                <label><span>*</span>Əlaqə nömrəsi</label>
                                <div className="d-flex">
                                    <h6 className='  me-1'>+994</h6>    <select defaultValue={"option"} className="form-select tel-one" aria-label="Default select example">
                                        <option value={1}>(50)</option>
                                        <option value={2}>(51)</option>
                                        <option value={3}>(55)</option>
                                        <option value={4}>(60)</option>
                                        <option value={5}>(99)</option>
                                        <option value={6}>(10)</option>
                                        <option value={7}>(70)</option>
                                        <option value={8}>(77)</option>
                                    </select>
                                    <input type="text" className="tel form-control  ms-1 " />

                                </div>
                            </div>

                            <div className="d-flex flex-column ms-4" >
                                <label>Stasionar Telefon</label>
                                <input type="text" className="form-control " />
                            </div>

                            <div className="d-flex flex-column ms-4">
                                <label><span>*</span>Email</label>
                                <input type="text" className="form-control" placeholder='example@gmail.com' />
                            </div>

                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="header col-12 mt-1 ">
                            <h4> <MdDone /> Şikayət yarat</h4>
                        </div>
                    </div>
                </div>


            </div>
        </div>
            <div
                className={`position-fixed top-0 bottom-0 start-0 end-0 bg-dark bg-opacity-25 z-index-9999 d-flex justify-content-center align-items-center ${fullScreen ? "d-flex" : "d-none"}`}
            >
                <div className="col-lg-5  overflow-hidden d-flex justify-content-center">
                    <img src={fileContent} className="" alt="" />
                </div>
                <RiFullscreenExitLine
                    onClick={() => setFullScreen(false)}
                    className="cursor-pointer text-white display-4 position-absolute top-0 end-0 mt-3 me-3 hover-scale"
                />
            </div>
        </>
    )
}

export default NewComplaint
