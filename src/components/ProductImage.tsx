import React, { useState } from "react";

const ProductImage: React.FC = () => {
  const [preview, setPreview] = useState<boolean>(false);

  return (
    <>
      <div>
        <img
          src="https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg"
          alt="thumbnail"
          onMouseEnter={() => setPreview(true)}
          onMouseLeave={() => setPreview(false)}
        />

        {preview && (
          <img
            src="https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg"
            alt="preview"
          />
        )}
      </div>
    </>
  );
};

export default ProductImage;
