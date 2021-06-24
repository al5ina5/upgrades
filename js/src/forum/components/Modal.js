import '../global.css'
import Modal from "flarum/components/Modal";
import { Toggle } from "./Pay";

export default class CustomModal extends Modal {
    static isDismissible = true;

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
