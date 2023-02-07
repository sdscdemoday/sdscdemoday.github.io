const Program = () => {
    return (
        <div className="container-fluid main-content">
            <article className="about mt-4">
                <h1>Program Schedule</h1>
                <p className="lead">
                    You may find the confirmed program schedule and speaker slots for the day in the table below.
                </p>
                <div className="my-2 text-center seperator">
                    &bull; &bull; &bull;
                </div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Time</th>
                        <th scope="col">Programme</th>
                        <th scope="col">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">8:30am</th>
                            <td><span className="fw-bold">Registration</span></td>
                            <td>Level 2 Foyer</td>
                        </tr>
                        <tr>
                            <th scope="row">9.00am</th>
                            <td>
                                <span className="fw-bold">
                                    Opening Remarks by Singapore Data Science Consortium
                                </span>
                                <br />Prof Tan Kian lee
                                <span className="fst-italic">
                                    <br />Dean, School of Computing, National University of Singapore
                                    <br />Executive Director, Singapore Data Science Consortium
                                </span>
                            </td>
                            <td>Auditorium</td>
                        </tr>
                        <tr>
                            <th scope="row">9:10am</th>
                            <td>
                                <span className="fw-bold">
                                    Opening Remarks by NUS AI Lab
                                </span>
                                <br />Asst Prof Harold Soh
                                <span className="fst-italic">
                                    <br />Assistant Professor, School of Computing, 
                                    <br />National University of Singapore
                                    <br />Associate Director, NUS AI Lab
                                </span>
                            </td>
                            <td>Auditorium</td>
                        </tr>
                        <tr>
                            <th scope="row">9:20am</th>
                            <td>
                                <span className="fw-bold">
                                    How the Risk Landscape Evolved through Pandemic
                                </span>
                                <br />Mr Sumit Kumar
                                <span className="fst-italic">
                                    <br />Vice President, Global Commercial Risk Decision Science (Credit & Fraud Risk), 
                                    <br />American Express Innovation Laboratories Limited
                                </span>
                            </td>
                            <td>Auditorium</td>
                        </tr>
                        <tr>
                            <th scope="row">10.00am</th>
                            <td>
                                <span className="fw-bold">
                                Making Defence Your Best Attack - How MLOps Can Make You Comply with Regulatory Requirements (Responsible AI and others) and Help You Drive ROI on AI-based Applications/Processes
                                </span>
                                <br />Dr Carlos Queiroz
                                <span className="fst-italic">
                                    <br />Head of Data Science Engineering (CCIB), 
                                    <br />Standard Chartered Bank
                                </span>
                            </td>
                            <td>Auditorium</td>
                        </tr>
                        <tr>
                            <th scope="row">10:40am</th>
                            <td>
                                <span className="fw-bold">
                                    Tea Break
                                </span>
                            </td>
                            <td>Level 2 Foyer</td>
                        </tr>
                        <tr>
                            <th scope="row">11.10am</th>
                            <td colSpan="2">
                                {/* First Breakout Sessions */}
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="pt-0 px-0">
                                                <span className="fw-bold text-primary">Breakout Room 1:</span><br/>
                                                <span className="fw-bold">
                                                Making Defence Your Best Attack - How MLOps Can Make You Comply with Regulatory Requirements (Responsible AI and others) and Help You Drive ROI on AI-based Applications/Processes
                                                </span>
                                                <br />Dr Carlos Queiroz
                                                <span className="fst-italic">
                                                    <br />Head of Data Science Engineering (CCIB), 
                                                    <br />Standard Chartered Bank
                                                </span>
                                            </td>
                                            <td>Auditorium</td>
                                        </tr>
                                        <tr>
                                            <td className="pt-0 px-0">
                                                <span className="fw-bold text-primary">Breakout Room 2:</span><br/>
                                                <span className="fw-bold">
                                                Play, Consume, and Innovate Sports in AI Era
                                                </span>
                                                <br />Dr Masoumeh Izadi
                                                <span className="fst-italic">
                                                    <br />Founder and Managing Director, Television Content Analytics (TVCONAL)
                                                </span>
                                            </td>
                                            <td>Clove</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </td>
                        </tr>
                        <tr>
                            <th scope="row">11.50am</th>
                            <td colSpan="2">
                                {/* Second Breakout Sessions */}
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="pt-0 px-0">
                                                <span className="fw-bold text-primary">Breakout Room 1:</span><br/>
                                                <span className="fw-bold">
                                                Exploiting Pre-trained Models, Compositionality, and Reasoning Algorithms for Visual-Language Object Placement
                                                </span>
                                                <br />Prof Lee Wee Sun
                                                <span className="fst-italic">
                                                    <br />Head, Department of Computer Science, 
                                                    <br />School of Computing, National University of Singapore
                                                </span>
                                            </td>
                                            <td>Auditorium</td>
                                        </tr>
                                        <tr>
                                            <td className="pt-0 px-0">
                                                <span className="fw-bold text-primary">Breakout Room 2:</span><br/>
                                                <span className="fw-bold">
                                                Building Intelligent Applications: A Blueprint for Harnessing the Power of Data, AI, and Analytics to Drive Business
                                                </span>
                                                <br />Mr Amenallah Reghimi
                                                <span className="fst-italic">
                                                    <br />Chief Product & Technology Officer, Perx Technologies
                                                </span>
                                            </td>
                                            <td>Clove</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </td>
                        </tr>
                        <tr>
                            <th scope="row">12:30pm</th>
                            <td><span className="fw-bold">Lunch and Demo Session</span></td>
                            <td>Level 2 Foyer / Lavender</td>
                        </tr>
                        <tr>
                            <th scope="row">1:45pm</th>
                            <td>
                                <span className="fw-bold">
                                Multimodal Intelligence: Foundation Models and Beyond 
                                </span>
                                <br />Dr Steven Hoi
                                <span className="fst-italic">
                                    <br />Managing Director, Salesforce Research Asia
                                </span>
                            </td>
                            <td>Auditorium</td>
                        </tr>
                        <tr>
                            <th scope="row">2:30pm</th>
                            <td>
                                <span className="fw-bold">
                                Panel Discussion - Data Intelligence
                                </span>
                                <br />Moderator: Prof Ng See-Kiong
                                <br />Panelists: Dr Carlos Queiroz, Mr Amenallah Reghimi, Assoc Prof Cheng Shih-Fen, Dr Masoumeh Izadi
                            </td>
                            <td>Auditorium</td>
                        </tr>
                        <tr>
                            <th scope="row">3:30pm</th>
                            <td><span className="fw-bold">Networking Tea</span></td>
                            <td>Level 2 Foyer</td>
                        </tr>
                        <tr>
                            <th scope="row">4:00pm</th>
                            <td><span className="fw-bold">End of Event</span></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div className="my-2 text-center seperator">
                    &bull; &bull; &bull;
                </div>
            </article>
        </div>
    );
};

export default Program;
