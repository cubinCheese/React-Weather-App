import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

// issue with slicing data - check source code repo, or look up issue

const Forecast = ({data}) => {

    const slicedData = data.list.slice(0, 7);
    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {slicedData.map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>
                ))}
                
            </Accordion>
        </>
    );
};

export default Forecast;