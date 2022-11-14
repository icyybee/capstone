import "./authentication.styles.scss";

import Signup from '../../components/signup/signup.component';
import SignIn from '../../components/signin/signin.component';

const Authentication = () => {
    return (
        <div className="authentication-container">
            <SignIn />
            <Signup />
        </div>
    )
}

export default Authentication;