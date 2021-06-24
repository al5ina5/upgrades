import Modal from "flarum/components/Modal";
import { Toggle } from "./Pay";

export default class BadgeModal extends Modal {
    oninit(vnode) {
        super.oninit(vnode);
    }

    className() {
        return "Modal--medium";
    }

    title() {
        return "Upgrade";
    }
    content() {
        return m(Toggle, { isOn: true });
    }
}
