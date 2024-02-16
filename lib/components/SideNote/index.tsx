import {
  ComponentProps,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
} from "react";
import clsx from "clsx";
import { ChevronRightIcon } from "./ChevronRightIcon";
import { Text } from "../Text";
import "./SideNote.scss";

type SideNoteProps = Omit<ComponentProps<"div">, "className"> & {
  title?: ReactNode;
  titleSize?: ComponentProps<typeof Text>["size"];
  className?: HTMLDivElement["className"];
  actionClick?: MouseEventHandler<HTMLButtonElement>;
  actionClassName?: HTMLDivElement["className"];
  actionLabel?: ReactNode;
};

/**
 * This component is a design feature that displays extra information next to the main text, providing additional details or comments.
 * @param {SideNoteProps.title} title - Display the title content.
 * @param {SideNoteProps.titleSize} titleSize - Set the font-size for the title. (default: "sm")
 * @param {SideNoteProps.className} className - Add an extra className to the container.
 * @param {SideNoteProps.actionClick} actionClick - An onclick handler for the action button.
 * @param {SideNoteProps.actionClassName} actionClassName - Add an extra className to the action button.
 * @param {SideNoteProps.actionLabel} actionLabel - Display the label of the action. (default: "Learn more")
 * @returns {React.JSX.Element} - Returns the SideNote component.
 */
export const SideNote = ({
  children,
  title,
  titleSize = "sm",
  className,
  actionClick,
  actionClassName,
  actionLabel = "Learn more",
  ...props
}: PropsWithChildren<SideNoteProps>) => (
  <div className={clsx("deriv-side-note", className)} {...props}>
    {title && (
      <Text size={titleSize} align="left" weight="bold">
        {title}
      </Text>
    )}

    <div>{children}</div>

    {actionClick && (
      <button
        className={clsx("deriv-side-note__action", actionClassName)}
        onClick={actionClick}
      >
        <Text color="red" size="xs">
          {actionLabel}
        </Text>
        <ChevronRightIcon />
      </button>
    )}
  </div>
);
