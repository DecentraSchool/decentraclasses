export const slideAnimateVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: (val) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 * val
      }
  
    }),
  }
  export const scaleAnimateVariants = {
    initial: {
      opacity: 0,
      scale:0,
    },
    animate: (val) => ({
      opacity: 1,
      scale:1,
      transition: {
        delay: 0.1*val
      }
  
    }),
  }
export const fadeAnimateVariants = {
    initial: {
      opacity: 0,
    },
    animate: (val) => ({
      opacity: 1,
      transition: {
        delay: 0.25*val
      }
  
    }),
  }