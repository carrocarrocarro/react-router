import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {

    const {currentVan} = useOutletContext();
    
    return(
        <img src={currentVan.imageUrl} alt="Van" className="host-van-detail-image" />
    )
}
export default HostVanPhotos;