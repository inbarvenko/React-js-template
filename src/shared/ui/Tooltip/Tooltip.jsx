import { Tooltip } from "antd";
import { BiQuestionMark } from "react-icons/bi";


const TooltipLocal= ({
  placement,
  trigger,
  overlayStyle,
  children,
  ...props
}) => {
  return (
    <Tooltip
      placement={placement || "right"}
      trigger={trigger || "hover"}
      overlayStyle={overlayStyle || { minWidth: "300px" }}
      {...props}
    >
      <div>{children || <BiQuestionMark />}</div>
    </Tooltip>
  );
};

export { TooltipLocal as Tooltip };
