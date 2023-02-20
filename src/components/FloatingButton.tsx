import React, { RefObject } from 'react';

interface IFloatingButton {
  //disable eslint becaouse for a svgr is necesary the type any to avoid conflicts with @svgr/webpack plugin or babel-plugin-inline-react-svg plugin.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  color: string;
  style: string;
  handleScroll?: (ref: HTMLDivElement | null) => void | null;
  customRef?: RefObject<HTMLDivElement> | null;
}

const FloatingButton = (props: IFloatingButton) => {
  const handleOnClick = (ref: HTMLDivElement | null) => {
    if (
      ref instanceof HTMLDivElement &&
      props.customRef !== undefined &&
      props.customRef !== null &&
      props.handleScroll !== undefined
    ) {
      props.handleScroll(props.customRef.current);
    }
  };

  return (
    <button
      className={`floating-btn ${props.style} flex flex-row items-center justify-center bg-custom-yellow/60 hover:bg-custom-black`}
    >
      {
        //props.icon -> to be able to instantiate the svg passed as props
        props.icon && (
          <props.icon
            color={props.color}
            onClick={() => {
              //is necesary the check of both types null and undefined
              if (
                props.customRef !== undefined &&
                props.customRef !== null &&
                props.handleScroll !== undefined
              ) {
                handleOnClick(props.customRef && props.customRef.current);
              }
            }}
          />
        )
      }
    </button>
  );
};

export default FloatingButton;
