import React, { useState, useEffect, useRef, useCallback } from "react";
import "./StarRating.css";

const StarRating = ({
  count = 5,
  value,
  defaultValue = 0,
  allowHalf = false,
  allowClear = true,
  style = {},
  onChange,
  onHoverChange,
  character = "★",
  disabled = false,
  direction = "ltr",
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState(null);
  const containerRef = useRef(null);

  const currentValue = isControlled ? value : internalValue;

  useEffect(() => {
    if (isControlled) {
      setHoverValue(null);
    }
  }, [value, isControlled]);

  const getStarCharacter = useCallback(
    (index) => {
      if (typeof character === "function") {
        return character(index);
      }
      return character;
    },
    [character]
  );

  const commitValue = (newValue) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange && onChange(newValue);
  };

  const handleMouseMove = (e) => {
    if (disabled || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // X position relative to container
    const starWidth = rect.width / count;
    let hoveredIndex = Math.floor(x / starWidth);
    let hoveredValue = hoveredIndex + 1;

    // Check if half star is needed
    if (allowHalf) {
      const offsetInStar = x - hoveredIndex * starWidth;
      if (offsetInStar < starWidth / 2) {
        hoveredValue = hoveredIndex + 0.5;
      }
    }

    setHoverValue(hoveredValue);
    onHoverChange && onHoverChange(hoveredValue);
  };

  const handleClick = (e) => {
    if (disabled || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const starWidth = rect.width / count;
    let clickedIndex = Math.floor(x / starWidth);
    let newValue = clickedIndex + 1;

    if (allowHalf) {
      const offsetInStar = x - clickedIndex * starWidth;
      if (offsetInStar < starWidth / 2) {
        newValue = clickedIndex + 0.5;
      }
    }

    if (allowClear && newValue === currentValue) {
      newValue = 0;
    }

    commitValue(newValue);
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    setHoverValue(null);
    onHoverChange && onHoverChange(currentValue);
  };

  const displayValue = hoverValue !== null ? hoverValue : currentValue;

  // Determine star states
  const stars = Array.from({ length: count }, (_, i) => {
    const full = i + 1 <= displayValue;
    const half = allowHalf && i + 0.5 === displayValue;

    let starClass = "star";
    if (full && !half) {
      starClass += " star-full";
    } else if (half) {
      starClass += " star-half";
    }

    const char = getStarCharacter(i);

    return (
      <span
        key={i}
        className={starClass}
        style={{ cursor: disabled ? "not-allowed" : "pointer" }}
      >
        {char}
        {allowHalf && <span className="star-second">{char}</span>}
      </span>
    );
  });

  return (
    <div
      className="star-rating-wrapper"
      ref={containerRef}
      style={{ ...style, direction }}
      aria-label="Star Rating"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {stars}
    </div>
  );
};

export default StarRating;
