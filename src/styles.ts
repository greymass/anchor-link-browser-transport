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
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
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
    background: #F1F1F1;
    margin: 1em;
    padding-top: 3.5em;
    border-radius: 1.5em;
    box-shadow: 0px 4px 100px rgba(0, 0, 0, .5);
    width: 24em;
}

.%prefix%-logo {
    width: 5em;
    height: 5em;
    margin: 0 auto;
    margin-top: -3.75em;;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='250.388' cy='250.579' r='77' fill='%233650A2' transform='matrix(3.153102, 0, 0, 3.147782, -538.275513, -536.945496)'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M 250 28.33 C 127.962 28.33 28.378 127.847 28.378 250 C 28.378 372.153 127.962 471.67 250 471.67 C 372.035 471.67 471.622 372.153 471.622 250 C 471.622 127.86 371.874 28.33 250 28.33 Z M 0 250 C 0 112.244 112.244 0 250 0 C 387.579 0 500 112.244 500 250 C 500 387.753 387.753 500 250 500 C 112.244 500 0 387.753 0 250 Z' fill='white'/%3E%3Cpath d='M 167.84 299.965 C 167.84 345.356 204.608 382.125 250 382.125 C 295.389 382.125 331.984 345.356 331.984 299.965 L 297.855 299.965 C 297.855 320.548 284.835 337.965 266.715 344.827 L 266.715 277.446 L 232.582 277.446 L 232.582 344.651 C 214.638 337.615 201.969 320.372 201.969 299.965 L 167.84 299.965 Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M 234.165 128.08 C 240.85 114.885 259.677 114.885 266.361 128.08 L 331.631 263.196 L 297.502 263.196 L 286.595 240.853 L 212.525 240.853 L 202.145 263.196 L 168.016 263.196 L 234.165 128.08 Z M 229.057 207.149 L 251.223 162.111 L 272.863 207.149 L 229.057 207.149 Z' fill='white'/%3E%3C/svg%3E");
}

.%prefix%-logo.error {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 70 70'%3E%3Cdefs/%3E%3Ccircle cx='35' cy='35' r='35' fill='%23FC3D39'/%3E%3Cpath fill='%23fff' d='M22.3 48h25.4c2.5 0 4-1.7 4-4a4 4 0 00-.5-2L38.5 19.3a4 4 0 00-3.5-2 4 4 0 00-3.5 2L18.8 42.1c-.3.6-.5 1.3-.5 2 0 2.2 1.6 4 4 4zM35 37c-.9 0-1.4-.6-1.4-1.5l-.2-7.7c0-.9.6-1.6 1.6-1.6s1.7.7 1.7 1.6l-.3 7.7c0 1-.5 1.5-1.4 1.5zm0 6c-1 0-1.9-.8-1.9-1.8s.9-1.8 2-1.8c1 0 1.8.7 1.8 1.8 0 1-.9 1.8-1.9 1.8z'/%3E%3C/svg%3E");
}

.%prefix%-logo.success {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 70 70'%3E%3Cdefs/%3E%3Ccircle cx='35' cy='35' r='35' fill='%233DC55D'/%3E%3Cpath fill='%23fff' d='M30.9 49.7a2 2 0 001.8-1L48 24.9c.3-.5.4-1 .4-1.4 0-1-.7-1.7-1.7-1.7-.8 0-1.2.3-1.6 1L30.8 45.4 23.5 36c-.5-.6-1-.9-1.6-.9-1 0-1.8.8-1.8 1.8 0 .4.2.9.6 1.3L29 48.7c.6.7 1.1 1 1.9 1z'/%3E%3C/svg%3E");
}

.%prefix%-request {
    padding: 1.5em;
    border-radius: 1.5em;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background: white;
}

.%prefix%-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 2em;
}

.%prefix%-title {
    font-size: 1.8em;
    margin-top: 0.5em;
    font-weight: bold;
}

.%prefix%-subtitle {
    margin-top: 1em;
    color: #5C5C5C;
    text-align: center;
    margin-bottom: 0.5em;
}

.%prefix%-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.%prefix%-uri {
    width: 100%;

}
.%prefix%-uri a {
    color: #007AFF;
    background: rgba(116, 116, 128, 0.08);
    text-decoration: none;
    font-size: 1.3em;
    flex-grow: 1;
    flex: 1;
    width: 100%;
    padding: 1.5em;
    border-radius: 0.75em;
    font-weight: 500;
    letter-spacing: .01em;
    text-align: center;
    display: block;
    margin-top: 1em;
}

.%prefix%-qr {
    margin-top: 1em;
}

.%prefix%-qr svg {
    width: 100%;
}
`
