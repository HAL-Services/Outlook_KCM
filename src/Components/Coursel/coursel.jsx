import { useState, useEffect, useRef } from "react";
import "./coursel.styles.css";

const kcm_images = [
    {
        id: "1",
        item: "https://lh3.googleusercontent.com/W97Ne88PU4DLzPrHoxgKNjFZYollIZgLtvCh4Tk55TllK9iqPZjsCZqWUcQB7Wb9E-AfSl1_kHwVtRX36Q=w960-h960-n-o-v1",
        clr: "#FEB124",
    },
    {
        id: "2",
        item: "https://lh3.googleusercontent.com/B1xRuHQMZUXhQYiqbGEjLOpzA3Yl3dk7ff1ckXjZlSPyMslb2DQT2hnfrJi4-w2Asqs9PnK7bykwXG8ZNQ=w960-h960-n-o-v1",
        clr: "#007CFE",
    },
    {
        id: "3",
        item: "https://lh3.googleusercontent.com/ze8ZGcwIL9z5kOrXLOo0Bn0-0mTQqV1oIe-eAyRbOxVST26YBw3bL9jFW-aTntCkXgYMjIzY6gvkbE_A2A=w960-h960-n-o-v1",
        clr: "#02BD97",
    },
];
export default function Coursel() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === kcm_images.length - 1 ? 0 : prevIndex + 1
                ),
            5000
        );
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {kcm_images.map((kcm_image) => {
                    return (
                        <div className="slide" key={kcm_image.id}>
                            <img
                                className="img_icon"
                                src={kcm_image.item}
                                alt="kcm_images"
                            />
                        </div>
                    );
                })}
            </div>
            <div className="slideshowDots">
                {kcm_images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${
                            index === idx ? " active" : ""
                        }`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
