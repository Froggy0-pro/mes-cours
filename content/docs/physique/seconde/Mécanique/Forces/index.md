---
title: "2) Forces et principe d'inertie"
weight: 1
---
## Les forces extérieures

Le mouvement (ou l'immobilité) d'un système dépend des forces extérieures auxquelles il est soumis. Les forces sont représentées par des **vecteurs** partant d'un point d'application (souvent le centre de masse du système ou le point de contact). Une force a donc :
- une direction, indiquant par quel axe elle est portée,
- un sens (vers le haut, le bas, etc.),
- une norme : sa valeur exprimée en **Newton $N$**.

## Forces classiques en référentiel terrestre

1) Le **poids** : toujours orienté vers le bas, il s'applique sur tout objet possédant une masse, il est donc toujours présent. L'expression de sa norme est : $\boxed{P=m*g}$ avec :
- $m$ la masse en **kilogrammes** $kg$
- $g$ l'intensité de la pesanteur, sur Terre $g \approx 9,81 N/kg$

2) La **réaction (normale) du support** : si le système est posé sur un support (le sol, une table, etc.), alors le support exerce sur le système une force qui le repousse perpendiculairement au support, d'où l'adjectif "normal".

3) La **tension du fil** : si le système n'est pas posé mais plutôt suspendu par un fil, alors le fil exerce sur le système une force similaire le tirant le long du fil.

4) Les **frottements** : si le système est en mouvement dans un milieu matériel (air, eau, etc.), alors cette force viendra s'opposer au mouvement. Il est courant de les négliger pour simplifier les calculs, comme dans le cas de la **chute libre**.

On ne considèrera comme "forces" que les actions qui s'exercent en continu. Si dans un exercice on lance une balle, le lancer n'est pas continu donc on ne parlera pas de force. En revanche, si une voiture roule, on considèrera sa **force motrice**, qui permet de la pousser en continu vers l'avant.

<div class="center">
  <img src="/images/chimie/poids.png" width="200">
  <img src="/images/chimie/reaction_support.png" width="170">
  <img src="/images/chimie/tension_fil.png" width="150">
</div>

## Première loi de Newton

En 1687, Isaac Newton énonce les lois qui constituent aujourd'hui les bases de la mécanique classique. D'après la **première loi de Newton**, <u>si la somme des forces s'exerçant sur un système est nulle, alors celui-ci est immobile ou bien en mouvement rectiligne uniforme</u> : c'est le **principe d'inertie**. Cette loi est valable dans les deux sens, donc si je sais qu'un système est immobile ou en mouvement rectiligne uniforme, les forces qui s'exercent sur lui se compensent forcément.

Attention, quand on parle de somme des forces qui s'annule, on parle de la somme des vecteurs (vecteur nul), pas des normes, qui sont quant à elles strictement positives. On a donc : 

$$\boxed{\sum \vec{F}_{ext} = \vec{0} <=> \text{système au repos ou en mouvement rectiligne uniforme}}$$

<u>Méthodologie des exercices</u>:

Dans les exercices, la première loi de Newton sert soit à trouver la valeur de la norme d'une force dans un système au repos (car sinon on ne connaît que la formule du poids), soit à l'inverse à montrer qu'un système est au repos (ou non).

On commence toujours par **définir le système** étudié, puis le **référentiel**, supposé **galiléen** (c'est-à-dire que les lois de Newton s'y appliquent). Ensuite on réalise un **bilan des forces** sur le système et on s'adapte à partir de là.

<u>Exemple</u>: J'étudie un camion de masse $m=40000kg$ dans le référentiel terrestre supposé galiléen. Les forces qui s'appliquent lors de la montée d'une pente sont le poids, la réaction normale de la route, la force motrice et les frottements. En additionnant les vecteurs force, je trouve $\sum \vec{F}_{ext} \neq \vec{0}$ donc d'après la première loi de Newton, le camion n'est pas en mouvement rectiligne uniforme.

<div class="center">
  <img src="/images/chimie/bdf.png" width="500">
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