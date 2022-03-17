import "./img-item.css"

function Imgitem(props) {
    const { picwallpaper } = props;
    return(
        <div className = "iupic-item">
          <img src={picwallpaper.thumbnailUrl} alt="main-img" />
          <h4>{picwallpaper.title}</h4>
        </div>
    );
}

export default Imgitem;
    