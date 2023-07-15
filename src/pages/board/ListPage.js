import ListComponent from "../../components/board/ListComponent";
import ListSearchComponent from "../../components/board/ListSearchComponent";
import useQueryObj from "../../hooks/useQueryObj";


const ListPage = () => {

    const { queryObj, setSearch, moveRead } = useQueryObj()

    const movePage = (num) => {

        console.log("NUM ------------" + num)
        queryObj.page = num
        setSearch({ ...queryObj })
    }

    const moveSearch = (type, keyword) => {
        queryObj.page = 1
        queryObj.type = type
        queryObj.keyword = keyword

        setSearch({ ...queryObj })
    }

    return (

        <div>
            <div className="text-2xl text-center my-8">SUBEOMI BOARD</div>


            <ListComponent
                queryObj={queryObj}
                movePage={movePage}
                moveRead={moveRead}
            ></ListComponent>
            <ListSearchComponent moveSearch={moveSearch} queryObj={queryObj}></ListSearchComponent>
            <div className="h-[27vh]"></div>
        </div>

    );
}

export default ListPage;