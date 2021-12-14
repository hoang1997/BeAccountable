import type {FC} from 'react'
import styles from "./ButtonGroup.module.css"
import {ItemObject} from "../../../lib/interfaces"

type Props = {
    active_btn: ItemObject,
    item_ojects: Array<ItemObject>;
    onItemClickHandler: (item:ItemObject) => void;
}

const ButtonGroup: FC<Props> = ({
    active_btn,
    item_ojects,
    onItemClickHandler,
}) => {

    return(
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
    )
}
export default ButtonGroup