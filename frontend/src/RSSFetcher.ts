import React, { useState, useEffect } from "react";


//google: map tsX = X makiert die datei als react komp. warum return ganz am anfang einer react componente?
//Promise: Async. Prozess. Warteschlange.

function RSSFetcher() {
    //[] => destruktor 
    interface Data {
        title: string,
        description: string,
        image: {
            url: string,
        }
        pubDate: string
    }
    const [data, setData] = useState<Data[]>([])

    useEffect(() => {


        fetch("/testfeed.xml")

            .then((response) => response.text())
            .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
            .then((document: Document) => {

                console.log(document);

                // items = nodelistof (array like, in array umwandeln)
                // Meistens ist etwas Array Like wenn man ein Query selector nutzt
                // NodeList soll dem DOM reflektieren und nicht abgreifbar sein für ein array

                const items = document.querySelectorAll("item");
                console.log(items[0])

                // array like formation in array mit []< - Destruktor. Map iteriert automatisch, ... = spread-operator: teilt einzelne elemente in einem array auf
                const data = [...items].map(item => {
                    const titleElement = item.querySelector("title")
                    let title = ""

                    if (titleElement && titleElement.textContent) 
                    {
                        title = titleElement.textContent
                    }
                    //Description__________________________
                    const descriptionElement = item.querySelector("description")
                    let description = ""

                    if (descriptionElement && descriptionElement.textContent) {

                        description = descriptionElement.textContent

                    }
                    //Image-Link____________________________
                    const imageElement = item.querySelector("enclosure")
                    let imageUrl = ""

                    if (imageElement && imageElement.getAttribute("url")) {
                        imageUrl = imageElement.getAttribute("url") as string;
                    }
                    //pub-date____________________________
                    const pubDateElement = item.querySelector("pubDate")
                    let pubDate = ""

                    if (pubDateElement && pubDateElement.textContent) {
                        pubDate = pubDateElement.textContent as string;
                    }
                    //_____________________________________
                    return {
                        title: title,
                        description: description,
                        image: {
                            url: imageUrl,
                        },
                        pubDate : pubDate
                    }
                })

                setData(data)
                console.log(data)
                // DATA: Leeres array (in der die formatierten Dateien der Arrays Iteriert wurde)
            })


    
}, []);
// Leeres array in React = führe es nur einmal aus(hooks)
return data;
}
export default RSSFetcher;


