import './global.css'
import IndexPage from "flarum/common/components/IndexPage";
import LinkButton from "flarum/common/components/LinkButton";
import { extend } from "flarum/common/extend";
import app from "flarum/forum/app";
import Modal from "./components/Modal";
import User from "flarum/models/User";

app.initializers.add("fantomdigital/upgrades", (app) => {
    extend(IndexPage.prototype, "navItems", (items) => {
        const user = app.session.user;

        console.log(user)

        if (!user) return;

        items.add(
            "upgrade",
            LinkButton.component(
                {
                    force: false,
                    onclick: (e) => {
                        e.preventDefault()
                        app.modal.show(Modal)
                    },
                    icon: "fas fa-certificate",
                },
                "Upgrade"
            ),
            0
        );
    });
});
