
import SignInForm from './SignInForm';
import { useOutletContext } from 'react-router-dom';
function SignIn() {
    const theme = useOutletContext();
    return(
        <>
            <SignInForm theme={theme}/>
        </>
    )
    
}

export default SignIn;