import React from "react";
import { formatDate } from "../../../utils/DateUtils";
import GlobalImage from "../../Global/GlobalImage/GlobalImage";

import "./index.scss";

const PostCard = ({ item }) => {
    return (
        <div className="post-card">
            <div className="image">
                <GlobalImage image={item.image} />
            </div>

            <div className="metadata">
                <span className="date">{formatDate(item.meta.publishedAt)}</span>

                {/* TODO: Limit tags? */}
                {item.tag.length > 0 && item.tags.map(tag => (<span className="tag">{tag.name}</span>))}
            </div>

            <h3>{item.title}</h3>
        </div>
    )
}

export default PostCard;