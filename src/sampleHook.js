import React, {useState} from 'react'

export default function SampleHook() {
    const [show, setShow] = useState(false)

    function toggle() {
      setShow(prevShow => !prevShow)
    }

    return (
      <div>
        <button onClick={toggle}>Hide/Show</button>
        <br />
        <br />
       {show && <h1>useState-SAMPLE</h1>}
      </div>
    );
}