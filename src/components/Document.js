import React from "react"

const Document = (props) => {
    return(
    <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
                <div className="content mr-auto ml-auto">
                    <a
                      href={`https://ipfs.infura.io/ipfs/${props.docHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    {props.docHash}
                    </a>
                </div>
            </main>
          </div>
        </div>
    )
}

export default Document