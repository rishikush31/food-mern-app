import React from 'react'

export default function Card() {
    return (
    
            <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=1024x1024&w=is&k=20&c=4E-zDAZ4z9ymEYaDiq8Nrhqx3FEdAi9nuWSUhVmpTQ0=" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on.</p>
                        <select className='m-2 h-100 bg-success rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className='d-inline h-100 fs-5'>PRICE</div>
                    </div>

                </div>
            </div>
            </div>
    )
}
