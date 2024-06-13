import React from "react";
import "../../Css/Header.css"
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <>
            <div className="Header">
                헤더입니당.
                <Button
                    variant="login"
                    size="sm"
                >
                    Login
                </Button>
                <Button
                    variant="signed"
                    size="md"
                >
                    <FontAwesomeIcon icon={faUser} />
                </Button>
            </div>
        </>
    )
}
export default Header;