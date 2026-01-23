<img src="https://i.imgur.com/QQNh8SE.png" width="400px" height="200px">
<h2>A simple JS canvas "rendering" library.</h2>

<h1>Documentation</h1>

> [!TIP]
> **Getting Started** 👍

Use this script tag in your HTML file. <br>
`<script src="https://cdn.jsdelivr.net/gh/austone11-dot/austone-canvas@refs/heads/main/austonecanvas.js">`

Once put inside your HTML file, the library can be used in any other JS script referenced from the HTML file. 

* Create a canvas in your HTML file then put the id="austone_canvas".
* Failure on putting the id on the correct object type (anything other than a canvas) will not work!


> **General Documentation** 📃

Functions

- UpdateCanvas()
- ClearCanvas()
- Rect(posX, posY, sizeX, sizeY, id, color)
- Circle(posX, posY, radius, id, color)
- Line(startX, startY, endX, endY, thickness, id, color)
- SetBackgroundColor(color)

Information

A **posX** / **posY** variable is the postion of the object. <br>
A **sizeX** / **sizeY** variable is the postion of the object. <br>
**id** is the variable's id, used for later modifing the object. <br>
**color** can include but is not limited to be a HEX (#fff), RGB using rgb(r,g,b), or a color as a string ("blue") <br>
