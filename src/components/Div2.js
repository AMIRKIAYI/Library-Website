import React from "react";
import { useNavigate } from "react-router-dom";
import "./Div2.css";

function Div2() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
      <div className="tot">
        <div className="row">
            <div className="content1">
                <i className="fa-solid fa-book"></i>
                <h1 style={{color: "#008000"}}><strong>E-resources Off-campus Access</strong></h1>
                <p className="roboto-black">Access electronic resources (Journals, databases, e-books) and other digital materials, from outside Garissa University Network through myLOFT.</p>
                <button type="button" className="btn btn-primary" onClick={() => handleNavigation('/e-resources')}>Read More</button>
            </div>
            <div className="content1">
                <i className="fa-solid fa-file-lines"></i>
                <h1 style={{color: "#008000"}}><strong>Anti-Plagiarism Software</strong></h1>
                <p className="roboto-black">The TURNITIN software is an educational tool that compares the similarities of academic or any other written material/work against a wide range of databases.</p>
                <button type="button" className="btn btn-primary" onClick={() => handleNavigation('/turnitin')}>Read More</button>
            </div>
            <div className="content1">
                <i className="fa-solid fa-globe"></i>
                <h1 style={{color: "#008000"}}><strong>Institutional Repository</strong></h1>
                <p className="roboto-black">This collection contains research and other publications generated and held within Garissa University. Full text access is provided under Creative Commons License</p>
                <button type="button" className="btn btn-primary" onClick={() => handleNavigation('/repository')}>Read More</button>
            </div>
        </div>
      </div>
    );
}

export default Div2;
