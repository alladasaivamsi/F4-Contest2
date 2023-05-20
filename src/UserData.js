import React from "react";

const UserData = ({data}) => {

    return (
        <>
            {
                data.map((item) => {
                    const {id , name , image , symbol , current_price , total_volume} = item;
                    return(
                        <tr key = {id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td><img src ={image} alt="im"></img></td>
                            <td>{symbol}</td>
                            <td>{current_price}</td>
                            <td>{total_volume}</td>
                        </tr>                   
                    )
                })
            }
        </>
    )
};

export default UserData;