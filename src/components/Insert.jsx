import React from "react"

const Insert = (props) =>{
    return ( 
        <div className="col-lg-12 text-center ml-auto mr-auto">
            <h2>Add Doc</h2>
            <form 
            onSubmit={(event)=>{
                event.preventDefault()
                props.handleSubmit(event)
                }} 
            >
              <input type='file' 
                className="btn btn-light btn-lg"
                onChange={(event) => {
                    event.preventDefault();
                    props.handleChange(event)
                    }
                } 
                />
              <input type='submit' className="btn btn-light btn-lg"/>
            </form>
        </div>)
}

export default Insert

