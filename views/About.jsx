export function About() {
    return (
        <section className="about">
            <h1>Welcome to our exciting project, AppSus ! </h1>
            <p>
                This innovative application is designed to seamlessly integrate two indispensable tools
                from Google - Gmail and Google Keep. AppSus brings together the power of email
                communication and note-taking into a unified platform, offering a wide array of features
                and functionalities tailored to meet the diverse needs of our users.
            </p>
            <p>
                AppSus is more than just a combination of Gmail and Google Keep; it's a holistic solution
                that encourages productivity, organization, and efficiency in the digital age. Our
                commitment to providing a user-friendly interface and continuous updates means you can
                expect a dynamic and evolving tool that adapts to your evolving needs.
            </p>

            <h2 className="team-header">Our incredible team: </h2>
            <div className="team">
                <div className="member member1">
                    <img className="stav-img" src="./assets/img/stav.jpeg" alt="stav-img" />
                    <p className="stav-description">
                        Stav Cohen <br />
                        Front-End Developer
                    </p>
                </div>
                <div className="member member2">
                    <img className="tal-img" src="./assets/img/tal.jpeg" alt="tal-img" />
                    <p className="tal-description">
                        Tal Cohen <br />
                        Back-End Developer
                    </p>
                </div>
            </div>

            <p className="join-us">
                <span>Join us</span> on this exciting journey with AppSus and unlock the full potential
                of your email and note-taking experience. Whether you're an individual striving for
                better organization or a team looking to boost collaboration, AppSus is here to
                revolutionize the way you work, communicate, and stay organized. Welcome to a new era of
                productivity and convenience with AppSus!
            </p>
        </section>
    )
}
