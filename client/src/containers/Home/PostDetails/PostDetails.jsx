import React from "react";
import { useLocation } from "react-router-dom";

const PostDetails = () => {
    const location = useLocation();
    console.log(location);
    console.log(location.pathname);
    return <div>PostDetails</div>;
};

export default PostDetails;
