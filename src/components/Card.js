import React from 'react'

export default function Card(props) {
    let options=props.options;
    let priceOptions=Object.keys(options);
    return (
    
            <div>
            <div>
                <div className="card mt-3" style={{ "width": "15rem", "maxHeight": "360px" }}>
                    <img src={props.imgSrc} className="card-img-top" style={{height:"200px" , objectFit:"fill"}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodName}</h5>
                        <p className="card-text">Some quick example text to build on.</p>
                        <select className='m-2 h-100 bg-success rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded'>
                            {priceOptions.map((data)=>{
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>
                        <div className='d-inline h-100 fs-5'>PRICE</div>
                    </div>

                </div>
            </div>
            </div>
    )
}
