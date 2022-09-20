import ImageCarousel from "./ImageCarousel"
export default function HeadBar(){
    

    return(
        <nav className="bg-slate-400" style={{ height: 'auto', width: 'screen'}}>
          
            <div style={{paddingTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
                <ul style={{listStyleType: 'none', paddingLeft:'100px', paddingTop: '20px'}}>
                    <li><span className="text-white" style={{fontSize: '100pt'}}>Movie List</span></li>
                </ul>
                <ul style={{listStyleType: 'none', paddingRight: '20px', paddingBottom: '20px'}}>
                    <li><ImageCarousel/></li>
                </ul>
            </div>
        </nav>
    )
}