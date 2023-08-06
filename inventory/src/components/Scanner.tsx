import { useState } from "react";
import { useZxing } from "react-zxing";

function Scanner() {
    const [result, setResult] = useState("");
    const [active, setActive] = useState(false);
    const { ref } = useZxing({
      onResult(result) {
        setResult(result.getText());
      },
      paused: !active
    });
  
    return (
      <>
        <video ref={ref} />
        <p>
            <input type="checkbox" onChange={(v) => setActive(v.target.checked)} />
          <span>Last result:</span>
          <span>{result}</span>
        </p>
      </>
    );
}

export default Scanner;