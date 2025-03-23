import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  customBackground?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  $borderRadius?: number;
}


const StyledButton = styled.button<ButtonProps>`
    background-color: ${props => props.customBackground};
    border-radius: ${props => props.$borderRadius}px;

`
function Button({
  size = "medium",
  customBackground,
  children,
  $borderRadius,
  ...props
}: ButtonProps) {
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

export default Button;
