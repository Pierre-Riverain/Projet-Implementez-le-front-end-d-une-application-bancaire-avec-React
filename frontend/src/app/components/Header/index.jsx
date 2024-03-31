import { Link, useNavigate } from "react-router-dom";

import "./index.css";
import argentBankLogo from "../../assets/img/argentBankLogo.png";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { QuestionModal } from "../QuestionModal";

import { getToken, getUser } from "../../redux/Selectors";

import { removeToken } from "../../redux/slices/TokenSlice";
import { removeUser } from "../../redux/slices/UserSlice";

export function Header() {

    const dispatch = useDispatch();
    const redirect = useNavigate();
    
    const user = useSelector(getUser);
    const token = useSelector(getToken);
    
    const [isModalOpen, setModalOpen] = useState(false);
    
    const onModalConfirm = () => {
        
        setModalOpen(false);
        dispatch(removeToken());
        dispatch(removeUser());
        redirect("/");
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div className="main-nav-link-container">
                {
                    token && (
                        <>
                            <Link className="main-nav-item .link" to="/user">
                                <i className="fa fa-user-circle"></i>
                                {user.userName}
                            </Link>
                            <Link className="main-nav-item .link" to="" onClick={() => setModalOpen(true)}>
                                <i className="fa fa-sign-out"></i>
                                Sign Out
                            </Link>
                            <QuestionModal
                                isOpen={isModalOpen}
                                title="Sign out"
                                message="Are you sure to sign out ?"
                                onClose={() => setModalOpen(false)}
                                onConfirmButtonClick={() => onModalConfirm()}
                                onRejectButtonClick={() => setModalOpen(false)} />
                        </>
                    )
                }
                {
                    !token && (
                        <Link className="main-nav-item" to="/sign-in">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    )
                }
            </div>

        </nav>
    );
}