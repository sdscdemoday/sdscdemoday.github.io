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
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Time</th>
                        <th scope="col">Programme</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">8:45am – 9:30am</th>
                            <td>Registration and Networking Breakfast</td>
                        </tr>
                        <tr>
                            <th scope="row">9.30am – 9:40am</th>
                            <td>Opening Remarks by Prof Tan Kian lee</td>
                        </tr>
                        <tr>
                            <th scope="row">9:40am – 9:50am</th>
                            <td>Opening Remarks by Prof Leong Tzu Yun</td>
                        </tr>
                        <tr>
                            <th scope="row">9:50am – 10.40am</th>
                            <td>(Keynote speaker)</td>
                        </tr>
                        <tr>
                            <th scope="row">10.40am – 11:20am</th>
                            <td>(speaker)</td>
                        </tr>
                        <tr>
                            <th scope="row">11:20am – 12:00pm</th>
                            <td>(speaker)</td>
                        </tr>
                        <tr>
                            <th scope="row">12:00pm – 1:30pm</th>
                            <td>Lunch and Demo</td>
                        </tr>
                        <tr>
                            <th scope="row">1:30pm – 2:30pm</th>
                            <td>(speaker)</td>
                        </tr>
                        <tr>
                            <th scope="row">2:30pm – 3:30pm</th>
                            <td>(speaker)</td>
                        </tr>
                        <tr>
                            <th scope="row">3:30pm – 4:00pm</th>
                            <td>Tea break and Networking</td>
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
