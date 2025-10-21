import React, { useState } from "react";

export default async function useCheckIP() {
    try {
        const res = await fetch("https://api.ipify.org/?format=json");
        const result = await res.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}
