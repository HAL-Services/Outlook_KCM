import "./Cards.styles.css";
import { CgBorderStyleSolid } from "react-icons/cg";

export default function Cards() {
    return (
        <div className="wrapper">
            <div className="card">
                <div className="card-body">
                    <h1>BASIC PLAN</h1>
                    <CgBorderStyleSolid className="line" />
                    <h2>$9.9</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Deleniti, quaerat.
                    </p>
                </div>
                <button className="btn_icon">MORE</button>
            </div>
            <div className="card">
                <div className="card-body">
                    <h1>BASIC PLAN</h1>
                    <CgBorderStyleSolid className="line" />
                    <h2>$9.9</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Deleniti, quaerat.
                    </p>
                </div>
                <button className="btn_icon">MORE</button>
            </div>
            <div className="card">
                <div className="card-body">
                    <h1>BASIC PLAN</h1>
                    <CgBorderStyleSolid className="line" />
                    <h2>$9.9</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Deleniti, quaerat.
                    </p>
                </div>
                <button className="btn_icon">MORE</button>
            </div>
        </div>
    );
}
