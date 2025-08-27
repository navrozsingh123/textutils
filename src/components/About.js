// import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle]=useState(
    //     {
    //     color:'black',
    //     backgroundColor:'white',
    //     }
    // )
    // const [btntext, setBtnText] = useState("Enable Dark Mode");
    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white',
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white',
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }

    // }

    let myStyle = {
        color: props.mode === 'dark'?'white': '#383737',
        backgroundColor : props.mode === 'dark'? '#383737': 'white',
        // border: '2px solid',
        // borderColor: props.mode === 'dark'? 'white': '#383737',
    }
    return (
        <div>
            <div className="container" style={{color: props.mode === 'dark'?'white': '#383737'}}>
                <h1 className='my-3'>About Us</h1>
                <div className="accordion" id="accordionExample" style={myStyle} >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                <strong>Analyse your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Analyze your text quickly and efficiently. You can check word count, character count, and estimate reading time to make your content more effective.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                TextUtils is completely free to use. There are no hidden charges or premium features—just open it in your browser and start analyzing text right away.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Works on all modern browsers. Whether you are using Chrome, Firefox, Edge, or Safari, TextUtils will run smoothly without requiring any additional setup.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button onClick={toggleStyle} type="button" class="btn btn-primary my-3">{btntext}</button> */}
            </div>
        </div>
    )
}
