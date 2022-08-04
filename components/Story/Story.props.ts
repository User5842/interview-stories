/**
 * Represents a single instance of a `Story`.
 */
export interface StoryProps {
  /**
   * Represents the company tied to this story.
   */
  readonly company: string;

  /**
   * Whether or not the candidate received an offer.
   */
  readonly offer: boolean;

  /**
   * Represents the position applied for.
   */
  readonly position: string;

  /**
   * Represents the total compensation awarded.
   */
  readonly totalCompensation?: TotalCompensation;
}

/**
 * Represents the total compensation awarded.
 */
interface TotalCompensation {
  /**
   * Represents the total annual cash paid in regular paychecks.
   */
  readonly base: number;

  /**
   * Represents periodic cash determined by individual performance and/or
   *  corporate results.
   */
  readonly bonus: number;

  /**
   * Instruments that convert into stock in the company.
   */
  readonly stock: number;
}
