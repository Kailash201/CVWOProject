import React from "react";
import Profile from "../types/Profile";

const {sign, verify} = require("jsonwebtoken");
const secretkey = "askf3kjasd231"
const makeToken = (profile: Profile) => {
    const accessToken = sign({ username: profile['user'], id: profile['id'] }, secretkey);
    return accessToken;
};
