/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Toasts, showToast } from "@webpack/common";
import { validateSnowflake } from "./convert";

export interface SnowstampValue {
    text: Date;
}

export async function snowstamp(id: string): Promise<SnowstampValue> {
    try {
        return await validateSnowflake(id);
    } catch (e) {
        const userMessage = typeof e === "string"
            ? e
            : "Something went wrong. If this issue persists, please check the console or ask for help in the support server.";

        showToast(userMessage, Toasts.Type.FAILURE);

        throw e instanceof Error
            ? e
            : new Error(userMessage);
    }
}
