import { ComponentProps, PropsWithChildren } from "react";
import { Text } from "../Text";
import "./SideNote.scss";

interface SideNoteProps extends ComponentProps<"div"> {
  title?: string;
  titleSize?: ComponentProps<typeof Text>["size"];
  sideNoteFooter?: JSX.Element;
}

/**
 * This component is a design feature that displays extra information next to the main text, providing additional details or comments.
 * @param {SideNoteProps.title} title - Title content to be displayed.
 * @param {SideNoteProps.titleSize} titleSize - Defining title Font-size.
 * @param {SideNoteProps.sideNoteFooter} sideNoteFooter - Action buttons or links like learn more...
 * @returns {React.JSX.Element} - returns the SideNote component
 */
export const SideNote = ({
  children,
  title,
  titleSize = "sm",
  sideNoteFooter,
  ...props
}: PropsWithChildren<SideNoteProps>): React.JSX.Element => (
  <div className="deriv-side-note" {...props}>
    {title && (
      <Text size={titleSize} align="center" weight="bold">
        {title}
      </Text>
    )}
    <div>{children}</div>
    {sideNoteFooter}
  </div>
);
