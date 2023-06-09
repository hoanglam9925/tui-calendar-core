/**
 * Generic coordinates of mouse position.
 *
 * Can be `clientX` & `clientY` or `pageX`, `pageY`.
 */
export interface Coordinates {
    x: number;
    y: number;
}
export declare type ClientMousePosition = Pick<MouseEvent, 'clientX' | 'clientY'>;
