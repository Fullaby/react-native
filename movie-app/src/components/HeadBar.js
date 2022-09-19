import ImageCarousel from "./ImageCarousel"
export default function HeadBar(){
    

    return(
        <nav style={{backgroundColor: 'green', height: '300px', width: 'screen'}}>
          
            <div style={{paddingTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
                <ul style={{listStyleType: 'none', paddingLeft:'100px', paddingTop: '30px'}}>
                    <li><span style={{fontSize: '70pt'}}>Movie List</span></li>
                </ul>
                <ul style={{listStyleType: 'none', paddingRight: '20px'}}>
                    <li><ImageCarousel/></li>
                </ul>
            </div>
        </nav>
    )
}