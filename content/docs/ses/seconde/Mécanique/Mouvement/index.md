---
title: "1) Description du mouvement"
weight: 1
---
## Décrire un mouvement

Dans les exercices de mécanique, on étudie le mouvement d'un **système** (un objet, une personne, etc.). Deux éléments importants pour décrire ce mouvement sont :
- sa trajectoire : **rectiligne** (tout droit), **circulaire**/elliptique, ou pour toute autre trajectoire, curviligne,
- son accélération : **accéléré**, **ralenti/décéléré**, ou **uniforme** (vitesse constante).

L'analyse d'un mouvement dépend de la position relative de l'observateur et du système, on parle donc de **relativité du mouvement**.

<u>Exemple</u>: Un train transporte des passagers à une vitesse constante de $100km/h$. Du point de vue du sol, ceux-ci sont en mouvement rectiligne uniforme, car ils bougent avec le train. En revanche, du point de vue du train, les passagers sont immobiles puisque leur position dans le train ne change pas (en supposant qu'ils restent assis). 

De manière générale, on définit le **référentiel** au début de l'étude et on n'en change pas. Il y a 3 principaux référentiels à connaître:
- le référentiel **terrestre**, qui a comme origine le sol. On l'utilise pour tous les problèmes sur Terre,
- le référentiel **géocentrique**, qui a comme origine le centre de la Terre. On l'utilise pour tous les problèmes de satellites en orbite autour de la Terre,
- le référentiel **héliocentrique**, qui a comme origine le Soleil. Plus rare, on l'utilise pour les autres problèmes dans l'espace loin de la Terre.

## Chronophotographie

Pour étudier le mouvement d'un système, on peut noter sa position dans un repère à différents instants, souvent espacés de la même durée, ce qu'on appelle une **chronophotographie**.

<u>Remarque</u>: **Attention aux échelles**, que ce soit pour les distances ou les vitesses. Il faut quasiment toujours faire des produits en croix pour convertir les valeurs à la bonne échelle.

<div class="center">
<img src="/images/chimie/chronophotographie.png" alt="Chronophotographie" width="500">
</div>

Si chaque position est repérée après le même intervalle de temps, on peut en déduire si le mouvement est uniforme (l'écart entre deux positions successives reste constant --> cas 1), accéléré (l'écart entre deux positions successives augmente progressivement --> cas 2) ou décéléré (l'écart entre deux positions successives diminue progressivement --> cas 3).

<div class="center">
<img src="/images/chimie/accélération.png" alt="Accélération" width="400">
</div>

Pour trouver la **vitesse moyenne** du système entre deux points, il suffit de mesurer la distance entre ces points sur l'image et de la diviser par le temps passé avec le classique : $\boxed{v = \frac{d}{t}}$ avec $d$ en **mètres** et $t$ en **secondes** (convertir!!!). 

On parle parfois également de **vitesse instantanée**, qui correspond à la vitesse du système à un instant précis.

## Vecteur déplacement et vecteur vitesse

Le **vecteur déplacement** est une simple flèche reliant deux positions du système. Sa norme est égale à la distance entre les deux points.

Pour tracer le **vecteur vitesse** en un point, on suit les étapes suivantes:
1) on mesure la distance entre le point choisi et le point suivant de la chronophotographie. On convertit en mètre en faisant attention à l'échelle,
2) on divise par le temps passé entre les deux points, donc souvent l'intervalle de temps de la chronophotographie, en secondes,
3) on utilise l'échelle de conversion donnée pour représenter nos $m/s$ en $cm$ sur le schéma (<u>cette échelle n'est pas la même que l'échelle des distances</u>) et on trace un vecteur ayant cette norme partant du point choisi.

<div class="center">
<img src="/images/chimie/vecteur.png" alt="Vecteurs" width="450">
</div>

<details>
<summary>Exercice</summary>

1. Calculer la fréquence d’un son de période $T = 0{,}005 \, s$.  
2. Ce son est-il audible par l’homme ?  
3. Dans quel milieu le son se propage-t-il le plus vite ?  
4. Quelle est la différence entre un son aigu et un son grave ?

</details>

<details>
<summary>Solution</summary>

1. $f = \frac{1}{0{,}005} = 200 \, Hz$  
2. Oui (entre 20 et 20 000 Hz)  
3. Dans les solides (ex : acier)  
4. Son aigu → fréquence élevée ; son grave → fréquence faible  

</details>