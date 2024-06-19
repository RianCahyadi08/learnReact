
import Profile from "../components/Fragments/Profile";
import Header from "../components/Fragments/Header";
import { useEffect } from "react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useParams } from "react-router-dom";
import { profileId } from "../services/auth.service";

const ProfilePage = () => {

    const username = useLogin();
    const {id} = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        profileId(id, (data) => {
            setData(data);
        });
    }, [id]);

    return <>
        <Header username={username} id={id} ></Header>
        <Profile data={data}></Profile>
    </>
}

export default ProfilePage;