/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { settings } from "./settings";
import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { addMessageAccessory, removeMessageAccessory } from "@api/MessageAccessories";
import { addMessagePopoverButton, removeMessagePopoverButton } from "@api/MessagePopover";
import definePlugin from "@utils/types";
import { ChannelStore, Menu } from "@webpack/common";

import { SnowstampIcon } from "./icon";
import { handleSnowstamp, SnowstampAccessory } from "./snowstampAccessory";
import { snowstamp, SnowstampValue } from "./utils";

const SnowstampSetter = new Map<string, (v: SnowstampValue) => void>();

const messageCtxPatch: NavContextMenuPatchCallback = (children, { message } ) => {
    const group = findGroupChildrenByChildId("copy-text", children);
    if (!group) return;

    group.splice(group.findIndex(c => c?.props?.id === "copy-text") + 1, 0, (
        <Menu.MenuItem
            id="vc-snowstamp"
            label="Snowstamp"
            icon={SnowstampIcon}
            action={async () => {
                const stamp = await snowstamp(message.id);
                handleSnowstamp(message.id, stamp);
            }}
        />
    ));
};

export default definePlugin({
    name: "SnowstampToTime",
    description: "Converts message to timestamp.",
    authors: [{ name: "Yoshoness", id: 206081832289042432n }],
    settings,
    contextMenus: {
        "message": messageCtxPatch
    },

    start() {
        addMessageAccessory("vc-snowstamper", props => ( <SnowstampAccessory message={props.message} />));

        addMessagePopoverButton("vc-snowstamp", message => {
            return {
                label: "Snowstamp",
                icon: SnowstampIcon,
                message,
                channel: ChannelStore.getChannel(message.channel_id),
                onClick: async () => {
                    const stamp = await snowstamp(message.id);
                    handleSnowstamp(message.id, stamp);
                }
            };
        });
    },
    stop() {
        removeMessageAccessory("vc-snowstamper");
        removeMessagePopoverButton("vc-snowstamp");
    },
});
