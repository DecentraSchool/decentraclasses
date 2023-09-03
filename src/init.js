import { Buffer } from "buffer";

// @ts-ignore
window.Buffer = Buffer;
window.global ||= window;
