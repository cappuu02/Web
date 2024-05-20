import nikon1 from '../Images/Nikon1.jpg';

function Box(){
    return(
        <div className="col m-5">
            <div ClassName="card" style={{width: "18rem", TextAlign: "center"}}>
            <img src={nikon1} ClassName="card-img-top" alt="..."/>
                <div ClassName="card-body">
                    <h5 ClassName="card-title">Nikon Professional</h5>
                    <p ClassName="card-text">1900.00$</p>
                    <button ClassName="btn btn-outline-danger">Delete</button>
                </div>
            </div>            
        </div>
    )
}


export default Box; 
