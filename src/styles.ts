export default `
/* Anchor Link */

.%prefix% * {
    box-sizing: border-box;
    line-height: 1;
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
    transition-property: all;
    transition-duration: .5s;
    transition-timing-function: ease-in-out;
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

.%prefix%-logo {
    width: 70px;
    height: 70px;
    margin: 0 auto;
    margin-top: -56px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M18.81 9.19h33.25V59.5H18.81z'/%3E%3Cpath d='M38.45 28.88h-6.9L35 21.77l3.45 7.1z' fill='%233650A2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M35 70a35 35 0 100-70 35 35 0 000 70zm2.36-55.4a2.62 2.62 0 00-4.72 0L21.9 36.75h5.84l1.7-3.5h11.13l1.7 3.5h5.83L37.36 14.6zM48.13 44.2h-5.26a7.76 7.76 0 01-5.24 7v-10.5a2.62 2.62 0 10-5.25 0v10.5a7.76 7.76 0 01-5.25-7h-5.25c.16 7.06 6 12.69 13.12 12.69 7.12 0 12.97-5.63 13.13-12.7z' fill='%233650A2'/%3E%3C/svg%3E");
}

.%prefix%-fuel {
    width: 70px;
    height: 70px;
    margin: 0 auto;
    margin-top: -56px;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='linear-gradient-25' x1='104.79' y1='197.49' x2='131.55' y2='108.35' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0.38' stop-color='%23f6b621'/%3E%3Cstop offset='0.59' stop-color='%23e89124'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg id='brain-logo' style='' transform='matrix(1, 0, 0, 1, -0.005538, -0.040005)'%3E%3Cg%3E%3Cpath class='cls-4' d='M251.93,111.13,221.28,71.51A23.76,23.76,0,0,0,209,63.61l-77.7-18.09a25.86,25.86,0,0,0-5.78-.6,28.22,28.22,0,0,0-7.88,1L99.06,51.58a6.31,6.31,0,0,0-.61-5l-5.3-9a6.36,6.36,0,0,0-5.47-3.13h0a6.57,6.57,0,0,0-1.92.29L49.61,46.21a6.34,6.34,0,0,0-4.41,6.28l.46,12.2a6.2,6.2,0,0,0,.78,2.81L38.2,70a21.1,21.1,0,0,0-11.73,9.76L3,125.21a17.78,17.78,0,0,0,.54,16.32l12.68,21A16.19,16.19,0,0,0,29.69,170a13.25,13.25,0,0,0,1.67-.1L65,165.81a17.22,17.22,0,0,0,9.2,13.64l12.86,6.08a32.51,32.51,0,0,0,12.26,2.63c.35,0,.7,0,1,0l29.17-1.61a6.12,6.12,0,0,1,2.64,1l29.05,28.79a20,20,0,0,0,13.27,5.29c.52,0,1,0,1.53-.07l23.93-2.47c4.31-.44,7.67-2.87,9-6.48s.36-7.64-2.63-10.78l-10.09-10.64,19.07-5.64a15.76,15.76,0,0,0,10.83-13.09L227.65,157a10.69,10.69,0,0,1,1.86-4.19l21.74-24a14,14,0,0,0,.68-17.65Z' style='fill: rgb(255, 255, 255);'/%3E%3Cg%3E%3Ccircle class='cls-2' cx='173.24' cy='107.45' r='6.19' transform='translate(7.67 226.39) rotate(-67.5)' style='fill: rgb(246, 182, 33);'/%3E%3Cpath class='cls-2' d='M101,97.06a3.71,3.71,0,1,0-3.71-3.71A3.71,3.71,0,0,0,101,97.06Z' style='fill: rgb(246, 182, 33);'/%3E%3Ccircle class='cls-2' cx='135.4' cy='76.29' r='3.71' style='fill: rgb(246, 182, 33);'/%3E%3Cg%3E%3Cpath class='cls-21' d='M79.24,128c-16.71,0-37.79,7.36-48.93,11.68a2.39,2.39,0,0,0-1.19,3.46L33.8,151a2.38,2.38,0,0,0,2.34,1.14L69.27,148a12.74,12.74,0,0,1,1.63-.1,13.22,13.22,0,0,1,13.26,12.74l0,1.1a2.4,2.4,0,0,0,1.37,2.07l10.56,5a14.8,14.8,0,0,0,4.69.95H101L129,168.24c.28,0,.57,0,.85,0a21.23,21.23,0,0,1,14.06,5.68l27.82,27.56a4,4,0,0,0,1.26.45l6.07-.75a1.22,1.22,0,0,0,.86-1.9l-3-4.36a11.51,11.51,0,0,1,5.21-19.44l23.4-6.93a1.44,1.44,0,0,0,1-1.23l1.26-12.72v0a1.44,1.44,0,0,0-1.81-1.54c-8.26,2.21-22.73,5.72-31.63,5.72C136.65,158.74,108.72,128,79.24,128Zm32.48,27a2.77,2.77,0,0,1-1,1,3.78,3.78,0,0,1-5.23-5.23,2.77,2.77,0,0,1,1-1A3.78,3.78,0,0,1,111.72,155Zm63.76,13.39a2.62,2.62,0,0,1-1,1,3.78,3.78,0,0,1-5.23-5.23,2.77,2.77,0,0,1,1-1A3.78,3.78,0,0,1,175.48,168.36Z' style='fill: url(%23linear-gradient-25);'/%3E%3Cpath class='cls-2' d='M173.34,127.62c-37.69,0-69.59-16.73-92.46-16.73-16.08,0-43.36,12.17-55.32,21a2,2,0,0,0-.65,2.46c.35.8.82,1.84,1.26,2.82a2,2,0,0,0,2.62,1C39.07,134,61,125.9,79.24,125.9c30.45,0,58.48,27,91.13,27,14.49,0,35.75-5.69,41.3-10.16,2.42-2.52,10.36-11.93,16-17.78a2.39,2.39,0,0,0-2.32-3.94C214.49,123.51,193.73,127.62,173.34,127.62Zm-1.68,14.25a5.28,5.28,0,0,1-2.49,2.49,6.27,6.27,0,0,1-8.48-8.48,5.37,5.37,0,0,1,2.49-2.49A6.27,6.27,0,0,1,171.66,141.87Z' style='fill: rgb(246, 182, 33);'/%3E%3C/g%3E%3Cpath class='cls-1' d='M248.71,113.13,218.06,73.51a20.05,20.05,0,0,0-10-6.43L130.34,49a25.7,25.7,0,0,0-11.57.38L91.41,57.65a.05.05,0,0,1-.07,0L89.56,53a.05.05,0,0,1,0-.07l4.06-1.46a2.45,2.45,0,0,0,1-.62,2.29,2.29,0,0,0,.29-2.72l-5.29-9a2.3,2.3,0,0,0-2.67-1L50.83,49.59a2.28,2.28,0,0,0-1.59,2.27l.46,12.2a2.27,2.27,0,0,0,1,1.8,2.3,2.3,0,0,0,1.28.4,2.33,2.33,0,0,0,.78-.14l9.18-3.29a0,0,0,0,1,.06,0L63.58,66a0,0,0,0,1,0,.07L39.37,73.4a17.25,17.25,0,0,0-9.31,7.74L6.58,126.59A13.67,13.67,0,0,0,7,139l12.68,21a12.1,12.1,0,0,0,11.19,5.45l37.08-4.54a.83.83,0,0,1,.68.18.82.82,0,0,1,.28.64l.14,3.22a13.25,13.25,0,0,0,6.88,10.39l12.86,6.08a28,28,0,0,0,11.32,2.21l29.2-1.61a9.38,9.38,0,0,1,5.68,2.16L164,212.94a16,16,0,0,0,10.41,4.12,10,10,0,0,0,1.11-.06l23.93-2.46c2.77-.29,4.82-1.69,5.62-3.85s.15-4.56-1.77-6.58l-14.6-15.38a.06.06,0,0,1,0-.09l25.35-7.5a11.74,11.74,0,0,0,7.94-9.59l1.53-15.46a14.22,14.22,0,0,1,2.9-6.52l21.74-24A9.94,9.94,0,0,0,248.71,113.13ZM56.08,56.65,56,54.81a1.29,1.29,0,0,1,.88-1.29l28-9a1.28,1.28,0,0,1,1.48.57l.48.83a1.27,1.27,0,0,1-.68,1.83l-28.35,10A1.27,1.27,0,0,1,56.08,56.65Zm186.57,63.93-21.71,24a21.37,21.37,0,0,0-4.79,10.8l-1.54,15.46A4.37,4.37,0,0,1,212,174l-26.5,7.84a6.52,6.52,0,0,0-3,11.2L194,205.17a1.49,1.49,0,0,1-.93,2.5l-18.31,1.89a8.37,8.37,0,0,1-5.49-1.94l-29.06-28.8a16.74,16.74,0,0,0-10.77-4.33l-.59,0-29.21,1.61a20.07,20.07,0,0,1-7.69-1.5l-12.87-6.09a5,5,0,0,1-2.61-3.93l-.13-3.22A8.27,8.27,0,0,0,67,153.44L29.94,158a4.75,4.75,0,0,1-3.87-1.88l-12.68-21a6.38,6.38,0,0,1-.17-5.05L36.71,84.58a10.08,10.08,0,0,1,4.82-4l79.41-24a18.68,18.68,0,0,1,7.7-.25l77.7,18.09a12.72,12.72,0,0,1,5.8,3.72l30.62,39.59A2.35,2.35,0,0,1,242.65,120.58Z' style='fill: rgb(42, 54, 64);'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.%prefix%-logo.loading {
    border-radius: 100%;
    background-color: #3650A2;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0.5 0.5 45 45' xmlns='http://www.w3.org/2000/svg' stroke='%23fff'%3E%3Cg fill='none' fill-rule='evenodd' transform='translate(1 1)' stroke-width='2'%3E%3Ccircle cx='22' cy='22' r='6' stroke-opacity='0'%3E%3Canimate attributeName='r' begin='1.5s' dur='3s' values='6;22' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='stroke-opacity' begin='1.5s' dur='3s' values='1;0' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='stroke-width' begin='1.5s' dur='3s' values='2;0' calcMode='linear' repeatCount='indefinite' /%3E%3C/circle%3E%3Ccircle cx='22' cy='22' r='6' stroke-opacity='0'%3E%3Canimate attributeName='r' begin='3s' dur='3s' values='6;22' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='stroke-opacity' begin='3s' dur='3s' values='1;0' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='stroke-width' begin='3s' dur='3s' values='2;0' calcMode='linear' repeatCount='indefinite' /%3E%3C/circle%3E%3Ccircle cx='22' cy='22' r='8'%3E%3Canimate attributeName='r' begin='0s' dur='1.5s' values='6;1;2;3;4;5;6' calcMode='linear' repeatCount='indefinite' /%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");
}

.%prefix%-logo.error {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 70 70'%3E%3Cdefs/%3E%3Ccircle cx='35' cy='35' r='35' fill='%23FC3D39'/%3E%3Cpath fill='%23fff' d='M22.3 48h25.4c2.5 0 4-1.7 4-4a4 4 0 00-.5-2L38.5 19.3a4 4 0 00-3.5-2 4 4 0 00-3.5 2L18.8 42.1c-.3.6-.5 1.3-.5 2 0 2.2 1.6 4 4 4zM35 37c-.9 0-1.4-.6-1.4-1.5l-.2-7.7c0-.9.6-1.6 1.6-1.6s1.7.7 1.7 1.6l-.3 7.7c0 1-.5 1.5-1.4 1.5zm0 6c-1 0-1.9-.8-1.9-1.8s.9-1.8 2-1.8c1 0 1.8.7 1.8 1.8 0 1-.9 1.8-1.9 1.8z'/%3E%3C/svg%3E");
}

.%prefix%-logo.success {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 70 70'%3E%3Cdefs/%3E%3Ccircle cx='35' cy='35' r='35' fill='%233DC55D'/%3E%3Cpath fill='%23fff' d='M30.9 49.7a2 2 0 001.8-1L48 24.9c.3-.5.4-1 .4-1.4 0-1-.7-1.7-1.7-1.7-.8 0-1.2.3-1.6 1L30.8 45.4 23.5 36c-.5-.6-1-.9-1.6-.9-1 0-1.8.8-1.8 1.8 0 .4.2.9.6 1.3L29 48.7c.6.7 1.1 1 1.9 1z'/%3E%3C/svg%3E");
}

.%prefix%-request {
    padding: 20px;
    border-radius: 20px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background: white;
}

.%prefix%-fee,
.%prefix%-info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.%prefix%-title {
    color: #000000;
    font-size: 25px;
    margin-top: 14px;
    font-weight: bold;
    line-height: 30px;
}

.%prefix%-subtitle {
    margin: 14px 0;
    color: #5C5C5C;
    text-align: center;
    line-height: 1.3;
}

.%prefix%-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.%prefix%-uri {
    width: 100%;
}

.%prefix%-choice a,
.%prefix%-uri a {
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
    margin-top: 1em;
    cursor: pointer;
}

.%prefix%-choice a:hover,
.%prefix%-uri a:hover {
    border: 1px solid #007AFF;
}

.%prefix%-qr {
    margin-top: 1em;
}

.%prefix%-qr svg {
    width: 100%;
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
}

.%prefix%-wskeepalive {
    display: none;
}

.%prefix%-choice {
    text-align: center;
    width: 100%;
}

.%prefix%-choice span {
    display: block;
    margin-top: 1em;
}


@media (prefers-color-scheme: dark) {
    .%prefix%-inner {
        background: #262D43;
        color: white;
    }
    .%prefix%-request {
        background: #131B33;
    }
    .%prefix%-title {
        color: #FCFCFC;
    }
    .%prefix%-subtitle {
        color: #B8C0DA;
    }
    .%prefix%-qr svg path {
        fill: #131B33;
    }
    .%prefix%-qr svg path:last-child {
        stroke: white;
    }
    .%prefix%-choice a,
    .%prefix%-uri a {
        color: #FCFCFC;
        background: #262D43;
        border: 1px solid #262D43;
    }
    .%prefix%-choice a:hover,
    .%prefix%-uri a:hover {
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
`
