import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../components/Button";
import { MessageModal } from "../../components/MessageModal";
import { Input } from "../../components/Input";

import { setToken } from "../../redux/slices/TokenSlice";
import { getToken } from "../../redux/Selectors";

import "./index.css";

export function Signin() {

    const [isModalOpen, setModalOpen] = useState(false);
    const [getModalText, setModalText] = useState("");

    const dispatch = useDispatch();
    const redirect = useNavigate();

    const token = useSelector(getToken);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const form = event.currentTarget;

            const email = form.username.value;
            const password = form.password.value;

            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {

                const dataToJson = await response.json();
                const token = dataToJson.body.token;

                dispatch(setToken(token));

                setModalText("You have successfully logged in!");
                setModalOpen(true);

            } else {
                setModalText("Your login credentials were not recognized. Please check your credentials and try again.");
                setModalOpen(true);
            }
        } catch (error) {
            setModalText("An error occurred during connection. Please try again in a few moments. We are sorry for the inconvenience incurred.");
            setModalOpen(true);
        }
    };

    const onModalClosed = () => {


        setModalOpen(false);
        if (token) {
            redirect("/user");
        }
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <Input id="username" inputName="Username" />
                    <Input id="password" inputName="Password" type="password" />
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>

                    <Button className="button-sign-in" type="submit">Sign In</Button>
                </form>
                <MessageModal
                    isOpen={isModalOpen}
                    onClose={onModalClosed}
                    title="SignIn"
                    message={getModalText}
                    onButtonClick={onModalClosed} />
            </section>
        </main>
    );
}