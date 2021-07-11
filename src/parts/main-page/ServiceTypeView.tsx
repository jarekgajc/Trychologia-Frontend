import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export default function ServiceTypeView() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?width=700&crop=2:1"
                    alt="First slide"
                />
                <Overlap>

                </Overlap>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?width=700&crop=2:1"
                    alt="Second slide"
                />
                <Overlap>

                </Overlap>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?width=700&crop=2:1"
                    alt="Third slide"
                />
                <Overlap>

                </Overlap>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    );
}

const Overlap = styled.div`
    background: white;
    width: 200px;
    height: 100%;
    position: absolute;
    top: 0;
`;