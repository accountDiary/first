import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button.jsx";

function Search() {
    return (
        <>
            <form className="container">
                <div className="searchBox">
                    <input type="text" className="search" placeholder="닉네임을 입력하세요." />
                    <Button
                        variant="search"
                        size="md"
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                </div>
            </form>
        </>
    )
}
export default Search;