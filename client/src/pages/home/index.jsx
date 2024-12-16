import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
//import classes from "./styles.module.css";
//import { FaTrash, FaEdit } from "react-icons/fa";
//import { useNavigate } from "react-router-dom";

export default function Home() {

    const { blogList, setBlogList, pending, setPending } = useContext(GlobalContext);
    //const navigate = useNavigate();

    async function fetchListOfBlogs() {

        setPending(true);
        const response = await axios.get("http://localhost:5000/api/blogs");
        const result = await response.data;

        if (result && result.blogList && result.blogList.length) {
            setBlogList(result.blogList);
            setPending(false);
        } else {
            setPending(false);
            setBlogList([]);
        }

    }

    useEffect(() => {
        fetchListOfBlogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <div>
            <h1>Blog List</h1>
            {
                pending ? <h1>Loading Blogs ! Please wait</h1> :
                    <div>
                        {
                            blogList.map(blogItem => <div key={blogItem._id}>
                                <p>{blogItem.title}</p>
                                <p>{blogItem.description}</p>
                            </div>)
                        }
                    </div>
            }
        </div>
    );
}