import { useDispatch, useSelector } from "react-redux";
import { getToken, getUser } from "../../redux/Selectors";
import { setUser, updateUserName } from "../../redux/slices/UserSlice";

import { Account } from "../../components/Account";
import { Button } from "../../components/Button";
import { MessageModal } from "../../components/MessageModal";

import { useEffect, useState } from "react";

import "./index.css";
import { useNavigate } from "react-router";
import { QuestionModal } from "../../components/QuestionModal";
import { Input } from "../../components/Input";

export function User() {

    const user = useSelector(getUser);
    const token = useSelector(getToken);

    const dispatch = useDispatch();
    const redirect = useNavigate();

    const [getModalTitle, setModalTitle] = useState("");
    const [getModalText, setModalText] = useState("");

    const [isEditUserProfileShow, setEditProfileShow] = useState(false);

    const [isMessageModalOpen, setMessageModalOpen] = useState(false);
    const [isQuestionModalOpen, setQuestionModalOpen] = useState(false);

    const [getNewUserName, setNewUserName] = useState("");

    const getUserInformations = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "POST",
                headers: new Headers({ "Authorization": `Bearer ${token}` })
            })

            if (response.ok) {

                const data = await response.json();
                const user = { data };
                dispatch(setUser(user.data.body));
                setNewUserName(user.newUserName);
            } else {
                setModalTitle("User profile");
                setModalText("An error occurred while loading your profile data. We are sorry for the inconvenience incurred.");
                setMessageModalOpen(true);
            }
        } catch (error) {
            setModalTitle("User profile");
            setModalText("An error occurred while loading your profile data. We are sorry for the inconvenience incurred.");
            setMessageModalOpen(true);
        }
    }


    useEffect(() => {

        if (token === undefined) {
            redirect("/");
        }

        if (!user.userName && token) {
            getUserInformations();
        }
    })


    useEffect(() => {
        setNewUserName(user.userName);
    }, [user])


    const onSaveButtonClicked = async (e) => {
        e.preventDefault();

        setEditProfileShow(false);
        try {

            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: new Headers({
                    "Authorization": `Bearer ${token}`,
                    "Content-type": "application/json"
                }),
                body: JSON.stringify({ userName: getNewUserName })
            });

            if (response.ok) {
                dispatch(updateUserName(getNewUserName));
                setModalTitle("Edit user profile");
                setModalText("Your profile has been successfully updated!");
                setMessageModalOpen(true);
            } else {
                setModalTitle("Edit user profile");
                setModalText("An error occurred while updating your profile. Try Again. We are sorry for the inconvenience incurred.");
                setMessageModalOpen(true);
            }
        } catch (error) {
            setModalTitle("Edit user profile");
            setModalText("An error occurred while updating your profile. Try Again. We are sorry for the inconvenience incurred.");
            setMessageModalOpen(true);
        }
    }

    const onEditUserProfileCancel = () => {
        setQuestionModalOpen(true);
    }

    const onQuestionModalConfirm = () => {
        setNewUserName(user.userName);
        setEditProfileShow(false);
        setQuestionModalOpen(false);
    }

    const onQuestionModalReject = () => {
        setQuestionModalOpen(false);
        setEditProfileShow(true);
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{user.firstName + " " + user.lastName}!</h1>
                
                {!isEditUserProfileShow &&
                    <Button className={isEditUserProfileShow ? "button-hide" : "button-edit"} onClick={() => setEditProfileShow(true)}>Edit Name</Button>
                }

                {isEditUserProfileShow &&
                    <div className={isEditUserProfileShow ? "edit-user-profile-show" : "edit-user-profile-hide"}>
                        <form onSubmit={(e) => onSaveButtonClicked(e)}>
                            <p className="message"></p>
                            <Input
                                id='userName'
                                inputName="Username"
                                value={getNewUserName}
                                onChange={(event) => { setNewUserName(event.currentTarget.value); }}
                                required={true} />
                            <Input
                                id='firstName'
                                inputName="Firstname"
                                disabled={true}
                                value={user.firstName} />
                            <Input
                                id='lastName'
                                inputName="Lastname"
                                disabled={true}
                                value={user.lastName} />
                            <Input
                                id='email'
                                inputName="E-mail"
                                disabled={true}
                                value={user.email} />
                            <div className="edit-user-profile-buttons">
                                <Button type="submit">Save</Button>
                                <Button type="button" onClick={() => onEditUserProfileCancel()}>Cancel</Button>
                            </div>
                        </form>
                    </div>
                }
            </div>
            <h2 className="sr-only">Accounts</h2>

            <Account title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                description="Available Balance" />
            <Account title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                description="Available Balance" />
            <Account title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                description="Current Balance" />

            <MessageModal
                isOpen={isMessageModalOpen}
                title={getModalTitle}
                message={getModalText}
                onClose={() => setMessageModalOpen(false)}
                onButtonClick={() => setMessageModalOpen(false)} />
            <QuestionModal
                isOpen={isQuestionModalOpen}
                title="Edit user profile"
                message="Are you sure to abandon modifying your profile?"
                onClose={() => setQuestionModalOpen(false)}
                onConfirmButtonClick={() => onQuestionModalConfirm()}
                onRejectButtonClick={() => onQuestionModalReject()} />
        </main>
    )
};