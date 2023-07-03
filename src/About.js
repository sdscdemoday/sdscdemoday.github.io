const About = () => {
    return (
        <div className="container-fluid main-content">
            <article className="about mt-4">
                <h1>About Singapore Data Science Consortium Industry Demo Day 2023 – Data Science in Practice</h1>
                {/*<img className="img-thumbnail float-end col-3" src="./images/IDSAI.png" alt="about film singapore" />*/}
                <p className="lead">
                    SDSC's bi-annual Industry Demo Day is an exciting event that brings together data enthusiasts, professionals, and aspiring data scientists to showcase the impact of data-driven projects and innovations. It serves as a platform to demonstrate the power of data science in solving real-world problems, driving decision-making, and unlocking new opportunities.
                </p>
                <p>
                    The event provides an opportunity for participants to present their projects and innovations, exchange ideas, and foster collaboration within the data science community. Through these project presentations and innovation showcases, workshops and networking, the event highlights the transformative power of data insights, fostering innovation, and advancing the field of data science.
                </p>
                <div className="my-2 text-center seperator">
                    &bull; &bull; &bull;
                </div>
                <div className="text-center">
                    <img className="img-fluid rounded" src={"/images/idsai9.jpg"} alt="" />
                </div>
                <div className="my-2 text-center seperator">
                    &bull; &bull; &bull;
                </div>
                {/*<h2>IDAD Co-Chairs</h2>
                <img className="img-thumbnail float-end ms-4 col-3" src="./images/man.jpg" alt="about film singapore" />
                <p>
                    <cite>Prof. Tan Kian Lee</cite> (Data Science, tankl@comp.nus.edu.sg)
                </p>
                <p>
                    <cite>Prof. Dong Jin Song</cite> (AI, dongjs@comp.nus.edu.sg)
                </p>
                <div className="my-2 text-center seperator">
                    &bull; &bull; &bull;
                </div>*/}
                <h2>Demo Day Organising Team</h2>
                <p>Prof. Tan Kian Lee, Caroline Toh, Tay Huimin, Joshua Koh</p>
                <p></p>
            </article>
        </div>
    );
};

export default About;
