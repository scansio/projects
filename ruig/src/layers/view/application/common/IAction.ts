import IDesignElement from "../../design/models/IDesignElement";

interface IAction {
    supportedDesignElements: string[];
    action(designElement: IDesignElement): void;
    enable(): void;
    disable(): void;
    subscribe(): void;
}

export default IAction;