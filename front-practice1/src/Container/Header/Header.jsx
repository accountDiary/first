import React from "react";
import "../../Css/Header.css"
import Button from "../Button/Button";

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
            </div>
        </>
    )
}
export default Header;