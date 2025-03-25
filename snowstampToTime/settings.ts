/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
*/

import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    showUnixTimestamp: {
        type: OptionType.BOOLEAN,
        description: "Show UNIX Timestamp alongside formatted timestamp.",
        default: false
    },
});
