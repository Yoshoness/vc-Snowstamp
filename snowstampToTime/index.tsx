/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import definePlugin from "@utils/types";
import { Message } from "@vencord/discord-types";
import { ChannelStore, Menu } from "@webpack/common";

import { settings } from "./settings";
import { SnowstampIcon } from "./icon";
import { handleSnowstamp, SnowstampAccessory } from "./snowstampAccessory";
import { snowstamp } from "./utils";

const messageCtxPatch: NavContextMenuPatchCallback = (children, { message }: { message: Message; }) => {
    const group = findGroupChildrenByChildId("apps", children);
    if (!group) return;

    group.splice(group.findIndex(c => c?.props?.id === "apps") - 1, 0, (
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
    description: "Converts Discord Snowflakes to formatted UNIX timestamps for accurate times.",
    authors: [{ name: "Yoshoness", id: 206081832289042432n }],
    settings,
    contextMenus: {
        "message": messageCtxPatch
    },

    renderMessageAccessory: props => <SnowstampAccessory message={props.message} />,

    messagePopoverButton: {
        icon: SnowstampIcon,
        render(message: Message) {
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
        }
    },
});
