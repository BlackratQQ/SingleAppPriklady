import home from './views/home.js';
import podil from './views/derivace/podil.js';
import soucetRozdil from './views/derivace/soucet-a-rozdil.js';
import slozenaFunkce from './views/derivace/slozena-funkce.js';
import soucin from './views/derivace/soucin.js';
import druhyRad from './views/diferencialni-rovnice/druheho-radu.js';
import prvniRad from './views/diferencialni-rovnice/prvniho-radu.js';
import cyklometricka from './views/funkce/cyklometricka.js';
import exponencialni from './views/funkce/exponencialni.js';
import goniometricka from './views/funkce/goniometricka.js';
import kvadraticke from './views/funkce/kvadraticke.js';
import linearneLomena from './views/funkce/linearne-lomena.js';
import linearni from './views/funkce/linearni.js';
import logaritmicka from './views/funkce/logaritmicka.js';
import mocninne from './views/funkce/mocninne.js';
import ntaOdmocnina from './views/funkce/n-ta-odmocnina.js';
import neurcite from './views/integraly/neurcite.js';
import obsahyPloch from './views/integraly/obsahy-ploch.js';
import urcite from './views/integraly/urcite.js';
import deleniNulou from './views/limity-funkci/deleni-nulou.js';
import lHospitalovoPravidlo from './views/limity-funkci/l-hospitalovo-pravidlo.js';
import pouzitiVzorcu from './views/limity-funkci/pouziti-vzorcu.js';
import vNevlastnimBode from './views/limity-funkci/v-nevlastnim-bode.js';
import zakladni from './views/limity-funkci/zakladni.js';
import determinanty from './views/matice/determinanty.js';
import hodnosti from './views/matice/hodnosti.js';
import inverzniMatice from './views/matice/inverzni-matice.js';
import maticoveRovnice from './views/matice/maticove-rovnice.js';
import vlasniCislaVektory from './views/matice/vlastni-cisla-a-vektory.js';
import zakladniOperace from './views/matice/zakladni-operace.js';
import cramerovoPravidlo from './views/soustavy-linearnich-rovnic/cramerovo-pravidlo.js';
import homogenni from './views/soustavy-linearnich-rovnic/homogenni.js';
import nehomogenni from './views/soustavy-linearnich-rovnic/nehomogenni.js';
import asymptotyFunkce from './views/nahodne/asymptoty-funkce.js';
import bodyNespojitosti from './views/nahodne/body-nespojitosti.js';
import definicniObor from './views/nahodne/definicni-obor.js';
import extremy from './views/nahodne/extremy.js';
import monotonie from './views/nahodne/monotonie.js';
import prubehFunkce from './views/nahodne/prubeh-funkce.js';
import tayloruvPolynom from './views/nahodne/tayloruv-polynom.js';
import tecnyNormaly from './views/nahodne/tecny-a-normaly.js';
import zakrivenostInflexniBody from './views/nahodne/zakrivenost-a-inflexni-body.js';

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: '/', view: home },
    { path: '/derivace/podil', view: podil },
    { path: '/derivace/soucet-a-rozdil', view: soucetRozdil },
    { path: '/derivace/slozena-funkce', view: slozenaFunkce },
    { path: '/derivace/soucin', view: soucin },
    { path: '/diferencialni-rovnice/druheho-radu', view: druhyRad },
    { path: '/diferencialni-rovnice/prvniho-radu', view: prvniRad },
    { path: '/funkce/cyklometricka', view: cyklometricka },
    { path: '/funkce/exponencialni', view: exponencialni },
    { path: '/funkce/goniometricka', view: goniometricka },
    { path: '/funkce/kvadraticke', view: kvadraticke },
    { path: '/funkce/linearne-lomena', view: linearneLomena },
    { path: '/funkce/linearni', view: linearni },
    { path: '/funkce/logaritmicka', view: logaritmicka },
    { path: '/funkce/mocninne', view: mocninne },
    { path: '/funkce/n-ta-odmocnina', view: ntaOdmocnina },
    { path: '/integraly/neurcite', view: neurcite },
    { path: '/integraly/obsahy-ploch', view: obsahyPloch },
    { path: '/integraly/urcite', view: urcite },
    { path: '/limity-funkci/deleni-nulou', view: deleniNulou },
    {
      path: '/limity-funkci/l-hospitalovo-pravidlo',
      view: lHospitalovoPravidlo,
    },
    { path: '/limity-funkci/pouziti-vzorcu', view: pouzitiVzorcu },
    { path: '/limity-funkci/v-nevlastnim-bode', view: vNevlastnimBode },
    { path: '/limity-funkci/zakladni', view: zakladni },
    { path: '/matice/determinanty', view: determinanty },
    { path: '/matice/hodnosti', view: hodnosti },
    { path: '/matice/inverzni-matice', view: inverzniMatice },
    { path: '/matice/maticove-rovnice', view: maticoveRovnice },
    { path: '/matice/vlastni-cisla-a-vektory', view: vlasniCislaVektory },
    { path: '/matice/zakladni-operace', view: zakladniOperace },
    {
      path: '/soustavy-linearnich-rovnic/cramerovo-pravidlo',
      view: cramerovoPravidlo,
    },
    { path: '/soustavy-linearnich-rovnic/homogenni', view: homogenni },
    { path: '/soustavy-linearnich-rovnic/nehomogenni', view: nehomogenni },
    { path: '/asymptoty-funkce', view: asymptotyFunkce },
    { path: '/body-nespojitosti', view: bodyNespojitosti },
    { path: '/definicni-obor', view: definicniObor },
    { path: '/extremy', view: extremy },
    { path: '/monotonie', view: monotonie },
    { path: '/prubeh-funkce', view: prubehFunkce },
    { path: '/tayloruv-polynom', view: tayloruvPolynom },
    { path: '/tecny-a-normaly', view: tecnyNormaly },
    { path: '/zakrivenost-a-inflexni-body', view: zakrivenostInflexniBody },
  ];

  //test each route for potential match
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find(
    potentialMatches => potentialMatches.isMatch
  );

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  document.querySelector('#app').innerHTML = await view.getHtml();

  // console.log(match.route.view());
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
