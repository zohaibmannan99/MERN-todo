import classes from './styles.module.css'

export default function AddBlog() {
    return (
        <div className={classes.wrapper}>
            <h1>Add a Blog</h1>
            <div className={classes.formwrapper}>
                <input
                    name='title'
                    placeholder='Enter Blog Title'
                    id='title'
                    type='text'
                />
                <textarea
                    name='description'
                    placeholder='Enter BLog Description'
                    id='description'
                />
            </div>
        </div>
    );
}