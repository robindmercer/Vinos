require('dotenv').config();
const { Product } = require('../db')

async function loadProductos(){ 
 
Product.bulkCreate([
    {name:'Doña Paula Estate Pinot Noir', price: 1470.00, status:1 ,place: '1', categ: 1, summary:'Color rojo violeta de intensidad media baja. <br><br>Presenta intensos aromas a frambuesas, guindas y notas a tierra y mentol. <br><br>En boca es un vino de cuerpo medio con taninos firmes y buena acidez. De agradable persistencia.',producer: '1', alcohol:'13%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/55/thumb_54507_default_big.jpeg'},
    {name:'Banda de los Tres Sucios El Renegado Cabernet Sauvignon', price: 1835.00, status:1 ,place: '1', categ: 1, summary:'',producer: '2', alcohol:'13%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/60/thumb_59151_default_big.jpeg'},
    {name:'Desierto 25 Merlot', price: 1650.00, status:1 ,place: '3', categ: 2, summary:'No sueñes con la felicidad, haz feliz la realidad.',producer: '3', alcohol:'14.4%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/55/thumb_54170_default_big.jpeg'},
    {name:'Casa Boher Cabernet Franc', price: 2000.00, status:1 ,place: '1', categ: 1, summary:'A la vista se muestra como un vino joven de colores intensos y oscuros donde se destaca el rojo cereza. Es de aspecto límpido y brillante, con lágrimas bien definidas. <br><br>A la nariz presenta frutas rojas maduras, como ciruelas y guindas, suaves aromas de eucaliptus y toques mentolados. Ciertas notas minerales caracterizan este varietal que se fusionan con el café y vainilla. <br><br>En boca aparecen sabores a frutos silvestres, como arándanos, sumado a lo percibido en nariz en equilibrio con la madera de roble, consecuencia de su guarda.  De gran estructura y con taninos robustos; en equilibrio con su acidez natural lo hace muy persistente en boca.',producer: '4', alcohol:'13%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/56/thumb_55356_default_big.jpeg'},
    {name:'Desierto 25 Cabernet Sauvignon', price: 1650.00, status:1 ,place: '3', categ: 1, summary:'Vive el momento... lo demás no importa.',producer: '3', alcohol:'14.5%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/55/thumb_54168_default_big.jpeg'},
    {name:'Ala Colorada Ancellotta', price: 2850.00, status:1 ,place: '1', categ: 1, summary:'Color profundo, casi negruzco con tintes violáceos brillantes. <br><br>En primera nariz es balsámico y especiado. Se destacan las hierbas secas y pimientas con buen aporte frutal que brota luego de unos minutos en copa. Es muy original en su conjunto cuando suma los tonos del roble y las especias dulces. <br><br>En boca es brioso aunque a medida que gana el paladar se aprecia dócil y envolvente. De importante sabor frutal, llega a final de boca con taninos mullidos y redondos. Es un tinto de volumen con más de un dimensión de sabor.',producer: '5', alcohol:'13%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/56/thumb_55922_default_big.jpeg'},
    {name:'Finca Natalina Malbec', price: 426.00, status:1 ,place: '2', categ: 2, summary:'Vista: De color rojo profundo con reflejos violáceos, limpio y brillante, de buena intensidad. <br><br>Nariz: Frutal, ciruela, pasa de uva, fresco, también se perciben aromas secundarios de café, ahumado producto de su contacto con el roble francés. <br><br>Boca: Frutado, intenso con aromas a ciruela y guinda fresca, algo de trufa, se perciben aromas secundarios a café y algo de chocolate producto de su contacto con el roble.',producer: '6', alcohol:'13.5%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/65/thumb_64661_default_big.jpeg'},
    {name:'Alta Vista Estate Premium Chardonnay', price: 1490.00, status:1 ,place: '1', categ: 5, summary:'Color amarillo brillante con tonos verdosos, este Premium Chardonnay es un vino fresco y vivaz, con aromas a frutas tropicales y una delicada nota de pan tostado. <br><br>En boca es untuoso, redondo con mucho volumen y una larga presencia.',producer: '7', alcohol:'14.1%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/60/thumb_59207_default_big.jpeg'},
    {name:'Luna Benegas Cabernet Sauvignon', price: 1590.00, status:1 ,place: '1', categ: 1, summary:'<b>Color:</b> A la vista se presenta límpido y brillante. Al agitarlo se forman abundantes y finas lágrimas, algo perezosas al comienzo pero que luego se deslizan con soltura. Color rojo púrpura muy parejo, con algunos destellos violáceos que denotan su juventud. <br><br><b>Aroma:</b> La primer nariz es intensamente agradable, se mezclan ciertos matices minerales, notas florales y frutas rojas, apareciendo enseguida una típica pimienta y clavo de olor. Si lo esperamos lo suficiente asoman notas dulces y acarameladas. <br><br><b>Sabor:</b> La entrada en boca es amable, tiene un paladar refrescante y nuevamente resaltan las frutas rojas como el casís y se aprecian los taninos dulces. Tiene un final entre medio y largo, dejando una sensación que invita a una nueva copa.',producer: '8', alcohol:'13%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/54/thumb_53928_default_big.jpeg'},
    {name:'Collovati Reserva Malbec', price: 2856.00, status:1 ,place: '4', categ: 1, summary:'De color rojo intenso, con reflejos azules. <br><br>Aroma potente y complejo. Se revelan notas de frutos rojos maduros, con toques de vainilla y chocolates. Este vino destaca su terruño con sutiles aromas mentolados propios de la zona. <br><br>Sus taninos bien presentes le dar carácter y viveza. Su final graso y redondo hacen de él un vino amable.',producer: '9', alcohol:'13.6%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/56/thumb_55728_default_big.jpeg'},
    {name:'Collovati Reserva Malbec', price: 2856.00, status:1 ,place: '4', categ: 1, summary:'De color rojo intenso, con reflejos azules. <br><br>Aroma potente y complejo. Se revelan notas de frutos rojos maduros, con toques de vainilla y chocolates. Este vino destaca su terruño con sutiles aromas mentolados propios de la zona. <br><br>Sus taninos bien presentes le dar carácter y viveza. Su final graso y redondo hacen de él un vino amable.',producer: '9', alcohol:'13.6%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/56/thumb_55728_default_big.jpeg'},
    {name:'Casa Boher Malbec', price: 2000.00, status:1 ,place: '1', categ: 1, summary:'<b>Vista:</b> A la vista se muestra como un vino joven de colores intensos y oscuros donde se destaca el rojo cereza. Es un vino de aspecto límpido y brillante, con lagrimas bien definidas. <br><br><b>Nariz:</b> A la nariz presenta frutas secas como pasas de uva y ciruelas y toques de frutas rojas como guinda y cereza. También percibimos café, vainilla y toques de cuero fresco. <br><br><b>Boca:</b> En boca aparecen los sabores a mermelada de ciruela, dulce de guinda más lo percibido en nariz. De gran estructura polifenólica y con taninos dulces; su riqueza alcohólica en equilibrio con su acidez lo hace muy persistente en boca.',producer: '4', alcohol:'14.3%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/56/thumb_55353_default_big.jpeg'},
    {name:'La Mascota Malbec', price: 2009.00, status:1 ,place: '1', categ: 1, summary:'Color rojo púrpura intenso con tonalidades rubí. <br><br>Despliega aromas a frutas negras, mermelada y vainilla, con un sutil toque de regaliz. <br><br>De entrada dulce en boca, con taninos intensos y un final placentero y persistente.',producer: '10', alcohol:'14%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/55/thumb_54921_default_big.jpeg'},
    {name:'Malamado Viognier', price: 1915.00, status:1 ,place: '1', categ: 6, summary:'<b>Color:</b> Amarillo dorado, sedoso, concentrado y con generosas lágrimas. <br><br><b>Aroma:</b> Bouquet bien desarrollado de flores, frutas bien maduras, frutas secas y compota. <br><br><b>Sabor:</b> Entrada untuosa, jugoso desarrollo en el medio de la boca, largo y complejo final.',producer: '11', alcohol:'19.5%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/54/thumb_53764_default_big.jpeg'},
    {name:'Don David Reserva Cabernet Sauvignon', price: 1673.00, status:1 ,place: '5', categ: 1, summary:'Rojo rubí con muy leves notas tejas. Profundo, oscuro. Lágrimas coloreadas formadas en la copa que marcan una muy buena estructura. <br><br>Especiado, se destaca la pimienta y pimientos marrones. Humo, roble, algo de tabaco. Persistente. Característico cabernet de los valles. <br><br>Taninos de gran envergadura, maduros. Armónico con percepción de frutas negras y chocolate. Vino de persistencia larga y elegante.',producer: '12', alcohol:'14%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/54/thumb_53817_default_big.jpeg'},
    {name:'Navarro Correas Colección Privada Malbec', price: 1146.00, status:1 ,place: '1', categ: 1, summary:'Atractivos tonos violáceos. <br><br>De aromas frutales y florales que recuerdan a violetas. <br><br>Sabores a frutos rojos como guinda, mora y ciruela acompañados por notas de vainilla, chocolate y ahumados. Sus taninos son suaves lo que lo hacen un vino redondo y de cuerpo medio.',producer: '13', alcohol:'13.9%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/64/thumb_63492_default_big.jpeg'},
    {name:'Punta de Flechas Corte', price: 2600.00, status:1 ,place: '1', categ: 4, summary:'Vino equilibrado por definición, con una paleta de aromas francos, dominados por los frutos rojos y negros, donde además conviven trazos florales, toques especiados y una punta balsámica. <br><br>Su aromática más bien compleja, está redondeada por notas propias de su crianza breve en roble, que revela aromas tostados y aquellos que recuerdan al café. <br><br>Al paladar se presenta con buen caudal, con un avance donde revela la sucrosidad propia del Malbec y el tanino levemente dulzón tan típico de la variedad, pero con algo de músculo por el aporte de la "tríada bordolesa". El resultado es un vino con carácter y elegancia, pero sobre todas las cosas, muy bebible.',producer: '14', alcohol:'13%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/63/thumb_62629_default_big.jpeg'},
    {name:'La Vuelta Cabernet Sauvignon', price: 740.00, status:1 ,place: '1', categ: 1, summary:'Rojo rubí, con reflejos ciruela. <br><br>Los tenues aromas que fluyen en la nariz recuerdan a cuero y ahumados, en un grato marco mentolado. <br><br>Hay frescura en este tinto de fluidez asombrosa, cuando llega al paladar. Un final de boca largo invoca el muy buen equilibrio conseguido entre acidez y taninos.',producer: '15', alcohol:'13.7%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/57/thumb_56661_default_big.jpeg'},
    {name:'Emilia Nieto Senetiner Cabernet Sauvignon', price: 790.00, status:1 ,place: '1', categ: 1, summary:'La presencia del Cabernet Sauvignon se manifiesta por su color rojo rubí intenso, aromas de especias, del tipo pimienta blanca, combinadas con notas a frutas rojas. <br><br>En boca presenta un muy buen balance de acidez-tanicidad.',producer: '16', alcohol:'13%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/63/thumb_62385_default_big.jpeg'},
    {name:'La Poderosa Cabernet Franc Merlot', price: 870.00, status:1 ,place: '6', categ: 1, summary:'En nariz premia con notas de pimiento asado al frente, acompañadas por un buen colchón de frutas rojas y negras. <br><br>La madera hace su parte, con los característicos trazos de vainilla, tabaco y un sutil tostado. <br><br>En boca, es un vino de cuerpo medio, con taninos levemente dulzones que le otorgan un plazo fluido. Al avanzar por el paladar libera una carga aromática bastante intensa, con más de esa fruta percibida al inicio, para luego cerrar con un final de persistencia media-larga que deja un buen recuerdo en boca.',producer: '17', alcohol:'13%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/53/thumb_52733_default_big.jpeg'},
    {name:'Doña Paula Estate Cabernet Sauvignon', price: 1470.00, status:1 ,place: '1', categ: 1, summary:'Este Cabernet Sauvignon presenta un profundo color rojo rubí. <br><br>A la nariz es intenso y complejo en donde sobresalen notas a grosellas, mora, grafito y menta, que se entremezclan armoniosamente con notas de chocolate y roble tostado. <br><br>En el paladar es un vino concentrado, equilibrado, de taninos maduros y voluminosos, que ofrecen un largo y persistente final que recuerdan su paso por la madera.',producer: '1', alcohol:'13%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/55/thumb_54503_default_big.jpeg'},
    {name:'DV Catena Cabernet Malbec', price: 2610.00, status:1 ,place: '1', categ: 1, summary:'DV Catena Cabernet Sauvignon-Malbec es un vino elegante y complejo, de color rojo rubi con reflejos violetas. <br><br>A la nariz, intenso y concentrado, presenta notas de especias aportadas por el Cabernet Sauvignon del viñedo La Pirámide, y notas de moras maduras y ciruelas, características del Malbec del viñedo Angélica, acompañadas por vainilla, tabaco y licor aportadas por la crianza en roble. <br><br>En boca, de impacto dulce y gran complejidad, con taninos integrados y redondos, de final largo y persistente.',producer: '18', alcohol:'14%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/53/thumb_52791_default_big.jpeg'},
    {name:'Humberto Canale Estate Malbec', price: 1650.00, status:1 ,place: '7', categ: 1, summary:'Una expresión pura del "Terroir" patagónico y del Malbec argentino. <br><br>Un estilo refinado y complejo tanto en la nariz como en la boca. Su justo paso por roble le otorga una dimensión extra que lo convierte en un vino irresistible. <br><br>Un vino de gran cuerpo y estructura, color rojo rubi intenso, con sorprendentes aromas a frutas rojas, eucaliptus, especias y pimientos negros. Luego de un año en botella se vuelve untuoso, intenso, concentrado.',producer: '19', alcohol:'13.7%',stock:40, minimo:20,descuento :  0, image:'https://www.espaciovino.com.ar/media/default/0001/55/thumb_54178_default_big.jpeg'},
    {name:'Casa Boher Cabernet Sauvignon', price: 2000.00, status:1 ,place: '1', categ: 1, summary:'<b>Vista:</b> A la vista resaltan los colores violáceos sobre un rojo granate fuerte. <br><br><b>Nariz:</b> Aromas delicados con leve presencia de pimienta y eucalipto, buena intensidad de frutas rojas tales como el cassis y guindas y frutales como ciruelas. <br><br><b>Boca:</b> En boca se percibe su gran cuerpo y estructura, con taninos dulces bien marcados.',producer: '4', alcohol:'14%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/56/thumb_55352_default_big.jpeg'},
    {name:'Sottano Malbec', price: 1035.00, status:1 ,place: '1', categ: 1, summary:'A la vista se aprecia un color rojo intenso, brillante con matices violetas. <br><br>Presenta aromas a frutos rojos maduros como ciruelas y frambuesas, acomplejadas por el delicado chocolate y la vainilla aportados por su paso en madera. <br><br>De buena estructura taninos aterciopelados y elegantes le dan un largo final en boca.',producer: '20', alcohol:'14.5%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/57/thumb_56616_default_big.jpeg'},
    {name:'Iscay Malbec Cabernet Franc', price: 20514.00, status:1 ,place: '1', categ: 1, summary:'El Malbec entrega su color rojo violáceo profundo con aromas de violetas, frutas rojas maduras, una leve nota especiada y taninos generosos. <br><br>El Cabernet Franc hace su aporte de frutas negras, un toque balsámico y taninos que construyen el medio de boca. <br><br>Una perfecta combinación que da como resultado un vino sabroso, de gran concentración, elegancia, complejidad y final caudaloso.',producer: '21', alcohol:'13%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/55/thumb_54101_default_big.jpeg'},
    {name:'Kaiken Estate Malbec', price: 1250.00, status:1 ,place: '1', categ: 1, summary:'Presenta un color rojo intenso con matices púrpura, con aromas florales, notas de frutos rojos maduros y elegantes toques de especias que aumentan su complejidad, todo en un armonioso balance con la madera. <br><br>En boca es suave y sedoso, pero la potencia de la fruta se siente desde un principio, combinado perfectamente con la madera.  Este vino posee una estructura única, debido a la madurez y suavidad de sus taninos, lo que además le entrega un final de boca muy persistente.',producer: '22', alcohol:'14.5%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/61/thumb_60122_default_big.jpeg'},
    {name:'Lamadrid Malbec', price: 1387.00, status:1 ,place: '1', categ: 1, summary:'De color rojo rubí intenso. <br><br>En nariz presenta aromas especiados junto con clavo de olor y canela combinados con frutas sobre maduras. <br><br>En boca se encuentran taninos dulces y aterciopelados que se presentan equilibrados con la acidez.',producer: '23', alcohol:'13%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/67/thumb_66280_default_big.jpeg'},
    {name:'Amauta Corte IV Innovación Blend', price: 2500.00, status:1 ,place: '5', categ: 3, summary:'<b>Color:</b> Atractivo y elegante rojo rubí, con tonalidades violáceas. <br><br><b>Nariz:</b> Frutos rojos maduros, con segunda nota a especies, cuero, tostado y ahumado por el roble. <br><br><b>Boca:</b> De entrada intensa, sensación dulce propia de la variedad, con acidez equilibrada.',producer: '24', alcohol:'14.5%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/54/thumb_53675_default_big.jpeg'},
    {name:'Fabre Montmayou Reserva Merlot', price: 1552.00, status:1 ,place: '1', categ: 1, summary:'Vino de color rojo cereza profundo. <br><br>En la nariz seducen aromas de frutas de bosque, vainilla y café. <br><br>En boca es un vino complejo y sedoso, se puede apreciar esa riqueza frutal y una agradable perseverancia.',producer: '25', alcohol:'13%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/54/thumb_53880_default_big.jpeg'},
    {name:'Luigi Bosca Chardonnay', price: 2050.00, status:1 ,place: '1', categ: 5, summary:'De color amarillo dorado, con aromas de ananá, mango y melón. Notas de miel y pan tostado. Sutil aporte de la vainilla proveniente de su paso por roble francés. <br><br>Vino de sensaciones dulces. Opulento y rotundo.',producer: '26', alcohol:'13%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/54/thumb_53476_default_big.jpeg'},
    {name:'Piedra Negra Reserve Malbec', price: 1960.00, status:1 ,place: '1', categ: 1, summary:'Color rojo rubí con reflejos cereza. <br><br>Complejo, con una mezcla de bayas rojas y de los aromas picantes de escarpia y pimienta negra. Algunas notas delicadas de chocolate y de café que provienen de su paso en roble. <br><br>Un vino estructurado y complejo, con taninos agradables que aportan dulzura y un final largo. Las especias se combinan con notas tostadas y con el fruto rojo característico del Malbec.',producer: '27', alcohol:'13%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/55/thumb_54434_default_big.jpeg'},
    {name:'Mendel Malbec', price: 3300.00, status:1 ,place: '1', categ: 1, summary:'<b>Color:</b> Rojo-violáceo muy vivaz. <br><br><b>Nariz:</b> Fresco e intenso. Predominan aromas de violetas, cerezas y ciruelas. El regaliz está presente dando complejidad. Aparecen muy integradas con la fruta notas de vainilla, tostados y ahumados que denotan su pasaje por barricas de roble francés, durante doce meses. <br><br><b>Boca:</b> Vino de gran amabilidad en boca. Los taninos maduros y suaves le dan vivacidad en boca pero a su vez son redondos. Su acidez le otorga frescura, asegurando una muy buena longevidad y potencial de crianza en la botella. Los aromas en boca son muy intensos y persistentes. Por lo tanto, en boca se expresa como un conjunto largo, armónico, elegante y suave.',producer: '28', alcohol:'13.9%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/56/thumb_55097_default_big.jpeg'},
    {name:'Antigal 1 Uno Malbec', price: 1350.00, status:1 ,place: '1', categ: 1, summary:'<b>Color:</b> Color rojo muy intenso con destellos violáceos típicos de la variedad. <br><br><b>Nariz:</b> En nariz posee una intensidad de fruta muy importante acompañada de notas de roble dado su paso por barricas nuevas de roble francés (75%) y americano (25%) durante 13 meses. <br><br><b>Boca:</b> En boca es suave y concentrado, características típicas de un Malbec Argentino. Equilibrado, madera suave y elegante..',producer: '29', alcohol:'13.8%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/66/thumb_65049_default_big.jpeg'},
    {name:'Andeluna 1300 Malbec', price: 1005.00, status:1 ,place: '1', categ: 1, summary:'Gran intensidad y tintes violáceos. <br><br>De aromas a frutas y  ores diversas, con notas de dulce de leche, vainilla y chocolate provenientes de su paso por barricas de roble. <br><br>Un vino que ingresa en boca con la suavidad característica del varietal. Equilibrado, de gran estructura y con presencia de taninos suaves.',producer: '30', alcohol:'14.5%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/61/thumb_60473_default_big.jpeg'},
    {name:'Fabre Montmayou Reserva Malbec', price: 1552.00, status:1 ,place: '1', categ: 1, summary:'De color rojo oscuro con reflejos violáceos muy marcados. <br><br>Su aroma es intenso, donde los frutos rojos maduros como las guindas y las notas especiadas forman junto a la vainilla y el chocolate de la barrica un complejo equilibrio. <br><br>Su boca es voluminosa. Presenta taninos maduros y dulces con un estilo moderno.',producer: '25', alcohol:'13%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/53/thumb_52739_default_big.jpeg'},
    {name:'Humberto Canale Gran Reserva Pinot Noir', price: 3600.00, status:2 ,place: '7', categ: 1, summary:'En el oasis patagónico del Alto Valle del Rio Negro, este Pinot Noir, que hoy representa lo mejor de la variedad en nuestro país. <br><br>Maduro, intenso y elegante, pleno de aromas, enmarcados en un sabor opulento y untuoso. Fue el primer Pinot noir elaborado en Barricas en Patagonia en 1999. <br><br>Intenso color rojo rubi, aromas frutados y especiados, en la boca se destaca su fineza de cuerpo medio, vino muy suave y aterciopelado, con notas de vainilla, tabaco y nuez. Largo final de boca.',producer: '19', alcohol:'14%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/63/thumb_62511_default_big.jpeg'},
    {name:'Saint Felicien Syrah', price: 2150.00, status:1 ,place: '1', categ: 2, summary:'Saint Felicien Syrah, es un vino elegante y complejo, de color violeta, oscuro y profundo. <br><br>A la nariz, intenso y concentrado, presenta aromas de moras maduras, ciruelas y cuero, con notas ligeras de vainilla, tabaco y licor. <br><br>En boca, de impacto dulce y gran complejidad, es untuoso, con taninos suaves y redondos que le otorgan una gran armonía final.',producer: '18', alcohol:'13.7%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/54/thumb_53332_default_big.jpeg'},
    {name:'La Vuelta Malbec', price: 740.00, status:1 ,place: '1', categ: 2, summary:'Rojo púrpura, con matices granate; típicos tonos de la variedad. <br><br>Es un tinto con pronunciado acento de fruta roja fresca, que además entrega sutiles vahos a mermelada de cereza y algún matiz de pimienta. <br><br>Los taninos de discreto dulzor lo convierten en un vino consistente y agradable, con un muy buen balance entre taninos, fruta y alcohol.',producer: '15', alcohol:'13.5%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/62/thumb_61995_default_big.jpeg'},
    {name:'Famiglia Bianchi Cabernet Sauvignon', price: 1465.00, status:1 ,place: '1', categ: 1, summary:'Vino de color rojo rubí intenso y muy buena lágrima. <br><br>Vino de una elegancia y personalidad destacada, sus aromas especiados seducen por su complejidad e intensidad. Pimienta negra, regaliz, cedro, granos de café tostados y dejos de menta fresca se arremolinan alrededor de frutadas sensaciones de cassis, moras y frutos silvestres. <br><br>En boca se expresa ampliamente con gran persistencia de aromas y una notable y armoniosa estructura que acentúan su linaje real.',producer: '31', alcohol:'14.2%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/53/thumb_52940_default_big.jpeg'},
    {name:'Ique Malbec', price: 820.00, status:1 ,place: '1', categ: 1, summary:'Intenso color rojo rubí con notas de color violeta, posee aromas afrutados que recuerdan frutas rojas y pimienta blanca. <br><br>Estructura firme, taninos suaves y exuberantes, final satisfactorio.',producer: '32', alcohol:'14%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/56/thumb_55449_default_big.jpeg'},
    {name:'Trapiche Reserva Malbec', price: 1238.00, status:1 ,place: '1', categ: 2, summary:'Intenso color rojo violáceo. <br><br>De aromas dulces a moras y ciruelas en nariz, se perciben notas ahumadas con una elegante presencia de vainilla. <br><br>De textura aterciopelada y final en boca amable y persistente.',producer: '21', alcohol:'13%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/59/thumb_58137_default_big.jpeg'},
    {name:'Riglos Quinto Malbec', price: 1740.00, status:1 ,place: '1', categ: 1, summary:'De color rojo profundo con tonalidades aceradas, fue criado durante 6 meses en barricas de roble francés de segundo uso. <br><br>Presenta aromas a frutos rojos, típicos del Malbec, y a hierbas y especias herencia del Cabernet Franc. <br><br>En boca se presenta redondo, jugoso con alguna reminiscencia mineral a grafito y un largo final.',producer: '33', alcohol:'13%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/57/thumb_56959_default_big.jpeg'},
    {name:'Mariflor Malbec', price: 3110.00, status:1 ,place: '1', categ: 1, summary:'<b>Color:</b> Rubí, denso. <br><br><b>Nariz:</b> Profunda, frutos negros bien maduros (moras, arándano) y floral con notas de pimienta, con una linda nota de regaliz (zan a la violeta) y pequeños toques empyreumatiques que se desprenden con la aireación (pan tostado). <br><br><b>Boca:</b> Amplia, concentrado pero sin exceso, con taninos aterciopelados que se manifiestan en el final. La persistencia es larga, sobre los frutos maduros y el regaliz, destacada por una discreta suavidad que no oculta de ningún modo la frescura. Un vino complejo y seductor.',producer: '34', alcohol:'13%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/56/thumb_55184_default_big.jpeg'},
    {name:'Enrique Foster Reserva Malbec', price: 1666.00, status:1 ,place: '1', categ: 1, summary:'Este es un vino amplio, de color violeta oscuro, con aromas a fruta roja oscura, estructura firme, con cuerpo, y final largo.',producer: '32', alcohol:'14.7%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/65/thumb_64256_default_big.jpeg'},
    {name:'Santa Julia Cabernet Sauvignon', price: 650.00, status:1 ,place: '1', categ: 15, summary:'<b>Color:</b> Rojo rubí con visos púrpura, de buena intensidad. <br><br><b>Aroma:</b> Nariz de corazón de cerezas negras, grosellas, moras, guindas y especias. <br><br><b>Sabor:</b> Boca llena, cuerpo lleno. Equilibrado y con taninos finos. Final amplio y persistente.',producer: '35', alcohol:'14%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/66/thumb_65730_default_big.jpeg'},
    {name:'Las Perdices Syrah Viognier', price: 1480.00, status:1 ,place: '1', categ: 14, summary:'Color rojo rubí .Aromas complejos de cerezas y arándanos, dominados luego con la fragancia sutil del damasco y el durazno blanco. <br><br>En boca  despliega todo su potencial, suave, redondo, cárnico y sabroso. Taninos maduros bien logrados.  Final largo y refinado. <br><br>Este vino muestra los caracteres típicos de estas dos variedades de uvas, co-fermentadas para lograr su sinergia y otorgar complejidad.',producer: '5', alcohol:'14%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/54/thumb_53735_default_big.jpeg'},
    {name:'Finca Natalina Merlot', price: 426.00, status:1 ,place: '2', categ: 13, summary:'Vista: De color rojo intenso con reflejos violáceos, limpio y brillante. <br><br>Nariz: Frutal, mineral, denota la tipicidad de la uva Merlot. Aromas a grosellas, guindas, con algo de sotobosque, aromas secundarios humo, chocolate y tabaco producto de su contacto con roble. <br><br>Boca: De buena entrada, con taninos redondos persistentes no molestos y de un final mas que agradable.',producer: '6', alcohol:'13.5%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/55/thumb_54451_default_big.jpeg'},
    {name:'Alamos Malbec', price: 1450.00, status:1 ,place: '1', categ: 1, summary:'Presenta un profundo color púrpura con reflejos violeta. <br><br>Su aroma remite a intensos frutos negros con ligeras notas florales y de tostado. <br><br>En boca es un vino de gran concentración, con pronunciados sabores a cassis y frambuesas y un leve dejo a chocolate y especias dulces provenientes del añejamiento en roble. El final es largo, con taninos maduros y sedosos.',producer: '36', alcohol:'13.5%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/63/thumb_62734_default_big.jpeg'},
    {name:'Don David Chardonnay', price: 1146.00, status:1 ,place: '5', categ: 5, summary:'<b>Color:</b> Suave dorado, muy brillante con tonos verdosos. Marcadas lágrimas en la copa. <br><br><b>Aroma:</b> Delicado aroma varietal, con notas a manzanas, ananá, frutos tropicales, miel y notas sutiles de vainilla. <br><br><b>Sabor:</b> Equilibrada acidez, paladar suave entregado por la fermentación maloláctica. Frutado, pera, ananá, nueces y percepciones lácticas.',producer: '12', alcohol:'13%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/54/thumb_53807_default_big.jpeg'},
    {name:'Kaiken Ultra Malbec', price: 2550.00, status:1 ,place: '1', categ: 1, summary:'De color rojo violáceo, en nariz muestra notas minerales y florales, con toques especiados que lo hacen aumentar su complejidad, todo ensamblado con las elegantes notas de barrica francesa. <br><br>En la boca es de gran estructura y potencia, con taninos que a pesar de ser suaves están muy presentes. Tiene un gran equilibrio y un final muy largo, donde aparecen notas a frutos rojos y flores.',producer: '22', alcohol:'15.2%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/56/thumb_55381_default_big.jpeg'},
    {name:'Intimo Malbec', price: 1180.00, status:1 ,place: '7', categ: 1, summary:'De color rojo violáceo. <br><br>En la nariz se perciben frutos rojos con notas especiadas y presencia de aguaribay (pimienta rosa). <br><br>En la boca es franco, típico, de buena armonía y balance. El pasaje por roble le aporta notas de vainilla y coco.',producer: '19', alcohol:'13.6%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/55/thumb_54196_default_big.jpeg'},
    {name:'La Poderosa Malbec', price: 870.00, status:1 ,place: '6', categ: 1, summary:'La poderosa Malbec es un vino con aromas a ciruela y a frutas. <br><br>En boca es untuoso, aterciopelada que nos invita a seguir tomando. <br><br>Este vino encarna el espíritu de aventura y exploración.',producer: '17', alcohol:'13%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/57/thumb_56275_default_big.jpeg'},
    {name:'Doña Paula Malbec Rosé', price: 980.00, status:1 ,place: '1', categ: 7, summary:'Este vino tiene un color rosa pálido. <br><br>En nariz tiene profundos aromas a violetas y a moras procedentes de la cosecha temprana. <br><br>En boca es un vino muy fresco, debido a su alta acidez. Presenta un acabado largo, equilibrado y suave.',producer: '1', alcohol:'12,30%',stock:40, minimo:20,descuento : 10, image:'https://www.espaciovino.com.ar/media/default/0001/60/thumb_59458_default_big.jpeg'},
    {name:'Lagarde Goes Pink Rosé', price: 1750.00, status:1 ,place: '1', categ: 10, summary:'COLOR: De color rosado, con reflejos rubí. <br><br>AROMA: Aromas delicados y frescos. Hay notas de frutos como la guinda, la cereza y la frambuesa. <br><br>SABOR: La cosecha 2017 es la culminación de nuestra historia siendo un ejemplo de un vino puro, fresco balanceado perfecto para maridar con verano, amigos y el mar.',producer: '37', alcohol:'12,50%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/60/thumb_59304_default_big.jpeg'},
    {name:'Susana Balbo Signature Rose', price: 5200.00, status:1 ,place: '1', categ: 12, summary:'Color: Rosa pálido. <br><br>Aroma: Frutos rojos combinados con notas florales y citricas. <br><br>Sabor: Buen volumen y paladar franco. Paso graso con tensión, sabores suaves y fugaces, pero persistentes.',producer: '38', alcohol:'12,10%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/60/thumb_59184_default_big.jpeg'},
    {name:'Funckenhausen Dry Rosé', price: 1200.00, status:1 ,place: '1', categ: 7, summary:'Es un vino que entra por los ojos, porque más allá de su etiqueta llamativa y nombre difícil de pronunciar, su tamaño (botella de litro transparente) permite lucir más su aspecto rosado suave. <br><br>Blend de Malbec, Cabernet Sauvignon y Cabernet Franc, de aromas simples y directos, y paladar algo vinoso pero con paso equilibrado y con buena frescura.',producer: '39', alcohol:'13%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/60/thumb_59180_default_big.jpeg'},
    {name:'Piattelli Reserve Rosé de Malbec', price: 1491.00, status:1 ,place: '1', categ: 7, summary:'Nuestro Premium Rosé de Malbec es el suave y refrescante retoño de nuestro exquisito Premium Malbec, en el que confluyen la elegancia y la diversión. Elaborado para consumir no sólo en el verano, ya que cuenta con la presencia del refrescante Torrontés, que lo transforma en un compañero interesante y estimulante para una amplia variedad de comidas. <br><br>Cuando creamos el Premium Rosé, nuestro objetivo era lograr la combinación perfecta entre el cuerpo tánico de nuestro delicioso Malbec y las características suaves y juveniles de nuestro refrescante Torrontés.',producer: '40', alcohol:'14%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/56/thumb_55419_default_big.jpeg'},
    {name:'Finca Natalina Rosé de Merlot', price: 426.00, status:1 ,place: '2', categ: 11, summary:'Vista: De color frutillas maduras con reflejos cereza muy vivaz, limpio y brillante. <br><br>Nariz: Frutal, mineral, denota la tipicidad de la uva Merlot. Aromas a fruta roja fresca, mica, algo iodado. <br><br>Boca: De buena entrada, persistente, agradable, con una acidez equilibrada y una frescura muy particular.',producer: '6', alcohol:'13.4%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/55/thumb_54461_default_big.jpeg'},
    {name:'Cuvelier Los Andes Rosé Malbec', price: 1661.00, status:1 ,place: '1', categ: 7, summary:'A la vista se presenta con un tenue y seductor color rosa, y leve tinte salmón. <br><br>En nariz, explosión de frutas, confituras y notas de rosas. Muy atractivo. <br><br>En boca, vuelven las notas de los aromas acompañados de una crocante y fresca acidez natural, que lo hacen muy jugoso y fácil de tomar, con un final largo y muy agradable.',producer: '41', alcohol:'12.5%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/60/thumb_59251_default_big.jpeg'},
    {name:'Pampa Mía Cabernet Franc Rosé', price: 1100.00, status:1 ,place: '3', categ: 8, summary:'Rosado pálido con tonos salmón. En nariz se perciben aromas que evocan a cerezas y granada. En boca es fluido, con un perfil de rosado amable pero envolvente, prolongado, con carácter y personalidad propios. Contenido, 500 ml.',producer: '3', alcohol:'14.2%',stock:40, minimo:20,descuento : 0, image:'https://www.espaciovino.com.ar/media/default/0001/55/thumb_54185_default_big.jpeg'},
           
]).then(() => console.log("Productos han sido grabados"));

return "ok";
}

module.exports  = loadProductos;
