export default (songs = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return songs;
        case "CREATE":
            return songs;
        default:
            return songs;
    }
}
