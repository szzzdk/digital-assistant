import './App.css';
import ProfileCard from "./Components/ProfileCard";
import AlexaImage from './img/alexa.png';
import CortanaImage from './img/cortana.png';
import SiriImage from './img/siri.png';

function App() {
    return (
        <div className="App">
            <h1>Personal Digital Assistant</h1>
            <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
            />
            <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
            />
            <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
            />
        </div>
    );
}

export default App;
