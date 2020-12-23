-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-12-2020 a las 21:44:45
-- Versión del servidor: 10.1.39-MariaDB
-- Versión de PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `club_leo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_donacion`
--

CREATE TABLE `categoria_donacion` (
  `id_categoria` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `categoria_donacion`
--

INSERT INTO `categoria_donacion` (`id_categoria`, `descripcion`) VALUES
(1, 'cabello largo'),
(2, 'juguetes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_galeria`
--

CREATE TABLE `categoria_galeria` (
  `id_cg` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `categoria_galeria`
--

INSERT INTO `categoria_galeria` (`id_cg`, `descripcion`) VALUES
(8, 'fotos de recaudaciones'),
(9, 'fotos de nosotros'),
(10, 'fotos de obras');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_obra`
--

CREATE TABLE `categoria_obra` (
  `id_co` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `categoria_obra`
--

INSERT INTO `categoria_obra` (`id_co`, `descripcion`) VALUES
(1, 'obra'),
(2, 'capacitaciones'),
(3, 'reuniones de jóvenes'),
(39, 'bbbb');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clase_contacto`
--

CREATE TABLE `clase_contacto` (
  `id_clase` int(11) NOT NULL,
  `clase` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `clase_contacto`
--

INSERT INTO `clase_contacto` (`id_clase`, `clase`) VALUES
(1, 'fa fa-facebook'),
(2, 'fa fa-instagram'),
(3, 'fa fa-youtube'),
(4, 'fa fa-twitter');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE `contacto` (
  `id_contacto` int(11) NOT NULL,
  `red_social` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `url` text COLLATE utf8_spanish_ci NOT NULL,
  `clase` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `contacto`
--

INSERT INTO `contacto` (`id_contacto`, `red_social`, `url`, `clase`) VALUES
(20, 'club leo', 'https://es-la.facebook.com/', 1),
(21, 'club_leo', 'https://www.instagram.com/', 2),
(22, 'club leo cipolletti', 'https://twitter.com/login', 4),
(23, 'club leo', 'https://www.youtube.com/', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `donaciones`
--

CREATE TABLE `donaciones` (
  `id_donacion` int(11) NOT NULL,
  `titulo` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `telefono` int(11) NOT NULL,
  `correo` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `donaciones`
--

INSERT INTO `donaciones` (`id_donacion`, `titulo`, `descripcion`, `telefono`, `correo`, `categoria`) VALUES
(6, 'donación de ropa', 'Es importante que esté sana y limpia. Recibimos todo tipo de ropa: buzos, remeras, pantalones, medias, frazadas, ropa de niño y bebé. Especialmente, solicitaron calzado de niño y bebé, de talle 0 a 34. Hay mucha ropa que uno no usa y, sin embargo, a otra persona le puede representar un gran aporte; esto es lo que buscamos desde la VMU cuando pensamos las acciones sociales.', 2147483647, 'leo@gmail.com', 2),
(7, 'donación de juguetes', 'Recibimos juguetes en buen estado y sin envoltorio, preferentemente juegos didácticos, pizarras, peluches, marionetas e instrumentos musicales. Así mismo, te recomendamos evitar juegos con temática bélica, que contengan piezas pequeñas o que necesiten pilas.', 2147483647, 'leo@gmail.com', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `galeria`
--

CREATE TABLE `galeria` (
  `id_galeria` int(11) NOT NULL,
  `titulo` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen_galeria`
--

CREATE TABLE `imagen_galeria` (
  `id_ig` int(11) NOT NULL,
  `id_galeria` int(11) NOT NULL,
  `imagen` text COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen_obra`
--

CREATE TABLE `imagen_obra` (
  `id_io` int(11) NOT NULL,
  `id_obra` int(11) NOT NULL,
  `imagen_url` text COLLATE utf8_spanish_ci NOT NULL,
  `public_id` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `portada` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `imagen_obra`
--

INSERT INTO `imagen_obra` (`id_io`, `id_obra`, `imagen_url`, `public_id`, `portada`) VALUES
(53, 35, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608248055/u3qx0xfbaowon4pgnomz.jpg', 'u3qx0xfbaowon4pgnomz', 1),
(54, 35, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608248061/lmksolcijvgqj5427cfa.jpg', 'lmksolcijvgqj5427cfa', 0),
(55, 35, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608248069/bipuo25rkbglti3n5yeo.jpg', 'bipuo25rkbglti3n5yeo', 0),
(56, 35, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608248076/co1wuly4dd2jyn7zzwhs.jpg', 'co1wuly4dd2jyn7zzwhs', 0),
(57, 35, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608248080/v7klbxfroic6ohbg6r1r.jpg', 'v7klbxfroic6ohbg6r1r', 0),
(58, 35, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608248087/e3rol9org9mowdfvbpov.jpg', 'e3rol9org9mowdfvbpov', 0),
(59, 35, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608248091/ytb1lz9uy8qphrqxjpep.jpg', 'ytb1lz9uy8qphrqxjpep', 0),
(60, 35, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608248098/nqqi3s0ochithgmuacci.jpg', 'nqqi3s0ochithgmuacci', 0),
(61, 35, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608248105/zg0pql6qq1jypsi260ko.jpg', 'zg0pql6qq1jypsi260ko', 0),
(62, 35, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608248114/c9hwqxswwggtj823dgpy.jpg', 'c9hwqxswwggtj823dgpy', 0),
(63, 35, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608248123/pjtszkottyn02oxbuns7.jpg', 'pjtszkottyn02oxbuns7', 0),
(64, 36, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608251174/qsk2lgknxxu6f9lqjpel.jpg', 'qsk2lgknxxu6f9lqjpel', 0),
(65, 36, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608251177/vm32oiafbd98qpeurqxt.jpg', 'vm32oiafbd98qpeurqxt', 0),
(66, 36, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608251180/pw4qb0gpyllaqcbhmvbf.jpg', 'pw4qb0gpyllaqcbhmvbf', 1),
(67, 36, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608251184/wcg54nreeqp8esr6eeaw.jpg', 'wcg54nreeqp8esr6eeaw', 0),
(68, 36, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608251186/lfi3q96k0nt66chhfxfy.jpg', 'lfi3q96k0nt66chhfxfy', 0),
(69, 36, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608251189/t9v4jean6kijkwqgxsh8.jpg', 't9v4jean6kijkwqgxsh8', 0),
(70, 36, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608251191/zwaejjsp3gghbpdrp7ff.jpg', 'zwaejjsp3gghbpdrp7ff', 0),
(71, 37, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608253037/dckdgu3old9e7uxd3ta6.jpg', 'dckdgu3old9e7uxd3ta6', 0),
(72, 37, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608253054/s8kornjgxdo7urfznq5c.jpg', 's8kornjgxdo7urfznq5c', 0),
(73, 37, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608253057/lhbbkkq7ubwfm27yhcmw.jpg', 'lhbbkkq7ubwfm27yhcmw', 0),
(74, 37, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608253062/ha7w0q5hplpbn39skvuy.jpg', 'ha7w0q5hplpbn39skvuy', 0),
(75, 37, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608253064/zo4k01mk9omevkbm9bvb.jpg', 'zo4k01mk9omevkbm9bvb', 1),
(76, 37, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608253068/tgfgvjo8qhlpiyh13g06.jpg', 'tgfgvjo8qhlpiyh13g06', 0),
(77, 37, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608253071/p2jpwx2zipofbiorsu88.jpg', 'p2jpwx2zipofbiorsu88', 0),
(78, 37, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608253073/z9oapzej52ror0oxydv5.jpg', 'z9oapzej52ror0oxydv5', 0),
(79, 38, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608253920/zsoywrry8ak6evx7eb5g.jpg', 'zsoywrry8ak6evx7eb5g', 0),
(80, 38, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608253927/b2vzjyhw4ov5tdxoggjc.jpg', 'b2vzjyhw4ov5tdxoggjc', 0),
(81, 38, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608253936/cqhbs4mjolvpbq6petn9.jpg', 'cqhbs4mjolvpbq6petn9', 0),
(82, 38, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608253944/r32odj5higkhni4iyxi8.jpg', 'r32odj5higkhni4iyxi8', 1),
(83, 38, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608253951/cgmbgqlnv576vmabiw7w.jpg', 'cgmbgqlnv576vmabiw7w', 0),
(84, 38, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608253955/ymkawy3sjuzrvq79puei.jpg', 'ymkawy3sjuzrvq79puei', 0),
(85, 38, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608253961/xr2svhozwfullarjujyt.jpg', 'xr2svhozwfullarjujyt', 0),
(86, 38, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608253969/flhqeaseniksefr1nx7z.jpg', 'flhqeaseniksefr1nx7z', 0),
(87, 39, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608259255/nobfnsuyvf6klugmxily.jpg', 'nobfnsuyvf6klugmxily', 1),
(88, 39, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608259259/qi8819jrlxuca03up6is.jpg', 'qi8819jrlxuca03up6is', 0),
(89, 39, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608259263/qsnqcx0y3fjpvcxmlmle.jpg', 'qsnqcx0y3fjpvcxmlmle', 0),
(90, 40, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608259676/r7azmk6iy49w1khrqxax.jpg', 'r7azmk6iy49w1khrqxax', 1),
(91, 40, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608259678/uy6qaysekvsoldgpjyve.jpg', 'uy6qaysekvsoldgpjyve', 0),
(92, 40, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608259680/zoshg0sjy9qutdummx7t.jpg', 'zoshg0sjy9qutdummx7t', 0),
(93, 41, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608260442/ga6pncqbqpo5jfquszr1.jpg', 'ga6pncqbqpo5jfquszr1', 1),
(94, 41, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608260446/fd2n5glql7t0gtnpctzy.jpg', 'fd2n5glql7t0gtnpctzy', 0),
(95, 41, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608260450/i6oxqjbq97frcjltlcdb.jpg', 'i6oxqjbq97frcjltlcdb', 0),
(96, 41, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608260454/xhpulht0l8qhufr4cgsh.jpg', 'xhpulht0l8qhufr4cgsh', 0),
(97, 41, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608260464/z7wmfldhkahurj6ry8ul.jpg', 'z7wmfldhkahurj6ry8ul', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `obra`
--

CREATE TABLE `obra` (
  `id_obra` int(11) NOT NULL,
  `titulo` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `categoria` int(11) NOT NULL,
  `imagen` text COLLATE utf8_spanish_ci,
  `fecha_obra` date NOT NULL,
  `tipo` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `obra`
--

INSERT INTO `obra` (`id_obra`, `titulo`, `descripcion`, `categoria`, `imagen`, `fecha_obra`, `tipo`, `estado`) VALUES
(35, 'Regalos para los abuelos', '<div dir=\"auto\"><span><font color=\"#200404\">Queremos agradecer de TODO coraz&#243;n a todos los padrinos visibles e invisibles que con su aporte nos ayudaron a que los abuelos de la Residencia Juan XXIII tengan su regalito para esta Navidad. </font></span></div><div dir=\"auto\"><span><font color=\"#200404\">Cada regalito para los abuelos consist&#237;a en una taza con su nombre y el logo del club Leo, una cuchara, un individual con posa vaso, una servilleta y un turr&#243;n.</font></span></div><div dir=\"auto\"><span><font color=\"#200404\">Pudimos comprar tambi&#233;n DOS VENTILADORES NUEVOS de pie para la residencia, dos cajas con art&#237;culos navide&#241;os, pa&#241;ales, gaseosas, alcohol y algod&#243;n para el botiqu&#237;n, jabones, cremas, talco, hojas de colores y blancas, una resma de hojas, l&#225;pices negros y de colores, sacapuntas y gomas de borrar y Alimento para Leoncito, mascota de los abuelos) </font></span></div><div dir=\"auto\"><span><font color=\"#200404\">Y llevamos medialunas para la merienda, adem&#225;s de un regalo para Rub&#237; que era su cumple N&#176;80. </font></span></div>', 1, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608248055/u3qx0xfbaowon4pgnomz.jpg', '2019-08-10', 2, 0),
(36, '|PROYECTO UNIENDO LAZOS| botellas de plástico', '<div dir=\"auto\"><span><font color=\"#0d0202\">|PROYECTO UNIENDO LAZOS|</font></span></div><div dir=\"auto\"><span><font color=\"#0d0202\">Quer&#237;amos contarles que ya se sac&#243; todo el centro de acopio de botellas de pl&#225;stico y eco ladrillos que fueron llevados a la empresa recicladora. Much&#237;simas gracias a todos los que colaboraron y se sumaron a llevar botellas y eco ladrillos, de ahora en m&#225;s todo lo que se junte tiene que ir a la empresa recicladora (Gogos ya no funcionar&#237;a m&#225;s  como centro de acopio).</font></span></div><div dir=\"auto\"><span><font color=\"#0d0202\">Much&#237;simas gracias a la empresa SAP S.R.L por ayudarnos a transportar todo lo juntado hasta la planta recicladora y muchas gracias a los que se sumaron a ordenar y subir todo a los camiones.</font></span></div><div dir=\"auto\"><span><font color=\"#143bff\"><span><a class=\"oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl q66pz984 gpro0wi8 b1v8xokw\" href=\"https://www.facebook.com/hashtag/uniendolazos?__eep__=6&amp;__cft__[0]=AZWTQ6l2XI44NzeV-gS-L1N7DKKUseU3_eCrjToV13yms8Y2L07fWguDywEMoK8VeIRlZWaWAihV3kF7E_jshUNNIjZWKz8vnVW-uGw_3fdbc-Eyrj-vsDNuX4lIaC7wGWh_dN-maFv3LjsniOw9t_Z3&amp;__tn__=*NK-R\" role=\"link\" tabindex=\"0\">#UniendoLazos</a></span> <span><a class=\"oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl q66pz984 gpro0wi8 b1v8xokw\" href=\"https://www.facebook.com/hashtag/bancosdeplastico?__eep__=6&amp;__cft__[0]=AZWTQ6l2XI44NzeV-gS-L1N7DKKUseU3_eCrjToV13yms8Y2L07fWguDywEMoK8VeIRlZWaWAihV3kF7E_jshUNNIjZWKz8vnVW-uGw_3fdbc-Eyrj-vsDNuX4lIaC7wGWh_dN-maFv3LjsniOw9t_Z3&amp;__tn__=*NK-R\" role=\"link\" tabindex=\"0\">#BancosDePlastico</a></span> <span><a class=\"oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl q66pz984 gpro0wi8 b1v8xokw\" href=\"https://www.facebook.com/hashtag/plazainclusiva?__eep__=6&amp;__cft__[0]=AZWTQ6l2XI44NzeV-gS-L1N7DKKUseU3_eCrjToV13yms8Y2L07fWguDywEMoK8VeIRlZWaWAihV3kF7E_jshUNNIjZWKz8vnVW-uGw_3fdbc-Eyrj-vsDNuX4lIaC7wGWh_dN-maFv3LjsniOw9t_Z3&amp;__tn__=*NK-R\" role=\"link\" tabindex=\"0\">#PlazaInclusiva</a></span></font></span></div>', 1, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608251180/pw4qb0gpyllaqcbhmvbf.jpg', '2020-04-09', 2, 0),
(37, 'CDI Wald Disney ', '<div dir=\"auto\"><span><font color=\"#0a0000\"><font face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span>En el d&#237;a de hoy fuimos al CDI Wald Disney a realizar la actividad propuesta por los Leos de Argentina, d&#243;nde les le&#237;mos el cuento de Caperucita Roja y realizamos con los chicos el mu&#241;eco de la peli Toy Story. </span></font></font></span></div><div dir=\"auto\"><span><font color=\"#0a0000\">Queremos agradecer a las se&#241;os por su recibimiento, por las tortas fritas y por el rato compartido, nos sentimos realmente como en casa. </font></span></div><div dir=\"auto\"><span><font color=\"#0a0000\">&#161;Muchas gracias!</font></span></div><div dir=\"auto\"><span><font color=\"#0a0000\"><span><a class=\"oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl q66pz984 gpro0wi8 b1v8xokw\" href=\"https://www.facebook.com/hashtag/leosenaccion?__eep__=6&amp;__cft__[0]=AZVJ9_mYapfT9qLXi8Vg65MjHviABxDQEvwWPRz_zmIqT1qsRGAmNCuwtBxGPLskFaU1ICGvF3ElnoLf-QyzoHQdy0Fd1fbbQud4JqgcSNW2_sqbGUilsYldmiTweKkRZ9uqqDmJH8eNbZYkEwqn83V0&amp;__tn__=*NK-R\" role=\"link\" tabindex=\"0\">#LeosEnAccion</a></span> <span><a class=\"oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl q66pz984 gpro0wi8 b1v8xokw\" href=\"https://www.facebook.com/hashtag/felices?__eep__=6&amp;__cft__[0]=AZVJ9_mYapfT9qLXi8Vg65MjHviABxDQEvwWPRz_zmIqT1qsRGAmNCuwtBxGPLskFaU1ICGvF3ElnoLf-QyzoHQdy0Fd1fbbQud4JqgcSNW2_sqbGUilsYldmiTweKkRZ9uqqDmJH8eNbZYkEwqn83V0&amp;__tn__=*NK-R\" role=\"link\" tabindex=\"0\">#Felices</a></span> <span><a class=\"oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl q66pz984 gpro0wi8 b1v8xokw\" href=\"https://www.facebook.com/hashtag/caperucitaroja?__eep__=6&amp;__cft__[0]=AZVJ9_mYapfT9qLXi8Vg65MjHviABxDQEvwWPRz_zmIqT1qsRGAmNCuwtBxGPLskFaU1ICGvF3ElnoLf-QyzoHQdy0Fd1fbbQud4JqgcSNW2_sqbGUilsYldmiTweKkRZ9uqqDmJH8eNbZYkEwqn83V0&amp;__tn__=*NK-R\" role=\"link\" tabindex=\"0\">#CaperucitaRoja</a></span></font></span></div>', 1, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608253064/zo4k01mk9omevkbm9bvb.jpg', '2020-12-26', 2, 0),
(38, 'ÚLTIMAS ACTIVIDADES ', '<div dir=\"auto\"><span><font color=\"#0e0101\"><span class=\"pq6dq46d tbxw36s4 knj5qynh kvgmc6g5 ditlmg2l oygrvhab nvdbi5me sf5mxxl7 gl3lb2sf hhz5lgdu\"><img height=\"16\" width=\"16\" alt=\"&#129409;\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/ta/1/16/1f981.png\"></span> &#218;LTIMAS ACTIVIDADES <span class=\"pq6dq46d tbxw36s4 knj5qynh kvgmc6g5 ditlmg2l oygrvhab nvdbi5me sf5mxxl7 gl3lb2sf hhz5lgdu\"><img height=\"16\" width=\"16\" alt=\"&#129409;\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/ta/1/16/1f981.png\"></span></font></span></div><div dir=\"auto\"><span><font color=\"#0e0101\"><span class=\"pq6dq46d tbxw36s4 knj5qynh kvgmc6g5 ditlmg2l oygrvhab nvdbi5me sf5mxxl7 gl3lb2sf hhz5lgdu\"><img height=\"16\" width=\"16\" alt=\"&#10145;\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\"></span> El d&#237;a viernes hicimos entrega de zapatillas a una familia que las necesitaba. </font></span></div><div dir=\"auto\"><span><font color=\"#0e0101\"><span class=\"pq6dq46d tbxw36s4 knj5qynh kvgmc6g5 ditlmg2l oygrvhab nvdbi5me sf5mxxl7 gl3lb2sf hhz5lgdu\"><img height=\"16\" width=\"16\" alt=\"&#10145;\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\"></span>Entregamos tambi&#233;n ropa y algunos juguetes a un grupo de personas que iban a festejar el d&#237;a del ni&#241;o en el Paraje el Arroyon, gracias Marisel por tenernos en cuenta.</font></span></div><div dir=\"auto\"><span><font color=\"#0e0101\"><span class=\"pq6dq46d tbxw36s4 knj5qynh kvgmc6g5 ditlmg2l oygrvhab nvdbi5me sf5mxxl7 gl3lb2sf hhz5lgdu\"><img height=\"16\" width=\"16\" alt=\"&#10145;\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\">&#161;</span>El viernes tambi&#233;n participamos de la visita del Gobernador del Club de Leones y la jura de Cristina, bienvenida! Agradecemos al Gobernador por la entrega de la Vela para nuestras actividades! </font></span></div><div dir=\"auto\"><span><font color=\"#0e0101\"><span class=\"pq6dq46d tbxw36s4 knj5qynh kvgmc6g5 ditlmg2l oygrvhab nvdbi5me sf5mxxl7 gl3lb2sf hhz5lgdu\"><img height=\"16\" width=\"16\" alt=\"&#10145;\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\">&#161;</span>El d&#237;a s&#225;bado realizamos la reuni&#243;n semanal y nuestra consejera nos cocino, Gracias Norma! </font></span></div><div dir=\"auto\"><span><font color=\"#0e0101\"><span class=\"pq6dq46d tbxw36s4 knj5qynh kvgmc6g5 ditlmg2l oygrvhab nvdbi5me sf5mxxl7 gl3lb2sf hhz5lgdu\"><img height=\"16\" width=\"16\" alt=\"&#10145;\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\"></span>Aprovechamos tambi&#233;n el s&#225;bado para ayudar a nuestro club de Leones en el festejo del ni&#241;o que realizaba la Municipalidad de Cinco Saltos, repartimos caramelos y Rami de disfraz&#243; de payaso. Gracias por dejarnos ser parte. </font></span></div><div dir=\"auto\"><span><font color=\"#0e0101\"><span><a class=\"oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl q66pz984 gpro0wi8 b1v8xokw\" href=\"https://www.facebook.com/hashtag/leosenaccion?__eep__=6&amp;__cft__[0]=AZXUUk-Tf5bQdS-CA0WlXCmYG6JdZzeEK0hkI_U15K-GIFaYKI8FkOp7DWXczj3KTfKngIrnQpuJHxMl_jSgZDnCu2DFyPxNZVVXWAi7jTL-ORLWziyLHgg2lK25PeRI6wGDSnd35yZIt-TP6fIFXcB6&amp;__tn__=*NK-R\" role=\"link\" tabindex=\"0\">#LeosEnAccion</a></span> <span><a class=\"oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl q66pz984 gpro0wi8 b1v8xokw\" href=\"https://www.facebook.com/hashtag/clubleo?__eep__=6&amp;__cft__[0]=AZXUUk-Tf5bQdS-CA0WlXCmYG6JdZzeEK0hkI_U15K-GIFaYKI8FkOp7DWXczj3KTfKngIrnQpuJHxMl_jSgZDnCu2DFyPxNZVVXWAi7jTL-ORLWziyLHgg2lK25PeRI6wGDSnd35yZIt-TP6fIFXcB6&amp;__tn__=*NK-R\" role=\"link\" tabindex=\"0\">#ClubLeo</a></span></font></span></div>', 1, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608253944/r32odj5higkhni4iyxi8.jpg', '2020-08-15', 2, 0),
(39, 'Tapitas clasificadas', '<div dir=\"auto\"><span class=\"quote\">&#161;Hoy NI LA LLUVIA NOS PARO! en conjunto con los Clubes de Leones y Leos de la zona haremos un envi&#243; de tapitas clasificadas por color al Hospital Garrahan. Gracias al Club de Leones de Neuqu&#233;n por la log&#237;stica en la actividad y a todos los que nos traen tapitas a nosotros para poder ser el nexo &#161;Es un trabajo de todos!&#10;<font color=\"#4258ff\">#LeosEnAccion #TapiLEO #LeosYLeones #HospitalGarragan</font></span><span><br></span></div>', 1, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608259255/nobfnsuyvf6klugmxily.jpg', '2020-12-09', 2, 1),
(40, 'Día del BOMBERO VOLUNTARIO', '<div class=\"kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q\"><div dir=\"auto\"><span><font color=\"#080808\">2 de Junio. </font></span></div><div dir=\"auto\"><span><font color=\"#080808\"><span class=\"pq6dq46d tbxw36s4 knj5qynh kvgmc6g5 ditlmg2l oygrvhab nvdbi5me sf5mxxl7 gl3lb2sf hhz5lgdu\"><img height=\"16\" width=\"16\" alt=\"&#128658;\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t67/1/16/1f692.png\"></span>D&#237;a del BOMBERO VOLUNTARIO.<span class=\"pq6dq46d tbxw36s4 knj5qynh kvgmc6g5 ditlmg2l oygrvhab nvdbi5me sf5mxxl7 gl3lb2sf hhz5lgdu\"><img height=\"16\" width=\"16\" alt=\"&#128658;\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t67/1/16/1f692.png\"></span></font></span></div><div dir=\"auto\"><span><font color=\"#080808\"><font face=\"inherit\"><span> &#34;La mejor forma de encontrarse a uno </span></font><font face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span>mismo, es</span></font><font face=\"inherit\"><span> perderse sirviendo a los dem&#225;s&#34; </span></font></font></span></div></div><div class=\"o9v6fnle cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q\"><div dir=\"auto\"><span><font color=\"#080808\">Quisimos agasajar a los bomberos de nuestra ciudad con una torta hecha por nosotros, nos acercamos al cuartel pasadas las 00:00. </font></span></div><div dir=\"auto\"><span><font color=\"#080808\">&#191;Dar&#237;as la vida por un desconocido? </font></span></div><div dir=\"auto\"><span><font color=\"#080808\">&#161;ELLOS SI!</font></span></div><div dir=\"auto\"><span><font color=\"#080808\"><span><a class=\"oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl q66pz984 gpro0wi8 b1v8xokw\" href=\"https://www.facebook.com/hashtag/graciasporserbomberosvoluntarios?__eep__=6&amp;__cft__[0]=AZVmIaYDap0K4yr3wlHDgE1ZngRZujCry_xLZwcM8-2J3ofGRXsa3HFgwtnaH3CMtSTq_pTFr7icUh5CCYi5rpITsNQjFNK7fgTQz6yv3g6zzA2N28MJBPg3DYcikGEgvWtWcvcUJ3aTRM_ElIaWKGQp&amp;__tn__=*NK-R\" role=\"link\" tabindex=\"0\">#GraciasPorSerBomberosVoluntarios</a></span> <span><a class=\"oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl q66pz984 gpro0wi8 b1v8xokw\" href=\"https://www.facebook.com/hashtag/graciasporsuvalentia?__eep__=6&amp;__cft__[0]=AZVmIaYDap0K4yr3wlHDgE1ZngRZujCry_xLZwcM8-2J3ofGRXsa3HFgwtnaH3CMtSTq_pTFr7icUh5CCYi5rpITsNQjFNK7fgTQz6yv3g6zzA2N28MJBPg3DYcikGEgvWtWcvcUJ3aTRM_ElIaWKGQp&amp;__tn__=*NK-R\" role=\"link\" tabindex=\"0\">#GraciasPorSuValentia</a></span> </font></span></div></div><div class=\"o9v6fnle cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q\"><div dir=\"auto\"><span><font color=\"#080808\"><span class=\"pq6dq46d tbxw36s4 knj5qynh kvgmc6g5 ditlmg2l oygrvhab nvdbi5me sf5mxxl7 gl3lb2sf hhz5lgdu\"><img height=\"16\" width=\"16\" alt=\"&#10145;&#65039;\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\"></span><font face=\"inherit\"><span>Agradecemos al </span></font><span>Cotill&#243;n</span><font face=\"inherit\"><span> de Chabela por la </span></font><font face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span>donaci&#243;n</span></font><font face=\"inherit\"><span> de la l&#225;mina comestible para la torta. &#161;Muchas Gracias!</span></font></font></span></div></div>', 1, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608259676/r7azmk6iy49w1khrqxax.jpg', '2020-06-05', 2, 1),
(41, 'Nuestras nuevas autoridades ', '<div dir=\"auto\"><span><font color=\"#080808\">S&#225;bado 04 de Mayo.</font></span></div><div dir=\"auto\"><span><font color=\"#080808\"><span class=\"pq6dq46d tbxw36s4 knj5qynh kvgmc6g5 ditlmg2l oygrvhab nvdbi5me sf5mxxl7 gl3lb2sf hhz5lgdu\"><img height=\"16\" width=\"16\" alt=\"&#10145;&#65039;\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\"></span>Realizamos una reuni&#243;n formal donde elegimos nuestras nuevas autoridades </font></span></div><div dir=\"auto\"><span><font color=\"#080808\">&#161;Felicitaciones Solange Presidente electa y Cielo Vicepresidente Electa Periodo Fiscal 19/20!</font></span></div><div dir=\"auto\"><span><font color=\"#080808\"><span class=\"pq6dq46d tbxw36s4 knj5qynh kvgmc6g5 ditlmg2l oygrvhab nvdbi5me sf5mxxl7 gl3lb2sf hhz5lgdu\"><img height=\"16\" width=\"16\" alt=\"&#10145;&#65039;\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\"></span>Como todos los a&#241;os hoy fuimos a llevarle un presente a Luis en el d&#237;a de su cumplea&#241;os, abuelo de la Residencia de Larga Estad&#237;a&#160;Juan XXIII, aprovechamos para pasar la tarde jugando a las cartas y charlando. </font></span></div><div dir=\"auto\"><span><font color=\"#080808\">Hicimos tambi&#233;n entrega de &#250;tiles para sus talleres de manualidades.</font></span></div><div dir=\"auto\"><span><font color=\"#080808\">&#161;Muchas gracias por recibirnos!</font></span></div><div dir=\"auto\"><span><font color=\"#080808\"><span><a class=\"oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl q66pz984 gpro0wi8 b1v8xokw\" href=\"https://www.facebook.com/hashtag/leosenaccion?__eep__=6&amp;__cft__[0]=AZXc1Pb6iI5N29FdLQg01uwbi7jES1yCwMMAr9Vup1mIghshYBqKbsVzzdvRX-83_SEdHidEeaQ-ONx2welCGsF6FAxMH4D0IotkIY-1vFSklX7FrdlW22KXoUCbP1gRvEqivJaeuxPfRc48M4tD3kXo&amp;__tn__=*NK-R\" role=\"link\" tabindex=\"0\">#LeosEnAccion</a></span> <span><a class=\"oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl q66pz984 gpro0wi8 b1v8xokw\" href=\"https://www.facebook.com/hashtag/separte?__eep__=6&amp;__cft__[0]=AZXc1Pb6iI5N29FdLQg01uwbi7jES1yCwMMAr9Vup1mIghshYBqKbsVzzdvRX-83_SEdHidEeaQ-ONx2welCGsF6FAxMH4D0IotkIY-1vFSklX7FrdlW22KXoUCbP1gRvEqivJaeuxPfRc48M4tD3kXo&amp;__tn__=*NK-R\" role=\"link\" tabindex=\"0\">#SeParte</a></span> <span><a class=\"oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl q66pz984 gpro0wi8 b1v8xokw\" href=\"https://www.facebook.com/hashtag/felizcumpleluis?__eep__=6&amp;__cft__[0]=AZXc1Pb6iI5N29FdLQg01uwbi7jES1yCwMMAr9Vup1mIghshYBqKbsVzzdvRX-83_SEdHidEeaQ-ONx2welCGsF6FAxMH4D0IotkIY-1vFSklX7FrdlW22KXoUCbP1gRvEqivJaeuxPfRc48M4tD3kXo&amp;__tn__=*NK-R\" role=\"link\" tabindex=\"0\">#FelizCumpleLuis</a></span> </font></span></div><div dir=\"auto\"><span><a class=\"oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl q66pz984 gpro0wi8 b1v8xokw\" href=\"https://www.facebook.com/hashtag/nuevasautoridades?__eep__=6&amp;__cft__[0]=AZXc1Pb6iI5N29FdLQg01uwbi7jES1yCwMMAr9Vup1mIghshYBqKbsVzzdvRX-83_SEdHidEeaQ-ONx2welCGsF6FAxMH4D0IotkIY-1vFSklX7FrdlW22KXoUCbP1gRvEqivJaeuxPfRc48M4tD3kXo&amp;__tn__=*NK-R\" role=\"link\" tabindex=\"0\"><font color=\"#080808\">#NuevasAutoridades</font></a></span></div>', 3, 'http://res.cloudinary.com/dnicjefgk/image/upload/v1608260442/ga6pncqbqpo5jfquszr1.jpg', '2020-05-07', 2, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `quienes_somos`
--

CREATE TABLE `quienes_somos` (
  `id_qs` int(11) NOT NULL,
  `descripcion` text COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `quienes_somos`
--

INSERT INTO `quienes_somos` (`id_qs`, `descripcion`) VALUES
(2, '<font size=\"3\">Organizaci&#243;n sin &#225;nimo de lucro. Sirviendo a la comunidad.<br></font><font size=\"3\">Un Club Leo es un grupo de j&#243;venes de 12 a 30 a&#241;os de edad,&#160;patrocinado por uno o m&#225;s Clubes de Leones, que se re&#250;nen para trabajar por los dem&#225;s, poniendo sus talentos y energ&#237;as para servir a quienes lo necesitan. Hoy, en el mundo, hay aproximadamente 140.000 socios Leo, reunidos en 5520 Clubes; en la Argentina, la cifra asciende a los 1000 socios, en 90 clubes. La sigla LEO significa Liderazgo, Experiencia, Oportunidad. Un Club Leo es la Oportunidad que los Clubes de Leones le dan a la juventud, de adquirir la Experiencia para ejercer el Liderazgo. El objetivo del Programa Internacional de Clubes Leo es promover la realizaci&#243;n de actividades de bien entre sus j&#243;venes, contribuyendo as&#237; a su desarrollo. De esta manera, se entrega a la juventud la oportunidad de constituirse, tanto individual como colectivamente, como miembros responsables y activos de la comunidad local, nacional e internacional.  Entre los aprendizajes que los socios reciben, se destacan la oratoria, la administraci&#243;n (secretar&#237;a - tesorer&#237;a), las Relaciones P&#250;blicas, la planificaci&#243;n, la negociaci&#243;n, y el trabajo en equipo. Algunas de las actividades m&#225;s comunes llevadas a cabo por los Clubes Leo de Argentina son las campa&#241;as sobre temas relacionados con la salud (concientizaci&#243;n en adicciones, donaci&#243;n de &#243;rganos, Sida; detecciones de glaucoma; toma de presi&#243;n arterial), el medio ambiente (forestaci&#243;n de plazas y/o diferentes sectores), la educaci&#243;n (donaciones de libros, guardapolvos, y &#250;tiles), y otros (donaciones de alimentos a comedores comunitarios, visitas a asilos de ancianos).&#160;</font>');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_obra`
--

CREATE TABLE `tipo_obra` (
  `id_tipo` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tipo_obra`
--

INSERT INTO `tipo_obra` (`id_tipo`, `descripcion`) VALUES
(2, 'cerrado'),
(4, 'próximamente a futuro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `username`, `password`, `email`) VALUES
(5, 'pepe', '$2a$10$.oqsXEi8X3sw1IYs2oRncOBIV6r1jqPg0gVZRUtQdjZl2XhdEDRo.', 'dlkfmnbñoingdbñ'),
(6, 'david', '$2a$10$bgMfRHA5UnGaup0jGk20/etRDqLpYFqww2rBk7y8VaRGakHO3Ki6u', 'ggggg'),
(7, 'lucas', '$2a$10$/TYYPHVyBr7ka6A8zmqPsO4UqU62LY4k8cVsNJwgCa0DUZDKtXUoC', 'rrrrrr'),
(8, 'lola', '$2a$10$eHIGZCRmfH9WQtNbg0N.3uFBycgaNdCd3qZlVKgqUmAuR..r/tVAG', 'rrrrrrrrrrrrr'),
(9, 'franco', '$2a$10$DT7InM.6K00HhTiIb6nNOuZ7zMtRS5k6hImdzWv55A4OgKXbUC2Lq', 'srñthkst{hkimbet{hm');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria_donacion`
--
ALTER TABLE `categoria_donacion`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `categoria_galeria`
--
ALTER TABLE `categoria_galeria`
  ADD PRIMARY KEY (`id_cg`);

--
-- Indices de la tabla `categoria_obra`
--
ALTER TABLE `categoria_obra`
  ADD PRIMARY KEY (`id_co`);

--
-- Indices de la tabla `clase_contacto`
--
ALTER TABLE `clase_contacto`
  ADD PRIMARY KEY (`id_clase`);

--
-- Indices de la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD PRIMARY KEY (`id_contacto`),
  ADD KEY `clase` (`clase`),
  ADD KEY `clase_2` (`clase`);

--
-- Indices de la tabla `donaciones`
--
ALTER TABLE `donaciones`
  ADD PRIMARY KEY (`id_donacion`),
  ADD KEY `fk_donacion_categoria` (`categoria`);

--
-- Indices de la tabla `galeria`
--
ALTER TABLE `galeria`
  ADD PRIMARY KEY (`id_galeria`),
  ADD KEY `fk_categoria_galeria` (`categoria`);

--
-- Indices de la tabla `imagen_galeria`
--
ALTER TABLE `imagen_galeria`
  ADD PRIMARY KEY (`id_ig`),
  ADD KEY `fk_imagen_galeria` (`id_galeria`);

--
-- Indices de la tabla `imagen_obra`
--
ALTER TABLE `imagen_obra`
  ADD PRIMARY KEY (`id_io`),
  ADD KEY `id_obra` (`id_obra`);

--
-- Indices de la tabla `obra`
--
ALTER TABLE `obra`
  ADD PRIMARY KEY (`id_obra`),
  ADD KEY `tipo` (`tipo`),
  ADD KEY `categoria` (`categoria`);

--
-- Indices de la tabla `quienes_somos`
--
ALTER TABLE `quienes_somos`
  ADD PRIMARY KEY (`id_qs`);

--
-- Indices de la tabla `tipo_obra`
--
ALTER TABLE `tipo_obra`
  ADD PRIMARY KEY (`id_tipo`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria_donacion`
--
ALTER TABLE `categoria_donacion`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `categoria_galeria`
--
ALTER TABLE `categoria_galeria`
  MODIFY `id_cg` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `categoria_obra`
--
ALTER TABLE `categoria_obra`
  MODIFY `id_co` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de la tabla `clase_contacto`
--
ALTER TABLE `clase_contacto`
  MODIFY `id_clase` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `id_contacto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `donaciones`
--
ALTER TABLE `donaciones`
  MODIFY `id_donacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `galeria`
--
ALTER TABLE `galeria`
  MODIFY `id_galeria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `imagen_galeria`
--
ALTER TABLE `imagen_galeria`
  MODIFY `id_ig` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `imagen_obra`
--
ALTER TABLE `imagen_obra`
  MODIFY `id_io` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT de la tabla `obra`
--
ALTER TABLE `obra`
  MODIFY `id_obra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla `quienes_somos`
--
ALTER TABLE `quienes_somos`
  MODIFY `id_qs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tipo_obra`
--
ALTER TABLE `tipo_obra`
  MODIFY `id_tipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD CONSTRAINT `contacto_ibfk_1` FOREIGN KEY (`clase`) REFERENCES `clase_contacto` (`id_clase`);

--
-- Filtros para la tabla `donaciones`
--
ALTER TABLE `donaciones`
  ADD CONSTRAINT `fk_donacion_categoria` FOREIGN KEY (`categoria`) REFERENCES `categoria_donacion` (`id_categoria`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `galeria`
--
ALTER TABLE `galeria`
  ADD CONSTRAINT `fk_categoria_galeria` FOREIGN KEY (`categoria`) REFERENCES `categoria_galeria` (`id_cg`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `imagen_galeria`
--
ALTER TABLE `imagen_galeria`
  ADD CONSTRAINT `fk_imagen_galeria` FOREIGN KEY (`id_galeria`) REFERENCES `galeria` (`id_galeria`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `imagen_obra`
--
ALTER TABLE `imagen_obra`
  ADD CONSTRAINT `imagen_obra_ibfk_1` FOREIGN KEY (`id_obra`) REFERENCES `obra` (`id_obra`);

--
-- Filtros para la tabla `obra`
--
ALTER TABLE `obra`
  ADD CONSTRAINT `obra_ibfk_1` FOREIGN KEY (`categoria`) REFERENCES `categoria_obra` (`id_co`),
  ADD CONSTRAINT `obra_ibfk_2` FOREIGN KEY (`tipo`) REFERENCES `tipo_obra` (`id_tipo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
