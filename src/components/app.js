const header = document.getElementById("header");

header.innerHTML = `
      <div class="header">
        <img src="./src/assets/main.svg" class="none" id="navBar" />
        <div class="logo"></div>
        <button class="none changeColor">☀️</button>
      </div>

      <nav>
        <button onclick="pagina1()">Inicio</button>
        <ul>
          <li><button onclick="pagina2()">Eje1</button></li>
          <li><button onclick="pagina3()">Eje2</button></li>
          <li><button onclick="pagina4()">Eje3</button></li>
          <li><button onclick="pagina5()">Eje4</button></li>
          <li><button onclick="pagina6()">Eje5</button></li>
          <li><button class="changeColor" id="changeColor">☀️</button></li>
        </ul>
      </nav>
      <div class="nav" >
        <ul class="list">
          <li class="list__item">
            <div class="list__button">
              <img src="./src/assets/dashboard.svg" class="list__img" />
              <a onclick="pagina1()" class="nav__link">Inicio</a>
            </div>
          </li>

          <li class="list__item list__item--click">

            <div class="list__button list__button--click">
              <img src="./src/assets/Docs.svg" class="list__img" />
              <a href="#" class="nav__link">Ejercicios</a>
              <img src="./src/assets/arrow.svg" class="list__arrow" />
            </div>

            <ul class="list__show">
              <li class="list__inside">
                <a onclick="pagina2()" class="nav__link nav__link--inside">Ejercicio 1</a>
              </li>
              <li class="list__inside">
                <a onclick="pagina3()" class="nav__link nav__link--inside">Ejercicio 2</a>
              </li>
              <li class="list__inside">
                <a onclick="pagina4()" class="nav__link nav__link--inside">Ejercicio 3</a>
              </li>
              <li class="list__inside">
                <a onclick="pagina5()" class="nav__link nav__link--inside">Ejercicio 4</a>
              </li>
              <li class="list__inside">
                <a onclick="pagina6()" class="nav__link nav__link--inside">Ejercicio 5</a>
              </li>
            </ul>
          </li>

          <li class="list__item">
            <div class="list__button">
              <img src="./src/assets/message.svg" class="list__img" />
              <a href="#" class="nav__link">Contacto </a>
            </div>
          </li>
        </ul>
      </div>
`;

const main = document.getElementById("main");

const pagina1 = () => {
  main.innerHTML = `
  <section class="Inicio bounce-in-top">
        <p>
          ¡Bienvenido a LogicSolver! Nuestra herramienta te ayuda a resolver
          operaciones lógicas de manera rápida y precisa. Ideal para
          estudiantes, programadores y entusiastas de la lógica, ofrecemos una
          interfaz intuitiva para mejorar tus habilidades y enfrentar problemas
          complejos. ¡Explora la lógica con nosotros!
        </p>
        <div class="JS"></div>
      </section>
  `;
};

pagina1();

const pagina2 = () => {
  main.innerHTML = `
    <section class="bounce-in-top section">
        <h2>Factorial de un numero</h2>
        <div>
          <h3>Prueba</h3>
          <p>Ingresa un numero para saber su factorial</p>
          <input maxlength="11" value="" />
          <button class="btn-action">Calcular</button>
        </div>
      </section>
  `;
};
const pagina3 = () => {
  main.innerHTML = `
    <section class="bounce-in-top section">
        <h2>Mayor de un conjunto de arrays</h2>
        <div>
          <h3>Prueba</h3>
          <p>Quienes saber cual es el numero mayor de el arreglo?</p>
          <input maxlength='11' value=''/>
          <button class="btn-action">Calcular</button>
        </div>
      </section>
    `;
};
const pagina4 = () => {
  main.innerHTML = `
    <section class="bounce-in-top section">
        <h2>Ordenar un arreglo</h2>
        <div>
          <h3>Prueba</h3>
          <p>Identifica cual es el orden de una lista de numeros</p>
          <input maxlength='11' value=''/>
          <button class="btn-action">Calcular</button>
        </div>
      </section>
    `;
};
const pagina5 = () => {
  main.innerHTML = `
    <section class="bounce-in-top section">
        <h2>Filtrar</h2>
        <div>
          <h3>Prueba</h3>
          <p>
            Escoge un numero de 1 al 10 para ver los numeros que van despues del
            numero que colocaste
          </p>
          <input maxlength="2" value="" />
          <button class="btn-action">Calcular</button>
        </div>
    </section>
    `;
};
const pagina6 = () => {
  main.innerHTML = `
        <section class="bounce-in-top section">
      <h2>Suma</h2>
        <div>
          <h3>Prueba</h3>
          <p>
            ingresa numeros separados por comas para realizar una suma de todos
            estos
          </p>
          <input maxlength="11" value="" />
          <button class="btn-action">Calcular</button>
        </div>
</section>
    `;
};
