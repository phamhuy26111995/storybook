
import styled from "styled-components";

export interface ButtonProps {
  customBackground?: string;
  children: string | React.ReactNode ;
  onClick?: () => void;
  borderRadius?: string;
  boxShadow?: string;
  padding?: string;
  textColor? : string;
  fontWeight?: string;
  border?: string;
  height?: string;
}


const StyledButton = styled.button<ButtonProps>`
    background: ${props => props.customBackground};
    border-radius: ${props => props.borderRadius};
    cursor: pointer;
    box-shadow: ${props => props.boxShadow};
    padding: ${props => props.padding};
    color: ${props => props.textColor};
    font-weight: ${props => props.fontWeight};
    border: ${props => props.border};
    height: ${props => props.height};
`
function Button({
  customBackground,
  children,
  borderRadius,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      {...props}
      customBackground={customBackground}
      borderRadius={borderRadius}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
