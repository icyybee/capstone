import {AuthenticationContainer} from "./authentication.styles";

import Signup from '../../components/signup/signup.component';
import SignIn from '../../components/signin/signin.component';

const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignIn />
            <Signup />
        </AuthenticationContainer>
    )
}

export default Authentication;