import type {FC} from 'react'
import styles from "./ProgressViewSelector.module.css"
import {ItemObject} from "../../../lib/interfaces"

type Props = {
    active_btn: ItemObject,
    left_item_object: ItemObject
    item_ojects: Array<ItemObject>;
    onLeftButtonClickHandler: (item:ItemObject)=> void;
    onItemClickHandler: (item:ItemObject) => void;
    onBackArrowClick: () => void;
    onForwardArrowClick: () => void;
}

const ProgressViewSelector: FC<Props> = ({
    active_btn,
    left_item_object,
    item_ojects,
    onLeftButtonClickHandler,
    onItemClickHandler,
    onForwardArrowClick,
    onBackArrowClick
}) => {

    let displayArrows = (active_btn.id !== "latestProgress")

    return(
        <div style={{justifyContent:'space-between', display: "flex", width: "100%"}}>
            <div style={{display:"flex"}}>
                { left_item_object.id !== active_btn.id && 
                <div className={styles.itemcontainer} style={{display:"flex", marginRight: "20px"}}>
                    <div className={left_item_object.id === active_btn.id ? styles.selected : styles.item}>
                        <a type="button" onClick={(e)=> {onLeftButtonClickHandler(left_item_object)}}>
                           {left_item_object.title}
                        </a>
                    </div>
                </div>
                }
                <div className="d-flex" style={{margin: "0px 30px 0px 0px "}}>
                    {displayArrows && <div className={styles.displayarrowitem}>
                        <a type="button" onClick={(e)=> {onBackArrowClick()}}>
                            <span className={styles.displayarrows}>
                                {"<"}
                            </span>
                        </a>
                    </div>
                    }
                    <span className={styles.displaytitle}>
                        {active_btn.display_title}
                    </span>
                    {displayArrows && <div className={styles.displayarrowitem}>
                        <a type="button" onClick={(e)=> {onForwardArrowClick()}}>
                            <span className={styles.displayarrows}>
                                {">"}
                            </span>
                        </a>
                    </div>
                    }
                </div>
            </div>
            <div className={styles.itemcontainer} style={{display:"flex"}}>
                { item_ojects.map((itemObject: ItemObject)=>{
                    return(
                        <div className={itemObject.id === active_btn.id ? styles.selected : styles.item}>
                            <a type="button" onClick={(e)=> {onItemClickHandler(itemObject)}}>
                                {itemObject.title}
                            </a>
                        </div>)
                    })
                }
            </div>                    
        </div>
    )
}
export default ProgressViewSelector