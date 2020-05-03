import React, { useState } from "react";

export default function BloomsWheel() {
    const [isSpinning, toggleSpin] = useState(true);
    return (
        <img className={`${isSpinning ? "bloomsWheel" : "bloomsWheelStopped"} cursor`} src="images/tools/blooms.png" alt="blooms_wheel" onClick={() => toggleSpin(isSpinning ? false : true)} />
    )
}