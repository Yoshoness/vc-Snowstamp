/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Message } from "@vencord/discord-types";
import { useEffect, useState } from "@webpack/common";

import { cl, SnowstampIcon } from "./icon";
import { SnowstampValue } from "./utils";
import { settings } from "./settings";

export const SnowstampSetters = new Map<string, (v: SnowstampValue) => void>();

export function handleSnowstamp(messageId: string, data: SnowstampValue) {
    SnowstampSetters.get(messageId)!(data);
}

function Dismiss({ onDismiss }: { onDismiss: () => void; }) {
    return (
        <button onClick={onDismiss} className={cl("dismiss")}>
            Dismiss
        </button>
    );
}

export function SnowstampAccessory({ message }: { message: Message; }) {
    const [snowstamp, setSnowstamp] = useState<SnowstampValue>();

    useEffect(() => {
        // Ignore MessageLinkEmbeds messages
        if ((message as any).vencordEmbeddedBy) return;

        SnowstampSetters.set(message.id, setSnowstamp);

        return () => void SnowstampSetters.delete(message.id);
    }, []);

    if (!snowstamp) return null;
    const timestamp = snowstamp.text;

    return (
        <span className={cl("accessory")}>
            <SnowstampIcon width={16} height={16} className={cl("accessory-icon")} /> Sent at {timestamp.getHours() < 10 ? 0 : ""}
            {timestamp.getHours()}:{timestamp.getMinutes() < 10 ? 0 : ""}
            {timestamp.getMinutes()}:
            {timestamp.getSeconds() < 10 ? 0 : ""}
            {timestamp.getSeconds()} ({timestamp.getMilliseconds()}ms)
            {settings.store.showUnixTimestamp ? " (Unix: " + (timestamp.getTime()) + ")" : ""} -{" "}
            <Dismiss onDismiss={() => setSnowstamp(undefined)} />
        </span>
    );
}
