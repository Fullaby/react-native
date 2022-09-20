import ImageCarousel from "./ImageCarousel"
export default function HeadBar(){
    

    return(
        <nav style={{ height: 'auto', width: 'screen', backgroundColor: '#B1B2FF'}}>
          
            <div style={{paddingTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
                <ul style={{listStyleType: 'none', paddingLeft:'50px', paddingTop: '20px'}}>
                    <li><span style={{fontSize: '100pt', color: '#EEF1FF'}}>Movie List</span></li>
                </ul>
                <ul style={{listStyleType: 'none', paddingRight: '20px', paddingBottom: '20px'}}>
                    <li><ImageCarousel/></li>
                </ul>
            </div>
        </nav>
    )
}