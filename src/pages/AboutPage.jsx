import Card from "../components/shared/Card"
import { Link } from 'react-router-dom'

const AboutPage = () => {
    return (
        <>
            <Card>
                <div className="about">
                    <h1>About This Project</h1>
                </div>
            </Card>

            <p>
                <Link to="/">Back To Home</Link>
            </p>
        </>
    )
}

export default AboutPage
