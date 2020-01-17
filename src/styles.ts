export default `
/* Anchor Link */

.%prefix% {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
        Arial, sans-serif;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999999;
    display: none;
    align-items: center;
    justify-content: center;
}

.%prefix%-active {
    display: flex;
}

.%prefix%-session-countdown {
    font-size: 2em;
    text-align: center;
    padding: 1em;
}

.%prefix%-session-info {
    max-width: 50vw;
    padding: 1em;
}

.%prefix%-device {
    font-weight: 500;
}

.%prefix%-request {
    margin: 1em;
    padding: 1em;
    border-radius: 0.5em;
    background: white;
}

.%prefix%-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 2em;
}

.%prefix%-title {
    font-size: 1.5em;
}

.%prefix%-subtitle {
    font-size: 0.8em;
}

.%prefix%-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.%prefix%-uri a {
    color: black;
    line-height: 1.5em;
}

.%prefix%-qr svg {
    width: 100%;
}

`
