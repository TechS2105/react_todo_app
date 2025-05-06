import React from 'react';
import ListStyle from '../../public/styles/List.module.css';

function List({listItems, handelDelete}) {
    
    return (


        <>
        
            {listItems.length === 0 ? <span className={ListStyle.message}>Enjoy Your Day</span> : <div className={ListStyle.listdiv}>

                {

                    listItems.map((item) => {

                        return (
                            
                            <div className={ListStyle.subdiv}>
                                <p>{item.name}</p>
                                <p>{item.date}</p>
                                <button className={ListStyle.button} onClick={() => handelDelete(item)}> Delete </button>
                            </div>

                        );

                    })

                }

            </div>
            }
            
        </>


    );

}

export default List;