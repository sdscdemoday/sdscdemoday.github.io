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
                            <th scope="row">8:40am</th>
                            <td><span className="fw-bold">Registration</span></td>
                            <td>Level 2 Foyer</td>
                        </tr>
                        <tr>
                            <th scope="row">9:30am</th>
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
                            <th scope="row">9:40am</th>
                            <td>
                                <span className="fw-bold">
                                    Advancing Game Content Creation with LightSpeed's Self-developed Generative AI Technology
                                </span>
                                <br />Dr Hu Zeyu
                                <span className="fst-italic">
                                    <br />Lightspeed Studios Singapore
                                </span>
                            </td>
                            <td>Auditorium</td>
                        </tr>
                        <tr>
                            <th scope="row">10:10am</th>
                            <td>
                                <span className="fw-bold">
                                    Diffusion Models for 3D Human Pose and Mesh Recovery
                                </span>
                                <br />Asst Prof Liu Jun
                                <span className="fst-italic">
                                    <br />Singapore University of Technology and Design
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
                            <th scope="row">11.40am</th>
                            <td>
                                <span className="fw-bold">
                                    TBA
                                </span>
                                <br />Associate Professor Zhu Feida 
                                <span className="fst-italic">
                                    <br />School of Information Systems
                                    <br />Singapore Management University
                                </span>
                            </td>
                            <td>Auditorium</td>
                        </tr>
                        <tr>
                            <th scope="row">11.50am</th>
                            <td>
                                <span className="fw-bold">
                                    Smart Beauty Trend Engine for Beauty Product Trend Analysis
                                </span>
                                <br />Mr Robert Brockman
                                <span className="fst-italic">
                                    <br />Vice President, Digital Solutions Marketing & Product Development
                                    <br />Meiyume
                                </span>
                            </td>
                            <td>Auditorium</td>
                        </tr>
                        <tr>
                        <th scope="row">12.20am</th>
                            <td>
                                <span className="fw-bold">
                                    Enabling Precision in Public Health through Data Democratisation
                                </span>
                                <br />Ms Neo Yi Lin
                                <span className="fst-italic">
                                    <br />Deputy Director
                                    <br />Health Promotion Board
                                </span>
                            </td>
                            <td>Auditorium</td>
                        </tr>
                        {/*<tr>
                            <!-- Breakout Session 1 -->
                            <td colSpan={3} className="bg-warning text-center">
                                <span className="fw-bold">Breakout Room Session 1</span><br/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">11.20am</th>
                            <td colSpan="2">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="pt-0 px-0">
                                                <span className="fw-bold">
                                                    TBA
                                                </span>
                                                <br />Associate Professor Zhu Feida 
                                                <span className="fst-italic">
                                                    <br />School of Information Systems
                                                    <br />Singapore Management University
                                                </span>
                                            </td>
                                            <td>Auditorium</td>
                                        </tr>
                                        <tr>
                                            <td className="pt-0 px-0">
                                                <span className="fw-bold">
                                                    Helping Small Businesses with Real-Time Credit Decisioning using ML and AI
                                                </span>
                                                <br />Mr Sumit Kumar
                                                <span className="fst-italic">
                                                    <br />Global Commercial Risk Decision Science,
                                                    <br />American Express Innovation Lab
                                                </span>
                                            </td>
                                            <td>Clove</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <!-- Breakout Session 2 -->
                            <td colSpan={3} className="bg-success text-center text-light">
                                <span className="fw-bold">Breakout Room Session 2</span><br/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">11.20am</th>
                            <td colSpan="2">
                                <!-- Second Breakout Sessions -->
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="pt-0 px-0">
                                                <span className="fw-bold">
                                                    Hateful Content Moderation with Data Science & AI
                                                </span>
                                                <br />Asst Prof Roy Ka-Wei Lee
                                                <span className="fst-italic">
                                                    <br />Information Systems and Design,
                                                    <br />Singapore University of Technology and Design
                                                </span>
                                            </td>
                                            <td>Auditorium</td>
                                        </tr>
                                        <tr>
                                            <td className="pt-0 px-0">
                                                <span className="fw-bold">
                                                    ChatGPT. LLMs and Generative AI: What your Business Needs to know                                                </span>
                                                <br />Mr CK Thum
                                                <span className="fst-italic">
                                                    <br />Account Director,
                                                    <br />Katonic.ai
                                                </span>
                                            </td>
                                            <td>Clove</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </td>
                        </tr>*/}
                        <tr>
                            <th scope="row">12:50am</th>
                            <td><span className="fw-bold">Lunch / Demo Session / Networking</span></td>
                            <td>Level 2 Foyer / Basil</td>
                        </tr>
                        <tr>
                            <th scope="row">2:00pm</th>
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
