import { signOut } from "firebase/auth";
import { auth } from "../firebase";

import '../Css/Profile.css';

export const Profile = () => {
  const user = auth.currentUser;

  const email = user.email;
  const namePart = email.split('@')[0];

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Log Out"))
      .catch((error) => console.log(error));
  };
  return (
    <body className="body-logout">
      <section>
        <h2>{namePart}'s Profile</h2>
        <div className='button-center'>
          <button onClick={handleSignOut}>Log Out</button>
        </div>
        
      </section>
    </body>
  );
};

export default Profile;