import DesignElementTypes from "../../common/DesignElementTypes";

interface IDesignElement extends HTMLElement{
    type: DesignElementTypes;
    isSelected: boolean;
    attachWrapper(): void;
    detachWrapper(): void;
    deselect(): void;
    deselectEvent(): void;
    selectEvent(): void;
}

export default IDesignElement