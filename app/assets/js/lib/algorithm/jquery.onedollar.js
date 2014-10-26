(function(e){"use strict";e.Point=function(e,t){this.x=e;this.y=t};var t=function(e,t,n,r){this.x=e;this.y=t;this.width=n;this.height=r};var n=function(e,t){this.name=e;this.points=p(t,s);var n=d(this.points);this.points=v(this.points,-n);this.points=m(this.points,o);this.points=g(this.points,u);this.vector=y(this.points)};var r=function(e,t){this.name=e;this.score=t};var i=new Array;var s=64;var o=250;var u=new e.Point(0,0);var a=Math.sqrt(o*o+o*o);var f=.5*a;var l=45*Math.PI/180;var c=2*Math.PI/180;var h=.5*(-1+Math.sqrt(5));var p=function(t,n){var r=N(t)/(n-1);var i=0;var s=new Array(t[0]);for(var o=1;o<t.length;o++){var u=C(t[o-1],t[o]);if(i+u>=r){var a=t[o-1].x+(r-i)/u*(t[o].x-t[o-1].x);var f=t[o-1].y+(r-i)/u*(t[o].y-t[o-1].y);var l=new e.Point(a,f);s[s.length]=l;t.splice(o,0,l);i=0}else{i+=u}}if(s.length==n-1){s[s.length]=new e.Point(t[t.length-1].x,t[t.length-1].y)}return s};var d=function(e){var t=S(e);return Math.atan2(t.y-e[0].y,t.x-e[0].x)};var v=function(t,n){var r=S(t);var i=Math.cos(n);var s=Math.sin(n);var o=new Array;for(var u=0;u<t.length;u++){var a=(t[u].x-r.x)*i-(t[u].y-r.y)*s+r.x;var f=(t[u].x-r.x)*s+(t[u].y-r.y)*i+r.y;o[o.length]=new e.Point(a,f)}return o};var m=function(t,n){var r=x(t);var i=new Array;for(var s=0;s<t.length;s++){var o=t[s].x*(n/r.width);var u=t[s].y*(n/r.height);i[i.length]=new e.Point(o,u)}return i};var g=function(t,n){var r=S(t);var i=new Array;for(var s=0;s<t.length;s++){var o=t[s].x+n.x-r.x;var u=t[s].y+n.y-r.y;i[i.length]=new e.Point(o,u)}return i};var y=function(e){var t=0;var n=new Array;for(var r=0;r<e.length;r++){n[n.length]=e[r].x;n[n.length]=e[r].y;t+=e[r].x*e[r].x+e[r].y*e[r].y}var i=Math.sqrt(t);for(var r=0;r<n.length;r++){n[r]/=i}return n};var b=function(e,t){var n=0;var r=0;for(var i=0;i<e.length;i+=2){n+=e[i]*t[i]+e[i+1]*t[i+1];r+=e[i]*t[i+1]-e[i+1]*t[i]}var s=Math.atan(r/n);return Math.acos(n*Math.cos(s)+r*Math.sin(s))};var w=function(e,t,n,r,i){var s=h*n+(1-h)*r;var o=E(e,t,s);var u=(1-h)*n+h*r;var a=E(e,t,u);while(Math.abs(r-n)>i){if(o<a){r=u;u=s;a=o;s=h*n+(1-h)*r;o=E(e,t,s)}else{n=s;s=u;o=a;u=(1-h)*n+h*r;a=E(e,t,u)}}return Math.min(o,a)};var E=function(e,t,n){var r=v(e,n);return T(r,t.points)};var S=function(t){var n=0,r=0;for(var i=0;i<t.length;i++){n+=t[i].x;r+=t[i].y}n/=t.length;r/=t.length;return new e.Point(n,r)};var x=function(e){var n=+Infinity,r=-Infinity,i=+Infinity,s=-Infinity;for(var o=0;o<e.length;o++){n=Math.min(n,e[o].x);i=Math.min(i,e[o].y);r=Math.max(r,e[o].x);s=Math.max(s,e[o].y)}return new t(n,i,r-n,s-i)};var T=function(e,t){var n=0;for(var r=0;r<e.length;r++){n+=C(e[r],t[r])}return n/e.length};var N=function(e){var t=0;for(var n=1;n<e.length;n++){t+=C(e[n-1],e[n])}return t};var C=function(e,t){var n=t.x-e.x;var r=t.y-e.y;return Math.sqrt(n*n+r*r)};var k=function(e){return e*Math.PI/180};i[0]=new n("triangle",new Array(new e.Point(137,139),new e.Point(135,141),new e.Point(133,144),new e.Point(132,146),new e.Point(130,149),new e.Point(128,151),new e.Point(126,155),new e.Point(123,160),new e.Point(120,166),new e.Point(116,171),new e.Point(112,177),new e.Point(107,183),new e.Point(102,188),new e.Point(100,191),new e.Point(95,195),new e.Point(90,199),new e.Point(86,203),new e.Point(82,206),new e.Point(80,209),new e.Point(75,213),new e.Point(73,213),new e.Point(70,216),new e.Point(67,219),new e.Point(64,221),new e.Point(61,223),new e.Point(60,225),new e.Point(62,226),new e.Point(65,225),new e.Point(67,226),new e.Point(74,226),new e.Point(77,227),new e.Point(85,229),new e.Point(91,230),new e.Point(99,231),new e.Point(108,232),new e.Point(116,233),new e.Point(125,233),new e.Point(134,234),new e.Point(145,233),new e.Point(153,232),new e.Point(160,233),new e.Point(170,234),new e.Point(177,235),new e.Point(179,236),new e.Point(186,237),new e.Point(193,238),new e.Point(198,239),new e.Point(200,237),new e.Point(202,239),new e.Point(204,238),new e.Point(206,234),new e.Point(205,230),new e.Point(202,222),new e.Point(197,216),new e.Point(192,207),new e.Point(186,198),new e.Point(179,189),new e.Point(174,183),new e.Point(170,178),new e.Point(164,171),new e.Point(161,168),new e.Point(154,160),new e.Point(148,155),new e.Point(143,150),new e.Point(138,148),new e.Point(136,148)));i[1]=new n("x",new Array(new e.Point(87,142),new e.Point(89,145),new e.Point(91,148),new e.Point(93,151),new e.Point(96,155),new e.Point(98,157),new e.Point(100,160),new e.Point(102,162),new e.Point(106,167),new e.Point(108,169),new e.Point(110,171),new e.Point(115,177),new e.Point(119,183),new e.Point(123,189),new e.Point(127,193),new e.Point(129,196),new e.Point(133,200),new e.Point(137,206),new e.Point(140,209),new e.Point(143,212),new e.Point(146,215),new e.Point(151,220),new e.Point(153,222),new e.Point(155,223),new e.Point(157,225),new e.Point(158,223),new e.Point(157,218),new e.Point(155,211),new e.Point(154,208),new e.Point(152,200),new e.Point(150,189),new e.Point(148,179),new e.Point(147,170),new e.Point(147,158),new e.Point(147,148),new e.Point(147,141),new e.Point(147,136),new e.Point(144,135),new e.Point(142,137),new e.Point(140,139),new e.Point(135,145),new e.Point(131,152),new e.Point(124,163),new e.Point(116,177),new e.Point(108,191),new e.Point(100,206),new e.Point(94,217),new e.Point(91,222),new e.Point(89,225),new e.Point(87,226),new e.Point(87,224)));i[2]=new n("rectangle",new Array(new e.Point(78,149),new e.Point(78,153),new e.Point(78,157),new e.Point(78,160),new e.Point(79,162),new e.Point(79,164),new e.Point(79,167),new e.Point(79,169),new e.Point(79,173),new e.Point(79,178),new e.Point(79,183),new e.Point(80,189),new e.Point(80,193),new e.Point(80,198),new e.Point(80,202),new e.Point(81,208),new e.Point(81,210),new e.Point(81,216),new e.Point(82,222),new e.Point(82,224),new e.Point(82,227),new e.Point(83,229),new e.Point(83,231),new e.Point(85,230),new e.Point(88,232),new e.Point(90,233),new e.Point(92,232),new e.Point(94,233),new e.Point(99,232),new e.Point(102,233),new e.Point(106,233),new e.Point(109,234),new e.Point(117,235),new e.Point(123,236),new e.Point(126,236),new e.Point(135,237),new e.Point(142,238),new e.Point(145,238),new e.Point(152,238),new e.Point(154,239),new e.Point(165,238),new e.Point(174,237),new e.Point(179,236),new e.Point(186,235),new e.Point(191,235),new e.Point(195,233),new e.Point(197,233),new e.Point(200,233),new e.Point(201,235),new e.Point(201,233),new e.Point(199,231),new e.Point(198,226),new e.Point(198,220),new e.Point(196,207),new e.Point(195,195),new e.Point(195,181),new e.Point(195,173),new e.Point(195,163),new e.Point(194,155),new e.Point(192,145),new e.Point(192,143),new e.Point(192,138),new e.Point(191,135),new e.Point(191,133),new e.Point(191,130),new e.Point(190,128),new e.Point(188,129),new e.Point(186,129),new e.Point(181,132),new e.Point(173,131),new e.Point(162,131),new e.Point(151,132),new e.Point(149,132),new e.Point(138,132),new e.Point(136,132),new e.Point(122,131),new e.Point(120,131),new e.Point(109,130),new e.Point(107,130),new e.Point(90,132),new e.Point(81,133),new e.Point(76,133)));i[3]=new n("circle",new Array(new e.Point(127,141),new e.Point(124,140),new e.Point(120,139),new e.Point(118,139),new e.Point(116,139),new e.Point(111,140),new e.Point(109,141),new e.Point(104,144),new e.Point(100,147),new e.Point(96,152),new e.Point(93,157),new e.Point(90,163),new e.Point(87,169),new e.Point(85,175),new e.Point(83,181),new e.Point(82,190),new e.Point(82,195),new e.Point(83,200),new e.Point(84,205),new e.Point(88,213),new e.Point(91,216),new e.Point(96,219),new e.Point(103,222),new e.Point(108,224),new e.Point(111,224),new e.Point(120,224),new e.Point(133,223),new e.Point(142,222),new e.Point(152,218),new e.Point(160,214),new e.Point(167,210),new e.Point(173,204),new e.Point(178,198),new e.Point(179,196),new e.Point(182,188),new e.Point(182,177),new e.Point(178,167),new e.Point(170,150),new e.Point(163,138),new e.Point(152,130),new e.Point(143,129),new e.Point(140,131),new e.Point(129,136),new e.Point(126,139)));i[4]=new n("check",new Array(new e.Point(91,185),new e.Point(93,185),new e.Point(95,185),new e.Point(97,185),new e.Point(100,188),new e.Point(102,189),new e.Point(104,190),new e.Point(106,193),new e.Point(108,195),new e.Point(110,198),new e.Point(112,201),new e.Point(114,204),new e.Point(115,207),new e.Point(117,210),new e.Point(118,212),new e.Point(120,214),new e.Point(121,217),new e.Point(122,219),new e.Point(123,222),new e.Point(124,224),new e.Point(126,226),new e.Point(127,229),new e.Point(129,231),new e.Point(130,233),new e.Point(129,231),new e.Point(129,228),new e.Point(129,226),new e.Point(129,224),new e.Point(129,221),new e.Point(129,218),new e.Point(129,212),new e.Point(129,208),new e.Point(130,198),new e.Point(132,189),new e.Point(134,182),new e.Point(137,173),new e.Point(143,164),new e.Point(147,157),new e.Point(151,151),new e.Point(155,144),new e.Point(161,137),new e.Point(165,131),new e.Point(171,122),new e.Point(174,118),new e.Point(176,114),new e.Point(177,112),new e.Point(177,114),new e.Point(175,116),new e.Point(173,118)));i[5]=new n("caret",new Array(new e.Point(79,245),new e.Point(79,242),new e.Point(79,239),new e.Point(80,237),new e.Point(80,234),new e.Point(81,232),new e.Point(82,230),new e.Point(84,224),new e.Point(86,220),new e.Point(86,218),new e.Point(87,216),new e.Point(88,213),new e.Point(90,207),new e.Point(91,202),new e.Point(92,200),new e.Point(93,194),new e.Point(94,192),new e.Point(96,189),new e.Point(97,186),new e.Point(100,179),new e.Point(102,173),new e.Point(105,165),new e.Point(107,160),new e.Point(109,158),new e.Point(112,151),new e.Point(115,144),new e.Point(117,139),new e.Point(119,136),new e.Point(119,134),new e.Point(120,132),new e.Point(121,129),new e.Point(122,127),new e.Point(124,125),new e.Point(126,124),new e.Point(129,125),new e.Point(131,127),new e.Point(132,130),new e.Point(136,139),new e.Point(141,154),new e.Point(145,166),new e.Point(151,182),new e.Point(156,193),new e.Point(157,196),new e.Point(161,209),new e.Point(162,211),new e.Point(167,223),new e.Point(169,229),new e.Point(170,231),new e.Point(173,237),new e.Point(176,242),new e.Point(177,244),new e.Point(179,250),new e.Point(181,255),new e.Point(182,257)));i[6]=new n("zig-zag",new Array(new e.Point(307,216),new e.Point(333,186),new e.Point(356,215),new e.Point(375,186),new e.Point(399,216),new e.Point(418,186)));i[7]=new n("arrow",new Array(new e.Point(68,222),new e.Point(70,220),new e.Point(73,218),new e.Point(75,217),new e.Point(77,215),new e.Point(80,213),new e.Point(82,212),new e.Point(84,210),new e.Point(87,209),new e.Point(89,208),new e.Point(92,206),new e.Point(95,204),new e.Point(101,201),new e.Point(106,198),new e.Point(112,194),new e.Point(118,191),new e.Point(124,187),new e.Point(127,186),new e.Point(132,183),new e.Point(138,181),new e.Point(141,180),new e.Point(146,178),new e.Point(154,173),new e.Point(159,171),new e.Point(161,170),new e.Point(166,167),new e.Point(168,167),new e.Point(171,166),new e.Point(174,164),new e.Point(177,162),new e.Point(180,160),new e.Point(182,158),new e.Point(183,156),new e.Point(181,154),new e.Point(178,153),new e.Point(171,153),new e.Point(164,153),new e.Point(160,153),new e.Point(150,154),new e.Point(147,155),new e.Point(141,157),new e.Point(137,158),new e.Point(135,158),new e.Point(137,158),new e.Point(140,157),new e.Point(143,156),new e.Point(151,154),new e.Point(160,152),new e.Point(170,149),new e.Point(179,147),new e.Point(185,145),new e.Point(192,144),new e.Point(196,144),new e.Point(198,144),new e.Point(200,144),new e.Point(201,147),new e.Point(199,149),new e.Point(194,157),new e.Point(191,160),new e.Point(186,167),new e.Point(180,176),new e.Point(177,179),new e.Point(171,187),new e.Point(169,189),new e.Point(165,194),new e.Point(164,196)));i[8]=new n("left square bracket",new Array(new e.Point(140,124),new e.Point(138,123),new e.Point(135,122),new e.Point(133,123),new e.Point(130,123),new e.Point(128,124),new e.Point(125,125),new e.Point(122,124),new e.Point(120,124),new e.Point(118,124),new e.Point(116,125),new e.Point(113,125),new e.Point(111,125),new e.Point(108,124),new e.Point(106,125),new e.Point(104,125),new e.Point(102,124),new e.Point(100,123),new e.Point(98,123),new e.Point(95,124),new e.Point(93,123),new e.Point(90,124),new e.Point(88,124),new e.Point(85,125),new e.Point(83,126),new e.Point(81,127),new e.Point(81,129),new e.Point(82,131),new e.Point(82,134),new e.Point(83,138),new e.Point(84,141),new e.Point(84,144),new e.Point(85,148),new e.Point(85,151),new e.Point(86,156),new e.Point(86,160),new e.Point(86,164),new e.Point(86,168),new e.Point(87,171),new e.Point(87,175),new e.Point(87,179),new e.Point(87,182),new e.Point(87,186),new e.Point(88,188),new e.Point(88,195),new e.Point(88,198),new e.Point(88,201),new e.Point(88,207),new e.Point(89,211),new e.Point(89,213),new e.Point(89,217),new e.Point(89,222),new e.Point(88,225),new e.Point(88,229),new e.Point(88,231),new e.Point(88,233),new e.Point(88,235),new e.Point(89,237),new e.Point(89,240),new e.Point(89,242),new e.Point(91,241),new e.Point(94,241),new e.Point(96,240),new e.Point(98,239),new e.Point(105,240),new e.Point(109,240),new e.Point(113,239),new e.Point(116,240),new e.Point(121,239),new e.Point(130,240),new e.Point(136,237),new e.Point(139,237),new e.Point(144,238),new e.Point(151,237),new e.Point(157,236),new e.Point(159,237)));i[9]=new n("right square bracket",new Array(new e.Point(112,138),new e.Point(112,136),new e.Point(115,136),new e.Point(118,137),new e.Point(120,136),new e.Point(123,136),new e.Point(125,136),new e.Point(128,136),new e.Point(131,136),new e.Point(134,135),new e.Point(137,135),new e.Point(140,134),new e.Point(143,133),new e.Point(145,132),new e.Point(147,132),new e.Point(149,132),new e.Point(152,132),new e.Point(153,134),new e.Point(154,137),new e.Point(155,141),new e.Point(156,144),new e.Point(157,152),new e.Point(158,161),new e.Point(160,170),new e.Point(162,182),new e.Point(164,192),new e.Point(166,200),new e.Point(167,209),new e.Point(168,214),new e.Point(168,216),new e.Point(169,221),new e.Point(169,223),new e.Point(169,228),new e.Point(169,231),new e.Point(166,233),new e.Point(164,234),new e.Point(161,235),new e.Point(155,236),new e.Point(147,235),new e.Point(140,233),new e.Point(131,233),new e.Point(124,233),new e.Point(117,235),new e.Point(114,238),new e.Point(112,238)));i[10]=new n("v",new Array(new e.Point(89,164),new e.Point(90,162),new e.Point(92,162),new e.Point(94,164),new e.Point(95,166),new e.Point(96,169),new e.Point(97,171),new e.Point(99,175),new e.Point(101,178),new e.Point(103,182),new e.Point(106,189),new e.Point(108,194),new e.Point(111,199),new e.Point(114,204),new e.Point(117,209),new e.Point(119,214),new e.Point(122,218),new e.Point(124,222),new e.Point(126,225),new e.Point(128,228),new e.Point(130,229),new e.Point(133,233),new e.Point(134,236),new e.Point(136,239),new e.Point(138,240),new e.Point(139,242),new e.Point(140,244),new e.Point(142,242),new e.Point(142,240),new e.Point(142,237),new e.Point(143,235),new e.Point(143,233),new e.Point(145,229),new e.Point(146,226),new e.Point(148,217),new e.Point(149,208),new e.Point(149,205),new e.Point(151,196),new e.Point(151,193),new e.Point(153,182),new e.Point(155,172),new e.Point(157,165),new e.Point(159,160),new e.Point(162,155),new e.Point(164,150),new e.Point(165,148),new e.Point(166,146)));i[11]=new n("delete",new Array(new e.Point(123,129),new e.Point(123,131),new e.Point(124,133),new e.Point(125,136),new e.Point(127,140),new e.Point(129,142),new e.Point(133,148),new e.Point(137,154),new e.Point(143,158),new e.Point(145,161),new e.Point(148,164),new e.Point(153,170),new e.Point(158,176),new e.Point(160,178),new e.Point(164,183),new e.Point(168,188),new e.Point(171,191),new e.Point(175,196),new e.Point(178,200),new e.Point(180,202),new e.Point(181,205),new e.Point(184,208),new e.Point(186,210),new e.Point(187,213),new e.Point(188,215),new e.Point(186,212),new e.Point(183,211),new e.Point(177,208),new e.Point(169,206),new e.Point(162,205),new e.Point(154,207),new e.Point(145,209),new e.Point(137,210),new e.Point(129,214),new e.Point(122,217),new e.Point(118,218),new e.Point(111,221),new e.Point(109,222),new e.Point(110,219),new e.Point(112,217),new e.Point(118,209),new e.Point(120,207),new e.Point(128,196),new e.Point(135,187),new e.Point(138,183),new e.Point(148,167),new e.Point(157,153),new e.Point(163,145),new e.Point(165,142),new e.Point(172,133),new e.Point(177,127),new e.Point(179,127),new e.Point(180,125)));i[12]=new n("left curly brace",new Array(new e.Point(150,116),new e.Point(147,117),new e.Point(145,116),new e.Point(142,116),new e.Point(139,117),new e.Point(136,117),new e.Point(133,118),new e.Point(129,121),new e.Point(126,122),new e.Point(123,123),new e.Point(120,125),new e.Point(118,127),new e.Point(115,128),new e.Point(113,129),new e.Point(112,131),new e.Point(113,134),new e.Point(115,134),new e.Point(117,135),new e.Point(120,135),new e.Point(123,137),new e.Point(126,138),new e.Point(129,140),new e.Point(135,143),new e.Point(137,144),new e.Point(139,147),new e.Point(141,149),new e.Point(140,152),new e.Point(139,155),new e.Point(134,159),new e.Point(131,161),new e.Point(124,166),new e.Point(121,166),new e.Point(117,166),new e.Point(114,167),new e.Point(112,166),new e.Point(114,164),new e.Point(116,163),new e.Point(118,163),new e.Point(120,162),new e.Point(122,163),new e.Point(125,164),new e.Point(127,165),new e.Point(129,166),new e.Point(130,168),new e.Point(129,171),new e.Point(127,175),new e.Point(125,179),new e.Point(123,184),new e.Point(121,190),new e.Point(120,194),new e.Point(119,199),new e.Point(120,202),new e.Point(123,207),new e.Point(127,211),new e.Point(133,215),new e.Point(142,219),new e.Point(148,220),new e.Point(151,221)));i[13]=new n("right curly brace",new Array(new e.Point(117,132),new e.Point(115,132),new e.Point(115,129),new e.Point(117,129),new e.Point(119,128),new e.Point(122,127),new e.Point(125,127),new e.Point(127,127),new e.Point(130,127),new e.Point(133,129),new e.Point(136,129),new e.Point(138,130),new e.Point(140,131),new e.Point(143,134),new e.Point(144,136),new e.Point(145,139),new e.Point(145,142),new e.Point(145,145),new e.Point(145,147),new e.Point(145,149),new e.Point(144,152),new e.Point(142,157),new e.Point(141,160),new e.Point(139,163),new e.Point(137,166),new e.Point(135,167),new e.Point(133,169),new e.Point(131,172),new e.Point(128,173),new e.Point(126,176),new e.Point(125,178),new e.Point(125,180),new e.Point(125,182),new e.Point(126,184),new e.Point(128,187),new e.Point(130,187),new e.Point(132,188),new e.Point(135,189),new e.Point(140,189),new e.Point(145,189),new e.Point(150,187),new e.Point(155,186),new e.Point(157,185),new e.Point(159,184),new e.Point(156,185),new e.Point(154,185),new e.Point(149,185),new e.Point(145,187),new e.Point(141,188),new e.Point(136,191),new e.Point(134,191),new e.Point(131,192),new e.Point(129,193),new e.Point(129,195),new e.Point(129,197),new e.Point(131,200),new e.Point(133,202),new e.Point(136,206),new e.Point(139,211),new e.Point(142,215),new e.Point(145,220),new e.Point(147,225),new e.Point(148,231),new e.Point(147,239),new e.Point(144,244),new e.Point(139,248),new e.Point(134,250),new e.Point(126,253),new e.Point(119,253),new e.Point(115,253)));i[14]=new n("star",new Array(new e.Point(75,250),new e.Point(75,247),new e.Point(77,244),new e.Point(78,242),new e.Point(79,239),new e.Point(80,237),new e.Point(82,234),new e.Point(82,232),new e.Point(84,229),new e.Point(85,225),new e.Point(87,222),new e.Point(88,219),new e.Point(89,216),new e.Point(91,212),new e.Point(92,208),new e.Point(94,204),new e.Point(95,201),new e.Point(96,196),new e.Point(97,194),new e.Point(98,191),new e.Point(100,185),new e.Point(102,178),new e.Point(104,173),new e.Point(104,171),new e.Point(105,164),new e.Point(106,158),new e.Point(107,156),new e.Point(107,152),new e.Point(108,145),new e.Point(109,141),new e.Point(110,139),new e.Point(112,133),new e.Point(113,131),new e.Point(116,127),new e.Point(117,125),new e.Point(119,122),new e.Point(121,121),new e.Point(123,120),new e.Point(125,122),new e.Point(125,125),new e.Point(127,130),new e.Point(128,133),new e.Point(131,143),new e.Point(136,153),new e.Point(140,163),new e.Point(144,172),new e.Point(145,175),new e.Point(151,189),new e.Point(156,201),new e.Point(161,213),new e.Point(166,225),new e.Point(169,233),new e.Point(171,236),new e.Point(174,243),new e.Point(177,247),new e.Point(178,249),new e.Point(179,251),new e.Point(180,253),new e.Point(180,255),new e.Point(179,257),new e.Point(177,257),new e.Point(174,255),new e.Point(169,250),new e.Point(164,247),new e.Point(160,245),new e.Point(149,238),new e.Point(138,230),new e.Point(127,221),new e.Point(124,220),new e.Point(112,212),new e.Point(110,210),new e.Point(96,201),new e.Point(84,195),new e.Point(74,190),new e.Point(64,182),new e.Point(55,175),new e.Point(51,172),new e.Point(49,170),new e.Point(51,169),new e.Point(56,169),new e.Point(66,169),new e.Point(78,168),new e.Point(92,166),new e.Point(107,164),new e.Point(123,161),new e.Point(140,162),new e.Point(156,162),new e.Point(171,160),new e.Point(173,160),new e.Point(186,160),new e.Point(195,160),new e.Point(198,161),new e.Point(203,163),new e.Point(208,163),new e.Point(206,164),new e.Point(200,167),new e.Point(187,172),new e.Point(174,179),new e.Point(172,181),new e.Point(153,192),new e.Point(137,201),new e.Point(123,211),new e.Point(112,220),new e.Point(99,229),new e.Point(90,237),new e.Point(80,244),new e.Point(73,250),new e.Point(69,254),new e.Point(69,252)));i[15]=new n("pigtail",new Array(new e.Point(81,219),new e.Point(84,218),new e.Point(86,220),new e.Point(88,220),new e.Point(90,220),new e.Point(92,219),new e.Point(95,220),new e.Point(97,219),new e.Point(99,220),new e.Point(102,218),new e.Point(105,217),new e.Point(107,216),new e.Point(110,216),new e.Point(113,214),new e.Point(116,212),new e.Point(118,210),new e.Point(121,208),new e.Point(124,205),new e.Point(126,202),new e.Point(129,199),new e.Point(132,196),new e.Point(136,191),new e.Point(139,187),new e.Point(142,182),new e.Point(144,179),new e.Point(146,174),new e.Point(148,170),new e.Point(149,168),new e.Point(151,162),new e.Point(152,160),new e.Point(152,157),new e.Point(152,155),new e.Point(152,151),new e.Point(152,149),new e.Point(152,146),new e.Point(149,142),new e.Point(148,139),new e.Point(145,137),new e.Point(141,135),new e.Point(139,135),new e.Point(134,136),new e.Point(130,140),new e.Point(128,142),new e.Point(126,145),new e.Point(122,150),new e.Point(119,158),new e.Point(117,163),new e.Point(115,170),new e.Point(114,175),new e.Point(117,184),new e.Point(120,190),new e.Point(125,199),new e.Point(129,203),new e.Point(133,208),new e.Point(138,213),new e.Point(145,215),new e.Point(155,218),new e.Point(164,219),new e.Point(166,219),new e.Point(177,219),new e.Point(182,218),new e.Point(192,216),new e.Point(196,213),new e.Point(199,212),new e.Point(201,211)));e.recognize=function(e){e=p(e,s);var t=d(e);e=v(e,-t);e=m(e,o);e=g(e,u);var n=y(e);var a=+Infinity;var h=-1;for(var b=0;b<i.length;b++){var E=w(e,i[b],-l,+l,c);if(E<a){a=E;h=b}}return h==-1?new r("No match.",0):new r(i[h].name,1-a/f)};e.addGesture=function(e,t){i[i.length]=new n(e,t);var r=0;for(var s=0;s<i.length;s++){if(i[s].name==e){r++}}return r};if(typeof window.define==="function"&&window.define.amd){window.define([],function(){return e})}})(this.$1=this.$1||{})
