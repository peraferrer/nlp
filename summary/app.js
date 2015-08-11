/**
 * Created by german.peraferrer on 8/10/2015.
 */

var SummaryTool = require('node-summary');

var title = "Las bonitas historias detrás de ‘Lava’, el cortometraje de Pixar";
var content = "'Lava' se construyó gracias a la sensibilidad y creatividad de James Ford Murphy, y detrás de esto encontramos varias historias que lo inspiraron a realizar este proyecto. Cultura, historias personales y mucho amor. James Ford Murphy es el director del bellísimo cortometraje proyectado junto a 'Inside Out'. Así, durante el estreno de la también bella película dirigida por Pete Docter, Ronaldo Del Carmen le abría telón 'Lava'. Lo que vimos en la pantalla grande fue tan lindo como genial, cursi y creador de una atmósfera de amor, esperanza, espera y recompensa. Y es el mismo director que ha contado la historia detrás de 'Lava' y sobre los dos volcanes protagonistas de su corto: Uku y Lele.Como podemos saber, crear una película no es cosa de un momento, y mucho menos sólo aterrizar una idea, sino proyectos que se van tejiendo poco a poco, que toman, incluso, años y mucha inspiración, tanto como mucha sensibilidad. Así, 'Lava' encierra varias historias, todas tan bonitas como el mismo cortometraje animado. En primer lugar, James Ford Murphy es un gran admirador y visitante de las islas de Hawai. Dijo en entrevista que durante su luna de miel en 1989 sintió una gran atracción por los paisajes y la cultura hawaiana; luego, en 2011 volvió de vacaciones y conoció sobre la existencia de un volcán submarino llamado Lo'ihi. Así que, cuando llegó el momento de presentar el proyecto que acompañaría a 'Inside Out', como ya es buena costumbre para Pixar, pudo presentar a 'Lava' como la opción a realizar. Antes de esto, la hermana de James Ford Murphy se casó a los 43 años y dice él mismo que cuando la vio en el altar tuvo una epifanía sobre lo que hacen todos los humanos, esperar... esperar a que llegue el amor, a que sea el momento correcto para ello aunque pasen muchos años. Entonces unió lo que sintió por su hermana y el amor que tenía por la cultura de Hawai. Juntas estas inspiraciones le dieron el material perfecto para presentar como posible proyecto, el cual, como sabemos, fue aprobado.";

SummaryTool.summarize(title, content, function(err, summary) {
    if(err) console.log("Something went wrong man!");

    console.log(summary);

    console.log("Original Length " + (title.length + content.length));
    console.log("Summary Length " + summary.length);
    console.log("Summary Ratio: " + (100 - (100 * (summary.length / (title.length + content.length)))));
});