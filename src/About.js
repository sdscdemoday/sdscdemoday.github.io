const About = () => {
    return (
        <div className="container-fluid main-content">
            <article className="about mt-4">
                <h1>About AI Industry Forum Day</h1>
                <img className="img-thumbnail float-end col-3" src="./images/IDSAI.png" alt="about film singapore" />
                <p className="lead">
                    This Industry Day <cite>(IDSAI)</cite> aims to bring researchers and developers in Industry and Academics together in the area of Data Science and AI.
                </p>
                <p>
                    Opening speakers include Prof. Tan Kian Lee (SoC Dean and Executive Director of Singapore Data Science Consortium) and Prof. Leong Tze Yun (Director of NUS AI Lab). The industry keynote speaker will be Dr. Steven Hoi (Managing Director of Salesforce Research Asia). IDSAI will feature a number of invited talks, research demos, and a panel (Data Intelligence) from industry and academics. The program aims to start at 9 am and finish at 4pm on 21 Feb 2023.
                </p>
                <div className="my-2 text-center seperator">
                    &bull; &bull; &bull;
                </div>
                <div className="text-center">
                    <img className="img-fluid rounded" src={"/images/demo_day_evb_bnr.jpg"} alt="" />
                </div>
                <div className="my-2 text-center seperator">
                    &bull; &bull; &bull;
                </div>
                <h2>IDAD Co-Chairs</h2>
                {/*<img className="img-thumbnail float-end ms-4 col-3" src="./images/man.jpg" alt="about film singapore" />*/}
                <p>
                    <cite>Prof. Tan Kian Lee</cite> (Data Science, tankl@comp.nus.edu.sg)
                </p>
                <p>
                    <cite>Prof. Dong Jin Song</cite> (AI, dongjs@comp.nus.edu.sg)
                </p>
                <div className="my-2 text-center seperator">
                    &bull; &bull; &bull;
                </div>
                <h2>IDAD Organising Committee</h2>
                <p>Prof. Huang Zhiyong, Caroline Toh, Ronald Chua, Tay Huimin, Agnes Chee, Joshua Koh</p>
                
            </article>
        </div>
    );
};

export default About;
