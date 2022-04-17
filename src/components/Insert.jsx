import React from "react"

const Insert = (props) =>{
    return ( 
        <div className="col-lg-12 d-flex text-center ml-auto mr-auto">
            <h2>Change Doc</h2>
            <form 
            onSubmit={(event)=>{
                event.preventDefault()
                props.addDocument(event)
                }} 
            >
              <input type='file' 
                onChange={(event) => {
                    event.preventDefault();
                    this.captureFile(event)
                    }
                } 
                />
              <input type='submit' />
            </form>
        </div>)
}

export default Insert

