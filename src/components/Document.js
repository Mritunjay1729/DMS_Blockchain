import React from "react"

const Document = (props) => {
    return(
    <div className="container-fluid mt-5 document">
          <div className="row">
            <main role="main" className="col-lg-12 text-center">
                <div className="content mr-auto ml-auto">
                  <div class="col"><span>{props.index+1}. </span> </div>
                  <div class="col">
                    <a
                      href={`https://ipfs.infura.io/ipfs/${props.docHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    {props.docHash}
                    </a>
                    </div>
                    <div class="col">
                    <form onSubmit={(event)=>{event.preventDefault(); props.handleClick(event, props.index)}} className="btn">
                      <button type="btn btn-light btn-lg submit">Delete</button>
                    </form>
                    </div>
                </div>
            </main>
          </div>
        </div>
    )
}

export default Document