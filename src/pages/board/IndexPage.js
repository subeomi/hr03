import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";


const IndexPage = () => {
    return (
        <BasicLayout>
            <div className="h-full p-4 flex justify-center">
                <div className="w-[50vw] ">
                    <Outlet></Outlet>
                </div>
            </div>
        </BasicLayout>
    );
}

export default IndexPage;