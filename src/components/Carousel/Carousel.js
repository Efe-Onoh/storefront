import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import MobileStepper from "@mui/material/MobileStepper";

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

function Carousel({ customClassName, items, nextItemIcon, prevItemIcon, dots = false, dark = false, autoScroll = false, autoScrollInterval = 2500, hover = false, width, height }) {
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
  const translateX = -currentView * 100; // Calculate the translation value

  return (
    <Grid className={` ${customClassName}`} container width={width} height={height} overflow={"hidden"} flexWrap="nowrap">
      {Array.isArray(items) ? (
        items.map((item, index) => (
          <Grid key={index} className="carouselContainer" item style={{ transform: `translateX(${translateX}%)` }} minWidth={"100%"}>
            <Grid className={`${index === currentView ? "carouselItem" : ""} ${index === currentView && hover ? "hoverableItem" : ""}`} item height={"100%"}>
              {item}
            </Grid>
            <Grid className="carouselNavigationBtns" container>
              <Grid
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
              >
                {prevItemIcon}
              </Grid>
              <Grid
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                {nextItemIcon}
              </Grid>
            </Grid>
            {dots ? (
              <Grid className="carouselDotsWrapper" container justifyContent={"center"}>
                <Grid>
                  <MobileStepper steps={maxSteps} position="static" activeStep={currentView} className={dark ? "darkCarouselDots" : "lightCarouselDots"} />
                </Grid>
              </Grid>
            ) : null}
          </Grid>
        ))
      ) : (
        <Grid item minWidth={"100%"}>
          {items}
        </Grid>
      )}
    </Grid>
  );
}

export default Carousel;
