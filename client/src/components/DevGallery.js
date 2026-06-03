import React, { useState } from "react";

export default function DevGallery({ src = "pildid/pilt.png" }) {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible((v) => !v)} aria-label="dev-toggle">
        {visible ? "Peida arendus" : "Vaata arendust"}
      </button>
      {visible && (
        <div data-testid="gallery">
          <img src={src} alt="Arenduse pilt" />
        </div>
      )}
    </div>
  );
}
