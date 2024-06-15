import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
    const username = useLogin();
    return <>
        <div>
            <h1>My Profile</h1>
            <p>Hello, <b>{username}</b></p>
        </div>
    </>
}

export default ProfilePage;