/**
 * Represents a single instance of an `Chapter`.
 */
export interface ChapterProps {
  /**
   * Handles the Add `click` event.
   */
  readonly onAddClick?: () => void;

  /**
   * Handles the Back `click` event.
   */
  readonly onBackClick?: () => void;

  /**
   * Handles the Done `click` event.
   */
  readonly onDoneClick?: () => void;
}
