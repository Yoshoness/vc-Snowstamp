/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { classNameFactory } from "@api/Styles";
import { classes } from "@utils/misc";

export const cl = classNameFactory("vc-snowstamp-");

export function SnowstampIcon({
    height = 24,
    width = 24,
    className,
}: {
    height?: number;
    width?: number;
    className?: string;
}) {
    return (
        <svg
            viewBox="0 0 218 226"
            height={height}
            width={width}
            className={classes(cl("icon"), className)}
        >
            <path
                fill="currentColor"
                d="M 87.30664,14.154297 77.107421,31.818359 99.449218,43.398438 v 39.03125 a 32,32 0 0 0 -1.601562,0.648437 32,32 0 0 0 -2.453125,0.996094 32,32 0 0 0 -3.175781,1.697265 32,32 0 0 0 -2.033203,1.304688 32,32 0 0 0 -1.222657,0.785156 L 56.671875,70.783203 V 43.398438 l -22.207032,0.136718 0.408204,27.519532 -21.660156,11.716796 10.080077,18.119136 22.34375,-12.124995 31.720703,17.994145 a 32,32 0 0 0 -0.515624,5.10351 32,32 0 0 0 -0.117188,1.07813 32,32 0 0 0 0.0059,0.0586 32,32 0 0 0 -0.0059,0.0586 32,32 0 0 0 0.117188,1.07813 32,32 0 0 0 0.515624,5.10156 l -31.720703,17.99414 -22.34375,-12.125 -10.080077,18.11914 21.660156,11.7168 -0.408204,27.51953 22.207032,0.13672 V 155.21484 L 88.96289,138.13867 a 32,32 0 0 0 1.22461,0.78711 32,32 0 0 0 2.019531,1.29688 32,32 0 0 0 3.197266,1.70898 32,32 0 0 0 2.4375,0.98828 32,32 0 0 0 1.607421,0.65039 v 39.03125 l -22.341797,11.58008 10.199219,17.66406 33.41602,-19.29297 v -49.83398 a 32,32 0 0 0 20.00195,-29.66016 32,32 0 0 0 -0.004,-0.0879 32,32 0 0 0 0.004,-0.0293 32,32 0 0 0 -0.006,-0.0625 32,32 0 0 0 -0.58203,-5.85547 32,32 0 0 0 -0.13086,-0.67578 32,32 0 0 0 -1.55664,-5.08985 32,32 0 0 0 -0.46875,-1.14648 32,32 0 0 0 -2.29492,-4.257814 32,32 0 0 0 -0.99219,-1.47461 32,32 0 0 0 -2.79687,-3.375 32,32 0 0 0 -1.54688,-1.519531 32,32 0 0 0 -3.13867,-2.541016 32,32 0 0 0 -0.0332,-0.02539 32,32 0 0 0 -1.99609,-1.294922 32,32 0 0 0 -3.02539,-1.587891 32,32 0 0 0 -1.43359,-0.751953 V 33.447266 Z m 21.41797,88.433593 a 10.482396,10.482396 0 0 1 10.48242,10.48242 10.482396,10.482396 0 0 1 -10.48242,10.48242 10.482396,10.482396 0 0 1 -10.482423,-10.48242 10.482396,10.482396 0 0 1 10.482423,-10.48242 z" />
            <path
                fill="currentColor"
                d="m 172.78711,107.5 h 32 v 11 h -32 z" />
            <path
                fill="currentColor"
                d="m 161.55449,76.522757 27.71281,-16 5.5,9.526279 -27.71281,16 z m 0,72.954483 27.71281,16 5.50001,-9.52628 -27.71282,-16 z" />
            <path
                fill="currentColor"
                d="m 137.0407,54.712986 16,-27.712813 9.52628,5.5 -16,27.712813 z m 1e-5,116.574034 16,27.71281 9.52628,-5.5 -16,-27.71281 z" />
        </svg>
    );
}


