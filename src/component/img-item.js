import "./img-item.css"

function Imgitem(props) {
    const { picwallpaper, onItemClick } = props;
    return(
        <div className = "iupic-item">
          <img src={picwallpaper.thumbnailUrl}  onClick={() => {onItemClick(picwallpaper)}} alt="main-img" />
          <h4>{picwallpaper.title}</h4>
        </div>
    );
}

export default Imgitem;
    