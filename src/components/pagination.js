import React,{useEffect,useState} from 'react';

function Pagination({ totCount, pageSize, paginationData, setPaginationData }) {
    const [countChanged, setCountChanged] = useState(totCount)
    useEffect(() => {
        setPaginationData(...paginationData,{startSlice: 0, stopSlice: pageSize })
        let allVisit = document.getElementsByClassName("visit")
        Object.values(allVisit).forEach(element => {
            element.className = "notvisit"
        });
    
   
    },[totCount]);

    const totChunck = Math.ceil(totCount / pageSize)
    let selectedPage;

    function newPage(e){
        let allVisit = document.getElementsByClassName("visit")
        Object.values(allVisit).forEach(element => {
            element.className = "notvisit"
        });
        let page = e.target.innerHTML
        setPaginationData(...paginationData,{startSlice: page*pageSize, stopSlice: pageSize * 1 + page*pageSize })
        e.target.className = 'visit';
        selectedPage = e.target;

    }

    function showPagination() {
        var rows = [];
        for (var i = 0; i < totChunck; i++) {
            
            rows.push(<li key={i}
                style={{display: 'inline-block', marginLeft: 15}}
                onClick={(e)=>newPage(e)}
                >{i}
                </li>);
        }
        return rows;
    }
    return (

        <div className="pagination"  style={{display: 'inline', 'width': '100%'}}>
            <ul style={{display: 'inline', listStyleType: 'none', 'width': '100%'}}>
            {showPagination().map(i=>i )}
            <span> &nbsp; &nbsp; &nbsp;  </span>
            </ul>

            <p style={{display: 'inline-block' }}>visar :&nbsp; {paginationData.startSlice}&nbsp; </p>
            <p style={{display: 'inline-block' }}>-&nbsp; {paginationData.stopSlice}&nbsp; </p>
            <p style={{display: 'inline-block' }}>av :&nbsp; {totCount}</p>
        </div>
    );
} export default Pagination;