import React from "react";
import styled from "styled-components";

export interface TestButtonProps {
  size?: "small" | "medium" | "large";
  customBackground?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  $borderRadius?: number;
}


const StyledButton = styled.button<TestButtonProps>`
    background-color: ${props => props.customBackground};
    border-radius: ${props => props.$borderRadius}px;

`
function TestButton({
  size = "medium",
  customBackground,
  children,
  $borderRadius,
  ...props
}: TestButtonProps) {
  return (
    <StyledButton
      {...props}
      customBackground={customBackground}
      $borderRadius={$borderRadius}
    >
      {children}
    </StyledButton>
  );
}

export default TestButton;
