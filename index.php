<?php
    // Incluir el pie de página
    include '/plantillas/head.php';
?>
  <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
    <nav
      class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
      id="ftco-navbar"
    >
      <div class="container">
        <a class="navbar-brand" href="index.html">sarkobyte</a>
        <button
          class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="oi oi-menu"></span> Menu
        </button>
        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav nav ml-auto">
            <li class="nav-item">
              <a href="/" class="nav-link"
                ><span>Inicio</span></a
              >
            </li>
            <li class="nav-item">
              <a href="/about.html" class="nav-link"
                ><span>Acerca de</span></a
              >
            </li>
            <li class="nav-item">
              <a href="/resume.html" class="nav-link"
                ><span>Experiencia</span></a
              >
            </li>
            <li class="nav-item">
              <a href="/services.html" class="nav-link"
                ><span>Servicios</span></a
              >
            </li>
            <li class="nav-item">
              <a href="/skills.html" class="nav-link"
                ><span>Habilidades</span></a
              >
            </li>
            <li class="nav-item">
              <a href="/fotos" class="nav-link"
                ><span>Fotografia</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section id="home-section" class="hero">
      <div class="home-slider owl-carousel">
        <div class="slider-item">
          <div class="overlay"></div>
          <div class="container">
            <div
              class="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div
                class="one-third js-fullheight order-md-last img"
                style="
                  background-image: url(http://res.cloudinary.com/dqmck2ujs/image/upload/v1589189203/h1vmvuq365qyfp3xloys.png);
                "
              >
                <div class="overlay"></div>
              </div>
              <div
                class="one-forth d-flex align-items-center ftco-animate"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <div class="text">
                  <span class="subheading">¡Hola!</span>
                  <h1 class="mb-4 mt-3">Yo soy <span>Miguel Mendoza</span></h1>
                  <h2 class="mb-4">Programador web</h2>
                  <p>
                    <a
                      href="https://wa.me/5215550320883"
                      class="btn btn-primary py-3 px-4"
                      >Contáctame</a
                    >
                    <a
                      href="/about.html"
                      class="btn btn-white btn-outline-white py-3 px-4"
                      >Conóceme</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="slider-item">
          <div class="overlay"></div>
          <div class="container">
            <div
              class="row d-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div
                class="one-third js-fullheight order-md-last img"
                style="
                  background-image: url(http://res.cloudinary.com/dqmck2ujs/image/upload/v1589189228/qrbsmuwkeeghpw6isk45.png);
                "
              >
                <div class="overlay"></div>
              </div>
              <div
                class="one-forth d-flex align-items-center ftco-animate"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <div class="text">
                  <h1 class="mb-4 mt-3">
                    Soy <span>Programdor web</span> de la Ciudad de México
                  </h1>
                  <p>
                    <a
                      href="https://wa.me/5215574768734"
                      class="btn btn-primary py-3 px-4"
                      >Contáctame</a
                    >
                    <a
                      href="/about.html"
                      class="btn btn-white btn-outline-white py-3 px-4"
                      >Conóceme</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="ftco-section ftco-no-pt ftco-no-pb ftco-counter img"
      id="section-counter"
    >
      <div class="container">
        <div class="row d-md-flex align-items-center">
          <div
            class="col-md d-flex justify-content-center counter-wrap ftco-animate"
          >
            <div class="block-18">
              <div class="text">
                <strong class="number" data-number="7638">0</strong>
                <span>Rebanadas de pizza</span>
              </div>
            </div>
          </div>
          <div
            class="col-md d-flex justify-content-center counter-wrap ftco-animate"
          >
            <div class="block-18">
              <div class="text">
                <strong class="number" data-number="45678">0</strong>
                <span>Kilometros en bicicleta</span>
              </div>
            </div>
          </div>
          <div
            class="col-md d-flex justify-content-center counter-wrap ftco-animate"
          >
            <div class="block-18">
              <div class="text">
                <strong class="number" data-number="6456">0</strong>
                <span>Tazas de cafée</span>
              </div>
            </div>
          </div>
          <div
            class="col-md d-flex justify-content-center counter-wrap ftco-animate"
          >
            <div class="block-18">
              <div class="text">
                <strong class="number" data-number="254">0</strong>
                <span>Clientes felices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="ftco-section ftco-hireme img margin-top"
      style="
        background-image: url(https://res.cloudinary.com/dqmck2ujs/image/upload/v1588488686/curriculum/49849180657_b634789da5_o_ywnldv.jpg);
      "
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7 ftco-animate text-center">
            <h2>Estoy <span>disponible </span> para trabajar</h2>
            <p>
              Lo bello del desierto es que en algún lugar esconde un pozo. "El
              principito" (1943), Antoine De Saint-Exupéry
            </p>
          </div>
        </div>
      </div>
    </section>
    <?php
    // Incluir el pie de página
    include '/plantillas/footer.php';
?>