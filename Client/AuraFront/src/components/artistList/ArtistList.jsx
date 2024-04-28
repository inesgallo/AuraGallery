import './artistList.css'

const ArtistList = () => {
  return (
    <>

      
<h1 className="artist-list-title">Artistas</h1>
      <div className="artist-list-container">

        <div className="artist-list">

          <div className="artist-card">
            <div className="artist-image-container">
              <img src= {'/img-8/mike.jpg'} alt="mike" />
            </div>
            <div className="artist-info">
              <h3 className="artist-name">Mike Lambert</h3>
              <p className="artist-origin">Colombia</p>
            </div>
          </div>

          <div className="artist-card">
            <div className="artist-image-container">
              <img src= {'/img-8/eugenia.jpg'} alt="eugenia" />
            </div>
            <div className="artist-info">
              <h3 className="artist-name">Eugenia Cohen</h3>
              <p className="artist-origin">Amsterdam</p>
            </div>
          </div>

          <div className="artist-card">
            <div className="artist-image-container">
              <img src= {'/img-8/jenny.jpg'} alt="jenny" />
            </div>
            <div className="artist-info">
              <h3 className="artist-name">Jenny Hubbard</h3>
              <p className="artist-origin">Ireland</p>
            </div>
          </div>

          <div className="artist-card">
            <div className="artist-image-container">
              <img src= {'/img-8/elliot.jpg'} alt="elliot" />
            </div>
            <div className="artist-info">
              <h3 className="artist-name">Elliot Erwitt</h3>
              <p className="artist-origin">U.S</p>
            </div>
          </div>

          <div className="artist-card">
            <div className="artist-image-container">
              <img src= {'/img-8/manuela.jpg'} alt="manuela" />
            </div>
            <div className="artist-info">
              <h3 className="artist-name">Manuela Carrasco</h3>
              <p className="artist-origin">España</p>
            </div>
          </div>

          <div className="artist-card">
            <div className="artist-image-container">
              <img src= {'/img-8/james.jpg'} alt="james" />
            </div>
            <div className="artist-info">
              <h3 className="artist-name">James Holden</h3>
              <p className="artist-origin">Denmark</p>
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default ArtistList
