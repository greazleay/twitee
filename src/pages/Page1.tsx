import { Link } from "react-router-dom";

export const PageOne = () => {

    return (
        <main className="main">
            <p>Page 1</p>
            <Link to="/page-two">
                <button>Next Page</button>
            </Link>
        </main>
    );
};
