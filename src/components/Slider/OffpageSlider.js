import { Grid, MobileStepper } from "@mui/material";
import React, { useState, useEffect } from "react";


// Props: "items" for an array of react elements to be displayed
//        "dots = true" for to show dots or not,
//        "dark = true" for to make dots color black and vice versa.
//        "autoScroll" = true to automate scrolling
//        "autoScrollInterval" = [number] interval in ms

// Note:-
// For infinite Scroll use the formula in handleNext in setState: (prevActiveStep) => (prevActiveStep + 1) % maxSteps
// For infinite Scroll use the formula in handleBack in setState: (prevActiveStep) => prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
// For finite Scroll use the formula in handleNext in setState: (prevActiveStep) => prevActiveStep + 1 and use disabled for button with maxSteps-1
// For finite Scroll use the formula in handleBack in setState: (prevActiveStep) => prevActiveStep - 1 and use disabled for button with activeStep === 0

function OffpageSlider({
  customClassName,
  items,
  nextItemIcon,
  prevItemIcon,
  dots = false,
  dark = false,
  autoScroll = false,
  autoScrollInterval = 2500,
  hover = false,
  width,
  height,
  itemWidth, // Add a prop to specify the slide width
}) {
  const [currentView, setCurrentView] = useState(0);

  const maxSteps = items?.length;

  const handleNext = () => {
    setCurrentView((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentView((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    let intervalId = null;

    if (autoScroll) {
      intervalId = setInterval(() => {
        handleNext();
      }, autoScrollInterval);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentView, autoScroll, autoScrollInterval]);
  const translateX = -currentView * itemWidth; // Calculate the translation value

  return (
    <Grid className={`sliderParent ${customClassName}`} container height={height}>
      <Grid item minWidth={"100%"} visibility={"hidden"}>
        {/*hidden element for dynamic height of items */}
        {items[0]}
      </Grid>
      {Array.isArray(items) ? (
        <Grid className="" item style={{ position: "absolute", left: 0 }}>
          <Grid className="sliderContainer" container columnSpacing={2} flexWrap={"nowrap"} style={{ transform: `translateX(${translateX}px)` }}>
            {items.map((item, index) => (
              <Grid key={index} item className={`${index === currentView ? "sliderItem" : ""} ${index === currentView && hover ? "hoverableItem" : ""}`} height={"100%"}>
                {item}
              </Grid>
            ))}
          </Grid>
        </Grid>
      ) : (
        <Grid item minWidth={"100%"}>
          {items}
        </Grid>
      )}
      <Grid item minWidth={"100%"}>
        <Grid className="sliderNavigationBtns" container justifyContent={"space-between"}>
          <Grid item
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
          >
            {prevItemIcon}
          </Grid>
          <Grid item
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            {nextItemIcon}
          </Grid>
        </Grid>
      </Grid>
      {dots ? (
        <Grid className="sliderDots" container justifyContent={"center"}>
          <Grid>
            <MobileStepper steps={maxSteps} position="static" activeStep={currentView} className={dark ? "darkCarouselDots" : "lightCarouselDots"} />
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
}

export default OffpageSlider;
