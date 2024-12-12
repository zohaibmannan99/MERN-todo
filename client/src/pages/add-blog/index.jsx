import {useContext} from "react"
import classes from './styles.module.css'
import { GlobalContext } from "../../context";

export default function AddBlog() {

    const {formData, setFormData} = useContext(GlobalContext)

    console.log(formData);
    
    return (
        <div className={classes.wrapper}>
            <h1>Add a Blog</h1>
            <div className={classes.formwrapper}>
                <input
                    name='title'
                    placeholder='Enter Blog Title'
                    id='title'
                    type='text'
                    value={formData.title}
                    onChange={(e)=> setFormData({
                        ...formData,
                        title: e.target.value
                    })}
                />
                <textarea
                    name='description'
                    placeholder='Enter Blog Description'
                    id='description'
                    value={formData.description}
                    onChange={(event)=>
                        setFormData({
                            ...formData,
                            description: event.target.value,
                        })
                    }
                />
                <button>Add New Blog</button>
            </div>
        </div>
    );
}