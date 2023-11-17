import { UserCredential, signInWithPopup } from 'firebase/auth';
import { auth, facebookProvider } from '@utils/firebase'

import { FacebookSignUpUser } from '@type/FacebookSignUpUser';
import { useDispatch } from 'react-redux';

export const handleFacebookLogin = async () => {
    try {
        const result = await signInWithPopup(auth, facebookProvider);
        const user: UserCredential = result;
        const facebookSignUpUser: FacebookSignUpUser = {
            avatar: user.user.photoURL || "",
            email: user.user.email || "",
            name: user.user.displayName || ""
        }
        return facebookSignUpUser
    } catch (error) {
        return null
    }
};