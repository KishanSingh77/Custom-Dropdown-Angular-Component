export interface Photo {

    id: Number,
    sol: Number
    camera: {
        id: Number,
        name: String,
        rover_id: Number,
        full_name: String
    },
    img_src: String,
    rover: {
        max_sol: Number,
        total_photos: Number,

    }

}