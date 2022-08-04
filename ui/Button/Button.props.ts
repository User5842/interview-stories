/**
 * Represents a single instance of a `Button`.
 */
export interface ButtonProps {
  /**
   * Children element(s).
   */
  readonly children: string;
  /**
   * Handles the `click` event.
   */
  readonly onClick?: () => void;

  /**
   * The default behavior of the button.
   */
  readonly type?: "button" | "reset" | "submit";
}
