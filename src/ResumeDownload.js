import React from "react";
import Velayuthem_Moanisha_Frontend from "./Assets/Velayuthem_Moanisha_Frontend.pdf"; // Replace with the correct path to your resume PDF
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResumeDownload = () => {
  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = Velayuthem_Moanisha_Frontend;
    link.download = "Moanisha_resume.pdf"; // Change the downloaded file name if needed
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

  return (
    <div style={{ paddingTop: "10px" }}>
      <button onClick={handleDownload}>
        Download Resume{" "}
        <FontAwesomeIcon icon={faDownload} style={{ marginLeft: "5px" }} />
      </button>
    </div>
  );
};

export default ResumeDownload;
