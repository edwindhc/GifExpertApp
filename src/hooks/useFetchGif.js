import { useState, useEffect } from "react";
import { GetGif } from "../herlpers/GetGif";

export const useFetchGif = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        GetGif(category)
            .then(imgs => {
                console.log(imgs)
                setState({
                    data: imgs,
                    loading: false
                })
            })

    }, [category])

    return state
}