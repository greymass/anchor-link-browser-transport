export default `
/* Anchor Link */

.%prefix% * {
    box-sizing: border-box;
    line-height: 1;
    font-variant-numeric: tabular-nums;
}

.%prefix% {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
        Arial, sans-serif;
    font-size: 13px;
    background: rgba(0, 0, 0, 0.65);
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 2147483647;
    display: none;
    align-items: center;
    justify-content: center;
}

.%prefix%-active {
    display: flex;
}

.%prefix%-inner {
    background: #EFF1F7;
    margin: 20px;
    padding-top: 50px;
    border-radius: 20px;
    box-shadow: 0px 4px 100px rgba(0, 0, 0, .5);
    width: 340px;
    position: relative;
}

.%prefix%-close {
    display: block;
    position: absolute;
    top: 11px;
    right: 16px;
    width: 28px;
    height: 28px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.57 12.1a.96.96 0 000 1.34c.37.36 1 .36 1.34 0L7 8.37l5.09 5.09c.36.35.97.35 1.34-.01a.96.96 0 000-1.34L8.34 7.01l5.08-5.08a.95.95 0 000-1.33.97.97 0 00-1.34-.01L6.99 5.68 1.91.59a.96.96 0 00-1.33 0 .97.97 0 00-.01 1.34l5.09 5.08-5.1 5.1z' fill='%23007AFF'/%3E%3C/svg%3E");
    background-size: 14px;
    background-repeat: no-repeat;
    background-position: 50% 7px;
    border-radius: 100%;
    cursor: pointer;
}

.%prefix%-close:hover {
    background-color: white;
}

.%prefix%-version {
    position: absolute;
    top: 19px;
    left: 20px;
    cursor: help;
    color: #B8C0DA;
    opacity: 0.1;
}

.%prefix%-version:hover {
    opacity: 1;
}

.%prefix%-logo {
    width: 70px;
    height: 70px;
    margin: 0 auto;
    margin-top: -56px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M18.81 9.19h33.25V59.5H18.81z'/%3E%3Cpath d='M38.45 28.88h-6.9L35 21.77l3.45 7.1z' fill='%233650A2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M35 70a35 35 0 100-70 35 35 0 000 70zm2.36-55.4a2.62 2.62 0 00-4.72 0L21.9 36.75h5.84l1.7-3.5h11.13l1.7 3.5h5.83L37.36 14.6zM48.13 44.2h-5.26a7.76 7.76 0 01-5.24 7v-10.5a2.62 2.62 0 10-5.25 0v10.5a7.76 7.76 0 01-5.25-7h-5.25c.16 7.06 6 12.69 13.12 12.69 7.12 0 12.97-5.63 13.13-12.7z' fill='%233650A2'/%3E%3C/svg%3E");
}

.%prefix%-logo.loading {
    border-radius: 100%;
    background-color: #3650A2;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0.5 0.5 45 45' xmlns='http://www.w3.org/2000/svg' stroke='%23fff'%3E%3Cg fill='none' fill-rule='evenodd' transform='translate(1 1)' stroke-width='2'%3E%3Ccircle cx='22' cy='22' r='6' stroke-opacity='0'%3E%3Canimate attributeName='r' begin='1.5s' dur='3s' values='6;22' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='stroke-opacity' begin='1.5s' dur='3s' values='1;0' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='stroke-width' begin='1.5s' dur='3s' values='2;0' calcMode='linear' repeatCount='indefinite' /%3E%3C/circle%3E%3Ccircle cx='22' cy='22' r='6' stroke-opacity='0'%3E%3Canimate attributeName='r' begin='3s' dur='3s' values='6;22' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='stroke-opacity' begin='3s' dur='3s' values='1;0' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='stroke-width' begin='3s' dur='3s' values='2;0' calcMode='linear' repeatCount='indefinite' /%3E%3C/circle%3E%3Ccircle cx='22' cy='22' r='8'%3E%3Canimate attributeName='r' begin='0s' dur='1.5s' values='6;1;2;3;4;5;6' calcMode='linear' repeatCount='indefinite' /%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");
}

.%prefix%-logo.error {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' fill='none'%3E%3Ccircle cx='35' cy='35' r='35' fill='%23fc3d39'/%3E%3Cpath fill-rule='evenodd' d='M32.88 17.614c.715-.403 1.522-.614 2.343-.614s1.628.212 2.343.614 1.314.983 1.74 1.685l.005.008 13.483 22.508.013.022c.417.722.638 1.541.64 2.375s-.214 1.654-.627 2.378-1.008 1.328-1.727 1.751-1.535.65-2.369.659h-.017-26.983c-.834-.009-1.651-.237-2.369-.659s-1.314-1.027-1.727-1.751-.629-1.544-.627-2.378.223-1.653.64-2.375l.013-.022L31.14 19.299c.426-.702 1.025-1.282 1.74-1.685zm2.343 2.569a1.59 1.59 0 0 0-1.359.763L20.392 43.438a1.59 1.59 0 0 0-.208.782c-.001.278.071.551.209.793a1.59 1.59 0 0 0 1.358.803h26.945a1.59 1.59 0 0 0 1.358-.803 1.59 1.59 0 0 0 .209-.793c-.001-.274-.073-.544-.208-.782L36.584 20.95c-.144-.236-.343-.428-.58-.561a1.59 1.59 0 0 0-.781-.205zm0 6.531a1.59 1.59 0 0 1 1.592 1.592v6.367a1.59 1.59 0 1 1-3.184 0v-6.367a1.59 1.59 0 0 1 1.592-1.592zm-1.592 14.326a1.59 1.59 0 0 1 1.592-1.592h.016a1.59 1.59 0 1 1 0 3.184h-.016a1.59 1.59 0 0 1-1.592-1.592z' fill='%23fff'/%3E%3C/svg%3E");
}

.%prefix%-logo.warning {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' fill='none' %3E%3Ccircle cx='35' cy='35' r='35' fill='%23f8b826'/%3E%3Cpath d='M35 20c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zM16.667 35c0-10.125 8.208-18.333 18.333-18.333S53.333 24.875 53.333 35 45.125 53.334 35 53.334 16.667 45.126 16.667 35zM35 26.667c.921 0 1.667.746 1.667 1.667V35A1.67 1.67 0 0 1 35 36.667c-.921 0-1.667-.746-1.667-1.667v-6.667c0-.921.746-1.667 1.667-1.667zm-1.667 15A1.67 1.67 0 0 1 35 40h.017c.921 0 1.667.746 1.667 1.667s-.746 1.667-1.667 1.667H35a1.67 1.67 0 0 1-1.667-1.667z' fill-rule='evenodd' fill='%23fff'/%3E%3C/svg%3E");
}

.%prefix%-logo.success {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 70 70'%3E%3Cdefs/%3E%3Ccircle cx='35' cy='35' r='35' fill='%233DC55D'/%3E%3Cpath fill='%23fff' d='M30.9 49.7a2 2 0 001.8-1L48 24.9c.3-.5.4-1 .4-1.4 0-1-.7-1.7-1.7-1.7-.8 0-1.2.3-1.6 1L30.8 45.4 23.5 36c-.5-.6-1-.9-1.6-.9-1 0-1.8.8-1.8 1.8 0 .4.2.9.6 1.3L29 48.7c.6.7 1.1 1 1.9 1z'/%3E%3C/svg%3E");
}

.%prefix%-logo.fuel {
    background-image: url("data:image/svg+xml,%3Csvg width='70' height='70' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M69.23 30.31l-8.46-11a6.58 6.58 0 00-3.4-2.19L35.91 12.1a7.16 7.16 0 00-1.6-.16 7.73 7.73 0 00-2.18.28l-5.1 1.57a1.76 1.76 0 00-.17-1.4l-1.46-2.5a1.76 1.76 0 00-2.06-.8l-9.98 3.2a1.76 1.76 0 00-1.23 1.74l.13 3.39c.01.27.09.54.22.78l-2.28.7a5.85 5.85 0 00-3.24 2.7L.48 34.23a4.96 4.96 0 00.14 4.53l3.5 5.83a4.49 4.49 0 004.19 2.05l9.29-1.13a4.79 4.79 0 002.54 3.78l3.55 1.68a8.9 8.9 0 003.39.73h.27l8.06-.45c.26.04.5.13.73.28l8.02 8c1 .92 2.3 1.45 3.67 1.47.14 0 .28 0 .42-.03l6.6-.68a2.85 2.85 0 002.5-1.8c.36-1 .1-2.12-.73-3l-2.78-2.96 5.26-1.56a4.35 4.35 0 003-3.64l.41-4.29c.09-.42.26-.82.52-1.16l6-6.66a3.91 3.91 0 00.2-4.9z' fill='%23fff'/%3E%3Cpath d='M49.08 29.96a1.72 1.72 0 00-.92-2.25 1.72 1.72 0 00-1.3 3.17 1.7 1.7 0 002.22-.92zM27.54 26.41a1.02 1.02 0 001-1.23 1.02 1.02 0 00-1.85-.37 1.03 1.03 0 00.46 1.52c.12.05.25.08.39.08zM37.05 21.67a1.03 1.03 0 000-2.06 1.03 1.03 0 000 2.06zM21.54 35c-4.62 0-10.44 2.04-13.52 3.24a.68.68 0 00-.24.16.68.68 0 00-.18.53c.01.1.04.19.1.27l1.28 2.16c.07.1.17.2.28.25.11.06.24.08.37.07l9.15-1.13.45-.03a3.64 3.64 0 013.67 3.55v.3a.67.67 0 00.39.59l2.9 1.38c.42.16.86.26 1.3.28h.05l7.74-.45h.23c1.45.03 2.83.59 3.9 1.58l7.68 7.65c.1.06.22.1.35.12l1.67-.2c.06-.01.12-.03.16-.07a.32.32 0 00.1-.13.33.33 0 00-.03-.33l-.82-1.21a3.22 3.22 0 01-.01-4.58c.4-.4.9-.68 1.45-.82l6.47-1.92a.4.4 0 00.19-.13.41.41 0 00.08-.22l.35-3.53c.01-.06 0-.13-.02-.2a.41.41 0 00-.28-.24.37.37 0 00-.2.01c-2.27.62-6.27 1.6-8.73 1.6C37.4 43.53 29.68 35 21.54 35zm8.97 7.49a.8.8 0 01-.27.28c-.2.13-.45.19-.68.17a1.05 1.05 0 01-.77-1.62.73.73 0 01.28-.28 1.05 1.05 0 011.44 1.45zm17.6 3.72a.76.76 0 01-.27.28 1.05 1.05 0 01-1.17-1.73 1.05 1.05 0 011.32.13 1.04 1.04 0 01.13 1.32z' fill='%23F8B826'/%3E%3Cpath d='M21.54 35c-4.85 0-11.03 2.25-13.96 3.42a.29.29 0 00-.15.16c-.01.03-.02.07-.01.11 0 .04.01.07.03.1L9 41.38c.06.11.16.2.27.26.12.05.25.07.37.06l9.15-1.13c.15-.02.3-.02.46-.03a3.63 3.63 0 013.66 3.54l.02.56c0 .04.02.09.05.13.02.04.06.07.1.1l3.13 1.48c.41.16.85.26 1.3.28h.04l7.74-.45h.23c1.45.03 2.84.59 3.9 1.58l7.68 7.65c.1.06.23.1.35.12l2.22-.27-1.58-1.66c-.82-.88-.7-2.05-.4-3.13a3.28 3.28 0 012.3-2.27l6.71-2 .38-3.8.06-.58c-2.13.59-6.6 1.74-9.3 1.74C37.4 43.54 29.69 35 21.54 35zm8.89 7.62a.38.38 0 01-.07.07c-1.07.77-2.26-.42-1.49-1.5a.25.25 0 01.06-.07c1.08-.77 2.27.42 1.5 1.5zm17.6 3.72a.25.25 0 01-.06.06c-1.07.78-2.26-.42-1.49-1.5a.25.25 0 01.07-.06c1.07-.78 2.26.42 1.49 1.5z' fill='%23E99123'/%3E%3Cpath d='M47.53 34.9c-10.41 0-19.22-4.65-25.54-4.65-4.44 0-11.97 3.38-15.28 5.83a.55.55 0 00-.18.69l.35.78a.55.55 0 00.72.28c2.84-1.18 8.9-3.42 13.94-3.42 8.4 0 16.15 7.48 25.16 7.48 4 0 9.88-1.58 11.41-2.82.67-.7 2.86-3.32 4.4-4.93a.67.67 0 00.1-.8.67.67 0 00-.32-.28.65.65 0 00-.42-.03 64.85 64.85 0 01-14.34 1.86zm-.47 3.95c-.14.3-.38.55-.68.7a1.73 1.73 0 01-2.34-2.36c.14-.3.38-.55.68-.7a1.72 1.72 0 012.04.32 1.75 1.75 0 01.3 2.04z' fill='%23F8B826'/%3E%3Cpath d='M68.34 30.87l-8.46-11a5.52 5.52 0 00-2.77-1.78l-21.46-5.03a7.08 7.08 0 00-3.2.1l-7.55 2.3-.01.01h-.01l-.5-1.3v-.01l1.13-.4a.65.65 0 00.36-.93l-1.47-2.5a.64.64 0 00-.73-.27l-9.98 3.17a.64.64 0 00-.44.63l.13 3.39a.64.64 0 00.63.6c.07 0 .15-.02.22-.04l2.53-.91h.02l.44.87v.02l-6.7 2.05c-1.08.38-2 1.15-2.56 2.15L1.47 34.61a3.8 3.8 0 00.11 3.43l3.5 5.84a3.32 3.32 0 003.1 1.51l10.23-1.26a.2.2 0 01.2.04.2.2 0 01.06.08l.02.1.03.9a3.69 3.69 0 001.9 2.88l3.56 1.69c.98.42 2.05.63 3.12.61l8.06-.44c.58.02 1.13.23 1.57.6l8.03 8a4.38 4.38 0 003.18 1.12l6.6-.69c.77-.07 1.33-.46 1.55-1.07.23-.6.05-1.26-.48-1.82l-4.02-4.26-.01-.01v-.01l7-2.09a3.25 3.25 0 002.2-2.66l.43-4.3a4 4 0 01.8-1.81l6.01-6.67a2.76 2.76 0 00.12-3.45zM15.14 15.2l-.03-.51c0-.08.02-.16.06-.22.04-.07.1-.11.18-.14l7.73-2.5a.35.35 0 01.41.16l.13.23c.03.05.04.1.05.15 0 .05 0 .1-.02.14a.35.35 0 01-.08.13.38.38 0 01-.12.09L15.6 15.5a.34.34 0 01-.31-.04.36.36 0 01-.16-.27zm51.53 17.75l-6 6.66a5.95 5.95 0 00-1.32 3l-.42 4.3a1.22 1.22 0 01-.73.87l-7.32 2.17a1.8 1.8 0 00-1.34 2.28c.1.32.27.6.52.83l3.19 3.37a.4.4 0 01.09.43.42.42 0 01-.14.19.42.42 0 01-.21.08l-5.06.53c-.55 0-1.09-.19-1.51-.54l-8.03-8a4.62 4.62 0 00-3.14-1.2l-8.07.45c-.73.01-1.45-.13-2.12-.41l-3.56-1.7a1.4 1.4 0 01-.72-1.08l-.04-.9a2.35 2.35 0 00-.8-1.68 2.24 2.24 0 00-1.78-.53L7.92 43.32a1.32 1.32 0 01-1.07-.53l-3.49-5.82a1.78 1.78 0 01-.05-1.4L9.8 22.94c.32-.5.78-.89 1.33-1.1l21.94-6.67c.69-.18 1.42-.2 2.12-.07l21.46 5.02c.62.19 1.18.55 1.6 1.03l8.47 11c.08.11.12.25.12.4a.69.69 0 01-.16.39z' fill='%2329363F'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath fill='%23fff' transform='translate(0 9)' d='M0 0h70v52H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
}

.%prefix%-request {
    padding: 20px;
    border-radius: 20px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background: white;
}

.%prefix%-info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.%prefix%-title {
    color: #000000;
    font-size: 25px;
    margin-top: 14px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0.5px;
}

.%prefix%-subtitle {
    margin-top: 14px;
    color: #5C5C5C;
    text-align: center;
    line-height: 1.4;
    word-break: break-word;
}

.%prefix%-subtitle a {
    color: #000000;
    cursor: pointer;
    text-decoration: underline;
}

.%prefix%-manual {
    color: #007AFF;
    cursor: pointer;
}

.%prefix%-info hr {
    border: 0;
    height: 1px;
    width: 100%;
    background: #EFF1F7;
    margin: 24px 0 14px;
}

.%prefix%-uri {
    width: 100%;
}

.%prefix%-button {
    color: #007AFF;
    background: #EFF1F7;
    border: 1px solid #EFF1F7;
    text-decoration: none;
    font-size: 17px;
    flex-grow: 1;
    flex: 1;
    width: 100%;
    line-height: 1;
    padding: 20px 18px;
    border-radius: 12px;
    font-weight: 400;
    text-align: center;
    display: block;
    margin-top: 21px;
    cursor: pointer;
}

.%prefix%-button:hover {
    border: 1px solid #007AFF;
}

.%prefix%-qr {
    position: relative;
    margin-top: 21px;
    border: 4px solid #EFF1F7;
    padding: 11px;
    border-radius: 12px;
    background: #FFFFFF;
    transition: all 400ms ease-in-out;
    transform: scale(1) translateY(0);
}

.%prefix%-qr svg {
    width: 100%;
    display: block;
    cursor: zoom-in;
    shape-rendering: crispEdges;
}

.%prefix%-qr.zoom {
    transform: scale(2) translateY(-25px);
    border: 2px solid #1E89FE;
    box-sizing: border-box;
    box-shadow: 0px 4px 154px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
    padding: 5px;
    z-index: 2147483647;
}

.%prefix%-qr.zoom svg {
    cursor: zoom-out;
}

.%prefix%-qr svg rect {
    fill: black;
}

.%prefix%-copy {
    position: absolute;
    bottom: -10px;
    left: 0px;
    width: 100%;
    color: green;
    text-align: center;
    opacity: 1;
    transition: all 200ms ease-in-out;
    transition-delay: 400ms;
}

.%prefix%-qr.zoom .%prefix%-copy {
    transition-delay: 0ms;
    background: transparent;
    opacity: 0;
}

.%prefix%-copy span,
.%prefix%-copy a {
    display: inline-block;
    background: white;
    padding: 0 20px;
    color: #007AFF;
    cursor: pointer;
    text-decoration: none;
}

.%prefix%-copy span {
    display: none;
    color: #5C5C5C;
    cursor: default;
}

.%prefix%-copy.copied a {
    display: none;
}

.%prefix%-copy.copied span {
    display: inline-block;
}

.%prefix%-copy span:before,
.%prefix%-copy a:before {
    content: '';
    display: inline-block;
    width: 26px;
    height: 16px;
    position: relative;
    top: 2px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' fill='none'%3E%3Cg clip-path='url(%23A)' stroke='%23157efa' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M13.83 6.5h-6c-.73 0-1.33.6-1.33 1.33v6c0 .74.6 1.34 1.33 1.34h6c.74 0 1.34-.6 1.34-1.34v-6c0-.73-.6-1.33-1.34-1.33z'/%3E%3Cpath d='M3.83 10.5h-.66a1.33 1.33 0 01-1.34-1.33v-6a1.33 1.33 0 011.34-1.34h6a1.33 1.33 0 011.33 1.34v.66' stroke-linecap='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='A'%3E%3Cpath fill='%23fff' transform='translate(.5 .5)' d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
    background-repeat: no-repeat;
}

.%prefix%-copy span:before {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.33 4L6 11.33 2.67 8' stroke='%23157EFA' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    top: 3.5px;
}

.%prefix%-footnote {
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: -26px;
    left: 0;
    color: white;
}

.%prefix%-footnote a {
    color: white;
    text-decoration: underline;
}

.%prefix%-wskeepalive {
    display: none;
}

@media (prefers-color-scheme: dark) {
    .%prefix%-info hr,
    .%prefix%-inner {
        background: #262D43;
        color: white;
    }
    .%prefix%-request,
    .%prefix%-qr a,
    .%prefix%-qr span,
    .%prefix%-qr {
        background: #131B33;
    }
    .%prefix%-title {
        color: #FCFCFC;
    }
    .%prefix%-qr span,
    .%prefix%-subtitle {
        color: #B8C0DA;
    }
    .%prefix%-subtitle a {
        color: #FCFCFC;
    }
    .%prefix%-qr svg rect {
        fill: white;
    }
    .%prefix%-version {
        color: #546AAF;
    }
    .%prefix%-qr a,
    .%prefix%-manual,
    .%prefix%-button {
        color: #FCFCFC;
    }
    .%prefix%-button {
        background: #262D43;
        border: 1px solid #262D43;
    }
    .%prefix%-qr {
        border-color: #262D43;
    }
    .%prefix%-qr.zoom {
        border-color: #131B33;
    }
    .%prefix%-copy a:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' fill='none'%3E%3Cg clip-path='url(%23A)' stroke='%23fff' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M13.83 6.5h-6c-.73 0-1.33.6-1.33 1.33v6c0 .74.6 1.34 1.33 1.34h6c.74 0 1.34-.6 1.34-1.34v-6c0-.73-.6-1.33-1.34-1.33z'/%3E%3Cpath d='M3.83 10.5h-.66a1.33 1.33 0 01-1.34-1.33v-6a1.33 1.33 0 011.34-1.34h6a1.33 1.33 0 011.33 1.34v.66' stroke-linecap='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='A'%3E%3Cpath fill='%23fff' transform='translate(.5 .5)' d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
    }
    .%prefix%-copy span:before {
        background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.33 4L6 11.33 2.67 8' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    }
    .%prefix%-button:hover {
        color: #FCFCFC;
        border: 1px solid #FCFCFC;
        background: #333A50;
    }
    .%prefix%-close {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.57 12.1a.96.96 0 000 1.34c.37.36 1 .36 1.34 0L7 8.37l5.09 5.09c.36.35.97.35 1.34-.01a.96.96 0 000-1.34L8.34 7.01l5.08-5.08a.95.95 0 000-1.33.97.97 0 00-1.34-.01L6.99 5.68 1.91.59a.96.96 0 00-1.33 0 .97.97 0 00-.01 1.34l5.09 5.08-5.1 5.1z' fill='%23FCFCFC'/%3E%3C/svg%3E");
    }
    .%prefix%-close:hover {
        background-color: black;
    }
}

@media (max-height: 600px) { .%prefix%-inner { transform: scale(0.9); } }
@media (max-height: 540px) { .%prefix%-inner { transform: scale(0.8); } }
@media (max-height: 480px) { .%prefix%-inner { transform: scale(0.7); } }
@media (max-height: 420px) { .%prefix%-inner { transform: scale(0.6); } }
@media (max-height: 360px) { .%prefix%-inner { transform: scale(0.5); } }
@media (max-height: 300px) { .%prefix%-inner { transform: scale(0.4); } }

@media (max-width: 600px) and (orientation: portrait) {
    .%prefix%-qr.zoom {
        transform: scale(1.5) translateY(-25px);
    }
}

@media (max-width: 450px) and (orientation: portrait) {
    .%prefix%-qr.zoom {
        transform: scale(1.3) translateY(-25px);
    }
}

`
