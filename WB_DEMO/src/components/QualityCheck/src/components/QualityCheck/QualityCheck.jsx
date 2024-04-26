import React, { useState, useEffect, useRef } from "react";
import ReactPaginate from "react-paginate";
import Header from "../../../../Header/Header";
import SideBar3 from "../../../../SideBar/SideBar3";
import "./QualityCheck.css";
import * as XLSX from "xlsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Chart, ArcElement } from "chart.js/auto";

function QualityCheck() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);
  const homeMainContentRef = useRef(null);
 
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
 
  useEffect(() => {
    Chart.register(ArcElement);
 
    const resizeObserver = new ResizeObserver(() => {
      if (
        homeMainContentRef.current &&
        chartRef.current?.chartInstance &&
        chartRef2.current?.chartInstance
      ) {
        chartRef.current.chartInstance.resize();
        chartRef2.current.chartInstance.resize();
      }
    });
 
    if (homeMainContentRef.current) {
      resizeObserver.observe(homeMainContentRef.current);
    }
 
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const handlehome = () => {
    navigate("/home");
  };

  const data = [
    {
      "Ticket No.": 1,
      Date: "2024-04-02",
      "Vehicle No.": "00 02 Al 1860",
      In: "08:00",
      Out: "10:30",
      "Transporter Name": "XYZ Logistics",
      "Product Name": "Coal",
      "TP No.": "21T-11000000076982",
      "PO No.": "",
      "Supplier Name": "MCL",
      Status: "Inbound",
    },
    {
      "Ticket No.": 2,
      Date: "2024-04-02",
      "Vehicle No.": "00 14 OD 1334",
      In: "11:45",
      Out: "13:15",
      "Transporter Name": "ABC Transport",
      "Product Name": "Dolomite",
      "TP No.": "21T-11000000076782",
      "PO No.": "",
      "Supplier Name": "MCL",
      Status: "Outbound",
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
    ? data.filter((item) => item.Date === selectedDate)
    : data;

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredData.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(filteredData.length / itemsPerPage) || 1;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleDownload = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "DailyReport");
    XLSX.writeFile(wb, "daily_report.xlsx");
  };

  

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />

<SideBar3
  isSidebarExpanded={isSidebarExpanded}
  toggleSidebar={toggleSidebar}
/>
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
                <th scope="col">Ticket No.</th>
                <th scope="col">Date</th>
                <th scope="col">Vehicle No.</th>
                <th scope="col">In</th>
                <th scope="col">Out</th>
                <th scope="col">Transporter Name</th>
                <th scope="col">Product Name</th>
                <th scope="col">TP No.</th>
                <th scope="col">PO No.</th>
                <th scope="col">Supplier Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index}>
                  <td>{item["Ticket No."]}</td>
                  <td>{item.Date}</td>
                  <td>{item["Vehicle No."]}</td>
                  <td>{item.In}</td>
                  <td>{item.Out}</td>
                  <td>{item["Transporter Name"]}</td>
                  <td>{item["Product Name"]}</td>
                  <td>{item["TP No."]}</td>
                  <td>{item["PO No."]}</td>
                  <td>{item["Supplier Name"]}</td>
                  <td>
                    <select value={item.Status}>
                      <option value="Inbound">Inbound</option>
                      <option value="Outbound">Outbound</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination-download-container">
          <div className="pagination-container mt-3">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={handlePageChange}
              containerClassName={"pagination-buttons"}
              previousLinkClassName={"previous-button"}
              nextLinkClassName={"next-button"}
              disabledClassName={"pagination-disabled"}
              activeClassName={"pagination-active"}
            />
          </div>
          <div className="download-btn-container text-center mt-3">
            <button
              className="btn btn-primary download-btn"
              onClick={handleDownload}
            >
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QualityCheck;