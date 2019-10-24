import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const CarouselComponent = (props) => {
    return ( 
        <div className="funStuff">
            <Carousel className="carousel" indicators={false} interval={5000}>
                <Carousel.Item>
                    <div className="farm">    
                    <img src='https://ca.slack-edge.com/T4JUEB3ME-UEM5YBTNJ-6971e8bf03da-72' alt="text"/>
                    <h3>Tyler Foreman</h3>
                    <p>Info about person</p>
                    <a href="https://github.com/tjforeman" rel="noopener noreferrer" target="_blank"><button>Github</button></a> 
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="farm">
                    <img src='https://ca.slack-edge.com/T4JUEB3ME-UFCQZEKFB-5c387ada94ad-72' alt="text"/>
                    <h3>York Cook</h3>
                    <p>Info about person</p>
                    <a href="https://github.com/yorkcook" rel="noopener noreferrer" target="_blank"><button>Github</button></a>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="farm">
                    <img src='https://ca.slack-edge.com/T4JUEB3ME-UGWDTGE2D-304822da85af-72' alt="text"/>
                    <h3>Laura Daugherty</h3>
                    <p>Info about person</p>
                    <a href="https://github.com/laura-daugherty" rel="noopener noreferrer" target="_blank"><button>Github</button></a>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="farm">
                    <img src='https://ca.slack-edge.com/T4JUEB3ME-UGFT04U6Q-897737d11303-72' alt="text"/>
                    <h3>Nate Magera</h3>
                    <p>Info about person</p>
                    <a href="https://github.com/nmagera07" rel="noopener noreferrer" target="_blank"><button>Github</button></a>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="farm">
                    <img src='https://ca.slack-edge.com/T4JUEB3ME-UGCGRFT2P-f2ff4fe456b5-72' alt="text"/>
                    <h3>Doc Jones</h3>
                    <p>Info about person</p>
                    <a href="https://github.com/doc-jones" rel="noopener noreferrer" target="_blank"><button>Github</button></a>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="farm">
                    <img src='https://ca.slack-edge.com/T4JUEB3ME-UGGFY1C5A-0e7e5f400150-72' alt="text"/>
                    <h3>Edwin Parker</h3>
                    <p>Info about person</p>
                    <a href="https://github.com/weparkerjr" rel="noopener noreferrer" target="_blank"><button>Github</button></a>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="farm">
                    <img src='https://ca.slack-edge.com/T4JUEB3ME-UHNLF57NG-0e318399719b-72' alt="text"/>
                    <h3>Zach Imbriaco</h3>
                    <p>Info about person</p>
                    <a href="https://github.com/vaeliwen" rel="noopener noreferrer" target="_blank"><button>Github</button></a>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
     );
}
 
export default CarouselComponent;