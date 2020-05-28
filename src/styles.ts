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
    background: rgba(0, 0, 0, 0.6);
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
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='80' cy='80' r='80' fill='%233650A2'/%3E%3Cpath d='m80.006 30c2.2988 0 4.3956 1.3134 5.3987 3.3818l24.006 49.5 0.542 1.1178h-13.337l-3.8797-8h-25.461l-3.8798 8h-13.337l0.5423-1.1182 24.006-49.5c1.0031-2.0684 3.0998-3.3818 5.3986-3.3818zm-7.8807 36h15.761l-7.8807-16.25-7.8807 16.25zm25.874 35h12.006c-0.361 16.152-13.731 29-29.999 29s-29.638-12.848-29.998-29h12.005c0.281 7.354 5.1673 13.631 11.987 15.996v-23.996c0-3.3137 2.6863-6 6-6s6 2.6863 6 6v24c6.8262-2.362 11.718-8.641 11.999-16z' clip-rule='evenodd' fill='%23fff' fill-rule='evenodd'/%3E%3C/svg%3E%0A");
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
    color: #5C5C5C;
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
