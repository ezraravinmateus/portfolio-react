import "../components/style.css"
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";

function HomePage() 
{
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Portfolio</title>
                <link rel="stylesheet" href="./css/styles.css" />
                <script
                    src="https://kit.fontawesome.com/fe1f734412.js"
                    crossorigin="anonymous"
                ></script>
            </head>
            <body>
                <Navbar></Navbar>
                <Showcase></Showcase>
            </body>
        </html>
    )
}

export default HomePage;