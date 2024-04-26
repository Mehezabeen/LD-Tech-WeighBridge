import React from "react";
import "./QualityDetailsEntry.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
 
const QualityDetailsEntry = () => {
  const navigate = useNavigate();
  const closeForm = () => {
    navigate("/transaction");
  };
  return (
    <div className=" trans_form_main_div overflow-hidden">
      <div className="close" onClick={closeForm}>
        <FontAwesomeIcon icon={faRectangleXmark} />
      </div>
 
      <h1> Transaction Form </h1>
      <div className="row">
        <div className="col-lg-4 container-fluid">
          <label htmlFor="userId" className="text1">
            Date: -
          </label>
 
          <input type="date" autoComplete="off" value="2024-04-03" required />
          <br />
          <br />
          <input className="display_weight" value="5200.00" disabled />
          <br />
          <br />
 
          <div className="div1">
            <label htmlFor="userId" className="text1">
              Gross Wt:
            </label>
 
            <input type="text" autoComplete="off" value="5200.0" required />
 
            <input type="date" autoComplete="off" value="" required />
 
            <input type="text" autoComplete="off" required />
            <br />
 
            <label htmlFor="userId" className="text1">
              Tare Wt:
            </label>
 
            <input type="text" autoComplete="off" value="3265.00" required />
 
            <input type="date" autoComplete="off" required />
 
            <input type="text" autoComplete="off" required />
            <br />
 
            <label htmlFor="userId" className="text1">
              Net Wt:
            </label>
 
            <input type="text" autoComplete="off" value="1935.00" required />
 
            <input type="date" autoComplete="off" required />
 
            <input type="text" autoComplete="off" required />
          </div>
 
          <div className="div2">
            <label htmlFor="userId" className="text1">
              Customer:
            </label>
 
            <input type="text" autoComplete="off" value="Vikram Pvt. Ltd." required />
            <br />
 
            <label htmlFor="userId" className="text1">
              Supplier:
            </label>
 
            <input type="text" autoComplete="off" value="MCL" required />
            <br />
 
            <label htmlFor="userId" className="text1">
              Truck Number:
            </label>
 
            <input type="text" autoComplete="off" value="OD-02-AJ-1160" required />
            <br />
 
            <label htmlFor="userId" className="text1">
              Transporter:
            </label>
 
            <input type="text" autoComplete="off" value="Jagannath Travels" required />
            <br />
 
            <label htmlFor="userId" className="text1">
              Driver DL no:
            </label>
 
            <input type="text" autoComplete="off" value="OD-0420130183087" required />
            <br />
 
            <label htmlFor="userId" className="text1">
              Driver Name:
            </label>
 
            <input type="text" autoComplete="off" value="Mohan Lal" required />
            <br />
 
            <label htmlFor="userId" className="text1">
              PO no:
            </label>
 
            <input type="text" autoComplete="off" value="120012" required />
            <br />
 
            <label htmlFor="userId" className="text1">
              TP no:
            </label>
 
            <input type="text" autoComplete="off" value="23882" required />
            <br />
 
            <label htmlFor="userId" className="text1">
              Challan no:
            </label>
 
            <input type="text" autoComplete="off" value="23882" required />
            <br />
 
            <label htmlFor="userId" className="text1">
              Department:
            </label>
 
            <input type="text" autoComplete="off" value="Store" required />
            <br />
 
            <label htmlFor="userId" className="text1">
              Product:
            </label>
 
            <input type="text" autoComplete="off" value="Coal" required />
          </div>
          <br />
        </div>
        <div className="col-lg-4 div3 container-fluid">
          <label htmlFor="userId" className="text1">
            Vehicle No:
          </label>
 
          <input type="text" autoComplete="off" required />
          <br />
 
          <label htmlFor="userId" className="text1">
            PO No:
          </label>
 
          <input type="text" autoComplete="off" required />
          <br />
 
          <label htmlFor="userId" className="text1">
            TP No:
          </label>
 
          <input type="text" autoComplete="off" required />
          <br />
 
          <label htmlFor="userId" className="text1">
            Challan No:
          </label>
 
          <input type="text" autoComplete="off" required />
          <br />
         
         
        <br/>
          <table className="text-center camview">
            <tr>
              <td colSpan="5">
                <b>Camera</b>
              </td>
            </tr>
            <tr>
              <td colSpan="2" rowSpan="2">
                <img src={camView} alt="CamView" width={150} height={150} />
              </td>
              <td colSpan="2" rowSpan="2">
                <img src={camView} alt="CamView" width={150} height={150} />
              </td>
              <td><img src={camView} alt="CamView" width={100} height={75} /></td>
            </tr>
            <tr>
              <td><img src={camView} alt="CamView" width={100} height={75} /></td>
            </tr>
            <tr>
              <td colSpan="2" rowSpan="2">
                <img src={camView} alt="CamView" width={150} height={150} />
              </td>
              <td colSpan="2" rowSpan="2">
                <img src={camView} alt="CamView" width={150} height={150} />
              </td>
              <td><img src={camView} alt="CamView" width={100} height={75} /></td>
            </tr>
            <tr>
              <td><img src={camView} alt="CamView" width={100} height={75} /></td>
            </tr>
          </table>
        </div>
        <div className="col-lg-2 container-fluid">
        <div className="right_div">
          <button className="btn btn-primary">Save[F10]</button>
          <button className="btn btn-primary">Clear[F9]</button>
          <button className="btn btn-primary">Print</button>
        </div>
         
        </div>
      </div>
      <div>
       
        <label htmlFor="userId" className="text1">
          Status:
        </label>
      </div>
    </div>
  );
};
 
export default QualityDetailsEntry;