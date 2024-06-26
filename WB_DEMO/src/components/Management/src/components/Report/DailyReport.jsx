import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./DailyReport.css";
import * as XLSX from "xlsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  faDownload,
  faHome,
  faBackward,
  faPowerOff,
  faFileAlt,
  faVideo,
  faMapMarked,
  faExchangeAlt,
  faTruck,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

// function computeTableData(items) {
//   return items.map((item) => ({
//     date: item.date,
//     ticketNo: item.ticketNo,
//     truckNo: item.truckNo,
//     product: item.product,
//     poNo: item.poNo,
//     tpNo: item.tpNo,
//     grossWt: item.grossWt,
//     tareWt: item.tareWt,
//     netWt: item.netWt,
//   }));
// }

// function arrayEquality(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     for (let key in arr1[i]) {
//       if (arr1[i][key] !== arr2[i][key]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

function DailyReport() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();

  const handlehome = () => {
    navigate("/home");
  };

  const data = [
    {
      date: "2024-03-01",
      ticketNo: 1,
      truckNo: "00 02 Al 1860",
      product: "Coal",
      poNo: 120012,
      tpNo: "21T-11000000076981",
      grossWt: 3265,
      tareWt: 1936,
      netWt: 1329,
    },
    {
      date: "2024-03-02",
      ticketNo: 2,
      truckNo: "00 14 OD 1334",
      product: "Hariana",
      poNo: 16123456,
      tpNo: "21T-11000000076982",
      grossWt: 3265,
      tareWt: 1935,
      netWt: 1330,
    },
    {
      date: "2024-03-03",
      ticketNo: 3,
      truckNo: "04-hk-a-j-1022",
      product: "Coal",
      poNo: 232452,
      tpNo: "21T-11000000076983",
      grossWt: 2898,
      tareWt: 2065,
      netWt: 833,
    },
    {
      date: "2024-03-04",
      ticketNo: 4,
      truckNo: "Ch 02-d-a 2420",
      product: "Coal",
      poNo: 543124,
      tpNo: "21T-11000000076984",
      grossWt: 3000,
      tareWt: 1970,
      netWt: 1030,
    },
    {
      date: "2024-03-03",
      ticketNo: 5,
      truckNo: "00-kj-1-a-841",
      product: "Hematite",
      poNo: 323144,
      tpNo: "21T-11000000076985",
      grossWt: 2969,
      tareWt: 2144,
      netWt: 825,
    },
    {
      date: "2024-03-06",
      ticketNo: 6,
      truckNo: "Gd-28-a-j-1825",
      product: "Coal",
      poNo: 241524,
      tpNo: "21T-11000000076986",
      grossWt: 3265,
      tareWt: 2136,
      netWt: 1129,
    },
    {
      date: "2024-03-07",
      ticketNo: 7,
      truckNo: "Gd-28-sa-v-893",
      product: "Coal",
      poNo: 210973,
      tpNo: "21T-11000000076987",
      grossWt: 3100,
      tareWt: 1700,
      netWt: 1400,
    },
    {
      date: "2024-03-08",
      ticketNo: 8,
      truckNo: "Cb-34-rs-k-800",
      product: "Dovermin",
      poNo: 5918873,
      tpNo: "21T-11000000076988",
      grossWt: 3265,
      tareWt: 1835,
      netWt: 1430,
    },
    {
      date: "2024-03-09",
      ticketNo: 9,
      truckNo: "Ch 02-sa-a-6843",
      product: "Coal",
      poNo: 212345,
      tpNo: "21T-11000000076989",
      grossWt: 2899,
      tareWt: 1999,
      netWt: 900,
    },
    {
      date: "2024-03-10",
      ticketNo: 10,
      truckNo: "Gd-25-tc-h-5123",
      product: "Coal",
      poNo: 281783,
      tpNo: "21T-11000000076990",
      grossWt: 3265,
      tareWt: 2235,
      netWt: 1030,
    },
    {
      date: "2024-03-11",
      ticketNo: 11,
      truckNo: "Ch 02-sa-a-6843",
      product: "Coal",
      poNo: 212345,
      tpNo: "21T-11000000076991",
      grossWt: 2899,
      tareWt: 1999,
      netWt: 900,
    },
  ];

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setCurrentPage(0);
  };

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    setSelectedDate(getCurrentDate());
  }, []);

  const filteredData = selectedDate
    ? data.filter((item) => item.date === selectedDate)
    : data;

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredData.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(filteredData.length / itemsPerPage) || 1;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // const tableData = useMemo(
  //   () => computeTableData(currentItems),
  //   [currentItems]
  // );

  const handleDownload = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "DailyReport");
    XLSX.writeFile(wb, "daily_report.xlsx");
  };

  return (
    <div>
      <div className="report-header d-flex justify-content-between align-items-center">
        <div></div>
        <h2 className="report-header-title text-center mt-3">Daily Report</h2>
        <FontAwesomeIcon
          icon={faHome}
          className="daily_report_icon mt-2 "
          onClick={handlehome}
        />
      </div>
      <div className="home-sidebar d-flex flex-column text-center">
        <Link to="/vehicle-entry" className="sidebar-item">
          <FontAwesomeIcon icon={faTruck} className="sidebar-icon" />
          <span className="sidebar-item-text">Vehicle Entered</span>
        </Link>
        <Link to="/live-location" className="sidebar-item">
          <FontAwesomeIcon icon={faMapMarked} className="sidebar-icon" />
          <span className="sidebar-item-text">Live Location</span>
        </Link>
        <Link to="/live-transaction" className="sidebar-item">
          <FontAwesomeIcon icon={faExchangeAlt} className="sidebar-icon" />
          <span className="sidebar-item-text">Live Transaction</span>
        </Link>
        <Link to="/camera" className="sidebar-item">
          <FontAwesomeIcon icon={faVideo} className="sidebar-icon" />
          <span className="sidebar-item-text">Camera</span>
        </Link>
        <Link to="/report" className="sidebar-item">
          <FontAwesomeIcon icon={faFileAlt} className="sidebar-icon rp-icon" />
          <span className="sidebar-item-text">Reports</span>
        </Link>
        <Link to="/" className="sidebar-item">
          <FontAwesomeIcon icon={faSignOut} className="sidebar-icon" />
          <span className="sidebar-item-text">Logout</span>
        </Link>
      </div>
      <div className="daily-report-main-content">
        <div className="daily-report-date d-flex">
          <label htmlFor="date" className="mt-1">
            &nbsp;Date:&nbsp;
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control w-auto"
            value={selectedDate}
            onChange={handleDateChange}
            max={getCurrentDate()}
          />
        </div>
        <div className="dail-report-table table-responsive-xl table-responsive-md table-responsive-lg table-responsive-sm table-responsive-xxl mt-3">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Ticket no.</th>
                <th scope="col">Truck no.</th>
                <th scope="col">Product</th>
                <th scope="col">Po no.</th>
                <th scope="col">TP no.</th>
                <th scope="col">Gross Wt.</th>
                <th scope="col">Tare Wt.</th>
                <th scope="col">Net Wt.</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.ticketNo}</td>
                  <td>{item.truckNo}</td>
                  <td>{item.product}</td>
                  <td>{item.poNo}</td>
                  <td>{item.tpNo}</td>
                  <td>{item.grossWt}</td>
                  <td>{item.tareWt}</td>
                  <td>{item.netWt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {pageCount > 1 && (
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            containerClassName={"pagination justify-content-center"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
            // Custom styling to hide the page count
            pageClassName={"d-none"}
            breakClassName={"d-none"}
            pageLinkClassName={"d-none"}
            marginPagesDisplayed={0}
            breakLabel={null}
          />
        )}
        <div className="text-center mt-1">
          <button
            className="btn btn-primary download-btn"
            onClick={handleDownload}
          >
            Download Report
          </button>
        </div>

        {/* <div className="mt-5 mb-3 d-flex justify-content-center gap-5">
          <button className="icon-button" onClick={handlehome}>
            <FontAwesomeIcon icon={faHome} size="lg" />
            <span className="ms-1">Home</span>
          </button>
          <button className="icon-button" onClick={handleback}>
            <FontAwesomeIcon icon={faBackward} size="lg" />
            <span className="ms-1">Back</span>
          </button>
          <button className="icon-button" onClick={handleSignOut}>
            <FontAwesomeIcon icon={faPowerOff} size="lg" />
            <span className="ms-1">Sign Out</span>
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default DailyReport;
