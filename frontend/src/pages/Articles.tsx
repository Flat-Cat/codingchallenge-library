import "./Articles.scss";
import { useParams, useNavigate } from 'react-router-dom'
import RSSFetcher from "../RSSFetcher";
import Hammer, { DIRECTION_LEFT, DIRECTION_RIGHT } from "hammerjs";
import React, { useEffect } from "react";


function Articles() {

    const navigate = useNavigate()

    type Params = {
        index: string;
    };

    const data = RSSFetcher();
    const { index } = useParams<Params>()

    let indexInteger = 0;
    if (index) {
        indexInteger = parseInt(index)
    }
    useEffect(() => {
        //Swipe_______________________________________
        var hammertime = new Hammer(document.body, {
        });
        hammertime.on('swipe', function (ev) {

            if (ev.direction === DIRECTION_LEFT) {

                if (indexInteger === data.length -1) {
                    navigate(`/articles/${0} `);
                  } else {
                    navigate(`/articles/${indexInteger + 1}`);
                  }

                hammertime.off("swipe")

            } else if (ev.direction === DIRECTION_RIGHT) {

                if (indexInteger === 0) {
                    navigate(`/articles/${data.length - 1}`);
                  } else {
                    navigate(`/articles/${indexInteger - 1}`);
                  }

                hammertime.off("swipe")
            }
        });

    }, [index]);

    return (
        <div>
            {data[indexInteger] && (

                <div className="Article">
                    <h1 className="title">{data[indexInteger].title}</h1>
                    <h2 className="subtitle">{data[indexInteger].description}</h2>
                    <h6 className="subtitle is-6">{data[indexInteger].pubDate}</h6>
                    <figure className = "image">
                    <img draggable="false" src={data[indexInteger].image.url} alt="" />
                    </figure>

                </div>

            )
            }
        </div>


    )
}

export default Articles
