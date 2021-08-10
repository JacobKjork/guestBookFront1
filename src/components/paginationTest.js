import React, {useState} from 'react';
import Pagination from './pagination';

function PaginationTest(){

    const dataToMap = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,,21,22,23,24]
    const [paginationData, setPaginationData]=useState({startSlice:0,stopSlice:5})

    return(

        <div>
            <p>Här kommer vi lägga in paginering från PaginationTest</p>
            <Pagination pageSize="5" totCount={dataToMap.length} paginationData={paginationData} setPaginationData={setPaginationData}/>
            {dataToMap.slice(paginationData.startSlice,paginationData.stopSlice).map(
                i =>{
                    return(
                        <h3>{i}</h3>
                    )
                }
            )}
        </div>
    )
}export default PaginationTest;