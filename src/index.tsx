/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import {
    findGroupChildrenByChildId,
    NavContextMenuPatchCallback,
} from "@api/ContextMenu";
import { addAccessory, removeAccessory } from "@api/MessageAccessories";
import definePlugin from "@utils/types";
import { Menu } from "@webpack/common";

import { validateSnowflake } from "./convert";
import { SnowstampIcon } from "./icon";
import { handleSnowstamp, SnowstampAccessory } from "./snowstampAccessory";
import { snowstamp, SnowstampValue } from "./utils";

const SnowstampSetter = new Map<string, (v: SnowstampValue) => void>();

const messageCtxPatch: NavContextMenuPatchCallback = (
    children,
    { message }
) => {
    const group = findGroupChildrenByChildId("copy-text", children);
    if (!group) return;

    group.splice(
        group.findIndex(c => c?.props?.id === "copy-text") + 1,
        0,
        <Menu.MenuItem
            id="vc-snowstamp"
            label="Snowstamp"
            icon={SnowstampIcon}
            action={async () => {
                if (validateSnowflake(message.id)) {
                    const stamp = await snowstamp(message.id);
                    handleSnowstamp(message.id, stamp);
                }
            }}
        />
    );
};

export default definePlugin({
    name: "SnowstampToTime",
    description: "Converts message to timestamp.",
    authors: [{ name: "Yoshoness", id: 206081832289042432n }],
    contextMenus: {
        message: messageCtxPatch,
    },

    patches: [],
    start() {
        addAccessory("vc-snowstamp", props => (
            <SnowstampAccessory message={props.message} />
        ));
    },
    stop() {
        removeAccessory("vc-snowstamp");
    },
});
