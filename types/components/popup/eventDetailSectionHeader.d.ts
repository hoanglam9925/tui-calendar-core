import { h } from 'preact';
import type EventModel from "../../model/eventModel";
interface Props {
    event: EventModel;
    userData: any;
    backpackUrl: any;
    templateCsvUrl: any;
}
export declare function EventDetailSectionHeader({ event, userData, backpackUrl, templateCsvUrl }: Props): h.JSX.Element;
export {};
