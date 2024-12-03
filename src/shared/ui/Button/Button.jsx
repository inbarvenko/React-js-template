import { Button } from "antd";

import { ThemeEnum } from "../../constants/theme.js";
import ButtonWrapper from "./ButtonWrapper";

const ButtonLocal = ({
  title,
  wrapperStyle,
  ...props
}) => (
  <ButtonWrapper themеlocal={ThemeEnum.light} className={wrapperStyle}>
    <Button {...props}>{title}</Button>
  </ButtonWrapper>
);

export { ButtonLocal as Button };
