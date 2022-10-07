//Firebase
import { 
    getAuth, 
    signInWithPopup, 
    signOut, 
    GoogleAuthProvider 
} from "firebase/auth";

/*
Optional configurations:

    You can specify additional OAuth 2.0 scopes like this:
    provider.addScope(
        'https://www.googleapis.com/auth/contacts.readonly'
    );
    here is a link to the offical doc:
    https://developers.google.com/identity/protocols/oauth2/scopes

    You can also switch languages like this:
    import { getAuth } from "firebase/auth";
    const auth = getAuth();
    auth.languageCode = 'it';

    Apply the default browser preference instead of explicitly setting it.
    firebase.auth().useDeviceLanguage();

    Specify additional custom OAuth provider parameters that you want 
    to send with the OAuth request. 
    provider.setCustomParameters({
    'login_hint': 'user@example.com'
    });
*/

const auth = getAuth();

export const Login = ({ loginUser }) => {
    const provider = new GoogleAuthProvider();
    
    const login = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
        .then((result) => {
            /*
                This gives you a Google Access Token. 
                You can use it to access the Google API.
            */ 
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // User object for sessionUser state variable
            const userObj = {
                name: user.displayName, 
                id: user.uid
            };
            return loginUser(userObj);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
        });    
    }

    return (
        <div>
            <button type="button" onClick={login}>
                Log in with Google
            </button>
        </div>
    )
};

export const Logout = ({ logoutUser }) => {
    const logOut = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            console.log("Successfully signed out.");
            return logoutUser();
        }).catch(error => {
            console.log(`Code: ${error.code}, Message: ${error.message}`)
        })
    }
    return (
        <div>
            <button type="button" onClick={logOut}>
                Log out
            </button>
        </div>
    )
}