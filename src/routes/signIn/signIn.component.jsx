import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import Signup from '../../components/signup/signup.component';

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    
    return (
        <div>
            <h1>SignIn page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google popup
            </button>
            <Signup />
        </div>
    )
}

export default SignIn;