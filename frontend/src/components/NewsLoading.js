import React from "react";
import { ShimmerTitle } from "react-shimmer-effects";
import { ShimmerText } from "react-shimmer-effects";

import "./NewsLoading.css";
function NewsLoading() {
  return (
    <div className="loading-shimmer-effect-container">
      <div className="loading-shimmer-item">
        <ShimmerTitle line={1} gap={10} variant="primary" />
        <ShimmerText line={13} gap={10} />
      </div>
      <div className="loading-shimmer-item">
        <ShimmerTitle line={1} gap={10} variant="primary" />
        <ShimmerText line={13} gap={10} />
      </div>
      <div className="loading-shimmer-item">
        <ShimmerTitle line={1} gap={10} variant="primary" />
        <ShimmerText line={13} gap={10} />
      </div>
      <div className="loading-shimmer-item">
        <ShimmerTitle line={1} gap={10} variant="primary" />
        <ShimmerText line={13} gap={10} />
      </div>
      <div className="loading-shimmer-item">
        <ShimmerTitle line={1} gap={10} variant="primary" />
        <ShimmerText line={13} gap={10} />
      </div>
      <div className="loading-shimmer-item">
        <ShimmerTitle line={1} gap={10} variant="primary" />
        <ShimmerText line={13} gap={10} />
      </div>
    </div>
  );
}

export default NewsLoading;
