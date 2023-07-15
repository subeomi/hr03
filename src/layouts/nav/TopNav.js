import { Link } from "react-router-dom";


const TopNav = () => {
    return (
        <div className="p-4 mx-4">
            <div className="flex mx-auto">
                <div className="px-4 text-3xl border-r-2 hover:text-indigo-400 cursor-pointer">
                    <Link to="/">MAIN</Link>
                </div>
                <div className="px-4 text-3xl border-r-2 hover:text-indigo-400 cursor-pointer">
                    PRODUCT
                </div>
                <div className="px-4 text-3xl hover:text-indigo-400 cursor-pointer">
                    <Link to="/board/list">BOARD</Link>
                </div>
            </div>
        </div>
    );
}

export default TopNav;