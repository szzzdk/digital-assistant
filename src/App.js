import 'bulma/css/bulma.css';
import ProfileCard from "./Components/ProfileCard";
import AlexaImage from './img/alexa.png';
import CortanaImage from './img/cortana.png';
import SiriImage from './img/siri.png';

function App() {
    return (
        <div className="App">
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        Personal Digital Assistant
                    </p>
                </div>
            </section>
            <div className="container">
                <div className="section">
                    <div className="columns is-centered">
                        <div className="column is-2">
                            <ProfileCard
                                title="Alexa"
                                handle="@alexa99"
                                image={AlexaImage}
                                description="Alexa was created by Amazon and helps you buy things."
                            />
                        </div>
                        <div className="column is-2">
                            <ProfileCard
                                title="Cortana"
                                handle="@cortana32"
                                image={CortanaImage}
                                description="Cortana was created by Microsoft. Who knows what it does?"
                            />
                        </div>
                        <div className="column is-2">
                            <ProfileCard
                                title="Siri"
                                handle="@siri01"
                                image={SiriImage}
                                description="Siri was created by Apple. And is being phased out."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
