document.addEventListener('DOMContentLoaded', function () {
    const headerHTML = `
        <header>
            <div class="contenedor">
                <h2 class="logotipo">CineManía</h2>
                <nav>
                    <a href="peliculas.html">Inicio</a>
                    <div class="generos">
                        <a href="#">Géneros</a>
                        <div class="genres-dropdown">
                            <div class="genres-columns">
                                <div class="column">
                                    <a href="genero_accion.html">Acción</a>
                                    <a href="genero_aventura.html">Aventura</a>
                                    <a href="genero_animacion.html">Animación</a>
                                    <a href="genero_ciencia_ficcion.html">Ciencia ficción</a>
                                    <a href="genero_crimen.html">Crimen</a>
                                    <a href="genero_drama.html">Drama</a>
                                </div>
                                <div class="column">
                                    <a href="genero_familia.html">Familia</a>
                                    <a href="genero_fantasia.html">Fantasía</a>
                                    <a href="genero_misterio.html">Misterio</a>
                                    <a href="genero_romance.html">Romance</a>
                                    <a href="genero_suspense.html">Suspense</a>
                                    <a href="genero_terror.html">Terror</a>
                                    <a href="comedia.html">comedia</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div class="search-container">
                    <button id="searchButton">Buscar</button>
                </div>
            </div>
        </header>
        <style>
            .genres-columns {
                display: flex;
                justify-content: space-between;
            }
            .column {
                width: 48%;
            }
            .genres-dropdown {
                display: none;
                position: absolute;
                background-color: var(--fondo);
                border: 1px solid var(--rojo);
                padding: 10px;
                z-index: 10;
                width: 250px;
            }
            .generos:hover .genres-dropdown {
                display: block;
            }
            .genres-dropdown a {
                display: block;
                color: #AAA;
                text-decoration: none;
                padding: 5px 0;
                transition: color 0.3s;
            }
            .genres-dropdown a:hover {
                color: #FFF;
            }
        </style>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Evento para el botón de búsqueda
    document.getElementById('searchButton').addEventListener('click', function() {
        // Redirigir a la página de resultados sin parámetros
        window.location.href = 'resultados.html';
    });
});
