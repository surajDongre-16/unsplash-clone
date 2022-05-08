function navbar() {
    return`
    <div id="top">
    <i class="fa-brands fa-unsplash"></i>
            <input type="text" id="search-inner" class="search" placeholder="Search free high-resolution photos" size="115">
            
           <p>Advertise</p>                
           <p>Blog</p>
            
            <button id="nav-sub">Submit a photo</button>
            
            <div id="icons"> 
                <i class="fa-solid fa-bell"></i>
                <i class="fa-solid fa-user"></i>
                <i class="fa-solid fa-bars"></i>
            </div>
            
        </div>
        <div id="bottom">
            <div id="bot-left" class="left">
                <p>Editorial</p>
                <p>Following</p>
            </div>
            <div id="bot-right" class="right" style="border:none;">
                <p id="current events">Current Events</p>
                <p id="wallpapers">Wallpapers</p>
                <p id="3d-RENDERS">3D Renders</p>
                <p id="textures">Textures & Patterns</p>
                <p id="experimentals">Experimental</p>
                <p id="architecture">Architecture</p>
                <p id="nature">Nature</p>
                <p id="business">Business & Work</p>
                <p id="fashion">Fashion</p>
                <p id="film">Film</p>
                <p id="food">Food & Drink</p>
                <p id="health">Health & Wellness</p>
            </div>
        </div>
    ` 
}


export default navbar