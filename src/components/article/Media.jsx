import Code from "./Code";
import Image from "./Image";
import React from "react";

const Media = (props) => {
    const entity = props.contentState.getEntity(
        props.block.getEntityAt(0)
    );
    const data = entity.getData();
    const type = entity.getType();

    let media;
    if (type === 'image') {
        media = <Image id={data.id} blockKey={props.block.key} readOnly={props.blockProps.readOnly} content={data.content} src={data.src}
                       onClickImage={props.blockProps.onClickImage} insert={props.blockProps.insert}
                       remove={props.blockProps.removeBlock} width={data.width}/>;
    } else if (type === 'code') {
        media = <Code id={data.id} blockKey={props.block.key} readOnly={props.blockProps.readOnly} content={data.content}
                      onClickCode={props.blockProps.onClickCode} width={data.width} height={data.height}
                      insert={props.blockProps.insert} remove={props.blockProps.removeBlock}/>
    }

    return media;
};

export default Media;