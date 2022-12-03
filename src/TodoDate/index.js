import React, { useState } from "react";
import styled from "styled-components";

function TodoDate() {
    const today = new Date();
    console.log(today);
    const dayName = today.toLocaleString("en-US", { weekday: "long" });
    const dateString = today.toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" })
    return <>{dateString}</>;
}

export default TodoDate;