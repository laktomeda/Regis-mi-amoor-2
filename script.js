const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Felices 1 año y 3 meses, mi amor. Han pasado 455 días desde que me abrí a ti y te hice la pregunta que transformaría mi vida para siempre. Una pregunta que cambió mi forma de pensar, de actuar y de reaccionar.Palabras que, por sí solas, podrían parecer vacías, pero que nosotros llenamos de significado, creando el sentido más maravilloso y bello del mundo.Vibraciones vocales que alteraron nuestro destino, pronunciadas con valentía y sin temor. Sin duda, Dios es amor. Desde el primer momento en que vi tu mirada, sentí ese amor: un cálido abrazo, una grandeza inmensa, una montaña por escalar llena de misterios, cuevas y manantiales. Algo tan poderoso que transforma al más cobarde en un héroe valiente. El amor nos impulsa a ser mejores personas. Sin lugar a dudas, eso fue lo que experimenté cuando te besé por primera vez. Un beso tan especial y mágico, una experiencia única. Ese día fue como un Big Bang; de dos extraños que no se habían visto en mucho tiempo surgió un nuevo universo. Un espacio donde podemos compartir pensamientos, opiniones y pasados; un lugar de libertad y seguridad. A pesar de las supernovas que puedan surgir en nuestro camino, siempre encontraremos la paz. Por eso tiene tanto significado la frase "Dios es amor": de la nada pueden nacer universos donde coexistimos en armonía. Regi, gracias por seguir construyendo este universo mutuo conmigo. Eres una experiencia inigualable, y sin duda volvería a elegirte por toda la eternidad. Seguiría enamorándome de ti una y otra vez. Te amo muchísimo.";
  gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
