import type { TemplateName } from "../template/default";
interface Props {
    template: TemplateName;
    param?: any;
    as?: keyof HTMLElementTagNameMap;
}
export declare function Template({ template, param, as: tagName }: Props): import("preact").VNode<{
    className: string;
}> | import("preact").VNode<import("preact").ClassAttributes<HTMLElement> & import("preact").HTMLAttributes<EventTarget> & import("preact").SVGAttributes<SVGElement>> | null;
export {};
