import SongInstance from "../models/songModel" 

export const getSongs = async (req, res) => {
    try {
        const songInstances = await SongInstance.find();
        console.log(songInstances);
        res.status(200).json(songInstances) // means it went well
    } catch(err) {
            res.status(404).json({message: err.message });
    }
}

export const createSong = (req, res => {
    res.send('song creation')
})