import React from 'react'

const Upload = () => {
    return (
        <div className='container mt-5'>
            <div className="row text-left">
                <div className="col-sm-6">
                    <div className="card text-white bg-dark mb-3" style={{minHeight:300}}>
                        <div className="card-body">
                            <h5 className="card-title">Upload an Image</h5>
                            <p className="card-text mt-5">
                                <form>
                                    <div class="form-group">
                                        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                </form>
                            </p>
                            <button className="btn btn-light mt-3">Send Image</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card text-white bg-dark mb-3" style={{minHeight:300}}>
                        <div className="card-body">
                            <h5 className="card-title">Result</h5>
                            <p className="card-text mt-5">Image analysis result will appear here..</p>
        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload
