import "./global.css";
import IndexPage from "flarum/common/components/IndexPage";
import LinkButton from "flarum/common/components/LinkButton";
import { extend } from "flarum/common/extend";
import app from "flarum/forum/app";
import Modal from "./components/Modal";
import User from "flarum/models/User";

app.initializers.add("reflar-level-ranks", (app) => {
    extend(IndexPage.prototype, "navItems", (items) => {
        const user = app.session.user;

        if (!user) return;

        items.add(
            "fof-user-directory",
            LinkButton.component(
                {
                    // href: "/",
                    force: false,
                    onclick: () => app.modal.show(Modal),
                    icon: "far fa-address-book",
                },
                "Upgrade"
            ),
            85
        );
    });
});
