/**
 *
 * @file pages/components/dialog.js
 */
import ReactDOM from "react-dom";
import {useState, useEffect} from "react";

const Dialog = (props) => {
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
    }, [])

    if (isBrowser) {
        return ReactDOM.createPortal(
            <div>Bad ass dialog</div>,
            document.getElementById("dialog-mount")
        )
    } else {
        return null
    }
};

export default Dialog;
