import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {

    return (
        <div className="container about-page">
            <div className="text-zone ">
                <h1>
                    <AnimatedLetters 
                        strArray={"About me".split("")}
                        idx={15}
                    />
                </h1>
                <p>Text about me being the greatestText about me being the greatestText about me being the greatest</p>
                <p>Text about me being the greatestText about me being the greatestText about me being the greatest</p>
                <p>Text about me being the greatestText about me being the greatestText about me being the greatest</p>

            </div>
        </div>
    )
}

export default About 