import React, { useState } from 'react'
import "./CSS/Add.css"

const Add = (props) => {
    const [keyword,setKeyword] = useState("");
    const OnChamgeKeyword=e=>{
        var item = e.target.value.trim();
        setKeyword(item)
    }
    const onFormSubmit=e=>{
        e.preventDefault();
        props.AddItem(keyword)
        setKeyword("")
    }

    return (
        <section>
            <div className="container-add">
                <div className="card-header">
                    Add a new task to list
                </div>
                <div className="error_text">{props.error!==""?props.error:""}</div>
                <div className="card-body-add">
                    <form onSubmit={onFormSubmit}>
                        <input onChange={OnChamgeKeyword} value={keyword} type="text" name='txtItem' placeholder='add a new task' />
                        <button>+</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Add