import { call, put, takeLatest } from "redux-saga/effects";
import ProfileServices from "./ProfileServices";

const profileServices = new ProfileServices();