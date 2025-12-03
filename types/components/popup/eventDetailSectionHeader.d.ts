import { h } from 'preact';
import type EventModel from "../../model/eventModel";
interface Props {
    event: EventModel;
    userData: any;
    backpackUrl: any;
    templateCsvUrl: any;
    canEdit: boolean;
    canDelete: boolean;
}
export declare function EventDetailSectionHeader({ event, userData, backpackUrl, templateCsvUrl, canEdit, canDelete }: Props): h.JSX.Element;
export {};
