/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { validateSnowflake } from "./convert";

export interface SnowstampValue {
    text: Date;
}

export async function snowstamp(id: string): Promise<SnowstampValue> {
    return validateSnowflake(id);
}
