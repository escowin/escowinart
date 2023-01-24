import ProfilePic from '../../assets/images/profile.jpg'
import './index.css';

function About(){
    const profile = {
        name: "Edwin m. escobar",
        title: "painter",
        location: "austin, tx",
        linkedIn: "/",
        email: "/"
    }

    return (
        <section className="section" id="about">
            <h2 className="dark section-header">{profile.name}</h2>

            <article>
                <img id="profile-pic" src={ProfilePic} alt="profile pic"/>
            </article>

            <article>
                <h3>Edwin m. escobar</h3>
                <p>Artist</p>
                <ul>
                    <li>linkedin</li>
                    <li>email</li>
                    <li>link</li>
                </ul>
            </article>
        </section>
    )
}

export default About;