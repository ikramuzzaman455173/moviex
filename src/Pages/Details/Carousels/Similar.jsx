import React from "react";

import Carousel from "../../../Components/Carousel/Carousel";
import useFetch from "../../../Hooks/UseFetch";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <>
            {data===null||data?.results?.length===0?'':<Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />}
        </>
    );
};

export default Similar;